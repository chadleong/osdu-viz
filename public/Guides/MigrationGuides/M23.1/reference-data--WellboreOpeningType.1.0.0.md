<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellboreOpeningType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--WellboreOpeningType:1.0.0](../../../E-R/reference-data/WellboreOpeningType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The type of Opening constructed along a Wellbore depth interval to enable flow between the reservoir and production tubing._
  * New Description: **_The type of opening to enable flow between the wellbore and the reservoir._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellboreOpeningType:OpenHole | Open Hole | There is no cemented casing though the reservoir interval. | Changes in NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--WellboreOpeningType:Perforated | Perforated | DEPRECATED: Please use Code="Perforation" with Name="Perforation" instead. Opening created from explosive perforating through pipe. Perforating is the process of piercing the casing wall and the cement behind it to provide openings through which formation fluids may enter the borehole. | **DEPRECATED, superseded by Code: Perforation**<br>Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--WellboreOpeningType:Perforation | Perforation | Connections between the reservoir and the wellbore are created by a device that creates holes in the casing. | Value added. |
| partition-id:reference-data--WellboreOpeningType:Preperforated | Pre-perforated | A section of liner or tubing with holes or slots that were made before being placed in the well. | Value added. |
| partition-id:reference-data--WellboreOpeningType:Punch | Punch | A hole created one at a time in the casing or tubing. | Value added. |
| partition-id:reference-data--WellboreOpeningType:Screen | Screen | Mechanical opening created from installation of a screen along the reservoir interval. | Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--WellboreOpeningType:SlidingSleeve | Sliding Sleeve | Mechanical Opening created from installation of a sliding sleeve in the production tubing which can be opened (or closed) thus creating a flowpath  to the surface. | Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--WellboreOpeningType:Slotted | Slotted Liner | DEPRECATED: Please use Code="Preperforated" with Name="Pre-perforated" instead. Mechanical Opening created from installation of slotted liner along the reservoir interval. The slots allow hydraulic communication between the reservoir and the production tubing. This type includes holed or preperforated liner. | **DEPRECATED, superseded by Code: Preperforated**<br>Changes in NameAlias, InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--WellboreOpeningType:TubingPunch | Tubing Punch | DEPRECATED: Please use Code="Punch" with Name="Punch" instead. Tubing punches enable circulation to be achieved between tubing and an annulus open to the reservoir. | **DEPRECATED, superseded by Code: Punch**<br>Changes in NameAlias, InactiveIndicator, Description, AttributionAuthority |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Reservoir_Contact_Type)
* &rarr; [Manifest record WellboreOpeningType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellboreOpeningType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)