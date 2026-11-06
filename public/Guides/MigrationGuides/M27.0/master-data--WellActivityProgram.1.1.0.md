<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellActivityProgram:1.2.0`

Changes between [osdu:wks:master-data--WellActivityProgram:1.1.0](../../../E-R/master-data/WellActivityProgram.1.1.0.md) and [osdu:wks:master-data--WellActivityProgram:1.2.0](../../../E-R/master-data/WellActivityProgram.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Phases[]_|_object_|_Phase_|_The set of individual phases that compose the WellActivityProgram. A phase describes the key milestones and is usually based on the major sections of the well or non-well-related work. (Such as "Drill Surface", "Case Surface", "Acces Well", "Suspend ", "Wellhead Removal "...). Fragment Description: Description of an individual phase that compose the WellActivityProgram. A phase describes the key milestones and is usually based on the major sections of the well or non-well-related work. (Such as "Drill Surface", "Case Surface", "Acces Well", "Suspend ", "Wellhead Removal "...)_|Changes in: Description|
|data.Phases[].RigUtilizationID<br> &rarr; [RigUtilization](../../../E-R/master-data/RigUtilization.2.0.0.md)|string|Rig Utilization ID|Identifier of Rig Utilization object, which defines when the rig is on location during operations.|Added property|
|data.Phases[].SequenceNo|number|Sequence Number|The order that these phases will be executed (is this needed?)|Changes in: Example|
|data.Phases[].KickTolerance|number|Kick Tolerance|Volume of a kick that will not cause a pressure exceeding the formation fracture pressure.|Changes in: Example|
|data.Phases[].MAASP|number|Maximum Allowable Annulus Surface Pressure|An absolute upper limit for the pressure in the annulus of an oil and gas well as measured at the wellhead. It's a number with pressure units|Changes in: Example|
|data.Phases[].WellboreArchitectureID<br> &rarr; [WellboreArchitecture](../../../E-R/master-data/WellboreArchitecture.1.2.0.md)|string|Wellbore Architecture ID|A reference to the object that describes the schematic (physical structure) of the wellbore at the end of this Phase|Changes in: Description|
|data.TypeID<br> &rarr; [WellActivityProgramType](../../../E-R/reference-data/WellActivityProgramType.1.0.0.md)|string|Type|The type of well activity program. The default value for this is "Primary" (For example, they may have  "primary" program and "backup" programs)|Changes in: Example|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)