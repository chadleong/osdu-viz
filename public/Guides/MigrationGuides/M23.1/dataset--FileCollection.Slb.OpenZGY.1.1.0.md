<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:dataset--FileCollection.Slb.OpenZGY:1.2.0`

Changes between [osdu:wks:dataset--FileCollection.Slb.OpenZGY:1.1.0](../../../E-R/dataset/FileCollection.Slb.OpenZGY.1.1.0.md) and [osdu:wks:dataset--FileCollection.Slb.OpenZGY:1.2.0](../../../E-R/dataset/FileCollection.Slb.OpenZGY.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.TotalSize|string|Total Size|Total size of the dataset in bytes; for files it is the same as declared in FileSourceInfo.FileSize or the sum of all individual files. Implemented as string. The value must be convertible to a long integer (sizes can become very large).|Changes in: Included Schema Fragment Version, Format, Example|
|data.DatasetProperties.FileSourceInfos[].FileSize|string|File Size|Length of file in bytes. Implemented as string. The value must be convertible to a long integer (sizes can become very large).|Changes in: Included Schema Fragment Version, Format, Example|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)