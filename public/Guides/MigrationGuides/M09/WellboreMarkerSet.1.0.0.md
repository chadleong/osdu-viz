[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellboreMarkerSet:1.1.0`

For owners and consumers of WellboreMarkerSet data, please find below the migration instructions based on changes
from [WellboreMarkerSet.1.0.0](../../../E-R/work-product-component/WellboreMarkerSet.1.0.0.md)
to [WellboreMarkerSet.1.1.0](../../../E-R/work-product-component/WellboreMarkerSet.1.1.0.md)
.

## Prerequisites

Before migrating `osdu:wks:work-product-component--WellboreMarkerSet:1.1.0` the completeness of the 
[MarkerPropertyType](../../../E-R/reference-data/MarkerPropertyType.1.0.0.md)
must be validated. If required, new reference data records must be added to capture the marker properties 
present in the existing WellboreMarkerSet records. It is wise to set up a translation table of column/station property 
names (see `data.AvailableMarkerProperties[].MarkerPropertyTypeID`) as used in the datasets in 
order to ease the migration for each WellboreMarkerSet record.

## New Properties

|Property|Value Type|Description|Migration Instructions|
|--------|----------|-----------|----------------------|
|data.AvailableMarkerProperties[]|object|The array of MarkerProperty definitions describing the available properties for this instance of WellboreMarkerSet. Fragment Description: A set of properties describing a marker property which is available for this instance of a WellboreMarkerSet.| This array describes the 'columns' of the marker table in the associated dataset. The purpose of this array is to allow search queries about the dataset content (without accessing the dataset), e.g., "does the dataset contain TVD properties?" The migration requires parsing of the associated dataset and mapping the 'spreadsheet columns' to the array elements. |
|data.AvailableMarkerProperties[].MarkerPropertyTypeID → [MarkerPropertyType](../../../E-R/reference-data/MarkerPropertyType.1.0.0.md)|string|The reference to a marker property type - or if interpreted as CSV columns, the 'well-known column type. It is a relationship to a reference-data--MarkerPropertyType record id.| The relationship to a [MarkerPropertyType](../../../E-R/reference-data/MarkerPropertyType.1.0.0.md) record. This must match the 'column characteristics' (=marker property). See section Prerequisites above. |
|data.AvailableMarkerProperties[].MarkerPropertyUnitID → [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure for the marker properties of type MarkerPropertyType.| The relationship to the marker property value units. Please note that the unit symbols in the dataset may have to be translated to the platform standard UnitOfMeasure codes. |
|data.AvailableMarkerProperties[].Name|string|The name of the marker property (e.g. column in a CSV document) as originally found. If absent The name of the MarkerPropertyType is intended to be used.| Optional name of the marker property as present in the dataset. |
|data.Markers[].MarkerSubSeaVerticalDepth|number|The Marker's TVD converted to a Sub-Sea Vertical depth, i.e., below Mean Sea Level. Note that TVD values above MSL are negative. This is the same as true vertical depth referenced to the vertical CRS “MSL depth”.| If the TVDSS or sub-sea vertical depth values are present in the dataset, populate the new property in the `data.Markers[]` array for better cross-well search support. |

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)