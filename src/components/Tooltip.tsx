import { Fragment, useCallback, useEffect, useMemo, useState, memo } from "react"
import { Node } from "@xyflow/react"
import { ReactNode } from "react"
import { buildPropertyTree, type TreeNode } from "../utils/propertyTree"

type PropertyInfo = {
  name: string
  type?: string
  description?: string
  required?: boolean
  depth?: number
}

// Matches "DEPRECATED: ...", "[DEPRECATED] ..." at the start of a description, or a bracketed marker anywhere
export const isDeprecated = (description?: string) =>
  !!description && /^\s*[\[(]?\s*deprecated(?![a-z])|\[\s*deprecated\s*\]/i.test(description)

type RowGroup = { open: boolean; count: number; onToggle: () => void }

const PropertyRow = memo(function PropertyRow({
  prop: p,
  highlighted,
  onEnter,
  onLeave,
  label,
  group,
}: {
  prop: PropertyInfo
  highlighted: boolean
  onEnter: (name: string, ref?: string) => void
  onLeave: () => void
  /** Text shown instead of the full dotted name (used for children in the tree) */
  label?: string
  /** Present when the property is an object whose attributes can be expanded */
  group?: RowGroup
}) {
  const isRef = typeof p.type === "string" && p.type.startsWith("$ref:")
  const refPath = isRef ? String(p.type).slice(5) : undefined
  const deprecated = isDeprecated(p.description)
  return (
    <li
      className={`list-row ${highlighted ? "prop-highlight" : ""} ${deprecated ? "prop-deprecated" : ""}`}
      onMouseEnter={() => onEnter(p.name.split(".").slice(-1)[0], refPath)}
      onMouseLeave={onLeave}
    >
      {/* Left column: (toggle) property name + required pill + attribute count */}
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
        {group ? (
          <span
            role="button"
            tabIndex={0}
            aria-expanded={group.open}
            aria-label={`${p.name} (${group.count} attribute${group.count === 1 ? "" : "s"})`}
            style={{ cursor: "pointer", userSelect: "none", display: "inline-flex", gap: 4, alignItems: "center" }}
            onClick={group.onToggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                group.onToggle()
              }
            }}
          >
            <span aria-hidden>{group.open ? "▾" : "▸"}</span>
            <span className="k">
              {label ?? p.name}
            </span>
          </span>
        ) : (
          <span className="k">
            {label ?? p.name}
          </span>
        )}
        {deprecated && <span className="badge req">DEPRECATED</span>}
        {p.required && <span className="badge req">required</span>}
        {group && (
          <span className="t" style={{ whiteSpace: "nowrap" }}>
            {group.count} attribute{group.count === 1 ? "" : "s"}
          </span>
        )}
      </span>
      {/* Right column: type (only when not a $ref) */}
      {!isRef && p.type ? <span className="t">{p.type}</span> : <span />}
      {/* $ref shown under the property, spanning full width */}
      {isRef && (
        <div style={{ gridColumn: "1 / -1" }}>
          <span className="t">$ref: {refPath}</span>
        </div>
      )}
      {/* Description spans full width on next line */}
      {p.description && (
        <div style={{ gridColumn: "1 / -1" }}>
          <span className="d">
            {p.description}
          </span>
        </div>
      )}
    </li>
  )
})

function PropertyTree({
  nodes,
  level,
  expanded,
  toggle,
  hoveredPropName,
  onEnter,
  onLeave,
}: {
  nodes: TreeNode<PropertyInfo>[]
  level: number
  expanded: Set<string>
  toggle: (name: string) => void
  hoveredPropName: string | null
  onEnter: (name: string, ref?: string) => void
  onLeave: () => void
}) {
  return (
    <>
      {nodes.map((n) => {
        const p = n.prop
        const hasChildren = n.children.length > 0
        const open = expanded.has(p.name)
        return (
          <Fragment key={p.name}>
            <PropertyRow
              prop={p}
              // roots keep the full dotted name (e.g. data.Foo); children show just their own name
              label={level === 0 ? undefined : p.name.split(".").slice(-1)[0]}
              highlighted={hoveredPropName === (p.name.split(".").slice(-1)[0] || "")}
              onEnter={onEnter}
              onLeave={onLeave}
              group={hasChildren ? { open, count: n.children.length, onToggle: () => toggle(p.name) } : undefined}
            />
            {hasChildren && open && (
              <li style={{ listStyle: "none", marginLeft: 10, paddingLeft: 10, borderLeft: "2px solid var(--line)" }}>
                <ul className="list">
                  <PropertyTree
                    nodes={n.children}
                    level={level + 1}
                    expanded={expanded}
                    toggle={toggle}
                    hoveredPropName={hoveredPropName}
                    onEnter={onEnter}
                    onLeave={onLeave}
                  />
                </ul>
              </li>
            )}
          </Fragment>
        )
      })}
    </>
  )
}

