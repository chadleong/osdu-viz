<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--HoleSection:1.4.0`

Changes between [osdu:wks:master-data--HoleSection:1.3.0](../../../E-R/master-data/HoleSection.1.3.0.md) and [osdu:wks:master-data--HoleSection:1.4.0](../../../E-R/master-data/HoleSection.1.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Size|number|Size|The nominal diameter of the hole section.|Changes in: Example|
|data.MeasuredDepthTop|number|Measured Depth Start|The Measured depth at the top of the hole section. For actual wellbores use data.VerticalMeasurement as wellbore ZDP. For planned wellbores, navigate via WellboreID to the side-car WellPlanningWellbore, which holds the depth reference in data.VerticalMeasurement.|Changes in: Example|
|data.MeasuredDepthBase|number|Measured Depth End|The Measured depth at the base ('TD') of the hole section. For actual wellbores use data.VerticalMeasurement as wellbore ZDP. For planned wellbores, navigate via WellboreID to the side-car WellPlanningWellbore, which holds the depth reference in data.VerticalMeasurement. This property is required, which is inconvenient under drilling of the HoleSection. In such a case IsBeingDrilled is set to true and, by convention, MeasuredDepthBase is set to MeasuredDepthTop.|Changes in: Description, Example|
|data.EndDateTime|string|End Date/time|Date/time when drilling completed on the hole section.|Changes in: Example|
|data.PlannedMeasuredDepthBase|number|Planned Measured Depth Base|Planned Base measured depth of the Hole Section. Only used for Actual Hole Sections to enable a comparison against plan.|Changes in: Example|
|data.PlannedTrueVerticalDepthBase|number|Planned True Vertical Depth Base|Planned Base true vertical depth of the Hole Section. Only used for Actual Hole Sections to enable a comparison against plan.|Changes in: Example|
|data.IsBeingDrilled|boolean|Is Section under Drilling?|Boolean flag to indicate whether the HoleSection is in the process of being drilled (true) or completed (false or absent). During drilling (IsBeingDrilled=true) the MeasuredDepthBase value is set to MeasuredDepthTop.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)