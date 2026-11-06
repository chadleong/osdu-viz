<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ReservoirSegment:2.0.0`

Changes between [osdu:wks:master-data--ReservoirSegment:1.2.0](../../../E-R/master-data/ReservoirSegment.1.2.0.md) and [osdu:wks:master-data--ReservoirSegment:2.0.0](../../../E-R/master-data/ReservoirSegment.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ReservoirUnitPressureDatumTVDSS|number|Reservoir Unit Pressure Datum True Vertical Depth Subsea|This is the true vertical depth of the permanent reservoir unit datum used for pressure. This is measured vertically downwards from mean sea level.|**_Breaking Change: REMOVED_**|
|_data.Status[]_|_object_|_Status_|_Array of Historical Status of a production model element as exploration, appraisal and development. The operational or legal status of the reservoir. Fragment Description: The operational or legal status of the reservoir_|**_Breaking Change: REMOVED_**|
|data.Status[].StatusTypeID<br> &rarr; [ReservoirStatusType](../../../E-R/reference-data/ReservoirStatusType.1.0.1.md)|string|Status Type Identifier|Status description, e.g., Discovery, FirstProduction, Active, FirstInjection, Abandonned.|**_Breaking Change: REMOVED_**|
|data.Status[].StatusDate|string|Status Date|Date of a status change|**_Breaking Change: REMOVED_**|
|data.Status[].EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|**_Breaking Change: REMOVED_**|
|data.Status[].TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|**_Breaking Change: REMOVED_**|
|_data.CurrentStatus_|_object_|_Current Status_|_Currently active Status of a production model element as exploration, appraisal and development. The operational or legal status of the reservoir._|**_Breaking Change: REMOVED_**|
|data.CurrentStatus.StatusTypeID<br> &rarr; [ReservoirStatusType](../../../E-R/reference-data/ReservoirStatusType.1.0.1.md)|string|Status Type Identifier|Status description, e.g., Discovery, FirstProduction, Active, FirstInjection, Abandonned.|**_Breaking Change: REMOVED_**|
|data.CurrentStatus.StatusDate|string|Status Date|Date of a status change|**_Breaking Change: REMOVED_**|
|data.CurrentStatus.EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|**_Breaking Change: REMOVED_**|
|data.CurrentStatus.TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|**_Breaking Change: REMOVED_**|
|data.Remark|string|Remark|Any relevant remark or comment to characterize this Reservoir Segment|**_Breaking Change: REMOVED_**|
|data.SegmentTopDepthTVDSS|number|Segment TopDepth TVD Subsea|For a reservoir zone, this is the average true vertical depth subsea to the top of the zone.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.FirstProductionDate|string|First Production Date|The date that commercial production first began in the Reservoir or Reservoir Segment.|Added property|
|data.FirstCO2StorageInjectionDate|string|First CO2 Storage Injection Date|The date that CO2 storage injection first began in the Reservoir or Reservoir Segment.|Added property|
|data.CurrentLifeCycleStatusID<br> &rarr; [ReservoirLifeCycleStatus](../../../E-R/reference-data/ReservoirLifeCycleStatus.1.0.0.md)|string|Current Life Cycle Status ID|Indicates the current life cycle status of the reservoir in a simple way for the ease of searching. This same status may also be found in the LifeCycleStatuses array, providing the actual status dates.|Added property|
|data.IsActiveCondition|boolean|Is Active Condition|Indicates whether the condition of a Reservoir or Reservoir Segment is Active, meaning there is at least one well intentionally and currently interacting with the reservoir or reservoir segment. The absence of a value should not be assumed to mean true (Active) or false (Inactive).|Added property|
|data.OriginalHydrocarbonPoreVolume|number|Original Hydrocarbon Pore Volume|This is the best estimate of the original hydrocarbon total pore volume of the reservoir segment at initial conditions.|Changes in: Included Schema Fragment Version, Frame of Reference|
|_data.Remarks[]_|_object_|_AbstractRemark_|_An array of remarks that provide more context for this data record. Fragment Description: A remark object, pairing a remark text with a source, e.g. an author, and a date, which is typically included in an array. The RemarkSequenceNumber acts as unique key in this case._|Added property|
|data.Remarks[].RemarkSequenceNumber|integer|Remark Sequence Number|A unique identifier for each remark record. This identifier is used to uniquely identify a member in an array of remarks.|Added property|
|data.Remarks[].Remark|string|Remark|A descriptive comment for this remark.|Added property|
|data.Remarks[].RemarkSource|string|Remark Source|The person, vendor, interpreter or other provider of information.|Added property|
|data.Remarks[].RemarkDate|string|Remark Date|The date the remark was issued.|Added property|
|data.ReservoirUnitTopDepthTVD|number|Reservoir Unit Top Depth True Vertical Depth|The average true vertical depth from the Vertical CRS to the top of the reservoir unit. This is further qualified by the associated Vertical CRS property. If no Vertical CRS is populated, assume Mean Sea Level, and therefore "TVD Subsea".|Added property|
|data.ReservoirUnitPressureDatumTVD|number|Reservoir Unit Pressure Datum True Vertical Depth|The true vertical depth from the Vertical CRS to the permanent reservoir unit datum used for pressure. This is further qualified by the associated Vertical CRS property. If no Vertical CRS is populated, assume Mean Sea Level, and therefore "TVD Subsea".|Added property|
|data.VerticalCRSID<br> &rarr; [CoordinateReferenceSystem](../../../E-R/reference-data/CoordinateReferenceSystem.1.1.0.md)|string|Vertical Coordinate Reference System ID|The Vertical Coordinate Reference System defining the origin (i.e., zero point) for the vertical measurements on this data record (e.g. PressureDatum and TopDepth). The most common Vertical CRS in this context is Mean Sea Level. Populating this attribute is especially important when the Vertical CRS is not Mean Sea Level but rather a local alternative like Caspian height or a custom Vertical CRS.|Added property|
|data.VerticalDatumOffsetToMeanSeaLevel|number|Vertical Datum Offset To Mean Sea Level|If the the vertical measurements on this data record (e.g. PressureDatum and TopDepth) were not referenced from Mean Sea Level, this attribute can capture the difference between the selected Vertical CRS and Mean Sea Level.|Added property|
|_data.LifeCycleStatuses[]_|_object_|_Life Cycle Statuses_|_Set of attributes capturing the Life Cycle Statuses of the Reservoir, a concept which is typically chronological._|Added property|
|data.LifeCycleStatuses[].LifeCycleStatusID<br> &rarr; [ReservoirLifeCycleStatus](../../../E-R/reference-data/ReservoirLifeCycleStatus.1.0.0.md)|string|Life Cycle Status ID|The Life Cycle Status of the Reservoir, a concept which is typically chronological.|Added property|
|data.LifeCycleStatuses[].StatusDate|string|Status Date|Date of a status change|Added property|
|data.LifeCycleStatuses[].EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|Added property|
|data.LifeCycleStatuses[].TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)