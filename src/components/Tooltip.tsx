import { Fragment, useCallback, useEffect, useMemo, useRef, useState, memo } from "react"
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from "react"
import { Node } from "@xyflow/react"
import { ReactNode } from "react"
import { buildPropertyTree, type TreeNode } from "../utils/propertyTree"
import { groupKey } from "../utils/schemaVersions"
import { guideHash } from "../utils/guides"
import { isDeprecated } from "../utils/deprecated"
import { loadReferenceValues, toReferenceValues, type ReferenceValue } from "../utils/referenceValues"

type PropertyInfo = {
  name: string
  type?: string
  description?: string
  required?: boolean
  depth?: number
  /** reference-data entity types this property points at (from x-osdu-relationship) */
  refTypes?: string[]
}

/** Lazily loads and lists the allowed values (IDs) of one reference-data type. */
function ReferenceValuesList({ entityType }: { entityType: string }) {
  const [state, setState] = useState<{ loading: boolean; values: ReferenceValue[]; error?: string }>({
    loading: true,
    values: [],
  })
  const [filter, setFilter] = useState("")
  useEffect(() => {
    let alive = true
    loadReferenceValues(entityType).then((set) => {
      if (!alive) return
      setState(set ? { loading: false, values: set.values } : { loading: false, values: [], error: "No reference values found" })
    })
    return () => {
      alive = false
    }
  }, [entityType])

  const q = filter.trim().toLowerCase()
  const shown = q
    ? state.values.filter((v) => `${v.name} ${v.code ?? ""} ${v.id ?? ""}`.toLowerCase().includes(q))
    : state.values
  return (
    <div style={{ gridColumn: "1 / -1" }}>
      <div className="t">
        {entityType} {state.values.length ? `(${state.values.length} values)` : ""}
      </div>
      {state.loading && <div className="muted">Loading reference values...</div>}
      {state.error && <div className="muted">{state.error}</div>}
      {state.values.length > 8 && (
        <input
          type="search"
          placeholder="Filter values..."
          aria-label={`Filter ${entityType} values`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", margin: "4px 0" }}
        />
      )}
      {shown.length > 0 && (
        <ul className="list" style={{ maxHeight: 200, overflowY: "auto" }}>
          {shown.slice(0, 200).map((rv, idx) => (
            <li
              key={rv.id || idx}
              className={`list-row ${rv.deprecated ? "prop-deprecated" : ""}`}
              style={{ gridTemplateColumns: "1fr" }}
              title={rv.description}
            >
              <span className="k">
                {rv.name}
                {rv.deprecated && (
                  <>
                    {" "}
                    <span className="badge req">DEPRECATED</span>
                  </>
                )}
              </span>
              <span className="t">{rv.id ? rv.id.replace("{{NAMESPACE}}", "namespace") : rv.code}</span>
            </li>
          ))}
          {shown.length > 200 && <li className="muted">...and {shown.length - 200} more (use the filter)</li>}
        </ul>
      )}
      {!state.loading && !state.error && q && shown.length === 0 && <div className="muted">No matches</div>}
    </div>
  )
}


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
  const [showValues, setShowValues] = useState(false)
  return (
    <li
      className={`list-row ${highlighted ? "prop-highlight" : ""} ${deprecated ? "prop-deprecated" : ""}`}
      onMouseEnter={() => onEnter(p.name.split(".").slice(-1)[0], refPath)}
      onMouseLeave={onLeave}
      // The whole row toggles an expandable group (ignore clicks on inner controls and text selection)
      style={group ? { cursor: "pointer" } : undefined}
      onClick={
        group
          ? (e) => {
              if ((e.target as HTMLElement).closest("button, a, input")) return
              if (window.getSelection?.()?.toString()) return
              group.onToggle()
            }
          : undefined
      }
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
      {/* Allowed values for properties that point at reference-data */}
      {p.refTypes?.map((rt) => (
        <div key={rt} style={{ gridColumn: "1 / -1" }}>
          <button
            className="btn"
            aria-expanded={showValues}
            onClick={() => setShowValues((v) => !v)}
            title={`Show the allowed ${rt} values`}
          >
            {showValues ? "▾" : "▸"} Allowed values: {rt}
          </button>
          {showValues && <ReferenceValuesList entityType={rt} />}
        </div>
      ))}
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

const WIDTH_KEY = "osdu-viz:tooltip-width"
const DEFAULT_WIDTH = 420
const MIN_WIDTH = 320

function readStoredWidth(): number {
  try {
    const n = Number(localStorage.getItem(WIDTH_KEY))
    return Number.isFinite(n) && n >= MIN_WIDTH ? n : DEFAULT_WIDTH
  } catch {
    return DEFAULT_WIDTH
  }
}

export type GuideLink = { path: string; label: string }

export type ReferrerItem = {
  path: string
  title: string
  version?: string
  via: "ref" | "relationship"
  properties: string[]
}

/** Schemas that reference the selected one, one row per schema with all referring versions. */
function ReferencedByList({ items, onNavigate }: { items: ReferrerItem[]; onNavigate?: (path: string) => void }) {
  const rows = useMemo(() => {
    const groups = new Map<string, ReferrerItem[]>()
    for (const it of items) {
      const k = groupKey(it)
      const g = groups.get(k)
      if (g) g.push(it)
      else groups.set(k, [it])
    }
    return Array.from(groups.values())
      .map((g) => g.slice().sort((a, b) => (b.version || "").localeCompare(a.version || "", undefined, { numeric: true })))
      .sort((a, b) => a[0].title.localeCompare(b[0].title))
  }, [items])
  return (
    <>
      {rows.map((g) => (
        <li key={g[0].path} className="list-row" style={{ gridTemplateColumns: "1fr" }}>
          <span>
            <button
              type="button"
              className="btn"
              style={{ textAlign: "left" }}
              title={g[0].path}
              onClick={() => onNavigate?.(g[0].path)}
            >
              {g[0].title}
            </button>{" "}
            <span className="muted">
              {g.map((x) => (x.version ? `v${x.version}` : "")).filter(Boolean).join(", ")}
              {" · "}
              {g[0].via === "relationship"
                ? `relationship${g[0].properties.filter(Boolean).length ? ` (${Array.from(new Set(g.flatMap((x) => x.properties.filter(Boolean)))).join(", ")})` : ""}`
                : "$ref"}
            </span>
          </span>
        </li>
      ))}
      {!rows.length && <li className="muted">Not referenced by any loaded schema</li>}
    </>
  )
}

export function PropertyTooltip({
  node,
  onClose,
  onHoverProperty,
  onLeaveProperty,
  referrers,
  onNavigate,
  guides,
}: {
  /** migration guides for this node's schema */
  guides?: GuideLink[]
  node: Node
  onClose: () => void
  /** schemas that reference this node's schema */
  referrers?: ReferrerItem[]
  onNavigate?: (path: string) => void
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

  // Resizable panel: drag the left edge; width is remembered, double-click the edge to reset
  const [width, setWidth] = useState<number>(readStoredWidth)
  const widthRef = useRef(width)
  widthRef.current = width
  const maxWidth = (el: HTMLElement | null) => Math.max(MIN_WIDTH, (el?.parentElement?.clientWidth || window.innerWidth) - 40)
  const onResizeStart = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    const handle = e.currentTarget
    const panel = handle.parentElement as HTMLElement
    const startX = e.clientX
    const startW = panel.getBoundingClientRect().width
    const max = maxWidth(panel)
    handle.setPointerCapture?.(e.pointerId)
    const move = (ev: PointerEvent) =>
      setWidth(Math.round(Math.min(max, Math.max(MIN_WIDTH, startW + (startX - ev.clientX)))))
    const up = () => {
      handle.removeEventListener("pointermove", move)
      handle.removeEventListener("pointerup", up)
      handle.removeEventListener("pointercancel", up)
      try {
        localStorage.setItem(WIDTH_KEY, String(widthRef.current))
      } catch {}
    }
    handle.addEventListener("pointermove", move)
    handle.addEventListener("pointerup", up)
    handle.addEventListener("pointercancel", up)
  }
  const onResizeKey = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    const max = maxWidth(e.currentTarget.parentElement)
    const next = Math.min(max, Math.max(MIN_WIDTH, widthRef.current + (e.key === "ArrowLeft" ? 40 : -40)))
    setWidth(next)
    try {
      localStorage.setItem(WIDTH_KEY, String(next))
    } catch {}
  }
  const resetWidth = () => {
    setWidth(DEFAULT_WIDTH)
    try {
      localStorage.removeItem(WIDTH_KEY)
    } catch {}
  }

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

  // Relationships are collapsed by default (can be long); reset when the tooltip shows a different node
  const [relsOpen, setRelsOpen] = useState(false)
  useEffect(() => setRelsOpen(false), [node])
  // Nested properties section: expanded by default, collapsible; reset when the tooltip shows a different node
  const [nestedOpen, setNestedOpen] = useState(true)
  useEffect(() => setNestedOpen(true), [node])
  const [guidesOpen, setGuidesOpen] = useState(false)
  useEffect(() => setGuidesOpen(false), [node])
  const [refByOpen, setRefByOpen] = useState(false)
  useEffect(() => setRefByOpen(false), [node])

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
  const [refValues, setRefValues] = useState<ReferenceValue[]>([])
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
          const rows = toReferenceValues((schema as any).ReferenceData)
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

      const set = await loadReferenceValues(base)

      if (aborted) return

      if (!set) {
        setRefLoading(false)
        setRefError("No reference values found")
        setRefValues([])
        setRefSourcePath(null)
        return
      }
      setRefValues(set.values)
      setRefSourcePath(set.sourcePath)
      setRefLoading(false)
    }

    loadRefValues()
    return () => {
      aborted = true
    }
  }, [isReferenceData, node])

  return (
    <div className="tooltip" style={{ width, maxWidth: "calc(100% - 40px)" }}>
      <div
        className="tooltip-resize"
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize panel"
        aria-valuenow={width}
        tabIndex={0}
        title="Drag to resize (double-click to reset)"
        onPointerDown={onResizeStart}
        onDoubleClick={resetWidth}
        onKeyDown={onResizeKey}
      />
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
                  <li key={rv.id || idx} className={`list-row ${rv.deprecated ? "prop-deprecated" : ""}`}>
                    <span className="k">
                      {rv.name}
                      {rv.deprecated && (
                        <>
                          {" "}
                          <span className="badge req">DEPRECATED</span>
                        </>
                      )}
                    </span>
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
            <span
              role="button"
              tabIndex={0}
              aria-expanded={nestedOpen}
              style={{ cursor: "pointer", userSelect: "none", flex: 1 }}
              onClick={() => setNestedOpen(!nestedOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setNestedOpen(!nestedOpen)
                }
              }}
            >
              {nestedOpen ? "▾" : "▸"} Nested properties ({nested.length})
            </span>
            {nestedOpen && groupNames.length > 0 && (
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
          <ul className="list" style={nestedOpen ? undefined : { display: "none" }}>
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
          <div
            className="tooltip-section-title"
            role="button"
            tabIndex={0}
            aria-expanded={relsOpen}
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setRelsOpen(!relsOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setRelsOpen(!relsOpen)
              }
            }}
          >
            {relsOpen ? "▾" : "▸"} Relationships ({rels.length})
          </div>
          <ul className="list" style={relsOpen ? undefined : { display: "none" }}>
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
        {guides && guides.length > 0 && (
          <div className="tooltip-section">
            <div
              className="tooltip-section-title"
              role="button"
              tabIndex={0}
              aria-expanded={guidesOpen}
              style={{ cursor: "pointer", userSelect: "none" }}
              onClick={() => setGuidesOpen(!guidesOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setGuidesOpen(!guidesOpen)
                }
              }}
            >
              {guidesOpen ? "▾" : "▸"} Migration guides ({guides.length})
            </div>
            <ul className="list" style={guidesOpen ? undefined : { display: "none" }}>
              {guides.map((g) => (
                <li key={g.path} className="list-row" style={{ gridTemplateColumns: "1fr" }}>
                  <a href={guideHash(g.path)}>{g.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {referrers && (
          <div className="tooltip-section">
            <div
              className="tooltip-section-title"
              role="button"
              tabIndex={0}
              aria-expanded={refByOpen}
              style={{ cursor: "pointer", userSelect: "none" }}
              onClick={() => setRefByOpen(!refByOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setRefByOpen(!refByOpen)
                }
              }}
            >
              {refByOpen ? "▾" : "▸"} Referenced by ({new Set(referrers.map((r) => groupKey(r))).size})
            </div>
            <ul className="list" style={refByOpen ? { maxHeight: 280, overflowY: "auto" } : { display: "none" }}>
              <ReferencedByList items={referrers} onNavigate={onNavigate} />
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
