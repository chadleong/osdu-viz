import React, { useEffect, useState } from "react"
import { Node } from "@xyflow/react"
import { ReactNode } from "react"

// Define explicit type for node data
interface TooltipNodeData {
  label: ReactNode
  subtitle?: ReactNode
}

export function PropertyTooltip({ node, onClose }: { node: Node; onClose: () => void }) {
  const props = (node?.data?.properties ?? []) as Array<{
    name: string
    type?: string
    description?: string
    required?: boolean
    depth?: number
  }>
  const rels = (node?.data?.relations ?? []) as Array<{ kind: string; target: string; type: string }>

  const topLevel = props.filter((p) => (p.depth ?? p.name.split(".").length) === 1)
  const nested = props.filter((p) => (p.depth ?? p.name.split(".").length) > 1)

  const filePath = (node?.data?.filePath as string | undefined) || ""
  const schemaId = (node?.data?.schemaId as string | undefined) || ""
  const schema = node?.data?.schema as any
  const nodeDescription = (node?.data?.description as string | undefined) || (schema?.description as string | undefined)

  // Reference values loading (for reference-data related entities)
  const isReferenceData = (node?.data as any)?.category === "reference-data" || /reference-data--/i.test(schemaId || "")
  const [refValues, setRefValues] = useState<Array<{ name: string; code?: string; description?: string; id?: string }>>(
    []
  )
  const [refLoading, setRefLoading] = useState(false)
  const [refError, setRefError] = useState<string | null>(null)
  const [refSourcePath, setRefSourcePath] = useState<string | null>(null)

  function extractRefType(): string | null {
    const d: any = node?.data || {}
    const sid: string = d.schemaId || ""
    // Prefer parsing from schemaId like osdu:wks:reference-data--RigType:1.0.0
    const m = sid.match(/reference-data--([^:]+):/i)
    if (m && m[1]) return m[1]
    // Fallback to node label (target entity name)
    const label = String(d.label || "").trim()
    if (label) return label
    return null
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
      setRefLoading(true)
      setRefError(null)
      setRefValues([])
      setRefSourcePath(null)

      const sets = ["OPEN", "LOCAL", "FIXED"]
      const versions = ["1", "2", "3"]
      let found: any = null
      let sourcePath: string | null = null

      for (const scope of sets) {
        for (const v of versions) {
          const candidate = `/data/reference-data/${scope}/${encodeURIComponent(base)}.${v}.json`
          try {
            const res = await fetch(candidate)
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
          {node?.data?.subtitle && <div className="tooltip-sub">{node?.data?.subtitle as ReactNode}</div>}
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
          <div className="tooltip-section-title">Top-level properties ({topLevel.length})</div>
          <ul className="list">
            {topLevel.map((p, idx) => {
              const isRef = typeof p.type === "string" && p.type.startsWith("$ref:")
              const refPath = isRef ? String(p.type).slice(5) : null
              return (
                <li key={idx} className="list-row">
                  {/* Left column: property name + required pill */}
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span className="k">{p.name}</span>
                    {p.required && <span className="badge req">required</span>}
                  </span>
                  {/* Right column: type (only when not a $ref) */}
                  {!isRef && p.type ? <span className="t">{p.type}</span> : <span />}
                  {/* $ref shown under property spanning full width */}
                  {isRef && (
                    <div style={{ gridColumn: "1 / -1" }}>
                      <span className="t">$ref: {refPath}</span>
                    </div>
                  )}
                  {/* Description spans full width on next line */}
                  {p.description && (
                    <div style={{ gridColumn: "1 / -1" }}>
                      <span className="d">{p.description}</span>
                    </div>
                  )}
                </li>
              )
            })}
            {!topLevel.length && <li className="muted">No top-level properties</li>}
          </ul>
        </div>
        <div className="tooltip-section">
          <div className="tooltip-section-title">Nested properties ({nested.length})</div>
          <ul className="list">
            {nested.map((p, idx) => {
              const isRef = typeof p.type === "string" && p.type.startsWith("$ref:")
              const refPath = isRef ? String(p.type).slice(5) : null
              return (
                <li key={idx} className="list-row">
                  {/* Left column: property name + required pill (if present) */}
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span className="k">{p.name}</span>
                    {p.required && <span className="badge req">required</span>}
                  </span>
                  {/* Right column: type (only when not a $ref) */}
                  {!isRef && p.type ? <span className="t">{p.type}</span> : <span />}
                  {/* $ref on a new line spanning both columns */}
                  {isRef && (
                    <div style={{ gridColumn: "1 / -1" }}>
                      <span className="t">$ref: {refPath}</span>
                    </div>
                  )}
                  {/* Description on a new line spanning both columns */}
                  {p.description && (
                    <div style={{ gridColumn: "1 / -1" }}>
                      <span className="d">{p.description}</span>
                    </div>
                  )}
                </li>
              )
            })}
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
