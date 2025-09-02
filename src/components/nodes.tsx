import React from "react"
import { Handle, Position } from "@xyflow/react"

export const DefaultNode = React.memo(function DefaultNode({ data }: any) {
  return (
    <div className="node">
      <Handle type="target" id="left-target" position={Position.Left} style={{ opacity: 0, width: 8, height: 8 }} />
      <Handle type="source" id="left" position={Position.Left} style={{ opacity: 0, width: 8, height: 8 }} />
      <Handle type="source" id="right-source" position={Position.Right} style={{ opacity: 0, width: 8, height: 8 }} />
      <Handle type="target" id="right" position={Position.Right} style={{ opacity: 0, width: 8, height: 8 }} />
      <div className="node-title">{data.label}</div>
      {data.subtitle && <div className="node-sub">{data.subtitle}</div>}
    </div>
  )
})

export const ErdEntityNode = React.memo(function ErdEntityNode({ data }: any) {
  const { label, subtitle, properties, erdRelationships, nodeType, category } = data

  const allProps = properties || []
  let dataProps = allProps.filter((p: any) => typeof p.name === "string" && p.name.startsWith("data."))
  if (!dataProps.length) dataProps = allProps

  const keyProperties = dataProps.slice(0, 8) || []
  const hasMoreProps = dataProps.length > 8

  const nodeStyles: Record<string, string> = {
    entity: "border-purple-500 bg-purple-50",
    "related-entity": "border-green-500 bg-green-50",
    abstract: "border-blue-500 bg-blue-50",
  }

  const categoryBorderBg: Record<string, string> = {
    "master-data": "border-red-300 bg-red-50",
    "reference-data": "border-emerald-500 bg-emerald-50",
    "work-product-component": "border-yellow-300 bg-yellow-50",
  }

  let nodeStyle = nodeStyles[nodeType as string] || "border-gray-500 bg-gray-50"
  if (nodeType === "related-entity") {
    if (category && categoryBorderBg[category]) nodeStyle = categoryBorderBg[category]
    else nodeStyle = "border-green-300 bg-green-50"
  }

  const colorMap: Record<string, { bg: string; border: string; text?: string }> = {
    entity: { bg: "#f5f3ff", border: "#7c3aed", text: "#451a7a" },
    abstract: { bg: "#eff6ff", border: "#3b82f6", text: "#1e40af" },
    "master-data": { bg: "#fff1f2", border: "#fca5a5", text: "#7f1d1d" },
    "reference-data": { bg: "#ecfdf5", border: "#34d399", text: "#065f46" },
    "work-product-component": { bg: "#fffbeb", border: "#fcd34d", text: "#5c3d00" },
    defaultRelated: { bg: "#f3f4f6", border: "#9ca3af", text: "#374151" },
  }

  let inlineBg = "#ffffff"
  let inlineBorder = "#e5e7eb"
  let inlineText = undefined as string | undefined

  if (nodeType === "entity") {
    inlineBg = colorMap.entity.bg
    inlineBorder = colorMap.entity.border
    inlineText = colorMap.entity.text
  } else if (nodeType === "abstract") {
    inlineBg = colorMap.abstract.bg
    inlineBorder = colorMap.abstract.border
    inlineText = colorMap.abstract.text
  } else if (nodeType === "related-entity") {
    if (category && (colorMap as any)[category]) {
      inlineBg = (colorMap as any)[category].bg
      inlineBorder = (colorMap as any)[category].border
      inlineText = (colorMap as any)[category].text
    } else {
      inlineBg = colorMap.defaultRelated.bg
      inlineBorder = colorMap.defaultRelated.border
      inlineText = colorMap.defaultRelated.text
    }
  }

  return (
    <div
      className={`erd-entity-node border-2 ${nodeStyle} rounded-lg shadow-lg min-w-200 max-w-280 cursor-move hover:shadow-xl transition-shadow`}
      style={{ backgroundColor: inlineBg, borderColor: inlineBorder }}
    >
      <Handle type="target" id="left-target" position={Position.Left} style={{ opacity: 0, width: 10, height: 10 }} />
      <Handle type="source" id="left" position={Position.Left} style={{ opacity: 0, width: 10, height: 10 }} />
      <Handle type="source" id="right-source" position={Position.Right} style={{ opacity: 0, width: 10, height: 10 }} />
      <Handle type="target" id="right" position={Position.Right} style={{ opacity: 0, width: 10, height: 10 }} />
      <div className="px-3 py-2 border-b font-bold text-sm" style={inlineText ? { color: inlineText } : undefined}>
        <div className="truncate">{label}</div>
        {subtitle && <div className="text-xs opacity-75 truncate">{subtitle}</div>}
      </div>
      {keyProperties.length > 0 && (
        <div className="px-3 py-2">
          <div className="text-xs font-semibold text-gray-600 mb-1">Properties</div>
          {keyProperties.map((prop: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs py-0-5 border-b border-gray-100 last-border-b-0">
              <span className={`truncate font-medium ${prop.required ? "text-red-600" : "text-gray-700"}`}>
                {prop.name.split(".").pop()}
                {prop.required && " *"}
              </span>
              <span className="text-gray-500 text-xs ml-2 truncate">{prop.type || "any"}</span>
            </div>
          ))}
          {hasMoreProps && <div className="text-xs text-gray-500 mt-1">... +{dataProps.length - 8} more</div>}
        </div>
      )}

      {erdRelationships?.length > 0 && (
        <div className="px-3 py-2 border-t bg-gray-50">
          <div className="text-xs font-semibold text-gray-600 mb-1">Relationships</div>
          {erdRelationships.slice(0, 3).map((rel: any, idx: number) => {
            const isConnectable = rel.isConnectable
            return (
              <div key={idx} className={`text-xs truncate ${isConnectable ? "text-orange-700" : "text-gray-600"}`}>
                {isConnectable && "🔗 "}
                {rel.sourceProperty} → {rel.targetEntity}
                {isConnectable && " (connectable)"}
              </div>
            )
          })}
          {erdRelationships.length > 3 && (
            <div className="text-xs text-gray-500">... +{erdRelationships.length - 3} more</div>
          )}
        </div>
      )}
    </div>
  )
})
