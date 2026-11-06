<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ReservoirSegmentType:1.0.1`

Changes between [osdu:wks:reference-data--ReservoirSegmentType:1.0.0](../../../E-R/reference-data/ReservoirSegmentType.1.0.0.md) and [osdu:wks:reference-data--ReservoirSegmentType:1.0.1](../../../E-R/reference-data/ReservoirSegmentType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _List of brief reservoir segment description such as intent/purpose/use_
  * New Description: **_DEPRECATED: No longer recommended for use due to a mixture of concepts. Superseded by a free-text property on master-data--ReservoirSegment. Previously: List of brief reservoir segment description. such as intent/purpose/use_**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ReservoirSegmentType:Intent | Intent | DEPRECATED: Use free-text IntentPurposeUseDescription in ReservoirSegment instead. Previously: Segmentation created for Intent | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ReservoirSegmentType:Purpose | Purpose | DEPRECATED: Use free-text IntentPurposeUseDescription in ReservoirSegment instead. Previously: Segmentation created for purpose | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ReservoirSegmentType:Use | Use | DEPRECATED: Use free-text IntentPurposeUseDescription in ReservoirSegment instead. Previously: Segmentation created for use | **DEPRECATED**<br>Changes in InactiveIndicator, Description |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook ReservoirSegmentType.1.xlsx](../../../ReferenceValues/Published/ReservoirSegmentType.1.xlsx)
* &rarr; [Manifest record ReservoirSegmentType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/ReservoirSegmentType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)