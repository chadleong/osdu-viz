[[_TOC_]]

# Migration to `osdu:wks:AbstractQualityMetric:1.1.0`

Migrating  [`osdu:wks:AbstractQualityMetric:1.0.0`](../../../E-R/abstract/AbstractQualityMetric.1.0.0.md)
to [`osdu:wks:AbstractQualityMetric:1.1.0`](../../../E-R/abstract/AbstractQualityMetric.1.1.0.md)
means adding new properties only. No migration effort expected.

## New Properties

| Property      | Value Type | Description                              | Migration Instructions                                                                                                                                                                     |
|---------------|------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MetadataScore | number     | The score in % for the evaluated record. | This property is new and optional, and for the existing records, this will be unspecified. No default value. This property opens integration opportunities. No migration effort required.) |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)