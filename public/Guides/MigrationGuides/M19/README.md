<a name="TOC"></a>

[[_TOC_]]

# Milestone 19 Migration

## abstract

* Searchable Reviewers[], renamed (deprecated old/added new) properties `WorkflowPersonaTypeID`, `WorkflowUsageTypeID` (
  consistency) and added relationships to data quality rules and
  records: [AbstractTechnicalAssurance:1.2.0](abstract--AbstractTechnicalAssurance.1.1.0.md)
  * Include AbstractTechnicalAssurance:1.2.0 in [AbstractMaster:1.2.0](abstract--AbstractMaster.1.1.0.md)
  * Include AbstractTechnicalAssurance:1.2.0 in [AbstractWPCGroupType:1.2.0](abstract--AbstractWPCGroupType.1.1.0.md)
* Augmented [AbstractReferencePropertyType:1.2.0](abstract--AbstractReferencePropertyType.1.1.0.md) by a UnitOfMeasureID, which is consumed by
    * [AbstractColumnBasedTable:1.1.0](abstract--AbstractColumnBasedTable.1.0.0.md) 
* Changed to include compressed/uncompressed byte count &rarr; [AbstractCompressionInfo.1.0.0.md](abstract--AbstractCompressionInfo.1.0.0.md)
* Added an optional `MeanPossibleAge` property
  to [AbstractInterpretation:1.1.0](abstract--AbstractInterpretation.1.0.0.md). Since all work-product-components were
  updated, this change did not cause any extra schema version incrementation. Version 1.1.0 is included by:
    1. [`osdu:wks:work-product-component--AquiferInterpretation.1.2.0`](work-product-component--AquiferInterpretation.1.1.0.md)
    2. [`osdu:wks:work-product-component--EarthModelInterpretation.1.2.0`](work-product-component--EarthModelInterpretation.1.1.0.md)
    3. [`osdu:wks:work-product-component--FaultInterpretation.1.2.0`](work-product-component--FaultInterpretation.1.1.0.md)
    4. [`osdu:wks:work-product-component--FluidBoundaryInterpretation.1.2.0`](work-product-component--FluidBoundaryInterpretation.1.1.0.md)
    5. [`osdu:wks:work-product-component--GeobodyBoundaryInterpretation.1.2.0`](work-product-component--GeobodyBoundaryInterpretation.1.1.0.md)
    6. [`osdu:wks:work-product-component--GeobodyInterpretation.1.2.0`](work-product-component--GeobodyInterpretation.1.1.0.md)
    7. [`osdu:wks:work-product-component--GeologicUnitOccurrenceInterpretation.1.2.0`](work-product-component--GeologicUnitOccurrenceInterpretation.1.1.0.md)
    8. [`osdu:wks:work-product-component--HorizonInterpretation.1.2.0`](work-product-component--HorizonInterpretation.1.1.0.md)
    9. [`osdu:wks:work-product-component--ReservoirCompartmentInterpretation.1.2.0`](work-product-component--ReservoirCompartmentInterpretation.1.1.0.md)
    10. [`osdu:wks:work-product-component--RockFluidOrganizationInterpretation.1.2.0`](work-product-component--RockFluidOrganizationInterpretation.1.1.0.md)
    11. [`osdu:wks:work-product-component--RockFluidUnitInterpretation.1.2.0`](work-product-component--RockFluidUnitInterpretation.1.1.0.md)
    12. [`osdu:wks:work-product-component--StratigraphicColumnRankInterpretation.1.3.0`](work-product-component--StratigraphicColumnRankInterpretation.1.2.0.md)
    13. [`osdu:wks:work-product-component--StratigraphicUnitInterpretation.1.2.0`](work-product-component--StratigraphicUnitInterpretation.1.1.0.md)
    14. [`osdu:wks:work-product-component--StructuralOrganizationInterpretation.1.2.0`](work-product-component--StructuralOrganizationInterpretation.1.1.0.md)
    15. [`osdu:wks:work-product-component--VoidageGroupInterpretation.1.2.0`](work-product-component--VoidageGroupInterpretation.1.1.0.md)

---

