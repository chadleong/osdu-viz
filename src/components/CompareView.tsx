import React, { useEffect, useMemo, useState } from "react"
import { groupRef, versionOf, type SchemaGroup } from "../utils/schemaVersions"
import { compareHash, schemaHash } from "../utils/guides"
import {
  collapseUnchanged,
  diffLines,
  diffProperties,
  FIELD_LABELS,
  flattenSchema,
  inlineDiff,
  summarize,
  toSideBySide,
  COMPARED_FIELDS,
  type ComparedField,
  type PropDiff,
  type PropInfo,
  type SideRow,
} from "../utils/schemaDiff"

type Props = {
  groups: SchemaGroup[]
  /** path -> schema JSON */
  index: Record<string, any>
  /** make sure the schema at `path` is in `index` */
  loadSchema: (path: string) => Promise<void>
  /** "<group>/<Name>", e.g. "master-data/Well" */
  schemaRef?: string
  from?: string
  to?: string
}

type Mode = "properties" | "json"

const MODE_KEY = "osdu-viz:compare-mode"
const readMode = (): Mode => {
  try {
    return localStorage.getItem(MODE_KEY) === "json" ? "json" : "properties"
  } catch {
    return "properties"
  }
}

export default function CompareView({ groups, index, loadSchema, schemaRef, from, to }: Props) {
  const [mode, setModeState] = useState<Mode>(readMode)
  const setMode = (m: Mode) => {
    setModeState(m)
    try {
      localStorage.setItem(MODE_KEY, m)
    } catch {
      /* ignore */
    }
  }
  const [changesOnly, setChangesOnly] = useState(true)

  const multi = useMemo(() => groups.filter((g) => g.versions.length > 1), [groups])
  const group = useMemo(() => {
    if (!schemaRef) return undefined
    const k = "/" + schemaRef.toLowerCase()
    return groups.find((g) => g.key.endsWith(k))
  }, [groups, schemaRef])

  const versions = group?.versions || []
  const right = versions.find((v) => versionOf(v) === to) || versions[0]
  const left =
    versions.find((v) => versionOf(v) === from) ||
    versions[Math.min(versions.indexOf(right!) + 1, versions.length - 1)] ||
    versions[0]
  const ref = group ? groupRef(group.latest) : undefined

  const go = (r?: string, f?: string, t?: string) => window.location.replace(compareHash(r, f, t))

  useEffect(() => {
    if (left && !index[left.path]) loadSchema(left.path)
    if (right && !index[right.path]) loadSchema(right.path)
  }, [left?.path, right?.path]) // eslint-disable-line react-hooks/exhaustive-deps

  const schemaL = left ? index[left.path] : undefined
  const schemaR = right ? index[right.path] : undefined
  const indexSize = Object.keys(index).length

  const propRows = useMemo(() => {
    if (!schemaL || !schemaR || mode !== "properties") return null
    return diffProperties(flattenSchema(schemaL, index), flattenSchema(schemaR, index))
  }, [schemaL, schemaR, indexSize, mode]) // eslint-disable-line react-hooks/exhaustive-deps

  const json = useMemo(() => {
    if (!schemaL || !schemaR || mode !== "json") return null
    const a = JSON.stringify(schemaL, null, 2).split("\n")
    const b = JSON.stringify(schemaR, null, 2).split("\n")
    const rows = toSideBySide(diffLines(a, b))
    const stats = { added: 0, removed: 0, changed: 0 }
    for (const r of rows) {
      if (r.kind === "insert") stats.added++
      else if (r.kind === "delete") stats.removed++
      else if (r.kind === "change") stats.changed++
    }
    return { a, b, rows, stats }
  }, [schemaL, schemaR, mode])

  const sameVersion = left && right && left.path === right.path

  return (
    <div className="compare-view">
      <div className="compare-toolbar">
        {!group || versions.length < 2 ? (
          <span className="muted">Search for a schema in the box above to compare its versions.</span>
        ) : (
          <>
            <label className="compare-field">
              <span className="muted">From</span>
              <select
                value={left?.path}
                onChange={(e) => go(ref, versionOf(versions.find((v) => v.path === e.target.value)!), versionOf(right!))}
              >
                {versions.map((v, i) => (
                  <option key={v.path} value={v.path}>
                    v{versionOf(v)}
                    {i === 0 ? " (latest)" : ""}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="btn"
              title="Swap the two versions"
              aria-label="Swap versions"
              onClick={() => go(ref, versionOf(right!), versionOf(left!))}
            >
              ⇄
            </button>
            <label className="compare-field">
              <span className="muted">To</span>
              <select
                value={right?.path}
                onChange={(e) => go(ref, versionOf(left!), versionOf(versions.find((v) => v.path === e.target.value)!))}
              >
                {versions.map((v, i) => (
                  <option key={v.path} value={v.path}>
                    v{versionOf(v)}
                    {i === 0 ? " (latest)" : ""}
                  </option>
                ))}
              </select>
            </label>
            <div className="compare-tabs" role="tablist" aria-label="Comparison view">
              <button type="button" role="tab" aria-selected={mode === "properties"} onClick={() => setMode("properties")}>
                Properties
              </button>
              <button type="button" role="tab" aria-selected={mode === "json"} onClick={() => setMode("json")}>
                JSON
              </button>
            </div>
            <label className="compare-check">
              <input type="checkbox" checked={changesOnly} onChange={(e) => setChangesOnly(e.target.checked)} />
              Changes only
            </label>
          </>
        )}
      </div>

      <div className="compare-body">
        {!group ? (
          <div className="compare-empty">
            {schemaRef ? (
              <p>
                No schema named <strong>{schemaRef}</strong> was found.
              </p>
            ) : null}
            <p>Search for a schema in the box above to compare two of its versions side by side.</p>
            <p className="muted">{multi.length} schemas have more than one version.</p>
          </div>
        ) : versions.length < 2 ? (
          <div className="compare-empty">
            <p>
              <strong>{group.latest.title}</strong> has only one version (v{versionOf(group.latest)}), so there is
              nothing to compare.
            </p>
          </div>
        ) : !schemaL || !schemaR ? (
          <div className="compare-empty muted">Loading schemas...</div>
        ) : (
          <>
            <div className="compare-heads">
              <div className="compare-head">
                <span>
                  <strong>{left!.title}</strong> v{versionOf(left!)}
                </span>
                <a className="btn" href={schemaHash(`${ref}.${versionOf(left!)}.json`)}>
                  Open in graph
                </a>
              </div>
              <div className="compare-head">
                <span>
                  <strong>{right!.title}</strong> v{versionOf(right!)}
                </span>
                <a className="btn" href={schemaHash(`${ref}.${versionOf(right!)}.json`)}>
                  Open in graph
                </a>
              </div>
            </div>
            {sameVersion && <div className="compare-note">Both sides show the same version. Pick another one to see changes.</div>}
            {mode === "properties" && propRows && <PropertyDiff rows={propRows} changesOnly={changesOnly} />}
            {mode === "json" && json && <JsonDiff {...json} changesOnly={changesOnly} />}
          </>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------------------------------------------

function Summary({ added, removed, changed, unit }: { added: number; removed: number; changed: number; unit: string }) {
  return (
    <div className="compare-summary">
      <span className="chip chip-added">+{added} added</span>
      <span className="chip chip-removed">−{removed} removed</span>
      <span className="chip chip-changed">~{changed} changed</span>
      <span className="muted">{unit}</span>
    </div>
  )
}

const STATUS_MARK: Record<PropDiff["status"], string> = { added: "+", removed: "−", changed: "~", unchanged: "" }

function PropertyDiff({ rows, changesOnly }: { rows: PropDiff[]; changesOnly: boolean }) {
  const s = summarize(rows)
  const shown = changesOnly ? rows.filter((r) => r.status !== "unchanged") : rows
  return (
    <>
      <Summary {...s} unit={`properties · ${s.unchanged} unchanged · $refs to abstract schemas are expanded`} />
      {shown.length === 0 ? (
        <div className="compare-note">No property differences between these versions. Try the JSON view for other changes.</div>
      ) : (
        <div className="prop-diff" role="table" aria-label="Property differences">
          {shown.map((r) => {
            const depth = r.name.split(".").length - 1
            const leaf = r.name.split(".").pop()
            return (
              <div key={r.name} className={`prop-diff-row st-${r.status}`} role="row">
                <div className="prop-diff-name" role="cell" title={r.name} style={{ paddingLeft: 8 + depth * 14 }}>
                  <span className="prop-diff-mark" aria-label={r.status}>
                    {STATUS_MARK[r.status]}
                  </span>
                  {depth > 0 && <span className="muted">{r.name.split(".").slice(0, -1).join(".")}.</span>}
                  <strong>{leaf}</strong>
                </div>
                <PropCell info={r.left} other={r.right} row={r} side="a" />
                <PropCell info={r.right} other={r.left} row={r} side="b" />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

const ALWAYS_SHOWN: ComparedField[] = ["type", "ref", "relationships", "required", "deprecated"]

function PropCell({ info, other, row, side }: { info?: PropInfo; other?: PropInfo; row: PropDiff; side: "a" | "b" }) {
  if (!info) return <div className="prop-diff-cell empty" role="cell" />
  const isChanged = (f: ComparedField) => row.changed.includes(f)
  const fields = COMPARED_FIELDS.filter((f) => {
    const v = info[f]
    if (isChanged(f)) return true
    if (v === undefined || v === false || v === "") return false
    if (row.status === "changed") return ALWAYS_SHOWN.includes(f)
    return ALWAYS_SHOWN.includes(f) || f === "description"
  })
  return (
    <div className="prop-diff-cell" role="cell">
      {fields.map((f) => {
        const v = info[f]
        const text = typeof v === "boolean" ? (v ? "yes" : "no") : v === undefined ? "—" : String(v)
        const changed = isChanged(f)
        let body: React.ReactNode = text
        if (changed && typeof v === "string" && typeof other?.[f] === "string") {
          const d = inlineDiff(side === "a" ? v : (other[f] as string), side === "a" ? (other[f] as string) : v)
          const [pre, mid, post] = side === "a" ? d.a : d.b
          body = (
            <>
              {pre}
              <mark>{mid}</mark>
              {post}
            </>
          )
        }
        return (
          <div key={f} className={`pf pf-${f} ${changed ? "pf-changed" : ""}`}>
            <span className="pf-label">{FIELD_LABELS[f]}</span>
            <span className={`pf-value ${f === "description" && !changed ? "clamp" : ""}`}>{body}</span>
          </div>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------------------------------------------

function JsonDiff({
  a,
  b,
  rows,
  stats,
  changesOnly,
}: {
  a: string[]
  b: string[]
  rows: SideRow[]
  stats: { added: number; removed: number; changed: number }
  changesOnly: boolean
}) {
  const hunks = useMemo(() => (changesOnly ? collapseUnchanged(rows) : [{ type: "rows" as const, rows }]), [rows, changesOnly])
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  useEffect(() => setExpanded(new Set()), [rows, changesOnly])

  return (
    <>
      <Summary {...stats} unit="lines of pretty-printed JSON" />
      {stats.added + stats.removed + stats.changed === 0 && (
        <div className="compare-note">The two schema files are identical.</div>
      )}
      <div className="json-diff" role="table" aria-label="JSON differences">
        {hunks.map((h, hi) =>
          h.type === "gap" && !expanded.has(hi) ? (
            <button
              key={hi}
              type="button"
              className="json-gap"
              onClick={() => setExpanded((s) => new Set(s).add(hi))}
            >
              ⋯ {h.rows.length} unchanged line{h.rows.length === 1 ? "" : "s"} (click to show)
            </button>
          ) : (
            h.rows.map((r) => <JsonRow key={`${r.a ?? "x"}-${r.b ?? "x"}`} row={r} a={a} b={b} />)
          )
        )}
      </div>
    </>
  )
}

function JsonRow({ row, a, b }: { row: SideRow; a: string[]; b: string[] }) {
  const la = row.a !== undefined ? a[row.a] : undefined
  const lb = row.b !== undefined ? b[row.b] : undefined
  let ca: React.ReactNode = la
  let cb: React.ReactNode = lb
  if (row.kind === "change" && la !== undefined && lb !== undefined) {
    const d = inlineDiff(la, lb)
    ca = (
      <>
        {d.a[0]}
        <mark>{d.a[1]}</mark>
        {d.a[2]}
      </>
    )
    cb = (
      <>
        {d.b[0]}
        <mark>{d.b[1]}</mark>
        {d.b[2]}
      </>
    )
  }
  const sideA = row.kind === "equal" ? "" : row.kind === "insert" ? "blank" : "del"
  const sideB = row.kind === "equal" ? "" : row.kind === "delete" ? "blank" : "add"
  return (
    <div className="json-row" role="row">
      <span className={`ln ${sideA}`}>{row.a !== undefined ? row.a + 1 : ""}</span>
      <code className={`code ${sideA}`}>{ca}</code>
      <span className={`ln ${sideB}`}>{row.b !== undefined ? row.b + 1 : ""}</span>
      <code className={`code ${sideB}`}>{cb}</code>
    </div>
  )
}
