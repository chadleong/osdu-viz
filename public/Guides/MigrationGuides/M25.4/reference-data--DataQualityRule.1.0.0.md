<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--DataQualityRule:1.1.0`

Changes between [osdu:wks:reference-data--DataQualityRule:1.0.0](../../../E-R/reference-data/DataQualityRule.1.0.0.md) and [osdu:wks:reference-data--DataQualityRule:1.1.0](../../../E-R/reference-data/DataQualityRule.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.EvaluatedKind|string|Evaluated Kind|The kind of the data this ruleset applies to. Version-specific and non-version-specific kind can be defined. For example, osdu:wks:master-data--Well:1 (requiring only the major version and permits any minor and patch version); osdu:wks:master-data--Wellbore:1.0.0 (this is version-specific); osdu:wks:work-product-component--WellLog (this is unspecific accepting any version). Also note: a total wildcard would have to end with a :  like this: osdu:wks:group-type--EntityType:.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Reference Data Changes

**_No Reference Value Changes._**

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook DataQualityRule.1.xlsx](../../../ReferenceValues/Published/DataQualityRule.1.xlsx)
* &rarr; [Manifest record DataQualityRule.1.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/DataQualityRule.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)