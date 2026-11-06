<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--ColumnBasedTable:1.4.0`

Changes between [osdu:wks:work-product-component--ColumnBasedTable:1.3.0](../../../E-R/work-product-component/ColumnBasedTable.1.3.0.md) and [osdu:wks:work-product-component--ColumnBasedTable:1.4.0](../../../E-R/work-product-component/ColumnBasedTable.1.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.MasterDataID|string|Master Data ID|The master-data record, e.g., project or survey, which provides further context to the tabular data.|Added property|
|data.WorkProductComponentID|string|Work Product Component ID|The work-product-component record, e.g., activity, which provides further context to the tabular data.|Added property|
|data.KeyColumns[].ValueType|string|Value Type|The type of value to expect for this reference property, either "number" (floating point number), "integer",  "string", or "boolean".|Changes in: Included Schema Fragment Version, Pattern|
|data.Columns[].ValueType|string|Value Type|The type of value to expect for this reference property, either "number" (floating point number), "integer",  "string", or "boolean".|Changes in: Included Schema Fragment Version, Pattern|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)