[Back to TOC](#TOC)

## dataset

* include AbstractCompressionInfo:1.1.0 and some new properties &rarr; [FileCollection.Bluware.OpenVDS.1.0.0.md](dataset--FileCollection.Bluware.OpenVDS.1.0.0.md) as well as the new [AbstractSeismicPrecision](../../../E-R/abstract/AbstractSeismicPrecision.1.0.0.md).
* include AbstractCompressionInfo:1.1.0 &rarr; [FileCollection.SEGD.1.0.0.md](dataset--FileCollection.SEGD.1.0.0.md)
* include AbstractCompressionInfo:1.1.0 &rarr; [FileCollection.SEGY.1.0.0.md](dataset--FileCollection.SEGY.1.0.0.md)
* include AbstractCompressionInfo:1.1.0 &rarr; [FileCollection.Slb.OpenZGY.1.0.0.md](dataset--FileCollection.Slb.OpenZGY.1.0.0.md)  as well as the new [AbstractSeismicPrecision](../../../E-R/abstract/AbstractSeismicPrecision.1.0.0.md).

---

[Back to TOC](#TOC)

## master-data

* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ActivityPlan.1.2.0](master-data--ActivityPlan.1.1.0.md) &mdash; _Information about a series of well-planning activities._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ActivityTemplate.1.1.0](master-data--ActivityTemplate.1.0.0.md) &mdash; _Description of one type of activity, e.g., a work-step in a workflow._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ActivityTemplateArc.1.1.0](master-data--ActivityTemplateArc.1.0.0.md) &mdash; _An 'arc' establishing a link between ActivityTemplate output and input parameters._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Agreement.1.1.0](master-data--Agreement.1.0.0.md) &mdash; _A contract or other covenant between Company and counterparties which is relevant to the data universe because it includes terms governing use of data._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Basin.1.1.0](master-data--Basin.1.0.0.md) &mdash; _A natural geographic area covering a single depositional system._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [BHARun.1.1.0](master-data--BHARun.1.0.0.md) &mdash; _A single bottom hole assembly run. This represents the period beginning when the BHA enters the hole until it leaves the hole._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [BoundaryFeature.1.1.0](master-data--BoundaryFeature.1.0.0.md) &mdash; _An interface between two geological objects, such as horizons and faults. It is a surface object._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [CasingDesign.1.1.0](master-data--CasingDesign.1.0.0.md) &mdash; _The design of the Casing in a wellbore_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ConnectedSourceDataJob.1.4.0](master-data--ConnectedSourceDataJob.1.3.0.md) &mdash; _Scheduling, data fetch, and ingestion configuration for automated jobs against a registered connected data source._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ConnectedSourceRegistryEntry.1.3.0](master-data--ConnectedSourceRegistryEntry.1.2.0.md) &mdash; _System-level object containing business and technical metadata for an external OSDU-compliant data source, used for registration of that source within the OSDU external data framework._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Coring.1.1.0](master-data--Coring.1.0.0.md) &mdash; _The activity of acquiring a core from within a wellbore. The two predominant types are by drilling, or by sidewall. In drilling a cylindrical sample of rock is collected using a core bit in conjunction with a core barrel and core catcher. Sidewall cores are taken from the side of the borehole, usually by a wireline tool. Sidewall cores may be taken using percussion or mechanical drilling._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [EvaluationPlan.1.1.0](master-data--EvaluationPlan.1.0.0.md) &mdash; _A planned evaluation on a drilling operation_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Field.1.1.0](master-data--Field.1.0.0.md) &mdash; _A mineral deposit that has been exploited for commercial purposes._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [FluidsProgram.1.1.0](master-data--FluidsProgram.1.0.0.md) &mdash; _The planned drilling fluid program per hole section or depth interval._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [FluidsReport.1.2.0](master-data--FluidsReport.1.1.0.md) &mdash; _Used to capture an analysis of the drilling mud, completion fluid or other fluids pumped during well construction. Printed snapshots, e.g. PDF files, are captured as work-product-component--Document, which relate via data.LineageAssertions._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GeometricTargetSet.1.1.0](master-data--GeometricTargetSet.1.0.0.md) &mdash; _Targets (in the geometrical point of view) for a drilling plan_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GeoPoliticalEntity.1.1.0](master-data--GeoPoliticalEntity.1.0.0.md) &mdash; _A named geographical area which is defined and administered by an official entity._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [HoleSection.1.3.0](master-data--HoleSection.1.2.0.md) &mdash; _A section of a wellbore drilled with a constant bit and/or under-reamer diameter_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [IsolatedInterval.1.1.0](master-data--IsolatedInterval.1.0.0.md) &mdash; _A hydraulic/pressure isolated interval in one or more Wellbores that functions to produce or inject fluids. The isolated interval must be capable of isolating a fluid flow for continuous measurement._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ModelFeature.1.1.0](master-data--ModelFeature.1.0.0.md) &mdash; _A ModelFeature is an explicit description of the relationships between geologic features such as rock volume features (e.g. stratigraphic units, geobodies, phase unit) and boundary features (e.g., genetic, tectonic, and fluid boundaries)._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [OperationsReport.1.4.0](master-data--OperationsReport.1.3.0.md) &mdash; _A standard report of all drilling, completion or well work events conducted on a well during a given period, usually a 24-hour day, not necessarily aligned with the local time zone. Printed snapshots, e.g. PDF files, are captured as work-product-component--Document, which relate via data.LineageAssertions._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Organisation.1.2.0](master-data--Organisation.1.1.0.md) &mdash; _A legal or administrative body, institution, or company, or any of its divisions._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [PerforationInterval.1.1.0](master-data--PerforationInterval.1.0.0.md) &mdash; _A Perforation Interval is associated to a Perforation Job. An interval is the Top & Base depth range that a specific Perforating Gun suite was fired in unison to produce Openings. An interval should be created for each Gun suite fired. A interval should also be created for a specific Tubing Punch firing also._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [PerforationJob.1.1.0](master-data--PerforationJob.1.0.0.md) &mdash; _A Perforation Job describes an activity performed on a well for the purpose of firing perforation guns or puncher inside Casing, Liner or Tubing to create a flow path between the reservoir outside the pipe and the production annulus within the pipe. A Squeeze job is a remedial effort performed to create a temporary flow path to allow cement to be pumped outside the casing to repair the annular seal. Perf Intervals result in the creation of equivalent Wellbore Openings where they are managed as part of the Completion. A Squeeze job would not result in creation of Wellbore Openings as these are temporary to better seal that interval._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [PlannedCementJob.1.2.0](master-data--PlannedCementJob.1.1.0.md) &mdash; _A single cement job description for the purpose of planning._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Play.1.1.0](master-data--Play.1.0.0.md) &mdash; _A named area that likely contains a combination of certain geological factors making it prospective for mineral exploration. It is often considered to be a set of prospects with a common set of characteristics._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Prospect.1.1.0](master-data--Prospect.1.0.0.md) &mdash; _A named area or location, likely containing commercial deposits of a mineral, that is a candidate for extraction.  This normally means a candidate drilling location.._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ReferenceLevel.1.1.0](master-data--ReferenceLevel.1.0.0.md) &mdash; _A reference level or horizontal reference surface, which can be re-used by many other entities. The area of use is indicated by data.SpatialLocation - as a polygon or as a point if used in context of a Well or Wellbore._
* New with Reservoir Management M19, replacing an experimental schema: [Reservoir.1.0.0](master-data--Reservoir.0.0.0.md) _A reservoir is a subsurface rock formation which 1) is a volume of porous and permeable rock and 2) contains an individual and separate natural accumulation of moveable fluids that are confined by impermeable rock formations. Fluids may be produced from a reservoir and injected into a reservoir for increased recovery, storage or disposal._
* New with Reservoir Management M19, replacing an experimental schema: [ReservoirSegment.1.0.0](master-data--ReservoirSegment.0.0.0.md) _A reservoir segment is an earth volume within a reservoir (e.g., reservoir zone, reservoir pattern, subsidence bowl, drainage region of one or more wells, etc.). Each reservoir segment is a unique and spatially non-overlapping part of a reservoir._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Rig.1.2.0](master-data--Rig.1.1.0.md) &mdash; _Definition of a drilling rig._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RigUtilization.1.1.0](master-data--RigUtilization.1.0.0.md) &mdash; _The utilization of a rig during the drilling phase of a section_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Risk.1.1.0](master-data--Risk.1.0.0.md) &mdash; _Possible risk potentially encountered during the run of a drilling program or a single string run._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RockSample.1.1.0](master-data--RockSample.1.0.0.md) &mdash; _A rock sample retrieved from an outcrop or Well.  It can be core, sample cut from core, cutting, outcrop, slide etc._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RockVolumeFeature.1.1.0](master-data--RockVolumeFeature.1.0.0.md) &mdash; _A volume of rock that is identified based on some specific attribute, like its mineral content or other physical characteristic. It exists typically in the scope of a model._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Seismic2DInterpretationSet.1.2.0](master-data--Seismic2DInterpretationSet.1.1.0.md) &mdash; _A seismic 2D interpretation set is a collection of logical processed lines and associated trace datasets that represent an important and uniform set for interpretation.  It does not comprise all of the datasets with a common processing geometry, nor all of the lines/datasets from a processing project, nor all of the lines/datasets from an acquisition project, because some are not suitable for interpretation.  An interpretation survey may include 2D lines and datasets from more than one acquisition or processing project.  Consequently, it is not an acquisition survey nor a processing survey.  It is not an application project, which is a collection of all the various objects an application and user care about for some analysis (seismic, wells, etc.).  It inherits properties shared by project entities because it can serve to capture the archiving of a master or authorized project activity.  Interpretation objects (horizons) are hung from an interpretation project to give context and to derive spatial location based on the processing geometry of the associated 2D lines. Trace datasets and seismic horizons are associated through LineageAssertion, although a master collection of trace datasets and horizons are explicitly related through a child relationship property._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Seismic3DInterpretationSet.1.2.0](master-data--Seismic3DInterpretationSet.1.1.0.md) &mdash; _A seismic 3D interpretation survey is a collection of trace datasets with a common bin grid that are important for interpretation.  It does not comprise all of the datasets with a common bin grid, nor all of the datasets from a processing project, nor all of the datasets from an acquisition project, because some are not suitable for interpretation.  An interpretation survey may include datasets from more than one acquisition or processing project.  Consequently, it is not an acquisition survey nor a processing survey.  It is not an application project, which is a collection of all the various objects an application and user care about for some analysis (seismic, wells, etc.).  It inherits properties shared by project entities because it can serve to capture the archiving of a master or authorized project activity. Interpretation objects (horizons) are hung from an interpretation survey to give context and to derive spatial location based on the common bin grid.  Trace datasets and seismic horizons are associated through LineageAssertion, although a master collection of trace datasets and horizons are explicitly related through a child relationship property._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicAcquisitionSurvey.1.4.0](master-data--SeismicAcquisitionSurvey.1.3.0.md) &mdash; _A seismic acquisition project is a type of business project that deploys resources to the field to record seismic data.  It may be referred to as a field survey, acquisition survey, or field program.  It is not the same as the geometry of the deployed equipment (nav), which is a work product component._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicProcessingProject.1.3.0](master-data--SeismicProcessingProject.1.2.0.md) &mdash; _A seismic processing project is a type of business project which manages the creation of processed seismic work products. It is not the same as the geometry of the processed traces (binning or bin grid), which is a work product component, although it typically defines a single binning.  A processing project may merge data from multiple field surveys, so it is not required to be equated to a single field survey.  Original processing and re-processing activities generate separate and independent processing projects._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [StorageFacility.1.2.0](master-data--StorageFacility.1.1.0.md) &mdash; _A generic storage facility for e.g., core and rock or fluid samples, seismic tapes, etc._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SurveyProgram.1.2.0](master-data--SurveyProgram.1.1.0.md) &mdash; _The plan for obtaining directional survey data by survey sections, acquired during a drilling campaign or later post-drilling work._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Well.1.3.0](master-data--Well.1.2.0.md) &mdash; _The origin of a set of wellbores._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellActivity.1.2.0](master-data--WellActivity.1.1.0.md) &mdash; _A Well Activity is a operation performed on a well to accomplish a predetermined objective. This may be as short as a few hours in duration, or may last several days, weeks or even months. It will have one or more associated daily Operations Reports, and may have other associated data as well._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellActivityProgram.1.1.0](master-data--WellActivityProgram.1.0.0.md) &mdash; _A complete description of an Activity Program for a unique or a set of Well(s) and/or Wellbore(s)_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellBarrierElementTest.1.1.0](master-data--WellBarrierElementTest.1.0.0.md) &mdash; _Describes a complete sequence to test for the Well Integrity_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Wellbore.1.4.0](master-data--Wellbore.1.3.0.md) &mdash; _A hole in the ground extending from a point at the earth's surface to the maximum point of penetration._
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellboreArchitecture.1.1.0](master-data--WellboreArchitecture.1.0.0.md) &mdash; _Describes the physical structures for a borehole_
* Changed to AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellboreOpening.1.2.0](master-data--WellboreOpening.1.1.0.md) &mdash; _A measured depth range within a Wellbore that is constructed to put the Wellbore annulus in contact with one or more stratigraphic zones for the purpose of injection, production or service. WellboreOpening interval ranges are always stratigraphically aligned, regardless of type._
* Added AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellPlanningWell.1.1.0](master-data--WellPlanningWell.1.0.0.md) &mdash; _Information about a single well. A well is a unique surface location from which wellbores are drilled into the Earth for the purpose of either (1) finding or producing underground resources; or (2) providing services related to the production of underground resources._
* Added AbstractMaster:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellPlanningWellbore.1.1.0](master-data--WellPlanningWellbore.1.0.0.md) &mdash; _A hole in the ground extending from a point at the earth's surface to the maximum point of penetration._

