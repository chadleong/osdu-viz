<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellPlanningWellbore:1.3.0`

Changes between [osdu:wks:master-data--WellPlanningWellbore:1.2.0](../../../E-R/master-data/WellPlanningWellbore.1.2.0.md) and [osdu:wks:master-data--WellPlanningWellbore:1.3.0](../../../E-R/master-data/WellPlanningWellbore.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.PlannedCasingDesigns[]<br> &rarr; [CasingDesign](../../../E-R/master-data/CasingDesign.1.2.0.md)|string|Planned Casing Designs|A reference to a set of one or more CasingDesigns associated to the planned Wellbore.|Added property|
|data.PlannedWellActivityProgramID<br> &rarr; [WellActivityProgram](../../../E-R/master-data/WellActivityProgram.1.1.0.md)|string|Planned Well Activity Program ID|A reference to the Well Activity Program that holds the planned programs for each phase of the Wellbore|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)