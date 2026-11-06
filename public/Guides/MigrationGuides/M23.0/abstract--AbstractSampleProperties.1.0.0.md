<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractSampleProperties:1.1.0`

Changes between [osdu:wks:AbstractSampleProperties:1.0.0](../../../E-R/abstract/AbstractSampleProperties.1.0.0.md) and [osdu:wks:AbstractSampleProperties:1.1.0](../../../E-R/abstract/AbstractSampleProperties.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Enter a meaningful description for AbstractSampleProperties._
  * New Description: **_A nested object definition for ordinary sample properties._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|SampleWeight|number|Sample Weight|This captures the weight or mass of the sample.|Added property|
|SampleDiameter|number|Sample Diameter|This captures the diameter of the sample. This is mostly applicable in core samples.|Added property|
|SampleVolume|number|Sample Volume|This refers to the volume of the sample acquired. It is applicable to both rock and fluid samples.|Added property|
|SampleLength|number|Sample Length|This refers to the length of the sample. Applicable to rock / core samples.|Added property|
|SampleOrientationTypeID<br> &rarr; [SampleOrientationType](../../../E-R/reference-data/SampleOrientationType.1.0.1.md)|string|Sample Orientation Type ID|The kind of orientation of the rock sample with respect to the bedding or drilling direction. Typical values are Horizontal, Vertical, Axial.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)