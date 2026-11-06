import { describe, it, expect } from "vitest"
import {
  parseRoute,
  guideHash,
  resolveLink,
  resolveImage,
  buildTree,
  schemaFromGuideName,
} from "./guides"
import { slugify, renderGuide } from "./guidesRender"

const files = new Set([
  "README.md",
  "Chapters/10-WellBasics.md",
  "Chapters/11-WellPlanningExecution.md",
  "MigrationGuides/M25.4/README.md",
])

describe("routes", () => {
  it("round-trips guide paths with spaces and anchors", () => {
    const h = guideHash("Chapters/My Doc.md", "a b")
    expect(parseRoute(h)).toEqual({ view: "guides", path: "Chapters/My Doc.md", anchor: "a b" })
  })
  it("defaults to the README and parses schema links", () => {
    expect(parseRoute("#/guides")).toEqual({ view: "guides", path: "README.md", anchor: undefined })
    expect(parseRoute("#/schema/master-data/Well.1.0.0.json")).toEqual({ view: "schema", ref: "master-data/Well.1.0.0.json" })
    expect(parseRoute("#nothing")).toBeNull()
  })
})

describe("resolveLink", () => {
  it("keeps links to bundled guides in the app", () => {
    expect(resolveLink("11-WellPlanningExecution.md", "Chapters/10-WellBasics.md", files)).toEqual({
      kind: "guide",
      path: "Chapters/11-WellPlanningExecution.md",
      anchor: undefined,
    })
    expect(resolveLink("../README.md#0-preface", "Chapters/10-WellBasics.md", files)).toEqual({
      kind: "guide",
      path: "README.md",
      anchor: "0-preface",
    })
    expect(resolveLink("#TOC", "Chapters/10-WellBasics.md", files)).toEqual({
      kind: "guide",
      path: "Chapters/10-WellBasics.md",
      anchor: "TOC",
    })
  })
  it("opens E-R schema docs in the graph", () => {
    expect(resolveLink("../../../E-R/reference-data/UnitOfMeasure.1.0.0.md", "MigrationGuides/M25.4/x.md", files)).toEqual({
      kind: "schema",
      ref: "reference-data/UnitOfMeasure.1.0.0.json",
    })
  })
  it("sends everything else upstream", () => {
    const r = resolveLink("../../Examples/WorkedExamples/WellLog", "Chapters/10-WellBasics.md", files)
    expect(r).toEqual({
      kind: "external",
      url: "https://community.opengroup.org/osdu/data/data-definitions/-/tree/master/Examples/WorkedExamples/WellLog",
    })
    expect(resolveLink("https://example.com/a", "README.md", files)).toEqual({ kind: "external", url: "https://example.com/a" })
    expect(resolveLink("Chapters/Missing.md", "README.md", files).kind).toBe("external")
  })
  it("resolves a folder link to its README", () => {
    expect(resolveLink("../MigrationGuides/M25.4", "Chapters/10-WellBasics.md", files)).toMatchObject({
      kind: "guide",
      path: "MigrationGuides/M25.4/README.md",
    })
  })
})

describe("images, slugs, names", () => {
  it("serves bundled images and falls back to upstream raw", () => {
    expect(resolveImage("Illustrations/01/a b.png", "Chapters/01.md", "/osdu-viz/")).toBe(
      "/osdu-viz/Guides/Chapters/Illustrations/01/a%20b.png"
    )
    expect(resolveImage("../../Examples/x.png", "Chapters/01.md", "/")).toContain("/-/raw/master/Examples/x.png")
  })
  it("slugifies like GitLab", () => {
    expect(slugify("0 Preface")).toBe("0-preface")
    expect(slugify("10.1 Well, Wellbore, Trajectory")).toBe("101-well-wellbore-trajectory")
  })
  it("parses schema names from migration guide files", () => {
    expect(schemaFromGuideName("MigrationGuides/M25.4/reference-data--UnitOfMeasure.1.0.0.md")).toEqual({
      group: "reference-data",
      name: "UnitOfMeasure",
      version: "1.0.0",
    })
    expect(schemaFromGuideName("Chapters/10-WellBasics.md")).toBeNull()
  })
})

describe("renderGuide", () => {
  const md = [
    '<a name="TOC"></a>',
    "[[_TOC_]]",
    "# 10 Well Domain",
    "## Links",
    "## Links",
    "[next](11-WellPlanningExecution.md) [ex](../../Examples/a) ![i](Illustrations/a.png)",
    ["| a | b |", "| - | - |", "| 1 | 2 |"].join("\n"),
    "<script>alert(1)</script>",
    "<OsduImportJSON>x</OsduImportJSON>",
  ].join("\n\n")
  const out = renderGuide(md, "Chapters/10-WellBasics.md", files, "/")

  it("rewrites links, images and wraps tables", () => {
    expect(out.html).toContain('href="#/guides/Chapters/11-WellPlanningExecution.md"')
    expect(out.html).toContain('href="https://community.opengroup.org/osdu/data/data-definitions/-/tree/master/Examples/a"')
    expect(out.html).toContain('target="_blank"')
    expect(out.html).toContain('src="/Guides/Chapters/Illustrations/a.png"')
    expect(out.html).toContain('class="guide-table-wrap"')
  })
  it("sanitizes scripts and drops the _TOC_ macro", () => {
    expect(out.html).not.toContain("<script")
    expect(out.html).not.toContain("_TOC_")
  })
  it("gives headings stable unique ids", () => {
    expect(out.headings.map((h) => h.id)).toEqual(["10-well-domain", "links", "links-1"])
    expect(out.html).toContain('name="TOC"')
  })
})

describe("buildTree", () => {
  it("orders the top-level folders and puts README first", () => {
    const t = buildTree([
      { p: "ReleaseReports/M27.0.html", t: "" },
      { p: "MigrationGuides/M9/a.md", t: "" },
      { p: "MigrationGuides/M10/a.md", t: "" },
      { p: "Chapters/b.md", t: "" },
      { p: "README.md", t: "" },
    ])
    expect(t.folders.map((f) => f.name)).toEqual(["Chapters", "MigrationGuides", "ReleaseReports"])
    expect(t.folders[1].folders.map((f) => f.name)).toEqual(["M9", "M10"])
    expect(t.files[0].p).toBe("README.md")
  })
})
