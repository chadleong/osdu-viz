import { describe, it, expect } from "vitest"
import { buildGraph } from "./graphBuilder"

const sampleSchema = {
  $id: "osdu:wks:master-data--Well:1.0.0",
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Well",
  type: "object",
  properties: {
    id: { type: "string", description: "Identifier" },
    name: { type: "string" },
    rigType: {
      type: "object",
      properties: {
        RigTypeID: { $ref: "../reference-data/RigType.1.json" },
      },
    },
  },
  required: ["id", "name"],
}

const model = {
  id: sampleSchema.$id,
  title: sampleSchema.title,
  schema: sampleSchema,
  path: "/data/Generated/master-data/Well.json",
  // use the minified filename variant if available
  // ...existing code...
}

describe("buildGraph", () => {
  it("builds nodes and edges with ERD enabled", () => {
    const { nodes, edges } = buildGraph(model as any, { index: {}, erdView: true })
    expect(nodes.length).toBeGreaterThan(0)
    const main = nodes.find((n) => (n as any).data?.nodeType === "entity")
    expect(main).toBeTruthy()
    expect((main as any).data?.properties?.length).toBeGreaterThan(0)
    // has $ref captured in refs -> abstract node
    expect(edges.some((e) => (e.data as any)?.type === "inheritance")).toBe(true)
  })
})
