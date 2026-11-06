<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicTraceData:1.7.0`

Changes between [osdu:wks:work-product-component--SeismicTraceData:1.6.0](../../../E-R/work-product-component/SeismicTraceData.1.6.0.md) and [osdu:wks:work-product-component--SeismicTraceData:1.7.0](../../../E-R/work-product-component/SeismicTraceData.1.7.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|~~data.SeismicDomainTypeID<br> &rarr; [SeismicDomainType](../../../E-R/reference-data/SeismicDomainType.1.0.0.md)~~|~~string~~|~~Seismic Domain Type Id~~|~~DEPRECATED: Use the "DomainType" property instead. ID of the nature of the vertical axis in the trace data set, usually Depth or Time.~~|Deprecated|
|_data.TimeLapse_|_object_|_Time Lapse_|_DEPRECATED: Use  the "TimeLapseAssociations" property instead. The contents positions the SeismicTraceData record in context of a time series. This is to be used for time lapse or 4D SeismicTraceData. This structure is optional and absent for SeismicTraceData not part of a time series._|Changes in: Description|
|data.DomainTypeID<br> &rarr; [DomainType](../../../E-R/reference-data/DomainType.1.0.0.md)|string|Domain Type ID|The nature of the vertical axis in the trace data set, usually Depth or Time.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)