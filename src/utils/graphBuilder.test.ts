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

  it("resolves ../abstract/*.json $ref to indexed .min.json paths", () => {
    // schema references an abstract by relative path with .json
    const refSchema = {
      $id: "https://schema.osdu.opengroup.org/json/master-data/Example.1.0.0.json",
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Example",
      type: "object",
      properties: {
        acl: { $ref: "../abstract/AbstractAccessControlList.1.0.0.json" },
      },
    }

    const index = {
      "/data/Generated/abstract/AbstractAccessControlList.1.0.0.min.json": {
        $id: "https://schema.osdu.opengroup.org/json/abstract/AbstractAccessControlList.1.0.0.json",
        $schema: "http://json-schema.org/draft-07/schema#",
        title: "Access Control List",
      },
    }

    const m = {
      id: refSchema.$id,
      title: refSchema.title,
      schema: refSchema,
      path: "/data/Generated/master-data/Example.1.0.0.json",
    }
    const { nodes } = buildGraph(m as any, { index, erdView: true })

    // There should be an abstract node for the referenced acl
    const abstractNode = nodes.find((n) => (n as any).data?.nodeType === "abstract")
    expect(abstractNode).toBeTruthy()
    // The abstract node should have the resolved schema attached from the index
    expect((abstractNode as any).data?.schema).toBeTruthy()
    expect(((abstractNode as any).data?.schema || {}).$id).toBe(
      "https://schema.osdu.opengroup.org/json/abstract/AbstractAccessControlList.1.0.0.json"
    )
  })
})
