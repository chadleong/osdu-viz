<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractColumnBasedTable:1.0.1`

Changes between [osdu:wks:AbstractColumnBasedTable:1.0.0](../../../E-R/abstract/AbstractColumnBasedTable.1.0.0.md) and [osdu:wks:AbstractColumnBasedTable:1.0.1](../../../E-R/abstract/AbstractColumnBasedTable.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|KeyColumns[].UnitOfMeasureID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|KeyColumns[].ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|
|Columns[].UnitOfMeasureID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|Columns[].ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|
|ColumnSize|integer|Size of columns|The count of elements in each column, i.e. the number of rows in the ColumnBasedTable. All columns must have the same size, including placeholder values for the undefined cells identified by ColumnValues[].UndefinedValueRows[].|Changes in: Description|
|ColumnValues[].UndefinedValueRows[]|integer|Undefined value rows|The row indexes for which the values are flagged as undefined. The first element has index 0.|Changes in: Description|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)