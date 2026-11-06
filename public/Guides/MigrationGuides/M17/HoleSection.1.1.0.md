<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--HoleSection:1.2.0`

Changes between [osdu:wks:master-data--HoleSection:1.1.0](../../../E-R/master-data/HoleSection.1.1.0.md) and [osdu:wks:master-data--HoleSection:1.2.0](../../../E-R/master-data/HoleSection.1.2.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _A section of a wellbore of a constant diameter_
  * New Description: **_A section of a wellbore drilled with a constant bit and/or under-reamer diameter_**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WellboreID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.3.0.md)|string|Wellbore ID|Parent Wellbore Identifier|Changed|
|data.WellActivityID &rarr; [WellActivity](../../../E-R/master-data/WellActivity.1.1.0.md)|string|Well Activity ID|Identifier of the Well Activity in which the hole section was drilled|Added property|
|data.Name|string|Name|Human recognizable context/name of the hole section.|Changed|
|data.Size|number|Size|The nominal diameter of the hole section.|Changed|
|data.MeasuredDepthTop|number|Measured Depth Start|The Measured depth at the top of the hole section. For actual wellbores use data.VerticalMeasurement as wellbore ZDP. For planned wellbores, navigate via WellboreID to the side-car WellPlanningWellbore, which holds the depth reference in data.VerticalMeasurement.|Changed|
|data.MeasuredDepthBase|number|Measured Depth End|The Measured depth at the base of the hole section. For actual wellbores use data.VerticalMeasurement as wellbore ZDP. For planned wellbores, navigate via WellboreID to the side-car WellPlanningWellbore, which holds the depth reference in. data.VerticalMeasurement.|Changed|
|data.StartDateTime|string|Start Date/time|Date/time when drilling commenced on the hole section.|Added property|
|data.EndDateTime|string|End Date/time|Date/time when drilling completed on the hole section.|Added property|
|data.IsPilotHole|boolean|Is Pilot Hole|Flag if Hole Section was drilled as a pilot hole|Added property|
|data.PlannedMeasuredDepthBase|number|Planned Measured Depth Base|Planned Base measured depth of the Hole Section. Only used for Actual Hole Sections to enable a comparison against plan.|Added property|
|data.PlannedTrueVerticalDepthBase|number|Planned True Vertical Depth Base|Planned Base true vertical depth of the Hole Section. Only used for Actual Hole Sections to enable a comparison against plan.|Added property|
|data.DrillingActivityCode|string|Drilling Activity Code|Activity Code relevant for drilling the hole section.|Added property|
|data.Comment|string|Comment|A comment or description associated with the hole section|Changed|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)