---

[Back to TOC](#TOC)

## reference-data

* Two additional coordinate reference systems for California zone VIII (NAD27), [CoordinateReferenceSystem:1.1.0](reference-data--CoordinateReferenceSystem.1.1.0.md)
* PPDM adoption: [SaturationMethodType:1.0.1](reference-data--SaturationMethodType.1.0.0.md)
* PPDM adoption: [SeismicGeometryType:1.0.1](reference-data--SeismicGeometryType.1.0.1.md)

**_Deprecations_**

* Deprecated [ActivityType:1.0.1](reference-data--ActivityType.1.0.0.md) superseded by [TubularAssemblyActivityType:.1.0.0](../../../E-R/reference-data/TubularAssemblyActivityType.1.0.0.md)
* Two additional CRSs [CoordinateReferenceSystem:1.1.0](reference-data--CoordinateReferenceSystem.1.1.0.md)
* One additional value and revised descriptions for [DataRulePurposeType:1.0.0](reference-data--DataRulePurposeType.1.0.0.md)
* Revised descriptions for [OSDUJsonExtensions:1.0.0](reference-data--OSDUJsonExtensions.1.0.0.md)
* Deprecated [QualityDataRule:1.1.1](reference-data--QualityDataRule.1.1.0.md) superseded by [DataQualityRule:1.0.0](../../../E-R/reference-data/DataQualityRule.1.0.0.md)
* Deprecated [QualityDataRuleSet:2.0.1](reference-data--QualityDataRuleSet.2.0.0.md) superseded by [DataQualityRuleSet:1.0.0](../../../E-R/reference-data/DataQualityRuleSet.1.0.0.md)
* PPDM patch revisions for [SaturationMethodType:1.0.0](reference-data--SaturationMethodType.1.0.0.md)
* Deprecated [SectionType:1.0.1](reference-data--SectionType.1.0.0.md) superseded by [TubularSectionType:1.0.0](../../../E-R/reference-data/TubularSectionType.1.0.0.md)
* PPDM patch revisions for [SaturationMethodType:1.0.2](reference-data--SeismicGeometryType.1.0.1.md)
* Now referring to TubularSectionType [TubularComponentType:1.1.0](reference-data--TubularComponentType.1.0.0.md)

---

[Back to TOC](#TOC)

---

## work-product-component

* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Activity.1.3.0.md](work-product-component--Activity.1.3.0.md)
* Changed to include AbstractReferencePropertyType:1.2.0 and AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ColumnBasedTable.1.1.0.md](work-product-component--ColumnBasedTable.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [DataQuality.1.3.0.md](work-product-component--DataQuality.1.2.0.md)
* **Breaking changes from DataQuality.1.3.0.md to [DataQuality.2.0.0.md](work-product-component--DataQuality.1.3.0.md)**
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [Document.1.1.0.md](work-product-component--Document.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [EarthModelInterpretation.1.1.0.md](work-product-component--EarthModelInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [FaultInterpretation.1.1.0.md](work-product-component--FaultInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [FaultSystem.1.3.0.md](work-product-component--FaultSystem.1.3.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [FluidBoundaryInterpretation.1.1.0.md](work-product-component--FluidBoundaryInterpretation.1.1.0.md)
* Corrections for and update to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [FormationIntegrityTest.1.2.0](work-product-component--FormationIntegrityTest.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [AquiferInterpretation.1.1.0.md](work-product-component--AquiferInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GenericImage.1.1.0.md](work-product-component--GenericImage.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GenericProperty.1.1.0.md](work-product-component--GenericProperty.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GenericRepresentation.1.1.0.md](work-product-component--GenericRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GeobodyBoundaryInterpretation.1.1.0.md](work-product-component--GeobodyBoundaryInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GeobodyInterpretation.1.1.0.md](work-product-component--GeobodyInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GeologicUnitOccurrenceInterpretation.1.1.0.md](work-product-component--GeologicUnitOccurrenceInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GeoReferencedImage.1.2.0.md](work-product-component--GeoReferencedImage.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GpGridRepresentation.1.1.0.md](work-product-component--GpGridRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [GridConnectionSetRepresentation.1.1.0.md](work-product-component--GridConnectionSetRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [HorizonInterpretation.1.1.0.md](work-product-component--HorizonInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [IjkGridNumericalAquiferRepresentation.1.1.0.md](work-product-component--IjkGridNumericalAquiferRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [IjkGridRepresentation.1.1.0.md](work-product-component--IjkGridRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [LocalBoundaryFeature.1.1.0.md](work-product-component--LocalBoundaryFeature.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [LocalModelCompoundCrs.1.1.0.md](work-product-component--LocalModelCompoundCrs.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [LocalModelFeature.1.1.0.md](work-product-component--LocalModelFeature.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [LocalRockVolumeFeature.1.1.0.md](work-product-component--LocalRockVolumeFeature.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [NotionalSeismicLine.1.1.0.md](work-product-component--NotionalSeismicLine.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [PersistedCollection.1.1.0.md](work-product-component--PersistedCollection.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [PlannedLithology.1.1.0.md](work-product-component--PlannedLithology.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [PPFGDataset.1.1.0.md](work-product-component--PPFGDataset.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ProcessedInSAR.1.1.0.md](work-product-component--ProcessedInSAR.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [ReservoirCompartmentInterpretation.1.1.0.md](work-product-component--ReservoirCompartmentInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RockFluidOrganizationInterpretation.1.1.0.md](work-product-component--RockFluidOrganizationInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RockFluidUnitInterpretation.1.1.0.md](work-product-component--RockFluidUnitInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RockImage.1.1.0.md](work-product-component--RockImage.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [RockSampleAnalysis.1.2.0.md](work-product-component--RockSampleAnalysis.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SealedSurfaceFramework.1.1.0.md](work-product-component--SealedSurfaceFramework.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SealedVolumeFramework.1.1.0.md](work-product-component--SealedVolumeFramework.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicAcquisitionDocuments.1.0.0.md](work-product-component--SeismicAcquisitionDocuments.1.0.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicBinGrid.1.2.0.md](work-product-component--SeismicBinGrid.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicFault.1.1.0.md](work-product-component--SeismicFault.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicFieldTraceData.1.0.0.md](work-product-component--SeismicFieldTraceData.1.0.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicHorizon.1.2.0.md](work-product-component--SeismicHorizon.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicLineGeometry.1.1.0.md](work-product-component--SeismicLineGeometry.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SeismicTraceData.1.4.0.md](work-product-component--SeismicTraceData.1.4.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SoilGasMonitoring.1.0.0.md](work-product-component--SoilGasMonitoring.1.0.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [StratigraphicColumn.1.1.0.md](work-product-component--StratigraphicColumn.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [StratigraphicColumnRankInterpretation.1.2.0.md](work-product-component--StratigraphicColumnRankInterpretation.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [StratigraphicUnitInterpretation.1.1.0.md](work-product-component--StratigraphicUnitInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [StructuralOrganizationInterpretation.1.1.0.md](work-product-component--StructuralOrganizationInterpretation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [SubRepresentation.1.1.0.md](work-product-component--SubRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [TimeSeries.1.1.0.md](work-product-component--TimeSeries.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [TubularExternalComponent.1.1.0.md](work-product-component--TubularExternalComponent.1.0.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [TubularAssembly.1.3.0.md](work-product-component--TubularAssembly.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [TubularComponent.1.3.0.md](work-product-component--TubularComponent.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [TubularUmbilical.1.2.0.md](work-product-component--TubularUmbilical.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [UnsealedSurfaceFramework.1.2.0.md](work-product-component--UnsealedSurfaceFramework.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [UnstructuredColumnLayerGridRepresentation.1.1.0.md](work-product-component--UnstructuredColumnLayerGridRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [UnstructuredGridRepresentation.1.1.0.md](work-product-component--UnstructuredGridRepresentation.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [VelocityModeling.1.2.0.md](work-product-component--VelocityModeling.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [VoidageGroupInterpretation.1.1.0.md](work-product-component--VoidageGroupInterpretation.1.1.0.md)
* Changed to include AbstractColumnBasedTable:1.1.0 and AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellboreIntervalSet.1.1.0.md](work-product-component--WellboreIntervalSet.1.1.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellboreMarkerSet.1.3.0.md](work-product-component--WellboreMarkerSet.1.3.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellboreTrajectory.1.2.0.md](work-product-component--WellboreTrajectory.1.2.0.md)
* Changed to AbstractWPCGroupType:1.2.0 with AbstractTechnicalAssurance:1.2.0 &rarr; [WellLog.1.3.0.md](work-product-component--WellLog.1.3.0.md)

# Links

* [Back to TOC](#TOC)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
