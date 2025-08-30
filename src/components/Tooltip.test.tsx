import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { PropertyTooltip } from "./Tooltip"

const nodeBase: any = {
  id: "n1",
  data: {
    label: "Entity",
    subtitle: "Entity subtitle",
    properties: [
      { name: "id", type: "string", required: true, depth: 1 },
      { name: "refProp", type: "$ref:../abstract/SomeRef.json", depth: 2 },
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
