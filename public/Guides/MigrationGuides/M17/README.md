<a name="TOC"></a>

[[_TOC_]]

# Milestone 17 Migration

---

# abstract Changes

* Extended [AbstractWPCGroupType:1.1.0](AbstractWPCGroupType.1.0.0.md), including
* extended [AbstractTechnicalAssurance:1.1.0](AbstractTechnicalAssurance.1.0.0.md), which in turn includes 
* extended [AbstractContact:1.1.0](AbstractContact.1.0.0.md).

---

# master-data Changes

* [HoleSection:1.2.0](HoleSection.1.1.0.md)
* [SeismicAcquisitionSurvey:1.3.0](SeismicAcquisitionSurvey.1.2.0.md)
* [SurveyProgram:1.1.0](SurveyProgram.1.0.0.md)
* [WellboreOpening:1.1.0](WellboreOpening.1.0.0.md)

---

# reference-data Changes

Patched schemas and value lists:

* [ActivityCode:1.0.1](ActivityCode.1.0.0.md) Governance change
* [CorePreservationType:1.0.1](CorePreservationType.1.0.0.md) PPDM
* [FluidRheologicalModelType:1.0.1](FluidRheologicalModelType.1.0.0.md) Governance change
* [FluidType:1.0.1](FluidType.1.0.0.md) Governance change
* [ImageLightingCondition:1.0.1](ImageLightingCondition.1.0.0.md) PPDM
* [PlugType:1.0.1](PlugType.1.0.0.md) Governance change
* [RiskCategory:1.0.1](RiskCategory.1.0.0.md) Governance change
* [RiskDiscipline:1.0.1](RiskDiscipline.1.0.0.md) Governance change
* [RiskHierarchyLevel:1.0.1](RiskHierarchyLevel.1.0.0.md) Governance change
* [RiskSubCategory:1.0.1](RiskSubCategory.1.0.0.md) Governance change
* [SeismicFaultType:1.0.1](SeismicFaultType.1.0.0.md) PPDM
* [SeismicGeometryType:1.0.1](SeismicGeometryType.1.0.0.md) 4D value deprecation
* [SeismicHorizonType:1.0.1](SeismicHorizonType.1.0.0.md) PPDM
* [SidewallCoreType:1.0.1](SidewallCoreType.1.0.0.md) PPDM
* [VelocityDirectionType:1.0.1](VelocityDirectionType.1.0.0.md) PPDM
* [WorkflowPersonaType:1.0.1](WorkflowPersonaType.1.0.0.md) TechnicalAssurance, now OPEN governance
* [WorkflowUsageType:1.0.1](WorkflowUsageType.1.0.0.md) TechnicalAssurance, now OPEN governance

---

# work-product-component Changes

All work-product-component entities are updated due to the changes in [AbstractWPCGroupType](AbstractWPCGroupType.1.0.0.md):

