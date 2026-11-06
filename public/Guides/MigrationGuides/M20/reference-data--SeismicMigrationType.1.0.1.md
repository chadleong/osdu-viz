<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicMigrationType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicMigrationType:1.0.1](../../../E-R/reference-data/SeismicMigrationType.1.0.1.md) and [osdu:wks:reference-data--SeismicMigrationType:1.0.1](../../../E-R/reference-data/SeismicMigrationType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicMigrationType:DepthMig | DepthMig | DEPRECATED: Please use Code="PoststackDepth" with Name="Poststack depth" instead. Imaging with lateral velocity gradients applied to stacked traces | **DEPRECATED, superseded by Code: PoststackDepth**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:DepthMig-Kirch | DepthMig-Kirch | DEPRECATED: Please use Code="PoststackDepthKirchhoff" with Name="Poststack depth - Kirchhoff" instead. Imaging with lateral velocity gradients applied to stacked traces using Kirchhoff algorithm | **DEPRECATED, superseded by Code: PoststackDepthKirchhoff**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PoststackDepth | Poststack depth | Imaging with lateral velocity gradients applied to stacked traces | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PoststackDepthKirchhoff | Poststack depth - Kirchhoff | Imaging with lateral velocity gradients applied to stacked traces using Kirchhoff algorithm | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PoststackTime | Poststack time | Imaging with approximately flat earth assumption applied to stacked traces | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PoststackTimeKirchhoff | Poststack time - Kirchhoff | Imaging with approximately flat earth assumption applied to stacked traces using Kirchhoff algorithm | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PrestackDepth | Prestack depth | Imaging with lateral velocity gradients applied to gathers | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PrestackDepthKirchhoff | Prestack depth - Kirchhoff | Imaging with lateral velocity gradients applied to gathers  using Kirchhoff algorithm | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PrestackTime | Prestack time | Imaging with approximately flat earth assumption applied to gathers | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PrestackTimeKirchhoff | Prestack time - Kirchhoff | Imaging with approximately flat earth assumption applied to gathers using Kirchhoff algorithm | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PSDM | PSDM | DEPRECATED: Please use Code="PrestackDepth" with Name="Prestack depth" instead. Imaging with lateral velocity gradients applied to gathers | **DEPRECATED, superseded by Code: PrestackDepth**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PSDM-Kirch | PSDM-Kirch | DEPRECATED: Please use Code="PrestackDepthKirchhoff" with Name="Prestack depth - Kirchhoff" instead. Imaging with lateral velocity gradients applied to gathers  using Kirchhoff algorithm | **DEPRECATED, superseded by Code: PrestackDepthKirchhoff**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PSTM | PSTM | DEPRECATED: Please use Code="PrestackTime" with Name="Prestack time" instead. Imaging with approximately flat earth assumption applied to gathers | **DEPRECATED, superseded by Code: PrestackTime**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:PSTM-Kirch | PSTM-Kirch | DEPRECATED: Please use Code="PrestackTimeKirchhoff" with Name="Prestack time - Kirchhoff" instead. Imaging with approximately flat earth assumption applied to gathers using Kirchhoff algorithm | **DEPRECATED, superseded by Code: PrestackTimeKirchhoff**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:TimeMig | TimeMig | DEPRECATED: Please use Code="PoststackTime" with Name="Poststack time" instead. Imaging with approximately flat earth assumption applied to stacked traces | **DEPRECATED, superseded by Code: PoststackTime**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicMigrationType:TimeMig-Kirch | TimeMig-Kirch | DEPRECATED: Please use Code="PoststackTimeKirchhoff" with Name="Poststack time - Kirchhoff" instead. Imaging with approximately flat earth assumption applied to stacked traces using Kirchhoff algorithm | **DEPRECATED, superseded by Code: PoststackTimeKirchhoff**<br>Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SeismicMigrationType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicMigrationType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)