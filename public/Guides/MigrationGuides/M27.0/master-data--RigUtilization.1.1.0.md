<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--RigUtilization:2.0.0`

Changes between [osdu:wks:master-data--RigUtilization:1.1.0](../../../E-R/master-data/RigUtilization.1.1.0.md) and [osdu:wks:master-data--RigUtilization:2.0.0](../../../E-R/master-data/RigUtilization.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The utilization of a rig during the drilling phase of a section_
  * New Description: **_Defines when the Rig is on/off location and the hole section depths related to the operations being performed by the rig._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.HoleSectionId<br> &rarr; [HoleSection](../../../E-R/master-data/HoleSection.1.4.0.md)|string|Hole Section ID|Identifier of the Hole Section that is being drilled|**_Breaking Change: REMOVED_**|
|data.RigID<br> &rarr; [Rig](../../../E-R/master-data/Rig.2.0.0.md)|string|Rig ID|The rig that is being utilized to drill this depth range of this section.|**_Breaking Change: REMOVED_**|
|data.RequiredHoistingCapacity|number|Required Hoisting Capacity|Required hoisting capacity based on derrick / drawworks|**_Breaking Change: REMOVED_**|
|data.RequiredStandpipePressure|number|Required Standpipe Pressure|Required Standpipe pressure|**_Breaking Change: REMOVED_**|
|data.MaxWaterDepth|number|Max Water Depth|Required maximum workable water depth for the rig.|**_Breaking Change: REMOVED_**|
|data.RiserInsideDiameter|string|Riser Inside Diameter|Nominal inside diameter of the riser|**_Breaking Change: REMOVED_**|
|data.RiserWorkingPressure|number|Riser Working Pressure|Designed riser working pressure.|**_Breaking Change: REMOVED_**|
|data.TopDriveTorqueRating|number|Top Drive Torque Rating|Required maximum torque for the top drive.|**_Breaking Change: REMOVED_**|
|data.RequiredFlowRate|number|Required Flow Rate|Required mud flow rates delivered by the pump system.|**_Breaking Change: REMOVED_**|
|_data.MudPumps[]_|_object_|_Mud Pump_|_Mud pump equipment on the rig Fragment Description: Pumps present on the rig_|**_Breaking Change: REMOVED_**|
|data.MudPumps[].Name|string|Name|The name of the mud pump (model)|**_Breaking Change: REMOVED_**|
|data.MudPumps[].Number|integer|Number|Number of pump of that type on the rig.|**_Breaking Change: REMOVED_**|
|data.MudPumps[].MaxPower|number|Max Power|Maximum power defined by the manufacturer.|**_Breaking Change: REMOVED_**|
|data.MudPumps[].WorkingPower|number|Working Power|Maximum power authorized by the drilling contractor|**_Breaking Change: REMOVED_**|
|data.MudPumps[].MaxPumpPressure|number|Maximum Pump Pressure|Maximum required/delivered pressure from/by the pump|**_Breaking Change: REMOVED_**|
|data.MudPumps[].MaxPumpFlowrate|number|Maximum Pump Flowrate|Maximum required/delivered flowrate from/by the pump|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.RigSpecificationsID<br> &rarr; [RigSpecifications](../../../E-R/master-data/RigSpecifications.1.0.0.md)|string|Rig Specifications ID|The specifications or configuration of the rig at the time it is being utilized to drill this depth range of this section.|Added property|
|data.HoleSectionID<br> &rarr; [HoleSection](../../../E-R/master-data/HoleSection.1.4.0.md)|string|Hole Section ID|Identifier of the Hole Section that is being drilled|Added property|
|data.StartHoleDepth|number|Start Hole Depth|Measured depth of the wellbore when operations performed with this rig started. Depth relative to Planned wellbore ZDP. Navigate via HoleSectionId and WellboreID to the side-car WellPlanningWellbore, which holds the depth reference in data.VerticalMeasurement.|Changes in: Example|
|data.EndHoleDepth|number|End Hole Depth|Measured depth of the wellbore when operations performed with this rig ended. Depth relative to Planned wellbore ZDP. Navigate via HoleSectionId and WellboreID to the side-car WellPlanningWellbore, which holds the depth reference in data.VerticalMeasurement.|Changes in: Example|
|data.StartDateActivity|string|Dtm Start|The start date and time when operations performed with this rig started (Rig on location date)|Changes in: Description|
|data.EndDateActivity|string|Dtm End|The end date and time when operations performed with this rig ended. (Rig off location date)|Changes in: Description|
|_data.AirGaps[]_|_object_|_Air Gap_|_Air gap from the rig floor to the ground or mean sea level, depending on the rig location. This is typically a static number and will have only one record in the array, but can change in offshore operations when the rig is raised or lowered. Fragment Description: Air gap from the rig floor to the ground or mean sea level, depending on the rig location._|Added property|
|data.AirGaps[].StartDate|string|Start Date|The start date and time the air gap measurement takes affect on the rig.|Added property|
|data.AirGaps[].EndDate|string|End Date|The end date and time  the air gap measurement takes affect on the rig.|Added property|
|data.AirGaps[].AirGap|number|Air Gap|Air gap from the rig floor to the ground or mean sea level, depending on the rig location.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)