<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ReservoirSegment:1.2.0`

Changes between [osdu:wks:master-data--ReservoirSegment:1.1.0](../../../E-R/master-data/ReservoirSegment.1.1.0.md) and [osdu:wks:master-data--ReservoirSegment:1.2.0](../../../E-R/master-data/ReservoirSegment.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|~~data.ReservoirSegmentTypeID<br> &rarr; [ReservoirSegmentType](../../../E-R/reference-data/ReservoirSegmentType.1.0.1.md)~~|~~string~~|~~Reservoir Segment Type Identifier~~|~~DEPRECATED: Use IntentPurposeUseDescription instead. The use of the reference value list reference-data--ReservoirSegmentType is no longer encouraged. Previously: Identifier of the reference-data object describing the type of the reservoir segment (note: not a validated field). This brief description is intended to afford the consumer of this data the intent/purpose/use for which this reservoir segment exists.~~|Deprecated|
|data.IntentPurposeUseDescription|string|Intent or Purpose or Use Description|This brief description is intended to inform the consumer of this data about the intent/purpose/use for which this reservoir segment exists.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)