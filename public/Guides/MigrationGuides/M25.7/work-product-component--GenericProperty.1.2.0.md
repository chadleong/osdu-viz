<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--GenericProperty:1.3.0`

Changes between [osdu:wks:work-product-component--GenericProperty:1.2.0](../../../E-R/work-product-component/GenericProperty.1.2.0.md) and [osdu:wks:work-product-component--GenericProperty:1.3.0](../../../E-R/work-product-component/GenericProperty.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ValueType|string|Value Type|The type of value to expect for this reference property, either "number" (floating point number), "integer",  "string", or "boolean".|Changes in: Included Schema Fragment Version, Pattern|
|data.UnitOfMeasureID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated if the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|data.UnitQuantityID<br> &rarr; [UnitQuantity](../../../E-R/reference-data/UnitQuantity.1.0.0.md)|string|Unit Quantity ID|Only populated if the ValueType is "number". It holds the UnitQuantity associated with this reference property type. It is a relationship to UnitQuantity record. If `UnitQuantityID` is provided, `PropertyType` is expected to be omitted.|Changes in: Included Schema Fragment Version, Description|
|_data.PropertyType_|_object_|_AbstractPropertyType_|_It holds the PropertyType associated with this reference property type, further defining the semantics of the value. It contains a relationship to PropertyType record and its (de-normalized) name. String or number values can represent e.g. A date or a time by referring to the respective PropertyType record id. If `PropertyType` is provided, `UnitQuantityID` is expected to be omitted. Fragment Description: A nested object holding the relationship to a PropertyType by id (uuid) and a derived, human-readable name._|Changes in: Included Schema Fragment Version, Description|
|data.ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|
|data.PropertyTopologyID<br> &rarr; [GenericRepresentation](../../../E-R/work-product-component/GenericRepresentation.1.2.0.md)<br> &rarr; [GpGridRepresentation](../../../E-R/work-product-component/GpGridRepresentation.1.2.0.md)<br> &rarr; [GridConnectionSetRepresentation](../../../E-R/work-product-component/GridConnectionSetRepresentation.1.2.0.md)<br> &rarr; [IjkGridRepresentation](../../../E-R/work-product-component/IjkGridRepresentation.1.2.0.md)<br> &rarr; [SubRepresentation](../../../E-R/work-product-component/SubRepresentation.1.2.0.md)<br> &rarr; [UnstructuredColumnLayerGridRepresentation](../../../E-R/work-product-component/UnstructuredColumnLayerGridRepresentation.1.2.0.md)<br> &rarr; [UnstructuredGridRepresentation](../../../E-R/work-product-component/UnstructuredGridRepresentation.1.2.0.md)<br> &rarr; [SeismicHorizon](../../../E-R/work-product-component/SeismicHorizon.2.0.0.md)<br> &rarr; [SeismicFault](../../../E-R/work-product-component/SeismicFault.2.0.0.md)<br> &rarr; [SeismicTraceData](../../../E-R/work-product-component/SeismicTraceData.1.5.1.md)<br> &rarr; [WellLog](../../../E-R/work-product-component/WellLog.1.5.0.md)|string|PropertyTopologyID|Relationship to the topology that the property refers to. These are typed relationships to particular objects, typically work product components|Changes in: Relationship Targets, Description, Pattern|
|~~data.PropertyUnitID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)~~|~~string~~|~~PropertyUnit~~|~~DEPRECATED: Please use the `AbstractReferencePropertyType.UnitOfMeasureID` instead. Unit of Measure of the property~~|Deprecated|
|data.ClassificationTableID<br> &rarr; [ColumnBasedTable](../../../E-R/work-product-component/ColumnBasedTable.1.4.0.md)|string|ClassificationTableID|The relationship to the Column Based Table associated to a categorical property. Can be based on a defined dictionary of rock types|Changes in: Description|
|data.TimeSeriesID<br> &rarr; [TimeSeries](../../../E-R/work-product-component/TimeSeries.1.2.0.md)|string|TimeSeriesID|Relationship to the time series that the property refers to|Changes in: Description|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)