export function PropertyTooltip({
  node,
  onClose,
  onHoverProperty,
  onLeaveProperty,
}: {
  node: Node
  onClose: () => void
  onHoverProperty?: (payload: { name?: string; ref?: string } | null) => void
  onLeaveProperty?: () => void
}) {
  const props = useMemo(() => (node?.data?.properties ?? []) as PropertyInfo[], [node])
  const rels = (node?.data?.relations ?? []) as Array<{ kind: string; target: string; type: string }>

  const { topLevel, nested } = useMemo(() => {
    const depthOf = (p: PropertyInfo) => p.depth ?? p.name.split(".").length
    return {
      topLevel: props.filter((p) => depthOf(p) === 1),
      nested: props.filter((p) => depthOf(p) > 1),
    }
  }, [props])

  const filePath = (node?.data?.filePath as string | undefined) || ""
  const schemaId = (node?.data?.schemaId as string | undefined) || ""
  const schema = node?.data?.schema as any
  const nodeDescription = (node?.data?.description as string | undefined) || (schema?.description as string | undefined)
  const subtitle = node?.data?.subtitle as ReactNode | undefined

  const [hoveredPropName, setHoveredPropName] = useState<string | null>(null)
  const handleRowEnter = useCallback(
    (name: string, ref?: string) => {
      setHoveredPropName(name)
      onHoverProperty?.({ name, ref })
    },
    [onHoverProperty]
  )
  const handleRowLeave = useCallback(() => {
    setHoveredPropName(null)
    onLeaveProperty?.()
  }, [onLeaveProperty])
  // Top-level properties (id, kind, acl, legal, ...) are collapsed by default; users mostly want the data block
  // Collapsed by default, but open when there are no nested properties (nothing else to look at).
  // A manual toggle overrides the default until the tooltip shows a different node.
  const [topLevelOverride, setTopLevelOverride] = useState<boolean | null>(null)
  useEffect(() => setTopLevelOverride(null), [node])
  const topLevelOpen = topLevelOverride ?? nested.length === 0
  const toggleTopLevel = () => setTopLevelOverride(!topLevelOpen)

  // Nested properties as a tree: object-like properties (e.g. data.HistoricalInterests) are collapsed groups
  const nestedTree = useMemo(() => buildPropertyTree(nested), [nested])
  const groupNames = useMemo(() => {
    const names: string[] = []
    const walk = (ns: TreeNode<PropertyInfo>[]) =>
      ns.forEach((n) => {
        if (n.children.length) {
          names.push(n.prop.name)
          walk(n.children)
        }
      })
    walk(nestedTree)
    return names
  }, [nestedTree])
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set())
  const toggleGroup = useCallback(
    (name: string) =>
      setExpanded((prev) => {
        const next = new Set(prev)
        if (!next.delete(name)) next.add(name)
        return next
      }),
    []
  )

  // Reference values loading (for reference-data related entities)
  // Detect reference-data by explicit category, by file path or by schemaId containing "reference-data"
  const isReferenceData =
    (node?.data as any)?.category === "reference-data" ||
    /reference-data/i.test(schemaId || "") ||
    /reference-data/i.test(filePath || "")
  const [refValues, setRefValues] = useState<Array<{ name: string; code?: string; description?: string; id?: string }>>(
    []
  )
  const [refLoading, setRefLoading] = useState(false)
  const [refError, setRefError] = useState<string | null>(null)
  const [refSourcePath, setRefSourcePath] = useState<string | null>(null)

  function extractRefType(): string | null {
    const d: any = node?.data || {}
    const sid: string = d.schemaId || ""
    // Common schemaId forms:
    // - osdu:wks:reference-data--RigType:1.0.0
    // - https://.../json/reference-data/RigType.1.0.0.json
    // - file path hints like /data/reference-data/OPEN/RigType.1.min.json
    // Try reference-data--NAME:VERSION pattern first
    const m1 = sid.match(/reference-data--([^:]+):/i)
    if (m1 && m1[1]) return m1[1]

    // Try to extract last path segment from schemaId or filePath and strip version and suffixes
    const candidate = (sid || filePath || String(d.label || "")).split("/").pop() || ""
    if (!candidate) return null
    // remove .min.json or .json suffix
    let name = candidate.replace(/(\.min)?\.json$/i, "")
    // remove trailing version segments like .1 or .1.0.0
    name = name.replace(/\.[0-9]+(\.[0-9]+)*$/i, "")
    name = name.trim()
    return name || null
  }

  const publicUrl = (p: string) => {
    if (/^https?:\/\//i.test(p)) return p
    const base = (import.meta.env.BASE_URL as string) || "/"
    const b = base.endsWith("/") ? base.slice(0, -1) : base
    const r = p.startsWith("/") ? p.slice(1) : p
    return `${b}/${r}`
  }

  useEffect(() => {
    let aborted = false
    async function loadRefValues() {
      if (!isReferenceData) {
        setRefValues([])
        setRefError(null)
        setRefSourcePath(null)
        return
      }
      const base = extractRefType()
      if (!base) {
        setRefValues([])
        setRefError("Unknown reference type")
        setRefSourcePath(null)
        return
      }
      // If the currently-loaded schema itself contains ReferenceData (e.g., when a reference-data
      // JSON file is opened as the main entity), use it directly instead of fetching external files.
      if (schema && Array.isArray((schema as any).ReferenceData)) {
        try {
          const rows = (schema as any).ReferenceData.map((entry: any) => {
            const d = entry?.data || {}
            return {
              id: entry?.id,
              name: String(d.Name ?? d.Code ?? "").trim(),
              code: d.Code,
              description: d.Description,
            }
          })
          setRefValues(rows)
          setRefSourcePath(filePath || null)
          setRefLoading(false)
          setRefError(null)
          return
        } catch (e) {
          // fall through to normal loading
        }
      }
      setRefLoading(true)
      setRefError(null)
      setRefValues([])
      setRefSourcePath(null)

      const sets = ["OPEN", "LOCAL", "FIXED"]
      const versions = ["1", "2", "3"]
      // prefer the .min.json variants in this codebase; fall back to .json
      const suffixes = [".min.json", ".json"]
      let found: any = null
      let sourcePath: string | null = null

      for (const scope of sets) {
        for (const v of versions) {
          for (const suffix of suffixes) {
            // try both encoded and raw base (some filenames are encoded, many are plain)
            const candidates = [encodeURIComponent(base), base]
            for (const b of candidates) {
              const candidate = `/data/reference-data/${scope}/${b}.${v}${suffix}`
              try {
                const res = await fetch(publicUrl(candidate))
                if (!res.ok) continue
                const json = await res.json()
                if (json && Array.isArray(json.ReferenceData)) {
                  found = json
                  sourcePath = candidate
                  break
                }
              } catch {
                // ignore and try next
              }
            }
            if (found) break
          }
          if (found) break
        }
        if (found) break
      }

      if (aborted) return

      if (!found) {
        setRefLoading(false)
        setRefError("No reference values found")
        setRefValues([])
        setRefSourcePath(null)
        return
      }

      try {
        const rows = (found.ReferenceData as any[]).map((entry: any) => {
          const d = entry?.data || {}
          return {
            id: entry?.id,
            name: String(d.Name ?? d.Code ?? "").trim(),
            code: d.Code,
            description: d.Description,
          }
        })
        setRefValues(rows)
        setRefSourcePath(sourcePath)
      } catch (e) {
        setRefError("Failed to parse reference values")
      } finally {
        setRefLoading(false)
      }
    }

    loadRefValues()
    return () => {
      aborted = true
    }
  }, [isReferenceData, node])

  return (
    <div className="tooltip">
      <div className="tooltip-header">
        <div>
          <div className="tooltip-title">{node?.data?.label as ReactNode}</div>
          {subtitle && <div className="tooltip-sub">{subtitle}</div>}
          {nodeDescription && <div className="tooltip-desc">{nodeDescription}</div>}
        </div>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="tooltip-body">
        {filePath && (
          <div className="tooltip-section">
            <div className="tooltip-section-title">Source path</div>
            <ul className="list">
              <li className="list-row">
                <span className="k" style={{ gridColumn: "1 / -1" }}>
                  {filePath}
                </span>
              </li>
            </ul>
          </div>
        )}
        {isReferenceData && (
          <div className="tooltip-section">
            <div className="tooltip-section-title">
              Reference values {refValues.length ? `(${refValues.length})` : ""}
            </div>
            {refLoading && <div className="muted">Loading reference values...</div>}
            {!refLoading && refError && <div className="muted">{refError}</div>}
            {!refLoading && !refError && refValues.length > 0 && (
              <ul className="list" style={{ maxHeight: 220, overflowY: "auto" }}>
                {refValues.slice(0, 200).map((rv, idx) => (
                  <li key={rv.id || idx} className="list-row">
                    <span className="k">{rv.name}</span>
                    {rv.code && <span className="t">{rv.code}</span>}
                    {rv.description && <span className="d">{rv.description}</span>}
                  </li>
                ))}
                {refValues.length > 200 && <li className="muted">...and {refValues.length - 200} more</li>}
              </ul>
            )}
            {refSourcePath && <div className="text-xs text-gray-500 mt-1">from {refSourcePath}</div>}
          </div>
        )}
        <div className="tooltip-section">
          <div className="tooltip-section-title">Actions</div>
          <ul className="list">
            {isReferenceData && refSourcePath && (
              <li className="list-row">
                <span className="k">Open reference JSON</span>
                <button
                  className="btn"
                  onClick={() => {
                    try {
                      window.open(refSourcePath, "_blank")
                    } catch {}
                  }}
                >
                  Open
                </button>
              </li>
            )}
            <li className="list-row">
              <span className="k">Open JSON</span>
              <button
                className="btn"
                onClick={() => {
                  try {
                    const blob = new Blob([JSON.stringify(schema ?? {}, null, 2)], { type: "application/json" })
                    const url = URL.createObjectURL(blob)
                    window.open(url, "_blank")
                  } catch {}
                }}
              >
                Open
              </button>
            </li>
            <li className="list-row">
              <span className="k">Copy $id</span>
              <button className="btn" onClick={() => navigator.clipboard?.writeText(schemaId || "")}>
                Copy
              </button>
            </li>
          </ul>
        </div>
        <div className="tooltip-section">
          <div
            className="tooltip-section-title"
            role="button"
            tabIndex={0}
            aria-expanded={topLevelOpen}
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={toggleTopLevel}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                toggleTopLevel()
              }
            }}
          >
            {topLevelOpen ? "▾" : "▸"} Top-level properties ({topLevel.length})
          </div>
          <ul className="list" style={topLevelOpen ? undefined : { display: "none" }}>
            {topLevel.map((p, idx) => (
              <PropertyRow
                key={idx}
                prop={p}
                highlighted={hoveredPropName === (p.name.split(".").slice(-1)[0] || "")}
                onEnter={handleRowEnter}
                onLeave={handleRowLeave}
              />
            ))}
            {!topLevel.length && <li className="muted">No top-level properties</li>}
          </ul>
        </div>
        <div className="tooltip-section">
          <div
            className="tooltip-section-title"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <span>Nested properties ({nested.length})</span>
            {groupNames.length > 0 && (
              <span style={{ display: "inline-flex", gap: 6 }}>
                <button className="btn" onClick={() => setExpanded(new Set(groupNames))}>
                  Expand all
                </button>
                <button className="btn" onClick={() => setExpanded(new Set())}>
                  Collapse all
                </button>
              </span>
            )}
          </div>
          <ul className="list">
            <PropertyTree
              nodes={nestedTree}
              level={0}
              expanded={expanded}
              toggle={toggleGroup}
              hoveredPropName={hoveredPropName}
              onEnter={handleRowEnter}
              onLeave={handleRowLeave}
            />
            {!nested.length && <li className="muted">No nested properties</li>}
          </ul>
        </div>
        <div className="tooltip-section">
          <div className="tooltip-section-title">Relationships</div>
          <ul className="list">
            {rels.map((r, idx) => (
              <li key={idx} className="list-row">
                <span className="k">{r.type}</span>
                <span className="d">{r.kind}</span>
                <span className="t">→ {r.target}</span>
              </li>
            ))}
            {!rels.length && <li className="muted">No relationships</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
