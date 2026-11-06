<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Basin:1.2.0`

Changes between [osdu:wks:master-data--Basin:1.1.0](../../../E-R/master-data/Basin.1.1.0.md) and [osdu:wks:master-data--Basin:1.2.0](../../../E-R/master-data/Basin.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.EffectiveDate|string|Effective Date|The date and time at which a given basin becomes effective.|Added property|
|data.TerminationDate|string|Termination Date|The date and time at which a given basin is no longer in effect.|Added property|
|data.ProspectFlag|boolean|Prospect Flag|Indicator showing whether the basin is considered prospective for hydrocarbons.|Changes in: Description|
|data.ParentBasinID &rarr; [Basin](../../../E-R/master-data/Basin.1.2.0.md)|string|Parent Basin Id|Optional relationship to the parent Basin.|Changes in: Description|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)