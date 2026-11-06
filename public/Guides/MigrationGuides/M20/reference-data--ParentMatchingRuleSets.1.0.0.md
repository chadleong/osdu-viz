<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ParentMatchingRuleSets:1.1.0`

Changes between [osdu:wks:reference-data--ParentMatchingRuleSets:1.0.0](../../../E-R/reference-data/ParentMatchingRuleSets.1.0.0.md) and [osdu:wks:reference-data--ParentMatchingRuleSets:1.1.0](../../../E-R/reference-data/ParentMatchingRuleSets.1.1.0.md) are listed below.

The values in this reference value list are **examples only**. Parent matching rules are specific to the connected
source and the target environment.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|~~data.MatchingRuleSets[].Conditions[].TargetKind~~|~~string~~|~~Target Kind~~|~~DEPRECATED: Not used, previously: The target kind to query for.~~|Deprecated|
|data.MatchingRuleSets[].Conditions[].Description|string|Description|A descriptive remark about the purpose of the condition.|Added property|
|_data.MatchingRuleSets[].ReplaceAttributes[]_|_object_|_ReplaceAttribute_|_The specifications for system attribute replacements. Fragment Description: A source and target system attribute specification to replace values._|Added property|
|data.MatchingRuleSets[].ReplaceAttributes[].SourceSystemAttribute|string|SourceSystemAttribute|The source system attribute delivering the value to replace.|Added property|
|data.MatchingRuleSets[].ReplaceAttributes[].TargetSystemAttribute|string|TargetSystemAttribute|The target system attribute receiving the value to replace.|Added property|
|data.MatchingRuleSets[].ReplaceAttributes[].Description|string|Description|An optional descriptive remark explaining the purpose of the replacement.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.RelatedBasinMatch | ~~Match Basin~~ | ~~Matching rules to identify a related Basin in the EDS matching namespace.~~ | **_Removed_** |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.WellboreParentMatch | Match Wellbore Parent | The matching rules to identify a parent Well for a Wellbore in the EDS matching namespace. | Changes in Name, SourceKind, TargetKind, MatchingRuleSets |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.WellLogRules | WellLog Rules | The matching rules to identify a parent Wellbore for a WellLog in the EDS matching namespace. | Value added. |

# Value Spreadsheet and Manifest

* [Reference value workbook ParentMatchingRuleSets.1.1.0.xlsx](../../../ReferenceValues/Authoring/ParentMatchingRuleSets.1.xlsx)
* [Manifest record ParentMatchingRuleSets.1.1.0.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/ParentMatchingRuleSets.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)