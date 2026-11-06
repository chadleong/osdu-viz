<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellboreTrajectoryType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--WellboreTrajectoryType:1.0.0](../../../E-R/reference-data/WellboreTrajectoryType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellboreTrajectoryType:Directional | Directional | DEPRECATED: Please use Code="Inclined" with Name="Inclined" instead. A wellbore path that is drilled into the earth and is guided, purposeful, and deliberately steered with greater than 5 degrees deviation is a Directional wellbore. A wellbore path may deviate 5 or more degrees, for example, because of the dip of a drilled formation. | **DEPRECATED, superseded by Code: Inclined**<br>Changes in Description |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.Level | Level | A Level Horizontal wellbore is approximately 90 degrees from the heel to the toe. | Changes in Name |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.ToeDown | Toe-down | A Toe-down Horizontal wellbore is inclined slightly downwards from the heel to the toe. | Changes in Name |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.ToeUp | Toe-up | A Toe-up Horizontal wellbore is inclined slightly upwards from the heel to the toe. | Changes in Name |
| partition-id:reference-data--WellboreTrajectoryType:Horizontal.Undulating | Undulating | An Undulating Horizontal wellbore has a wave-like shape from the heel to the toe. This value overrides Toe-up, Toe-down or Level. | Changes in Name |
| partition-id:reference-data--WellboreTrajectoryType:Inclined.DeepInclined | Deep inclined | The wellbore is vertical for a significant distance near the surface and deviates from vertical before the terminus. | Changes in Name |
| partition-id:reference-data--WellboreTrajectoryType:Inclined.SlantHole | Slant hole | The wellbore deviates from vertical for a significant distance near the surface. The path near the terminus may be deviated or vertical. | Changes in Name |
| partition-id:reference-data--WellboreTrajectoryType:Inclined.SType | S-type | An S-type hole has an S-shaped path. | Changes in Name |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Well_Profile_Type)
* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://ppdm.org/ppdm/PPDM/IPDS/Well_Status_Classification/PPDM/Well_Status_Classification.aspx)
* &rarr; [Manifest record WellboreTrajectoryType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellboreTrajectoryType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)