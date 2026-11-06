<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractColumnBasedTable:1.2.0`

Changes between [osdu:wks:AbstractColumnBasedTable:1.1.0](../../../E-R/abstract/AbstractColumnBasedTable.1.1.0.md) and [osdu:wks:AbstractColumnBasedTable:1.2.0](../../../E-R/abstract/AbstractColumnBasedTable.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|ColumnBasedTableTemplateID<br> &rarr; [ColumnBasedTableTemplate](../../../E-R/master-data/ColumnBasedTableTemplate.1.0.0.md)|string|ID of the column based table template used|Optional relationship to a ColumnBasedTableTemplate record, which defines the KeyColumn and Column definitions. Some columns defined in the template may be omitted if not contained in the ColumnValues, but the ones used must be exactly identical to the template's column definitions. If the ColumnBasedTableTemplateID is populated, the ColumnBasedTableType is expected to be ColumnBasedTableTemplateControlled.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)