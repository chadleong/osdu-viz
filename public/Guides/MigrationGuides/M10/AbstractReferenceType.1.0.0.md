<a name="TOC"></a>

[[_TOC_]]

# Indexing Hint Changes

M10 changes the indexing hints for [`osdu:wks:AbstractReferenceType:1.0.0`](../../../E-R/abstract/AbstractReferenceType.1.0.0.md):

* `data.NameAlias[]` changes from `flattened` to `nested` for better scoped search responses.

# Migration to `osdu:wks:AbstractReferenceType:1.0.0`

In order to become effective, the records including the `AbstractReferenceType` fragment must be re-indexed.

## Entities to be Re-indexed

|Usage Kind|Target Entity|Target Property|Cardinality|Note|
|-----|-----|-----|-----|-----|
| Included by | [ActivityType.1.0.0](../../../E-R/reference-data/ActivityType.1.0.0.md) | allOf | one |  |
| Included by | [ActualIndicatorType.1.0.0](../../../E-R/reference-data/ActualIndicatorType.1.0.0.md) | allOf | one |  |
| Included by | [AgreementType.1.0.0](../../../E-R/reference-data/AgreementType.1.0.0.md) | allOf | one |  |
| Included by | [AliasNameType.1.0.0](../../../E-R/reference-data/AliasNameType.1.0.0.md) | allOf | one |  |
| Included by | [AliasNameTypeClass.1.0.0](../../../E-R/reference-data/AliasNameTypeClass.1.0.0.md) | allOf | one |  |
| Included by | [AnisotropyType.1.0.0](../../../E-R/reference-data/AnisotropyType.1.0.0.md) | allOf | one |  |
| Included by | [ArtefactRole.1.0.0](../../../E-R/reference-data/ArtefactRole.1.0.0.md) | allOf | one |  |
| Included by | [ArtificialLiftType.1.0.0](../../../E-R/reference-data/ArtificialLiftType.1.0.0.md) | allOf | one |  |
| Included by | [AzimuthReferenceType.1.0.0](../../../E-R/reference-data/AzimuthReferenceType.1.0.0.md) | allOf | one |  |
| Included by | [BasinType.1.0.0](../../../E-R/reference-data/BasinType.1.0.0.md) | allOf | one |  |
| Included by | [BinGridDefinitionMethodType.1.0.0](../../../E-R/reference-data/BinGridDefinitionMethodType.1.0.0.md) | allOf | one |  |
| Included by | [CalculationMethodType.1.0.0](../../../E-R/reference-data/CalculationMethodType.1.0.0.md) | allOf | one |  |
| Included by | [CollectionPurpose.1.0.0](../../../E-R/reference-data/CollectionPurpose.1.0.0.md) | allOf | one |  |
| Included by | [CompressionMethodType.1.0.0](../../../E-R/reference-data/CompressionMethodType.1.0.0.md) | allOf | one |  |
| Included by | [ContractorType.1.0.0](../../../E-R/reference-data/ContractorType.1.0.0.md) | allOf | one |  |
| Included by | [CoordinateReferenceSystem.1.0.0](../../../E-R/reference-data/CoordinateReferenceSystem.1.0.0.md) | allOf | one |  |
| Included by | [CoordinateTransformation.1.0.0](../../../E-R/reference-data/CoordinateTransformation.1.0.0.md) | allOf | one |  |
| Included by | [Currency.1.0.0](../../../E-R/reference-data/Currency.1.0.0.md) | allOf | one |  |
| Included by | [CurveIndexDimensionType.1.0.0](../../../E-R/reference-data/CurveIndexDimensionType.1.0.0.md) | allOf | one |  |
| Included by | [DataRulePurposeType.1.0.0](../../../E-R/reference-data/DataRulePurposeType.1.0.0.md) | allOf | one |  |
| Included by | [DimensionType.1.0.0](../../../E-R/reference-data/DimensionType.1.0.0.md) | allOf | one |  |
| Included by | [DiscretisationSchemeType.1.0.0](../../../E-R/reference-data/DiscretisationSchemeType.1.0.0.md) | allOf | one |  |
| Included by | [DocumentType.1.0.0](../../../E-R/reference-data/DocumentType.1.0.0.md) | allOf | one |  |
| Included by | [DrillingReasonType.1.0.0](../../../E-R/reference-data/DrillingReasonType.1.0.0.md) | allOf | one |  |
| Included by | [EncodingFormatType.1.0.0](../../../E-R/reference-data/EncodingFormatType.1.0.0.md) | allOf | one |  |
| Included by | [ExistenceKind.1.0.0](../../../E-R/reference-data/ExistenceKind.1.0.0.md) | allOf | one |  |
| Included by | [FacilityEventType.1.0.0](../../../E-R/reference-data/FacilityEventType.1.0.0.md) | allOf | one |  |
| Included by | [FacilityStateType.1.0.0](../../../E-R/reference-data/FacilityStateType.1.0.0.md) | allOf | one |  |
| Included by | [FacilityType.1.0.0](../../../E-R/reference-data/FacilityType.1.0.0.md) | allOf | one |  |
| Included by | [FeatureType.1.0.0](../../../E-R/reference-data/FeatureType.1.0.0.md) | allOf | one |  |
| Included by | [GeoPoliticalEntityType.1.0.0](../../../E-R/reference-data/GeoPoliticalEntityType.1.0.0.md) | allOf | one |  |
| Included by | [GeologicalFormation.1.0.0](../../../E-R/reference-data/GeologicalFormation.1.0.0.md) | allOf | one |  |
| Included by | [HeaderKeyName.1.0.0](../../../E-R/reference-data/HeaderKeyName.1.0.0.md) | allOf | one |  |
| Included by | [InterpolationMethod.1.0.0](../../../E-R/reference-data/InterpolationMethod.1.0.0.md) | allOf | one |  |
| Included by | [LegalStatus.1.0.0](../../../E-R/reference-data/LegalStatus.1.0.0.md) | allOf | one |  |
| Included by | [LicenseState.1.0.0](../../../E-R/reference-data/LicenseState.1.0.0.md) | allOf | one |  |
| Included by | [LineageRelationshipType.1.0.0](../../../E-R/reference-data/LineageRelationshipType.1.0.0.md) | allOf | one |  |
| Included by | [LinerType.1.0.0](../../../E-R/reference-data/LinerType.1.0.0.md) | allOf | one |  |
| Included by | [LogCurveBusinessValue.1.0.0](../../../E-R/reference-data/LogCurveBusinessValue.1.0.0.md) | allOf | one |  |
| Included by | [LogCurveFamily.1.0.0](../../../E-R/reference-data/LogCurveFamily.1.0.0.md) | allOf | one |  |
| Included by | [LogCurveMainFamily.1.0.0](../../../E-R/reference-data/LogCurveMainFamily.1.0.0.md) | allOf | one |  |
| Included by | [LogCurveType.1.0.0](../../../E-R/reference-data/LogCurveType.1.0.0.md) | allOf | one |  |
| Included by | [LogType.1.0.0](../../../E-R/reference-data/LogType.1.0.0.md) | allOf | one |  |
| Included by | [MarkerPropertyType.1.0.0](../../../E-R/reference-data/MarkerPropertyType.1.0.0.md) | allOf | one |  |
| Included by | [MarkerType.1.0.0](../../../E-R/reference-data/MarkerType.1.0.0.md) | allOf | one |  |
| Included by | [MaterialType.1.0.0](../../../E-R/reference-data/MaterialType.1.0.0.md) | allOf | one |  |
| Included by | [OSDUJsonExtensions.1.0.0](../../../E-R/reference-data/OSDUJsonExtensions.1.0.0.md) | allOf | one |  |
| Included by | [OSDURegion.1.0.0](../../../E-R/reference-data/OSDURegion.1.0.0.md) | allOf | one |  |
| Included by | [ObjectiveType.1.0.0](../../../E-R/reference-data/ObjectiveType.1.0.0.md) | allOf | one |  |
| Included by | [ObligationType.1.0.0](../../../E-R/reference-data/ObligationType.1.0.0.md) | allOf | one |  |
| Included by | [OperatingEnvironment.1.0.0](../../../E-R/reference-data/OperatingEnvironment.1.0.0.md) | allOf | one |  |
| Included by | [OrganisationType.1.0.0](../../../E-R/reference-data/OrganisationType.1.0.0.md) | allOf | one |  |
| Included by | [PPFGContextType.1.0.0](../../../E-R/reference-data/PPFGContextType.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveFamily.1.0.0](../../../E-R/reference-data/PPFGCurveFamily.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveLithoType.1.0.0](../../../E-R/reference-data/PPFGCurveLithoType.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveMainFamily.1.0.0](../../../E-R/reference-data/PPFGCurveMainFamily.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveMnemonic.1.0.0](../../../E-R/reference-data/PPFGCurveMnemonic.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveProbability.1.0.0](../../../E-R/reference-data/PPFGCurveProbability.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveProcessingType.1.0.0](../../../E-R/reference-data/PPFGCurveProcessingType.1.0.0.md) | allOf | one |  |
| Included by | [PPFGCurveTransformModelType.1.0.0](../../../E-R/reference-data/PPFGCurveTransformModelType.1.0.0.md) | allOf | one |  |
| Included by | [ParameterKind.1.0.0](../../../E-R/reference-data/ParameterKind.1.0.0.md) | allOf | one |  |
| Included by | [ParameterRole.1.0.0](../../../E-R/reference-data/ParameterRole.1.0.0.md) | allOf | one |  |
| Included by | [ParameterType.1.0.0](../../../E-R/reference-data/ParameterType.1.0.0.md) | allOf | one |  |
| Included by | [PetroleumSystemElementType.1.0.0](../../../E-R/reference-data/PetroleumSystemElementType.1.0.0.md) | allOf | one |  |
| Included by | [PlayType.1.0.0](../../../E-R/reference-data/PlayType.1.0.0.md) | allOf | one |  |
| Included by | [ProcessingParameterType.1.0.0](../../../E-R/reference-data/ProcessingParameterType.1.0.0.md) | allOf | one |  |
| Included by | [ProjectRole.1.0.0](../../../E-R/reference-data/ProjectRole.1.0.0.md) | allOf | one |  |
| Included by | [ProjectStateType.1.0.0](../../../E-R/reference-data/ProjectStateType.1.0.0.md) | allOf | one |  |
| Included by | [PropertyFieldRepresentationType.1.0.0](../../../E-R/reference-data/PropertyFieldRepresentationType.1.0.0.md) | allOf | one |  |
| Included by | [PropertyNameType.1.0.0](../../../E-R/reference-data/PropertyNameType.1.0.0.md) | allOf | one |  |
| Included by | [PropertyType.1.0.0](../../../E-R/reference-data/PropertyType.1.0.0.md) | allOf | one |  |
| Included by | [ProspectType.1.0.0](../../../E-R/reference-data/ProspectType.1.0.0.md) | allOf | one |  |
| Included by | [QualitativeSpatialAccuracyType.1.0.0](../../../E-R/reference-data/QualitativeSpatialAccuracyType.1.0.0.md) | allOf | one |  |
| Included by | [QualityDataRule.1.0.0](../../../E-R/reference-data/QualityDataRule.1.0.0.md) | allOf | one |  |
| Included by | [QuantitativeAccuracyBand.1.0.0](../../../E-R/reference-data/QuantitativeAccuracyBand.1.0.0.md) | allOf | one |  |
| Included by | [ResourceCurationStatus.1.0.0](../../../E-R/reference-data/ResourceCurationStatus.1.0.0.md) | allOf | one |  |
| Included by | [ResourceLifecycleStatus.1.0.0](../../../E-R/reference-data/ResourceLifecycleStatus.1.0.0.md) | allOf | one |  |
| Included by | [ResourceSecurityClassification.1.0.0](../../../E-R/reference-data/ResourceSecurityClassification.1.0.0.md) | allOf | one |  |
| Included by | [SchemaFormatType.1.0.0](../../../E-R/reference-data/SchemaFormatType.1.0.0.md) | allOf | one |  |
| Included by | [SectionType.1.0.0](../../../E-R/reference-data/SectionType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicAttributeType.1.0.0](../../../E-R/reference-data/SeismicAttributeType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicBinGridType.1.0.0](../../../E-R/reference-data/SeismicBinGridType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicDomainType.1.0.0](../../../E-R/reference-data/SeismicDomainType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicEnergySourceType.1.0.0](../../../E-R/reference-data/SeismicEnergySourceType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicFaultType.1.0.0](../../../E-R/reference-data/SeismicFaultType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicFilteringType.1.0.0](../../../E-R/reference-data/SeismicFilteringType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicGeometryType.1.0.0](../../../E-R/reference-data/SeismicGeometryType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicHorizonType.1.0.0](../../../E-R/reference-data/SeismicHorizonType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicMigrationType.1.0.0](../../../E-R/reference-data/SeismicMigrationType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicPickingType.1.0.0](../../../E-R/reference-data/SeismicPickingType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicProcessingStageType.1.0.0](../../../E-R/reference-data/SeismicProcessingStageType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicStackingType.1.0.0](../../../E-R/reference-data/SeismicStackingType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicTraceDataDimensionalityType.1.0.0](../../../E-R/reference-data/SeismicTraceDataDimensionalityType.1.0.0.md) | allOf | one |  |
| Included by | [SeismicWaveType.1.0.0](../../../E-R/reference-data/SeismicWaveType.1.0.0.md) | allOf | one |  |
| Included by | [SpatialGeometryType.1.0.0](../../../E-R/reference-data/SpatialGeometryType.1.0.0.md) | allOf | one |  |
| Included by | [SpatialParameterType.1.0.0](../../../E-R/reference-data/SpatialParameterType.1.0.0.md) | allOf | one |  |
| Included by | [StandardsOrganisation.1.0.0](../../../E-R/reference-data/StandardsOrganisation.1.0.0.md) | allOf | one |  |
| Included by | [StringClass.1.0.0](../../../E-R/reference-data/StringClass.1.0.0.md) | allOf | one |  |
| Included by | [SurveyToolType.1.0.0](../../../E-R/reference-data/SurveyToolType.1.0.0.md) | allOf | one |  |
| Included by | [TectonicSettingType.1.0.0](../../../E-R/reference-data/TectonicSettingType.1.0.0.md) | allOf | one |  |
| Included by | [TrajectoryStationPropertyType.1.0.0](../../../E-R/reference-data/TrajectoryStationPropertyType.1.0.0.md) | allOf | one |  |
| Included by | [TubularAssemblyStatusType.1.0.0](../../../E-R/reference-data/TubularAssemblyStatusType.1.0.0.md) | allOf | one |  |
| Included by | [TubularAssemblyType.1.0.0](../../../E-R/reference-data/TubularAssemblyType.1.0.0.md) | allOf | one |  |
| Included by | [TubularComponentConnectionType.1.0.0](../../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md) | allOf | one |  |
| Included by | [TubularComponentGrade.1.0.0](../../../E-R/reference-data/TubularComponentGrade.1.0.0.md) | allOf | one |  |
| Included by | [TubularComponentPinBoxType.1.0.0](../../../E-R/reference-data/TubularComponentPinBoxType.1.0.0.md) | allOf | one |  |
| Included by | [TubularComponentType.1.0.0](../../../E-R/reference-data/TubularComponentType.1.0.0.md) | allOf | one |  |
| Included by | [TubularUmbilicalServiceType.1.0.0](../../../E-R/reference-data/TubularUmbilicalServiceType.1.0.0.md) | allOf | one |  |
| Included by | [TubularUmbilicalType.1.0.0](../../../E-R/reference-data/TubularUmbilicalType.1.0.0.md) | allOf | one |  |
| Included by | [UnitOfMeasure.1.0.0](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md) | allOf | one |  |
| Included by | [UnitOfMeasureConfiguration.1.0.0](../../../E-R/reference-data/UnitOfMeasureConfiguration.1.0.0.md) | allOf | one |  |
| Included by | [UnitQuantity.1.0.0](../../../E-R/reference-data/UnitQuantity.1.0.0.md) | allOf | one |  |
| Included by | [VelocityAnalysisMethod.1.0.0](../../../E-R/reference-data/VelocityAnalysisMethod.1.0.0.md) | allOf | one |  |
| Included by | [VelocityDirectionType.1.0.0](../../../E-R/reference-data/VelocityDirectionType.1.0.0.md) | allOf | one |  |
| Included by | [VelocityType.1.0.0](../../../E-R/reference-data/VelocityType.1.0.0.md) | allOf | one |  |
| Included by | [VerticalMeasurementPath.1.0.0](../../../E-R/reference-data/VerticalMeasurementPath.1.0.0.md) | allOf | one |  |
| Included by | [VerticalMeasurementSource.1.0.0](../../../E-R/reference-data/VerticalMeasurementSource.1.0.0.md) | allOf | one |  |
| Included by | [VerticalMeasurementType.1.0.0](../../../E-R/reference-data/VerticalMeasurementType.1.0.0.md) | allOf | one |  |
| Included by | [WellInterestType.1.0.0](../../../E-R/reference-data/WellInterestType.1.0.0.md) | allOf | one |  |
| Included by | [WellLogSamplingDomainType.1.0.0](../../../E-R/reference-data/WellLogSamplingDomainType.1.0.0.md) | allOf | one |  |
| Included by | [WellboreTrajectoryType.1.0.0](../../../E-R/reference-data/WellboreTrajectoryType.1.0.0.md) | allOf | one |  |
| Included by | [WordFormatType.1.0.0](../../../E-R/reference-data/WordFormatType.1.0.0.md) | allOf | one |  |

[Back to TOC](#TOC)

# New CommitDate Property

M10 also adds a `CommitDate`, which is populated by OSDU governed and published reference values. This property is 
useful to optimize reference value content during milestone upgrades. **_No migration action required._**

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)