import { describe, it, expect } from "vitest"
import { getNodeColors, NODE_COLORS } from "./nodeColors"

describe("getNodeColors", () => {
  it("returns main/abstract colours", () => {
    expect(getNodeColors("entity")).toBe(NODE_COLORS.entity)
    expect(getNodeColors("abstract")).toBe(NODE_COLORS.abstract)
  })
  it("uses the category for related entities", () => {
    expect(getNodeColors("related-entity", "master-data")).toBe(NODE_COLORS["master-data"])
    expect(getNodeColors("related-entity", "reference-data")?.border).toBe("#34d399")
    expect(getNodeColors("related-entity", "work-product-component")?.border).toBe("#fcd34d")
  })
  it("falls back for unknown or missing category", () => {
    expect(getNodeColors("related-entity")).toBe(NODE_COLORS.defaultRelated)
    expect(getNodeColors("related-entity", "nope")).toBe(NODE_COLORS.defaultRelated)
  })
  it("returns undefined for unstyled node types", () => {
    expect(getNodeColors(undefined)).toBeUndefined()
    expect(getNodeColors("default")).toBeUndefined()
  })
})
