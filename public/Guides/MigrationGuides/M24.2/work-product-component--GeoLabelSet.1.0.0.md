<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--GeoLabelSet:1.1.0`

Changes between [osdu:wks:work-product-component--GeoLabelSet:1.0.0](../../../E-R/work-product-component/GeoLabelSet.1.0.0.md) and [osdu:wks:work-product-component--GeoLabelSet:1.1.0](../../../E-R/work-product-component/GeoLabelSet.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.StartDate|string|Start Date|If populated, the GeoLabelSet data.LabelAndValues[] only describe the state after the StartDate. Often also the EndDate is populated defining an interval of validity for data.LabelAndValues[].|Added property|
|data.EndDate|string|End Date|If populated, the GeoLabelSet data.LabelAndValues[] only describe the state before the EndDate. Often also the StartDate is populated defining an interval of validity for data.LabelAndValues[].|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)