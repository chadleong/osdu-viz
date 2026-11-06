import { groupKey } from "./schemaVersions"

export type Referrer = {
  /** index/bundle path of the schema that references the target */
  path: string
  /** "ref" = JSON-schema $ref (abstract included); "relationship" = x-osdu-relationship entity link */
  via: "ref" | "relationship"
  /** property names holding the relationship (relationship only; may be empty for $ref) */
  properties: string[]
}

export type ReverseRefs = Map<string, Referrer[]>

const stripMin = (p: string) => p.replace(/\.min\.json$/i, ".json")

/** Resolve "../abstract/Foo.1.0.0.json" against the referencing schema's path. */
function resolveRelative(fromPath: string, ref: string): string {
  const parts = fromPath.split("/").slice(0, -1)
  for (const seg of ref.split("/")) {
    if (seg === "..") parts.pop()
    else if (seg !== "." && seg !== "") parts.push(seg)
  }
  return parts.join("/")
}

const dirAndBase = (p: string) => p.split("/").slice(-2).join("/").toLowerCase()

/**
 * Build target-path -> referrers for every loaded schema. `$ref`s point at an exact version, so they only
 * register on that version; `x-osdu-relationship` links are version-less and register on every version.
 */
export function buildReverseRefs(index: Record<string, any>): ReverseRefs {
  const paths = Object.keys(index)
  const byFull = new Map<string, string>()
  const byDirBase = new Map<string, string>()
  const byGroup = new Map<string, string[]>() // "master-data/wellbore" -> all version paths
  for (const p of paths) {
    const norm = stripMin(p).toLowerCase()
    byFull.set(norm, p)
    byDirBase.set(dirAndBase(norm), p)
    const g = dirAndBase(groupKey({ path: p }) + ".json").replace(/\.json$/, "")
    const list = byGroup.get(g)
    if (list) list.push(p)
    else byGroup.set(g, [p])
  }

  const result = new Map<string, Map<string, Referrer>>()
  const add = (target: string, source: string, via: Referrer["via"], prop?: string) => {
    if (target === source) return
    let bySource = result.get(target)
    if (!bySource) result.set(target, (bySource = new Map()))
    const key = `${source}|${via}`
    let r = bySource.get(key)
    if (!r) bySource.set(key, (r = { path: source, via, properties: [] }))
    if (prop && !r.properties.includes(prop)) r.properties.push(prop)
  }

  for (const source of paths) {
    const walk = (o: any, propPath: string[]) => {
      if (!o || typeof o !== "object") return
      if (Array.isArray(o)) {
        for (const v of o) walk(v, propPath)
        return
      }
      if (typeof o.$ref === "string" && !o.$ref.startsWith("#")) {
        const ref = o.$ref.split("#")[0]
        const target =
          byFull.get(stripMin(resolveRelative(source, ref)).toLowerCase()) ||
          byDirBase.get(dirAndBase(stripMin(ref)))
        if (target) add(target, source, "ref")
      }
      const rel = o["x-osdu-relationship"]
      if (Array.isArray(rel)) {
        for (const r of rel) {
          if (!r?.EntityType) continue
          const group = String(r.GroupType || "").replace(/\//g, "")
          const targets = byGroup.get(`${group}/${r.EntityType}`.toLowerCase())
          for (const t of targets || []) add(t, source, "relationship", propPath.join("."))
        }
      }
      for (const [k, v] of Object.entries(o)) {
        if (k === "x-osdu-relationship" || (typeof v !== "object" && k !== "$ref")) continue
        if (v && typeof v === "object") walk(v, k === "properties" || k === "items" || /^(allOf|anyOf|oneOf|\d+)$/.test(k) ? propPath : [...propPath, k])
      }
    }
    walk(index[source], [])
  }

  const out: ReverseRefs = new Map()
  for (const [target, bySource] of result) out.set(target, Array.from(bySource.values()))
  return out
}
