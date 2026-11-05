import React, { useCallback, useMemo, useState, useEffect, useRef } from "react"
import {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
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
import { validateEdges } from "../utils/edges"
import { NODE_COLORS, getNodeColors } from "../utils/nodeColors"

const LEGEND_ENTITIES: Array<{ key: string; label: string }> = [
  { key: "entity", label: "Main Entity" },
  { key: "master-data", label: "Related: Master Data" },
  { key: "reference-data", label: "Related: Reference Data" },
  { key: "work-product-component", label: "Related: Work Product Component" },
  { key: "defaultRelated", label: "Related: Other/Unknown" },
  { key: "abstract", label: "Abstract Schema" },
]

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
  theme?: "light" | "dark"
}

export default function SchemaGraph({ nodes, edges, onSchemaSelect, theme = "light" }: Props) {
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
          theme={theme}
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
                {LEGEND_ENTITIES.map(({ key, label }) => (
                  <div key={key} className="flex items-center mb-1">
                    <div
                      style={{
                        width: 16,
                        height: 12,
                        backgroundColor: NODE_COLORS[key].bg,
                        border: `1px solid ${NODE_COLORS[key].border}`,
                        borderRadius: 4,
                        marginRight: 8,
                      }}
                    ></div>
                    <span>{label}</span>
                  </div>
                ))}
                <div className="mb-2" />

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

        {activeNode && (
          <PropertyTooltip
            node={activeNode}
            onClose={() => setActiveNode(null)}
            onHoverProperty={(payload) => {
              // delegate to GraphRenderer via custom event on window so inner component can react
              const e = new CustomEvent("osdu:tooltip:prophover", { detail: payload })
              window.dispatchEvent(e)
            }}
            onLeaveProperty={() => window.dispatchEvent(new CustomEvent("osdu:tooltip:propleave"))}
          />
        )}
      </div>
    </ReactFlowProvider>
  )
}

type GraphRendererProps = {
  nodes: Node[]
  edges: Edge[]
  onSchemaSelect?: (idOrTerm: string) => void
  theme: "light" | "dark"
  activeNode: Node | null
  pinnedNodeId: string | null
  setActiveNode: (node: Node | null) => void
  setPinnedNodeId: (id: string | null) => void
}

