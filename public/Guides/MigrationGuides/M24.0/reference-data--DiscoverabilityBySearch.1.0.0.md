<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--DiscoverabilityBySearch:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--DiscoverabilityBySearch:1.0.0](../../../E-R/reference-data/DiscoverabilityBySearch.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--DiscoverabilityBySearch:None | None | The property in context is located in an object inside an array, which is not indexed, see https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#default-1. | Changes in Description |
| partition-id:reference-data--DiscoverabilityBySearch:QueryFlattened | Query Flattened | The property in context is located in an object inside an array, which is indexed as flattened', see https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#flattened-queries. | Changes in Description |
| partition-id:reference-data--DiscoverabilityBySearch:QueryNested | Query Nested  | The property in context is located in an object inside an array, which is indexed as 'nested', see https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#nested-queries. | Changes in Description |
| partition-id:reference-data--DiscoverabilityBySearch:QuerySimple | Query Simple | The property in context is not part of an array of objects and is discoverable via simple queries, see https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/api.md#text-queries. | Changes in Description |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook DiscoverabilityBySearch.1.xlsx](../../../ReferenceValues/Published/DiscoverabilityBySearch.1.xlsx)
* &rarr; [Manifest record DiscoverabilityBySearch.1.json](../../../ReferenceValues/Manifests/reference-data/FIXED/DiscoverabilityBySearch.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)