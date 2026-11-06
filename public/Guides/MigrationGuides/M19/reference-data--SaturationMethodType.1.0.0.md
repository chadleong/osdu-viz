<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SaturationMethodType:1.0.1`

Changes between [osdu:wks:reference-data--SaturationMethodType:1.0.0](../../../E-R/reference-data/SaturationMethodType.1.0.0.md) and [osdu:wks:reference-data--SaturationMethodType:1.0.1](../../../E-R/reference-data/SaturationMethodType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The method used to obtain the saturation measurement values, e.g., Dean Stark, Retort, Karl Fischer._
  * New Description: **_The method used to measure water saturation in routine core analysis._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SaturationMethodType:DeanStark | Dean-Stark extraction | The sample is weighed before and after distillation extraction of the water. | Changes in Name, NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--SaturationMethodType:KarlFischer | Karl Fischer titration | Water saturation is determined by titration using solvents. | Changes in Name, NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--SaturationMethodType:Retort | Retort distillation | The sample is heated and the volume of evaporated water is measured. | Changes in Name, NameAlias, Description, AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SaturationMethodType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SaturationMethodType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)