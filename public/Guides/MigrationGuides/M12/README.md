# Milestone 12 Migration

## AbstractAnyCrsFeatureCollection

The `AbstractAnyCrsFeatureCollection:1.0.0` lacked a reference value relationship to UnitOfMeasure in case the
GeoJSON-like data structure contained a third coordinate and no VerticalCoordinateReferenceSystemID was providing this
information. Following the semantic versioning rules, a new property requires an incremented minor version number, i.e.,
`AbstractAnyCrsFeatureCollection:1.1.0`.

More details in 

## CoordinateReferenceSystem

1. `CoordinateReferenceSystems:1.0.0` lacks `Extent.Description`, which holds usually the list of countries and areas,
   in which the CRS is applicable. The property is present in `CoordinateTransformation:1.0.0` but was forgotten for CRS
   by mistake. [details here](CoordinateReferenceSystem.1.0.0.md).
2. Since `CoordinateReferenceSystem:1.1.0` is created, the entity can also be enabled for spatial discovery by adding a
   Wgs84Coordinates including the
   GeoJSON [AbstractFeatureCollection](../../../E-R/abstract/AbstractFeatureCollection.1.0.0.md).
   More [details here](CoordinateReferenceSystem.1.0.0.md).

## CoordinateTransformation

[CoordinateTransformation:1.1.0](../../../E-R/reference-data/CoordinateTransformation.1.1.0.md) is created to support
spatial discovery of transformations. More [details here](CoordinateTransformation.1.0.0.md).

## AbstractFacilityVerticalMeasurement

The schema fragment got extended by a `VerticalReferenceEntityID` indicating where to look for the 
`VerticalReferenceID`. Further details on this [migration page](AbstractFacilityVerticalMeasurement.1.0.0.md).

## Technical Assurance Revision

Further details about the revision of Technical Assurance (introduced in M10) in these pages:
* [AbstractCommonResources:1.0.0](AbstractCommonResources.1.0.0.md) — deprecation of `TechnicalAssuranceID`
* [AbstractMaster:1.0.0 and 1.1.0](AbstractMaster.1.0.0.md) — added `TechnicalAssuranceTypeID`
* [AbstractWPCGroupType:1.0.0](AbstractWPCGroupType.1.0.0.md) - added array of `TechnicalAssurances[]`

## MaterialType Deprecation

MaterialType has been used for different purposes leaving us with a mixture of well product types and tubular materials.
This is cleaned up by adding a new version for `work-product-component--TubularComponent:1.1.0`,
[details here](TubularComponent.1.0.0.md).

## DataQuality schema changes

The previously defined Data Quality related schemas in OSDU have been updated to include certain additional attributes
to make the Business rule creation, execution, and score generation workflows suitable for broader use cases.

1. Migration of [AbstractQualityMetric.1.0.0 to AbstractQualityMetric.1.1.0](AbstractQualityMetric.1.0.0.md)
2. Migration of [QualityDataRule.1.0.0 to QualityDataRule.1.1.0](QualityDataRule.1.0.0.md) with inclusion of NEW reference-data type [DataRuleDimensionType.1.0.0](../../../E-R/reference-data/DataRuleDimensionType.1.0.0.md)
4. Migration of [QualityDataRuleSet.1.0.0 to QualityDataRuleSet.2.0.0](QualityDataRuleSet.1.0.0.md)
5. Migration of [DataQuality.1.0.0 to DataQuality.1.1.0](DataQuality.1.0.0.md)

Details of the overall usage of different Data Quality schemas are available in [WorkedExamples](../../../Examples/WorkedExamples/DataQuality/README.md).

## Well Status and Classification

The alignment with PPDM Well Status and Classification led to the following extensions and migrations

### Well

Migration instructions [`Well:1.0.0` to `Well:1.1.0`](Well.1.0.0.md).

### Wellbore

Migration instructions [`Wellbore:1.0.0` to `Wellbore:1.1.0`](Wellbore.1.0.0.md).

### Reference Values, Migration Instructions

1. **_Governance Change:_** 
   1. [`PlayType:1.0.0`](PlayType.1.0.0.md);
   2. [`WellboreTrajectoryType`](WellboreTrajectoryType.1.0.0.md)
2. **_Value Changes_** and value migration 
   1. [`WellInterestType:1.0.0`](WellInterestType.1.0.0.md).
   2. Wellbore's `PrimaryMaterialTypeID` &rarr; [`MaterialType:1.0.0`](./WellProductType.1.0.0.md) superseded
      by `PrimaryProductTypeID` &rarr; [`WellProductType:1.0.0`](./WellProductType.1.0.0.md).

## VerticalMeasurements, References across Records

The `AbstractFacilityVerticalMeasurement` has been augmented with a new relationship, `VerticalReferenceEntityID`, to
the 'parent' record, which contains the `data.VerticalMeasurement[]` element with `VerticalMeasurementID`
== `VerticalReferenceEntityID`.

Further information in [`AbstractFacilityVerticalMeasurement:1.0.0`](AbstractFacilityVerticalMeasurement.1.0.0.md).

## Seismic Domain, VSP Acquisition

A new minor version of SeismicAcquisitionSurvey is provided supporting the Vertical Seismic Profiling with relationships
to source and receiver configurations relating to wellbores. Details about the additional properties can be found in 
this [SeismicAcquisitionSurvey migration page](./SeismicAcquisitionSurvey.1.1.0.md).


# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
