<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Reservoir:1.2.0`

Changes between [osdu:wks:master-data--Reservoir:1.1.0](../../../E-R/master-data/Reservoir.1.1.0.md) and [osdu:wks:master-data--Reservoir:1.2.0](../../../E-R/master-data/Reservoir.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Remarks[]_|_object_|_AbstractRemark_|_Time stamped remarks associated with the reservoir. Fragment Description: A remark object, pairing a remark text with a source, e.g. an author, and a date, which is typically included in an array. The RemarkSequenceNumber acts as unique key in this case._|Added property|
|data.Remarks[].RemarkSequenceNumber|integer|Remark Sequence Number|A unique identifier for each remark record. This identifier is used to uniquely identify a member in an array of remarks.|Added property|
|data.Remarks[].Remark|string|Remark|A descriptive comment for this remark.|Added property|
|data.Remarks[].RemarkSource|string|Remark Source|The person, vendor, interpreter or other provider of information.|Added property|
|data.Remarks[].RemarkDate|string|Remark Date|The date the remark was issued.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)