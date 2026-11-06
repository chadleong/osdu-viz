<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellboreOpening:1.1.0`

Changes between [osdu:wks:master-data--WellboreOpening:1.0.0](../../../E-R/master-data/WellboreOpening.1.0.0.md) and [osdu:wks:master-data--WellboreOpening:1.1.0](../../../E-R/master-data/WellboreOpening.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WellboreOpeningTypeID &rarr; [WellboreOpeningType](../../../E-R/reference-data/WellboreOpeningType.1.0.0.md)|string|Wellbore Opening Type ID|The type of Wellbore Opening created along the wellbore reservoir interval. Note: does not include GravelPack which is placed behind the opening, see IsGravelPack.|Added property|
|data.IsGravelPack|boolean|Is Gravel-Pack|Has the wellbore opening interval been gravel-packed.|Changed|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)