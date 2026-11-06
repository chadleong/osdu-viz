[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellboreTrajectory:1.1.0`

For owners and consumers of WellboreTrajectory data, please find below the migration instructions based on changes
from [WellboreTrajectory.1.0.0](../../../E-R/work-product-component/WellboreTrajectory.1.0.0.md)
to [WellboreTrajectory.1.1.0](../../../E-R/work-product-component/WellboreTrajectory.1.1.0.md)
.

## Prerequisites

Before migrating `osdu:wks:work-product-component--WellboreTrajectory:1.1.0` the completeness of the 
[TrajectoryStationPropertyType](../../../E-R/reference-data/TrajectoryStationPropertyType.1.0.0.md)
must be validated. If required, new reference data records must be added to capture the trajectory station properties 
present in the existing WellboreTrajectory records. It is wise to set up a translation table of column/station property 
names (see `data.AvailableTrajectoryStationProperties[].TrajectoryStationPropertyTypeID`) as used in the datasets in 
order to ease the migration for each WellboreTrajectory record.

## New Properties

|Property|Value Type|Description|Migration Instructions|
|--------|----------|-----------|----------------------|
|data.AvailableTrajectoryStationProperties[]|object|The array of TrajectoryStationProperty definitions describing the available properties for this instance of WellboreTrajectory. Fragment Description: A set of properties describing a trajectory station property which is available for this instance of a WellboreTrajectory.| This array describes the 'columns' of the trajectory station table in the associated dataset. The purpose of this array is to allow search queries about the dataset content (without accessing the dataset), e.g., "does the dataset contain TVD properties?" The migration requires parsing of the associated dataset and mapping the 'spreadsheet columns' to the array elements. |
|data.AvailableTrajectoryStationProperties[].TrajectoryStationPropertyTypeID → [TrajectoryStationPropertyType](../../../E-R/reference-data/TrajectoryStationPropertyType.1.0.0.md)|string|The reference to a trajectory station property type - or if interpreted as channels, the curve or channel name type, identifying e.g. MD, Inclination, Azimuth. This is a relationship to a reference-data--TrajectoryStationPropertyType record id.| The relationship to a [TrajectoryStationPropertyType](../../../E-R/reference-data/TrajectoryStationPropertyType.1.0.0.md) record. This must match the 'column characteristics' (=trajectory station property). See section Prerequisites above. |
|data.AvailableTrajectoryStationProperties[].StationPropertyUnitID → [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure for the station properties of type TrajectoryStationPropertyType.| The relationship to the station property value units. Please note that the unit symbols in the dataset may have to be translated to the platform standard UnitOfMeasure codes. |
|data.AvailableTrajectoryStationProperties[].Name|string|The name of the curve (e.g. column in a CSV document) as originally found. If absent The name of the TrajectoryStationPropertyType is intended to be used.| Optional name of the column/station property as present in the dataset. |
|data.AppliedOperations[]|string|The audit trail of operations applied to the station coordinates from the original state to the current state. The list may contain operations applied prior to ingestion as well as the operations applied to produce the Wgs84Coordinates. The text elements refer to ESRI style CRS and Transformation names, which may have to be translated to EPSG standard names.| This optional list of strings should capture the steps relevant to geomatics and may not be obtainable from records with schema version 1.0.0. If trajectories are re-computed, these steps (output from CRS Converter service `/convertTrajectory`) should be recorded. |
|data.CompanyID → [Organisation](../../../E-R/master-data/Organisation.1.0.0.md)|string|The relationship to company who engaged the service company (ServiceCompanyID) to perform the surveying.| The optional relationship to `master-data--Organisation`. If this is recorded in the dataset, the name of the logging company must be looked up in the list of registered `master-data--Organisation` ids. |

## Modified Properties

|Property|Value Type|Description|Migration Instructions|
|--------|----------|-----------|----------------------|
|data.SurveyToolTypeID → [SurveyToolType](../../../E-R/reference-data/SurveyToolType.1.0.0.md)|string|The type of tool or equipment used to acquire this Directional Survey.  For example, gyroscopic, magnetic, MWD, TOTCO, acid bottle, etc. Follow OWSG reference data and support the ISCWSA survey tool definitions.|This now uses a reference to `reference-data--SurveyToolType`. Make sure that the value in the schema version 1.0.0 is translated to a valid reference data record id. |

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
