[[_TOC_]]

# Migration to `osdu:wks:work-product-component--DataQuality:1.1.0`

Migrating  [`osdu:wks:work-product-component--DataQuality:1.0.0`](../../../E-R/work-product-component/DataQuality.1.0.0.md)
to [`osdu:wks:work-product-component--DataQuality:1.1.0`](../../../E-R/work-product-component/DataQuality.1.1.0.md)
means adding new properties only. No migration effort expected. Taking the opportunity, this new version includes 
[AbstractWorkProductComponent:1.1.0](../../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md).

## New Properties

| Property                         | Value Type | Description                              | Migration Instructions                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|----------------------------------|------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.QualityMetric.MetadataScore | number     | The score in % for the evaluated record. | This property is new and optional, and for the existing records, this will be unspecified. No default value. This property opens integration opportunities. No migration effort required. `data.QualityMetric` in [`osdu:wks:work-product-component--DataQuality:1.1.0`](../../../E-R/work-product-component/DataQuality.1.1.0.md) is included from [`osdu:wks:AbstractQualityMetric.1.1.0`](../../../E-R/abstract/AbstractQualityMetric.1.1.0.md) parent type schema fragment. |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)