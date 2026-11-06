<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ColumnBasedTableType:1.1.0`

Changes between [osdu:wks:reference-data--ColumnBasedTableType:1.0.0](../../../E-R/reference-data/ColumnBasedTableType.1.0.0.md) and [osdu:wks:reference-data--ColumnBasedTableType:1.1.0](../../../E-R/reference-data/ColumnBasedTableType.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Governance
  * Old Governance: _OPEN_
  * New Governance: **_LOCAL_**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.KeyColumns[].UnitOfMeasureID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|data.KeyColumns[].ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|
|data.Columns[].UnitOfMeasureID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|data.Columns[].ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Reference Data Changes

**_No Reference Value Changes._**

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook ColumnBasedTableType.1.1.0.xlsx](../../../ReferenceValues/Published/ColumnBasedTableType.1.xlsx)
* &rarr; [Manifest record ColumnBasedTableType.1.1.0.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/ColumnBasedTableType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)