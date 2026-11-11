<a name="TOC">Table of Contents</a>

[[_TOC_]]

# GeoJSON `properties` Schema Fragments

## Background

Some links to Wikipedia about GeoJSON:
* [Example features in a feature collection](https://en.wikipedia.org/wiki/GeoJSON#Example)
* Illustration of geometries - [the type of Features in a FeatureCollection](https://en.wikipedia.org/wiki/GeoJSON#Geometries)

All Features carry a mandatory `properties`, either `null` or an opaque object. OSDU attempts to organize a `properties`
content schema.

* The basic structure of an element is given by these properties:
  * It uses a mandatory property `Kind` to discriminate the schemas (=this is the schema id to look up with the OSDU
    Schema service)
  * `FeatureProperties`, an object associated with the feature itself. This is the exception as all the other properties
    are formed as arrays.
  * `PointProperties[]`, the most frequently used property to geometry association. Consumers can assume that the number
    of elements in `properties.PointProperties[]` matches exactly the number of coordinates in the `geometry`.
  * Other geometry/topology associations:
    * For `MultiLineString`/`AnyCrsMultiLineString`: line string specific properties would by called `LineStringProperties`.
    * For `MultiPolygon`/`AnyCrsMultiPolygon`: polygon specific properties would be called `PolygonProperties`.

Current property fragments:
* [AbstractGeoJson.PropertiesBinGridCorners](../../../E-R/abstract/AbstractGeoJson.PropertiesBinGridCorners.1.0.0.md)

## Examples

### Seismic Geometries, SeismicBinGrid

[SeismicBinGrid](../../../E-R/work-product-component/SeismicBinGrid.1.3.0.md) demonstrates the usage of
[AbstractGeoJson.PropertiesBinGridCorners](../../../E-R/abstract/AbstractGeoJson.PropertiesBinGridCorners.1.0.0.md) in
the `data.ABCDBinGridSpatialLocation.AsIngestedCoordinates` as individual features with type `AnyCrsPoint`:

<details>

<summary markdown="span">SeismicBinGrid AnyCrsFeatureCollection, AnyCrsPoint 1 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](./records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[0])</OsduImportJSON>

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

<summary markdown="span">SeismicBinGrid AnyCrsFeatureCollection, AnyCrsPoint 2 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](./records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[1])</OsduImportJSON>

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

<summary markdown="span">SeismicBinGrid AnyCrsFeatureCollection, AnyCrsPoint 3 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](./records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[2])</OsduImportJSON>

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

<summary markdown="span">SeismicBinGrid AnyCrsFeatureCollection, AnyCrsPoint 4 of 4.</summary>

<OsduImportJSON>[SeismicBinGrid, full record](./records/SeismicBinGrid-PointFeatures.json#only.data.ABCDBinGridSpatialLocation.AsIngestedCoordinates.features[3])</OsduImportJSON>

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

[&rarr; Back to TOC](#TOC)