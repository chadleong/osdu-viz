import { describe, it, expect } from "vitest"
import {
  flattenSchema,
  diffProperties,
  diffLines,
  toSideBySide,
  inlineDiff,
  collapseUnchanged,
  summarize,
} from "./schemaDiff"
import { parseRoute, compareHash } from "./guides"
import { groupRef } from "./schemaVersions"

const abstractV1 = { properties: { Name: { type: "string", description: "Name" } } }
const abstractV2 = { properties: { Name: { type: "string", description: "The name" }, Code: { type: "string" } } }
const index = {
  "/data/Generated/abstract/AbstractThing.1.0.0.min.json": abstractV1,
  "/data/Generated/abstract/AbstractThing.1.1.0.min.json": abstractV2,
}
const v1 = {
  properties: {
    id: { type: "string" },
    data: {
      allOf: [
        { $ref: "../abstract/AbstractThing.1.0.0.json" },
        { properties: { Old: { type: "string" }, Depth: { type: "number" } }, required: ["Depth"] },
      ],
    },
  },
}
const v2 = {
  properties: {
    id: { type: "string" },
    data: {
      allOf: [
        { $ref: "../abstract/AbstractThing.1.1.0.json" },
        {
          properties: {
            Depth: { type: "string", "x-osdu-relationship": [{ GroupType: "master-data", EntityType: "Well" }] },
            New: { type: "array", items: { type: "string" } },
          },
        },
      ],
    },
  },
}

describe("flattenSchema", () => {
  it("inlines $ref'd abstract schemas and marks required properties", () => {
    const f = flattenSchema(v1, index)
    expect(f.get("data")?.ref).toBeUndefined()
    expect(f.get("data.Name")?.description).toBe("Name")
    expect(f.get("data.Depth")?.required).toBe(true)
    expect(flattenSchema(v2, index).get("data.New")?.type).toBe("array<string>")
  })
})

describe("diffProperties", () => {
  it("reports added, removed and changed fields", () => {
    const rows = diffProperties(flattenSchema(v1, index), flattenSchema(v2, index))
    const by = Object.fromEntries(rows.map((r) => [r.name, r]))
    expect(by["data.Old"].status).toBe("removed")
    expect(by["data.New"].status).toBe("added")
    expect(by["data.Code"].status).toBe("added")
    expect(by["data.Name"].changed).toEqual(["description"])
    expect(by["data.Depth"].changed).toEqual(["type", "relationships", "required"])
    expect(by["id"].status).toBe("unchanged")
    expect(summarize(rows)).toMatchObject({ added: 2, removed: 1, changed: 2 })
    // removed property stays near its old neighbour
    expect(rows.findIndex((r) => r.name === "data.Old")).toBeGreaterThan(rows.findIndex((r) => r.name === "data.Name"))
  })
})

describe("diffLines", () => {
  const apply = (a: string[], b: string[]) => {
    const ops = diffLines(a, b)
    // equal + delete reproduce a, equal + insert reproduce b
    expect(ops.filter((o) => o.type !== "insert").map((o) => a[o.a!])).toEqual(a)
    expect(ops.filter((o) => o.type !== "delete").map((o) => b[o.b!])).toEqual(b)
    return ops
  }
  it("finds a minimal edit script", () => {
    const ops = apply("a b c d e f".split(" "), "a x c d f g".split(" "))
    expect(ops.filter((o) => o.type !== "equal")).toHaveLength(4)
  })
  it("handles empty and identical inputs", () => {
    expect(apply([], ["x"]).map((o) => o.type)).toEqual(["insert"])
    expect(apply(["x"], []).map((o) => o.type)).toEqual(["delete"])
    expect(apply(["x", "y"], ["x", "y"]).every((o) => o.type === "equal")).toBe(true)
  })
  it("is consistent on random input", () => {
    let seed = 7
    const rnd = () => ((seed = (seed * 16807) % 2147483647) % 4).toString()
    for (let t = 0; t < 30; t++) {
      apply(Array.from({ length: 30 }, rnd), Array.from({ length: 25 }, rnd))
    }
  })
  it("pairs replaced lines side by side", () => {
    const rows = toSideBySide(diffLines(["a", "b", "c"], ["a", "B", "c", "d"]))
    expect(rows.map((r) => r.kind)).toEqual(["equal", "change", "equal", "insert"])
  })
})

describe("helpers", () => {
  it("splits inline changes", () => {
    expect(inlineDiff('"type": "string"', '"type": "number"').b).toEqual(['"type": "', "number", '"'])
  })
  it("collapses unchanged runs outside the context", () => {
    const rows = toSideBySide(diffLines("0123456789".split(""), "01234X6789".split("")))
    const h = collapseUnchanged(rows, 1)
    expect(h.map((x) => [x.type, x.rows.length])).toEqual([
      ["gap", 4],
      ["rows", 3],
      ["gap", 3],
    ])
  })
  it("routes to the compare view", () => {
    expect(parseRoute(compareHash("master-data/Well", "1.0.0", "1.5.0"))).toEqual({
      view: "compare",
      ref: "master-data/Well",
      from: "1.0.0",
      to: "1.5.0",
    })
    expect(parseRoute("#/compare")).toEqual({ view: "compare", ref: undefined, from: undefined, to: undefined })
    expect(groupRef({ path: "/data/Generated/master-data/Well.1.5.0.min.json" })).toBe("master-data/Well")
  })
})
