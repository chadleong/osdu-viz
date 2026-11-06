[[_TOC_]]

# Indexing Hint Changes

M10 changes the indexing hints
for [`osdu:wks:AbstractWorkProductComponent:1.0.0`](../../../E-R/abstract/AbstractWorkProductComponent.1.0.0.md):

* `data.GeoContexts[]` changes from `flattened` to `nested` for better scoped search responses.

# Migration

In order to become effective, the records including the `AbstractWorkProductComponent` fragment must be re-indexed.

## Entities to be Re-indexed

|Usage Kind|Target Entity|Target Property|Cardinality|Note|
|-----|-----|-----|-----|-----|
| Included by | [Activity.1.0.0](../../../E-R/work-product-component/Activity.1.0.0.md) | allOf | one |  |
| Included by | [DataQuality.1.0.0](../../../E-R/work-product-component/DataQuality.1.0.0.md) | allOf | one |  |
| Included by | [Document.1.0.0](../../../E-R/work-product-component/Document.1.0.0.md) | allOf | one |  |
| Included by | [FaultSystem.1.0.0](../../../E-R/work-product-component/FaultSystem.1.0.0.md) | allOf | one |  |
| Included by | [NotionalSeismicLine.1.0.0](../../../E-R/work-product-component/NotionalSeismicLine.1.0.0.md) | allOf | one |  |
| Included by | [PPFGDataset.1.0.0](../../../E-R/work-product-component/PPFGDataset.1.0.0.md) | allOf | one |  |
| Included by | [PersistedCollection.1.0.0](../../../E-R/work-product-component/PersistedCollection.1.0.0.md) | allOf | one |  |
| Included by | [SeismicBinGrid.1.0.0](../../../E-R/work-product-component/SeismicBinGrid.1.0.0.md) | allOf | one |  |
| Included by | [SeismicHorizon.1.0.0](../../../E-R/work-product-component/SeismicHorizon.1.0.0.md) | allOf | one |  |
| Included by | [SeismicLineGeometry.1.0.0](../../../E-R/work-product-component/SeismicLineGeometry.1.0.0.md) | allOf | one |  |
| Included by | [SeismicTraceData.1.0.0](../../../E-R/work-product-component/SeismicTraceData.1.0.0.md) | allOf | one |  |
| Included by | [TubularAssembly.1.0.0](../../../E-R/work-product-component/TubularAssembly.1.0.0.md) | allOf | one |  |
| Included by | [TubularComponent.1.0.0](../../../E-R/work-product-component/TubularComponent.1.0.0.md) | allOf | one |  |
| Included by | [TubularUmbilical.1.0.0](../../../E-R/work-product-component/TubularUmbilical.1.0.0.md) | allOf | one |  |
| Included by | [VelocityModeling.1.0.0](../../../E-R/work-product-component/VelocityModeling.1.0.0.md) | allOf | one |  |
| Included by | [WellLog.1.0.0](../../../E-R/work-product-component/WellLog.1.0.0.md) | allOf | one |  |
| Included by | [WellLog.1.1.0](../../../E-R/work-product-component/WellLog.1.1.0.md) | allOf | one |  |
| Included by | [WellboreMarkerSet.1.0.0](../../../E-R/work-product-component/WellboreMarkerSet.1.0.0.md) | allOf | one |  |
| Included by | [WellboreMarkerSet.1.1.0](../../../E-R/work-product-component/WellboreMarkerSet.1.1.0.md) | allOf | one |  |
| Included by | [WellboreTrajectory.1.0.0](../../../E-R/work-product-component/WellboreTrajectory.1.0.0.md) | allOf | one |  |
| Included by | [WellboreTrajectory.1.1.0](../../../E-R/work-product-component/WellboreTrajectory.1.1.0.md) | allOf | one |  |

## Adjust Queries

Search queries will have to be adapted from flattened
([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#flattened-query))
to nested syntax ([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#nested-query)).

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)