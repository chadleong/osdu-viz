<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicPickingType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicPickingType:1.0.1](../../../E-R/reference-data/SeismicPickingType.1.0.1.md) and [osdu:wks:reference-data--SeismicPickingType:1.0.1](../../../E-R/reference-data/SeismicPickingType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicPickingType:Automatic | Automatic | Automatic timing of a seismic event along a section or throughout a volume based on specifying a seed point to indicate the event to be picked | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicPickingType:Autotracked | Autotracked | DEPRECATED: Please use Code="Automatic" with Name="Automatic" instead. Seismic picking performed using autotracking method | **DEPRECATED, superseded by Code: Automatic**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicPickingType:InterpolatedSeed | Interpolated Seed | DEPRECATED: Please use Code="Mixed" with Name="Mixed" instead. Interpolated Seed used as Seismic picking method | **DEPRECATED, superseded by Code: Mixed**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicPickingType:Manual | Manual | An event selected on a seismic record by a user | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicPickingType:Mixed | Mixed | Seismic picking method used mixed methods | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicPickingType:PrimarySeed | Primary Seed | DEPRECATED: Please use Code="Automatic" with Name="Automatic" instead. Primary Seed used as Seismic picking method | **DEPRECATED, superseded by Code: Automatic**<br>Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SeismicPickingType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicPickingType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)