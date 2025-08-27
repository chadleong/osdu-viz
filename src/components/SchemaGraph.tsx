import React, { useCallback, useMemo, useState } from "react"
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
} from "reactflow"
import "reactflow/dist/style.css"
import { layoutWithDagre } from "../utils/layout"
import { PropertyTooltip } from "./Tooltip"

type Props = {
  nodes: Node[]
  edges: Edge[]
}

function DefaultNode({ data }: any) {
  return (
    <div className="node">
      <div className="node-title">{data.label}</div>
      {data.subtitle && <div className="node-sub">{data.subtitle}</div>}
    </div>
  )
}

function ErdEntityNode({ data }: any) {
  const { label, subtitle, properties, erdRelationships, nodeType } = data

  // Limit properties for display (show key properties and relationships)
  const keyProperties = properties?.slice(0, 8) || []
  const hasMoreProps = properties?.length > 8

  const nodeStyles: Record<string, string> = {
    entity: "border-blue-500 bg-blue-50",
    "related-entity": "border-green-500 bg-green-50",
    abstract: "border-purple-500 bg-purple-50",
  }
  const nodeStyle = nodeStyles[nodeType as string] || "border-gray-500 bg-gray-50"

  return (
    <div
      className={`erd-entity-node border-2 ${nodeStyle} rounded-lg shadow-lg min-w-200 max-w-280 cursor-move hover:shadow-xl transition-shadow`}
    >
      {/* Header */}
      <div
        className={`px-3 py-2 border-b font-bold text-sm ${
          nodeType === "entity"
            ? "bg-blue-100 text-blue-900"
            : nodeType === "related-entity"
            ? "bg-green-100 text-green-900"
            : "bg-purple-100 text-purple-900"
        }`}
      >
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

export default function SchemaGraph({ nodes, edges }: Props) {
  console.log("SchemaGraph received:", { nodeCount: nodes.length, edgeCount: edges.length })

  const [rfNodes, setRfNodes, onNodesChange] = useNodesState([])
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState([])
  const [activeNode, setActiveNode] = useState<Node | null>(null)
  const [showLegend, setShowLegend] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const laidOut = useMemo(() => layoutWithDagre(nodes, edges), [nodes, edges])

  // Check if this is ERD view
  const isErdView = nodes.some((n) => n.type === "erd-entity")

  // Custom nodes change handler to track dragging
  const handleNodesChange = useCallback(
    (changes: any[]) => {
      const dragStart = changes.some((change) => change.type === "drag" && change.dragging)
      const dragEnd = changes.some((change) => change.type === "drag" && !change.dragging)

      if (dragStart) {
        setIsDragging(true)
      } else if (dragEnd) {
        setIsDragging(false)
      }

      onNodesChange(changes)
    },
    [onNodesChange]
  )

  React.useEffect(() => {
    console.log("Setting nodes and edges:", { nodeCount: laidOut.nodes.length, edgeCount: laidOut.edges.length })
    // add markers and interaction handlers
    setRfNodes(
      laidOut.nodes.map((n) => ({
        ...n,
        data: { ...n.data },
        draggable: true, // Enable dragging for all nodes
      }))
    )
    console.log("Nodes set to ReactFlow state")
    setRfEdges(
      laidOut.edges.map((e) => {
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

  return (
    <div className="graph-container" style={{ width: "100%", height: "100%" }}>
      {/* Debug info for ReactFlow state */}
      <div className="absolute top-4 right-4 z-50 bg-white p-2 rounded shadow text-xs">
        <div>RF Nodes: {rfNodes.length}</div>
        <div>RF Edges: {rfEdges.length}</div>
      </div>

      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        fitView
        className={isDragging ? "dragging" : ""}
      >
        <MiniMap zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>

      {/* Legend for ERD view */}
      {isErdView && (
        <div className="absolute top-4 right-4">
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
                <div className="w-4 h-3 bg-blue-100 border border-blue-500 rounded mr-2"></div>
                <span>Main Entity</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-4 h-3 bg-green-100 border border-green-500 rounded mr-2"></div>
                <span>Related Entity</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-4 h-3 bg-purple-100 border border-purple-500 rounded mr-2"></div>
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
                  className="w-6 h-1 bg-purple-600 mr-2"
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
