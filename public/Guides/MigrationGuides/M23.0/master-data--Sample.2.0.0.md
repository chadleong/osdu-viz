<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Sample:2.1.0`

Changes between [osdu:wks:master-data--Sample:2.0.0](../../../E-R/master-data/Sample.2.0.0.md) and [osdu:wks:master-data--Sample:2.1.0](../../../E-R/master-data/Sample.2.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SampleTypeID<br> &rarr; [SampleType](../../../E-R/reference-data/SampleType.1.0.0.md)<br> &rarr; [ConventionalCoreType](../../../E-R/reference-data/ConventionalCoreType.1.0.1.md)<br> &rarr; [SidewallCoreType](../../../E-R/reference-data/SidewallCoreType.1.0.1.md)<br> &rarr; [RockSampleType](../../../E-R/reference-data/RockSampleType.1.0.0.md)|string|Sample Type ID|This is the OSDU record ID from the reference list of the type of rock or fluid sample e.g. Fluid, Core, Cuttings, Core Slab, Core Plug, Core Chip, Slides.|Changes in: Relationship Targets, Pattern|
|_data.SampleProperties_|_object_|_AbstractSampleProperties_|_This captures information pertaining to the observed physical properties of the sample. Fragment Description: A nested object definition for ordinary sample properties._|Changes in: Included Schema Fragment Version, Description|
|data.SampleProperties.SampleWeight|number|Sample Weight|This captures the weight or mass of the sample.|Added property|
|data.SampleProperties.SampleDiameter|number|Sample Diameter|This captures the diameter of the sample. This is mostly applicable in core samples.|Added property|
|data.SampleProperties.SampleVolume|number|Sample Volume|This refers to the volume of the sample acquired. It is applicable to both rock and fluid samples.|Added property|
|data.SampleProperties.SampleLength|number|Sample Length|This refers to the length of the sample. Applicable to rock / core samples.|Added property|
|data.SampleProperties.SampleOrientationTypeID<br> &rarr; [SampleOrientationType](../../../E-R/reference-data/SampleOrientationType.1.0.1.md)|string|Sample Orientation Type ID|The kind of orientation of the rock sample with respect to the bedding or drilling direction. Typical values are Horizontal, Vertical, Axial.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)