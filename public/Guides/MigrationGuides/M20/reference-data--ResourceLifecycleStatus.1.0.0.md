<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ResourceLifecycleStatus:1.0.0`

Changes between [osdu:wks:reference-data--ResourceLifecycleStatus:1.0.0](../../../E-R/reference-data/ResourceLifecycleStatus.1.0.0.md) and [osdu:wks:reference-data--ResourceLifecycleStatus:1.0.0](../../../E-R/reference-data/ResourceLifecycleStatus.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ResourceLifecycleStatus:ACCEPTED | ACCEPTED | DEPRECATED: Please use Code="Completed" with Name="Completed" instead. When the ingestion process has completed successfully. | **DEPRECATED, superseded by Code: Completed**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceLifecycleStatus:Completed | Completed | When the ingestion process has completed successfully and any associated content is ready for consumption. This status is applicable to all group-type records. | Value added. |
| partition-id:reference-data--ResourceLifecycleStatus:Loading | Loading | When the ingestion process received a request to create a resource and loading is in progress. This lifecycle stage is applicable to all group-types. | Value added. |
| partition-id:reference-data--ResourceLifecycleStatus:LOADING | LOADING | DEPRECATED: Please use Code="Loading" with Name="Loading" instead. When the ingestion process received a request to create a resource. | **DEPRECATED, superseded by Code: Loading**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceLifecycleStatus:Optimized | Optimized | The content has been placed in optimized storage, i.e., in Domain Data Management Services (DDMS). This status is applicable to work-product-component group-type records. | Value added. |
| partition-id:reference-data--ResourceLifecycleStatus:Ordered | Ordered | The content related to a work-product-component is unavailable for consumption but ordered. This status is applicable to a number scenarios like 1) content uploads for large datasets, 2) content replication via, e.g., from connected data sources, or 3) commercial transactions, where data delivery has not been completed. | Value added. |
| partition-id:reference-data--ResourceLifecycleStatus:Received | Received | DEPRECATED: Please use Code="Completed" with Name="Completed" instead. After 'Received', the resource records are created and the content file is placed into storage. This lifecycle stage is applicable only to work-product-component group-type records. | **DEPRECATED, superseded by Code: Completed**<br>Value added. |
| partition-id:reference-data--ResourceLifecycleStatus:RECIEVED | RECIEVED | DEPRECATED: Please use Code="Received" with Name="Received" instead. After RECEIVED, the resource records are created and the content file is placed into storage.  | **DEPRECATED, superseded by Code: Received**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceLifecycleStatus:Rescinded | Rescinded | DEPRECATED: This status is never documented because 'soft' deletes remove the record from the index which means that the  deleted record is no longer discoverable. Records removed with the purge operation will be removed completely, i.e., not discoverable. Previous definition: When a resource is logically deleted from the data platform.  This means that the data, metadata, and content (e.g. file(s) and/or DDMS content) should not be used.  | **DEPRECATED**<br>Value added. |
| partition-id:reference-data--ResourceLifecycleStatus:RESCINDED | RESCINDED | DEPRECATED: Please use Code="Rescinded" with Name="Rescinded" instead. When a resource is logically deleted from the data platform.  This means that the data, metadata, and content file(s) should not be used.  | **DEPRECATED, superseded by Code: Rescinded**<br>Changes in InactiveIndicator, Description |

# Value Spreadsheet and Manifest

* [Reference value workbook ResourceLifecycleStatus.1.0.0.xlsx](../../../ReferenceValues/Published/ResourceLifecycleStatus.1.xlsx)
* [Manifest record ResourceLifecycleStatus.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/FIXED/ResourceLifecycleStatus.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)