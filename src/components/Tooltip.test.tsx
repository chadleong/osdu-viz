import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { PropertyTooltip } from "./Tooltip"
import { isDeprecated } from "../utils/deprecated"

const nodeBase: any = {
  id: "n1",
  data: {
    label: "Entity",
    subtitle: "Entity subtitle",
    properties: [
      { name: "id", type: "string", required: true, depth: 1 },
      { name: "refProp", type: "$ref:../abstract/SomeRef.min.json", depth: 2 },
    ],
    relations: [],
    schema: { $id: "osdu:wks:master-data--Entity:1.0.0" },
  },
}

describe("PropertyTooltip", () => {
  it("shows required pill next to name and type on the right", () => {
    render(<PropertyTooltip node={nodeBase} onClose={() => {}} />)
    const idName = screen.getByText("id")
    expect(idName).toBeInTheDocument()
    const required = screen.getAllByText("required")[0]
    expect(required).toBeInTheDocument()
  })

  it("renders $ref on its own line below the property", () => {
    render(<PropertyTooltip node={nodeBase} onClose={() => {}} />)
    const refLine = screen.getByText(/\$ref:/)
    expect(refLine).toBeInTheDocument()
  })
})

describe("PropertyTooltip collapsible top-level section", () => {
  const node: any = {
    id: "n2",
    data: {
      label: "Entity",
      properties: [
        { name: "kind", type: "string", depth: 1 },
        { name: "data.Name", type: "string", depth: 2 },
      ],
      relations: [],
      schema: {},
    },
  }
  const toggle = () => screen.getByRole("button", { name: /Top-level properties \(1\)/ })

  it("is collapsed by default while nested properties stay visible", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    expect(toggle()).toHaveAttribute("aria-expanded", "false")
    expect(screen.getByText("kind")).not.toBeVisible()
    expect(screen.getByText("data.Name")).toBeVisible()
  })

  it("expands and collapses on click and keyboard", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    fireEvent.click(toggle())
    expect(toggle()).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("kind")).toBeVisible()
    fireEvent.keyDown(toggle(), { key: "Enter" })
    expect(toggle()).toHaveAttribute("aria-expanded", "false")
    fireEvent.keyDown(toggle(), { key: " " })
    expect(toggle()).toHaveAttribute("aria-expanded", "true")
  })

  it("reports hovered property name and ref", () => {
    const calls: any[] = []
    const n: any = {
      ...node,
      data: { ...node.data, properties: [{ name: "data.Ref", type: "$ref:../x/Y.json", depth: 2 }] },
    }
    render(<PropertyTooltip node={n} onClose={() => {}} onHoverProperty={(p) => calls.push(p)} />)
    fireEvent.mouseEnter(screen.getByText("data.Ref").closest("li")!)
    expect(calls).toEqual([{ name: "Ref", ref: "../x/Y.json" }])
  })
})

describe("PropertyTooltip nested object groups", () => {
  const node: any = {
    id: "n3",
    data: {
      label: "Entity",
      properties: [
        { name: "data", type: "object", depth: 1 },
        { name: "data.HistoricalInterests", type: "array", depth: 2 },
        { name: "data.HistoricalInterests.Name", type: "string", depth: 3 },
        { name: "data.HistoricalInterests.Share", type: "number", depth: 3 },
        { name: "data.Plain", type: "string", depth: 2 },
      ],
      relations: [],
      schema: {},
    },
  }
  const group = () => screen.getByRole("button", { name: /data\.HistoricalInterests \(2 attributes\)/ })

  it("shows object properties collapsed with their attribute count", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    expect(group()).toHaveAttribute("aria-expanded", "false")
    expect(screen.getByText("2 attributes")).toBeInTheDocument()
    expect(screen.queryByText("Name")).not.toBeInTheDocument()
    expect(screen.getByText("data.Plain")).toBeInTheDocument()
  })

  it("reveals child attributes (by short name) when expanded and hides them again", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    fireEvent.click(group())
    expect(group()).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Share")).toBeInTheDocument()
    fireEvent.keyDown(group(), { key: "Enter" })
    expect(screen.queryByText("Name")).not.toBeInTheDocument()
  })

  it("toggles when clicking anywhere on the row, not just the name", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    fireEvent.click(screen.getByText("2 attributes")) // the count, not the name
    expect(group()).toHaveAttribute("aria-expanded", "true")
    fireEvent.click(screen.getByText("2 attributes").closest("li") as HTMLElement) // the row itself
    expect(group()).toHaveAttribute("aria-expanded", "false")
    // clicking the name toggles exactly once (no double toggle from bubbling)
    fireEvent.click(screen.getByText("data.HistoricalInterests"))
    expect(group()).toHaveAttribute("aria-expanded", "true")
  })

  it("expands and collapses everything with the header buttons", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    fireEvent.click(screen.getByRole("button", { name: "Expand all" }))
    expect(screen.getByText("Name")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: "Collapse all" }))
    expect(screen.queryByText("Name")).not.toBeInTheDocument()
  })
})

