import { findBestMatch } from "./schemaMatch"
import { isDeprecated } from "./deprecated"

// ---------------------------------------------------------------------------------------------------------------
// Property-level diff: flatten each schema (inlining $ref'd abstract schemas) and compare property by property
// ---------------------------------------------------------------------------------------------------------------

export type PropInfo = {
  /** dotted path, e.g. "data.VerticalMeasurements.VerticalMeasurement" */
  name: string
  type?: string
  title?: string
  description?: string
  pattern?: string
  format?: string
  /** $ref the property (or its items) points to, short form ("AbstractFacility.1.0.0") */
  ref?: string
  /** x-osdu-relationship targets, e.g. "master-data--Field" */
  relationships?: string
  enum?: string
  required?: boolean
  deprecated?: boolean
}

/** Fields compared between versions, in display order. */
export const COMPARED_FIELDS = [
  "type",
  "ref",
  "relationships",
  "required",
  "deprecated",
  "title",
  "description",
  "pattern",
  "format",
  "enum",
] as const
export type ComparedField = (typeof COMPARED_FIELDS)[number]

export const FIELD_LABELS: Record<ComparedField, string> = {
  type: "type",
  ref: "$ref",
  relationships: "relationship",
  required: "required",
  deprecated: "deprecated",
  title: "title",
  description: "description",
  pattern: "pattern",
  format: "format",
  enum: "enum",
}

const shortRef = (ref: string) =>
  ref
    .split("/")
    .pop()!
    .replace(/(\.min)?\.json$/i, "")

function typeOf(v: any): string | undefined {
  if (!v || typeof v !== "object") return undefined
  const t = Array.isArray(v.type) ? v.type.join("|") : v.type
  if (t === "array" && v.items) {
    const it = typeOf(v.items) || (v.items.$ref ? shortRef(v.items.$ref) : undefined)
    return it ? `array<${it}>` : "array"
  }
  if (t) return t
  if (v.$ref) return "object"
  if (v.properties || v.allOf || v.anyOf || v.oneOf) return "object"
  return undefined
}

function relationshipsOf(v: any): string | undefined {
  const rels = v?.["x-osdu-relationship"] || v?.items?.["x-osdu-relationship"]
  if (!Array.isArray(rels) || !rels.length) return undefined
  return rels
    .map((r: any) => [r.GroupType, r.EntityType].filter(Boolean).join("--"))
    .filter(Boolean)
    .join(", ")
}

/**
 * Flatten a schema into one entry per property path. `$ref`s are resolved through `index` (path -> schema) and
 * their properties inlined under the referencing path, so changes inherited from abstract schemas show up too.
 */
export function flattenSchema(schema: any, index: Record<string, any> = {}): Map<string, PropInfo> {
  const out = new Map<string, PropInfo>()
  const required = new Set<string>()
  const items = Object.keys(index).map((path) => ({ path }))
  const refCache = new Map<string, any>()
  const resolve = (ref: string) => {
    if (refCache.has(ref)) return refCache.get(ref)
    const hit = findBestMatch(ref, items)?.path
    const s = hit ? index[hit] : undefined
    refCache.set(ref, s)
    return s
  }

  const add = (info: PropInfo) => {
    const cur = out.get(info.name)
    if (!cur) {
      out.set(info.name, info)
      return
    }
    // duplicates (e.g. a property re-declared in another allOf branch): fill in what the first one lacked
    for (const [k, v] of Object.entries(info)) {
      if (v !== undefined && (cur as any)[k] === undefined) (cur as any)[k] = v
    }
  }

  function walk(o: any, path: string[], chain: Set<string>, depth: number) {
    if (!o || typeof o !== "object" || depth > 40) return
    if (typeof o.$ref === "string" && !o.$ref.startsWith("#")) {
      const key = o.$ref
      if (!chain.has(key)) {
        const target = resolve(key)
        if (target) {
          const next = new Set(chain)
          next.add(key)
          walk(target, path, next, depth + 1)
        }
      }
    }
    if (Array.isArray(o.required)) {
      for (const r of o.required) required.add([...path, r].join("."))
    }
    if (o.properties && typeof o.properties === "object") {
      for (const [k, v] of Object.entries<any>(o.properties)) {
        const name = [...path, k].join(".")
        const refStr = v?.$ref || v?.items?.$ref
        add({
          name,
          type: typeOf(v),
          title: v?.title,
          description: v?.description,
          pattern: v?.pattern ?? v?.items?.pattern,
          format: v?.format ?? v?.items?.format,
          ref: typeof refStr === "string" ? shortRef(refStr) : undefined,
          relationships: relationshipsOf(v),
          enum: Array.isArray(v?.enum) ? v.enum.join(", ") : undefined,
          deprecated: isDeprecated(v?.description) || v?.deprecated === true || undefined,
        })
        walk(v, [...path, k], chain, depth + 1)
      }
    }
    for (const key of ["allOf", "anyOf", "oneOf"]) {
      if (Array.isArray(o[key])) o[key].forEach((s: any) => walk(s, path, chain, depth + 1))
    }
    if (o.items) walk(o.items, path, chain, depth + 1)
  }

  walk(schema, [], new Set(), 0)
  for (const name of required) {
    const p = out.get(name)
    if (p) p.required = true
  }
  return out
}

