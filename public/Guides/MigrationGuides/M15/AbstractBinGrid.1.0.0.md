<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractBinGrid:1.1.0`

The OSDU Bin Grid definition got simplified and improved usage recommendation:

| Cumulative Name                                                                                                     | Value Type   | Title                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Migration/Recommendation                                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------------|--------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ~~_ABCDBinGridLocalCoordinates[] [AbstractCoordinates.1.0.0](../../../E-R/abstract/AbstractCoordinates.1.0.0.md)_~~ | ~~_object_~~ | ~~_AbstractCoordinates_~~ | ~~_DEPRECATED: Use  AbstractGeoJson.PropertiesBinGridCorners properties inside the ABCDBindGridSpatialLocation. Previously:  Array of 4 corner points for bin grid in local coordinates: Point A (min inline, min crossline); Point B (min inline, max crossline); Point C (max inline, min crossline); Point D (max inline, max crossline).  If Point D is not given and BinGridDefinitionMethodTypeID=4, it must be supplied, with its spatial location, before ingestion to create a parallelogram in map coordinate space.  Note correspondence of inline=x, crossline=y._~~ | `AbstractGeoJson.PropertiesBinGridCorners` offers superior naming and association of Inline/Crossline values to coordinates.                                                            |
| ~~ABCDBinGridLocalCoordinates[].X [AbstractCoordinates.1.0.0](../../../E-R/abstract/AbstractCoordinates.1.0.0.md)~~ | ~~number~~   | ~~X~~                     | ~~x is Easting or Longitude.~~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The naming _X_ is not aligned with the intent _Inline_. `AbstractGeoJson.PropertiesBinGridCorners` offers superior naming and association of Inline/Crossline values to coordinates.    |
| ~~ABCDBinGridLocalCoordinates[].Y [AbstractCoordinates.1.0.0](../../../E-R/abstract/AbstractCoordinates.1.0.0.md)~~ | ~~number~~   | ~~Y~~                     | ~~y is Northing or Latitude.~~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The naming _Y_ is not aligned with the intent _Crossline_. `AbstractGeoJson.PropertiesBinGridCorners` offers superior naming and association of Inline/Crossline values to coordinates. |

| Cumulative Name                                                                                                      | Value Type | Title                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                          | Migration/Recommendation |
|----------------------------------------------------------------------------------------------------------------------|------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| _ABCDBinGridSpatialLocation [AbstractSpatialLocation.1.1.0](../../../E-R/abstract/AbstractSpatialLocation.1.1.0.md)_ | _object_   | _AbstractSpatialLocation_ | _Bin Grid ABCD points containing the projected coordinates, projected CRS and quality metadata.  This attribute is required also for the P6 definition method to define the projected CRS, even if the ABCD coordinates would be optional (recommended to be always calculated). It is recommended to populate the GeoJSON/AnyCrsGeoJSON with properties according to the AbstractGeoJson.PropertiesBinGridCorners schema fragment._ |                          |

## Recommendation

> Encode the inline/crossline number to coordinate association within
> a [GeoJSON](../../../E-R/abstract/AbstractFeatureCollection.1.0.0.md)
> /[AnyCrsGeoJSON](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md) structure. 
> * `type` holds the feature type (from {AnyCrs}Point to {AnyCrs}MultiPolygon)
> * `geometry` holds the coordinates (2D or 3D) describing the feature `type`
> * `properties` holds the [AbstractGeoJson.PropertiesBinGridCorners](../../../E-R/abstract/AbstractGeoJson.PropertiesBinGridCorners.1.0.0.md) fragment(s)

<details>

<summary markdown="span">Example SeismicBinGrid ABCDBinGridSpatialLocation, AnyCrsPoint 1 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](../../../Examples/WorkedExamples/GeoJSON-properties/records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[0])</OsduImportJSON>

```json
{
  "data": {
    "ABCDBinGridSpatialLocation": {
      "AsIngestedCoordinates": {
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "Kind": "osdu:wks:AbstractGeoJson.PropertiesBinGridCorners:1.0.0",
              "PointProperties": [
                {
                  "Inline": 9985,
                  "Crossline": 1932,
                  "Label": "A  (min IL, min XL)"
                }
              ]
            },
            "geometry": {
              "type": "AnyCrsPoint",
              "coordinates": [
                438727.1,
                6475514.5
              ]
            }
          }
        ]
      }
    }
  }
}
```
</details>

<details>

<summary markdown="span">Example SeismicBinGrid ABCDBinGridSpatialLocation, AnyCrsPoint 2 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](../../../Examples/WorkedExamples/GeoJSON-properties/records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[1])</OsduImportJSON>

```json
{
  "data": {
    "ABCDBinGridSpatialLocation": {
      "AsIngestedCoordinates": {
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "Kind": "osdu:wks:AbstractGeoJson.PropertiesBinGridCorners:1.0.0",
              "PointProperties": [
                {
                  "Inline": 10369,
                  "Crossline": 1932,
                  "Label": "C  (max IL, min XL)"
                }
              ]
            },
            "geometry": {
              "type": "AnyCrsPoint",
              "coordinates": [
                439888.3,
                6480172.0
              ]
            }
          }
        ]
      }
    }
  }
}
```
</details>

<details>

<summary markdown="span">Example SeismicBinGrid ABCDBinGridSpatialLocation, AnyCrsPoint 3 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](../../../Examples/WorkedExamples/GeoJSON-properties/records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[2])</OsduImportJSON>

```json
{
  "data": {
    "ABCDBinGridSpatialLocation": {
      "AsIngestedCoordinates": {
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "Kind": "osdu:wks:AbstractGeoJson.PropertiesBinGridCorners:1.0.0",
              "PointProperties": [
                {
                  "Inline": 10369,
                  "Crossline": 2536,
                  "Label": "D  (max IL, max XL)"
                }
              ]
            },
            "geometry": {
              "type": "AnyCrsPoint",
              "coordinates": [
                432562.6,
                6481998.5
              ]
            }
          }
        ]
      }
    }
  }
}
```
</details>

<details>

<summary markdown="span">Example SeismicBinGrid ABCDBinGridSpatialLocation, AnyCrsPoint 4 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](../../../Examples/WorkedExamples/GeoJSON-properties/records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[3])</OsduImportJSON>

```json
{
  "data": {
    "ABCDBinGridSpatialLocation": {
      "AsIngestedCoordinates": {
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "Kind": "osdu:wks:AbstractGeoJson.PropertiesBinGridCorners:1.0.0",
              "PointProperties": [
                {
                  "Inline": 9745,
                  "Crossline": 2536,
                  "Label": "B  (min IL, max XL)"
                }
              ]
            },
            "geometry": {
              "type": "AnyCrsPoint",
              "coordinates": [
                431401.4,
                6477341.0
              ]
            }
          }
        ]
      }
    }
  }
}
```
</details>

This means migrating the inline/crossline numbers previously stored in the `ABCDBinGridLocalCoordinates` into the 
{AnyCrs}Feature of the {AnyCrs}FeatureCollection as `properties` next to the `geometry`.

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)


