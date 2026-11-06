<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellboreReason:1.0.1`

Changes between [osdu:wks:reference-data--WellboreReason:1.0.0](../../../E-R/reference-data/WellboreReason.1.0.0.md) and [osdu:wks:reference-data--WellboreReason:1.0.1](../../../E-R/reference-data/WellboreReason.1.0.1.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The reason why a Wellbore has been drilled._
  * New Description: **_A general description of the technical or operational reason for drilling a wellbore._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellboreReason:AccidentalSidetrack | Accidental sidetrack | Wellbore was accidentally drilled from parent wellbore - unintentional sidetrack | Changes in Name |
| partition-id:reference-data--WellboreReason:Bypass | Bypass | Recover the original trajectory | Value added. |
| partition-id:reference-data--WellboreReason:CollisionRisk | Collision risk | Wellbore drilled to address anti-collision risk of previous wellbore. Redirected to avoid collision with an existing wellbore. | Changes in Name, Description |
| partition-id:reference-data--WellboreReason:DeviationControl | Deviation control | Wellbore constructed to resolve wellbore trajectory problem e.g. off plan | Changes in Name |
| partition-id:reference-data--WellboreReason:HoleCondition | Hole condition | Wellbore constructed due to hole condition issues in previous wellbore | Changes in Name |
| partition-id:reference-data--WellboreReason:LateralLeg | Lateral Leg | Wellbore constructed as a leg in a multi-lateral well | Value added. |
| partition-id:reference-data--WellboreReason:LocatorHole | Locator hole | Wellbore drilled as subsurface locator | Changes in Name |
| partition-id:reference-data--WellboreReason:LostHole | ~~Lost Hole~~ | ~~Wellbore was abandoned e.g. bypassed~~ | **_Removed_** |
| partition-id:reference-data--WellboreReason:MainWellbore | Main wellbore | Initial Wellbore planned for the Well | Changes in Name |
| partition-id:reference-data--WellboreReason:NewGeologicalTarget | ~~New Geological Target~~ | ~~Wellbore constructed to drill to changed/new subsurface target location~~ | **_Removed_** |
| partition-id:reference-data--WellboreReason:NewLateralLeg | ~~New Lateral Leg~~ | ~~Wellbore constructed as a leg in a multi-lateral well~~ | **_Removed_** |
| partition-id:reference-data--WellboreReason:NewTarget | New target | Wellbore constructed to drill to changed/new subsurface target location | Value added. |
| partition-id:reference-data--WellboreReason:ProgramChange | Program change | Wellbore constructed due to change in well programme | Changes in Name, Description, AttributionAuthority |
| partition-id:reference-data--WellboreReason:Respud | Respud | Initial wellbore for re-spudded well e.g. previous well lost due to surface hole problem | Value added. |
| partition-id:reference-data--WellboreReason:ReSpudded | ~~Re-spudded~~ | ~~Initial wellbore for re-spudded well e.g. previous well lost due to surface hole problem~~ | **_Removed_** |
| partition-id:reference-data--WellboreReason:SidetrackDueToFish | Sidetrack due to fish | Wellbore drilled due to previous wellbore being lost due to equipment left in hole. | Changes in Name, AttributionAuthority |
| partition-id:reference-data--WellboreReason:Unspecified | Unspecified | Reason for Wellbore not known | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record WellboreReason.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellboreReason.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)