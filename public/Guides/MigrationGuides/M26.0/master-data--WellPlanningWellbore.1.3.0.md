<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellPlanningWellbore:1.4.0`

Changes between [osdu:wks:master-data--WellPlanningWellbore:1.3.0](../../../E-R/master-data/WellPlanningWellbore.1.3.0.md) and [osdu:wks:master-data--WellPlanningWellbore:1.4.0](../../../E-R/master-data/WellPlanningWellbore.1.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.HoleSectionID<br> &rarr; [HoleSection](../../../E-R/master-data/HoleSection.1.4.0.md)|string|Hole Section ID|The definitive description of the hole section associated with this wellbore. If the wellbore has more than  one hole section please use the PlannedHoleSections array.|Changes in: Description|
|data.FluidsProgramID<br> &rarr; [FluidsProgram](../../../E-R/master-data/FluidsProgram.1.3.0.md)|string|Fluids Program ID|A reference to the Fluids Program that holds the planned fluids for the wellbore|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)