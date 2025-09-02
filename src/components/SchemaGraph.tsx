import React, { useCallback, useMemo, useState, useEffect } from "react"
import {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  XYPosition,
  Position,
  useNodesState,
  useEdgesState,
  MarkerType,
  NodeChange,
  EdgeChange,
  useReactFlow,
  ReactFlowProvider,
  ReactFlow,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { layoutWithDagre } from "../utils/layout"
import { PropertyTooltip } from "./Tooltip"
import { nodeTypes, edgeTypes } from "./rf-configs"

// Define explicit types for nodes and edges with required properties
interface CustomNodeData {
  [key: string]: unknown
  label: string
  subtitle?: string
}

interface CustomEdgeData {
  [key: string]: unknown
  type: string
}

type CustomNode = Node<CustomNodeData>
type CustomEdge = Edge<CustomEdgeData>

type Props = {
  nodes: Node[]
  edges: Edge[]
  onSchemaSelect?: (idOrTerm: string) => void
}

// Edge validation utility
function validateEdges(edges: Edge[], nodes: Node[]): Edge[] {
  const nodeIds = new Set(nodes.map((n) => n.id))
  const mainNode = nodes.find((n) => (n as any).data?.nodeType === "entity")
  const mainNodeId = mainNode?.id
  // Build a quick alias map for ref-like ids to actual node ids
  const aliasMap = new Map<string, string>()
  for (const n of nodes) {
    const id = n.id
    // If this node is an abstract with schema/file info, create aliases that may appear in edges
    const d: any = (n as any).data || {}
    if (d.nodeType === "abstract") {
      const last =
        String(d.schemaId || d.filePath || d.label || id)
          .split("/")
          .pop() || ""
      const normLast = last.replace(/[^a-zA-Z0-9_.-]/g, "_")
      aliasMap.set(`ref::${normLast}`, id)
      aliasMap.set(normLast, id)
    }
  }

  // helper to try to resolve an id that doesn't directly exist by fuzzy-matching
  const findMatchingNodeId = (rawId: string | undefined) => {
    if (!rawId) return undefined
    if (nodeIds.has(rawId)) return rawId
    const lastSegment = String(rawId).split("::").pop() || rawId
    const compact = String(lastSegment)
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
    for (const n of nodes) {
      const compNode = String(n.id)
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
      if (!compact) continue
      if (compNode.endsWith(compact) || compNode.includes(compact)) {
        console.log(`Resolved missing id '${rawId}' -> '${n.id}' via fuzzy match`)
        return n.id
      }
    }
    return undefined
  }

  const remapped = edges
    .map((edge) => {
      // If source/target are missing, try to resolve via fuzzy match
      let source = edge.source
      let target = edge.target

      if (!nodeIds.has(source)) {
        const resolved = findMatchingNodeId(source)
        if (resolved) source = resolved
        else if (mainNodeId) source = mainNodeId
      }
      if (!nodeIds.has(target)) {
        const resolved = findMatchingNodeId(target)
        if (resolved) target = resolved
        else if (aliasMap.has(target)) target = aliasMap.get(target) as string
      }

      if (!source || !target || !nodeIds.has(source) || !nodeIds.has(target) || source === target) {
        console.warn(`Removing invalid edge: ${edge.source} -> ${edge.target}`)
        return null
      }

      if (!edge.id) {
        console.warn("Removing edge without id")
        return null
      }

      return { ...edge, source, target } as Edge | null
    })
    .filter(Boolean) as Edge[]

  const preserved = remapped.map((edge) => {
    // Preserve handle keys (sourceHandle/targetHandle) if present so anchors remain stable
    const { sourceHandle, targetHandle, ...rest } = edge as any
    const preserved: any = { ...rest }
    if (typeof sourceHandle !== "undefined") preserved.sourceHandle = sourceHandle
    if (typeof targetHandle !== "undefined") preserved.targetHandle = targetHandle
    return preserved as Edge
  })

  return preserved
}

export default function SchemaGraph({ nodes, edges, onSchemaSelect }: Props) {
  const [activeNode, setActiveNode] = useState<Node | null>(null)
  const [pinnedNodeId, setPinnedNodeId] = useState<string | null>(null)
  const [showLegend, setShowLegend] = useState(false)

  const laidOut = useMemo(() => layoutWithDagre(nodes, edges), [nodes, edges])

  // Check if this is ERD view
  const isErdView = nodes.some((n) => n.type === "erd-entity")

  // Close panel with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveNode(null)
        setPinnedNodeId(null)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Close tooltip when the incoming main schema/node changes (e.g., user switched schema)
  const mainSchemaKey = useMemo(() => {
    const mainNode = nodes.find((n) => (n as any).data?.nodeType === "entity") || nodes[0]
    return `${mainNode?.id || ""}::${(mainNode as any)?.data?.schemaId || ""}`
  }, [nodes])

  useEffect(() => {
    // When schema changes and nothing is selected, keep tooltip closed until user hovers
    if (!pinnedNodeId) {
      setActiveNode(null)
    }
  }, [mainSchemaKey, pinnedNodeId])

  return (
    <ReactFlowProvider>
      <div
        className="graph-container"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          paddingRight: activeNode ? 420 : 0,
        }}
      >
        <GraphRenderer
          nodes={laidOut.nodes}
          edges={laidOut.edges}
          onSchemaSelect={onSchemaSelect}
          setActiveNode={setActiveNode}
          setPinnedNodeId={setPinnedNodeId}
          activeNode={activeNode}
          pinnedNodeId={pinnedNodeId}
        />

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
                  <div
                    style={{
                      width: 16,
                      height: 12,
                      backgroundColor: "#f5f3ff",
                      border: "1px solid #7c3aed",
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  ></div>
                  <span>Main Entity</span>
                </div>
                <div className="flex items-center mb-1">
                  <div
                    style={{
                      width: 16,
                      height: 12,
                      backgroundColor: "#fff1f2",
                      border: "1px solid #fca5a5",
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  ></div>
                  <span>Related: Master Data</span>
                </div>
                <div className="flex items-center mb-1">
                  <div
                    style={{
                      width: 16,
                      height: 12,
                      backgroundColor: "#ecfdf5",
                      border: "1px solid #34d399",
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  ></div>
                  <span>Related: Reference Data</span>
                </div>
                <div className="flex items-center mb-1">
                  <div
                    style={{
                      width: 16,
                      height: 12,
                      backgroundColor: "#fffbeb",
                      border: "1px solid #fcd34d",
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  ></div>
                  <span>Related: Work Product Component</span>
                </div>
                <div className="flex items-center mb-3">
                  <div
                    style={{
                      width: 16,
                      height: 12,
                      backgroundColor: "#f3f4f6",
                      border: "1px solid #9ca3af",
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  ></div>
                  <span>Related: Other/Unknown</span>
                </div>
                <div className="flex items-center mb-3">
                  <div
                    style={{
                      width: 16,
                      height: 12,
                      backgroundColor: "#eff6ff",
                      border: "1px solid #3b82f6",
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  ></div>
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
    </ReactFlowProvider>
  )
}

type GraphRendererProps = {
  nodes: Node[]
  edges: Edge[]
  onSchemaSelect?: (idOrTerm: string) => void
  activeNode: Node | null
  pinnedNodeId: string | null
  setActiveNode: (node: Node | null) => void
  setPinnedNodeId: (id: string | null) => void
}

function GraphRenderer({
  nodes,
  edges,
  onSchemaSelect,
  activeNode,
  pinnedNodeId,
  setActiveNode,
  setPinnedNodeId,
}: GraphRendererProps) {
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState<Node<CustomNodeData>>([])
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState<Edge<CustomEdgeData>>([])
  const [hoverNodeId, setHoverNodeId] = useState<string | null>(null)
  const { fitView } = useReactFlow()

  // Custom nodes change handler to track dragging and validate edges
  const handleNodesChange = useCallback(
    (changes: NodeChange<any>[]) => {
      onNodesChange(changes)
    },
    [onNodesChange]
  )

  // Custom edges change handler to prevent problematic edge updates
  const handleEdgesChange = useCallback(
    (changes: EdgeChange<any>[]) => {
      // Filter out edge changes that might cause issues
      const safeChanges = changes.filter((change) => {
        // Allow removal but be cautious about updates
        if (change.type === "remove") return true
        // Skip other edge changes that might cause handle errors
        return false
      })

      if (safeChanges.length > 0) {
        onEdgesChange(safeChanges)
      }
    },
    [onEdgesChange]
  )

  useEffect(() => {
    // Set nodes with dragging enabled
    setRfNodes(
      nodes.map((n) => ({
        ...n,
        data: { ...n.data, label: n.data?.label || "" } as CustomNodeData,
        draggable: true,
      }))
    )

    // Set edges with validation
    const validatedEdges = validateEdges(edges, nodes)
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
            label =
              (typeof e.data?.label === "string" ? e.data.label : "") ||
              (typeof e.data?.type === "string" ? e.data.type : "") ||
              "references"
            edgeStyle = {
              stroke: "#0891b2", // cyan for references
              strokeWidth: 2,
              strokeDasharray: "none",
            }
            markerColor = "#0891b2"
        }
        // if this edge links main entity -> abstract, force left->right anchors
        const sourceNode = (nodes || []).find((n) => n.id === e.source)
        const targetNode = (nodes || []).find((n) => n.id === e.target)

        const isMainToAbstract =
          (sourceNode as any)?.data?.nodeType === "entity" && (targetNode as any)?.data?.nodeType === "abstract"

        const isMainToRelated =
          (sourceNode as any)?.data?.nodeType === "entity" && (targetNode as any)?.data?.nodeType === "related-entity"

        // prefer related mapping first for clear right-side connection, else abstract left-side mapping
        const handleProps = isMainToRelated
          ? { sourceHandle: "right-source", targetHandle: "left-target" }
          : isMainToAbstract
          ? { sourceHandle: "left", targetHandle: "right" }
          : {}

        return {
          ...e,
          ...handleProps,
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
          data: { ...e.data, type: edgeType || "references" } as CustomEdgeData,
        }
      })
    )
    fitView({ padding: 0.2 })
  }, [nodes, edges, setRfNodes, setRfEdges, fitView])

  const onNodeClick = useCallback(
    (_e: any, node: Node) => {
      setActiveNode(node)
      setHoverNodeId(null)
      setPinnedNodeId(node.id)
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
    [setRfNodes, setRfEdges, setActiveNode, setPinnedNodeId]
  )

  const onPaneClick = useCallback(() => {
    setActiveNode(null)
    setHoverNodeId(null)
    setPinnedNodeId(null)
    setRfNodes((ns) => ns.map((n) => ({ ...n, style: {} })))
    setRfEdges((es) => es.map((e) => ({ ...e, style: {} })))
  }, [setRfNodes, setRfEdges, setActiveNode, setPinnedNodeId])

  // Double-click to navigate: entity or abstract schema becomes the main entity
  const onNodeDoubleClick = useCallback(
    (_e: any, node: Node) => {
      const d: any = node?.data || {}
      // Prefer filePath (index key) like the dropdown does; fallback to schemaId, then label, then id
      let idCandidate = d.filePath || d.schemaId || d.label || node?.id
      // If still not an index key and looks like $id, try to find a node that has filePath for the same schema
      if (!d.filePath && d.schemaId) {
        const compact = String(d.schemaId).split("/").slice(-1)[0]?.toLowerCase()
        const match = (nodes || []).find((n: any) =>
          String(n?.data?.filePath || "")
            .toLowerCase()
            .endsWith(compact || "")
        )
        if (match?.data?.filePath) idCandidate = match.data.filePath
      }
      if (onSchemaSelect && idCandidate) {
        onSchemaSelect(String(idCandidate))
      }
    },
    [onSchemaSelect, nodes]
  )

  return (
    <ReactFlow
      nodes={rfNodes}
      edges={rfEdges}
      onNodesChange={handleNodesChange}
      onEdgesChange={handleEdgesChange}
      onNodeClick={onNodeClick}
      onNodeDoubleClick={onNodeDoubleClick}
      onPaneClick={onPaneClick}
      onNodeMouseEnter={(_e: React.MouseEvent, node: CustomNode) => {
        if (pinnedNodeId) return // disable hover while a node is selected
        const d: any = node?.data || {}
        // Open tooltip on hover for any ERD node, including the main entity, when not pinned
        if (d?.nodeType === "entity" || d?.nodeType === "related-entity" || d?.nodeType === "abstract") {
          setActiveNode(node)
          setHoverNodeId(node.id)
        }
      }}
      onNodeMouseLeave={(_e: React.MouseEvent, node: CustomNode) => {
        if (hoverNodeId && hoverNodeId === node.id) {
          setHoverNodeId(null)
          // If nothing is pinned, close tooltip when leaving node
          if (!pinnedNodeId) {
            setActiveNode(null)
          }
        }
      }}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
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
  )
}
