<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Wellbore:1.5.0`

Changes between [osdu:wks:master-data--Wellbore:1.4.0](../../../E-R/master-data/Wellbore.1.4.0.md) and [osdu:wks:master-data--Wellbore:1.5.0](../../../E-R/master-data/Wellbore.1.5.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WellboreCosts[].ActivityTypeID &rarr; [WellActivityPhaseType](../../../E-R/reference-data/WellActivityPhaseType.1.0.0.md) &rarr; [WellActivityType](../../../E-R/reference-data/WellActivityType.1.0.0.md)|string|Well Activity Type ID|The activity type, to which the Cost property is attributed to. The intended target reference-data type is WellActivityType; Wellbore:1.3.0 and Wellbore:1.4.0 used WellActivityPhaseType incorrectly.|Changes in: Relationship Targets, Title, Description, Pattern|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)