<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ResourceCurationStatus:1.0.0`

Changes between [osdu:wks:reference-data--ResourceCurationStatus:1.0.0](../../../E-R/reference-data/ResourceCurationStatus.1.0.0.md) and [osdu:wks:reference-data--ResourceCurationStatus:1.0.0](../../../E-R/reference-data/ResourceCurationStatus.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ResourceCurationStatus:Created | Created | The resource instance has been created, but ingestion has not yet started. | Value added. |
| partition-id:reference-data--ResourceCurationStatus:CREATED | CREATED | DEPRECATED: Please use Code="Created" with Name="Created" instead. The resource instance has been created, but ingestion has not yet started. | **DEPRECATED, superseded by Code: Created**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceCurationStatus:Curated | Curated | The curation process has completed.   | Value added. |
| partition-id:reference-data--ResourceCurationStatus:CURATED | CURATED | DEPRECATED: Please use Code="Curated" with Name="Curated" instead. The curation process has completed.   | **DEPRECATED, superseded by Code: Curated**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceCurationStatus:Curating | Curating | The curation process is in progress. E.g., a Document ingestion is going through the process of extracting artefact, collecting metadata needed, etc. | Value added. |
| partition-id:reference-data--ResourceCurationStatus:CURATING | CURATING | DEPRECATED: Please use Code="Curating" with Name="Curating" instead. The curation process is in progress. E.g. A Document ingestion is going through the process of extracting artefact, collecting metadata needed, etc. | **DEPRECATED, superseded by Code: Curating**<br>Changes in InactiveIndicator, Description |

# Value Spreadsheet and Manifest

* [Reference value workbook ResourceCurationStatus.1.0.0.xlsx](../../../ReferenceValues/Published/ResourceCurationStatus.1.xlsx)
* [Manifest record ResourceCurationStatus.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/FIXED/ResourceCurationStatus.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)