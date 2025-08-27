import dagre from "dagre"
import type { Edge, Node, XYPosition } from "reactflow"

const erdNodeWidth = 280
const erdNodeHeight = 120
const defaultNodeWidth = 240
const defaultNodeHeight = 80

// Enhanced clustering layout for ERD view
export function layoutWithDagre(nodes: Node[], edges: Edge[]): { nodes: Node[]; edges: Edge[] } {
  const g = new dagre.graphlib.Graph()
  g.setDefaultEdgeLabel(() => ({}))

  // Detect if this is ERD view by checking node types
  const isErdView = nodes.some((n) => n.type === "erd-entity")

  if (isErdView) {
    return layoutErdClustered(nodes, edges)
  }

  // Original layout for non-ERD view
  g.setGraph({ rankdir: "TB", nodesep: 40, ranksep: 80, edgesep: 20 })
  nodes.forEach((n) => g.setNode(n.id, { width: defaultNodeWidth, height: defaultNodeHeight }))
  edges.forEach((e) => g.setEdge(e.source, e.target))
  dagre.layout(g)

  const laidOutNodes = nodes.map((n) => {
    const pos = g.node(n.id)
    const position: XYPosition = { x: pos.x - defaultNodeWidth / 2, y: pos.y - defaultNodeHeight / 2 }
    return { ...n, position }
  })

  return { nodes: laidOutNodes, edges }
}

function layoutErdClustered(nodes: Node[], edges: Edge[]): { nodes: Node[]; edges: Edge[] } {
  // Categorize nodes by type
  const mainEntities = nodes.filter((n) => n.data.nodeType === "entity")
  const relatedEntities = nodes.filter((n) => n.data.nodeType === "related-entity")
  const abstractEntities = nodes.filter((n) => n.data.nodeType === "abstract")

  // Calculate clusters with better spacing
  const clusterSpacing = 400
  const nodeSpacing = 220
  const verticalSpacing = 180

  const laidOutNodes: Node[] = []

  // Main entity at center
  if (mainEntities.length > 0) {
    const mainEntity = mainEntities[0]
    laidOutNodes.push({
      ...mainEntity,
      position: { x: 0, y: 0 },
    })
  }

  // Abstract entities on the left (inheritance)
  abstractEntities.forEach((node, index) => {
    laidOutNodes.push({
      ...node,
      position: {
        x: -clusterSpacing,
        y: (index - Math.floor(abstractEntities.length / 2)) * verticalSpacing,
      },
    })
  })

  // Related entities in a circular/grid pattern around the main entity
  if (relatedEntities.length > 0) {
    const entityConnections = getEntityConnectionCounts(relatedEntities, edges)

    // Sort related entities by connection count (most connected first)
    const sortedRelated = relatedEntities.sort(
      (a, b) => (entityConnections[b.id] || 0) - (entityConnections[a.id] || 0)
    )

    if (sortedRelated.length <= 6) {
      // Circular layout for small number of entities
      layoutEntitiesCircular(sortedRelated, laidOutNodes, clusterSpacing)
    } else {
      // Grid layout for larger number of entities
      layoutEntitiesGrid(sortedRelated, laidOutNodes, clusterSpacing, nodeSpacing)
    }
  }

  return { nodes: laidOutNodes, edges }
}

function getEntityConnectionCounts(entities: Node[], edges: Edge[]): Record<string, number> {
  const counts: Record<string, number> = {}

  entities.forEach((entity) => {
    counts[entity.id] = edges.filter((edge) => edge.source === entity.id || edge.target === entity.id).length
  })

  return counts
}

function layoutEntitiesCircular(entities: Node[], laidOutNodes: Node[], radius: number) {
  entities.forEach((entity, index) => {
    const angle = (2 * Math.PI * index) / entities.length
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    laidOutNodes.push({
      ...entity,
      position: { x, y },
    })
  })
}

function layoutEntitiesGrid(entities: Node[], laidOutNodes: Node[], clusterSpacing: number, nodeSpacing: number) {
  const rightSideEntities = entities.slice(0, Math.ceil(entities.length / 2))
  const bottomEntities = entities.slice(Math.ceil(entities.length / 2))

  // Right side entities (primary relationships)
  rightSideEntities.forEach((entity, index) => {
    laidOutNodes.push({
      ...entity,
      position: {
        x: clusterSpacing,
        y: (index - Math.floor(rightSideEntities.length / 2)) * nodeSpacing,
      },
    })
  })

  // Bottom entities (secondary relationships)
  bottomEntities.forEach((entity, index) => {
    laidOutNodes.push({
      ...entity,
      position: {
        x: (index - Math.floor(bottomEntities.length / 2)) * nodeSpacing,
        y: clusterSpacing,
      },
    })
  })
}
