import { describe, it, expect } from "vitest"
import { isSchemaDocument, parseSchemaFiles } from "./localSchemas"

const file = (path: string, content: unknown) => ({
  path,
  file: { text: async () => (typeof content === "string" ? content : JSON.stringify(content)) },
})
const schema = (extra: any = {}) => ({ $schema: "https://json-schema.org/draft/2020-12/schema", ...extra })

describe("isSchemaDocument", () => {
  it("accepts a described JSON schema", () => {
    expect(isSchemaDocument(schema({ title: "Well" }))).toBe(true)
    expect(isSchemaDocument(schema({ properties: {} }))).toBe(true)
  })
  it("rejects look-alikes", () => {
    expect(isSchemaDocument(null)).toBe(false)
    expect(isSchemaDocument([])).toBe(false)
    expect(isSchemaDocument({ title: "x" })).toBe(false)
    expect(isSchemaDocument(schema())).toBe(false)
    expect(isSchemaDocument({ $schema: "http://example.com/other", title: "x" })).toBe(false)
  })
})

describe("parseSchemaFiles", () => {
  it("keeps schemas, skips everything else, and reports progress", async () => {
    const progress: number[] = []
    const { models, index, skipped } = await parseSchemaFiles(
      [
        file("a/Well.json", schema({ $id: "osdu:Well", title: "Well" })),
        file("a/notes.txt", "hello"),
        file("a/broken.json", "{ not json"),
        file("a/data.json", { foo: 1 }),
        file("b/NoTitle.json", schema({ $id: "osdu:NoTitle" })),
      ],
      (d) => progress.push(d),
      2
    )
    expect(models.map((m) => m.path)).toEqual(["a/Well.json", "b/NoTitle.json"])
    expect(models[0]).toMatchObject({ id: "osdu:Well", title: "Well" })
    expect(models[1].title).toBe("b/NoTitle.json")
    expect(Object.keys(index)).toEqual(["a/Well.json", "b/NoTitle.json"])
    expect(skipped).toBe(2)
    expect(progress[progress.length - 1]).toBe(4)
  })

  it("handles an empty list", async () => {
    const res = await parseSchemaFiles([])
    expect(res.models).toEqual([])
  })
})
