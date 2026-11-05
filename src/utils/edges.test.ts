import { describe, it, expect } from "vitest"
import type { Edge, Node } from "@xyflow/react"
import { validateEdges } from "./edges"

const node = (id: string, data: any = {}): Node => ({ id, position: { x: 0, y: 0 }, data })
const edge = (id: string, source: string, target: string): Edge => ({ id, source, target })

describe("validateEdges", () => {
  const nodes = [
    node("main", { nodeType: "entity" }),
    node("ref::abstract_AbstractFoo.1.0.0.json", {
      nodeType: "abstract",
      filePath: "/data/abstract/AbstractFoo.1.0.0.json",
    }),
    node("entity::Well", { nodeType: "related-entity" }),
  ]

  it("keeps valid edges", () => {
    expect(validateEdges([edge("e1", "main", "entity::Well")], nodes)).toHaveLength(1)
  })

  it("drops edges with unknown endpoints instead of re-attaching them to the main node", () => {
    expect(validateEdges([edge("e1", "does-not-exist", "entity::Well")], nodes)).toHaveLength(0)
  })

  it("drops self loops and edges without an id", () => {
    const out = validateEdges([edge("e1", "main", "main"), edge("", "main", "entity::Well")], nodes)
    expect(out).toHaveLength(0)
  })

  it("resolves an abstract node via its file-name alias", () => {
    const out = validateEdges([edge("e1", "main", "ref::AbstractFoo.1.0.0.json")], nodes)
    expect(out[0].target).toBe("ref::abstract_AbstractFoo.1.0.0.json")
  })

  it("does not guess when a fuzzy id is ambiguous", () => {
    const amb = [node("main"), node("entity::WellLog"), node("entity::Wellbore")]
    expect(validateEdges([edge("e1", "main", "entity::Well")], amb)).toHaveLength(0)
  })
})