export type PropStatus = "added" | "removed" | "changed" | "unchanged"
export type PropDiff = {
  name: string
  status: PropStatus
  left?: PropInfo
  right?: PropInfo
  changed: ComparedField[]
}

const norm = (v: unknown) => (v === undefined || v === false || v === "" ? undefined : v)

/**
 * Compare two flattened schemas. Rows keep the order of the newer (right) schema, with removed properties
 * placed right after the property that preceded them in the older one.
 */
export function diffProperties(left: Map<string, PropInfo>, right: Map<string, PropInfo>): PropDiff[] {
  const rows: PropDiff[] = []
  for (const [name, r] of right) {
    const l = left.get(name)
    if (!l) {
      rows.push({ name, status: "added", right: r, changed: [] })
      continue
    }
    const changed = COMPARED_FIELDS.filter((f) => norm(l[f]) !== norm(r[f]))
    rows.push({ name, status: changed.length ? "changed" : "unchanged", left: l, right: r, changed })
  }
  // insert removed properties after their predecessor from the left schema
  let prev: string | undefined
  for (const [name, l] of left) {
    if (!right.has(name)) {
      const at = prev === undefined ? -1 : rows.findIndex((x) => x.name === prev)
      const row: PropDiff = { name, status: "removed", left: l, changed: [] }
      if (at === -1 && prev !== undefined) rows.push(row)
      else rows.splice(at + 1, 0, row)
    }
    prev = name
  }
  return rows
}

export function summarize(rows: Array<{ status: PropStatus }>) {
  const s = { added: 0, removed: 0, changed: 0, unchanged: 0 }
  for (const r of rows) s[r.status]++
  return s
}

// ---------------------------------------------------------------------------------------------------------------
// Line diff (Myers O(ND)) and side-by-side rows for the raw JSON view
// ---------------------------------------------------------------------------------------------------------------

export type LineOp = { type: "equal" | "delete" | "insert"; a?: number; b?: number }

/** Give up on a fine-grained diff past this many edits and report the remainder as replaced. */
const MAX_EDITS = 4000

function myers(a: Int32Array, b: Int32Array): LineOp[] {
  const n = a.length
  const m = b.length
  const max = n + m
  if (max === 0) return []
  const off = max + 1
  const v = new Int32Array(2 * max + 3)
  const trace: Int32Array[] = []
  let found = -1
  for (let d = 0; d <= Math.min(max, MAX_EDITS); d++) {
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && v[off + k - 1] < v[off + k + 1]) ? v[off + k + 1] : v[off + k - 1] + 1
      let y = x - k
      while (x < n && y < m && a[x] === b[y]) {
        x++
        y++
      }
      v[off + k] = x
      if (x >= n && y >= m) found = d
      if (found !== -1) break
    }
    trace.push(v.slice(off - d, off + d + 1))
    if (found !== -1) break
  }
  if (found === -1) {
    const ops: LineOp[] = []
    for (let i = 0; i < n; i++) ops.push({ type: "delete", a: i })
    for (let j = 0; j < m; j++) ops.push({ type: "insert", b: j })
    return ops
  }

  const ops: LineOp[] = []
  let x = n
  let y = m
  for (let d = found; d > 0; d--) {
    const prev = trace[d - 1]
    const at = (k: number) => prev[k + d - 1]
    const k = x - y
    const prevK = k === -d || (k !== d && at(k - 1) < at(k + 1)) ? k + 1 : k - 1
    const prevX = at(prevK)
    const prevY = prevX - prevK
    while (x > prevX && y > prevY) {
      x--
      y--
      ops.push({ type: "equal", a: x, b: y })
    }
    if (prevK === k + 1) ops.push({ type: "insert", b: prevY })
    else ops.push({ type: "delete", a: prevX })
    x = prevX
    y = prevY
  }
  while (x > 0 && y > 0) {
    x--
    y--
    ops.push({ type: "equal", a: x, b: y })
  }
  return ops.reverse()
}

