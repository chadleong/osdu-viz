import dagre from "dagre"
import type { Edge, Node, XYPosition } from "reactflow"

const nodeWidth = 240
const nodeHeight = 80

export function layoutWithDagre(nodes: Node[], edges: Edge[]): { nodes: Node[]; edges: Edge[] } {
  const g = new dagre.graphlib.Graph()
  g.setDefaultEdgeLabel(() => ({}))
  g.setGraph({ rankdir: "TB", nodesep: 40, ranksep: 80, edgesep: 20 })

  nodes.forEach((n) => g.setNode(n.id, { width: nodeWidth, height: nodeHeight }))
  edges.forEach((e) => g.setEdge(e.source, e.target))

  dagre.layout(g)

  const laidOutNodes = nodes.map((n) => {
    const pos = g.node(n.id)
    const position: XYPosition = { x: pos.x - nodeWidth / 2, y: pos.y - nodeHeight / 2 }
    return { ...n, position }
  })

  return { nodes: laidOutNodes, edges }
}
