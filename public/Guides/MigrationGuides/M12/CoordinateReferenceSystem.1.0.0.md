<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--CoordinateReferenceSystem:1.1.0`

Migrating  [`osdu:wks:reference-data--CoordinateReferenceSystem:1.0.0`](../../../E-R/reference-data/CoordinateReferenceSystem.1.0.0.md)
to [`osdu:wks:reference-data--CoordinateReferenceSystem:1.1.0`](../../../E-R/reference-data/CoordinateReferenceSystem.1.1.0.md)
means adding new properties only. The `Extent.Description` can now be populated by reference data providers.

## New Properties for CoordinateReferenceSystem:1.1.0

| Property                               | Value Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                        | Migration Instructions                                                                                                                                             |
|----------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.Usages[].Extent.Description       | string                    | The description of the Extent.                                                                                                                                                                                                                                                                                                                                                                                                     | This property should contain the list of countries and areas, where this CoordinateReferenceSystem is applicable. IOGP/EPSG GeoRepository provides Extend content. |                                                                                                                                                           |
| data.PreferredUsage.Extent.Description | string                    | The description of the Extent.                                                                                                                                                                                                                                                                                                                                                                                                     | This property should contain the list of countries and areas, where this CoordinateReferenceSystem is applicable. IOGP/EPSG GeoRepository provides Extend content. |
| data.Wgs84Coordinate                   | AbstractFeatureCollection | The 2-dimensional bounding box derived from the extent (Polygon or MultiPolygon) based on WGS 84 (EPSG:4326). The schema of this substructure is identical to the GeoJSON FeatureCollection https://geojson.org/schema/FeatureCollection.json. The coordinate sequence follows GeoJSON standard, i.e. longitude, latitude. CoordinateReferenceSystems with an extent crossing the anti-meridian are represented by a MultiPolygon. | Extent derived bounding box, provided for the OSDU example CRSs and CTs                                                                                            |

In a related change for the reference values ([internal GitLab #119](https://gitlab.opengroup.org/osdu/subcommittees/data-def/work-products/reference-values/-/issues/119))
the reference values are improved for the extents, which adds value for discovery by `data.PreferredUsage`.

[Back to TOC](#TOC)

### PreferredUsage for items with multiple Usage records

In case more than one object in Usages merge the extents and concatenate name/descriptions for traceability. The
resulting bounding box includes all usage extents. The resulting extent is only for search purposes (bounding box). The
original Usages are taken as per GeoRepository but are not relevant to search.

<details><summary>Example for a PreferredUsage based on multiple objects in the Usage array <code>BoundProjected:EPSG::3106_EPSG::15779</code>.</summary>

```json
{
  "PreferredUsage": {
    "Extent": {
      "BoundingBoxEastBoundLongitude": 92.67,
      "BoundingBoxNorthBoundLatitude": 26.64,
      "BoundingBoxSouthBoundLatitude": 18.56,
      "BoundingBoxWestBoundLongitude": 88.01,
      "Description": "Multiple usages/extents merged [(Bangladesh - onshore. [3217]), (Bangladesh - onshore and offshore. [1041])]",
      "Name": "Multiple usages/extents merged [(Bangladesh - onshore [3217]), (Bangladesh [1041])]"
    },
    "Name": "Multiple usages/extents merged [(Bangladesh - onshore [3217]), (Bangladesh [1041])] (from coordinate reference system (same extent as transformation))",
    "Scope": {
      "Name": "Multiple usages/extents merged [(Engineering survey, topographic mapping. [1142]), (Oil and gas exploration and production. [1136])]"
    }
  }
}
```
</details>

[Back to TOC](#TOC)

### Population rules for BoundCRS PreferredUsage:

**_Case 1:_** If the extent bbox of the CRS is fully contained in the extent.bbox of the CT then use the CRS.bbox and its
extent.description. The preferred usage name contains `(from bound transformation)`.

<details><summary>Example for a BoundCRS which has a CRS box contained by the CT's bbox <code>BoundGeographic2D:EPSG::4202_EPSG::1108</code>.</summary>

```json
{
  "PreferredUsage": {
    "Extent": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 2575
      },
      "BoundingBoxEastBoundLongitude": 153.69,
      "BoundingBoxNorthBoundLatitude": -9.86,
      "BoundingBoxSouthBoundLatitude": -43.7,
      "BoundingBoxWestBoundLongitude": 112.85,
      "Description": "Australia - Australian Capital Territory; New South Wales; Northern Territory; Queensland; South Australia; Tasmania; Western Australia; Victoria.",
      "Name": "Australia - onshore"
    },
    "Name": "Australia - onshore (from bound transformation)",
    "Scope": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1027
      },
      "Name": "Geodesy."
    }
  }
}
```

</details>

**_Case 2:_** If the extent.bbox of the CT is fully contained in the extent.bbox of the CRS then use the CT.bbox and its
extent.description. The preferred usage name contains `(from coordinate reference system)`.

<details><summary> Example for a BoundCRS which has a CT box contained by the CRS's bbox <code>BoundGeographic2D:EPSG::4209_EPSG::1113</code>.</summary>

```json
{
  "PreferredUsage": {
    "Extent": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1276
      },
      "BoundingBoxEastBoundLongitude": 35.93,
      "BoundingBoxNorthBoundLatitude": -8.19,
      "BoundingBoxSouthBoundLatitude": -26.88,
      "BoundingBoxWestBoundLongitude": 19.99,
      "Description": "Botswana; Malawi; Zambia; Zimbabwe.",
      "Name": "Africa - Botswana, Malawi, Zambia, Zimbabwe"
    },
    "Name": "Africa - Botswana, Malawi, Zambia, Zimbabwe (from coordinate reference system)",
    "Scope": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1027
      },
      "Name": "Geodesy."
    }
  }
}
```

</details>

**_Case 3:_** If they are identical, don't repeat yourself, don't concatenate. The preferred usage name contains `(from coordinate reference system (same extent as transformation))`.

<details><summary> Example for a BoundCRS for which the  CRS and CT have the same <code>BoundGeographic2D:EPSG::4213_EPSG::15849</code>.</summary>

```json
{
  "PreferredUsage": {
    "Extent": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 2771
      },
      "BoundingBoxEastBoundLongitude": 14.9,
      "BoundingBoxNorthBoundLatitude": 16.7,
      "BoundingBoxSouthBoundLatitude": 12.8,
      "BoundingBoxWestBoundLongitude": 7.81,
      "Description": "Niger - southeast",
      "Name": "Niger - southeast"
    },
    "Name": "Niger - southeast (from coordinate reference system (same extent as transformation))",
    "Scope": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1027
      },
      "Name": "Geodesy."
    }
  }
}
```

</details>

**_Case 4:_** BoundCRSs with overlapping extents of CRS and CT use bbox intersections; in this case concatenate names
and descriptions, however in a way that the related sources become traceable. The extent AuthorityCode is dropped.

<details><summary> Example for a BoundCRS where the CRS and CT extents overlap, <code>BoundProjected:EPSG::23031_EPSG::1311</code>.</summary>

````json
{
  "PreferredUsage": {
    "Extent": {
      "BoundingBoxEastBoundLongitude": 6.01,
      "BoundingBoxNorthBoundLatitude": 63.89,
      "BoundingBoxSouthBoundLatitude": 47.42,
      "BoundingBoxWestBoundLongitude": 0.0,
      "Description": "Description intersection between CRS and CT 'Europe - between 0\u00b0E and 6\u00b0E - Andorra; Denmark (North Sea); Germany offshore; Netherlands offshore; Norway including Svalbard - onshore and offshore; Spain - onshore (mainland and Balearic Islands); United Kingdom (UKCS) offshore.' (CRS) and 'Denmark - offshore North Sea; Ireland - offshore; Netherlands - offshore; United Kingdom - UKCS offshore.' (CT) [1634,2342]",
      "Name": "Extent intersection between CRS and CT 'Europe - 0\u00b0E to 6\u00b0E and ED50 by country' (CRS) and 'Europe - common offshore' (CT) [1634,2342]"
    },
    "Name": "Usage intersection between CRS and CT 'Europe - 0\u00b0E to 6\u00b0E and ED50 by country' (CRS) and 'Europe - common offshore' (CT) [6394,8232]",
    "Scope": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1142
      },
      "Name": "Engineering survey, topographic mapping."
    }
  }
}
````

</details>

**_Case 5:_** BoundCRSs with non-overlapping extents contributed by CRS and CT - in this case take the CRS extent, but
note the fact in the PreferredUsage name: `(from coordinate reference system, no overlap with transformation)`.

<details><summary> Example for a BoundCRS where the CRS and CT do not overlap <code>BoundGeographic2D:EPSG::4201_EPSG::1104</code></summary>

````json
{
  "PreferredUsage": {
    "Extent": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1271
      },
      "BoundingBoxEastBoundLongitude": 47.99,
      "BoundingBoxNorthBoundLatitude": 22.24,
      "BoundingBoxSouthBoundLatitude": 3.4,
      "BoundingBoxWestBoundLongitude": 21.82,
      "Description": "Eritrea; Ethiopia; South Sudan; Sudan.",
      "Name": "Africa - Eritrea, Ethiopia, South Sudan and Sudan"
    },
    "Name": "Africa - Eritrea, Ethiopia, South Sudan and Sudan (from coordinate reference system, no overlap with transformation)",
    "Scope": {
      "AuthorityCode": {
        "Authority": "EPSG",
        "Code": 1027
      },
      "Name": "Geodesy."
    }
  }
}
````

</details>

[Back to TOC](#TOC)

### Wgs84Coordinates

The extent of a CoordinateReferenceSystem is added as GeoJSON in `data.Wgs84Coordinates`. An example
with [illustration is provided here](CoordinateTransformation.1.0.0.md#polygons).

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)