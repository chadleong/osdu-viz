import { Node } from "reactflow"

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

  return (
    <div className="tooltip">
      <div className="tooltip-header">
        <div>
          <div className="tooltip-title">{node?.data?.label}</div>
          {node?.data?.subtitle && <div className="tooltip-sub">{node?.data?.subtitle}</div>}
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
        <div className="tooltip-section">
          <div className="tooltip-section-title">Actions</div>
          <ul className="list">
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
            {topLevel.map((p, idx) => (
              <li key={idx} className="list-row">
                <span className="k">{p.name}</span>
                {p.required && <span className="badge req">required</span>}
                {p.type && <span className="t">{p.type}</span>}
                {p.description && <span className="d">{p.description}</span>}
              </li>
            ))}
            {!topLevel.length && <li className="muted">No top-level properties</li>}
          </ul>
        </div>
        <div className="tooltip-section">
          <div className="tooltip-section-title">Nested properties ({nested.length})</div>
          <ul className="list">
            {nested.map((p, idx) => (
              <li key={idx} className="list-row">
                <span className="k">{p.name}</span>
                {p.type && <span className="t">{p.type}</span>}
                {p.description && <span className="d">{p.description}</span>}
              </li>
            ))}
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
