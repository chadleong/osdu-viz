<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--PlannedCementJob:1.1.0`

Changes between [osdu:wks:master-data--PlannedCementJob:1.0.0](../../../E-R/master-data/PlannedCementJob.1.0.0.md) and [osdu:wks:master-data--PlannedCementJob:1.1.0](../../../E-R/master-data/PlannedCementJob.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.NameAliases[]_|_object_|_AbstractAliasNames_|_Alternative names, including historical, by which this master data is/has been known (it should include all the identifiers). Fragment Description: A list of alternative names for an object.  The preferred name is in a separate, scalar property.  It may or may not be repeated in the alias list, though a best practice is to include it if the list is present, but to omit the list if there are no other names.  Note that the abstract entity is an array so the $ref to it is a simple property reference._|Changed|
|data.NameAliases[].AliasName|string|Alias Name|Alternative Name value of defined name type for an object.|Changed|
|data.NameAliases[].AliasNameTypeID &rarr; [AliasNameType](../../../E-R/reference-data/AliasNameType.1.0.0.md)|string|Alias Name Type Id|A classification of alias names such as by role played or type of source, such as regulatory name, regulatory code, company code, international standard name, etc.|Changed|
|data.NameAliases[].DefinitionOrganisationID &rarr; [StandardsOrganisation](../../../E-R/reference-data/StandardsOrganisation.1.0.0.md) &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md)|string|Definition Organisation Id|The StandardsOrganisation (reference-data) or Organisation (master-data) that provided the name (the source).|Changed|
|data.NameAliases[].EffectiveDateTime|string|Effective Date Time|The date and time when an alias name becomes effective.|Changed|
|data.NameAliases[].TerminationDateTime|string|Termination Date Time|The data and time when an alias name is no longer in effect.|Changed|
|_data.GeoContexts[]_|_object_|_AbstractGeoProspectContext_|_A single, typed Prospect entity reference, which is 'abstracted' to AbstractGeoContext and then aggregated by GeoContexts properties._|Changed|
|data.GeoContexts[].GeoPoliticalEntityID &rarr; [GeoPoliticalEntity](../../../E-R/master-data/GeoPoliticalEntity.1.0.0.md)|string|Geo Political Entity Id|Reference to GeoPoliticalEntity.|Changed|
|data.GeoContexts[].GeoTypeID &rarr; [GeoPoliticalEntityType](../../../E-R/reference-data/GeoPoliticalEntityType.1.0.0.md)|string|Geo Type Id|The GeoPoliticalEntityType reference of the GeoPoliticalEntity (via GeoPoliticalEntityID) for application convenience.|Changed|
|data.GeoContexts[].BasinID &rarr; [Basin](../../../E-R/master-data/Basin.1.0.0.md)|string|Basin Id|Reference to Basin.|Changed|
|data.GeoContexts[].GeoTypeID &rarr; [BasinType](../../../E-R/reference-data/BasinType.1.0.0.md)|string|Geo Type Id|The BasinType reference of the Basin (via BasinID) for application convenience.|Changed|
|data.GeoContexts[].FieldID &rarr; [Field](../../../E-R/master-data/Field.1.0.0.md)|string|Field Id|Reference to Field.|Changed|
|data.GeoContexts[].GeoTypeID|const string|Geo Type Id|The fixed type 'Field' for this AbstractGeoFieldContext.|Changed|
|data.GeoContexts[].PlayID &rarr; [Play](../../../E-R/master-data/Play.1.0.0.md)|string|Play Id|Reference to the play.|Changed|
|data.GeoContexts[].GeoTypeID &rarr; [PlayType](../../../E-R/reference-data/PlayType.1.0.0.md)|string|Geo Type Id|The PlayType reference of the Play (via PlayID) for application convenience.|Changed|
|data.GeoContexts[].ProspectID &rarr; [Prospect](../../../E-R/master-data/Prospect.1.0.0.md)|string|Prospect Id|Reference to the prospect.|Changed|
|data.GeoContexts[].GeoTypeID &rarr; [ProspectType](../../../E-R/reference-data/ProspectType.1.0.0.md)|string|Geo Type Id|The ProspectType reference of the Prospect (via ProspectID) for application convenience.|Changed|
|_data.SpatialLocation_|_object_|_AbstractSpatialLocation_|_The spatial location information such as coordinates, CRS information (left empty when not appropriate). Fragment Description: A geographic object which can be described by a set of points._|Changed|
|data.SpatialLocation.SpatialLocationCoordinatesDate|string|Spatial Location Coordinates Date|Date when coordinates were measured or retrieved.|Changed|
|data.SpatialLocation.QuantitativeAccuracyBandID &rarr; [QuantitativeAccuracyBand](../../../E-R/reference-data/QuantitativeAccuracyBand.1.0.0.md)|string|Quantitative Accuracy Band Id|An approximate quantitative assessment of the quality of a location (accurate to > 500 m (i.e. not very accurate)), to < 1 m, etc.|Changed|
|data.SpatialLocation.QualitativeSpatialAccuracyTypeID &rarr; [QualitativeSpatialAccuracyType](../../../E-R/reference-data/QualitativeSpatialAccuracyType.1.0.0.md)|string|Qualitative Spatial Accuracy Type Id|A qualitative description of the quality of a spatial location, e.g. unverifiable, not verified, basic validation.|Changed|
|data.SpatialLocation.CoordinateQualityCheckPerformedBy|string|Coordinate Quality Check Performed By|The user who performed the Quality Check.|Changed|
|data.SpatialLocation.CoordinateQualityCheckDateTime|string|Coordinate Quality Check Date Time|The date of the Quality Check.|Changed|
|data.SpatialLocation.CoordinateQualityCheckRemarks[]|string|Coordinate Quality Check Remarks|Freetext remarks on Quality Check.|Changed|
|_data.SpatialLocation.AsIngestedCoordinates_|_object_|_AbstractAnyCrsFeatureCollection_|_The original or 'as ingested' coordinates (Point, MultiPoint, LineString, MultiLineString, Polygon or MultiPolygon). The name 'AsIngestedCoordinates' was chosen to contrast it to 'OriginalCoordinates', which carries the uncertainty whether any coordinate operations took place before ingestion. In cases where the original CRS is different from the as-ingested CRS, the AppliedOperations can also contain the list of operations applied to the coordinate prior to ingestion. The data structure is similar to GeoJSON FeatureCollection, however in a CRS context explicitly defined within the AbstractAnyCrsFeatureCollection. The coordinate sequence follows GeoJSON standard, i.e. 'eastward/longitude', 'northward/latitude' {, 'upward/height' unless overridden by an explicit direction in the AsIngestedCoordinates.VerticalCoordinateReferenceSystemID}. Fragment Description: A schema like GeoJSON FeatureCollection with a non-WGS 84 CRS context; based on https://geojson.org/schema/FeatureCollection.json. Attention: the coordinate order is fixed: Longitude/Easting/Westing/X first, followed by Latitude/Northing/Southing/Y, optionally height as third coordinate._|Changed|
|_data.SpatialLocation.Wgs84Coordinates_|_object_|_GeoJSON FeatureCollection_|_The normalized coordinates (Point, MultiPoint, LineString, MultiLineString, Polygon or MultiPolygon) based on WGS 84 (EPSG:4326 for 2-dimensional coordinates, EPSG:4326 + EPSG:5714 (MSL) for 3-dimensional coordinates). This derived coordinate representation is intended for global discoverability only. The schema of this substructure is identical to the GeoJSON FeatureCollection https://geojson.org/schema/FeatureCollection.json. The coordinate sequence follows GeoJSON standard, i.e. longitude, latitude {, height} Fragment Description: GeoJSON feature collection as originally published in https://geojson.org/schema/FeatureCollection.json. Attention: the coordinate order is fixed: Longitude first, followed by Latitude, optionally height above MSL (EPSG:5714) as third coordinate._|Changed|
|data.SpatialLocation.AppliedOperations[]|string|Operations Applied|The audit trail of operations applied to the coordinates from the original state to the current state. The list may contain operations applied prior to ingestion as well as the operations applied to produce the Wgs84Coordinates. The text elements refer to ESRI style CRS and Transformation names, which may have to be translated to EPSG standard names.|Changed|
|data.SpatialLocation.SpatialParameterTypeID &rarr; [SpatialParameterType](../../../E-R/reference-data/SpatialParameterType.1.0.0.md)|string|Spatial Parameter Type Id|A type of spatial representation of an object, often general (e.g. an Outline, which could be applied to Field, Reservoir, Facility, etc.) or sometimes specific (e.g. Onshore Outline, State Offshore Outline, Federal Offshore Outline, 3 spatial representations that may be used by Countries).|Changed|
|data.SpatialLocation.SpatialGeometryTypeID &rarr; [SpatialGeometryType](../../../E-R/reference-data/SpatialGeometryType.1.0.0.md)|string|Spatial Geometry Type Id|Indicates the expected look of the SpatialParameterType, e.g. Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon. The value constrains the type of geometries in the GeoJSON Wgs84Coordinates and AsIngestedCoordinates.|Changed|
|data.VersionCreationReason|string|Version Creation Reason|This describes the reason that caused the creation of a new version of this master data.|Changed|
|data.TechnicalAssuranceTypeID &rarr; [TechnicalAssuranceType](../../../E-R/reference-data/TechnicalAssuranceType.1.0.0.md)|string|Technical Assurance Type ID|Describes a master-data record's overall suitability for general business consumption based on data quality. Clarifications: Since Certified is the highest classification of suitable quality, any further change or versioning of a Certified record should be carefully considered and justified. If a Technical Assurance value is not populated then one can assume the data has not been evaluated or its quality is unknown (=Unevaluated). Technical Assurance values are not intended to be used for the identification of a single "preferred" or "definitive" record by comparison with other records.|Changed|
|data.CementStages[].CementingFluid.CementAdditives[].AdditiveTypeID &rarr; [AdditiveType](../../../E-R/reference-data/AdditiveType.1.0.1.md)|string|Additive Type ID|The liquid, solid or gaseous substance used to manipulate the function or properties of a fluid.|Changed|
|data.CementStages[].CementingFluid.CementAdditives[].AdditiveRoleID &rarr; [AdditiveRole](../../../E-R/reference-data/AdditiveRole.1.0.0.md)|string|Additive Role ID|The chief purpose or reason for adding a substance to a fluid used in a downhole operation.|Added property|

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](../M17/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)