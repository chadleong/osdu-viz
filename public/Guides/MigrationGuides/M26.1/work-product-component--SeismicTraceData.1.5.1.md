<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicTraceData:1.6.0`

Changes between [osdu:wks:work-product-component--SeismicTraceData:1.5.1](../../../E-R/work-product-component/SeismicTraceData.1.5.1.md) and [osdu:wks:work-product-component--SeismicTraceData:1.6.0](../../../E-R/work-product-component/SeismicTraceData.1.6.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.TimeLapse_|_object_|_Time Lapse_|_DEPRECATED: Please use `Time Lapse Associations` property instead. The contents positions the SeismicTraceData record in context of a time series. This is to be used for time lapse or 4D SeismicTraceData. This structure is optional and absent for SeismicTraceData not part of a time series._|Changes in: Description|
|_data.TimeLapseAssociations[]_|_object_|_AbstractTimeSeriesLink_|_The contents positions the SeismicTraceData record in context of one or more time series. This is to be used for time lapse or 4D SeismicTraceData. This structure is optional and absent for SeismicTraceData not part of a time series. Fragment Description: Defines the link between a work-product-component (likely a representation in the RESQML sense) and a time series work-product-component holding the entire list of time steps in a series._|Added property|
|data.TimeLapseAssociations[].TimeIndex|integer|TimeIndices|Index of the timestamp of the representation in the associated TimeSeries|Added property|
|data.TimeLapseAssociations[].TimeSeriesID<br> &rarr; [TimeSeries](../../../E-R/work-product-component/TimeSeries.1.2.0.md)|string|TimeSeriesID|Time series the representation is associated to|Added property|
|data.NotionalSeismicProcessingProductID<br> &rarr; [NotionalSeismicProcessingProduct](../../../E-R/work-product-component/NotionalSeismicProcessingProduct.1.0.0.md)|string|Notional Seismic Processing Product Id|Bundling concept used to tie multiple Seismic Trace Datas that are related to the same seismic processing output.|Added property|
|data.IsPreStack|boolean|Is Pre Stack|Indicates if the volume has not been stacked|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)