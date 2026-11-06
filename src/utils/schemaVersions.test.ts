import { describe, it, expect } from "vitest"
import { compareVersions, groupVersions, groupKey, versionOf } from "./schemaVersions"

const m = (path: string, version?: string) => ({ id: path, title: "T", schema: null, path, version })

describe("schemaVersions", () => {
  it("compares numerically, not lexically", () => {
    expect(compareVersions("1.10.0", "1.9.0")).toBeGreaterThan(0)
    expect(compareVersions("1.0.0", "1.0.0")).toBe(0)
    expect(compareVersions(undefined, "1.0.0")).toBeLessThan(0)
  })

  it("derives version and group key from the path", () => {
    expect(versionOf(m("/d/abstract/Foo.1.2.1.min.json"))).toBe("1.2.1")
    expect(groupKey(m("/d/abstract/Foo.1.2.1.min.json"))).toBe(groupKey(m("/d/abstract/Foo.1.0.0.min.json")))
    expect(groupKey(m("/d/abstract/Foo.1.0.0.min.json"))).not.toBe(groupKey(m("/d/master-data/Foo.1.0.0.min.json")))
  })

  it("groups versions newest first", () => {
    const g = groupVersions([
      m("/d/a/Foo.1.9.0.min.json", "1.9.0"),
      m("/d/a/Bar.1.0.0.min.json", "1.0.0"),
      m("/d/a/Foo.1.10.0.min.json", "1.10.0"),
    ])
    expect(g).toHaveLength(2)
    expect(g[0].latest.version).toBe("1.10.0")
    expect(g[0].versions.map((v) => v.version)).toEqual(["1.10.0", "1.9.0"])
  })
})
