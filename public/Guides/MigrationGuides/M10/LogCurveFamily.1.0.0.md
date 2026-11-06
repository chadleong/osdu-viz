[[_TOC_]]

# Migration to `osdu:wks:reference-data--LogCurveFamily:1.1.0`

Relationships were previously documented in the `data.Description`. During the transition from 
[`osdu:wks:reference-data--LogCurveFamily:1.0.0`](../../../E-R/reference-data/LogCurveFamily.1.0.0.md) to
[`osdu:wks:reference-data--LogCurveFamily:1.1.0`](../../../E-R/reference-data/LogCurveFamily.1.1.0.md), the 
relationships become explicit.

## New Properties

|Property|Value Type|Description|Migration Instructions|
|--------|----------|-----------|----------------------|
|data.PropertyType.PropertyTypeID &rarr; [PropertyType](../../../E-R/reference-data/PropertyType.1.0.0.md)|[AbstractPropertyType.1.0.0](../../../E-R/abstract/AbstractPropertyType.1.0.0.md) string|The relationship to the PropertyType reference data item, typically containing an Energistics PWLS 3 uuid. For better traceability and usability the property name is to be populated in the Name property.| For the OSDU delivered content via the reference-values repository **_no action required_**.<br>Custom extension should identify an appropriate PWLS 3 Property. |
|data.PropertyType.Name|[AbstractPropertyType.1.0.0](../../../E-R/abstract/AbstractPropertyType.1.0.0.md) string|The name of the PropertyType, de-normalized, derived from the record referenced in PropertyTypeID.| For the OSDU delivered content via the reference-values repository **_no action required_**.<br> Custom extensions should replicate the `Name` associated with the PropertyType's `data.Name`. |
|data.UnitQuantityID &rarr; [UnitQuantity](../../../E-R/reference-data/UnitQuantity.1.0.0.md)| string|Only populated if the ValueType is "number". It holds the UnitQuantity associated with this reference property type. It is a relationship to UnitQuantity record. Denormalized value: the UnitQuantityID is derived from the PropertyType's UnitQuantity.| For the OSDU delivered content via the reference-values repository **_no action required_**.<br> Custom extensions should relate to an existing `UnitQuantity` record to provide the measurement context. |

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)