export function diffLines(a: string[], b: string[]): LineOp[] {
  const ids = new Map<string, number>()
  const id = (s: string) => {
    let v = ids.get(s)
    if (v === undefined) ids.set(s, (v = ids.size))
    return v
  }
  // trim the common prefix/suffix first: version bumps usually touch a small part of the file
  let start = 0
  while (start < a.length && start < b.length && a[start] === b[start]) start++
  let ea = a.length
  let eb = b.length
  while (ea > start && eb > start && a[ea - 1] === b[eb - 1]) {
    ea--
    eb--
  }
  const ops: LineOp[] = []
  for (let i = 0; i < start; i++) ops.push({ type: "equal", a: i, b: i })
  const A = Int32Array.from(a.slice(start, ea), id)
  const B = Int32Array.from(b.slice(start, eb), id)
  for (const op of myers(A, B)) {
    ops.push({
      type: op.type,
      a: op.a === undefined ? undefined : op.a + start,
      b: op.b === undefined ? undefined : op.b + start,
    })
  }
  for (let i = 0; i < a.length - ea; i++) ops.push({ type: "equal", a: ea + i, b: eb + i })
  return ops
}

export type SideRow = {
  kind: "equal" | "change" | "delete" | "insert"
  /** 0-based line indexes */
  a?: number
  b?: number
}

/** Pair up the deletes and inserts of each edit block so a modified line sits beside its replacement. */
export function toSideBySide(ops: LineOp[]): SideRow[] {
  const rows: SideRow[] = []
  let i = 0
  while (i < ops.length) {
    if (ops[i].type === "equal") {
      rows.push({ kind: "equal", a: ops[i].a, b: ops[i].b })
      i++
      continue
    }
    const dels: number[] = []
    const ins: number[] = []
    while (i < ops.length && ops[i].type !== "equal") {
      if (ops[i].type === "delete") dels.push(ops[i].a!)
      else ins.push(ops[i].b!)
      i++
    }
    for (let j = 0; j < Math.max(dels.length, ins.length); j++) {
      const a = dels[j]
      const b = ins[j]
      rows.push({ kind: a !== undefined && b !== undefined ? "change" : a !== undefined ? "delete" : "insert", a, b })
    }
  }
  return rows
}

/** Split two similar lines into [common prefix, differing middle, common suffix] for inline highlighting. */
export function inlineDiff(a: string, b: string): { a: [string, string, string]; b: [string, string, string] } {
  let p = 0
  while (p < a.length && p < b.length && a[p] === b[p]) p++
  let s = 0
  while (s < a.length - p && s < b.length - p && a[a.length - 1 - s] === b[b.length - 1 - s]) s++
  return {
    a: [a.slice(0, p), a.slice(p, a.length - s), a.slice(a.length - s)],
    b: [b.slice(0, p), b.slice(p, b.length - s), b.slice(b.length - s)],
  }
}

export type Hunk = { type: "rows"; rows: SideRow[] } | { type: "gap"; rows: SideRow[] }

/** Collapse runs of unchanged rows that are further than `context` rows from any change. */
export function collapseUnchanged(rows: SideRow[], context = 3): Hunk[] {
  const keep = new Uint8Array(rows.length)
  rows.forEach((r, i) => {
    if (r.kind === "equal") return
    for (let j = Math.max(0, i - context); j <= Math.min(rows.length - 1, i + context); j++) keep[j] = 1
  })
  const out: Hunk[] = []
  for (let i = 0; i < rows.length; i++) {
    const type = keep[i] ? "rows" : "gap"
    const last = out[out.length - 1]
    if (last && last.type === type) last.rows.push(rows[i])
    else out.push({ type, rows: [rows[i]] })
  }
  return out
}
