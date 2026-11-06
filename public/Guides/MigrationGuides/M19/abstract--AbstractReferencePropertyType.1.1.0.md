<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractReferencePropertyType:1.2.0`

Changes between [osdu:wks:AbstractReferencePropertyType:1.1.0](../../../E-R/abstract/AbstractReferencePropertyType.1.1.0.md) and [osdu:wks:AbstractReferencePropertyType:1.2.0](../../../E-R/abstract/AbstractReferencePropertyType.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|UnitOfMeasureID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)