<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractWellboreDrillingReason:1.1.0`

Changes between [osdu:wks:AbstractWellboreDrillingReason:1.0.0](../../../E-R/abstract/AbstractWellboreDrillingReason.1.0.0.md) and [osdu:wks:AbstractWellboreDrillingReason:1.1.0](../../../E-R/abstract/AbstractWellboreDrillingReason.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|LaheeClassID &rarr; [LaheeClass](../../../E-R/reference-data/LaheeClass.1.0.0.md)|string|Lahee Class ID|The Lahee classification, based on the traditional, commonly accepted, scheme to categorize wells by the general degree of risk assumed by the operator at the time of drilling.|Added property|
|~~DrillingReasonTypeID &rarr; [DrillingReasonType](../../../E-R/reference-data/DrillingReasonType.1.0.0.md)~~|~~string~~|~~Drilling Reason Type ID~~|~~DEPRECATED: Superseded by LaheeClassID. Identifier of the drilling reason type for the corresponding time period.~~|Added property|
|Remark|string|Remark|A remark or comment explaining the drilling reason or LaheeClass assignment.|Added property|

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](../M17/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)