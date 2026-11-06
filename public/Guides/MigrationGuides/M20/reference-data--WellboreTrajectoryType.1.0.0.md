<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellboreTrajectoryType:1.0.0`

Changes between [osdu:wks:reference-data--WellboreTrajectoryType:1.0.0](../../../E-R/reference-data/WellboreTrajectoryType.1.0.0.md) and [osdu:wks:reference-data--WellboreTrajectoryType:1.0.0](../../../E-R/reference-data/WellboreTrajectoryType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellboreTrajectoryType:Directional | Directional | A wellbore path that is drilled into the earth and is guided, purposeful, and deliberately steered with greater than 5 degrees deviation is a Directional wellbore. A wellbore path may deviate 5 or more degrees, for example, because of the dip of a drilled formation. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal | Horizontal | A general L-shape and a significant distance near the terminus is generally perpendicular to the vertical plane. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.Level | Horizontal.Level | A Level Horizontal wellbore is approximately 90 degrees from the heel to the toe. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.ToeDown | Horizontal.Toe-down | A Toe-down Horizontal wellbore is inclined slightly downwards from the heel to the toe. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.ToeUp | Horizontal.Toe-up | A Toe-up Horizontal wellbore is inclined slightly upwards from the heel to the toe. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.Undulating | Horizontal.Undulating | An Undulating Horizontal wellbore has a wave-like shape from the heel to the toe. This value overrides Toe-up, Toe-down or Level. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Inclined | Inclined | Deviates significantly from the vertical plane but is not Horizontal. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Inclined.DeepInclined | Inclined.Deep inclined | The wellbore is vertical for a significant distance near the surface and deviates from vertical before the terminus. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Inclined.SlantHole | Inclined.Slant hole | The wellbore deviates from vertical for a significant distance near the surface. The path near the terminus may be deviated or vertical. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Inclined.SType | Inclined.S-type | An S-type hole has an S-shaped path. | Changes in AttributionAuthority |
| partition-id:reference-data--WellboreTrajectoryType:Vertical | Vertical | Does not deviate significantly from the vertical plane. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record WellboreTrajectoryType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellboreTrajectoryType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)