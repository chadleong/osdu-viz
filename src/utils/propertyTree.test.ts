import { describe, it, expect } from "vitest"
import { buildPropertyTree, countDescendants } from "./propertyTree"

const p = (name: string, type?: string) => ({ name, type })

describe("buildPropertyTree", () => {
  it("nests dotted names under their parent object", () => {
    const tree = buildPropertyTree([
      p("data.HistoricalInterests", "array"),
      p("data.HistoricalInterests.Name", "string"),
      p("data.HistoricalInterests.Share", "number"),
      p("data.Other", "string"),
    ])
    expect(tree.map((n) => n.prop.name)).toEqual(["data.HistoricalInterests", "data.Other"])
    expect(tree[0].children.map((n) => n.prop.name)).toEqual([
      "data.HistoricalInterests.Name",
      "data.HistoricalInterests.Share",
    ])
    expect(tree[1].children).toHaveLength(0)
  })

  it("supports several levels and counts only direct children in children.length", () => {
    const tree = buildPropertyTree([
      p("data.A", "object"),
      p("data.A.B", "object"),
      p("data.A.B.C", "string"),
      p("data.A.D", "string"),
    ])
    expect(tree[0].children).toHaveLength(2)
    expect(countDescendants(tree[0])).toBe(3)
  })

  it("synthesises missing parents as objects", () => {
    const tree = buildPropertyTree([p("data.Geo.Lat", "number")])
    expect(tree[0].prop).toMatchObject({ name: "data.Geo", type: "object" })
    expect(tree[0].children[0].prop.name).toBe("data.Geo.Lat")
  })

  it("keeps the first of duplicate names and handles single-segment names", () => {
    const tree = buildPropertyTree([p("data.X", "string"), p("data.X", "number"), p("solo", "string")])
    expect(tree).toHaveLength(2)
    expect(tree[0].prop.type).toBe("string")
  })

  it("returns an empty tree for no properties", () => {
    expect(buildPropertyTree([])).toEqual([])
  })
})
