# Migration and Adoption of `osdu:wks:AbstractAnyCrsFeatureCollection:1.1.0`

## New Property for AbstractAnyCrsFeatureCollection:1.1.0

| Property             | Value Type                | Description | Migration Instructions |
|----------------------|---------------------------|-------------|------------------------|
|VerticalUnitID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)| string|The explicit vertical unit ID, referring to a reference-data--UnitOfMeasure record; this is only required for features containing 3-dimensional coordinates and undefined vertical CoordinateReferenceSystems; if a VerticalCoordinateReferenceSystemID is populated, the VerticalUnitID is given by the VerticalCoordinateReferenceSystemID's data.CoordinateSystem.VerticalAxisUnitID. The VerticalUnitID definition overrides any self-contained definition in persistableReferenceUnitZ.| Consider populating when needed, see **_"When is Action Required"_** below.|

Previously, in [AbstractAnyCrsFeatureCollection:1.0.0](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.0.0.md)
the unit context was defined via the `persistableReferenceUnitZ` property. The property continues to be part of the
schema, however, it is a clean OSDU platform intention to migrate to reference-value relationships instead of
self-contained CRS and UnitOfMeasure descriptions.

## Impact and Adoption

### Schema Fragment Inclusion

`AbstractAnyCrsFeatureCollection:1.1.0` is not directly included by 'storable' record schemas but via other schema
fragments. Each of those require an upgraded version to include new version.

* [`AbstractAnyCrsFeatureCollection:1.1.0`](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md) - the main
  cause for this change. It is included by:
    * [`AbstractSpatialLocation:1.1.0`](../../../E-R/abstract/AbstractSpatialLocation.1.1.0.md), which is included by
        * [`AbstractMasterData:1.1.0`](../../../E-R/abstract/AbstractMaster.1.1.0.md)
        * [`AbstractWorkProductComponent:1.1.0`](../../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md)

Strictly speaking, each storable entity, which includes `AbstractSpatialLocation`, i.e., all master-data and all
work-product-component types, will have to adopt the change sooner or later. OSDU has adopted an opportunistic upgrade
policy and will only include the new schema fragments, if other changes are made to the type in question.

The fundamental fragments like [`AbstractMasterData:1.1.0`](../../../E-R/abstract/AbstractMaster.1.1.0.md)
and [`AbstractWorkProductComponent:1.1.0`](../../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md) are prepared and
ready to be referred to.

Consumers and platform data owners can adopt the new property even if the schema doesn't define it yet.

**_Example:_** for Wellbore `data.ProjectedBottomHoleLocation.AsIngestedCoordinates.VerticalUnitID` should be set, if
the bottom hole location is indeed represented by a 3-dimensional point. Such additional properties are permitted since
the default for nested schemas is `"additionalProperties": true`.

### When is Action Required?

Action is only recommended when the (GeoJSON-like) data structure 
1. contains 3-dimensional coordinates, **_and_**
2. no vertical coordinate reference system is provided, which would define a unit for the vertical axis.

If both conditions are met, then the `persistableReferenceUnitZ` value should be migrated to a relationship to the
corresponding UnitOfMeasure in `VerticalUnitID`.

### No Action Required

No action is required for `AnyCrsFeatureCollection` spatial representations, which either
1. are 2-dimensional - then the unit context is given by the horizontal `CoordinateReferenceSystemID`
2. are 3-dimensional **_and_** `VerticalCoordinateReferenceSystemID` is populated with its axis unit context defined.

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
