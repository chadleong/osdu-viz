import { describe, it, expect } from "vitest"
import type { Edge, Node } from "@xyflow/react"
import { layoutWithDagre } from "./layout"

const erd = (id: string, nodeType: string): Node => ({
  id,
  type: "erd-entity",
  position: { x: 0, y: 0 },
  data: { nodeType },
})

describe("layoutWithDagre (ERD)", () => {
  const nodes = [
    erd("main", "entity"),
    erd("a1", "abstract"),
    erd("a2", "abstract"),
    ...Array.from({ length: 7 }, (_, i) => erd(`r${i}`, "related-entity")),
  ]
  const edges: Edge[] = nodes.slice(1).map((n) => ({ id: `e-${n.id}`, source: "main", target: n.id }))
  const out = layoutWithDagre(nodes, edges).nodes
  const byId = new Map(out.map((n) => [n.id, n]))

  it("keeps every node and the main entity at the origin", () => {
    expect(out).toHaveLength(nodes.length)
    expect(byId.get("main")!.position).toEqual({ x: 0, y: 0 })
  })
  it("puts abstract nodes left and related nodes right of the main entity", () => {
    expect(byId.get("a1")!.position.x).toBeLessThan(0)
    expect(byId.get("r0")!.position.x).toBeGreaterThan(0)
  })
  it("leaves no two nodes overlapping", () => {
    for (let i = 0; i < out.length; i++)
      for (let j = i + 1; j < out.length; j++) {
        const overlap =
          Math.abs(out[i].position.x - out[j].position.x) < 300 && Math.abs(out[i].position.y - out[j].position.y) < 180
        expect(overlap, `${out[i].id} overlaps ${out[j].id}`).toBe(false)
      }
  })
})

describe("layoutWithDagre (default)", () => {
  it("assigns finite positions", () => {
    const nodes: Node[] = [
      { id: "a", position: { x: 0, y: 0 }, data: {}, type: "default" },
      { id: "b", position: { x: 0, y: 0 }, data: {}, type: "default" },
    ]
    const out = layoutWithDagre(nodes, [{ id: "e", source: "a", target: "b" }]).nodes
    out.forEach((n) => {
      expect(Number.isFinite(n.position.x)).toBe(true)
      expect(Number.isFinite(n.position.y)).toBe(true)
    })
  })
})
