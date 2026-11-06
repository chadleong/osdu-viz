<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--SampleChainOfCustodyEvent:1.1.0`

Changes between [osdu:wks:master-data--SampleChainOfCustodyEvent:1.0.0](../../../E-R/master-data/SampleChainOfCustodyEvent.1.0.0.md) and [osdu:wks:master-data--SampleChainOfCustodyEvent:1.1.0](../../../E-R/master-data/SampleChainOfCustodyEvent.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.TransferCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.TransferCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|data.OpeningCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.OpeningCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|data.ClosingCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.ClosingCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|_data.InitialSampleProperties_|_object_|_AbstractSampleProperties_|_The initial sample properties observed in the source container at the start of this chain of custody event. Fragment Description: A nested object definition for ordinary sample properties._|Changes in: Included Schema Fragment Version, Description|
|data.InitialSampleProperties.SampleWeight|number|Sample Weight|This captures the weight or mass of the sample.|Added property|
|data.InitialSampleProperties.SampleDiameter|number|Sample Diameter|This captures the diameter of the sample. This is mostly applicable in core samples.|Added property|
|data.InitialSampleProperties.SampleVolume|number|Sample Volume|This refers to the volume of the sample acquired. It is applicable to both rock and fluid samples.|Added property|
|data.InitialSampleProperties.SampleLength|number|Sample Length|This refers to the length of the sample. Applicable to rock / core samples.|Added property|
|data.InitialSampleProperties.SampleOrientationTypeID<br> &rarr; [SampleOrientationType](../../../E-R/reference-data/SampleOrientationType.1.0.1.md)|string|Sample Orientation Type ID|The kind of orientation of the rock sample with respect to the bedding or drilling direction. Typical values are Horizontal, Vertical, Axial.|Added property|
|_data.RemainingSampleProperties_|_object_|_AbstractSampleProperties_|_The remaining sample properties observed in the target container at the end of this chain of custody event. Fragment Description: A nested object definition for ordinary sample properties._|Changes in: Included Schema Fragment Version, Description|
|data.RemainingSampleProperties.SampleWeight|number|Sample Weight|This captures the weight or mass of the sample.|Added property|
|data.RemainingSampleProperties.SampleDiameter|number|Sample Diameter|This captures the diameter of the sample. This is mostly applicable in core samples.|Added property|
|data.RemainingSampleProperties.SampleVolume|number|Sample Volume|This refers to the volume of the sample acquired. It is applicable to both rock and fluid samples.|Added property|
|data.RemainingSampleProperties.SampleLength|number|Sample Length|This refers to the length of the sample. Applicable to rock / core samples.|Added property|
|data.RemainingSampleProperties.SampleOrientationTypeID<br> &rarr; [SampleOrientationType](../../../E-R/reference-data/SampleOrientationType.1.0.1.md)|string|Sample Orientation Type ID|The kind of orientation of the rock sample with respect to the bedding or drilling direction. Typical values are Horizontal, Vertical, Axial.|Added property|
|_data.LostSampleProperties_|_object_|_AbstractSampleProperties_|_The difference in sample properties observed due to losses incurred while transferring between containers during this chain of custody event. Fragment Description: A nested object definition for ordinary sample properties._|Changes in: Included Schema Fragment Version, Description|
|data.LostSampleProperties.SampleWeight|number|Sample Weight|This captures the weight or mass of the sample.|Added property|
|data.LostSampleProperties.SampleDiameter|number|Sample Diameter|This captures the diameter of the sample. This is mostly applicable in core samples.|Added property|
|data.LostSampleProperties.SampleVolume|number|Sample Volume|This refers to the volume of the sample acquired. It is applicable to both rock and fluid samples.|Added property|
|data.LostSampleProperties.SampleLength|number|Sample Length|This refers to the length of the sample. Applicable to rock / core samples.|Added property|
|data.LostSampleProperties.SampleOrientationTypeID<br> &rarr; [SampleOrientationType](../../../E-R/reference-data/SampleOrientationType.1.0.1.md)|string|Sample Orientation Type ID|The kind of orientation of the rock sample with respect to the bedding or drilling direction. Typical values are Horizontal, Vertical, Axial.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)