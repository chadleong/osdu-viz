<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellPlanningWellbore:1.2.0`

Changes between [osdu:wks:master-data--WellPlanningWellbore:1.1.0](../../../E-R/master-data/WellPlanningWellbore.1.1.0.md) and [osdu:wks:master-data--WellPlanningWellbore:1.2.0](../../../E-R/master-data/WellPlanningWellbore.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _A hole in the ground extending from a point at the earth's surface to the maximum point of penetration._
  * New Description: **_A planned wellbore extending from a point at the earth's surface to the maximum point of penetration (planned total depth)._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.PlannedHoleSections[]<br> &rarr; [HoleSection](../../../E-R/master-data/HoleSection.1.3.0.md)|string|Planned Hole Sections|A reference to a set of one or more HoleSections associated to the planned Wellbore.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)