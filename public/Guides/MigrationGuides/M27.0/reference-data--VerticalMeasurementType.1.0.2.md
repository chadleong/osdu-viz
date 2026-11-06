<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--VerticalMeasurementType:1.0.2`

Content changes (schema unchanged) [osdu:wks:reference-data--VerticalMeasurementType:1.0.2](../../../E-R/reference-data/VerticalMeasurementType.1.0.2.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _A horizontal plane of reference for well depth and elevation measurements._
  * New Description: **_A fixed elevation, depth, or surface point used as a reference plane to measure and report the depth within a wellbore or other features._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--VerticalMeasurementType:SampleBase | Sample base | The base (or deepest) depth of a sampled interval such as a core, cutting, sidewall core, or fluid sample. The depth may be measured along the wellbore (measured depth), vertically from a reference datum (true vertical depth), or as an elevation. | Value added. |
| partition-id:reference-data--VerticalMeasurementType:SampleMidpoint | Sample midpoint | The midpoint depth of a sampled interval, typically calculated as the arithmetic mean of Sample top and Sample base. | Value added. |
| partition-id:reference-data--VerticalMeasurementType:SampleTop | Sample top | The top (or shallowest) depth of a sampled interval such as a core, cutting, sidewall core, or fluid sample. The depth may be measured along the wellbore (measured depth), vertically from a reference datum (true vertical depth), or as an elevation. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Well_Datum)
* &rarr; [Manifest record VerticalMeasurementType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/VerticalMeasurementType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)