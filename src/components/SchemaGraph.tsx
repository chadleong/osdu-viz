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

const nodeTypes: NodeTypes = { default: DefaultNode }

export default function SchemaGraph({ nodes, edges }: Props) {
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState([])
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState([])
  const [activeNode, setActiveNode] = useState<Node | null>(null)

  const laidOut = useMemo(() => layoutWithDagre(nodes, edges), [nodes, edges])

  React.useEffect(() => {
    // add markers and interaction handlers
    setRfNodes(
      laidOut.nodes.map((n) => ({
        ...n,
        data: { ...n.data },
        draggable: false,
      }))
    )
    setRfEdges(
      laidOut.edges.map((e) => ({
        ...e,
        label: e.data?.type === "ref" ? "references" : e.data?.label || "relationship",
        labelStyle: {
          fill: "#374151",
          fontWeight: 600,
          fontSize: "11px",
          background: "white",
          padding: "2px 4px",
          borderRadius: "3px",
        },
        labelBgStyle: {
          fill: "white",
          stroke: "#d1d5db",
          strokeWidth: 1,
          fillOpacity: 0.9,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: e.data?.type === "ref" ? "#0891b2" : "#7c3aed",
          width: 20,
          height: 20,
        },
        animated: e.data?.type === "ref",
        style: {
          stroke: e.data?.type === "ref" ? "#0891b2" : "#7c3aed",
          strokeWidth: 2.5,
          strokeDasharray: e.data?.type === "ref" ? "none" : "5,5",
        },
      }))
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
          const base = {
            stroke: e.data?.type === "ref" ? "#0891b2" : "#7c3aed",
            strokeWidth: 2.5,
            strokeDasharray: e.data?.type === "ref" ? "none" : "5,5",
          }
          const isNeighbor = e.source === node.id || e.target === node.id
          return {
            ...e,
            style: isNeighbor
              ? { ...base, strokeWidth: 4, filter: "drop-shadow(0 0 6px rgba(37,99,235,.8))" }
              : { ...base, opacity: 0.3 },
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
    <div className="graph-container">
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        fitView
      >
        <MiniMap zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>
      {activeNode && <PropertyTooltip node={activeNode} onClose={() => setActiveNode(null)} />}
    </div>
  )
}
