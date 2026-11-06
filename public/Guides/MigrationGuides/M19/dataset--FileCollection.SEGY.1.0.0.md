<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:dataset--FileCollection.SEGY:1.1.0`

Changes between [osdu:wks:dataset--FileCollection.SEGY:1.0.0](../../../E-R/dataset/FileCollection.SEGY.1.0.0.md) and [osdu:wks:dataset--FileCollection.SEGY:1.1.0](../../../E-R/dataset/FileCollection.SEGY.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Precision_|_object_|_AbstractSeismicPrecision_|_The numeric precision of the dataset. Fragment Description: A structure describing the numeric precision of a seismic dataset._|Added property|
|data.Precision.WordFormat &rarr; [WordFormatType](../../../E-R/reference-data/WordFormatType.1.0.0.md)|string|Word Format|Relationship to a reference value record for binary data types, such as INT, UINT, FLOAT, IBM_FLOAT, ASCII, EBCDIC.|Added property|
|data.Precision.WordWidth|integer|Word Width|Size of the word in bytes.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)