<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicTraceData:1.2.0`

Potential migration to [`osdu:wks:work-product-component--SeismicTraceData:1.2.0`](../../../E-R/work-product-component/SeismicTraceData.1.2.0.md):

With Version 1.2.0 it is possible to declare a SeismicTraceData record as part of a time-lapse sequence. A migration is only meaningful if a SeismicTraceData record is part of a time-lapse sequence. The model is best explained by the figure below:

![SeismicTraceData-TimeLapse.png](../../../Examples/WorkedExamples/Seismic4D/Illustrations/SeismicTraceData-TimeLapse.png)

## Prerequisite

Create a [TimeSeries](../../../E-R/work-product-component/TimeSeries.1.0.0.md) record 
[(example)](../../../Examples/WorkedExamples/Seismic4D/records/TimeSeries.json).

| Cumulative Name                                                                                          | Value Type | Description                                                                                     | Example                                                                               | Migration                                                                                                                   |
|----------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| data.TimeLapse.TimeSeriesID &rarr; [TimeSeries](../../../E-R/work-product-component/TimeSeries.1.0.0.md) | string     | The relationship to a TimeSeries work-product-component.                                        | partition-id:work-product-component--TimeSeries:911bb71f-06ab-4deb-8e68-b8c9229dc76b: | Only if data are part of a time-lapse sequence: add relationship to the `TimeSeries` records holding the time sequence.     |
| data.TimeLapse.TimeIndex                                                                                 | integer    | The index into the TimeSeriesID's data.UTCDateTimeValues[] or data.GeologicTimeValues[] arrays. | 2                                                                                     | Only if data are part of a time-lapse sequence: identify the index into the `TimeSeries`' `data.UTCDateTimeValues[]` array. |
 

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
