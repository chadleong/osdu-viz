<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicTraceDataDimensionalityType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicTraceDataDimensionalityType:1.0.0](../../../E-R/reference-data/SeismicTraceDataDimensionalityType.1.0.0.md) and [osdu:wks:reference-data--SeismicTraceDataDimensionalityType:1.0.1](../../../E-R/reference-data/SeismicTraceDataDimensionalityType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The dimensionality of trace data sets (not as acquired but as in the dataset), such as 2D, 3D, 4D._
  * New Description: **_The dimensionality of Seismic trace data sets, represent reflections of seismic waves from subsurface layers. They come in different values based on the data acquired and its representation._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicTraceDataDimensionalityType:1D | 1D | 1D is a basic seismic survey representing seismic amplitudes recorded at a single location over time. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--SeismicTraceDataDimensionalityType:2D | 2D | 2D seismic data is essentially a collection of 1D traces recorded along a line on the Earth's surface. It provides a cross-sectional view of the subsurface, giving insight into the layers along a specific path. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--SeismicTraceDataDimensionalityType:3D | 3D | 3D seismic data involves recording traces over a grid of surface locations, producing a 3D volume of data. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--SeismicTraceDataDimensionalityType:4D | 4D | A 4D survey involves repeated acquisition of a 3D survey area to monitor changes in the subsurface over time, such as those due to production in a reservoir. | Changes in Description, AttributionAuthority |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Seismic_Trace_Data_Dimensionality_Type)
* &rarr; [Manifest record SeismicTraceDataDimensionalityType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicTraceDataDimensionalityType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)