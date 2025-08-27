import dagre from "dagre"
import type { Edge, Node, XYPosition } from "reactflow"

const erdNodeWidth = 300
const erdNodeHeight = 180
const defaultNodeWidth = 240
const defaultNodeHeight = 80

// Simple collision resolution to ensure nodes don't stack
function resolveCollisions(nodes: Node[], padding = 40, iterations = 8): Node[] {
  const getSize = (n: Node) => {
    const isErd = n.type === "erd-entity"
    return {
      w: isErd ? erdNodeWidth : defaultNodeWidth,
      h: isErd ? erdNodeHeight : defaultNodeHeight,
    }
  }

  // Prefer keeping the main entity fixed at (0,0)
  const isAnchored = (n: Node) => (n.data as any)?.nodeType === "entity"

  for (let iter = 0; iter < iterations; iter++) {
    let moved = false
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]
        const b = nodes[j]
        const sa = getSize(a)
        const sb = getSize(b)
        const minDx = (sa.w + sb.w) / 2 + padding
        const minDy = (sa.h + sb.h) / 2 + padding

        const dx = b.position.x - a.position.x
        const dy = b.position.y - a.position.y

        const overlapX = Math.abs(dx) < minDx
        const overlapY = Math.abs(dy) < minDy

        if (overlapX && overlapY) {
          // Compute push amounts
          const pushX = (minDx - Math.abs(dx)) / 2
          const pushY = (minDy - Math.abs(dy)) / 2

          const signX = dx === 0 ? (j % 2 === 0 ? 1 : -1) : Math.sign(dx)
          const signY = dy === 0 ? (i % 2 === 0 ? 1 : -1) : Math.sign(dy)

          // If one is anchored, move only the other
          if (isAnchored(a) && !isAnchored(b)) {
            b.position = {
              x: b.position.x + pushX * signX,
              y: b.position.y + pushY * signY,
            }
          } else if (!isAnchored(a) && isAnchored(b)) {
            a.position = {
              x: a.position.x - pushX * signX,
              y: a.position.y - pushY * signY,
            }
          } else {
            // Move both
            a.position = {
              x: a.position.x - pushX * signX,
              y: a.position.y - pushY * signY,
            }
            b.position = {
              x: b.position.x + pushX * signX,
              y: b.position.y + pushY * signY,
            }
          }

          moved = true
        }
      }
    }
    if (!moved) break
  }
  return nodes
}

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
  g.setGraph({ rankdir: "TB", nodesep: 80, ranksep: 140, edgesep: 40 })
  nodes.forEach((n) => g.setNode(n.id, { width: defaultNodeWidth, height: defaultNodeHeight }))
  edges.forEach((e) => g.setEdge(e.source, e.target))
  dagre.layout(g)

  const laidOutNodes = nodes.map((n) => {
    const pos = g.node(n.id)
    const position: XYPosition = { x: pos.x - defaultNodeWidth / 2, y: pos.y - defaultNodeHeight / 2 }
    return { ...n, position }
  })

  return { nodes: resolveCollisions(laidOutNodes, 80), edges }
}

function layoutErdClustered(nodes: Node[], edges: Edge[]): { nodes: Node[]; edges: Edge[] } {
  // Categorize nodes by type
  const mainEntities = nodes.filter((n) => n.data.nodeType === "entity")
  const relatedEntities = nodes.filter((n) => n.data.nodeType === "related-entity")
  const abstractEntities = nodes.filter((n) => n.data.nodeType === "abstract")

  // Calculate clusters with better spacing
  const clusterSpacing = 600 // horizontal distance from center to side clusters
  const nodeSpacing = 260 // spacing between nodes in a column/row
  const verticalSpacing = 220

  const laidOutNodes: Node[] = []

  // Main entity at center
  if (mainEntities.length > 0) {
    const mainEntity = mainEntities[0]
    laidOutNodes.push({
      ...mainEntity,
      position: { x: 0, y: 0 },
    })
  }

  // Abstract entities on the LEFT (single or multi column if many)
  layoutLeftColumns(abstractEntities, laidOutNodes, clusterSpacing, verticalSpacing, nodeSpacing)

  // Related entities on the RIGHT (multi-column grid); keep right side only
  if (relatedEntities.length > 0) {
    const entityConnections = getEntityConnectionCounts(relatedEntities, edges)
    const sortedRelated = relatedEntities
      .slice()
      .sort((a, b) => (entityConnections[b.id] || 0) - (entityConnections[a.id] || 0))
    layoutRightGrid(sortedRelated, laidOutNodes, clusterSpacing, nodeSpacing, verticalSpacing)
  }

  // Final collision pass to fix any stacking
  return { nodes: resolveCollisions(laidOutNodes, 120), edges }
}

function getEntityConnectionCounts(entities: Node[], edges: Edge[]): Record<string, number> {
  const counts: Record<string, number> = {}

  entities.forEach((entity) => {
    counts[entity.id] = edges.filter((edge) => edge.source === entity.id || edge.target === entity.id).length
  })

  return counts
}

// LEFT side: stack in 1-2 columns left of center depending on count
function layoutLeftColumns(
  entities: Node[],
  laidOut: Node[],
  clusterSpacing: number,
  verticalSpacing: number,
  nodeSpacing: number
) {
  if (entities.length === 0) return
  const maxRows = Math.ceil(entities.length / 2)
  const columns = entities.length > 10 ? 2 : 1
  const colWidth = erdNodeWidth + 80
  const startX = -clusterSpacing - (columns > 1 ? colWidth / 2 : 0)

  entities.forEach((node, i) => {
    const col = columns === 1 ? 0 : i % columns
    const row = columns === 1 ? i : Math.floor(i / columns)
    laidOut.push({
      ...node,
      position: {
        x: startX - col * colWidth,
        y: (row - Math.floor(maxRows / 2)) * verticalSpacing,
      },
    })
  })
}

// RIGHT side: grid with multiple columns, all on right side
function layoutRightGrid(
  entities: Node[],
  laidOut: Node[],
  clusterSpacing: number,
  nodeSpacing: number,
  verticalSpacing: number
) {
  if (entities.length === 0) return
  const columns = Math.min(3, Math.ceil(Math.sqrt(entities.length))) // up to 3 columns
  const rows = Math.ceil(entities.length / columns)
  const colWidth = erdNodeWidth + 100
  const x0 = clusterSpacing

  entities.forEach((entity, idx) => {
    const col = idx % columns
    const row = Math.floor(idx / columns)
    laidOut.push({
      ...entity,
      position: {
        x: x0 + col * colWidth,
        y: (row - Math.floor(rows / 2)) * verticalSpacing,
      },
    })
  })
}
