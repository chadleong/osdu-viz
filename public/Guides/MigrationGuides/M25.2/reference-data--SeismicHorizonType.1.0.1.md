<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicHorizonType:1.0.2`

Changes between [osdu:wks:reference-data--SeismicHorizonType:1.0.1](../../../E-R/reference-data/SeismicHorizonType.1.0.1.md) and [osdu:wks:reference-data--SeismicHorizonType:1.0.2](../../../E-R/reference-data/SeismicHorizonType.1.0.2.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The position on a seismic waveform where a reflection horizon is picked._
  * New Description: **_The position on a seismic waveform where a reflection or refraction horizon is picked in order to investigate a subsurface formation definition._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicHorizonType:Envelope | Envelope | Defined on amplitude envelope. | Changes in Description |
| partition-id:reference-data--SeismicHorizonType:FirstArrival | First arrival | The first recorded change in amplitude as a result of a seismic wave travel from a known source. | Value added. |
| partition-id:reference-data--SeismicHorizonType:Peak | Peak | Picked on amplitude maximum. | Changes in Description, AttributionPublication |
| partition-id:reference-data--SeismicHorizonType:Trough | Trough | Picked on amplitude minimum. | Changes in Description, AttributionPublication |
| partition-id:reference-data--SeismicHorizonType:ZeroDown | Plus to minus zero crossing | Picked on zero crossing, high to low amplitude. | Changes in Name, Description |
| partition-id:reference-data--SeismicHorizonType:ZeroUp | Minus to plus zero crossing | Picked on zero crossing, low to high amplitude. | Changes in Name, Description |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Seismic_Horizon_Picking_Location)
* &rarr; [Manifest record SeismicHorizonType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicHorizonType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)