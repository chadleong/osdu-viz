# Migration and Adoption of `osdu:wks:AbstractSpatialLocation:1.1.0`

[`AbstractSpatialLocation:1.0.0`](../../../E-R/abstract/AbstractSpatialLocation.1.0.0.md) upgrades to
[`AbstractSpatialLocation:1.1.0`](../../../E-R/abstract/AbstractSpatialLocation.1.1.0.md).

It includes [`AbstractAnyCrsFeatureCollection:1.1.0`](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md),
which got extended by one property `VerticalUnitID`. This triggers an update chain:

* [`AbstractAnyCrsFeatureCollection:1.1.0`](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md) - the main
  cause for this change. It is included by:
    * [`AbstractSpatialLocation:1.1.0`](../../../E-R/abstract/AbstractSpatialLocation.1.1.0.md), which is included by
        * [`AbstractMasterData:1.1.0`](../../../E-R/abstract/AbstractMaster.1.1.0.md)
        * [`AbstractWorkProductComponent:1.1.0`](../../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md)

Details in [Migration Guide for `AbstractAnyCrsFeatureCollection:1.1.0`](AbstractAnyCrsFeatureCollection.1.0.0.md)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
