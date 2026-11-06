<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ColumnBasedTableType:1.1.0`

Content changes (schema unchanged) [osdu:wks:reference-data--ColumnBasedTableType:1.1.0](../../../E-R/reference-data/ColumnBasedTableType.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ColumnBasedTableType:AdHoc | Ad Hoc | The default column based table type, which defers the column metadata definition to the column based table instances. If a column based table has an absent ColumnBasedTableTypeID value, the default AdHoc applies.  | Value added. |
| partition-id:reference-data--ColumnBasedTableType:ColumnBasedTableTemplate | Column Based Table Template | The column metadata are defined via a master-data--ColumnBasedTableTemplate record instead of this record's KeyColumns and Columns. The template record is identified via the ColumnBasedTableTemplateID. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook ColumnBasedTableType.1.xlsx](../../../ReferenceValues/Published/ColumnBasedTableType.1.xlsx)
* &rarr; [Manifest record ColumnBasedTableType.1.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/ColumnBasedTableType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)