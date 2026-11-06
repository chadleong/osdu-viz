<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellboreIntervalSet:1.3.0`

Changes between [osdu:wks:work-product-component--WellboreIntervalSet:1.2.0](../../../E-R/work-product-component/WellboreIntervalSet.1.2.0.md) and [osdu:wks:work-product-component--WellboreIntervalSet:1.3.0](../../../E-R/work-product-component/WellboreIntervalSet.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Intervals[].IntervalID|string|Interval ID|The unique identifier of the interval array member in the data.Intervals[] array. Ideally a UUID. IntervalID is also used to associate IntervalProperties via the key column data.IntervalProperties.ColumnValues[0].StringColumn[].|Changes in: Description|
|data.IntervalProperties.ColumnBasedTableTemplateID<br> &rarr; [ColumnBasedTableTemplate](../../../E-R/master-data/ColumnBasedTableTemplate.1.0.0.md)|string|ID of the column based table template used|Optional relationship to a ColumnBasedTableTemplate record, which defines the KeyColumn and Column definitions. Some columns defined in the template may be omitted if not contained in the ColumnValues, but the ones used must be exactly identical to the template's column definitions. If the ColumnBasedTableTemplateID is populated, the ColumnBasedTableType is expected to be ColumnBasedTableTemplateControlled.|Added property|
|_data.TimeSeries_|_object_|_AbstractTimeSeriesLink_|_Allows to link the geometry of the WellboreMarkerSet to a particular index of a time series. This is particularly useful for intervals referring to fluid contacts where the topology and geometry varies against the time. Fragment Description: Defines the link between a work-product-component (likely a representation in the RESQML sense) and a time series work-product-component holding the entire list of time steps in a series._|Added property|
|data.TimeSeries.TimeIndex|integer|TimeIndices|Index of the timestamp of the representation in the associated TimeSeries|Added property|
|data.TimeSeries.TimeSeriesID<br> &rarr; [TimeSeries](../../../E-R/work-product-component/TimeSeries.1.2.0.md)|string|TimeSeriesID|Time series the representation is associated to|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](../M24.1/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)