* [Activity.1.2.0](Activity.1.1.0.md) 
* [AquiferInterpretation.1.1.0](AquiferInterpretation.1.0.0.md) 
* [ColumnBasedTable.1.1.0](ColumnBasedTable.1.0.0.md) 
* [DataQuality.1.2.0](DataQuality.1.1.0.md) 
* [Document.1.1.0](Document.1.0.0.md) 
* [EarthModelInterpretation.1.1.0](EarthModelInterpretation.1.0.0.md) 
* [FaultInterpretation.1.1.0](FaultInterpretation.1.0.0.md) 
* [FaultSystem.1.3.0](FaultSystem.1.2.0.md) 
* [FluidBoundaryInterpretation.1.1.0](FluidBoundaryInterpretation.1.0.0.md) 
* [FormationIntegrityTest.1.1.0](FormationIntegrityTest.1.0.0.md) 
* [GenericImage.1.1.0](GenericImage.1.0.0.md) 
* [GenericProperty.1.1.0](GenericProperty.1.0.0.md) 
* [GenericRepresentation.1.1.0](GenericRepresentation.1.0.0.md) 
* [GeobodyBoundaryInterpretation.1.1.0](GeobodyBoundaryInterpretation.1.0.0.md) 
* [GeobodyInterpretation.1.1.0](GeobodyInterpretation.1.0.0.md) 
* [GeologicUnitOccurrenceInterpretation.1.1.0](GeologicUnitOccurrenceInterpretation.1.0.0.md) 
* [GeoReferencedImage.1.2.0](GeoReferencedImage.1.1.0.md) 
* [GpGridRepresentation.1.1.0](GpGridRepresentation.1.0.0.md) 
* [GridConnectionSetRepresentation.1.1.0](GridConnectionSetRepresentation.1.0.0.md) 
* [HorizonInterpretation.1.1.0](HorizonInterpretation.1.0.0.md) 
* [IjkGridNumericalAquiferRepresentation.1.1.0](IjkGridNumericalAquiferRepresentation.1.0.0.md) 
* [IjkGridRepresentation.1.1.0](IjkGridRepresentation.1.0.0.md) 
* [LocalBoundaryFeature.1.1.0](LocalBoundaryFeature.1.0.0.md) 
* [LocalModelCompoundCrs.1.1.0](LocalModelCompoundCrs.1.0.0.md) 
* [LocalModelFeature.1.1.0](LocalModelFeature.1.0.0.md) 
* [LocalRockVolumeFeature.1.1.0](LocalRockVolumeFeature.1.0.0.md) 
* [NotionalSeismicLine.1.1.0](NotionalSeismicLine.1.0.0.md) 
* [PersistedCollection.1.1.0](PersistedCollection.1.0.0.md) 
* [PlannedLithology.1.1.0](PlannedLithology.1.0.0.md) 
* [PPFGDataset.1.1.0](PPFGDataset.1.0.0.md) 
* [ProcessedInSAR.1.1.0](ProcessedInSAR.1.0.0.md) 
* [ReservoirCompartmentInterpretation.1.1.0](ReservoirCompartmentInterpretation.1.0.0.md) 
* [RockFluidOrganizationInterpretation.1.1.0](RockFluidOrganizationInterpretation.1.0.0.md) 
* [RockFluidUnitInterpretation.1.1.0](RockFluidUnitInterpretation.1.0.0.md) 
* [RockImage.1.1.0](RockImage.1.0.0.md) 
* [RockSampleAnalysis.1.2.0](RockSampleAnalysis.1.1.0.md) 
* [SealedSurfaceFramework.1.1.0](SealedSurfaceFramework.1.0.0.md) 
* [SealedVolumeFramework.1.1.0](SealedVolumeFramework.1.0.0.md) 
* [SeismicBinGrid.1.2.0](SeismicBinGrid.1.1.0.md) 
* [SeismicFault.1.1.0](SeismicFault.1.0.0.md) 
* [SeismicHorizon.1.2.0](SeismicHorizon.1.1.0.md) 
* [SeismicLineGeometry.1.1.0](SeismicLineGeometry.1.0.0.md) 
* [SeismicTraceData.1.4.0](SeismicTraceData.1.3.0.md) 
* [StratigraphicColumn.1.1.0](StratigraphicColumn.1.0.0.md) 
* [StratigraphicColumnRankInterpretation.1.2.0](StratigraphicColumnRankInterpretation.1.1.0.md) 
* [StratigraphicUnitInterpretation.1.1.0](StratigraphicUnitInterpretation.1.0.0.md) 
* [StructuralOrganizationInterpretation.1.1.0](StructuralOrganizationInterpretation.1.0.0.md) 
* [SubRepresentation.1.1.0](SubRepresentation.1.0.0.md) 
* [TimeSeries.1.1.0](TimeSeries.1.0.0.md) 
* [TubularAssembly.1.1.0](TubularAssembly.1.0.0.md) 
* [TubularComponent.1.2.0](TubularComponent.1.1.0.md) 
* [TubularUmbilical.1.1.0](TubularUmbilical.1.0.0.md) 
* [UnsealedSurfaceFramework.1.2.0](UnsealedSurfaceFramework.1.1.0.md) 
* [UnstructuredColumnLayerGridRepresentation.1.1.0](UnstructuredColumnLayerGridRepresentation.1.0.0.md) 
* [UnstructuredGridRepresentation.1.1.0](UnstructuredGridRepresentation.1.0.0.md) 
* [VelocityModeling.1.2.0](VelocityModeling.1.1.0.md) 
* [VoidageGroupInterpretation.1.1.0](VoidageGroupInterpretation.1.0.0.md) 
* [WellboreIntervalSet.1.1.0](WellboreIntervalSet.1.0.0.md) 
* [WellboreMarkerSet.1.3.0](WellboreMarkerSet.1.2.1.md) 
* [WellboreTrajectory.1.2.0](WellboreTrajectory.1.1.0.md) 
* [WellLog.1.3.0](WellLog.1.2.0.md)

---

# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