describe("deprecated properties", () => {
  const node: any = {
    id: "n4",
    data: {
      label: "Entity",
      properties: [
        { name: "data.Old", type: "string", depth: 2, description: "DEPRECATED: please use data.New." },
        { name: "data.Marked", type: "string", depth: 2, description: "[DEPRECATED] gone soon" },
        { name: "data.New", type: "string", depth: 2, description: "Replacement; the old one is not deprecated here." },
      ],
      relations: [],
      schema: {},
    },
  }

  it("detects deprecation markers", () => {
    expect(isDeprecated("DEPRECATED: use X")).toBe(true)
    expect(isDeprecated("[DEPRECATED] use X")).toBe(true)
    expect(isDeprecated("  deprecated - use X")).toBe(true)
    expect(isDeprecated("Replaces a deprecated field")).toBe(false)
    expect(isDeprecated(undefined)).toBe(false)
  })

  it("renders deprecated rows in red with a badge, and leaves others alone", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    expect(screen.getAllByText("DEPRECATED")).toHaveLength(2)
    expect(screen.getByText("data.Old").closest("li")).toHaveClass("prop-deprecated")
    expect(screen.getByText("data.New").closest("li")).not.toHaveClass("prop-deprecated")
  })
})

describe("top-level section default state", () => {
  const mk = (properties: any[]): any => ({ id: "x", data: { label: "E", properties, relations: [], schema: {} } })
  const top = { name: "kind", type: "string", depth: 1 }
  const nestedProp = { name: "data.A", type: "string", depth: 2 }
  const toggle = () => screen.getByRole("button", { name: /Top-level properties/ })

  it("is expanded when there are no nested properties", () => {
    render(<PropertyTooltip node={mk([top])} onClose={() => {}} />)
    expect(toggle()).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("kind")).toBeVisible()
  })

  it("can still be collapsed manually in that case", () => {
    render(<PropertyTooltip node={mk([top])} onClose={() => {}} />)
    fireEvent.click(toggle())
    expect(toggle()).toHaveAttribute("aria-expanded", "false")
  })

  it("re-evaluates the default when the node changes", () => {
    const { rerender } = render(<PropertyTooltip node={mk([top])} onClose={() => {}} />)
    expect(toggle()).toHaveAttribute("aria-expanded", "true")
    rerender(<PropertyTooltip node={mk([top, nestedProp])} onClose={() => {}} />)
    expect(toggle()).toHaveAttribute("aria-expanded", "false")
  })
})

describe("PropertyTooltip reference value lookup", () => {
  it("loads and lists allowed values for a property that points at reference-data", async () => {
    const { vi } = await import("vitest")
    const { findByText } = await import("@testing-library/react")
    const fetchMock = vi.fn(async (url: string) =>
      String(url).includes("/OPEN/RigTypeX.1.json")
        ? {
            ok: true,
            json: async () => ({
              ReferenceData: [{ id: "{{NAMESPACE}}:reference-data--RigTypeX:Barge:", data: { Name: "Barge Rig", Code: "Barge" } }],
            }),
          }
        : { ok: false, json: async () => ({}) }
    )
    vi.stubGlobal("fetch", fetchMock)
    const node: any = {
      id: "n3",
      data: {
        label: "Rig",
        properties: [{ name: "data.TypeRigID", type: "string", depth: 2, refTypes: ["RigTypeX"] }],
        relations: [],
        schema: {},
      },
    }
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    expect(fetchMock).not.toHaveBeenCalled() // lazy until expanded
    fireEvent.click(screen.getByText(/Allowed values: RigTypeX/))
    expect(await findByText(document.body, "Barge Rig")).toBeInTheDocument()
    expect(screen.getByText("namespace:reference-data--RigTypeX:Barge:")).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})

describe("PropertyTooltip resizing", () => {
  const node: any = { id: "r", data: { label: "E", properties: [], relations: [], schema: {} } }
  it("resizes via keyboard on the handle, persists, and resets on double-click", () => {
    localStorage.clear()
    const { container } = render(<PropertyTooltip node={node} onClose={() => {}} />)
    const panel = container.querySelector(".tooltip") as HTMLElement
    const handle = screen.getByRole("separator", { name: /resize/i })
    expect(panel.style.width).toBe("420px")
    fireEvent.keyDown(handle, { key: "ArrowLeft" })
    expect(panel.style.width).toBe("460px")
    expect(localStorage.getItem("osdu-viz:tooltip-width")).toBe("460")
    fireEvent.doubleClick(handle)
    expect(panel.style.width).toBe("420px")
    expect(localStorage.getItem("osdu-viz:tooltip-width")).toBeNull()
  })
  it("restores a stored width", () => {
    localStorage.setItem("osdu-viz:tooltip-width", "700")
    const { container } = render(<PropertyTooltip node={node} onClose={() => {}} />)
    expect((container.querySelector(".tooltip") as HTMLElement).style.width).toBe("700px")
    localStorage.clear()
  })
})

describe("PropertyTooltip collapsible relationships", () => {
  const node: any = {
    id: "rel",
    data: {
      label: "E",
      properties: [],
      relations: [{ kind: "master-data--Organisation", target: "data.OperatorID", type: "relationship" }],
      schema: {},
    },
  }
  it("is collapsed by default, shows a count, and toggles", () => {
    render(<PropertyTooltip node={node} onClose={() => {}} />)
    const title = screen.getByText(/Relationships \(1\)/)
    expect(title).toHaveAttribute("aria-expanded", "false")
    expect(screen.getByText("master-data--Organisation").closest("ul")).toHaveStyle({ display: "none" })
    fireEvent.click(title)
    expect(title).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("master-data--Organisation").closest("ul")).not.toHaveStyle({ display: "none" })
  })
})
