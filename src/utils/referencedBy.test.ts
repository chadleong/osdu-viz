import { describe, it, expect } from "vitest"
import { buildReverseRefs } from "./referencedBy"

const P = (p: string) => `/data/Generated/${p}`

describe("buildReverseRefs", () => {
  const index: Record<string, any> = {
    [P("abstract/AbstractBusinessRule.1.0.0.min.json")]: { properties: {} },
    [P("abstract/AbstractBusinessRule.1.1.0.min.json")]: { properties: {} },
    [P("master-data/Wellbore.1.0.0.min.json")]: { properties: {} },
    [P("master-data/Wellbore.1.1.0.min.json")]: { properties: {} },
    [P("master-data/Well.1.0.0.min.json")]: {
      allOf: [{ $ref: "../abstract/AbstractBusinessRule.1.0.0.json" }],
      properties: { data: { properties: { WellboreID: { "x-osdu-relationship": [{ GroupType: "master-data", EntityType: "Wellbore" }] } } } },
    },
  }
  const rev = buildReverseRefs(index)

  it("maps a $ref to the exact referenced version only", () => {
    expect(rev.get(P("abstract/AbstractBusinessRule.1.0.0.min.json"))).toEqual([
      { path: P("master-data/Well.1.0.0.min.json"), via: "ref", properties: [] },
    ])
    expect(rev.get(P("abstract/AbstractBusinessRule.1.1.0.min.json"))).toBeUndefined()
  })

  it("maps x-osdu-relationship to every version of the entity with the property name", () => {
    for (const v of ["1.0.0", "1.1.0"]) {
      expect(rev.get(P(`master-data/Wellbore.${v}.min.json`))).toEqual([
        { path: P("master-data/Well.1.0.0.min.json"), via: "relationship", properties: ["data.WellboreID"] },
      ])
    }
  })
})
