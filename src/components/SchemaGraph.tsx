import React, { useCallback, useMemo, useState, useEffect } from "react"
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  MarkerType,
  NodeTypes,
  NodeChange,
  EdgeChange,
  Handle,
  Position,
} from "reactflow"
import "reactflow/dist/style.css"
import { layoutWithDagre } from "../utils/layout"
import { PropertyTooltip } from "./Tooltip"

type Props = {
  nodes: Node[]
  edges: Edge[]
  onSchemaSelect?: (idOrTerm: string) => void
}

// Edge validation utility
function validateEdges(edges: Edge[], nodes: Node[]): Edge[] {
  const nodeIds = new Set(nodes.map((n) => n.id))

  return edges
    .filter((edge) => {
      // Check if source and target nodes exist
      if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) {
        console.warn(`Removing invalid edge: ${edge.source} -> ${edge.target}`)
        return false
      }

      // Ensure edge has required properties
      if (!edge.id) {
        console.warn("Removing edge without id")
        return false
      }

      return true
    })
    .map((edge) => {
      // Strip handle keys entirely if present
      const { sourceHandle, targetHandle, ...clean } = edge as any
      return clean as Edge
    })
}

function DefaultNode({ data }: any) {
  return (
    <div className="node">
      {/* React Flow handles ensure edges have valid anchors */}
      <Handle type="target" position={Position.Left} style={{ opacity: 0, width: 8, height: 8 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0, width: 8, height: 8 }} />
      <div className="node-title">{data.label}</div>
      {data.subtitle && <div className="node-sub">{data.subtitle}</div>}
    </div>
  )
}

function ErdEntityNode({ data }: any) {
  const { label, subtitle, properties, erdRelationships, nodeType, category } = data

  // Limit properties for display (show key properties and relationships)
  const keyProperties = properties?.slice(0, 8) || []
  const hasMoreProps = properties?.length > 8

  const nodeStyles: Record<string, string> = {
    entity: "border-purple-500 bg-purple-50",
    "related-entity": "border-green-500 bg-green-50",
    abstract: "border-blue-500 bg-blue-50",
  }

  // Override related-entity style by category when available
  const categoryBorderBg: Record<string, string> = {
    "master-data": "border-red-300 bg-red-50",
    "reference-data": "border-emerald-500 bg-emerald-50",
    "work-product-component": "border-yellow-300 bg-yellow-50",
  }

  let nodeStyle = nodeStyles[nodeType as string] || "border-gray-500 bg-gray-50"
  if (nodeType === "related-entity") {
    if (category && categoryBorderBg[category]) {
      nodeStyle = categoryBorderBg[category]
    } else {
      // fallback for related-entity with no category
      nodeStyle = "border-green-300 bg-green-50"
    }
  }
  // Provide explicit inline colors so dynamic classes don't fail when CSS is purged
  const colorMap: Record<string, { bg: string; border: string; text?: string }> = {
    entity: { bg: "#f5f3ff", border: "#7c3aed", text: "#451a7a" }, // purple-50 / purple-500
    abstract: { bg: "#eff6ff", border: "#3b82f6", text: "#1e40af" }, // blue-50 / blue-500
    "master-data": { bg: "#fff1f2", border: "#fca5a5", text: "#7f1d1d" }, // red-50 / red-300
    "reference-data": { bg: "#ecfdf5", border: "#34d399", text: "#065f46" }, // emerald-50 / emerald-500
    "work-product-component": { bg: "#fffbeb", border: "#fcd34d", text: "#5c3d00" }, // yellow-50 / yellow-300
    defaultRelated: { bg: "#ecfdf5", border: "#86efac", text: "#065f46" },
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
      {/* React Flow handles ensure edges have valid anchors */}
      <Handle type="target" position={Position.Left} style={{ opacity: 0, width: 10, height: 10 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0, width: 10, height: 10 }} />
      {/* Header */}
  <div className="px-3 py-2 border-b font-bold text-sm" style={inlineText ? { color: inlineText } : undefined}>
        <div className="truncate">{label}</div>
        {subtitle && <div className="text-xs opacity-75 truncate">{subtitle}</div>}
      </div>

      {/* Properties */}
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
          {hasMoreProps && <div className="text-xs text-gray-500 mt-1">... +{properties.length - 8} more</div>}
        </div>
      )}

      {/* ERD Relationships */}
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
}

