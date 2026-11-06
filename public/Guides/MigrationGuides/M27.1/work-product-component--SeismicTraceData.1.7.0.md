<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicTraceData:1.8.0`

Changes between [osdu:wks:work-product-component--SeismicTraceData:1.7.0](../../../E-R/work-product-component/SeismicTraceData.1.7.0.md) and [osdu:wks:work-product-component--SeismicTraceData:1.8.0](../../../E-R/work-product-component/SeismicTraceData.1.8.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Contracts[]<br> &rarr; [Agreement](../../../E-R/master-data/Agreement.1.1.0.md)|string|Contracts|References to applicable agreements in external contract database system of record.|Added property|
|_data.AdditionalTraceHeaderRanges[]_|_object_|_Trace Header Range Summary_|_Minimum and maximum ranges parsed from trace headers for any additional parameters_|Added property|
|data.AdditionalTraceHeaderRanges[].Minimum|string|Minimum|Minimum value parsed from trace headers|Added property|
|data.AdditionalTraceHeaderRanges[].Maximum|string|Maximum|Maximum value parsed from trace headers|Added property|
|data.AdditionalTraceHeaderRanges[].KeyName<br> &rarr; [HeaderKeyName](../../../E-R/reference-data/HeaderKeyName.1.0.0.md)|string|Key Name|Relationship to a reference value for a name of a property header such as INLINE, CDPX.|Added property|
|data.VelocityModelID<br> &rarr; [VelocityModeling](../../../E-R/work-product-component/VelocityModeling.1.4.0.md)|string|Velocity Model ID|The velocity model used in the creation of this trace dataset|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)