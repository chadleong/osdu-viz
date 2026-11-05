import { describe, it, expect } from "vitest"
import { baseName, cleanRef, findBestMatch } from "./schemaMatch"

const items = [
  { path: "/data/master-data/WellLog.1.0.0.min.json", title: "WellLog", id: "osdu:wks:master-data--WellLog:1.0.0" },
  { path: "/data/master-data/Well.1.0.0.min.json", title: "Well", id: "osdu:wks:master-data--Well:1.0.0" },
  { path: "/data/abstract/AbstractFoo.1.0.0.min.json", title: "AbstractFoo", id: "osdu:wks:AbstractFoo:1.0.0" },
]

describe("cleanRef / baseName", () => {
  it("strips relative prefixes", () => {
    expect(cleanRef("../abstract/Foo.json")).toBe("abstract/Foo.json")
    expect(cleanRef("./Foo.json")).toBe("Foo.json")
  })
  it("strips extension and version", () => {
    expect(baseName("/a/Well.1.0.0.min.json")).toBe("Well")
    expect(baseName("RigType.json")).toBe("RigType")
  })
})

describe("findBestMatch", () => {
  it("prefers exact title over a longer name containing it", () => {
    expect(findBestMatch("Well", items)?.title).toBe("Well")
  })
  it("still prefers the exact title when fuzzy matching is on", () => {
    expect(findBestMatch("Well", items, { fuzzy: true })?.title).toBe("Well")
  })
  it("matches exact path", () => {
    expect(findBestMatch("/data/master-data/Well.1.0.0.min.json", items)?.title).toBe("Well")
  })
  it("matches a relative $ref via the .min.json variant", () => {
    expect(findBestMatch("../abstract/AbstractFoo.1.0.0.json", items)?.title).toBe("AbstractFoo")
  })
  it("requires a path-segment boundary", () => {
    const list = [{ path: "/data/XFoo.json" }]
    expect(findBestMatch("Foo.json", list)).toBeUndefined()
    expect(findBestMatch("XFoo.json", list)).toBeDefined()
  })
  it("matches the entity name inside a $id, delimited", () => {
    const list = [{ id: "osdu:wks:master-data--WellLog:1.0.0" }, { id: "osdu:wks:master-data--Well:1.0.0" }]
    expect(findBestMatch("well", list)?.id).toContain("--Well:")
  })
  it("only falls back to substring matching when fuzzy", () => {
    expect(findBestMatch("ellLo", items)).toBeUndefined()
    expect(findBestMatch("ellLo", items, { fuzzy: true })?.title).toBe("WellLog")
  })
  it("handles empty input", () => {
    expect(findBestMatch("", items)).toBeUndefined()
    expect(findBestMatch("Well", [])).toBeUndefined()
  })
})
