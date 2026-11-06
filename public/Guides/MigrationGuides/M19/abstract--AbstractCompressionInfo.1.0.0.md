<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractCompressionInfo:1.1.0`

Changes between [osdu:wks:AbstractCompressionInfo:1.0.0](../../../E-R/abstract/AbstractCompressionInfo.1.0.0.md) and [osdu:wks:AbstractCompressionInfo:1.1.0](../../../E-R/abstract/AbstractCompressionInfo.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|CompressedByteCount|string|Compressed Byte Count|The byte count of the dataset in its compressed state. The value type is string, but it must be convertible to a long integer.|Added property|
|UncompressedByteCount|string|Uncompressed Byte Count|The byte count of the dataset prior to compression. The value type is string, but it must be convertible to a long integer.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)