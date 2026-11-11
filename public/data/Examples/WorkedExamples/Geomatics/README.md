<a name="TOC"><b>Table of Contents</b></a>

[[_TOC_]]

# Summary of Geomatics in OSDU Schemas

## Catalogs

OSDU R3 will _**not**_ mirror the full
[EPSG GeoRepository](https://apps.epsg.org/api/swagger/ui/index#)
data model. Instead, two catalogs are introduced, which can be populated with content derived from
the [EPSG GeoRepository](https://apps.epsg.org/api/swagger/ui/index#):

### CoordinateReferenceSystem

* [`CoordinateReferenceSystem`](../../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md)
  is capable of holding the most important spatial reference information and supports simple search functionality. This
  entity describes any of the following sub-types:
    * `BoundCRS`
    * `CompoundCRS` (no example shipped with OSDU default content)
    * `DerivedCRS` (no example shipped with OSDU default content)
    * `EngineeringCRS` (no example shipped with OSDU default content; bin grid coordinate systems are handled via `P6`
       properties in [AbstractBinGrid](../../../E-R/abstract/AbstractBinGrid.1.1.0.md))
    * `GeodeticCRS`
    * `ProjectedCRS`
    * `VerticalCRS`

### CoordinateTransformation

* [`CoordinateTransformation`](../../../E-R/reference-data/CoordinateTransformation.1.2.0.md)
  allows referencing transformations from BoundCRS and creates the prerequisites for a transformation selection. The
  entity describes the following sub-types:
  * `Transformation` aka single coordinate operations
  * `ConcatenatedOperation`, i.e. a chained sequence of single transformations. (Beware of limitations in the converter
    implementation)

Please consider the catalog entities above as part of the Frame of Reference definition. The details are explained in a
separate [FrameOfReference documentation](../FrameOfReference/README.md)

### Coupling to Data Model

The two types provide the complete relationship surface to the rest of the OSDU data schema. The full EPSG data model
can be introduced without changing the consumers, i.e., entity schemas referring to
[`CoordinateReferenceSystem`](../../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md).

The coupling points to
[`CoordinateReferenceSystem`](../../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md)
are via - for example:

* [`AbstractSpatialLocation.CoordinateReferenceSystemID`](../../../E-R/abstract/AbstractSpatialLocation.1.0.0.md)
* [`AbstractMetaItem.CoordinateReferenceSystemID`](../../../E-R/abstract/AbstractMetaItem.1.0.0.md)
* [`AbstractFacilityVerticalMeasurement.VerticalCRSID`](../../../E-R/abstract/AbstractFacilityVerticalMeasurement.1.0.0.md)
* [`Well data.DefaultVerticalCRSID`](../../../E-R/master-data/Well.1.5.0.md)
* [`FaultSystem data.HorizontalCRSID`](../../../E-R/work-product-component/FaultSystem.1.4.1.md)
* [`SeismicLineGeometry data.HorizontalCRSID`](../../../E-R/work-product-component/SeismicLineGeometry.1.2.0.md)
* [`SeismicTraceData data.HorizontalCRSID`](../../../E-R/work-product-component/SeismicTraceData.1.8.0.md)
* [`VelocityModeling data.HorizontalCRSID`](../../../E-R/work-product-component/VelocityModeling.1.4.0.md)

The above list is not complete. For a complete list of usage, please refer to the
[`CoordinateReferenceSystem` documentation, Usage table](../../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md#coordinatereferencesystem120-usage)

### Coupling to Geodetic API

The [CRS Conversion Service](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service)
API takes references to CoordinateReferenceSystem records (preferred) or self-contained,
engine-consumable CRS definitions. The definitions use ESRI WKT to ensure backwards compatibility with
legacy systems. ESRI WKT is generally accepted by many spatial engine implementations.

This ESRI WKT dependency can be overcome once solid forward and backwards translations are available.

### Catalog Contents

OSDU delivers example contents for the CoordinateReferenceSystem and CoordinateTransformation catalogs. Typically, it is
expected that OSDU operators populate the OSDU CoordinateReferenceSystem and CoordinateTransformation catalogs with
content derived from [GeoRepository](https://epsg.org/home.html)-like master catalogs. This allows operators to populate
the catalogs with their own naming and usage recommendations. CoordinateReferenceSystem and CoordinateTransformation
record `id`s do however follow an OSDU standard, which is defined in the Schema Usage Guide
[4.3.3 Conventions for CoordinateReferenceSystem and CoordinateTransformation](../../../Guides/Chapters/04-FrameOfReference.md#433-conventions-for-coordinatereferencesystem-and-coordinatetransformation).

[&rarr; Back to Table of Contents](#TOC)

# Geospatial Representation

OSDU's standard representation of geospatial data is
[`AbstractSpatialLocation`](../../../E-R/abstract/AbstractSpatialLocation.1.0.0.md). It relies on
[**GeoJSON (IETF RFC 7946 The GeoJSON Format)**](https://www.rfc-editor.org/info/rfc7946) and
GeoJSON-like schemas capable of holding

* `Point`
* `MultiPoint`
* `LineString`
* `MultiLineString`
* `Polygon` (Ring)
* `MultiPolygon`

geometries. The contract comes with additional rules

1. implied by GeoJSON: the order of coordinates is fixed and not depending on the coordinate order defined by the EPSG
   CRS:
   _**Longitude/Easting/Westing/X first, followed by Latitude/Northing/Southing/Y**_
2. The optional third coordinate refers by GeoJSON standard to EGM2008, EPSG::3855, (See
   also [GeoJSON errata 7261](https://www.rfc-editor.org/errata/eid7261)). This is practically within 1.5 m of MSL Height,
   EPSG::5714, a very common vertical reference. Any explicit VerticalCoordinateReferenceSystemID overrides this
   implicit definition for [AbstractAnyCrsFeatureCollection](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md). See also
   [White Paper State of CRS Services](https://gitlab.opengroup.org/osdu/subcommittees/ea/projects/geomatics/home/-/issues/66#21-status).

## FeatureCollection

GeoJSON is exclusively `WGS 84` and replicated in
[`AbstractFeatureCollection`](../../../E-R/abstract/AbstractFeatureCollection.1.0.0.md), which is an exact copy of the
published [GeoJSON schema](https://geojson.org/schema/FeatureCollection.json).

## AnyCrsFeatureCollection

GeoJSON is WGS 84 _**only**_. To overcome this limitation and disambiguate the data structure from GeoJSON a copy of
GeoJSON has been defined as
[`AbstractAnyCrsFeatureCollection`](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.0.0.md).
The additional properties, critical to the CRS converter are:

1. `CoordinateReferenceSystemID` contains the CRS catalog reference, which determines the context of the numbers in
   the `AnyCrsFeature` type elements.
2. **mandatory:** `persistableReferenceCRS` contains the complete, self-contained, engine-consumable
   CRS description. It is a sibling to `CoordinateReferenceSystemID` If both properties are populated,
   `CoordinateReferenceSystemID` is preferred by the CRS converter. For historical reasons `persistableReferenceCRS` is
   mandatory, i.e., the property **_must_** be present in the record. If the optional `CoordinateReferenceSystemID` is
   populated, the `persistableReferenceCRS` can be supplied as an empty string `""` to satisfy the schema requirements.
   However, see also [Limitations](#limitations) for known issues in earlier deployments.
3. optional `VerticalCoordinateReferenceSystemID`, strongly recommended for 3D coordinates, a reference to a VerticalCRS
   in the CRS catalog.
4. optional `persistableReferenceVerticalCRS` referring to an explicit, self-contained vertical CRS description. It is a
   sibling to `VerticalCoordinateReferenceSystemID`.
5. optional `persistableReferenceUnitZ` for an optional definition of the third coordinate's unit. It is required for
   3D coordinates **not** associated with a vertical CRS. In that case the vertical reference is assumed to be mean sea
   level (MSL).
6. Disambiguated values for the geometry types:
    * `AnyCrsPoint`
    * `AnyCrsMultiPoint`
    * `AnyCrsLineString`
    * `AnyCrsMultiLineString`
    * `AnyCrsPolygon`
    * `AnyCrsMultiPolygon`

[&rarr; Back to Table of Contents](#TOC)

# CRS Conversion API (Engine)

The CRS Conversion API (powered by [Apache SIS](https://sis.apache.org/)) accepts coordinate reference system
definitions as either

1. references to records of the CoordinateReferenceSystem catalog (by value of a related, un-versioned CRS record `id`,
   i.e., `id` with trailing colon), or
2. via a self-contained [`persistableReference`](../../../E-R/abstract/AbstractPersistableReference.1.0.0.md)
   strings.

Option 1, using an `id`, is the preferred usage (with milestone 13 and later). In this case the converter looks up the
PersistableReference string via the related CoordinateReferenceSystem `id`.

The "complete, self-contained, persistable reference strings" contain ESRI WKT. They can be independent of the CRS
catalog; CRS Catalog records also contain PersistableReference strings to be used by the engine,
see [Coupling to Geodetic API](#coupling-to-geodetic-api).

## Capabilities

The [CRS Conversion Service](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service) offers a number of API versions:
* [v2 spec](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service/-/blob/master/docs/v2/api_spec/crs_converter_openapi.json) (deprecated)
* [v3 spec](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service/-/blob/master/docs/v3/api_spec/crs_converter_openapi.json)
* [v4 spec](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service/-/blob/master/docs/v4/api_spec/crs_converter_openapi.json) (enhanced convertTrajectory)

The CRS Converter API links are provided for convenience. Please check the latest published version in the
[CRS Conversion repository](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service).

1. Point conversion `/convert` (v3)
2. GeoJSON `AbstractAnyCrsFeatureCollection` &harr; `AbstractFeatureCollection`
   using `/convertGeoJson` (v3)
3. MD, Inclination, Azimuth Trajectory computations, including azimuth, scale and optionally coning correction (LMP)
   using `/convertTrajectory` (v3, v4)
4. BinGrid `/convertBinGrid` (v3)

There is an excellent [tutorial for the v3 spec available](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service/-/blob/master/docs/v3/tutorial/CRS_Convert_Service_howto.md).

## Limitations

The API (see [Capabilities](#capabilities)) operates with two CRS definitions, one defining the source `fromCRS` and one
for the target `toCRS`. This works well with BoundCRS or late-bound CRS based on the same GeodeticCRS.

To support general coordinate operations including coordinate transformations it is required to use references to a
BoundCRS CoordinateReferenceSystem catalog record or a self-contained persistableReference string, which binds the
selected transformation to one of the source or target CRSs.

There is a known issue ([Storage #214](https://community.opengroup.org/osdu/platform/system/storage/-/issues/214)) for
platform deployments prior to M23, where fully populated `persistableReferenceCrs` are required for successful
normalization of `AsIngestedCoordinates`.

## Usage Examples

The worked examples for [WellboreTrajectory](../WellboreTrajectory/README.md)
represent a realistic use case. there are worked our examples for request/response payloads for the CRS Converter.

### ED50 / UTM zone 31N * DMA-mean [23031,1133] &rarr; WGS 84

<details>

<summary markdown="span"><code>/convertGeoJson</code> request</summary>

<OsduImportJSON>[request](../WellboreTrajectory/crs_operations/wrp_23031001_to_4326_request.json)</OsduImportJSON>

```json
{
  "toCRS": "partition-id:reference-data--CoordinateReferenceSystem:Geographic2D:EPSG::4326:",
  "featureCollection": {
    "type": "AnyCrsFeatureCollection",
    "CoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::23031_EPSG::1133:",
    "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"OSDU\",\"code\":\"23031001\"},\"lateBoundCRS\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"23031\"},\"name\":\"ED_1950_UTM_Zone_31N\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"PROJCS[\\\"ED_1950_UTM_Zone_31N\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],PROJECTION[\\\"Transverse_Mercator\\\"],PARAMETER[\\\"False_Easting\\\",500000.0],PARAMETER[\\\"False_Northing\\\",0.0],PARAMETER[\\\"Central_Meridian\\\",3.0],PARAMETER[\\\"Scale_Factor\\\",0.9996],PARAMETER[\\\"Latitude_Of_Origin\\\",0.0],UNIT[\\\"Meter\\\",1.0],AUTHORITY[\\\"EPSG\\\",23031]]\"},\"name\":\"ED50 * DMA-mean / UTM zone 31N [23031,1133]\",\"singleCT\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"1133\"},\"name\":\"ED_1950_To_WGS_1984_1\",\"type\":\"ST\",\"ver\":\"PE_10_9_1\",\"wkt\":\"GEOGTRAN[\\\"ED_1950_To_WGS_1984_1\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],GEOGCS[\\\"GCS_WGS_1984\\\",DATUM[\\\"D_WGS_1984\\\",SPHEROID[\\\"WGS_1984\\\",6378137.0,298.257223563]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],METHOD[\\\"Geocentric_Translation\\\"],PARAMETER[\\\"X_Axis_Translation\\\",-87.0],PARAMETER[\\\"Y_Axis_Translation\\\",-98.0],PARAMETER[\\\"Z_Axis_Translation\\\",-121.0],OPERATIONACCURACY[10.0],AUTHORITY[\\\"EPSG\\\",1133]]\"},\"type\":\"EBC\",\"ver\":\"PE_10_9_1\"}",
    "VerticalUnitID": "partition-id:reference-data--UnitOfMeasure:m:",
    "persistableReferenceUnitZ": "{\"scaleOffset\":{\"scale\":1.0,\"offset\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
    "features": [
      {
        "type": "AnyCrsFeature",
        "properties": {},
        "geometry": {
          "type": "AnyCrsPoint",
          "coordinates": [
            622011.96,
            5910706.37
          ]
        }
      }
    ]
  }
}
```

</details>

<details>

<summary markdown="span"><code>/convertGeoJson</code> response</summary>

<OsduImportJSON>[response](../WellboreTrajectory/crs_operations/wrp_23031001_to_4326_response.json)</OsduImportJSON>

```json
{
  "successCount": 1,
  "totalCount": 1,
  "featureCollection": {
    "features": [
      {
        "geometry": {
          "coordinates": [
            4.83073672457101,
            53.32956038067355
          ],
          "type": "Point",
          "bbox": null
        },
        "properties": {},
        "type": "Feature",
        "bbox": null
      }
    ],
    "properties": null,
    "persistableReferenceCrs": null,
    "persistableReferenceUnitZ": "{\"scaleOffset\":{\"scale\":1.0,\"offset\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
    "type": "FeatureCollection",
    "bbox": null
  },
  "operationsApplied": [
    "conversion from ED_1950_UTM_Zone_31N to GCS_European_1950; 1 points converted",
    "transformation GCS_European_1950 to GCS_WGS_1984 using ED_1950_To_WGS_1984_1; 1 points successfully transformed"
  ]
}
```

</details>

### ED50 / UTM zone 31N * DMA-mean [23031,1133] &rarr; ED50 / TM 5 NE * DMA-mean [23095,1133]

<details>

<summary markdown="span"><code>/convertGeoJson</code> request</summary>

<OsduImportJSON>[request](../WellboreTrajectory/crs_operations/wrp_23031001_to_23095001_request.json)</OsduImportJSON>

```json
{
  "toCRS": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::23095_EPSG::1133:",
  "featureCollection": {
    "type": "AnyCrsFeatureCollection",
    "CoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::23031_EPSG::1133:",
    "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"OSDU\",\"code\":\"23031001\"},\"lateBoundCRS\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"23031\"},\"name\":\"ED_1950_UTM_Zone_31N\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"PROJCS[\\\"ED_1950_UTM_Zone_31N\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],PROJECTION[\\\"Transverse_Mercator\\\"],PARAMETER[\\\"False_Easting\\\",500000.0],PARAMETER[\\\"False_Northing\\\",0.0],PARAMETER[\\\"Central_Meridian\\\",3.0],PARAMETER[\\\"Scale_Factor\\\",0.9996],PARAMETER[\\\"Latitude_Of_Origin\\\",0.0],UNIT[\\\"Meter\\\",1.0],AUTHORITY[\\\"EPSG\\\",23031]]\"},\"name\":\"ED50 * DMA-mean / UTM zone 31N [23031,1133]\",\"singleCT\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"1133\"},\"name\":\"ED_1950_To_WGS_1984_1\",\"type\":\"ST\",\"ver\":\"PE_10_9_1\",\"wkt\":\"GEOGTRAN[\\\"ED_1950_To_WGS_1984_1\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],GEOGCS[\\\"GCS_WGS_1984\\\",DATUM[\\\"D_WGS_1984\\\",SPHEROID[\\\"WGS_1984\\\",6378137.0,298.257223563]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],METHOD[\\\"Geocentric_Translation\\\"],PARAMETER[\\\"X_Axis_Translation\\\",-87.0],PARAMETER[\\\"Y_Axis_Translation\\\",-98.0],PARAMETER[\\\"Z_Axis_Translation\\\",-121.0],OPERATIONACCURACY[10.0],AUTHORITY[\\\"EPSG\\\",1133]]\"},\"type\":\"EBC\",\"ver\":\"PE_10_9_1\"}",
    "features": [
      {
        "type": "AnyCrsFeature",
        "properties": {},
        "geometry": {
          "type": "AnyCrsPoint",
          "coordinates": [
            622011.96,
            5910706.37
          ]
        }
      }
    ]
  }
}
```

</details>

<details>

<summary markdown="span"><code>/convertGeoJson</code> response</summary>

<OsduImportJSON>[response](../WellboreTrajectory/crs_operations/wrp_23031001_to_23095001_response.json)</OsduImportJSON>

```json
{
  "successCount": 1,
  "totalCount": 1,
  "featureCollection": {
    "features": [
      {
        "geometry": {
          "coordinates": [
            488817.3086979347,
            5909154.619253226
          ],
          "type": "AnyCrsPoint",
          "bbox": null
        },
        "properties": {},
        "type": "AnyCrsFeature",
        "bbox": null
      }
    ],
    "properties": null,
    "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"OSDU\",\"code\":\"23095001\"},\"lateBoundCRS\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"23095\"},\"name\":\"ED_1950_TM_5_NE\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"PROJCS[\\\"ED_1950_TM_5_NE\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],PROJECTION[\\\"Transverse_Mercator\\\"],PARAMETER[\\\"False_Easting\\\",500000.0],PARAMETER[\\\"False_Northing\\\",0.0],PARAMETER[\\\"Central_Meridian\\\",5.0],PARAMETER[\\\"Scale_Factor\\\",0.9996],PARAMETER[\\\"Latitude_Of_Origin\\\",0.0],UNIT[\\\"Meter\\\",1.0],AUTHORITY[\\\"EPSG\\\",23095]]\"},\"name\":\"ED50 * DMA-mean / TM 5 NE [23095,1133]\",\"singleCT\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"1133\"},\"name\":\"ED_1950_To_WGS_1984_1\",\"type\":\"ST\",\"ver\":\"PE_10_9_1\",\"wkt\":\"GEOGTRAN[\\\"ED_1950_To_WGS_1984_1\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],GEOGCS[\\\"GCS_WGS_1984\\\",DATUM[\\\"D_WGS_1984\\\",SPHEROID[\\\"WGS_1984\\\",6378137.0,298.257223563]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],METHOD[\\\"Geocentric_Translation\\\"],PARAMETER[\\\"X_Axis_Translation\\\",-87.0],PARAMETER[\\\"Y_Axis_Translation\\\",-98.0],PARAMETER[\\\"Z_Axis_Translation\\\",-121.0],AUTHORITY[\\\"EPSG\\\",1133]]\"},\"type\":\"EBC\",\"ver\":\"PE_10_9_1\"}",
    "persistableReferenceUnitZ": null,
    "type": "AnyCrsFeatureCollection",
    "bbox": null
  },
  "operationsApplied": [
    "conversion from ED_1950_UTM_Zone_31N to GCS_European_1950; 1 points converted",
    "conversion from GCS_European_1950 to ED_1950_TM_5_NE; 1 points converted"
  ]
}
```

</details>

### Trajectory Computation

Here examples for a trajectory computation (MD, INCL, AZIM) &rarr; Cartesian coordinates:

<details>

<summary markdown="span"><code>/convertTrajectory</code> request</summary>

<OsduImportJSON>[request](../WellboreTrajectory/crs_operations/convert_trajectory_request.json)</OsduImportJSON>

```json
{
  "inputKind": "MD_Incl_Azim",
  "method": "AzimuthalEquidistant",
  "trajectoryCRS": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::23095_EPSG::1133",
  "azimuthReference": "GN",
  "unitXY": "partition-id:reference-data--UnitOfMeasure:m:",
  "unitZ": "partition-id:reference-data--UnitOfMeasure:m:",
  "interpolate": false,
  "referencePoint": {
    "x": 488817.3086979347,
    "y": 5909154.619253226,
    "z": 42.51
  },
  "inputStations": [
    {
      "md": 0,
      "azimuth": 0,
      "inclination": 0
    },
    {
      "md": 22.0,
      "azimuth": 217.49,
      "inclination": 0.11
    },
    {
      "md": 30.0,
      "azimuth": 177.24,
      "inclination": 0.23
    },
    {
      "md": 40.0,
      "azimuth": 134.24,
      "inclination": 0.44
    },
    {
      "md": 50.0,
      "azimuth": 130.78,
      "inclination": 0.43
    },
    {
      "md": 60.0,
      "azimuth": 76.55,
      "inclination": 0.22
    },
    {
      "md": 64.0,
      "azimuth": 72.11,
      "inclination": 0.18
    },
    {
      "md": 70.0,
      "azimuth": 75.84,
      "inclination": 0.29
    },
    {
      "md": 80.0,
      "azimuth": 33.47,
      "inclination": 0.46
    },
    {
      "md": 90.0,
      "azimuth": 23.78,
      "inclination": 0.85
    },
    {
      "md": 100.0,
      "azimuth": 336.37,
      "inclination": 1.36
    },
    {
      "md": 118.0,
      "azimuth": 7.94,
      "inclination": 0.9
    },
    {
      "md": 125.0,
      "azimuth": 1.31,
      "inclination": 0.79
    },
    {
      "md": 150.0,
      "azimuth": 118.84,
      "inclination": 0.43
    },
    {
      "md": 175.0,
      "azimuth": 158.92,
      "inclination": 1.46
    },
    {
      "md": 200.0,
      "azimuth": 157.17,
      "inclination": 1.6
    },
    {
      "md": 225.0,
      "azimuth": 158.26,
      "inclination": 1.53
    },
    {
      "md": 250.0,
      "azimuth": 156.86,
      "inclination": 1.66
    },
    {
      "md": 275.0,
      "azimuth": 151.59,
      "inclination": 1.66
    },
    {
      "md": 300.0,
      "azimuth": 146.4,
      "inclination": 1.67
    },
    {
      "md": 325.0,
      "azimuth": 139.37,
      "inclination": 1.8
    },
    {
      "md": 350.0,
      "azimuth": 134.49,
      "inclination": 1.71
    },
    {
      "md": 375.0,
      "azimuth": 129.57,
      "inclination": 1.6
    },
    {
      "md": 400.0,
      "azimuth": 110.63,
      "inclination": 1.13
    },
    {
      "md": 425.0,
      "azimuth": 100.05,
      "inclination": 1.21
    },
    {
      "md": 450.0,
      "azimuth": 107.08,
      "inclination": 1.1
    },
    {
      "md": 475.0,
      "azimuth": 112.96,
      "inclination": 0.53
    },
    {
      "md": 500.0,
      "azimuth": 82.97,
      "inclination": 0.23
    },
    {
      "md": 525.0,
      "azimuth": 69.5,
      "inclination": 0.23
    },
    {
      "md": 550.0,
      "azimuth": 0.81,
      "inclination": 0.48
    },
    {
      "md": 575.0,
      "azimuth": 34.45,
      "inclination": 0.62
    },
    {
      "md": 600.0,
      "azimuth": 81.89,
      "inclination": 1.2
    },
    {
      "md": 625.0,
      "azimuth": 95.48,
      "inclination": 2.25
    },
    {
      "md": 650.0,
      "azimuth": 104.2,
      "inclination": 3.43
    },
    {
      "md": 675.0,
      "azimuth": 108.71,
      "inclination": 4.45
    },
    {
      "md": 700.0,
      "azimuth": 112.74,
      "inclination": 5.23
    },
    {
      "md": 725.0,
      "azimuth": 116.37,
      "inclination": 6.26
    },
    {
      "md": 750.0,
      "azimuth": 120.79,
      "inclination": 7.59
    },
    {
      "md": 775.0,
      "azimuth": 121.47,
      "inclination": 8.6
    },
    {
      "md": 800.0,
      "azimuth": 122.57,
      "inclination": 9.65
    },
    {
      "md": 825.0,
      "azimuth": 122.57,
      "inclination": 11.28
    },
    {
      "md": 850.0,
      "azimuth": 122.4,
      "inclination": 13.06
    },
    {
      "md": 875.0,
      "azimuth": 122.27,
      "inclination": 14.5
    },
    {
      "md": 900.0,
      "azimuth": 122.33,
      "inclination": 15.51
    },
    {
      "md": 925.0,
      "azimuth": 122.86,
      "inclination": 16.26
    },
    {
      "md": 950.0,
      "azimuth": 123.57,
      "inclination": 17.94
    },
    {
      "md": 975.0,
      "azimuth": 122.97,
      "inclination": 19.67
    },
    {
      "md": 1000.0,
      "azimuth": 123.48,
      "inclination": 21.75
    },
    {
      "md": 1025.0,
      "azimuth": 123.65,
      "inclination": 23.08
    },
    {
      "md": 1050.0,
      "azimuth": 123.46,
      "inclination": 24.51
    },
    {
      "md": 1075.0,
      "azimuth": 123.84,
      "inclination": 25.59
    },
    {
      "md": 1100.0,
      "azimuth": 123.81,
      "inclination": 26.4
    },
    {
      "md": 1125.0,
      "azimuth": 123.32,
      "inclination": 27.8
    },
    {
      "md": 1150.0,
      "azimuth": 122.54,
      "inclination": 29.14
    },
    {
      "md": 1175.0,
      "azimuth": 123.52,
      "inclination": 30.54
    },
    {
      "md": 1200.0,
      "azimuth": 124.07,
      "inclination": 30.65
    },
    {
      "md": 1225.0,
      "azimuth": 124.39,
      "inclination": 30.72
    },
    {
      "md": 1250.0,
      "azimuth": 124.35,
      "inclination": 30.85
    },
    {
      "md": 1275.0,
      "azimuth": 124.66,
      "inclination": 30.88
    },
    {
      "md": 1300.0,
      "azimuth": 124.98,
      "inclination": 30.95
    },
    {
      "md": 1325.0,
      "azimuth": 125.08,
      "inclination": 30.89
    },
    {
      "md": 1350.0,
      "azimuth": 125.24,
      "inclination": 30.82
    },
    {
      "md": 1375.0,
      "azimuth": 125.33,
      "inclination": 30.85
    },
    {
      "md": 1400.0,
      "azimuth": 125.3,
      "inclination": 31.02
    },
    {
      "md": 1425.0,
      "azimuth": 124.9,
      "inclination": 31.3
    },
    {
      "md": 1450.0,
      "azimuth": 125.45,
      "inclination": 31.57
    },
    {
      "md": 1475.0,
      "azimuth": 125.09,
      "inclination": 31.65
    },
    {
      "md": 1500.0,
      "azimuth": 125.78,
      "inclination": 31.66
    },
    {
      "md": 1525.0,
      "azimuth": 125.67,
      "inclination": 31.54
    },
    {
      "md": 1550.0,
      "azimuth": 126.07,
      "inclination": 31.76
    },
    {
      "md": 1575.0,
      "azimuth": 126.43,
      "inclination": 31.82
    },
    {
      "md": 1600.0,
      "azimuth": 126.35,
      "inclination": 31.79
    },
    {
      "md": 1625.0,
      "azimuth": 126.43,
      "inclination": 31.86
    },
    {
      "md": 1650.0,
      "azimuth": 125.51,
      "inclination": 32.85
    },
    {
      "md": 1675.0,
      "azimuth": 123.2,
      "inclination": 33.38
    },
    {
      "md": 1700.0,
      "azimuth": 124.04,
      "inclination": 31.92
    },
    {
      "md": 1725.0,
      "azimuth": 124.73,
      "inclination": 30.78
    },
    {
      "md": 1750.0,
      "azimuth": 124.77,
      "inclination": 31.23
    },
    {
      "md": 1775.0,
      "azimuth": 124.82,
      "inclination": 31.47
    },
    {
      "md": 1800.0,
      "azimuth": 125.13,
      "inclination": 31.67
    },
    {
      "md": 1825.0,
      "azimuth": 125.02,
      "inclination": 31.97
    },
    {
      "md": 1850.0,
      "azimuth": 125.23,
      "inclination": 32.36
    },
    {
      "md": 1875.0,
      "azimuth": 125.18,
      "inclination": 32.62
    },
    {
      "md": 1900.0,
      "azimuth": 125.18,
      "inclination": 32.77
    },
    {
      "md": 1925.0,
      "azimuth": 125.21,
      "inclination": 32.74
    },
    {
      "md": 1950.0,
      "azimuth": 125.69,
      "inclination": 32.83
    },
    {
      "md": 1975.0,
      "azimuth": 125.59,
      "inclination": 32.78
    },
    {
      "md": 2000.0,
      "azimuth": 125.5,
      "inclination": 32.78
    },
    {
      "md": 2025.0,
      "azimuth": 125.68,
      "inclination": 32.78
    },
    {
      "md": 2050.0,
      "azimuth": 125.56,
      "inclination": 32.72
    },
    {
      "md": 2075.0,
      "azimuth": 125.04,
      "inclination": 32.76
    },
    {
      "md": 2100.0,
      "azimuth": 125.76,
      "inclination": 32.92
    },
    {
      "md": 2125.0,
      "azimuth": 125.9,
      "inclination": 33.1
    },
    {
      "md": 2150.0,
      "azimuth": 126.0,
      "inclination": 33.36
    },
    {
      "md": 2175.0,
      "azimuth": 126.37,
      "inclination": 33.52
    },
    {
      "md": 2200.0,
      "azimuth": 126.62,
      "inclination": 32.82
    },
    {
      "md": 2225.0,
      "azimuth": 126.86,
      "inclination": 32.46
    },
    {
      "md": 2250.0,
      "azimuth": 126.91,
      "inclination": 31.27
    },
    {
      "md": 2275.0,
      "azimuth": 127.08,
      "inclination": 30.43
    },
    {
      "md": 2300.0,
      "azimuth": 127.78,
      "inclination": 29.8
    },
    {
      "md": 2329.0,
      "azimuth": 128.98,
      "inclination": 29.2
    },
    {
      "md": 2357.0,
      "azimuth": 128.5,
      "inclination": 28.9
    },
    {
      "md": 2385.0,
      "azimuth": 129.2,
      "inclination": 28.1
    },
    {
      "md": 2413.0,
      "azimuth": 128.9,
      "inclination": 27.1
    },
    {
      "md": 2441.0,
      "azimuth": 127.9,
      "inclination": 26.1
    },
    {
      "md": 2469.0,
      "azimuth": 128.5,
      "inclination": 25.2
    },
    {
      "md": 2497.0,
      "azimuth": 129.5,
      "inclination": 24.4
    },
    {
      "md": 2525.0,
      "azimuth": 128.0,
      "inclination": 24.3
    },
    {
      "md": 2554.0,
      "azimuth": 126.5,
      "inclination": 23.9
    },
    {
      "md": 2582.0,
      "azimuth": 126.6,
      "inclination": 23.5
    },
    {
      "md": 2607.0,
      "azimuth": 125.7,
      "inclination": 24.2
    },
    {
      "md": 2638.0,
      "azimuth": 126.48,
      "inclination": 23.9
    },
    {
      "md": 2667.0,
      "azimuth": 125.78,
      "inclination": 24.7
    },
    {
      "md": 2694.0,
      "azimuth": 124.48,
      "inclination": 26.4
    },
    {
      "md": 2722.0,
      "azimuth": 124.98,
      "inclination": 27.0
    },
    {
      "md": 2769.0,
      "azimuth": 127.78,
      "inclination": 27.3
    },
    {
      "md": 2790.0,
      "azimuth": 127.78,
      "inclination": 27.3
    }
  ]
}
```
</details>

<details>

<summary markdown="span"><code>/convertTrajectory</code> response</summary>

<OsduImportJSON>[request](../WellboreTrajectory/crs_operations/convert_trajectory_response.json)</OsduImportJSON>

```json
{
  "trajectoryCRS": "{\"authCode\":{\"auth\":\"OSDU\",\"code\":\"23095001\"},\"lateBoundCRS\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"23095\"},\"name\":\"ED_1950_TM_5_NE\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"PROJCS[\\\"ED_1950_TM_5_NE\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],PROJECTION[\\\"Transverse_Mercator\\\"],PARAMETER[\\\"False_Easting\\\",500000.0],PARAMETER[\\\"False_Northing\\\",0.0],PARAMETER[\\\"Central_Meridian\\\",5.0],PARAMETER[\\\"Scale_Factor\\\",0.9996],PARAMETER[\\\"Latitude_Of_Origin\\\",0.0],UNIT[\\\"Meter\\\",1.0],AUTHORITY[\\\"EPSG\\\",23095]]\"},\"name\":\"ED50 * DMA-mean / TM 5 NE [23095,1133]\",\"singleCT\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"1133\"},\"name\":\"ED_1950_To_WGS_1984_1\",\"type\":\"ST\",\"ver\":\"PE_10_9_1\",\"wkt\":\"GEOGTRAN[\\\"ED_1950_To_WGS_1984_1\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],GEOGCS[\\\"GCS_WGS_1984\\\",DATUM[\\\"D_WGS_1984\\\",SPHEROID[\\\"WGS_1984\\\",6378137.0,298.257223563]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],METHOD[\\\"Geocentric_Translation\\\"],PARAMETER[\\\"X_Axis_Translation\\\",-87.0],PARAMETER[\\\"Y_Axis_Translation\\\",-98.0],PARAMETER[\\\"Z_Axis_Translation\\\",-121.0],AUTHORITY[\\\"EPSG\\\",1133]]\"},\"type\":\"EBC\",\"ver\":\"PE_10_9_1\"}",
  "unitXY": "{\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"scaleOffset\":{\"offset\":0.0,\"scale\":1.0},\"symbol\":\"m\",\"type\":\"USO\"}",
  "unitZ": "{\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"scaleOffset\":{\"offset\":0.0,\"scale\":1.0},\"symbol\":\"m\",\"type\":\"USO\"}",
  "unitDls": "{\"scaleOffset\":{\"scale\":5.81776417331443E-4,\"offset\":0.0},\"symbol\":\"deg/30m\",\"baseMeasurement\":{\"ancestry\":\"Rotation_Per_Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
  "stations": [
    {
      "md": 0,
      "inclination": 0,
      "azimuthTN": 359.8653225783487,
      "azimuthGN": 0,
      "dxTN": 0,
      "dyTN": 0,
      "point": {
        "x": 488817.3086979347,
        "y": 5909154.619253226,
        "z": 42.51
      },
      "wgs84Longitude": 4.830736733586863,
      "wgs84Latitude": 53.329560385688644,
      "dls": 0,
      "original": true,
      "dz": 0
    },
    {
      "md": 22,
      "inclination": 0.11,
      "azimuthTN": 217.3553225783487,
      "azimuthGN": -142.51,
      "dxTN": -0.012813767049289885,
      "dyTN": -0.01678682412903604,
      "point": {
        "x": 488817.2958498661,
        "y": 5909154.602503244,
        "z": 20.510013514857032
      },
      "wgs84Longitude": 4.830736536599873,
      "wgs84Latitude": 53.32956023225672,
      "dls": 0.15000000000000002,
      "original": true,
      "dz": 21.999986485142966
    },
    {
      "md": 30,
      "inclination": 0.23,
      "azimuthTN": 177.1053225783487,
      "azimuthGN": -182.76,
      "dxTN": -0.016662439450792793,
      "dyTN": -0.038927634891448654,
      "point": {
        "x": 488817.29195071536,
        "y": 5909154.58038036,
        "z": 12.51004775781001
      },
      "wgs84Longitude": 4.8307364771435495,
      "wgs84Latitude": 53.32956003237088,
      "dls": 0.6090767719715209,
      "original": true,
      "dz": 29.999952242189988
    },
    {
      "md": 40,
      "inclination": 0.44,
      "azimuthTN": 134.1053225783487,
      "azimuthGN": -225.76,
      "dxTN": 0.011922549433855276,
      "dyTN": -0.08569680635057432,
      "point": {
        "x": 488817.32041434513,
        "y": 5909154.533562788,
        "z": 2.510210480617438
      },
      "wgs84Longitude": 4.830736904077099,
      "wgs84Latitude": 53.329559610961915,
      "dls": 0.9414147566213655,
      "original": true,
      "dz": 39.99978951938256
    },
    {
      "md": 50,
      "inclination": 0.43,
      "azimuthTN": 130.64532257834867,
      "azimuthGN": -229.22,
      "dxTN": 0.06796561046299338,
      "dyTN": -0.13686256809907416,
      "point": {
        "x": 488817.37631469977,
        "y": 5909154.482285877,
        "z": -7.489501477003529
      },
      "wgs84Longitude": 4.830737743138736,
      "wgs84Latitude": 53.329559150053065,
      "dls": 0.0843071368884325,
      "original": true,
      "dz": 49.99950147700353
    },
    {
      "md": 60,
      "inclination": 0.22,
      "azimuthTN": 76.41532257834865,
      "azimuthGN": -283.45000000000005,
      "dxTN": 0.11509897263986757,
      "dyTN": -0.1567955560873287,
      "point": {
        "x": 488817.4233823157,
        "y": 5909154.4622501405,
        "z": -17.489354957759232
      },
      "wgs84Longitude": 4.830738448462969,
      "wgs84Latitude": 53.32955896977789,
      "dls": 1.0508815133812122,
      "original": true,
      "dz": 59.99935495775923
    },
    {
      "md": 64,
      "inclination": 0.18,
      "azimuthTN": 71.9753225783486,
      "azimuthGN": -287.8900000000001,
      "dxTN": 0.12853837991305864,
      "dyTN": -0.1530476133465532,
      "point": {
        "x": 488817.436825137,
        "y": 5909154.465965002,
        "z": -21.489330531293483
      },
      "wgs84Longitude": 4.830738649329827,
      "wgs84Latitude": 53.329559002984574,
      "dls": 0.3215114730832547,
      "original": true,
      "dz": 63.99933053129348
    },
    {
      "md": 70,
      "inclination": 0.29,
      "azimuthTN": 75.70532257834861,
      "azimuthGN": -284.1600000000001,
      "dxTN": 0.1522147874404637,
      "dyTN": -0.14638219902740088,
      "point": {
        "x": 488817.4605077061,
        "y": 5909154.472572111,
        "z": -27.489279176096126
      },
      "wgs84Longitude": 4.83073900342203,
      "wgs84Latitude": 53.32955906217138,
      "dls": 0.5550033814741585,
      "original": true,
      "dz": 69.99927917609612
    },
    {
      "md": 80,
      "inclination": 0.46,
      "azimuthTN": 33.33532257834861,
      "azimuthGN": -326.5300000000001,
      "dxTN": 0.1987981582410541,
      "dyTN": -0.10659602842555398,
      "point": {
        "x": 488817.50716586906,
        "y": 5909154.512232865,
        "z": -37.48907901380421
      },
      "wgs84Longitude": 4.830739700474289,
      "wgs84Latitude": 53.32955941848945,
      "dls": 0.9419480433328632,
      "original": true,
      "dz": 79.9990790138042
    },
    {
      "md": 90,
      "inclination": 0.85,
      "azimuthTN": 23.64532257834867,
      "azimuthGN": -336.22,
      "dxTN": 0.25060715949432877,
      "dyTN": -0.005111534373872392,
      "point": {
        "x": 488817.55919253366,
        "y": 5909154.613554908,
        "z": -47.48840910649154
      },
      "wgs84Longitude": 4.830740475942252,
      "wgs84Latitude": 53.329560329185156,
      "dls": 1.2121502242242417,
      "original": true,
      "dz": 89.99840910649154
    },
    {
      "md": 100,
      "inclination": 1.36,
      "azimuthTN": 336.2353225783486,
      "azimuthGN": -23.63000000000011,
      "dxTN": 0.23253357742201208,
      "dyTN": 0.1714484555852403,
      "point": {
        "x": 488817.5415410531,
        "y": 5909154.790086525,
        "z": -57.48670609714733
      },
      "wgs84Longitude": 4.830740202499446,
      "wgs84Latitude": 53.32956191444347,
      "dls": 3.0110590165641256,
      "original": true,
      "dz": 99.99670609714732
    },
    {
      "md": 118,
      "inclination": 0.9,
      "azimuthTN": 7.805322578348637,
      "azimuthGN": -352.06000000000006,
      "dxTN": 0.16565106724072085,
      "dyTN": 0.5070055072180499,
      "point": {
        "x": 488817.4754738115,
        "y": 5909155.125666089,
        "z": -75.48332267965608
      },
      "wgs84Longitude": 4.83073919472641,
      "wgs84Latitude": 53.32956492738295,
      "dls": 1.2625584990733676,
      "original": true,
      "dz": 117.99332267965607
    },
    {
      "md": 125,
      "inclination": 0.79,
      "azimuthTN": 1.1753225783486414,
      "azimuthGN": -358.69000000000005,
      "dxTN": 0.1741070129278754,
      "dyTN": 0.6097185097242779,
      "point": {
        "x": 488817.4841677015,
        "y": 5909155.228318013,
        "z": -82.48256204244657
      },
      "wgs84Longitude": 4.830739320130667,
      "wgs84Latitude": 53.329565849463705,
      "dls": 0.6300002044694281,
      "original": true,
      "dz": 124.99256204244658
    },
    {
      "md": 150,
      "inclination": 0.43,
      "azimuthTN": 118.70532257834863,
      "azimuthGN": -241.16000000000005,
      "dxTN": 0.25992597713401144,
      "dyTN": 0.7369739981944472,
      "point": {
        "x": 488817.5702512356,
        "y": 5909155.355320801,
        "z": -107.48173451101187
      },
      "wgs84Longitude": 4.830740602876286,
      "wgs84Latitude": 53.32956698995513,
      "dls": 1.2716706873533516,
      "original": true,
      "dz": 149.99173451101186
    },
    {
      "md": 175,
      "inclination": 1.46,
      "azimuthTN": 158.78532257834866,
      "azimuthGN": -201.08000000000004,
      "dxTN": 0.45746335962268736,
      "dyTN": 0.3950000063822214,
      "point": {
        "x": 488817.76690584986,
        "y": 5909155.013019879,
        "z": -132.47818472253687
      },
      "wgs84Longitude": 4.8307435625726685,
      "wgs84Latitude": 53.329563914307556,
      "dls": 1.3972483022964368,
      "original": true,
      "dz": 174.98818472253686
    },
    {
      "md": 200,
      "inclination": 1.6,
      "azimuthTN": 157.03532257834866,
      "azimuthGN": -202.83000000000004,
      "dxTN": 0.7088877664736675,
      "dyTN": -0.22326393744186107,
      "point": {
        "x": 488818.0167766896,
        "y": 5909154.394413247,
        "z": -157.46926693071967
      },
      "wgs84Longitude": 4.83074733115511,
      "wgs84Latitude": 53.32955835612705,
      "dls": 0.17709067609393098,
      "original": true,
      "dz": 199.97926693071966
    },
    {
      "md": 225,
      "inclination": 1.53,
      "azimuthTN": 158.1253225783487,
      "azimuthGN": -201.74,
      "dxTN": 0.969412377172689,
      "dyTN": -0.8543476519880024,
      "point": {
        "x": 488818.27571396035,
        "y": 5909153.762970604,
        "z": -182.45994056067852
      },
      "wgs84Longitude": 4.830751236328026,
      "wgs84Latitude": 53.32955268275875,
      "dls": 0.09127673113597393,
      "original": true,
      "dz": 224.9699405606785
    },
    {
      "md": 250,
      "inclination": 1.66,
      "azimuthTN": 156.7253225783486,
      "azimuthGN": -203.1400000000001,
      "dxTN": 1.2368440641851444,
      "dyTN": -1.4967099519161828,
      "point": {
        "x": 488818.5415290358,
        "y": 5909153.120237673,
        "z": -207.450249858301
      },
      "wgs84Longitude": 4.83075524517356,
      "wgs84Latitude": 53.32954690805025,
      "dls": 0.1628463295699516,
      "original": true,
      "dz": 249.96024985830098
    },
    {
      "md": 275,
      "inclination": 1.66,
      "azimuthTN": 151.4553225783486,
      "azimuthGN": -208.41000000000005,
      "dxTN": 1.5529560536644256,
      "dyTN": -2.1474371576821443,
      "point": {
        "x": 488818.8559852274,
        "y": 5909152.469028812,
        "z": -232.43977281914778
      },
      "wgs84Longitude": 4.830759984678115,
      "wgs84Latitude": 53.32954105818881,
      "dls": 0.18313172402367917,
      "original": true,
      "dz": 274.94977281914777
    },
    {
      "md": 300,
      "inclination": 1.67,
      "azimuthTN": 146.26532257834867,
      "azimuthGN": -213.60000000000002,
      "dxTN": 1.9282913978093477,
      "dyTN": -2.7684736653285693,
      "point": {
        "x": 488819.2297107739,
        "y": 5909151.847359584,
        "z": -257.42923209527504
      },
      "wgs84Longitude": 4.830765613074498,
      "wgs84Latitude": 53.32953547511628,
      "dls": 0.1812934980783043,
      "original": true,
      "dz": 299.93923209527503
    },
    {
      "md": 325,
      "inclination": 1.8,
      "azimuthTN": 139.2353225783486,
      "azimuthGN": -220.63000000000008,
      "dxTN": 2.3869696911276357,
      "dyTN": -3.3688018530443964,
      "point": {
        "x": 488819.68679448694,
        "y": 5909151.246194543,
        "z": -282.4177941849552
      },
      "wgs84Longitude": 4.830772492383458,
      "wgs84Latitude": 53.32953007812749,
      "dls": 0.2989981078791657,
      "original": true,
      "dz": 324.9277941849552
    },
    {
      "md": 350,
      "inclination": 1.71,
      "azimuthTN": 134.35532257834873,
      "azimuthGN": -225.50999999999996,
      "dxTN": 2.910050256641102,
      "dyTN": -3.926955413788191,
      "point": {
        "x": 488820.2083537266,
        "y": 5909150.687035887,
        "z": -307.40607881762674
      },
      "wgs84Longitude": 4.830780338312215,
      "wgs84Latitude": 53.329525060099755,
      "dls": 0.20925543914765632,
      "original": true,
      "dz": 349.9160788176267
    },
    {
      "md": 375,
      "inclination": 1.6,
      "azimuthTN": 129.43532257834863,
      "azimuthGN": -230.43000000000006,
      "dxTN": 3.446321897799706,
      "dyTN": -4.409428641082384,
      "point": {
        "x": 488820.74327656976,
        "y": 5909150.203496204,
        "z": -332.3956590571553
      },
      "wgs84Longitude": 4.830788382206901,
      "wgs84Latitude": 53.329520722082464,
      "dls": 0.21552091858459027,
      "original": true,
      "dz": 374.9056590571553
    },
    {
      "md": 400,
      "inclination": 1.13,
      "azimuthTN": 110.49532257834858,
      "azimuthGN": -249.37000000000012,
      "dxTN": 3.9467981821728206,
      "dyTN": -4.717443469371745,
      "point": {
        "x": 488821.2428283299,
        "y": 5909149.894429027,
        "z": -357.38861886989844
      },
      "wgs84Longitude": 4.830795888788457,
      "wgs84Latitude": 53.32951795161594,
      "dls": 0.7745708796194537,
      "original": true,
      "dz": 399.8986188698984
    },
    {
      "md": 425,
      "inclination": 1.21,
      "azimuthTN": 99.91532257834865,
      "azimuthGN": -259.95000000000005,
      "dxTN": 4.437725330561079,
      "dyTN": -4.849207228398737,
      "point": {
        "x": 488821.7332489092,
        "y": 5909149.761564642,
        "z": -382.3834341288645
      },
      "wgs84Longitude": 4.830803251995034,
      "wgs84Latitude": 53.32951676481241,
      "dls": 0.27595608449083897,
      "original": true,
      "dz": 424.8934341288645
    },
    {
      "md": 450,
      "inclination": 1.1,
      "azimuthTN": 106.94532257834864,
      "azimuthGN": -252.92000000000004,
      "dxTN": 4.927293865248749,
      "dyTN": -4.964600346145088,
      "point": {
        "x": 488822.22234988475,
        "y": 5909149.645067521,
        "z": -407.3783635675051
      },
      "wgs84Longitude": 4.830810594804891,
      "wgs84Latitude": 53.32951572510294,
      "dls": 0.21503007596802978,
      "original": true,
      "dz": 449.8883635675051
    },
    {
      "md": 475,
      "inclination": 0.53,
      "azimuthTN": 112.82532257834862,
      "azimuthGN": -247.04000000000005,
      "dxTN": 5.2634180242195905,
      "dyTN": -5.079396288217952,
      "point": {
        "x": 488822.5580694538,
        "y": 5909149.529527872,
        "z": -432.3757352380658
      },
      "wgs84Longitude": 4.830815634521253,
      "wgs84Latitude": 53.329514690733866,
      "dls": 0.6904270532700837,
      "original": true,
      "dz": 474.88573523806576
    },
    {
      "md": 500,
      "inclination": 0.23,
      "azimuthTN": 82.83532257834861,
      "azimuthGN": -277.0300000000001,
      "dxTN": 5.419776707685048,
      "dyTN": -5.117992261788021,
      "point": {
        "x": 488822.71427471575,
        "y": 5909149.49058,
        "z": -457.3751775628467
      },
      "wgs84Longitude": 4.830817976062889,
      "wgs84Latitude": 53.329514341013606,
      "dls": 0.42024225681356925,
      "original": true,
      "dz": 499.8851775628467
    },
    {
      "md": 525,
      "inclination": 0.23,
      "azimuthTN": 69.3653225783487,
      "azimuthGN": -290.5,
      "dxTN": 5.516521972121969,
      "dyTN": -5.0940508073839625,
      "point": {
        "x": 488822.81103741657,
        "y": 5909149.514284534,
        "z": -482.3749779817856
      },
      "wgs84Longitude": 4.83081942283206,
      "wgs84Latitude": 53.329514553199985,
      "dls": 0.06473695813906062,
      "original": true,
      "dz": 524.8849779817856
    },
    {
      "md": 550,
      "inclination": 0.48,
      "azimuthTN": 0.6753225783486414,
      "azimuthGN": -359.19000000000005,
      "dxTN": 5.564715445200484,
      "dyTN": -4.971655756903586,
      "point": {
        "x": 488822.8594991355,
        "y": 5909149.63651724,
        "z": -507.3745674833373
      },
      "wgs84Longitude": 4.830820140846606,
      "wgs84Latitude": 53.32951565001171,
      "dls": 0.5407423576441363,
      "original": true,
      "dz": 549.8845674833373
    },
    {
      "md": 575,
      "inclination": 0.62,
      "azimuthTN": 34.31532257834863,
      "azimuthGN": -325.55000000000007,
      "dxTN": 5.642202552308278,
      "dyTN": -4.755225866527437,
      "point": {
        "x": 488822.93746368145,
        "y": 5909149.852678227,
        "z": -532.3734726900648
      },
      "wgs84Longitude": 4.830821298513092,
      "wgs84Latitude": 53.32951759175756,
      "dls": 0.4144303645367407,
      "original": true,
      "dz": 574.8834726900648
    },
    {
      "md": 600,
      "inclination": 1.2,
      "azimuthTN": 81.75532257834857,
      "azimuthGN": -278.1100000000001,
      "dxTN": 5.977536814787754,
      "dyTN": -4.6059653213174965,
      "point": {
        "x": 488823.2730141045,
        "y": 5909150.001090975,
        "z": -557.3705184207734
      },
      "wgs84Longitude": 4.830826326303244,
      "wgs84Latitude": 53.32951893000933,
      "dls": 1.0852824025871561,
      "original": true,
      "dz": 599.8805184207733
    },
    {
      "md": 625,
      "inclination": 2.25,
      "azimuthTN": 95.34532257834871,
      "azimuthGN": -264.52,
      "dxTN": 6.725248876002627,
      "dyTN": -4.614143288755883,
      "point": {
        "x": 488824.02040694706,
        "y": 5909149.991159446,
        "z": -582.3589351434047
      },
      "wgs84Longitude": 4.830837543639259,
      "wgs84Latitude": 53.32951885369801,
      "dls": 1.3435971868621488,
      "original": true,
      "dz": 624.8689351434047
    },
    {
      "md": 650,
      "inclination": 3.43,
      "azimuthTN": 104.06532257834863,
      "azimuthGN": -255.80000000000007,
      "dxTN": 7.939352437458913,
      "dyTN": -4.84162116506491,
      "point": {
        "x": 488825.2334888875,
        "y": 5909149.760920153,
        "z": -607.327901626721
      },
      "wgs84Longitude": 4.830855761246179,
      "wgs84Latitude": 53.32951680698955,
      "dls": 1.5039183023615539,
      "original": true,
      "dz": 649.837901626721
    },
    {
      "md": 675,
      "inclination": 4.45,
      "azimuthTN": 108.57532257834862,
      "azimuthGN": -251.2900000000001,
      "dxTN": 9.584180654706843,
      "dyTN": -5.332338037700518,
      "point": {
        "x": 488826.87650415115,
        "y": 5909149.266535443,
        "z": -632.2685458345687
      },
      "wgs84Longitude": 4.830880443799267,
      "wgs84Latitude": 53.32951239507138,
      "dls": 1.2783108703846355,
      "original": true,
      "dz": 674.7785458345687
    },
    {
      "md": 700,
      "inclination": 5.23,
      "azimuthTN": 112.6053225783487,
      "azimuthGN": -247.26,
      "dxTN": 11.555444373182953,
      "dyTN": -6.079276328026133,
      "point": {
        "x": 488828.84522191563,
        "y": 5909148.5152651165,
        "z": -657.1792810378379
      },
      "wgs84Longitude": 4.8309100259843145,
      "wgs84Latitude": 53.329505680979025,
      "dls": 1.0205089720735308,
      "original": true,
      "dz": 699.6892810378379
    },
    {
      "md": 725,
      "inclination": 6.260000000000001,
      "azimuthTN": 116.2353225783486,
      "azimuthGN": -243.63000000000005,
      "dxTN": 13.829997513035186,
      "dyTN": -7.1198096330204255,
      "point": {
        "x": 488831.11641757376,
        "y": 5909147.469804962,
        "z": -682.0534602129636
      },
      "wgs84Longitude": 4.83094416039839,
      "wgs84Latitude": 53.32949632889407,
      "dls": 1.3100543761360113,
      "original": true,
      "dz": 724.5634602129636
    },
    {
      "md": 750,
      "inclination": 7.59,
      "azimuthTN": 120.65532257834866,
      "azimuthGN": -239.21000000000004,
      "dxTN": 16.473040513300734,
      "dyTN": -8.564233883587383,
      "point": {
        "x": 488833.75500624994,
        "y": 5909146.019750103,
        "z": -706.8707009173283
      },
      "wgs84Longitude": 4.830983825674364,
      "wgs84Latitude": 53.32948334778427,
      "dls": 1.7182052484240917,
      "original": true,
      "dz": 749.3807009173283
    },
    {
      "md": 775,
      "inclination": 8.6,
      "azimuthTN": 121.33532257834861,
      "azimuthGN": -238.5300000000001,
      "dxTN": 19.489977176510692,
      "dyTN": -10.37816731197363,
      "point": {
        "x": 488836.76647036226,
        "y": 5909144.199455818,
        "z": -731.6212849420957
      },
      "wgs84Longitude": 4.831029102898673,
      "wgs84Latitude": 53.32946704657574,
      "dls": 1.21741362792733,
      "original": true,
      "dz": 774.1312849420957
    },
    {
      "md": 800,
      "inclination": 9.65,
      "azimuthTN": 122.43532257834865,
      "azimuthGN": -237.43000000000004,
      "dxTN": 22.855104314694927,
      "dyTN": -12.474135592312402,
      "point": {
        "x": 488840.12532256707,
        "y": 5909142.096421732,
        "z": -756.3045761244963
      },
      "wgs84Longitude": 4.831079606249666,
      "wgs84Latitude": 53.3294482112402,
      "dls": 1.2772145356051574,
      "original": true,
      "dz": 798.8145761244963
    },
    {
      "md": 825,
      "inclination": 11.28,
      "azimuthTN": 122.43532257834865,
      "azimuthGN": -237.43000000000004,
      "dxTN": 26.687458853565232,
      "dyTN": -14.909537192720833,
      "point": {
        "x": 488843.9504171633,
        "y": 5909139.652992711,
        "z": -780.8878982321428
      },
      "wgs84Longitude": 4.831137122386987,
      "wgs84Latitude": 53.32942632604782,
      "dls": 1.9559999999999986,
      "original": true,
      "dz": 823.3978982321428
    },
    {
      "md": 850,
      "inclination": 13.06,
      "azimuthTN": 122.26532257834869,
      "azimuthGN": -237.59999999999997,
      "dxTN": 31.13990566686678,
      "dyTN": -17.729067006333043,
      "point": {
        "x": 488848.394452673,
        "y": 5909136.824132629,
        "z": -805.3250765089612
      },
      "wgs84Longitude": 4.831203945694141,
      "wgs84Latitude": 53.32940098941493,
      "dls": 2.136430611375286,
      "original": true,
      "dz": 847.8350765089612
    },
    {
      "md": 875,
      "inclination": 14.500000000000002,
      "azimuthTN": 122.13532257834869,
      "azimuthGN": -237.73000000000002,
      "dxTN": 36.17889948467265,
      "dyTN": -20.90192131462617,
      "point": {
        "x": 488853.4239696616,
        "y": 5909133.640711661,
        "z": -829.6048751836328
      },
      "wgs84Longitude": 4.83127957264624,
      "wgs84Latitude": 53.32937247810366,
      "dls": 1.7283984041478289,
      "original": true,
      "dz": 872.1148751836328
    },
    {
      "md": 900,
      "inclination": 15.51,
      "azimuthTN": 122.19532257834864,
      "azimuthGN": -237.67000000000002,
      "dxTN": 41.65791086620138,
      "dyTN": -24.34774120055786,
      "point": {
        "x": 488858.89268629253,
        "y": 5909130.183400777,
        "z": -853.7521435912861
      },
      "wgs84Longitude": 4.831361803896064,
      "wgs84Latitude": 53.32934151412834,
      "dls": 1.212143186104665,
      "original": true,
      "dz": 896.2621435912861
    },
    {
      "md": 925,
      "inclination": 16.26,
      "azimuthTN": 122.72532257834861,
      "azimuthGN": -237.1400000000001,
      "dxTN": 47.431027499008934,
      "dyTN": -28.020866793449485,
      "point": {
        "x": 488864.65485608176,
        "y": 5909126.498184365,
        "z": -877.7973097323638
      },
      "wgs84Longitude": 4.831448449371628,
      "wgs84Latitude": 53.32930850772659,
      "dls": 0.9166714031244296,
      "original": true,
      "dz": 920.3073097323638
    },
    {
      "md": 950,
      "inclination": 17.94,
      "azimuthTN": 123.43532257834863,
      "azimuthGN": -236.43000000000006,
      "dxTN": 53.588966104929014,
      "dyTN": -32.03475405294316,
      "point": {
        "x": 488870.8008927727,
        "y": 5909122.47143884,
        "z": -901.6913055032131
      },
      "wgs84Longitude": 4.8315408706605245,
      "wgs84Latitude": 53.32927243946723,
      "dls": 2.03146983187772,
      "original": true,
      "dz": 944.2013055032131
    },
    {
      "md": 975,
      "inclination": 19.67,
      "azimuthTN": 122.83532257834862,
      "azimuthGN": -237.03000000000006,
      "dxTN": 60.33786206413143,
      "dyTN": -36.43800106874678,
      "point": {
        "x": 488877.53673484764,
        "y": 5909118.054101278,
        "z": -925.3559572952348
      },
      "wgs84Longitude": 4.831642161676562,
      "wgs84Latitude": 53.32923287269027,
      "dls": 2.0889068220916895,
      "original": true,
      "dz": 967.8659572952348
    },
    {
      "md": 1000,
      "inclination": 21.75,
      "azimuthTN": 123.34532257834871,
      "azimuthGN": -236.51999999999995,
      "dxTN": 67.74340348336386,
      "dyTN": -41.26608554897293,
      "point": {
        "x": 488884.92796069535,
        "y": 5909113.2105538715,
        "z": -948.7392505687949
      },
      "wgs84Longitude": 4.83175330830873,
      "wgs84Latitude": 53.32918948860485,
      "dls": 2.505342899155137,
      "original": true,
      "dz": 991.2492505687949
    },
    {
      "md": 1025,
      "inclination": 23.08,
      "azimuthTN": 123.51532257834869,
      "azimuthGN": -236.35,
      "dxTN": 75.69866565610768,
      "dyTN": -46.51813405871041,
      "point": {
        "x": 488892.86769056274,
        "y": 5909107.941920933,
        "z": -971.8498901021973
      },
      "wgs84Longitude": 4.831872705644535,
      "wgs84Latitude": 53.32914229502738,
      "dls": 1.5978929452541843,
      "original": true,
      "dz": 1014.3598901021973
    },
    {
      "md": 1050,
      "inclination": 24.51,
      "azimuthTN": 123.32532257834862,
      "azimuthGN": -236.54000000000005,
      "dxTN": 84.11753425822505,
      "dyTN": -52.07307346125577,
      "point": {
        "x": 488901.270129152,
        "y": 5909102.3694293685,
        "z": -994.7241718149826
      },
      "wgs84Longitude": 4.831999061111887,
      "wgs84Latitude": 53.329092379803875,
      "dls": 1.7184618002615073,
      "original": true,
      "dz": 1037.2341718149826
    },
    {
      "md": 1075,
      "inclination": 25.590000000000003,
      "azimuthTN": 123.70532257834861,
      "azimuthGN": -236.16000000000008,
      "dxTN": 92.94227641102887,
      "dyTN": -57.91828638517499,
      "point": {
        "x": 488910.07759639394,
        "y": 5909096.505827135,
        "z": -1017.3723173460507
      },
      "wgs84Longitude": 4.832131508139849,
      "wgs84Latitude": 53.32903985628186,
      "dls": 1.3102966799269453,
      "original": true,
      "dz": 1059.8823173460507
    },
    {
      "md": 1100,
      "inclination": 26.4,
      "azimuthTN": 123.67532257834864,
      "azimuthGN": -236.19000000000003,
      "dxTN": 102.05923569760216,
      "dyTN": -63.99626788709703,
      "point": {
        "x": 488919.17661658954,
        "y": 5909090.408863156,
        "z": -1039.8429377693474
      },
      "wgs84Longitude": 4.832268340791617,
      "wgs84Latitude": 53.32898524113584,
      "dls": 0.9721280295213691,
      "original": true,
      "dz": 1082.3529377693474
    },
    {
      "md": 1125,
      "inclination": 27.8,
      "azimuthTN": 123.18532257834863,
      "azimuthGN": -236.68000000000004,
      "dxTN": 111.56401305915385,
      "dyTN": -70.26934039517447,
      "point": {
        "x": 488928.6628408458,
        "y": 5909084.115975263,
        "z": -1062.0977323738218
      },
      "wgs84Longitude": 4.832410993924354,
      "wgs84Latitude": 53.328928872894934,
      "dls": 1.70120674268782,
      "original": true,
      "dz": 1104.6077323738218
    },
    {
      "md": 1150,
      "inclination": 29.14,
      "azimuthTN": 122.40532257834867,
      "azimuthGN": -237.45999999999998,
      "dxTN": 121.5824842704453,
      "dyTN": -76.72256602914467,
      "point": {
        "x": 488938.6621295248,
        "y": 5909077.641799587,
        "z": -1084.0739794081987
      },
      "wgs84Longitude": 4.832561356790903,
      "wgs84Latitude": 53.328870885759265,
      "dls": 1.668725664499092,
      "original": true,
      "dz": 1126.5839794081987
    },
    {
      "md": 1175,
      "inclination": 30.540000000000003,
      "azimuthTN": 123.38532257834869,
      "azimuthGN": -236.48,
      "dxTN": 132.02567052898027,
      "dyTN": -83.48005540391166,
      "point": {
        "x": 488949.08524791396,
        "y": 5909070.862484383,
        "z": -1105.75902798988
      },
      "wgs84Longitude": 4.832718093841765,
      "wgs84Latitude": 53.328810164539355,
      "dls": 1.7789396225802485,
      "original": true,
      "dz": 1148.26902798988
    },
    {
      "md": 1200,
      "inclination": 30.650000000000002,
      "azimuthTN": 123.93532257834863,
      "azimuthGN": -235.93000000000004,
      "dxTN": 142.61631477998802,
      "dyTN": -90.53266506573691,
      "point": {
        "x": 488959.6550716939,
        "y": 5909063.787820886,
        "z": -1127.278728640691
      },
      "wgs84Longitude": 4.83287704363538,
      "wgs84Latitude": 53.328746791379125,
      "dls": 0.36092071981839646,
      "original": true,
      "dz": 1169.788728640691
    },
    {
      "md": 1225,
      "inclination": 30.72,
      "azimuthTN": 124.25532257834855,
      "azimuthGN": -235.61000000000016,
      "dxTN": 153.18119143171742,
      "dyTN": -97.68441082875198,
      "point": {
        "x": 488970.19890526746,
        "y": 5909056.614121651,
        "z": -1148.7783894064669
      },
      "wgs84Longitude": 4.833035606196444,
      "wgs84Latitude": 53.32868252724609,
      "dls": 0.21320646960888867,
      "original": true,
      "dz": 1191.2883894064669
    },
    {
      "md": 1250,
      "inclination": 30.85,
      "azimuthTN": 124.21532257834862,
      "azimuthGN": -235.65000000000006,
      "dxTN": 163.7596250614837,
      "dyTN": -104.88303417788758,
      "point": {
        "x": 488980.7561802195,
        "y": 5909049.393531829,
        "z": -1170.2557330280943
      },
      "wgs84Longitude": 4.833194371751314,
      "wgs84Latitude": 53.328617841694076,
      "dls": 0.15792260107170536,
      "original": true,
      "dz": 1212.7657330280942
    },
    {
      "md": 1275,
      "inclination": 30.88,
      "azimuthTN": 124.52532257834866,
      "azimuthGN": -235.34,
      "dxTN": 174.34576734163733,
      "dyTN": -112.12348430282117,
      "point": {
        "x": 488991.3210624366,
        "y": 5909042.13111394,
        "z": -1191.7152078134018
      },
      "wgs84Longitude": 4.833353252517447,
      "wgs84Latitude": 53.32855278010558,
      "dls": 0.19420792601975279,
      "original": true,
      "dz": 1234.2252078134018
    },
    {
      "md": 1300,
      "inclination": 30.950000000000003,
      "azimuthTN": 124.84532257834873,
      "azimuthGN": -235.01999999999992,
      "dxTN": 184.90732349228148,
      "dyTN": -119.43269494493045,
      "point": {
        "x": 489001.86120681505,
        "y": 5909034.800020941,
        "z": -1213.1634819840156
      },
      "wgs84Longitude": 4.8335117637703355,
      "wgs84Latitude": 53.32848710047792,
      "dls": 0.21442407494116256,
      "original": true,
      "dz": 1255.6734819840156
    },
    {
      "md": 1325,
      "inclination": 30.89,
      "azimuthTN": 124.94532257834862,
      "azimuthGN": -234.92000000000004,
      "dxTN": 195.44361149690968,
      "dyTN": -126.7816206480686,
      "point": {
        "x": 489012.3759998573,
        "y": 5909027.429288227,
        "z": -1234.6106222849403
      },
      "wgs84Longitude": 4.833669895275974,
      "wgs84Latitude": 53.328421063793066,
      "dls": 0.09479483779604865,
      "original": true,
      "dz": 1277.1206222849403
    },
    {
      "md": 1350,
      "inclination": 30.820000000000004,
      "azimuthTN": 125.1053225783487,
      "azimuthGN": -234.75999999999996,
      "dxTN": 205.94326639098773,
      "dyTN": -134.14045356367234,
      "point": {
        "x": 489022.85415119625,
        "y": 5909020.048738389,
        "z": -1256.0723240034042
      },
      "wgs84Longitude": 4.8338274764641795,
      "wgs84Latitude": 53.32835493788503,
      "dls": 0.12943115067054412,
      "original": true,
      "dz": 1298.5823240034042
    },
    {
      "md": 1375,
      "inclination": 30.85,
      "azimuthTN": 125.19532257834862,
      "azimuthGN": -234.67000000000007,
      "dxTN": 216.42070898226697,
      "dyTN": -141.51788514008337,
      "point": {
        "x": 489033.3100554318,
        "y": 5909012.649649587,
        "z": -1277.5384986053198
      },
      "wgs84Longitude": 4.83398472377521,
      "wgs84Latitude": 53.32828864465869,
      "dls": 0.06603353821835393,
      "original": true,
      "dz": 1320.0484986053198
    },
    {
      "md": 1400,
      "inclination": 31.02,
      "azimuthTN": 125.16532257834865,
      "azimuthGN": -234.70000000000005,
      "dxTN": 226.9248995224334,
      "dyTN": -148.92236488098166,
      "point": {
        "x": 489043.792633316,
        "y": 5909005.22346067,
        "z": -1298.9822668976838
      },
      "wgs84Longitude": 4.834142372047655,
      "wgs84Latitude": 53.32822210818472,
      "dls": 0.20483769840695493,
      "original": true,
      "dz": 1341.4922668976837
    },
    {
      "md": 1425,
      "inclination": 31.3,
      "azimuthTN": 124.76532257834867,
      "azimuthGN": -235.10000000000002,
      "dxTN": 237.52576962214505,
      "dyTN": -156.3353936937258,
      "point": {
        "x": 489054.3718318616,
        "y": 5908997.788498996,
        "z": -1320.3754114416038
      },
      "wgs84Longitude": 4.834301470882581,
      "wgs84Latitude": 53.328155494664955,
      "dls": 0.41782830187586567,
      "original": true,
      "dz": 1362.8854114416038
    },
    {
      "md": 1450,
      "inclination": 31.57,
      "azimuthTN": 125.31532257834861,
      "azimuthGN": -234.55000000000007,
      "dxTN": 248.20058326391884,
      "dyTN": -163.82147467314698,
      "point": {
        "x": 489065.024772619,
        "y": 5908990.280340776,
        "z": -1341.7062455400492
      },
      "wgs84Longitude": 4.8344616790024295,
      "wgs84Latitude": 53.32808822452327,
      "dls": 0.4727093937931486,
      "original": true,
      "dz": 1384.2162455400492
    },
    {
      "md": 1475,
      "inclination": 31.65,
      "azimuthTN": 124.95532257834861,
      "azimuthGN": -234.91000000000008,
      "dxTN": 258.9164324471215,
      "dyTN": -171.36251619808465,
      "point": {
        "x": 489075.718603301,
        "y": 5908982.717147694,
        "z": -1362.9971497623005
      },
      "wgs84Longitude": 4.834622502490713,
      "wgs84Latitude": 53.32802046032132,
      "dls": 0.24593615876650374,
      "original": true,
      "dz": 1405.5071497623005
    },
    {
      "md": 1500,
      "inclination": 31.660000000000004,
      "azimuthTN": 125.64532257834868,
      "azimuthGN": -234.22,
      "dxTN": 269.62401658336915,
      "dyTN": -178.94401257188153,
      "point": {
        "x": 489086.4040771856,
        "y": 5908975.11353546,
        "z": -1384.2778093560219
      },
      "wgs84Longitude": 4.8347832014006205,
      "wgs84Latitude": 53.32795233240757,
      "dls": 0.4347008574161763,
      "original": true,
      "dz": 1426.7878093560219
    },
    {
      "md": 1525,
      "inclination": 31.54,
      "azimuthTN": 125.53532257834866,
      "azimuthGN": -234.33000000000004,
      "dxTN": 280.2766194773302,
      "dyTN": -186.5678323631781,
      "point": {
        "x": 489097.03449243493,
        "y": 5908967.467746019,
        "z": -1405.5709806135492
      },
      "wgs84Longitude": 4.834943074572125,
      "wgs84Latitude": 53.327883824006946,
      "dls": 0.15974961092111692,
      "original": true,
      "dz": 1448.0809806135492
    },
    {
      "md": 1550,
      "inclination": 31.76,
      "azimuthTN": 125.93532257834863,
      "azimuthGN": -233.93000000000006,
      "dxTN": 290.92484934736444,
      "dyTN": -194.22949603480666,
      "point": {
        "x": 489107.6604474838,
        "y": 5908959.784138204,
        "z": -1426.8527249873814
      },
      "wgs84Longitude": 4.835102881576508,
      "wgs84Latitude": 53.32781497535634,
      "dls": 0.3648747337154864,
      "original": true,
      "dz": 1469.3627249873814
    },
    {
      "md": 1575,
      "inclination": 31.82,
      "azimuthTN": 126.29532257834863,
      "azimuthGN": -233.57000000000008,
      "dxTN": 301.5640872074371,
      "dyTN": -201.9921640490624,
      "point": {
        "x": 489118.27717680007,
        "y": 5908951.999587749,
        "z": -1448.1023596972627
      },
      "wgs84Longitude": 4.8352625530477145,
      "wgs84Latitude": 53.32774521894565,
      "dls": 0.23869827132556257,
      "original": true,
      "dz": 1490.6123596972627
    },
    {
      "md": 1600,
      "inclination": 31.79,
      "azimuthTN": 126.21532257834862,
      "azimuthGN": -233.65000000000006,
      "dxTN": 312.1888705828534,
      "dyTN": -209.78410010084852,
      "point": {
        "x": 489128.8793886513,
        "y": 5908944.185815009,
        "z": -1469.3485280178766
      },
      "wgs84Longitude": 4.8354220070359695,
      "wgs84Latitude": 53.327675199345336,
      "dls": 0.06209541597096512,
      "original": true,
      "dz": 1511.8585280178766
    },
    {
      "md": 1625,
      "inclination": 31.860000000000003,
      "azimuthTN": 126.29532257834863,
      "azimuthGN": -233.57000000000008,
      "dxTN": 322.81963014667843,
      "dyTN": -217.58042534720678,
      "point": {
        "x": 489139.4875639662,
        "y": 5908936.36764084,
        "z": -1490.5900947626567
      },
      "wgs84Longitude": 4.835581550194252,
      "wgs84Latitude": 53.32760514009083,
      "dls": 0.09807507656212959,
      "original": true,
      "dz": 1533.1000947626567
    },
    {
      "md": 1650,
      "inclination": 32.85,
      "azimuthTN": 125.37532257834869,
      "azimuthGN": -234.49,
      "dxTN": 333.6665368345689,
      "dyTN": -225.4118242581584,
      "point": {
        "x": 489150.31171724014,
        "y": 5908928.513899273,
        "z": -1511.708674539914
      },
      "wgs84Longitude": 4.835744336895539,
      "wgs84Latitude": 53.32753476539059,
      "dls": 1.3267757566273768,
      "original": true,
      "dz": 1554.218674539914
    },
    {
      "md": 1675,
      "inclination": 33.38,
      "azimuthTN": 123.06532257834863,
      "azimuthGN": -236.80000000000004,
      "dxTN": 344.95932511164966,
      "dyTN": -233.0898911424846,
      "point": {
        "x": 489161.5819334104,
        "y": 5908920.8123806175,
        "z": -1532.6488393312186
      },
      "wgs84Longitude": 4.83591381527107,
      "wgs84Latitude": 53.32746576800602,
      "dls": 1.6424254637274682,
      "original": true,
      "dz": 1575.1588393312186
    },
    {
      "md": 1700,
      "inclination": 31.919999999999998,
      "azimuthTN": 123.90532257834866,
      "azimuthGN": -235.96000000000004,
      "dxTN": 356.20892355374133,
      "dyTN": -240.52933710795497,
      "point": {
        "x": 489172.80953771493,
        "y": 5908913.34948864,
        "z": -1553.6979272859414
      },
      "wgs84Longitude": 4.836082645059684,
      "wgs84Latitude": 53.32739891446529,
      "dls": 1.8344234682872083,
      "original": true,
      "dz": 1596.2079272859414
    },
    {
      "md": 1725,
      "inclination": 30.78,
      "azimuthTN": 124.59532257834871,
      "azimuthGN": -235.26999999999998,
      "dxTN": 366.96039908067735,
      "dyTN": -247.8482975523091,
      "point": {
        "x": 489183.5395020829,
        "y": 5908906.008204242,
        "z": -1575.0477734121769
      },
      "wgs84Longitude": 4.836243998267819,
      "wgs84Latitude": 53.32733314350628,
      "dls": 1.4342026901607912,
      "original": true,
      "dz": 1617.5577734121769
    },
    {
      "md": 1750,
      "inclination": 31.230000000000004,
      "azimuthTN": 124.63532257834869,
      "azimuthGN": -235.22999999999996,
      "dxTN": 377.55860217351477,
      "dyTN": -255.1637277022838,
      "point": {
        "x": 489194.11626380787,
        "y": 5908898.670808886,
        "z": -1596.4757773657254
      },
      "wgs84Longitude": 4.836403050575472,
      "wgs84Latitude": 53.32726740412294,
      "dls": 0.5405657379368912,
      "original": true,
      "dz": 1638.9857773657254
    },
    {
      "md": 1775,
      "inclination": 31.470000000000002,
      "azimuthTN": 124.68532257834863,
      "azimuthGN": -235.18000000000004,
      "dxTN": 388.2570178144199,
      "dyTN": -262.5607300170997,
      "point": {
        "x": 489204.7930061887,
        "y": 5908891.25163869,
        "z": -1617.8258905959049
      },
      "wgs84Longitude": 4.836563606372752,
      "wgs84Latitude": 53.327200931530626,
      "dls": 0.28968675809397,
      "original": true,
      "dz": 1660.3358905959049
    },
    {
      "md": 1800,
      "inclination": 31.67,
      "azimuthTN": 124.99532257834859,
      "azimuthGN": -234.8700000000001,
      "dxTN": 398.9992719469735,
      "dyTN": -270.0381309969638,
      "point": {
        "x": 489215.5133805509,
        "y": 5908883.751999136,
        "z": -1639.1259234179379
      },
      "wgs84Longitude": 4.836724819551706,
      "wgs84Latitude": 53.32713373629705,
      "dls": 0.30907897361563724,
      "original": true,
      "dz": 1681.6359234179379
    },
    {
      "md": 1825,
      "inclination": 31.970000000000002,
      "azimuthTN": 124.88532257834868,
      "azimuthGN": -234.98000000000005,
      "dxTN": 409.8046527106818,
      "dyTN": -277.58731462951954,
      "point": {
        "x": 489226.2966875367,
        "y": 5908876.180457462,
        "z": -1660.368618439384
      },
      "wgs84Longitude": 4.83688697959615,
      "wgs84Latitude": 53.32706589582605,
      "dls": 0.36666563614258413,
      "original": true,
      "dz": 1702.878618439384
    },
    {
      "md": 1850,
      "inclination": 32.36,
      "azimuthTN": 125.09532257834871,
      "azimuthGN": -234.77,
      "dxTN": 420.7079098626814,
      "dyTN": -285.2192744129957,
      "point": {
        "x": 489237.177637127,
        "y": 5908868.525942937,
        "z": -1681.5315473935793
      },
      "wgs84Longitude": 4.8370506080263205,
      "wgs84Latitude": 53.32699731131503,
      "dls": 0.4868478492119437,
      "original": true,
      "dz": 1724.0415473935793
    },
    {
      "md": 1875,
      "inclination": 32.62,
      "azimuthTN": 125.04532257834863,
      "azimuthGN": -234.82000000000005,
      "dxTN": 431.69868679368506,
      "dyTN": -292.9351945578806,
      "point": {
        "x": 489248.14587408636,
        "y": 5908860.787296157,
        "z": -1702.618659922803
      },
      "wgs84Longitude": 4.837215549388469,
      "wgs84Latitude": 53.32692797212366,
      "dls": 0.31366017074265073,
      "original": true,
      "dz": 1745.128659922803
    },
    {
      "md": 1900,
      "inclination": 32.77,
      "azimuthTN": 125.04532257834863,
      "azimuthGN": -234.82000000000005,
      "dxTN": 442.754523285305,
      "dyTN": -300.6896151407589,
      "point": {
        "x": 489259.17905402055,
        "y": 5908853.01001158,
        "z": -1723.6576020045936
      },
      "wgs84Longitude": 4.837381466620948,
      "wgs84Latitude": 53.32685828672848,
      "dls": 0.18000000000000407,
      "original": true,
      "dz": 1766.1676020045936
    },
    {
      "md": 1925,
      "inclination": 32.74,
      "azimuthTN": 125.0753225783486,
      "azimuthGN": -234.7900000000001,
      "dxTN": 453.8263609738877,
      "dyTN": -308.4595823386913,
      "point": {
        "x": 489270.22819218604,
        "y": 5908845.217149072,
        "z": -1744.6823969258735
      },
      "wgs84Longitude": 4.837547623449367,
      "wgs84Latitude": 53.326788461401634,
      "dls": 0.040931425817135846,
      "original": true,
      "dz": 1787.1923969258735
    },
    {
      "md": 1950,
      "inclination": 32.83,
      "azimuthTN": 125.55532257834864,
      "azimuthGN": -234.31000000000003,
      "dxTN": 464.8723699955867,
      "dyTN": -316.28511320015184,
      "point": {
        "x": 489281.2513814859,
        "y": 5908837.368805936,
        "z": -1765.7001406469603
      },
      "wgs84Longitude": 4.837713392026298,
      "wgs84Latitude": 53.32671813660638,
      "dls": 0.33006556032232803,
      "original": true,
      "dz": 1808.2101406469603
    },
    {
      "md": 1975,
      "inclination": 32.78,
      "azimuthTN": 125.45532257834861,
      "azimuthGN": -234.41000000000008,
      "dxTN": 475.8984503297003,
      "dyTN": -324.1514952267207,
      "point": {
        "x": 489292.2545540995,
        "y": 5908829.479674898,
        "z": -1786.7131247292966
      },
      "wgs84Longitude": 4.837878860913863,
      "wgs84Latitude": 53.32664744453569,
      "dls": 0.08846914482635136,
      "original": true,
      "dz": 1829.2231247292966
    },
    {
      "md": 2000,
      "inclination": 32.78,
      "azimuthTN": 125.3653225783487,
      "azimuthGN": -234.49999999999997,
      "dxTN": 486.93009037674335,
      "dyTN": -331.9942653845063,
      "point": {
        "x": 489303.2633396562,
        "y": 5908821.614133236,
        "z": -1807.7320170991234
      },
      "wgs84Longitude": 4.83804441272436,
      "wgs84Latitude": 53.32657696438914,
      "dls": 0.058472790283087585,
      "original": true,
      "dz": 1850.2420170991234
    },
    {
      "md": 2025,
      "inclination": 32.78,
      "azimuthTN": 125.54532257834866,
      "azimuthGN": -234.32000000000002,
      "dxTN": 497.95555911669777,
      "dyTN": -339.84569150726145,
      "point": {
        "x": 489314.2659360296,
        "y": 5908813.739953628,
        "z": -1828.7509132695277
      },
      "wgs84Longitude": 4.838209871357626,
      "wgs84Latitude": 53.326506406240476,
      "dls": 0.11694555507018416,
      "original": true,
      "dz": 1871.2609132695277
    },
    {
      "md": 2050,
      "inclination": 32.72,
      "azimuthTN": 125.42532257834864,
      "azimuthGN": -234.44000000000008,
      "dxTN": 508.96795136497917,
      "dyTN": -347.6965131507188,
      "point": {
        "x": 489325.25546256447,
        "y": 5908805.866409024,
        "z": -1849.776889882195
      },
      "wgs84Longitude": 4.838375133189423,
      "wgs84Latitude": 53.3264358533024,
      "dls": 0.10607758630030983,
      "original": true,
      "dz": 1892.286889882195
    },
    {
      "md": 2075,
      "inclination": 32.76,
      "azimuthTN": 124.90532257834867,
      "azimuthGN": -234.96000000000004,
      "dxTN": 520.0209581183402,
      "dyTN": -355.4834966556789,
      "point": {
        "x": 489336.2857372773,
        "y": 5908798.056581559,
        "z": -1870.8052671238254
      },
      "wgs84Longitude": 4.838541004112305,
      "wgs84Latitude": 53.326365873705214,
      "dls": 0.34087208101117544,
      "original": true,
      "dz": 1913.3152671238254
    },
    {
      "md": 2100,
      "inclination": 32.92,
      "azimuthTN": 125.62532257834867,
      "azimuthGN": -234.23999999999998,
      "dxTN": 531.0900934008375,
      "dyTN": -363.3110533126317,
      "point": {
        "x": 489347.3320387023,
        "y": 5908790.206159377,
        "z": -1891.810046961326
      },
      "wgs84Longitude": 4.838707116500704,
      "wgs84Latitude": 53.326295529304616,
      "dls": 0.5063527857788734,
      "original": true,
      "dz": 1934.320046961326
    },
    {
      "md": 2125,
      "inclination": 33.1,
      "azimuthTN": 125.76532257834867,
      "azimuthGN": -234.1,
      "dxTN": 542.1509888075082,
      "dyTN": -371.257793353746,
      "point": {
        "x": 489358.36982351856,
        "y": 5908782.236621051,
        "z": -1912.774428878983
      },
      "wgs84Longitude": 4.838873104516223,
      "wgs84Latitude": 53.326224113787,
      "dls": 0.23459022612098812,
      "original": true,
      "dz": 1955.284428878983
    },
    {
      "md": 2150,
      "inclination": 33.36,
      "azimuthTN": 125.86532257834868,
      "azimuthGN": -234,
      "dxTN": 553.2604083191335,
      "dyTN": -379.2747277173297,
      "point": {
        "x": 489369.4559480251,
        "y": 5908774.196802617,
        "z": -1933.6863499139831
      },
      "wgs84Longitude": 4.839039820141617,
      "wgs84Latitude": 53.326152067285385,
      "dls": 0.3188547282048943,
      "original": true,
      "dz": 1976.196349913983
    },
    {
      "md": 2175,
      "inclination": 33.52,
      "azimuthTN": 126.23532257834859,
      "azimuthGN": -233.63000000000008,
      "dxTN": 564.3986787933858,
      "dyTN": -387.3822273913895,
      "point": {
        "x": 489380.5706991139,
        "y": 5908766.066387482,
        "z": -1954.5479489456438
      },
      "wgs84Longitude": 4.839206968078579,
      "wgs84Latitude": 53.326079206774864,
      "dls": 0.311011282784626,
      "original": true,
      "dz": 1997.0579489456438
    },
    {
      "md": 2200,
      "inclination": 32.82,
      "azimuthTN": 126.4853225783486,
      "azimuthGN": -233.38000000000008,
      "dxTN": 575.4138113112429,
      "dyTN": -395.4911689225565,
      "point": {
        "x": 489391.5623582689,
        "y": 5908757.93482043,
        "z": -1975.4741012916954
      },
      "wgs84Longitude": 4.839372267367428,
      "wgs84Latitude": 53.32600633317894,
      "dls": 0.8558845732210395,
      "original": true,
      "dz": 2017.9841012916954
    },
    {
      "md": 2225,
      "inclination": 32.46,
      "azimuthTN": 126.72532257834861,
      "azimuthGN": -233.14000000000004,
      "dxTN": 586.2382767586652,
      "dyTN": -403.53151414528526,
      "point": {
        "x": 489402.36358803796,
        "y": 5908749.872270178,
        "z": -1996.5259770863477
      },
      "wgs84Longitude": 4.8395347046342305,
      "wgs84Latitude": 53.32593407587419,
      "dls": 0.4590777503971483,
      "original": true,
      "dz": 2039.0359770863477
    },
    {
      "md": 2250,
      "inclination": 31.270000000000003,
      "azimuthTN": 126.77532257834865,
      "azimuthGN": -233.09,
      "dxTN": 596.8130393616686,
      "dyTN": -411.4280365767125,
      "point": {
        "x": 489412.91555309034,
        "y": 5908741.954071714,
        "z": -2017.7579541853236
      },
      "wgs84Longitude": 4.839693393999231,
      "wgs84Latitude": 53.32586311085376,
      "dls": 1.428351147557743,
      "original": true,
      "dz": 2060.2679541853236
    },
    {
      "md": 2275,
      "inclination": 30.430000000000003,
      "azimuthTN": 126.94532257834862,
      "azimuthGN": -232.92000000000007,
      "dxTN": 607.0702085772658,
      "dyTN": -419.11794375561584,
      "point": {
        "x": 489423.1505376662,
        "y": 5908734.243151803,
        "z": -2039.2205843155286
      },
      "wgs84Longitude": 4.839847316686287,
      "wgs84Latitude": 53.325794002401175,
      "dls": 1.0134127107952495,
      "original": true,
      "dz": 2081.7305843155286
    },
    {
      "md": 2300,
      "inclination": 29.800000000000004,
      "azimuthTN": 127.64532257834868,
      "azimuthGN": -232.22,
      "dxTN": 617.0490301835275,
      "dyTN": -426.7175684242604,
      "point": {
        "x": 489433.1074984672,
        "y": 5908726.623132184,
        "z": -2060.846045476829
      },
      "wgs84Longitude": 4.839997061559163,
      "wgs84Latitude": 53.32572570522094,
      "dls": 0.8655313442533104,
      "original": true,
      "dz": 2103.3560454768294
    },
    {
      "md": 2329,
      "inclination": 29.200000000000003,
      "azimuthTN": 128.8453225783486,
      "azimuthGN": -231.0200000000001,
      "dxTN": 628.2645900039377,
      "dyTN": -435.55595617505566,
      "point": {
        "x": 489444.29779056826,
        "y": 5908717.761941028,
        "z": -2086.086469028318
      },
      "wgs84Longitude": 4.840165363984623,
      "wgs84Latitude": 53.32564627553027,
      "dls": 0.8711363408740728,
      "original": true,
      "dz": 2128.596469028318
    },
    {
      "md": 2357,
      "inclination": 28.899999999999995,
      "azimuthTN": 128.36532257834872,
      "azimuthGN": -231.49999999999994,
      "dxTN": 638.8891236434487,
      "dyTN": -444.0393695153704,
      "point": {
        "x": 489454.89812772715,
        "y": 5908709.25697047,
        "z": -2110.5639711637255
      },
      "wgs84Longitude": 4.840324796491281,
      "wgs84Latitude": 53.325570035850156,
      "dls": 0.40703334539762503,
      "original": true,
      "dz": 2153.0739711637257
    },
    {
      "md": 2385,
      "inclination": 28.1,
      "azimuthTN": 129.06532257834863,
      "azimuthGN": -230.80000000000004,
      "dxTN": 649.3141937373574,
      "dyTN": -452.39465904126126,
      "point": {
        "x": 489465.2993824221,
        "y": 5908700.880540984,
        "z": -2135.170720108795
      },
      "wgs84Longitude": 4.840481235101509,
      "wgs84Latitude": 53.32549494738036,
      "dls": 0.9288378029627887,
      "original": true,
      "dz": 2177.6807201087954
    },
    {
      "md": 2413,
      "inclination": 27.100000000000005,
      "azimuthTN": 128.76532257834867,
      "azimuthGN": -231.09999999999997,
      "dxTN": 659.4070960210656,
      "dyTN": -460.54379060328677,
      "point": {
        "x": 489475.36908699863,
        "y": 5908692.710967184,
        "z": -2159.9841175479637
      },
      "wgs84Longitude": 4.840632688360034,
      "wgs84Latitude": 53.325421711425335,
      "dls": 1.0817248033703686,
      "original": true,
      "dz": 2202.494117547964
    },
    {
      "md": 2441,
      "inclination": 26.1,
      "azimuthTN": 127.76532257834867,
      "azimuthGN": -232.10000000000002,
      "dxTN": 669.2491076891565,
      "dyTN": -468.30930404765485,
      "point": {
        "x": 489485.1889029699,
        "y": 5908684.925447025,
        "z": -2185.0202457876494
      },
      "wgs84Longitude": 4.840780376427529,
      "wgs84Latitude": 53.32535192244371,
      "dls": 1.1738956707965538,
      "original": true,
      "dz": 2227.5302457876496
    },
    {
      "md": 2469,
      "inclination": 25.2,
      "azimuthTN": 128.36532257834872,
      "azimuthGN": -231.49999999999994,
      "dxTN": 678.7920523931899,
      "dyTN": -475.7812877986645,
      "point": {
        "x": 489494.71046166273,
        "y": 5908677.434041431,
        "z": -2210.260772781064
      },
      "wgs84Longitude": 4.840923576173187,
      "wgs84Latitude": 53.32528477103497,
      "dls": 1.0036240131543401,
      "original": true,
      "dz": 2252.7707727810644
    },
    {
      "md": 2497,
      "inclination": 24.4,
      "azimuthTN": 129.3653225783487,
      "azimuthGN": -230.5,
      "dxTN": 687.9373043617063,
      "dyTN": -483.1494527199072,
      "point": {
        "x": 489503.8347311711,
        "y": 5908670.047347408,
        "z": -2235.6784492015972
      },
      "wgs84Longitude": 4.841060807137974,
      "wgs84Latitude": 53.32521855272337,
      "dls": 0.967787301355539,
      "original": true,
      "dz": 2278.1884492015975
    },
    {
      "md": 2525,
      "inclination": 24.3,
      "azimuthTN": 127.8653225783487,
      "azimuthGN": -232.00000000000003,
      "dxTN": 696.956903601013,
      "dyTN": -490.3540272307014,
      "point": {
        "x": 489512.8337827359,
        "y": 5908662.824473381,
        "z": -2261.1879204766797
      },
      "wgs84Longitude": 4.841196152204286,
      "wgs84Latitude": 53.32515380429293,
      "dls": 0.671229667087476,
      "original": true,
      "dz": 2303.69792047668
    },
    {
      "md": 2554,
      "inclination": 23.9,
      "azimuthTN": 126.36532257834871,
      "azimuthGN": -233.49999999999997,
      "dxTN": 706.3981814786036,
      "dyTN": -497.49989630815224,
      "point": {
        "x": 489522.2544815916,
        "y": 5908655.659290528,
        "z": -2287.660309930661
      },
      "wgs84Longitude": 4.8413378252161445,
      "wgs84Latitude": 53.32508958258952,
      "dls": 0.756735804486201,
      "original": true,
      "dz": 2330.170309930661
    },
    {
      "md": 2582,
      "inclination": 23.5,
      "azimuthTN": 126.4653225783486,
      "azimuthGN": -233.4000000000001,
      "dxTN": 715.4551276025966,
      "dyTN": -504.18089520580537,
      "point": {
        "x": 489531.29209516896,
        "y": 5908648.959694266,
        "z": -2313.298811529294
      },
      "wgs84Longitude": 4.841473730951202,
      "wgs84Latitude": 53.32502953826117,
      "dls": 0.4307296253721586,
      "original": true,
      "dz": 2355.8088115292944
    },
    {
      "md": 2607,
      "inclination": 24.2,
      "azimuthTN": 125.56532257834863,
      "azimuthGN": -234.30000000000007,
      "dxTN": 723.6319288309337,
      "dyTN": -510.12367445807655,
      "point": {
        "x": 489539.4516515867,
        "y": 5908643.000089235,
        "z": -2336.163925169961
      },
      "wgs84Longitude": 4.841596429413587,
      "wgs84Latitude": 53.32497612827306,
      "dls": 0.9467085302662911,
      "original": true,
      "dz": 2378.6739251699614
    },
    {
      "md": 2638,
      "inclination": 23.9,
      "azimuthTN": 126.34532257834871,
      "azimuthGN": -233.51999999999998,
      "dxTN": 733.8585425069949,
      "dyTN": -517.540944126663,
      "point": {
        "x": 489549.65673330997,
        "y": 5908635.561769696,
        "z": -2364.472860561577
      },
      "wgs84Longitude": 4.841749886366404,
      "wgs84Latitude": 53.324909466309855,
      "dls": 0.42298219578832097,
      "original": true,
      "dz": 2406.982860561577
    },
    {
      "md": 2667,
      "inclination": 24.7,
      "azimuthTN": 125.64532257834868,
      "azimuthGN": -234.22,
      "dxTN": 743.5142805179058,
      "dyTN": -524.55365096063,
      "point": {
        "x": 489559.2921190331,
        "y": 5908628.529191892,
        "z": -2390.9033965441404
      },
      "wgs84Longitude": 4.8418947765653,
      "wgs84Latitude": 53.324846440187684,
      "dls": 0.8795881202293765,
      "original": true,
      "dz": 2433.4133965441406
    },
    {
      "md": 2694,
      "inclination": 26.4,
      "azimuthTN": 124.3453225783487,
      "azimuthGN": -235.52,
      "dxTN": 753.0553655661749,
      "dyTN": -531.2282252046916,
      "point": {
        "x": 489568.81369224377,
        "y": 5908621.834880354,
        "z": -2415.262346940371
      },
      "wgs84Longitude": 4.842037946813066,
      "wgs84Latitude": 53.32478645249532,
      "dls": 1.9888685303709017,
      "original": true,
      "dz": 2457.7723469403713
    },
    {
      "md": 2722,
      "inclination": 27,
      "azimuthTN": 124.84532257834873,
      "azimuthGN": -235.01999999999992,
      "dxTN": 763.4113142733064,
      "dyTN": -538.3717622435331,
      "point": {
        "x": 489579.14870017226,
        "y": 5908614.669879801,
        "z": -2440.276663561667
      },
      "wgs84Longitude": 4.842193344687604,
      "wgs84Latitude": 53.32472224975301,
      "dls": 0.6864385434767074,
      "original": true,
      "dz": 2482.7866635616674
    },
    {
      "md": 2769,
      "inclination": 27.3,
      "azimuthTN": 127.64532257834868,
      "azimuthGN": -232.22,
      "dxTN": 780.7022112706302,
      "dyTN": -551.0511191367733,
      "point": {
        "x": 489596.4028661719,
        "y": 5908601.954988168,
        "z": -2482.099650283146
      },
      "wgs84Longitude": 4.8424528033689604,
      "wgs84Latitude": 53.32460829489819,
      "dls": 0.8376586411867428,
      "original": true,
      "dz": 2524.609650283146
    },
    {
      "md": 2790,
      "inclination": 27.3,
      "azimuthTN": 127.64532257834868,
      "azimuthGN": -232.22,
      "dxTN": 788.3286093798351,
      "dyTN": -556.9338526322119,
      "point": {
        "x": 489604.01238143403,
        "y": 5908596.056698147,
        "z": -2500.7606121688996
      },
      "wgs84Longitude": 4.84256724021784,
      "wgs84Latitude": 53.32455542464951,
      "dls": 0,
      "original": true,
      "dz": 2543.2706121689
    }
  ],
  "localCRS": "{\"lateBoundCRS\":{\"name\":\"Azimuthal Equidistant Lng=4.83209241;Lat=53.33031266\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"PROJCS[\\\"Azimuthal Equidistant Lng=4.83209241;Lat=53.33031266\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],PROJECTION[\\\"Azimuthal_Equidistant\\\"],PARAMETER[\\\"False_Easting\\\",0.0],PARAMETER[\\\"False_Northing\\\",0.0],PARAMETER[\\\"Central_Meridian\\\",4.832092413292588],PARAMETER[\\\"Latitude_Of_Origin\\\",53.33031265662695],UNIT[\\\"Meter\\\",1.0]]\"},\"name\":\"Azimuthal Equidistant Lng=4.83209241;Lat=53.33031266 - ED_1950_To_WGS_1984_1\",\"singleCT\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"1133\"},\"name\":\"ED_1950_To_WGS_1984_1\",\"type\":\"ST\",\"ver\":\"PE_10_9_1\",\"wkt\":\"GEOGTRAN[\\\"ED_1950_To_WGS_1984_1\\\",GEOGCS[\\\"GCS_European_1950\\\",DATUM[\\\"D_European_1950\\\",SPHEROID[\\\"International_1924\\\",6378388.0,297.0]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],GEOGCS[\\\"GCS_WGS_1984\\\",DATUM[\\\"D_WGS_1984\\\",SPHEROID[\\\"WGS_1984\\\",6378137.0,298.257223563]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],METHOD[\\\"Geocentric_Translation\\\"],PARAMETER[\\\"X_Axis_Translation\\\",-87.0],PARAMETER[\\\"Y_Axis_Translation\\\",-98.0],PARAMETER[\\\"Z_Axis_Translation\\\",-121.0],AUTHORITY[\\\"EPSG\\\",1133]]\"},\"type\":\"EBC\",\"ver\":\"PE_10_9_1\"}",
  "method": "AzimuthalEquidistant",
  "operationsApplied": [
    "derived TN from GN azimuth by grid convergence 359.865323",
    "Using SLB Drilling's trajectory computation engine",
    "Performed trajectory calculation for each of the 117 input survey station.",
    "computation method: AzimuthalEquidistant",
    "conversion from 'Azimuthal Equidistant Lng=4.83209241;Lat=53.33031266' to 'GCS_European_1950'",
    "conversion from 'GCS_European_1950' to 'ED_1950_TM_5_NE'",
    "to WGS 84: conversion from ED_1950_TM_5_NE to GCS_European_1950; 117 points converted",
    "to WGS 84: transformation GCS_European_1950 to GCS_WGS_1984 using ED_1950_To_WGS_1984_1; 117 points successfully transformed"
  ],
  "inputKind": "MD_Incl_Azim"
}
```
</details>

For up-to-date API information, please refer to
[the latest API version documentation and tutorials](https://community.opengroup.org/osdu/platform/system/reference/crs-conversion-service/-/tree/master/docs).

[&rarr; Back to Table of Contents](#TOC)