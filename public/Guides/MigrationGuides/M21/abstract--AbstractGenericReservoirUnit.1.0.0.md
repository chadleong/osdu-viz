<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractGenericReservoirUnit:1.1.0`

Changes between [osdu:wks:AbstractGenericReservoirUnit:1.0.0](../../../E-R/abstract/AbstractGenericReservoirUnit.1.0.0.md) and [osdu:wks:AbstractGenericReservoirUnit:1.1.0](../../../E-R/abstract/AbstractGenericReservoirUnit.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|~~SectorID &rarr; [PersistedCollection](../../../E-R/work-product-component/PersistedCollection.1.2.0.md)~~|~~string~~|~~Sector Identifier~~|~~DEPRECATED: Only used by ReservoirSegment. Identifier of the Persisted Collection in which are referred the whole set of child segments constituting a comprehensive sector.~~|Deprecated|
|~~ParentReservoirEntityID &rarr; [Reservoir](../../../E-R/master-data/Reservoir.1.1.0.md) &rarr; [ReservoirSegment](../../../E-R/master-data/ReservoirSegment.1.1.0.md)~~|~~string~~|~~Parent Reservoir Entity Identifier~~|~~DEPRECATED: Only used in ReservoirSegment: Identifier linking to the parent reservoir entity (It could be either a segment or a reservoir)~~|Deprecated|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)