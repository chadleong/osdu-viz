[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicTraceData:1.1.0`

[`osdu:wks:work-product-component--SeismicTraceData:1.1.0`](../../../E-R/work-product-component/SeismicTraceData.1.1.0.md)
extends support to the pre-stack domain. If it can be assumed that no pre-stack seismic trace data are present in the 
data platform, then no action is required. For new pre-stack data ingestion please consider populating the new properties.

## New Properties

|Cumulative Name|Value Type|Description|Migration Instructions|
|-----|-----|-----|-----|
|_data.StackAngleRanges[]_|_object_|_Pre-stack: Sets of trace angle ranges contained within this data set. Fragment Description: A range container carrying minimum/maximum angle values._| |
|data.StackAngleRanges[].Minimum|number|The minimum angle value.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|data.StackAngleRanges[].Maximum|number|The maximum angle value.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|_data.StackAzimuthRanges[]_|_object_|_Pre-stack: Sets of trace azimuth ranges contained within this data set. Fragment Description: A range container carrying minimum/maximum angle values._| |
|data.StackAzimuthRanges[].Minimum|number|The minimum angle value.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|data.StackAzimuthRanges[].Maximum|number|The maximum angle value.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|_data.StackOffsetRanges[]_|_object_|_Pre-stack: Sets of trace offset ranges contained within this data set. Fragment Description: A range container carrying minimum/maximum angle values._| |
|data.StackOffsetRanges[].Minimum|number|The minimum length value.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|data.StackOffsetRanges[].Maximum|number|The maximum length value.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|data.SortOrderID &rarr; [SeismicTraceSortOrder](../../../E-R/reference-data/SeismicTraceSortOrder.1.0.0.md)|string|Pre-stack: Defines the sorting order of the trace data as stored in the file(s).| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |
|data.GatherTypeID &rarr; [SeismicGatherType](../../../E-R/reference-data/SeismicGatherType.1.0.0.md)|string|Pre-stack: the type of gathers in this dataset.| **No action required.** New property, only applicable for new pre-stack seismic datasets, previously unsupported. |

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