function GraphRenderer({
  nodes,
  edges,
  onSchemaSelect,
  theme,
  activeNode,
  pinnedNodeId,
  setActiveNode,
  setPinnedNodeId,
}: GraphRendererProps) {
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState<Node<CustomNodeData>>([])
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState<Edge<CustomEdgeData>>([])
  const [hoverNodeId, setHoverNodeId] = useState<string | null>(null)
  const [hoveredProp, setHoveredProp] = useState<{ name?: string; ref?: string } | null>(null)
  const { fitView } = useReactFlow()
  const lastFitKey = useRef<string | null>(null)

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
    function onPropHover(e: any) {
      setHoveredProp(e?.detail || null)
    }
    function onPropLeave() {
      setHoveredProp(null)
    }

    window.addEventListener("osdu:tooltip:prophover", onPropHover as EventListener)
    window.addEventListener("osdu:tooltip:propleave", onPropLeave as EventListener)
    return () => {
      window.removeEventListener("osdu:tooltip:prophover", onPropHover as EventListener)
      window.removeEventListener("osdu:tooltip:propleave", onPropLeave as EventListener)
    }
  }, [])

  // Whenever hoveredProp changes, update edges styles to highlight matching edges
  useEffect(() => {
    if (!hoveredProp) {
      // clear any highlight
      setRfEdges(
        (es) =>
          es.map((e) => ({ ...e, style: (e.data as any)?.__baseStyle || e.style })) as unknown as Edge<CustomEdgeData>[]
      )
      return
    }

    // compute highlight: match by sourceProperty label or by ref path
    const targetName = hoveredProp.name?.toString().toLowerCase()
    const targetRef = hoveredProp.ref?.toString()

    setRfEdges(
      (es) =>
        es.map((e) => {
          const baseStyle = (e.data as any)?.__baseStyle || e.style || {}
          const srcProp = String((e.data as any)?.sourceProperty || "").toLowerCase()
          const label = String(e.label || "").toLowerCase()
          const matchesName = targetName && (srcProp.includes(targetName) || label.includes(targetName))
          const matchesRef =
            targetRef &&
            (String(e.source).includes(targetRef) ||
              String(e.target).includes(targetRef) ||
              String(e.id).includes(targetRef))
          const newData = {
            ...(e.data as any),
            __baseStyle: baseStyle,
            type: String((e.data as any)?.type || "references"),
          }
          if (matchesName || matchesRef) {
            return {
              ...e,
              data: newData as any,
              style: { ...(baseStyle || {}), strokeWidth: 4, filter: "drop-shadow(0 0 8px rgba(59,130,246,0.9))" },
            }
          }
          return { ...e, data: newData as any, style: { ...(baseStyle || {}), opacity: 0.15 } }
        }) as unknown as Edge<CustomEdgeData>[]
    )
  }, [hoveredProp])
  // Set nodes with dragging enabled and edges with validation
  useEffect(() => {
    setRfNodes(
      nodes.map((n) => ({
        ...n,
        data: { ...n.data, label: n.data?.label || "" } as CustomNodeData,
        draggable: true,
      }))
    )

    const validatedEdges = validateEdges(edges, nodes)
    const nodeById = new Map(nodes.map((n) => [n.id, n]))

    // Group edges by source->target so we can stagger label offsets when multiple edges share same connector
    const validated = validatedEdges as Edge<CustomEdgeData>[]
    const groups = new Map<string, Edge<CustomEdgeData>[]>()
    for (const e of validated) {
      const key = `${e.source}-->${e.target}`
      const arr = groups.get(key) || []
      arr.push(e)
      groups.set(key, arr)
    }

    setRfEdges(
      validated.map((e) => {
        // compute index within group and total count
        const key = `${e.source}-->${e.target}`
        const arr = groups.get(key) || []
        const idx = arr.findIndex((x) => x.id === e.id)
        const total = arr.length
        const edgeType = e.data?.type

        let edgeStyle: any = {}
        let label = ""
        let markerColor = "#6b7280"

        switch (edgeType) {
          case "connectable":
            label = (e.data as any)?.sourceProperty ? `🔗 ${(e.data as any).sourceProperty}` : "connectable"
            edgeStyle = {
              stroke: "#f97316",
              strokeWidth: 3,
              strokeDasharray: "8,4",
            }
            markerColor = "#f97316"
            break
          case "erd-relationship":
            label = (e.data as any)?.sourceProperty ? `${(e.data as any).sourceProperty}` : "relates to"
            edgeStyle = {
              stroke: "#059669",
              strokeWidth: 2,
              strokeDasharray: "none",
            }
            markerColor = "#059669"
            break
          case "inheritance":
            label = "extends"
            edgeStyle = {
              stroke: "#7c3aed",
              strokeWidth: 2,
              strokeDasharray: "5,5",
            }
            markerColor = "#7c3aed"
            break
          default:
            label =
              (typeof (e.data as any)?.label === "string" ? (e.data as any).label : "") ||
              (typeof (e.data as any)?.type === "string" ? (e.data as any).type : "") ||
              "references"
            edgeStyle = {
              stroke: "#475569",
              strokeWidth: 2,
              strokeDasharray: "none",
            }
            markerColor = "#475569"
        }

        const sourceNode = nodeById.get(e.source)
        const targetNode = nodeById.get(e.target)

        const isMainToAbstract =
          (sourceNode as any)?.data?.nodeType === "entity" && (targetNode as any)?.data?.nodeType === "abstract"

        const isMainToRelated =
          (sourceNode as any)?.data?.nodeType === "entity" && (targetNode as any)?.data?.nodeType === "related-entity"

        const handleProps = isMainToRelated
          ? { sourceHandle: "right-source", targetHandle: "left-target" }
          : isMainToAbstract
          ? { sourceHandle: "left", targetHandle: "right" }
          : {}

        // compute label vertical offset so labels are spaced when multiple edges share same path
        const labelYOffset = total > 1 ? Math.round((idx - (total - 1) / 2) * 14) : 0

        return {
          ...e,
          ...handleProps,
          // use the custom stacked edge renderer so we can position labels without overlap
          type: "stacked",
          label,
          labelStyle: {
            fill: "#374151",
            fontWeight: 600,
            fontSize: "10px",
            background: "white",
            padding: "2px 6px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
            // keep this for fallback, actual SVG label positioning is handled by StackedEdge
            transform: `translateY(${labelYOffset}px)`,
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
          data: { ...(e.data as any), type: edgeType || "references", labelOffsetY: labelYOffset } as CustomEdgeData,
        }
      }) as unknown as Edge<CustomEdgeData>[]
    )
    // Only re-fit when the set of nodes changes, so unrelated updates don't reset the user's pan/zoom
    const nodesKey = nodes.map((n) => n.id).join("|")
    if (lastFitKey.current !== nodesKey) {
      lastFitKey.current = nodesKey
      fitView({ padding: 0.2 })
    }
  }, [nodes, edges, setRfNodes, setRfEdges, fitView])

  // recolor connectors based on selection state without rebuilding/fitView to avoid layout jumps
  useEffect(() => {
    if (hoveredProp) return // let hover highlighting take precedence

    const deriveBorderColorForNode = (n: any) => getNodeColors(n?.data?.nodeType, n?.data?.category)?.border

    const defaultConnectorColor = "#6b7280"

    const nodeById = new Map((nodes || []).map((n) => [n.id, n]))
    setRfEdges(
      (es) =>
        es.map((e) => {
          const base = (e.data as any)?.__baseStyle || e.style || {}
          let stroke = defaultConnectorColor
          if (activeNode) {
            const targetNode = nodeById.get(e.target)
            const downstreamColor = deriveBorderColorForNode(targetNode)
            if (downstreamColor) stroke = downstreamColor
          }
          const markerEnd = (e as any).markerEnd ? { ...(e as any).markerEnd, color: stroke } : undefined
          return { ...e, style: { ...base, stroke }, ...(markerEnd ? { markerEnd } : {}) }
        }) as unknown as Edge<CustomEdgeData>[]
    )
  }, [activeNode, hoveredProp, nodes, setRfEdges])

  const onNodeClick = useCallback(
    (_e: any, node: Node) => {
      setActiveNode(node)
      setHoverNodeId(null)
      setPinnedNodeId(node.id)
      // emphasize selected node with a thicker border and glow, keep others normal
      setRfNodes((ns) =>
        ns.map((n) => ({
          ...n,
          style:
            node.id === n.id
              ? {
                  boxShadow: "0 0 0 6px rgba(99,102,241,0.25)",
                  outline: "3px solid rgba(124,58,237,0.9)",
                  outlineOffset: "-2px",
                }
              : {},
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
                stroke: "#c3c5c5ff",
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
      colorMode={theme}
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
        nodeStrokeColor={(n) => getNodeColors((n.data as any)?.nodeType, (n.data as any)?.category)?.border ?? "#9ca3af"}
        nodeColor={(n) =>
          getNodeColors((n.data as any)?.nodeType, (n.data as any)?.category)?.[theme === "dark" ? "border" : "bg"] ??
          (theme === "dark" ? "#374151" : "#e5e7eb")
        }
        nodeBorderRadius={2}
        position="bottom-left"
      />
    </ReactFlow>
  )
}
