<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:dataset--FileCollection.Slb.OpenZGY:1.1.0`

Changes between [osdu:wks:dataset--FileCollection.Slb.OpenZGY:1.0.0](../../../E-R/dataset/FileCollection.Slb.OpenZGY.1.0.0.md) and [osdu:wks:dataset--FileCollection.Slb.OpenZGY:1.1.0](../../../E-R/dataset/FileCollection.Slb.OpenZGY.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Compression_|_object_|_AbstractCompressionInfo_|_Optional compression information. Fragment Description: A schema fragment containing information about the compression applied. This is typically included for types supporting compression in the dataset group-type._|Added property|
|data.Compression.LossyCompressionIndicator|boolean|Lossy Compression Indicator|Boolean that warns that an imperfect compression algorithm has been applied to the bulk binary data.  Details of the compression method need to be discovered from the format properties and file access methods.|Added property|
|data.Compression.CompressionMethodTypeID &rarr; [CompressionMethodType](../../../E-R/reference-data/CompressionMethodType.1.0.0.md)|string|Compression Method Type Id|Name of a compression algorithm applied to the data as stored.|Added property|
|data.Compression.CompressionLevel|number|Compression Level|Number indicating degree of fidelity present in bulk data resulting from compression.  Meaning of number depends on algorithm.|Added property|
|data.Compression.CompressedByteCount|string|Compressed Byte Count|The byte count of the dataset in its compressed state. The value type is string, but it must be convertible to a long integer.|Added property|
|data.Compression.UncompressedByteCount|string|Uncompressed Byte Count|The byte count of the dataset prior to compression. The value type is string, but it must be convertible to a long integer.|Added property|
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