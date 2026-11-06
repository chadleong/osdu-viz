<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ReservoirSegment:1.0.0`

Changes between [osdu:wks:master-data--ReservoirSegment:0.0.0](../../../E-R/master-data/ReservoirSegment.0.0.0.md) and [osdu:wks:master-data--ReservoirSegment:1.0.0](../../../E-R/master-data/ReservoirSegment.1.0.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Preliminary placeholder for the ReservoirSegment schema._
  * New Description: **_A reservoir segment is an earth volume within a reservoir (e.g., reservoir zone, reservoir pattern, subsidence bowl, drainage region of one or more wells, etc.). Each reservoir segment is a unique and spatially non-overlapping part of a reservoir._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ReservoirID &rarr; [Reservoir](../../../E-R/master-data/Reservoir.1.0.0.md)|string|Reservoir ID|The relationship to the (main) reservoir.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Name|string|Name|Name of the reservoir or reservoir segment.|Changes in: Included Schema Fragment Version, Description|
|data.ReservoirUnitArea|number|ReservoirUnitArea|The productive area is the measured or estimated total area of the reservoir unit considered, usually the area within the hydrocarbon-water contact.|Added property|
|data.ReservoirUnitPressureDatumTVDSS|number|Reservoir Unit Pressure Datum True Vertical Depth Subsea|This is the true vertical depth of the permanent reservoir unit datum used for pressure. This is measured vertically downwards from mean sea level.|Added property|
|data.IsSegmented|boolean|Is Segmented|This flag indicates that this reservoir is composed of reservoir segments, and that the characteristics of the segments should be aggregated to best describe the characteristics of the reservoir. When not segmented, the single reservoir segment describes the properties of the entire reservoir. If more than one reservoir segment is defined for this reservoir, this flag should be set and the characteristics for the reservoir should be calculated as summary data over all its reservoir segments.|Added property|
|_data.Status[]_|_object_|_Status_|_Array of Historical Status of a production model element as exploration, appraisal and development. The operational or legal status of the reservoir. Fragment Description: The operational or legal status of the reservoir_|Added property|
|data.Status[].StatusTypeID &rarr; [ReservoirStatusType](../../../E-R/reference-data/ReservoirStatusType.1.0.0.md)|string|Status Type Identifier|Status description, e.g., Discovery, FirstProduction, Active, FirstInjection, Abandonned.|Added property|
|data.Status[].StatusDate|string|Status Date|Date of a status change|Added property|
|data.Status[].EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|Added property|
|data.Status[].TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|Added property|
|_data.CurrentStatus_|_object_|_Current Status_|_Currently active Status of a production model element as exploration, appraisal and development. The operational or legal status of the reservoir._|Added property|
|data.CurrentStatus.StatusTypeID &rarr; [ReservoirStatusType](../../../E-R/reference-data/ReservoirStatusType.1.0.0.md)|string|Status Type Identifier|Status description, e.g., Discovery, FirstProduction, Active, FirstInjection, Abandonned.|Added property|
|data.CurrentStatus.StatusDate|string|Status Date|Date of a status change|Added property|
|data.CurrentStatus.EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|Added property|
|data.CurrentStatus.TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|Added property|
|data.SectorID &rarr; [PersistedCollection](../../../E-R/work-product-component/PersistedCollection.1.2.0.md)|string|Sector Identifier|Identifier of the Persisted Collection in which are referred the whole set of child segments constituting a comprehensive sector.|Added property|
|data.ParentReservoirEntityID &rarr; [Reservoir](../../../E-R/master-data/Reservoir.1.0.0.md) &rarr; [ReservoirSegment](../../../E-R/master-data/ReservoirSegment.1.0.0.md)|string|Parent Reservoir Entity Identifier|Identifier linking to the parent reservoir entity (It could be either a segment or a reservoir)|Added property|
|data.IsIsolated|boolean|Is Isolated|This flag indicates that this reservoir segment (usually a fault block) is hydraulically isolated (i.e., not in pressure communication) from other segments in the reservoir.|Added property|
|data.OriginalHydrocarbonPoreVolume|number|Original Hydrocarbon Pore Volume|This is the best estimate of the original hydrocarbon total pore volume of the reservoir segment at initial conditions.|Added property|
|data.StructuralOrganizationInterpretationID &rarr; [StructuralOrganizationInterpretation](../../../E-R/work-product-component/StructuralOrganizationInterpretation.1.2.0.md)|string|Structural Organization Interpretation ID|The reference to an earth model structural organization, which contains the list of relevant fault and horizon interpretations for this ReservoirSegment.|Added property|
|data.ReservoirSegmentTypeID &rarr; [ReservoirSegmentType](../../../E-R/reference-data/ReservoirSegmentType.1.0.0.md)|string|Reservoir Segment Type Identifier|Identifier of the reference-data object describing the type of the reservoir segment (note: not a validated field). This brief description is intended to afford the consumer of this data the intent/purpose/use for which this reservoir segment exists.|Added property|
|data.Remark|string|Remark|Any relevant remark or comment to characterize this Reservoir Segment|Added property|
|data.SegmentTopDepthTVDSS|number|Segment TopDepth TVD Subsea|For a reservoir zone, this is the average true vertical depth subsea to the top of the zone.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)