const nodeTypes: NodeTypes = {
  default: DefaultNode,
  "erd-entity": ErdEntityNode,
}

export default function SchemaGraph({ nodes, edges, onSchemaSelect }: Props) {
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState([])
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState([])
  const [activeNode, setActiveNode] = useState<Node | null>(null)
  const [showLegend, setShowLegend] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const laidOut = useMemo(() => layoutWithDagre(nodes, edges), [nodes, edges])

  // Check if this is ERD view
  const isErdView = nodes.some((n) => n.type === "erd-entity")

  // Custom nodes change handler to track dragging and validate edges
  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => {
      // Check for position changes (dragging)
      const hasPositionChange = changes.some((change) => change.type === "position")

      if (hasPositionChange) {
        // After any position change, re-validate edges to prevent React Flow errors
        setTimeout(() => {
          setRfEdges((currentEdges) => validateEdges(currentEdges, rfNodes))
        }, 50)
      }

      onNodesChange(changes)
    },
    [onNodesChange, rfNodes, setRfEdges]
  )

  // Custom edges change handler to prevent problematic edge updates
  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      // Filter out edge changes that might cause issues
      const safeChanges = changes.filter((change) => {
        // Allow removal but be cautious about updates
        if (change.type === "remove") return true
        if (change.type === "reset") return true
        // Skip other edge changes that might cause handle errors
        return false
      })

      if (safeChanges.length > 0) {
        onEdgesChange(safeChanges)
      }
    },
    [onEdgesChange]
  )

  React.useEffect(() => {
    // Set nodes with dragging enabled
    setRfNodes(
      laidOut.nodes.map((n) => ({
        ...n,
        data: { ...n.data },
        draggable: true,
      }))
    )

    // Set edges with validation
    const validatedEdges = validateEdges(laidOut.edges, laidOut.nodes)
    setRfEdges(
      validatedEdges.map((e) => {
        const edgeType = e.data?.type

        let edgeStyle: any = {}
        let label = ""
        let markerColor = "#6b7280"

        switch (edgeType) {
          case "connectable":
            label = e.data?.sourceProperty ? `🔗 ${e.data.sourceProperty}` : "connectable"
            edgeStyle = {
              stroke: "#f97316", // orange for connectables
              strokeWidth: 3,
              strokeDasharray: "8,4",
            }
            markerColor = "#f97316"
            break
          case "erd-relationship":
            label = e.data?.sourceProperty ? `${e.data.sourceProperty}` : "relates to"
            edgeStyle = {
              stroke: "#059669", // green for relationships
              strokeWidth: 2,
              strokeDasharray: "none",
            }
            markerColor = "#059669"
            break
          case "inheritance":
            label = "extends"
            edgeStyle = {
              stroke: "#7c3aed", // purple for inheritance
              strokeWidth: 2,
              strokeDasharray: "5,5",
            }
            markerColor = "#7c3aed"
            break
          default:
            label = e.data?.label || e.data?.type || "references"
            edgeStyle = {
              stroke: "#0891b2", // cyan for references
              strokeWidth: 2,
              strokeDasharray: "none",
            }
            markerColor = "#0891b2"
        }
        return {
          ...e,
          label,
          labelStyle: {
            fill: "#374151",
            fontWeight: 600,
            fontSize: "10px",
            background: "white",
            padding: "2px 6px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          },
          labelBgStyle: {
            fill: "white",
            stroke: "#d1d5db",
            strokeWidth: 1,
            fillOpacity: 0.95,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: markerColor,
            width: 18,
            height: 18,
          },
          animated: edgeType === "erd-relationship",
          style: edgeStyle,
        }
      })
    )
  }, [laidOut, setRfNodes, setRfEdges])

  const onNodeClick = useCallback(
    (_e: any, node: Node) => {
      setActiveNode(node)
      // emphasize neighborhood
      setRfNodes((ns) =>
        ns.map((n) => ({
          ...n,
          style: node.id === n.id ? { boxShadow: "0 0 0 3px #2563eb" } : {},
        }))
      )
      setRfEdges((es) =>
        es.map((e) => {
          const edgeType = e.data?.type
          let baseStyle: any = {}

          switch (edgeType) {
            case "connectable":
              baseStyle = {
                stroke: "#f97316",
                strokeWidth: 3,
                strokeDasharray: "8,4",
              }
              break
            case "erd-relationship":
              baseStyle = {
                stroke: "#059669",
                strokeWidth: 2,
                strokeDasharray: "none",
              }
              break
            case "inheritance":
              baseStyle = {
                stroke: "#7c3aed",
                strokeWidth: 2,
                strokeDasharray: "5,5",
              }
              break
            default:
              baseStyle = {
                stroke: "#0891b2",
                strokeWidth: 2,
                strokeDasharray: "none",
              }
          }

          const isNeighbor = e.source === node.id || e.target === node.id
          return {
            ...e,
            style: isNeighbor
              ? { ...baseStyle, strokeWidth: 3, filter: "drop-shadow(0 0 6px rgba(37,99,235,.8))" }
              : { ...baseStyle, opacity: 0.3 },
          }
        })
      )
    },
    [setRfNodes, setRfEdges]
  )

  const onPaneClick = useCallback(() => {
    setActiveNode(null)
    setRfNodes((ns) => ns.map((n) => ({ ...n, style: {} })))
    setRfEdges((es) => es.map((e) => ({ ...e, style: {} })))
  }, [])

  // Close panel with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveNode(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Double-click to navigate: entity or abstract schema becomes the main entity
  const onNodeDoubleClick = useCallback(
    (_e: any, node: Node) => {
      const idCandidate = (node?.data as any)?.schemaId || (node?.data as any)?.label || node?.id
      if (onSchemaSelect && idCandidate) {
        onSchemaSelect(String(idCandidate))
      }
    },
    [onSchemaSelect]
  )

  return (
    <div
      className="graph-container"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        paddingRight: activeNode ? 420 : 0,
      }}
    >
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background />
        <Controls />
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0"
            if (n.type === "output") return "#ff0072"
            if (n.type === "default") return "#1a192b"
            return "#eee"
          }}
          nodeColor={(n) => {
            if (n.type === "input") return "#0041d0"
            if (n.type === "output") return "#ff0072"
            if (n.type === "default") return "#1a192b"
            return "#fff"
          }}
          nodeBorderRadius={2}
          position="bottom-left"
        />
      </ReactFlow>

      {/* Legend for ERD view */}
      {isErdView && (
        <div className="absolute top-4" style={{ right: activeNode ? 440 : 16 }}>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="px-3 py-2 bg-white border border-gray-300 rounded shadow text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {showLegend ? "Hide Legend" : "Show Legend"}
          </button>

          {showLegend && (
            <div className="mt-2 p-3 bg-white border border-gray-300 rounded shadow-lg text-xs">
              <div className="font-semibold mb-2">Entity Types</div>
              <div className="flex items-center mb-1">
                <div className="w-4 h-3 bg-purple-100 border border-purple-500 rounded mr-2"></div>
                <span>Main Entity</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-4 h-3 bg-red-100 border border-red-300 rounded mr-2"></div>
                <span>Related: Master Data</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-4 h-3 bg-emerald-100 border border-emerald-500 rounded mr-2"></div>
                <span>Related: Reference Data</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-4 h-3 bg-yellow-100 border border-yellow-300 rounded mr-2"></div>
                <span>Related: Work Product Component</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-4 h-3 bg-green-100 border border-green-500 rounded mr-2"></div>
                <span>Related: Other/Unknown</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-4 h-3 bg-blue-100 border border-blue-500 rounded mr-2"></div>
                <span>Abstract Schema</span>
              </div>

              <div className="font-semibold mb-2">Relationship Types</div>
              <div className="flex items-center mb-1">
                <div className="w-6 h-1 bg-orange-500 mr-2" style={{ borderRadius: "1px" }}></div>
                <span>🔗 Connectable</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-6 h-1 bg-green-600 mr-2" style={{ borderRadius: "1px" }}></div>
                <span>Relationship</span>
              </div>
              <div className="flex items-center">
                <div
                  className="w-6 h-1 bg-blue-600 mr-2"
                  style={{ borderRadius: "1px", borderBottom: "1px dashed" }}
                ></div>
                <span>Inheritance</span>
              </div>
            </div>
          )}
        </div>
      )}

      {activeNode && <PropertyTooltip node={activeNode} onClose={() => setActiveNode(null)} />}
    </div>
  )
}
