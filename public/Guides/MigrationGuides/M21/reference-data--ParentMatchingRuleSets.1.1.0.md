<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ParentMatchingRuleSets:1.2.0`

Changes between [osdu:wks:reference-data--ParentMatchingRuleSets:1.1.0](../../../E-R/reference-data/ParentMatchingRuleSets.1.1.0.md) and [osdu:wks:reference-data--ParentMatchingRuleSets:1.2.0](../../../E-R/reference-data/ParentMatchingRuleSets.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.MatchingRuleSets[].Conditions[].TargetKind|string|Target Kind|The target kind to query for.|Changes in: Description|
|data.MatchingRuleSets[].Conditions[].ReplaceProperty|string|Replace Property|This value is used to identify the source property that needs replacing in the source record (see data.SourceKind).|Added property|
|~~_data.MatchingRuleSets[].ReplaceAttributes[]_~~|~~_object_~~|~~_ReplaceAttribute_~~|~~_DEPRECATED: Combined with Conditions, no longer in use. The specifications for system attribute replacements. Fragment Description: DEPRECATED: No longer in use. A source and target system attribute specification to replace values._~~|Changes in: Description|
|~~data.MatchingRuleSets[].ReplaceAttributes[].SourceSystemAttribute~~|~~string~~|~~SourceSystemAttribute~~|~~DEPRECATED: No longer in use. The source system attribute delivering the value to replace.~~|Deprecated|
|~~data.MatchingRuleSets[].ReplaceAttributes[].TargetSystemAttribute~~|~~string~~|~~TargetSystemAttribute~~|~~DEPRECATED: No longer in use. The target system attribute receiving the value to replace.~~|Deprecated|
|~~data.MatchingRuleSets[].ReplaceAttributes[].Description~~|~~string~~|~~Description~~|~~DEPRECATED: No longer in use. An optional descriptive remark explaining the purpose of the replacement.~~|Deprecated|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.RelatedBasinMatch | ~~Match Basin~~ | ~~Matching rules to identify a related Basin in the EDS matching namespace.~~ | **_Removed_** |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.SeismicExternalRules | Seismic-rules | EDS Seismic External Rules | Value added. |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.WellboreParentMatch | Match Wellbore Parent | The matching rules to identify a parent Well for a Wellbore in the EDS matching namespace. | Changes in Name, SourceKind, TargetKind, MatchingRuleSets |
| partition-id:reference-data--ParentMatchingRuleSets:EDS.WellLogRules | WellLog Rules | The matching rules to identify a parent Wellbore for a WellLog in the EDS matching namespace. | Value added. |

# Value Spreadsheet and Manifest

* [Reference value workbook ParentMatchingRuleSets.1.2.0.xlsx](../../../ReferenceValues/Authoring/ParentMatchingRuleSets.1.xlsx)
* [Manifest record ParentMatchingRuleSets.1.2.0.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/ParentMatchingRuleSets.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)