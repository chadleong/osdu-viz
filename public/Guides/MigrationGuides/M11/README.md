# Milestone 11 Migration

## Indexing Hint Changes:

* [`osdu:wks:AbstractBusinessRule:1.0.0`](AbstractBusinessRule.1.0.0.md) indexing hints were
  changed. The arrays are now indexed as 'nested'. Re-indexing records of
  kind `osdu:wks:work-product-component--DataQuality:1.0.0` is required to enable queries with logical expressions.
* **Action:**
  * Re-index all `osdu:wks:work-product-component--DataQuality:1.0.0` records

## Support for Hierarchical Organisations

* Migration of [Organisation.1.0.0 to Organisation.1.1.0](Organisation.1.0.0.md)

## Integrating Seismic and Earth Modelling

The following schema revisions were done to support relationships to interpretations in Earth Modelling and to include
seismic interpretation representation artefacts in unsealed surface frameworks:

1. Migration of [FaultSystem.1.0.0 to FaultSystem.1.1.0](FaultSystem.1.0.0.md)
2. Migration of [SeismicHorizon.1.0.0 to SeismicHorizon.1.1.0](SeismicHorizon.1.0.0.md)
3. New type [SeismicFault.1.0.0](../../../E-R/work-product-component/SeismicFault.1.0.0.md)
4. Migration of [UnsealedSurfaceFramework.1.0.0 to UnsealedSurfaceFramework.1.1.0](UnsealedSurfaceFramework.1.0.0.md)

## Integrating Wellbore and Earth Modelling

The following schema revisions were done to support relationships to interpretations in Earth Modelling, and
stratigraphy:

1. the inclusion of `reference-data--ChronoStratigraphy` from `StratigraphicColumnRankInterpretation`, 
   [see details](StratigraphicColumnRankInterpretation.1.0.0.md).
2. Migration of [WellboreMarkerSet.1.1.0 to WellboreMarkerSet.1.2.0](./WellboreMarkerSet.1.1.0.md).

## Updates to WellLog

The `osdu:wks:work-product-component--WellLog:1.1.0` schema has been augmented with new properties to fully support LAS
and DLIS/LIS curves and descriptions. Details in the [specific migration page](WellLog.1.1.0.md) and in 
[WorkedExamples](../../../Examples/WorkedExamples/WellLog/README.md).

# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)