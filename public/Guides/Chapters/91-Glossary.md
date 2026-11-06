<a name="TOC"></a> Previous Chapter: [Appendix A References](90-References.md)

# Appendix B Glossary of Terms


Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## 4

<a name="4D"></a>
* **4D**<br>
  (OSDU Seismic) 3D seismic data that is acquired to assess changes in the subsurface over time and is accomplished by acquiring new 3D seismic over an existing 3D survey, typically using the previous 3D survey geometry<br>
    &rarr; _OSDU types/schemas:_ [master-data--SeismicAcquisitionSurvey](../../E-R/master-data/SeismicAcquisitionSurvey.1.4.0.md), [master-data--SeismicProcessingProject](../../E-R/master-data/SeismicProcessingProject.1.4.0.md), [work-product-component--SeismicTraceData](../../E-R/work-product-component/SeismicTraceData.1.8.0.md), [work-product-component--TimeSeries](../../E-R/work-product-component/TimeSeries.1.2.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## A

<a name="Activity"></a>
* **Activity**<br>
  (OSDU entity type **Activity** in group-type work-product-component) Description: _Instance of a given activity_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--Activity](../../E-R/work-product-component/Activity.1.4.0.md)
<a name="Activity-Code"></a>
* **Activity Code**<br>
  (OSDU entity type **ActivityCode** in group-type reference-data) Description: _A list of hierarchical Well Operations Reporting Codes. OSDU Data Definition delivered content is considered a default, which can be extended by operators. Extensions should avoid re-defining OSDU codes by applying namespace prefixes; populating the AttributionAuthority is also recommended._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ActivityCode](../../E-R/reference-data/ActivityCode.1.0.1.md)
<a name="Activity-Level"></a>
* **Activity Level**<br>
  (OSDU entity type **ActivityLevel** in group-type reference-data) Description: _Proposed reference values: L1, L2, L3, L4, L5, L6_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ActivityLevel](../../E-R/reference-data/ActivityLevel.1.0.0.md)
<a name="Activity-Outcome"></a>
* **Activity Outcome**<br>
  (OSDU entity type **ActivityOutcome** in group-type reference-data) Description: _Possible outcomes from a drilling activity_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ActivityOutcome](../../E-R/reference-data/ActivityOutcome.1.0.0.md)
<a name="Activity-Outcome-Detail"></a>
* **Activity Outcome Detail**<br>
  (OSDU entity type **ActivityOutcomeDetail** in group-type reference-data) Description: _Detailed outcomes from a drilling activity_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ActivityOutcomeDetail](../../E-R/reference-data/ActivityOutcomeDetail.1.0.0.md)
<a name="Activity-Plan"></a>
* **Activity Plan**<br>
  (OSDU entity type **ActivityPlan** in group-type master-data) Description: _Information about a series of well-planning activities._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ActivityPlan](../../E-R/master-data/ActivityPlan.1.2.0.md)
<a name="Activity-Status"></a>
* **Activity Status**<br>
  (OSDU entity type **ActivityStatus** in group-type reference-data) Description: _Workflow status for the state of the Activity, e.g., Planned, InProgress, Completed and more. This is a OPEN value list. State transitions follow the activity's life cycle._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ActivityStatus](../../E-R/reference-data/ActivityStatus.1.0.0.md)
<a name="Activity-Template"></a>
* **Activity Template**<br>
  (OSDU entity type **ActivityTemplate** in group-type master-data) Description: _Description of one type of activity, e.g., a work-step in a workflow._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ActivityTemplate](../../E-R/master-data/ActivityTemplate.1.2.0.md)
<a name="Activity-Template-Arc"></a>
* **Activity Template Arc**<br>
  (OSDU entity type **ActivityTemplateArc** in group-type master-data) Description: _An 'arc' establishing a link between ActivityTemplate output and input parameters._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ActivityTemplateArc](../../E-R/master-data/ActivityTemplateArc.1.1.0.md)
<a name="additionalProperties"></a>
* **additionalProperties**<br>
  (JSON Schema) OSDU schemas are generally permissive with regards to additional properties in Storage records. Details and recommendations in the Usage Guide Introduction.<br>
    &rarr; _Schema Usage Guide:_ [1.4 Trade-offs](01-Introduction.md#14-trade-offs)
<a name="Additive-Role"></a>
* **Additive Role**<br>
  (OSDU entity type **AdditiveRole** in group-type reference-data) Description: _The chief purpose or reason for adding a substance to a fluid used in a downhole operation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AdditiveRole](../../E-R/reference-data/AdditiveRole.1.0.0.md)
<a name="Additive-Type"></a>
* **Additive Type**<br>
  (OSDU entity type **AdditiveType** in group-type reference-data) Description: _A liquid, solid or gaseous substance used to manipulate the function or properties of a fluid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AdditiveType](../../E-R/reference-data/AdditiveType.1.0.1.md)
<a name="Address-Type"></a>
* **Address Type**<br>
  (OSDU entity type **AddressType** in group-type reference-data) Description: _Descriptive phrase that classifies the address type (HomeAddress, BusinessAddress, BillingAddress, ShippingAddress)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AddressType](../../E-R/reference-data/AddressType.1.0.0.md)
<a name="Agreement"></a>
* **Agreement**<br>
  (OSDU entity type **Agreement** in group-type master-data) Description: _A contract or other covenant between Company and counterparties which is relevant to the data universe because it includes terms governing use of data._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Agreement](../../E-R/master-data/Agreement.1.1.0.md)
<a name="Agreement-Type"></a>
* **Agreement Type**<br>
  (OSDU entity type **AgreementType** in group-type reference-data) Description: _A kind of document, record or other publication containing the terms of an agreed understanding, undertaking, contract or mutual consent between two or more parties._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AgreementType](../../E-R/reference-data/AgreementType.1.0.1.md)
<a name="Airborne-Clearance-Method"></a>
* **Airborne Clearance Method**<br>
  (OSDU entity type **AirborneClearanceMethod** in group-type reference-data) Description: _The airborne survey ground clearance method, for example, constant or drape._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AirborneClearanceMethod](../../E-R/reference-data/AirborneClearanceMethod.1.0.0.md)
<a name="Airborne-Instrumentation"></a>
* **Airborne Instrumentation**<br>
  (OSDU entity type **AirborneInstrumentation** in group-type reference-data) Description: _The instruments or equipment used to measure the specified flying height. This can be one or several different types of equipment, for example, laser scanner, GPS, radar altimeter._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AirborneInstrumentation](../../E-R/reference-data/AirborneInstrumentation.1.0.0.md)
<a name="Alias-Name-Type"></a>
* **Alias Name Type**<br>
  (OSDU entity type **AliasNameType** in group-type reference-data) Description: _Used to describe the type of name aliases._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AliasNameType](../../E-R/reference-data/AliasNameType.1.0.0.md)
<a name="Alias-Name-Type-Class"></a>
* **Alias Name Type Class**<br>
  (OSDU entity type **AliasNameTypeClass** in group-type reference-data) Description: _Used to describe the type of alias name types. AliasNameTypeClass is intended to be used to categorize alias name types by their general purpose, with values like "Standard Identifier", "System Identifier", and "Moniker". Combined with the AliasNameType, and DefinitionOrganisation one can define a complete context for a particular identifier or name. For example, a standard identifier of type Regulatory ID, from API, is the US standards regulatory ID; a standard identifier of type company ID, from BigOil, is BigOil's Standard ID; System Identifiers would be particular to systems of record, or other systems, and Monikers, things like display names, plot labels, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AliasNameTypeClass](../../E-R/reference-data/AliasNameTypeClass.1.0.0.md)
<a name="Amend-Reason"></a>
* **Amend Reason**<br>
  (OSDU entity type **AmendReason** in group-type reference-data) Description: _The reason for amending a production value that was reported to a regulator or partner._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AmendReason](../../E-R/reference-data/AmendReason.1.0.1.md)
<a name="Anisotropy-Type"></a>
* **Anisotropy Type**<br>
  (OSDU entity type **AnisotropyType** in group-type reference-data) Description: _Describes the anisotropy model assumed and solved for such as Isotropic, VTI, HTI, TTI, Orthorhombic._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AnisotropyType](../../E-R/reference-data/AnisotropyType.1.0.0.md)
<a name="Annular-Fluid-Type"></a>
* **Annular Fluid Type**<br>
  (OSDU entity type **AnnularFluidType** in group-type reference-data) Description: _Type of fluid in wellbore at time of perforation job._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AnnularFluidType](../../E-R/reference-data/AnnularFluidType.1.0.0.md)
<a name="Anticline"></a>
* **Anticline**<br>
  (ProspectType) Reservoir is convex-upward sequence of porous rocks capped by a seal (impermeable rock). Anticline is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="API"></a>
* **API**<br>
  1. Application Programming Interface is the specification of how a programmer writing an application accesses the behavior and state of services, classes and objects. (
  2. A set of calling conventions defining how a service is invoked through a software package.

  Schemas and APIs can be related. There is tooling in place to create API specifications using JSON schemas as well as boilerplate class definitions for API clients in various languages, e.g., via https://app.quicktype.io.
<a name="Aquifer-Interpretation"></a>
* **Aquifer Interpretation**<br>
  (OSDU entity type **AquiferInterpretation** in group-type work-product-component) Description: _An interpretation of a RockVolumeFeature as water-bearing rocks_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--AquiferInterpretation](../../E-R/work-product-component/AquiferInterpretation.1.2.0.md)
<a name="Aquifer-Strength-Type"></a>
* **Aquifer Strength Type**<br>
  (OSDU entity type **AquiferStrengthType** in group-type reference-data) Description: _A classification of how well an aquifer delivers recharge water to the reservoir. It also refers to how well the aquifer mitigates the reservoir's normal pressure decline._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AquiferStrengthType](../../E-R/reference-data/AquiferStrengthType.1.0.0.md)
<a name="Arc-Wrench-Ocean-Continent"></a>
* **Arc Wrench Ocean-Continent**<br>
  (BasinType) Pullapart (strike slip) basin developed on margin of continental crust that is obliquely overriding subducting oceanic plate. Arc Wrench Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Arc-Wrench-Ocean-Ocean"></a>
* **Arc Wrench Ocean-Ocean**<br>
  (BasinType) Pullapart (strike slip) basin developed on oceanic arc that is obliquely overriding another subducting oceanic plate. Arc Wrench Ocean-Ocean is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Area"></a>
* **Area**<br>
  (GeoPoliticalEntityType) Area is the quantity that expresses the extent of a two-dimensional region. Associated State is represented as generic GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Aromatic-GCMS-Compounds"></a>
* **Aromatic GCMS Compounds**<br>
  (OSDU entity type **AromaticGCMSCompounds** in group-type reference-data) Description: _An aromatic compound is a type of organic molecule characterized primarily by its stable ring-like structure, consisting of alternating double and single bonds between carbon atoms._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AromaticGCMSCompounds](../../E-R/reference-data/AromaticGCMSCompounds.1.0.0.md)
<a name="Artefact-Role"></a>
* **Artefact Role**<br>
  (OSDU entity type **ArtefactRole** in group-type reference-data) Description: _A representation of some or all of an original product adapted to a purpose._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ArtefactRole](../../E-R/reference-data/ArtefactRole.1.0.1.md)
<a name="Artificial-Lift-Type"></a>
* **Artificial Lift Type**<br>
  (OSDU entity type **ArtificialLiftType** in group-type reference-data) Description: _Used to reflect the type of Artificial Lift the data went out - 'Surface Pump', 'Submersible Pump',..._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ArtificialLiftType](../../E-R/reference-data/ArtificialLiftType.1.0.0.md)
<a name="Assessed-Decision-Quality"></a>
* **Assessed Decision Quality**<br>
  (OSDU entity type **AssessedDecisionQuality** in group-type reference-data) Description: _It is a measure of how well a decision is made, taking into account factors such as the information available, the logic applied, and the potential consequences._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AssessedDecisionQuality](../../E-R/reference-data/AssessedDecisionQuality.1.0.0.md)
<a name="Associated-State"></a>
* **Associated State**<br>
  (GeoPoliticalEntityType) Area governed by a Associated State-like related system. Associated State is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Authority-Type"></a>
* **Authority Type**<br>
  (OSDU entity type **AuthorityType** in group-type reference-data) Description: _The type of authority given to a business associate, often an employee of a company. Authority may be extended for purchase authorizations, to sign contracts or to enter into negotiations etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AuthorityType](../../E-R/reference-data/AuthorityType.1.0.0.md)
<a name="Autonomous-Community"></a>
* **Autonomous Community**<br>
  (GeoPoliticalEntityType) Area governed by a Autonomous Community-like related system. Autonomous Community is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Azimuth-Reference-Type"></a>
* **Azimuth Reference Type**<br>
  (OSDU entity type **AzimuthReferenceType** in group-type reference-data) Description: _The definition of north in a spatial reference survey. A reference table identifying valid north references used in surveying to define angular measurements_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--AzimuthReferenceType](../../E-R/reference-data/AzimuthReferenceType.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## B

<a name="Backreef"></a>
* **Backreef**<br>
  (ProspectType) Porous carbonate reservoir behind a reef margin. Backreef is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Barony"></a>
* **Barony**<br>
  (GeoPoliticalEntityType) Area governed by a Barony-like related system. Barony is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Basin"></a>
* **Basin**<br>
  (OSDU entity type **Basin** in group-type master-data) Description: _A natural geographic area covering a single depositional system._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Basin-Type"></a>
* **Basin Type**<br>
  (OSDU entity type **BasinType** in group-type reference-data) Description: _A geologic region where an accumulation of deposited sediments has depressed or is preserved within the crust._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BasinType](../../E-R/reference-data/BasinType.1.0.0.md)
<a name="Beach"></a>
* **Beach**<br>
  (ProspectType) Reservoir is sand beach on a marine margin. Beach is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="BHA-Run"></a>
* **BHA Run**<br>
  (OSDU entity type **BHARun** in group-type master-data) Description: _Planned and/or actual bottom hole assembly run including running parameters. This represents the period beginning when the BHA enters the hole until it leaves the hole._<br>
    &rarr; _OSDU types/schemas:_ [master-data--BHARun](../../E-R/master-data/BHARun.2.1.0.md)
<a name="Bha-Status"></a>
* **Bha Status**<br>
  (OSDU entity type **BhaStatus** in group-type reference-data) Description: _The status of the Bottom Hole Assembly. Proposed reference values: final, progress, plan, unknown_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BhaStatus](../../E-R/reference-data/BhaStatus.1.0.0.md)
<a name="Bin-Grid-Definition-Method-Type"></a>
* **Bin Grid Definition Method Type**<br>
  (OSDU entity type **BinGridDefinitionMethodType** in group-type reference-data) Description: _Mathematical model describing generation of nodes for a regular grid.  Either 4 corner points using perspective transformation or P6 for origin and direction using affine operation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BinGridDefinitionMethodType](../../E-R/reference-data/BinGridDefinitionMethodType.1.0.0.md)
<a name="Biostratigraphic-Count-Methods"></a>
* **Biostratigraphic Count Methods**<br>
  (OSDU entity type **BiostratigraphicCountMethods** in group-type reference-data) Description: _Methodology used  for counting fossil occurrences._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BiostratigraphicCountMethods](../../E-R/reference-data/BiostratigraphicCountMethods.1.0.0.md)
<a name="Biostratigraphic-Discipline"></a>
* **Biostratigraphic Discipline**<br>
  (OSDU entity type **BiostratigraphicDiscipline** in group-type reference-data) Description: _List of biostratigraphic disciplines which are defined by the fossil group analysed, e.g., palynology._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BiostratigraphicDiscipline](../../E-R/reference-data/BiostratigraphicDiscipline.1.0.0.md)
<a name="Biostratigraphic-Event-Type"></a>
* **Biostratigraphic Event Type**<br>
  (OSDU entity type **BiostratigraphicEventType** in group-type reference-data) Description: _Definitions of various types of biostratigraphic events, such as the first downhole occurrence of an event taxa._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BiostratigraphicEventType](../../E-R/reference-data/BiostratigraphicEventType.1.0.0.md)
<a name="Biostratigraphic-Interpretation-Type"></a>
* **Biostratigraphic Interpretation Type**<br>
  (OSDU entity type **BiostratigraphicInterpretationType** in group-type reference-data) Description: _Classification of an biostratigraphic interpretation, resulting in specific output types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BiostratigraphicInterpretationType](../../E-R/reference-data/BiostratigraphicInterpretationType.1.0.0.md)
<a name="Biostratigraphic-Study"></a>
* **Biostratigraphic Study**<br>
  (OSDU entity type **BiostratigraphicStudy** in group-type work-product-component) Description: _A biostratigraphic study, containing sample fossil counts, interpretations and event correlations. This work product component documents fossil data across stratigraphic sections to identify bioevents and establish temporal relationships between rock layers._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--BiostratigraphicStudy](../../E-R/work-product-component/BiostratigraphicStudy.1.0.0.md)
<a name="Biozone"></a>
* **Biozone**<br>
  (OSDU entity type **Biozone** in group-type reference-data) Description: _Biostratigraphically defined type of WellboreIntervalSet defined by marker bio-events. Reference list of published biozones with defined age per zone. Various biozone schemas can be assigned per region._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--Biozone](../../E-R/reference-data/Biozone.1.0.0.md)
<a name="Bit-Dull-Bearing-Code"></a>
* **Bit Dull Bearing Code**<br>
  (OSDU entity type **BitDullBearingCode** in group-type reference-data) Description: _IADC Dull Grade Bearing Codes for Roller Cone and Fixed Cutter Bit Types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitDullBearingCode](../../E-R/reference-data/BitDullBearingCode.1.0.0.md)
<a name="Bit-Dull-Code"></a>
* **Bit Dull Code**<br>
  (OSDU entity type **BitDullCode** in group-type reference-data) Description: _IADC Dull Grade Bearing Codes for Roller Cone and Fixed Cutter Bit Types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitDullCode](../../E-R/reference-data/BitDullCode.1.0.1.md)
<a name="Bit-Dull-Gauge-Code"></a>
* **Bit Dull Gauge Code**<br>
  (OSDU entity type **BitDullGaugeCode** in group-type reference-data) Description: _IADC Dull Grade Gauge Codes for Roller Cone and Fixed Cutter Bit Types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitDullGaugeCode](../../E-R/reference-data/BitDullGaugeCode.1.0.0.md)
<a name="Bit-Dull-Inner-Outer"></a>
* **Bit Dull Inner Outer**<br>
  (OSDU entity type **BitDullInnerOuter** in group-type reference-data) Description: _IADC Dull Grade Gauge Codes for Roller Cone and Fixed Cutter Bit Types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitDullInnerOuter](../../E-R/reference-data/BitDullInnerOuter.1.0.0.md)
<a name="Bit-Dull-Location-Code"></a>
* **Bit Dull Location Code**<br>
  (OSDU entity type **BitDullLocationCode** in group-type reference-data) Description: _IADC Dull Grade Location Codes for Roller Cone and Fixed Cutter Bit Types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitDullLocationCode](../../E-R/reference-data/BitDullLocationCode.1.0.0.md)
<a name="Bit-Formation-Type"></a>
* **Bit Formation Type**<br>
  (OSDU entity type **BitFormationType** in group-type reference-data) Description: _Bit Formation Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitFormationType](../../E-R/reference-data/BitFormationType.1.0.0.md)
<a name="Bit-Reason-Pulled"></a>
* **Bit Reason Pulled**<br>
  (OSDU entity type **BitReasonPulled** in group-type reference-data) Description: _The IADC list of reasons why a bit might have been pulled_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitReasonPulled](../../E-R/reference-data/BitReasonPulled.1.0.0.md)
<a name="Bit-Reason-Pulled-Code"></a>
* **Bit Reason Pulled Code**<br>
  (OSDU entity type **BitReasonPulledCode** in group-type reference-data) Description: _IADC Dull Grade Reason Pulled or Run Terminated Codes for Roller Cone and Fixed Cutter Bit Types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitReasonPulledCode](../../E-R/reference-data/BitReasonPulledCode.1.0.0.md)
<a name="Bit-Type"></a>
* **Bit Type**<br>
  (OSDU entity type **BitType** in group-type reference-data) Description: _The general type of drilling bit used to create a wellbore interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BitType](../../E-R/reference-data/BitType.1.0.2.md)
<a name="Black-Oil-Flash-Mechanism-Applied"></a>
* **Black Oil Flash Mechanism Applied**<br>
  (OSDU entity type **BlackOilFlashMechanismApplied** in group-type reference-data) Description: _List of the liberation or flash processes that can represent the depletion in the reservoir, and therefore applied to create the Black Oil model. This is only applicable for Black Oil models._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BlackOilFlashMechanismApplied](../../E-R/reference-data/BlackOilFlashMechanismApplied.1.0.0.md)
<a name="Blowout-Preventer"></a>
* **Blowout Preventer**<br>
  (OSDU entity type **BlowoutPreventer** in group-type master-data) Description: _Information related to a Blowout Preventer actually or planned to be installed during well operations._<br>
    &rarr; _OSDU types/schemas:_ [master-data--BlowoutPreventer](../../E-R/master-data/BlowoutPreventer.1.0.0.md)
<a name="Blowout-Preventer-Component"></a>
* **Blowout Preventer Component**<br>
  (OSDU entity type **BlowoutPreventerComponent** in group-type master-data) Description: _Information related to a component associated with a blowout preventer._<br>
    &rarr; _OSDU types/schemas:_ [master-data--BlowoutPreventerComponent](../../E-R/master-data/BlowoutPreventerComponent.1.0.0.md)
<a name="Blowout-Preventer-Component-Type"></a>
* **Blowout Preventer Component Type**<br>
  (OSDU entity type **BlowoutPreventerComponentType** in group-type reference-data) Description: _Types of components associated with a blowout preventer stack._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BlowoutPreventerComponentType](../../E-R/reference-data/BlowoutPreventerComponentType.1.0.0.md)
<a name="Blowout-Preventer-Connection-Type"></a>
* **Blowout Preventer Connection Type**<br>
  (OSDU entity type **BlowoutPreventerConnectionType** in group-type reference-data) Description: _Types of connections associated with a blowout preventer._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BlowoutPreventerConnectionType](../../E-R/reference-data/BlowoutPreventerConnectionType.1.0.0.md)
<a name="Borehole"></a>
* **Borehole**<br>
  (Wellbore) Borehole is a subset of Wellbore. Borehole is represented as Wellbore in OSDU.
<a name="Bottom-Hole-Pressure-Type"></a>
* **Bottom Hole Pressure Type**<br>
  (OSDU entity type **BottomHolePressureType** in group-type reference-data) Description: _The Method used to calculate or measure bottomhole pressure during perforation job._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BottomHolePressureType](../../E-R/reference-data/BottomHolePressureType.1.0.0.md)
<a name="Boundary-Feature"></a>
* **Boundary Feature**<br>
  (OSDU entity type **BoundaryFeature** in group-type master-data) Description: _An interface between two geological objects, such as horizons and faults. It is a surface object._<br>
    &rarr; _OSDU types/schemas:_ [master-data--BoundaryFeature](../../E-R/master-data/BoundaryFeature.1.1.0.md)
<a name="Boundary-Relation-Type"></a>
* **Boundary Relation Type**<br>
  (OSDU entity type **BoundaryRelationType** in group-type reference-data) Description: _Describes the boundary relation of a body with surrounding stratigraphic units: unconformable, conformable_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BoundaryRelationType](../../E-R/reference-data/BoundaryRelationType.1.0.0.md)
<a name="Bulk-Pyrolysis-Method"></a>
* **Bulk Pyrolysis Method**<br>
  (OSDU entity type **BulkPyrolysisMethod** in group-type reference-data) Description: _Identifies the technique, and in some cases instruments, used to perform bulk pyrolysis - that is, heating organic materials in the absence of oxygen to produce energy and by-products._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BulkPyrolysisMethod](../../E-R/reference-data/BulkPyrolysisMethod.1.0.0.md)
<a name="Business-Associate"></a>
* **Business Associate**<br>
  (OSDU entity type **BusinessAssociate** in group-type master-data) Description: _A legal or administrative body, person, institution, or company, or any of its divisions._<br>
    &rarr; _OSDU types/schemas:_ [master-data--BusinessAssociate](../../E-R/master-data/BusinessAssociate.1.0.0.md)
<a name="Business-Associate-Service-Quality-Type"></a>
* **Business Associate Service Quality Type**<br>
  (OSDU entity type **BusinessAssociateServiceQualityType** in group-type reference-data) Description: _Service Quality is the perspective of the customer on the reliability or other factors about the performance of a business associate._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BusinessAssociateServiceQualityType](../../E-R/reference-data/BusinessAssociateServiceQualityType.1.0.0.md)
<a name="Business-Associate-Service-Type"></a>
* **Business Associate Service Type**<br>
  (OSDU entity type **BusinessAssociateServiceType** in group-type reference-data) Description: _The service that a business associate provides. For example well logging, drilling, application development._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BusinessAssociateServiceType](../../E-R/reference-data/BusinessAssociateServiceType.1.0.0.md)
<a name="Business-Associate-Status-Type"></a>
* **Business Associate Status Type**<br>
  (OSDU entity type **BusinessAssociateStatusType** in group-type reference-data) Description: _The current status of the Business Associate, such as Active, In Receivership, Sold, Merged._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--BusinessAssociateStatusType](../../E-R/reference-data/BusinessAssociateStatusType.1.0.0.md)
<a name="Business-Decision"></a>
* **Business Decision**<br>
  (OSDU entity type **BusinessDecision** in group-type master-data) Description: _The record of a technical or business decision capturing the context of the decision._<br>
    &rarr; _OSDU types/schemas:_ [master-data--BusinessDecision](../../E-R/master-data/BusinessDecision.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## C

<a name="Calculation-Method-Type"></a>
* **Calculation Method Type**<br>
  (OSDU entity type **CalculationMethodType** in group-type reference-data) Description: _The method to calculate a wellbore path from the discrete station measurements of a wellbore directional survey._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CalculationMethodType](../../E-R/reference-data/CalculationMethodType.1.0.0.md)
<a name="Canton"></a>
* **Canton**<br>
  (GeoPoliticalEntityType) Area governed by a Canton-like related system. Canton is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="CAP-Theorem"></a>
* **CAP Theorem**<br>
  The CAP theorem states that there are three desirable system requirements for the successful design, implementation and deployment of applications in distributed computing systems. Attaining all three is not however possible. The three are:
  1. Consistency refers to predictability and reliability of data in a database across all nodes. This is the same idea of consistency described in ACID.
  2. Availability means the given system is available when needed.
  3. Partition Tolerance refers to whether a given system continues to operate even when there is partial data loss or temporary system failure or interruption. Ideally a single node failure will not cause the entire system to stop functioning.
<a name="Capital-City"></a>
* **Capital City**<br>
  (GeoPoliticalEntityType) Area governed by a Capital City-like related system. Capital City is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Carbon-Capture-Storage"></a>
* **Carbon Capture Storage**<br>
  (PlayType) An intention or development to sequester and/or store CO2 in the subsurface. Carbon Capture Storage is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="Case-Sensitivity"></a>
* **Case Sensitivity**<br>
  (OSDU Platform) Some implementations impose restrictions regarding case sensitivity in names.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.1.3 Schema Identifier `kind` Limitations](93-OSDU-Schemas.md#appendix-d13-schema-identifier-kind-limitations)
<a name="Casing-Component-Catalog"></a>
* **Casing Component Catalog**<br>
  (OSDU entity type **CasingComponentCatalog** in group-type reference-data) Description: _The reference collection of lookup casing products with its respective specifications and properties.  To be used for populating other objects such as TubularComponents._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CasingComponentCatalog](../../E-R/reference-data/CasingComponentCatalog.1.0.0.md)
<a name="Casing-Design"></a>
* **Casing Design**<br>
  (OSDU entity type **CasingDesign** in group-type master-data) Description: _The design of the Casing in a wellbore_<br>
    &rarr; _OSDU types/schemas:_ [master-data--CasingDesign](../../E-R/master-data/CasingDesign.1.2.0.md)
<a name="Catalog"></a>
* **Catalog**<br>
  (Content versus Catalog) The term Catalog is often used as the category of schema group-types, which represent records held by the platform [Storage](https://community.opengroup.org/osdu/platform/system/storage/-/blob/master/docs/api/storage_openapi.yaml) service<br>
    &rarr; _Schema Usage Guide:_ [2.1 Master Data](02-GroupType.md#21-master-data), [2.2 Reference Data](02-GroupType.md#22-reference-data), [2.3 Dataset](02-GroupType.md#23-dataset), [2.4 Work Product Component](02-GroupType.md#24-work-product-component), [2.5 Work Product](02-GroupType.md#25-work-product)
<a name="Catalog-Map-State-Type"></a>
* **Catalog Map State Type**<br>
  (OSDU entity type **CatalogMapStateType** in group-type reference-data) Description: _A qualification of a mapping between catalog items. Mappings can be between 'identical' items, similar but not identical items or not supported._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CatalogMapStateType](../../E-R/reference-data/CatalogMapStateType.1.0.0.md)
<a name="Catalog-Material-Grade"></a>
* **Catalog Material Grade**<br>
  (OSDU entity type **CatalogMaterialGrade** in group-type reference-data) Description: _Material grade specifications for tubular products._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CatalogMaterialGrade](../../E-R/reference-data/CatalogMaterialGrade.1.0.0.md)
<a name="Cause"></a>
* **Cause**<br>
  (PPDM) Causes reflect why a particular event occurred or something happened and are captured after the event.
<a name="CDS"></a>
* **CDS**<br>
  (OSDU Connected Data Source) OSDU platform support for external, connected data sources.<br>
    &rarr; _OSDU types/schemas:_ [master-data--ConnectedSourceDataJob](../../E-R/master-data/ConnectedSourceDataJob.1.9.0.md), [master-data--ConnectedSourceRegistryEntry](../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md), [dataset--ConnectedSource.Generic](../../E-R/dataset/ConnectedSource.Generic.1.0.1.md)
<a name="Cell-Shape-Type"></a>
* **Cell Shape Type**<br>
  (OSDU entity type **CellShapeType** in group-type reference-data) Description: _An enumeration of cell shape types based on the RESQML model, i.e. tetrahedral, pyramidal, prism, hexahedral, polyhedral._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CellShapeType](../../E-R/reference-data/CellShapeType.1.0.0.md)
<a name="Cement-Constant-Gas-Method"></a>
* **Cement Constant Gas Method**<br>
  (OSDU entity type **CementConstantGasMethod** in group-type reference-data) Description: _Constant gas ratio method for measuring average density._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementConstantGasMethod](../../E-R/reference-data/CementConstantGasMethod.1.0.0.md)
<a name="Cement-Eval-Log-Type"></a>
* **Cement Eval Log Type**<br>
  (OSDU entity type **CementEvalLogType** in group-type reference-data) Description: _The type of Cement evaluation logging tool._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementEvalLogType](../../E-R/reference-data/CementEvalLogType.1.0.0.md)
<a name="Cement-Excess-Vol-Calc-Method"></a>
* **Cement Excess Vol Calc Method**<br>
  (OSDU entity type **CementExcessVolCalcMethod** in group-type reference-data) Description: _The method used to derive the planned excess volume of Cement slurry pumped. The method is not limited to measurements or software simulations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementExcessVolCalcMethod](../../E-R/reference-data/CementExcessVolCalcMethod.1.0.0.md)
<a name="Cement-Fluid-Product-Name"></a>
* **Cement Fluid Product Name**<br>
  (OSDU entity type **CementFluidProductName** in group-type reference-data) Description: _The vendor product name of the Cementing Fluid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementFluidProductName](../../E-R/reference-data/CementFluidProductName.1.0.0.md)
<a name="Cement-Fluid-Type"></a>
* **Cement Fluid Type**<br>
  (OSDU entity type **CementFluidType** in group-type reference-data) Description: _High-level type definition of the main fluid types used during a Cement job (includes circulation pre- and post-pumping of Cement slurry)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementFluidType](../../E-R/reference-data/CementFluidType.1.0.0.md)
<a name="Cement-Gas-Foam-Type"></a>
* **Cement Gas Foam Type**<br>
  (OSDU entity type **CementGasFoamType** in group-type reference-data) Description: _Type of Gas foam Cement (for foam Cementing jobs)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementGasFoamType](../../E-R/reference-data/CementGasFoamType.1.0.0.md)
<a name="Cement-Job"></a>
* **Cement Job**<br>
  (OSDU entity type **CementJob** in group-type work-product-component) Description: _An actual single cement job post-job report/description/summary._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--CementJob](../../E-R/work-product-component/CementJob.1.3.0.md)
<a name="Cement-Job-Quality"></a>
* **Cement Job Quality**<br>
  (OSDU entity type **CementJobQuality** in group-type reference-data) Description: _Cement Job Quality Assessment - A post-job assessment of the quality of the cement job (open assessment method)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementJobQuality](../../E-R/reference-data/CementJobQuality.1.0.0.md)
<a name="Cement-Job-Type"></a>
* **Cement Job Type**<br>
  (OSDU entity type **CementJobType** in group-type reference-data) Description: _A single cement job. Possible Values: Primary, Plug, Squeeze, Unknown_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementJobType](../../E-R/reference-data/CementJobType.1.0.0.md)
<a name="Cement-Mass-Unit-Type"></a>
* **Cement Mass Unit Type**<br>
  (OSDU entity type **CementMassUnitType** in group-type reference-data) Description: _Cement Mass unit type to be defined to give necessary context to other volume and mass calculations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementMassUnitType](../../E-R/reference-data/CementMassUnitType.1.0.0.md)
<a name="Cement-Mix-Fluid-Type"></a>
* **Cement Mix Fluid Type**<br>
  (OSDU entity type **CementMixFluidType** in group-type reference-data) Description: _High-level definition of the Cement slurry mixing fluid type._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementMixFluidType](../../E-R/reference-data/CementMixFluidType.1.0.0.md)
<a name="Cement-Mud-Type"></a>
* **Cement Mud Type**<br>
  (OSDU entity type **CementMudType** in group-type reference-data) Description: _Sub-level type definition of one (of potentially several) mud systems used during the cement job._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementMudType](../../E-R/reference-data/CementMudType.1.0.0.md)
<a name="Cement-Placement-Method"></a>
* **Cement Placement Method**<br>
  (OSDU entity type **CementPlacementMethod** in group-type reference-data) Description: _Further details on the Cement plug placement methods (pump and pull, or balanced)  or chosen circulation path (reverse or forward)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementPlacementMethod](../../E-R/reference-data/CementPlacementMethod.1.0.0.md)
<a name="Cement-Plug-Base-Support-Type"></a>
* **Cement Plug Base Support Type**<br>
  (OSDU entity type **CementPlugBaseSupportType** in group-type reference-data) Description: _The technology used to support the base of the Plug slurry._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementPlugBaseSupportType](../../E-R/reference-data/CementPlugBaseSupportType.1.0.0.md)
<a name="Cement-Plug-Status-Type"></a>
* **Cement Plug Status Type**<br>
  (OSDU entity type **CementPlugStatusType** in group-type reference-data) Description: _A status attribute of the Cement plug (whether it is installed in place or has since changed status, including drill out, dressed, etc.)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementPlugStatusType](../../E-R/reference-data/CementPlugStatusType.1.0.0.md)
<a name="Cement-Plug-Type"></a>
* **Cement Plug Type**<br>
  (OSDU entity type **CementPlugType** in group-type reference-data) Description: _The type of stage Cement if of type 'plug'. Closely tied with the Cement plug objective._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementPlugType](../../E-R/reference-data/CementPlugType.1.0.0.md)
<a name="Cement-Pump-Equipment-Type"></a>
* **Cement Pump Equipment Type**<br>
  (OSDU entity type **CementPumpEquipmentType** in group-type reference-data) Description: _Equipment pumping the fluid (whether stationary or mobile)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementPumpEquipmentType](../../E-R/reference-data/CementPumpEquipmentType.1.0.0.md)
<a name="Cement-Pump-Through-Equipment-Type"></a>
* **Cement Pump Through Equipment Type**<br>
  (OSDU entity type **CementPumpThroughEquipmentType** in group-type reference-data) Description: _Main surface pump-through equipment (also referred to as 'line-up')._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementPumpThroughEquipmentType](../../E-R/reference-data/CementPumpThroughEquipmentType.1.0.0.md)
<a name="Cement-Shoe-Test-Type"></a>
* **Cement Shoe Test Type**<br>
  (OSDU entity type **CementShoeTestType** in group-type reference-data) Description: _Type of (pressure) test to determine the strength of the Cement surrounding the shoe (after drill-out)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementShoeTestType](../../E-R/reference-data/CementShoeTestType.1.0.0.md)
<a name="Cement-Slurry-Class"></a>
* **Cement Slurry Class**<br>
  (OSDU entity type **CementSlurryClass** in group-type reference-data) Description: _Cement slurry classes from Class A-H and unique blends like Diacell, Microsphere Blend._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementSlurryClass](../../E-R/reference-data/CementSlurryClass.1.0.0.md)
<a name="Cement-Slurry-Mix-Method"></a>
* **Cement Slurry Mix Method**<br>
  (OSDU entity type **CementSlurryMixMethod** in group-type reference-data) Description: _The method used to mix the Cement Slurry._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementSlurryMixMethod](../../E-R/reference-data/CementSlurryMixMethod.1.0.0.md)
<a name="Cement-Slurry-Type"></a>
* **Cement Slurry Type**<br>
  (OSDU entity type **CementSlurryType** in group-type reference-data) Description: _High-level definition of the slurry type, which often relates to the objective of the Cement slurry._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementSlurryType](../../E-R/reference-data/CementSlurryType.1.0.0.md)
<a name="Cement-Squeeze-Method"></a>
* **Cement Squeeze Method**<br>
  (OSDU entity type **CementSqueezeMethod** in group-type reference-data) Description: _Method used to achieve squeeze._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementSqueezeMethod](../../E-R/reference-data/CementSqueezeMethod.1.0.0.md)
<a name="Cement-Squeeze-Objective"></a>
* **Cement Squeeze Objective**<br>
  (OSDU entity type **CementSqueezeObjective** in group-type reference-data) Description: _Cement Squeeze Objective - Defines the objective of the Cement Squeeze job._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementSqueezeObjective](../../E-R/reference-data/CementSqueezeObjective.1.0.0.md)
<a name="Cement-Squeeze-Type"></a>
* **Cement Squeeze Type**<br>
  (OSDU entity type **CementSqueezeType** in group-type reference-data) Description: _The method used to perform the Cement squeeze._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementSqueezeType](../../E-R/reference-data/CementSqueezeType.1.0.0.md)
<a name="Cement-Stage-Type"></a>
* **Cement Stage Type**<br>
  (OSDU entity type **CementStageType** in group-type reference-data) Description: _Defines the Cement job stage(s). Allows combination of several stages for one Cement Job. Most conventional jobs constitute one stage._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementStageType](../../E-R/reference-data/CementStageType.1.0.0.md)
<a name="Cement-TOC-Locate-Method"></a>
* **Cement TOC Locate Method**<br>
  (OSDU entity type **CementTOCLocateMethod** in group-type reference-data) Description: _Method of determining/measuring or estimating/calculating the Top Of Cement (TOC). TOC is the top of the Cement column._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementTOCLocateMethod](../../E-R/reference-data/CementTOCLocateMethod.1.0.0.md)
<a name="Cement-Tool-Type"></a>
* **Cement Tool Type**<br>
  (OSDU entity type **CementToolType** in group-type reference-data) Description: _Tool type used during Cementing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CementToolType](../../E-R/reference-data/CementToolType.1.0.0.md)
<a name="Channel"></a>
* **Channel**<br>
  (ProspectType) Reservoir is sand fill in a river channel. Channel is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Choke-Manifold-Type"></a>
* **Choke Manifold Type**<br>
  (OSDU entity type **ChokeManifoldType** in group-type reference-data) Description: _Types of choke manifolds used in well operations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ChokeManifoldType](../../E-R/reference-data/ChokeManifoldType.1.0.0.md)
<a name="Chrono-Stratigraphic-Scheme"></a>
* **Chrono Stratigraphic Scheme**<br>
  (OSDU entity type **ChronoStratigraphicScheme** in group-type reference-data) Description: _ChronoStratigraphicScheme defines a scheme, which groups ChronoStratigraphy records into a consistent set. The schemes are associated to well-known publications._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ChronoStratigraphicScheme](../../E-R/reference-data/ChronoStratigraphicScheme.1.0.0.md)
<a name="Chrono-Stratigraphy"></a>
* **Chrono Stratigraphy**<br>
  (OSDU entity type **ChronoStratigraphy** in group-type reference-data) Description: _The reference value type for Chronostratigraphic classification. The purpose of chronostratigraphic classification is to organize systematically the rocks forming the Earth's crust into named units (chronostratigraphic units) that represent intervals of geologic time (geochronologic units) to serve as references in narratives about Earth history including the evolution of life. Records of this kind represent chronostratigraphic units, i.e., bodies of rocks that include all rocks representative of a specific interval of geologic time, and only this time span. Chronostratigraphic units are bounded by isochronous horizons which mark specific moments of geological time. The rank (via data.ChronostratigraphicHierarchy) and relative magnitude of the units in the chronostratigraphic hierarchy are a function of the durations they represent._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ChronoStratigraphy](../../E-R/reference-data/ChronoStratigraphy.1.1.0.md)
<a name="City"></a>
* **City**<br>
  (GeoPoliticalEntityType) Area governed by a City-like related system.City is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Class"></a>
* **Class**<br>
  (PPDM) Class is an abstraction of a set of similar elements and is based on specific and defined criteria. A class may be a characterization class, associated with properties. Classes are primarily defined to support user understanding of the concepts embedded in complex or hierarchical reference lists. <br>
  Classes may be further divided into Subclasses as necessary to ensure that concepts are laid out as clearly as necessary. <br>
  Classes and subclasses may be embedded into reference lists to help users understand how reference values fit into the business world. These do not need to be created as separate reference lists unless doing so it considered to be helpful and supportive of interoperability.<br>
  In OSDU a class is identified by a schema `kind`.<br>
    &rarr; _See also_ [kind](#kind).
<a name="Coalbed-Methane"></a>
* **Coalbed Methane**<br>
  (PlayType) An intention or development to produce hydrocarbons from an impermeable matrix of coal beds. Coalbed Methane is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="Coil-Tubing-Wrap-Type"></a>
* **Coil Tubing Wrap Type**<br>
  (OSDU entity type **CoilTubingWrapType** in group-type reference-data) Description: _The coiled tubing wrap type._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CoilTubingWrapType](../../E-R/reference-data/CoilTubingWrapType.1.0.0.md)
<a name="Collaboration-Project"></a>
* **Collaboration Project**<br>
  (OSDU entity type **CollaborationProject** in group-type master-data) Description: _The context for a collaboration project, a multi-user collaboration space, also known as "system of engagement" with references to data in the "system of record"._<br>
    &rarr; _OSDU types/schemas:_ [master-data--CollaborationProject](../../E-R/master-data/CollaborationProject.1.0.0.md)
<a name="Collaboration-Project-Collection"></a>
* **Collaboration Project Collection**<br>
  (OSDU entity type **CollaborationProjectCollection** in group-type work-product-component) Description: _A collection of data references used in context of a CollaborationProject, often describing the content of a "system of engagement"._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--CollaborationProjectCollection](../../E-R/work-product-component/CollaborationProjectCollection.1.0.0.md)
<a name="Collaboration-Project-Lifecycle-Status"></a>
* **Collaboration Project Lifecycle Status**<br>
  (OSDU entity type **CollaborationProjectLifecycleStatus** in group-type reference-data) Description: _The well-known lifecycle states for a CollaborationProject._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CollaborationProjectLifecycleStatus](../../E-R/reference-data/CollaborationProjectLifecycleStatus.1.0.0.md)
<a name="Collection-Purpose"></a>
* **Collection Purpose**<br>
  (OSDU entity type **CollectionPurpose** in group-type reference-data) Description: _A governed purpose code for collections, e.g. 'Flow simulation output properties', 'Study', or similar._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CollectionPurpose](../../E-R/reference-data/CollectionPurpose.1.0.0.md)
<a name="Column-Based-Table"></a>
* **Column Based Table**<br>
  (OSDU entity type **ColumnBasedTable** in group-type work-product-component) Description: _A ColumnBasedTable is a set of columns, which have equal length (data.ColumnSize). Columns have a Property Kind, UnitOfMeasure and Facet. There are KeyColumns (index columns) and Columns (for look-up values). Examples are KrPc, PVT and Facies tables._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ColumnBasedTable](../../E-R/work-product-component/ColumnBasedTable.1.4.0.md)
<a name="Column-Based-Table-Template"></a>
* **Column Based Table Template**<br>
  (OSDU entity type **ColumnBasedTableTemplate** in group-type master-data) Description: _An instance of a ColumnBasedTableTemplate provides a re-usable set of column definitions, or column meta data, which column based table records may selectively refer to. The references is established via the ColumnName in the Columns[] array. The ColumnBasedTableTemplate can be used with all (typically work-product-component) types, which include AbstractColumnBasedTable  or the generic work-product-component--ColumnBasedTable itself._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ColumnBasedTableTemplate](../../E-R/master-data/ColumnBasedTableTemplate.1.0.1.md)
<a name="Column-Based-Table-Type"></a>
* **Column Based Table Type**<br>
  (OSDU entity type **ColumnBasedTableType** in group-type reference-data) Description: _ColumnBasedTableType holds the values for the various possible and non exhaustive column based table types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ColumnBasedTableType](../../E-R/reference-data/ColumnBasedTableType.1.1.1.md)
<a name="Column-Shape-Type"></a>
* **Column Shape Type**<br>
  (OSDU entity type **ColumnShapeType** in group-type reference-data) Description: _An enumeration for column shape types based on RESQML, i.e. triangular, quadrilateral, polygonal._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ColumnShapeType](../../E-R/reference-data/ColumnShapeType.1.0.0.md)
<a name="Community"></a>
* **Community**<br>
  (GeoPoliticalEntityType) Area governed by a Community-like related system. Community is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Component"></a>
* **Component**<br>
  (PPDM) Component is a constituent, defined, part of a system or complex object. Example: The PPDM What is a Well standard decomposed well configurations into its constituent components.
<a name="Compound-Specific-Isotope-Components"></a>
* **Compound Specific Isotope Components**<br>
  (OSDU entity type **CompoundSpecificIsotopeComponents** in group-type reference-data) Description: _Specific chemical compounds, such as alkanes, hopanes and steranes, used in Isotope Analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CompoundSpecificIsotopeComponents](../../E-R/reference-data/CompoundSpecificIsotopeComponents.1.0.0.md)
<a name="Compressibility-Measurement-Type"></a>
* **Compressibility Measurement Type**<br>
  (OSDU entity type **CompressibilityMeasurementType** in group-type reference-data) Description: _Identifies the type of stress condition applied when measuring rock compressibility._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CompressibilityMeasurementType](../../E-R/reference-data/CompressibilityMeasurementType.1.0.0.md)
<a name="Compressibility-Model-Type"></a>
* **Compressibility Model Type**<br>
  (OSDU entity type **CompressibilityModelType** in group-type reference-data) Description: _List of the compressibility model types for the rock physics model._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CompressibilityModelType](../../E-R/reference-data/CompressibilityModelType.1.0.0.md)
<a name="Compression-Method-Type"></a>
* **Compression Method Type**<br>
  (OSDU entity type **CompressionMethodType** in group-type reference-data) Description: _A scheme for packing data into a smaller digital space._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CompressionMethodType](../../E-R/reference-data/CompressionMethodType.1.0.1.md)
<a name="Condition-Legal"></a>
* **Condition (Legal)**<br>
  (PPDM) A Condition (Legal) is a premise upon which the fulfillment of an agreement depends (stipulation); a provision making the effect of a legal instrument contingent upon an uncertain event; something essential to the appearance or occurrence of something else; a restricting or modifying factor (qualification). Example: A condition laid out in a contract or agreement.
<a name="Condition-Physical"></a>
* **Condition (Physical)**<br>
  (PPDM) A Condition (Physical) indicates the state of something with regard to its appearance, quality, or working order. It is used in the context of a document or other media or any physical asset. Example: State of an asset or physical thing.
<a name="Conductivity-Measurement-Method"></a>
* **Conductivity Measurement Method**<br>
  (OSDU entity type **ConductivityMeasurementMethod** in group-type reference-data) Description: _The method by which the ability of a sample to conduct electricity is measured._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ConductivityMeasurementMethod](../../E-R/reference-data/ConductivityMeasurementMethod.1.0.0.md)
<a name="Confederated-State"></a>
* **Confederated State**<br>
  (GeoPoliticalEntityType) Area governed by a Confederated State-like related system. Confederated State is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Connected-Data-Source"></a>
* **Connected Data Source**<br>
  (OSDU) OSDU platform support for external, connected data sources.<br>
    &rarr; _OSDU types/schemas:_ [master-data--ConnectedSourceDataJob](../../E-R/master-data/ConnectedSourceDataJob.1.9.0.md), [master-data--ConnectedSourceRegistryEntry](../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md), [dataset--ConnectedSource.Generic](../../E-R/dataset/ConnectedSource.Generic.1.0.1.md)
<a name="Connected-Source-Data-Job"></a>
* **Connected Source Data Job**<br>
  (OSDU entity type **ConnectedSourceDataJob** in group-type master-data) Description: _Scheduling, data fetch, and ingestion configuration for automated jobs against a registered connected data source._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ConnectedSourceDataJob](../../E-R/master-data/ConnectedSourceDataJob.1.9.0.md)
<a name="Connected-Source-Generic"></a>
* **Connected Source Generic**<br>
  (OSDU entity type **ConnectedSource.Generic** in group-type dataset) Description: _The dataset linked to a connected source._<br>
    &rarr; _OSDU types/schemas:_ [dataset--ConnectedSource.Generic](../../E-R/dataset/ConnectedSource.Generic.1.0.1.md)
<a name="Connected-Source-Registry-Entry"></a>
* **Connected Source Registry Entry**<br>
  (OSDU entity type **ConnectedSourceRegistryEntry** in group-type master-data) Description: _System-level object containing business and technical metadata for an external OSDU-compliant data source, used for registration of that source within the OSDU external data framework._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ConnectedSourceRegistryEntry](../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md)
<a name="Consolidation-Type"></a>
* **Consolidation Type**<br>
  (OSDU entity type **ConsolidationType** in group-type reference-data) Description: _Identifies the way in which soil or rock was compacted in the context of triaxial compressibility testing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ConsolidationType](../../E-R/reference-data/ConsolidationType.1.0.0.md)
<a name="Constituency"></a>
* **Constituency**<br>
  (GeoPoliticalEntityType) Area governed by a Constituency-like related system. Constituency is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Contact-Role-Type"></a>
* **Contact Role Type**<br>
  (OSDU entity type **ContactRoleType** in group-type reference-data) Description: _Role of the contact within the associated organisation, such as Account owner, Sales Representative, Technical Support, Project Manager, Party Chief, Client Representative, Senior Observer._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ContactRoleType](../../E-R/reference-data/ContactRoleType.1.0.0.md)
<a name="Content"></a>
* **Content**<br>
  (Content versus Catalog) Original data files, documents, derived or interpreted data kept referenced by dataset group-type records, which are not directly searchable, except when exposed by Domain Data Management Services (DDMS)<br>
    &rarr; _Schema Usage Guide:_ [2.6.4 Content](02-GroupType.md#264-content)
<a name="Contractor-Type"></a>
* **Contractor Type**<br>
  (OSDU entity type **ContractorType** in group-type reference-data) Description: _The role of a contractor providing services, such as Recording, Line Clearing, Positioning, Data Processing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ContractorType](../../E-R/reference-data/ContractorType.1.0.0.md)
<a name="Control-Manifold-Type"></a>
* **Control Manifold Type**<br>
  (OSDU entity type **ControlManifoldType** in group-type reference-data) Description: _Types of control manifolds used in well operations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ControlManifoldType](../../E-R/reference-data/ControlManifoldType.1.0.0.md)
<a name="Conventional"></a>
* **Conventional**<br>
  (PlayType) An intention or development to produce hydrocarbons from a typical, porous and permeable reservoir. Conventional is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="Conventional-Core-Catcher-Type"></a>
* **Conventional Core Catcher Type**<br>
  (OSDU entity type **ConventionalCoreCatcherType** in group-type reference-data) Description: _Identifies the category of the core catcher used in core acquisition. A core catcher is a device located in the core barrel of drilling tools that securely retains the core sample during its extraction from the subsurface._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ConventionalCoreCatcherType](../../E-R/reference-data/ConventionalCoreCatcherType.1.0.0.md)
<a name="Conventional-Core-Inner-Sleeve-Material"></a>
* **Conventional Core Inner Sleeve Material**<br>
  (OSDU entity type **ConventionalCoreInnerSleeveMaterial** in group-type reference-data) Description: _Identifies the category of material of the cylindrical sleeve that lines the inside of the inner core barrel during coring operations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ConventionalCoreInnerSleeveMaterial](../../E-R/reference-data/ConventionalCoreInnerSleeveMaterial.1.0.0.md)
<a name="Conveyance-Method"></a>
* **Conveyance Method**<br>
  (OSDU entity type **ConveyanceMethod** in group-type reference-data) Description: _The conveyance method captures the method used to acquire and convey the log information._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ConveyanceMethod](../../E-R/reference-data/ConveyanceMethod.1.0.0.md)
<a name="Coordinate"></a>
* **Coordinate**
  * **Coordinate**<br>
    (IOGP/EPSG) One of a sequence of n scalar numbers designating the position of a point in n-dimensional space.
  * **Coordinate**<br>
    (OSDU) The definition aligns with IOGP/EPSG. In OSDU coordinates are handled in a standardized way using a schema fragment, which can carry the state as ingested as well as a normalized WGS 84 position (longitude, latitude).<br>
      &rarr; _OSDU types/schemas:_ [AbstractSpatialLocation](../../E-R/abstract/AbstractSpatialLocation.1.1.0.md), [AbstractAnyCrsFeatureCollection](../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md), [AbstractFeatureCollection](../../E-R/abstract/AbstractFeatureCollection.1.0.0.md)
<a name="Coordinate-Reference-System"></a>
* **Coordinate Reference System**<br>
  (OSDU entity type **CoordinateReferenceSystem** in group-type reference-data) Description: _Used to describe any kind of coordinate reference system. The type is identified by CoordinateReferenceSystemType (used by the system) and Kind facing the end-user. The Code is according to OSDU standard a string, the EPSG standard number is available via the CodeAsNumber property. Description carries EPSG's Remark. AttributionAuthority carries EPSG's DataSource. AliasNames carry the EPSG Alias contents._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CoordinateReferenceSystem](../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md)
<a name="Coordinate-Reference-System-CRS"></a>
* **Coordinate Reference System (CRS)**
  * **Coordinate Reference System (CRS)**<br>
    (IOGP/EPSG) Coordinate system that is related to an object by a datum.
      1. Note: for 'geodetic datum' and 'vertical datum', the object will be the Earth.
      2. Note: 'coordinate reference system' is normally abbreviated to CRS.
      3. Note: types of CRS distinguished in ISO 19111 are: 'geodetic CRS', 'projected CRS', 'vertical CRS', and 'engineering CRS'. In the EPSG Dataset 'geodetic CRS' is sub-divided into 'geocentric CRS', 'geographic 3D CRS', and 'geographic 2D CRS'.
  * **Coordinate Reference System (CRS)**<br>
    (OSDU) Along the IOGP/EPSG definition of Coordinate Reference System, in OSDU represented as a reference-data schema and their values or records.<br>
      &rarr; _Schema Usage Guide:_ [4.3.3 Conventions for CoordinateReferenceSystem and CoordinateTransformation](04-FrameOfReference.md#433-conventions-for-coordinatereferencesystem-and-coordinatetransformation)   <br>&rarr; _OSDU types/schemas:_ [reference-data--CoordinateReferenceSystem](../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md)
<a name="Coordinate-Transformation"></a>
* **Coordinate Transformation**<br>
  (OSDU entity type **CoordinateTransformation** in group-type reference-data) Description: _Used to describe a coordinate operation between two geodetic CRSs. The type is identified by CoordinateTransformationType (used by the system) and Kind facing the end-user. The Code is according to OSDU standard a string, the EPSG standard number is available via the CodeAsNumber property. Description carries EPSG's Remark. AttributionAuthority carries EPSG's DataSource. AliasNames carry the EPSG Alias contents._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CoordinateTransformation](../../E-R/reference-data/CoordinateTransformation.1.2.0.md)
<a name="Core-Analysis-Fluid-Type"></a>
* **Core Analysis Fluid Type**<br>
  (OSDU entity type **CoreAnalysisFluidType** in group-type reference-data) Description: _A type of fluid used during core analysis experiments, e.g., for saturation or desaturation of the sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CoreAnalysisFluidType](../../E-R/reference-data/CoreAnalysisFluidType.1.0.0.md)
<a name="Core-Preservation-Type"></a>
* **Core Preservation Type**<br>
  (OSDU entity type **CorePreservationType** in group-type reference-data) Description: _The technique to preserve or stabilize the core sample on removal from the core barrel or at the time of sample extraction._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CorePreservationType](../../E-R/reference-data/CorePreservationType.1.0.1.md)
<a name="Country"></a>
* **Country**<br>
  (GeoPoliticalEntityType) Area governed by a Country-like related system. Country is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="County"></a>
* **County**<br>
  (GeoPoliticalEntityType) Area governed by a County-like related system. County is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Criteria"></a>
* **Criteria**<br>
  (PPDM) Each criterion in a list of criteria is a specific trait or characteristic on which an identifier, judgment, interpretation or decision is based.
<a name="Crown-Dependency"></a>
* **Crown Dependency**<br>
  (GeoPoliticalEntityType) Area governed by a Crown Dependency-like related system. Crown Dependency is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="CRS"></a>
* **CRS**<br>
  (CoordinateReferenceSystem) Acronym for Coordinate Reference System<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CoordinateReferenceSystem](../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md)
<a name="Currency"></a>
* **Currency**<br>
  (OSDU entity type **Currency** in group-type reference-data) Description: _Used to describe the type of currencies._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--Currency](../../E-R/reference-data/Currency.1.0.0.md)
<a name="Curve-Sample-Type"></a>
* **Curve Sample Type**<br>
  (OSDU entity type **CurveSampleType** in group-type reference-data) Description: _The value type of well log curve samples, e.g. Float, double, string._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CurveSampleType](../../E-R/reference-data/CurveSampleType.1.0.0.md)
<a name="Custody-Event-Type"></a>
* **Custody Event Type**<br>
  (OSDU entity type **CustodyEventType** in group-type reference-data) Description: _Type of Chain of Custody Action_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CustodyEventType](../../E-R/reference-data/CustodyEventType.1.0.0.md)
<a name="Cut-Fluid-Type"></a>
* **Cut Fluid Type**<br>
  (OSDU entity type **CutFluidType** in group-type reference-data) Description: _Identifies the type of lubricating fluid used when physically cutting a rock sample, usually in preparation for testing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--CutFluidType](../../E-R/reference-data/CutFluidType.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## D

<a name="Data-Collection"></a>
* **Data Collection**<br>
  A set of OSDU Resource items, each identified by an OSDU record `id` (SRN). The osdu:wks:DataCollections:1.0.0 instances are **not** stored but intended for collaboration between client applications. <br>
    &rarr; _OSDU types/schemas:_ [work-product-component--PersistedCollection](../../E-R/work-product-component/PersistedCollection.1.2.0.md), [DataCollection](../../E-R/data-collection/DataCollection.1.0.0.md)
<a name="Data-Domain"></a>
* **Data Domain**<br>
  One of a small number of business subject areas that partition data (classified by the 'type' in `kind`) for data object handling. Example: seismic related data (surveys, trace data, faults, etc.), wellbore related data (well log, trajectory, etc.).
<a name="Data-Governance-Role-Type"></a>
* **Data Governance Role Type**<br>
  (OSDU entity type **DataGovernanceRoleType** in group-type reference-data) Description: _The data governance role a persona in data management can play as defined by the data governance processes._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DataGovernanceRoleType](../../E-R/reference-data/DataGovernanceRoleType.1.0.0.md)
<a name="Data-Platform"></a>
* **Data Platform**<br>
  (OSDU) OSDU Platform<br>
    &rarr; _See also_ [OSDU Platform](#OSDU-Platform).
<a name="Data-Quality"></a>
* **Data Quality**<br>
  (OSDU entity type **DataQuality** in group-type work-product-component) Description: _This is used to store the result from a run of a Data Quality Metric Evaluation engine. Captures summary information, such as which rule-set(s) and rule(s) have been used, when this was run and by whom. Detailed results may be associated with a dataset._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--DataQuality](../../E-R/work-product-component/DataQuality.2.0.0.md)
<a name="Data-Quality-Rule"></a>
* **Data Quality Rule**<br>
  (OSDU entity type **DataQualityRule** in group-type reference-data) Description: _A reference value describing a data quality rule._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DataQualityRule](../../E-R/reference-data/DataQualityRule.1.1.0.md)
<a name="Data-Quality-Rule-Set"></a>
* **Data Quality Rule Set**<br>
  (OSDU entity type **DataQualityRuleSet** in group-type reference-data) Description: _A set of data quality rules to assess specific aspects of the trustworthiness of data. It can aggregate references to individual DataQualityRule records as well as other DataQualityRuleSet  records. It is not permitted to create cyclic references._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DataQualityRuleSet](../../E-R/reference-data/DataQualityRuleSet.1.0.1.md)
<a name="Data-Quality-Rule-Status"></a>
* **Data Quality Rule Status**<br>
  (OSDU entity type **DataQualityRuleStatus** in group-type reference-data) Description: _The status of a DataQualityRule in assessments controlling whether or not the rule is evaluated or under development._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DataQualityRuleStatus](../../E-R/reference-data/DataQualityRuleStatus.1.0.0.md)
<a name="Data-Quality-Summary"></a>
* **Data Quality Summary**<br>
  (OSDU entity type **DataQualitySummary** in group-type work-product-component) Description: _This is used to store the latest summary of data quality evaluation results for each RuleSet and is associated by reference to a work product component or master data object. Only 1 DataQualitySummary per WPC/Master Object_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--DataQualitySummary](../../E-R/work-product-component/DataQualitySummary.1.0.0.md)
<a name="Data-Rule-Dimension-Type"></a>
* **Data Rule Dimension Type**<br>
  (OSDU entity type **DataRuleDimensionType** in group-type reference-data) Description: _A set of data quality rules to assess a specific aspect in the trustworthiness of data._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DataRuleDimensionType](../../E-R/reference-data/DataRuleDimensionType.1.0.0.md)
<a name="Data-Rule-Purpose-Type"></a>
* **Data Rule Purpose Type**<br>
  (OSDU entity type **DataRulePurposeType** in group-type reference-data) Description: _Reference value used by QualityDataRule to indicate the purpose and expected reaction on pass or failure._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DataRulePurposeType](../../E-R/reference-data/DataRulePurposeType.1.0.0.md)
<a name="DDMS"></a>
* **DDMS**<br>
  Domain data Management Service - A service that internally persists data of a specific domain. All data is exposed through service APIs. It is governed by Data Ecosystem but not necessary owned by it. It uses Data Ecosystem services to enforce contracts on data entry and use.
  The DDMS has recently been decomposed into:
  * DMS (Data Management Service)
    * Generic Data Infrastructure for a specific shape of data
    * Examples: File DMS, Object DMS, Tabular DMS, Timeseries DMS
  * DOMs (Domain Object Management Service)
    * They have APIs that expose domain objects
    * Expose setters and getters in standard exchange schema [relate WKS with this point]
    * They can expose additional protocols/schemas for domain objects
    * Example: Wellbore DOMS, Seismic DOMS
<a name="Decision-Approval-Status"></a>
* **Decision Approval Status**<br>
  (OSDU entity type **DecisionApprovalStatus** in group-type reference-data) Description: _The technical approval level for decisions, e.g., Peer Review, Discipline Expert, Holistic Integration._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DecisionApprovalStatus](../../E-R/reference-data/DecisionApprovalStatus.1.0.0.md)
<a name="Decision-Level"></a>
* **Decision Level**<br>
  (OSDU entity type **DecisionLevel** in group-type reference-data) Description: _The business authority level, e.g., Manager, Portfolio, Strategic._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DecisionLevel](../../E-R/reference-data/DecisionLevel.1.0.0.md)
<a name="Delta"></a>
* **Delta**<br>
  (ProspectType) Reservoir is river deposits at the marine margin. Delta is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Department"></a>
* **Department**<br>
  (GeoPoliticalEntityType) Area governed by a Department-like related system. Department is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Deposition-Geometry-Type"></a>
* **Deposition Geometry Type**<br>
  (OSDU entity type **DepositionGeometryType** in group-type reference-data) Description: _The Deposition Geometry classification (corresponding to Energistics RESQML DepositionMode). Examples are parallel to top, parallel to bottom, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepositionGeometryType](../../E-R/reference-data/DepositionGeometryType.1.0.0.md)
<a name="Depositional-Environment"></a>
* **Depositional Environment**<br>
  (OSDU entity type **DepositionalEnvironment** in group-type reference-data) Description: _DepositionalEnvironment describes the combination of physical, chemical, and biological processes associated with the deposition of a particular type of sediment and, therefore, the rock types that will be formed after lithification, if the sediment is preserved in the rock record. Depositional environments in ancient sediments are recognised using a combination of sedimentary facies, facies associations, sedimentary structures and fossils, particularly trace fossil assemblages._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepositionalEnvironment](../../E-R/reference-data/DepositionalEnvironment.1.0.0.md)
<a name="Depositional-Gross-Environment"></a>
* **Depositional Gross Environment**<br>
  (OSDU entity type **DepositionalGrossEnvironment** in group-type reference-data) Description: _The super class of Depositional Environment, referred to by DepositionalEnvironment and DepositionalSubEnvironment, which further detail the environment._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepositionalGrossEnvironment](../../E-R/reference-data/DepositionalGrossEnvironment.1.0.0.md)
<a name="Depositional-Sub-Environment"></a>
* **Depositional Sub Environment**<br>
  (OSDU entity type **DepositionalSubEnvironment** in group-type reference-data) Description: _DepositionalSubEnvironment describes a DepositionalEnvironment or a subset thereof in more detail, such that specific features and related geobodies of relevance can be discriminated._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepositionalSubEnvironment](../../E-R/reference-data/DepositionalSubEnvironment.1.0.0.md)
<a name="Deprecation"></a>
* **Deprecation**<br>
  (OSDU Data Definition) OSDU Data Definitions may discourage usage of properties or entire entity types by declaring them DEPRECATED. The properties are still indexed and the schemas are still including the definitions.<br>
    &rarr; _Schema Usage Guide:_ [Appendix C.14 Deprecation](92-Proposals.md#appendix-c14-deprecation)
<a name="Deprecation-of-Reference-Values"></a>
* **Deprecation of Reference Values**<br>
  (OSDU Data Definition) OSDU does not remove reference value records, instead it deprecates the records with the old record `id` and, if feasible, provides the upgrade resources to supersede the references.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.4.2 Reference Value Upgrade](93-OSDU-Schemas.md#appendix-d42-reference-value-upgrade)   <br>&rarr; _OSDU types/schemas:_ [reference-data--ReferenceValueUpgradeLookUp](../../E-R/reference-data/ReferenceValueUpgradeLookUp.2.0.0.md)
<a name="Deprecation-of-Schema-Properties"></a>
* **Deprecation of Schema Properties**<br>
  (OSDU Data Definition) Schema properties or entire entity types no longer recommended for use are declared deprecated; this is done by prefixing the property description with DEPRECATED. The properties are still indexed and the schemas are still including the definitions.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.4 Schema Upgrade](93-OSDU-Schemas.md#appendix-d4-schema-upgrade)   <br>&rarr; _OSDU types/schemas:_ [reference-data--SchemaUpgradeSpecification](../../E-R/reference-data/SchemaUpgradeSpecification.1.0.0.md)
<a name="Depth-Measurement-Type"></a>
* **Depth Measurement Type**<br>
  (OSDU entity type **DepthMeasurementType** in group-type reference-data) Description: _Downhole Depth Measurement Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepthMeasurementType](../../E-R/reference-data/DepthMeasurementType.1.0.0.md)
<a name="Depth-Shift"></a>
* **Depth Shift**<br>
  (OSDU entity type **DepthShift** in group-type work-product-component) Description: _Describes parameters used to shift and apply modified depth values for a sample/specimen, well log, or other data, based on a data record that is referenced as trusted source for depth._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--DepthShift](../../E-R/work-product-component/DepthShift.1.0.0.md)
<a name="Depth-Shift-Interpolation-Method"></a>
* **Depth Shift Interpolation Method**<br>
  (OSDU entity type **DepthShiftInterpolationMethod** in group-type reference-data) Description: _Identifies the method of interpolation to be used with a depth shift when the distance between original depths differs from the distance between shifted depths (e.g., None, Linear, Bilinear)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepthShiftInterpolationMethod](../../E-R/reference-data/DepthShiftInterpolationMethod.1.0.0.md)
<a name="Depth-Shift-Interpolation-Reason"></a>
* **Depth Shift Interpolation Reason**<br>
  (OSDU entity type **DepthShiftInterpolationReason** in group-type reference-data) Description: _Identifies the reason for interpolation to be used with a depth shift when the distance between original depths differs from the distance between shifted depths (e.g., rubble zone, a gap in the sample, an unconsolidated sample or other discrepancies)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepthShiftInterpolationReason](../../E-R/reference-data/DepthShiftInterpolationReason.1.0.0.md)
<a name="Depth-Shift-Type"></a>
* **Depth Shift Type**<br>
  (OSDU entity type **DepthShiftType** in group-type reference-data) Description: _Identifies the type of depth shift by specifying the entity to be shifted and the shift target (e.g., CoreToLog is intended to shift a set of core sample depths to align with a target well log)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DepthShiftType](../../E-R/reference-data/DepthShiftType.1.0.0.md)
<a name="Derrick-Type"></a>
* **Derrick Type**<br>
  (OSDU entity type **DerrickType** in group-type reference-data) Description: _Defines the type of derrick used on the rig._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DerrickType](../../E-R/reference-data/DerrickType.1.0.0.md)
<a name="Desaturation-Method"></a>
* **Desaturation Method**<br>
  (OSDU entity type **DesaturationMethod** in group-type reference-data) Description: _The technique used to remove oil or water from the rock sample, usually in preparation for lab analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DesaturationMethod](../../E-R/reference-data/DesaturationMethod.1.0.0.md)
<a name="Dimension"></a>
* **Dimension**<br>
  (PPDM) Dimensions describe the number and kind of spatial and temporal properties. A 2D object is linear, 3D objects are polygonal, 4D objects include time. Example: 2D, 3D, 4D, 5D,…
<a name="Dimension-Type"></a>
* **Dimension Type**<br>
  (OSDU entity type **DimensionType** in group-type reference-data) Description: _Geometry along which a velocity model is defined, such as line (could be checkshot), surface, volume, time series (for 4D/time lapse). Ex. 1D, 2D, 3D, 1D_TL, 2D_TL, and 3D_TL._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DimensionType](../../E-R/reference-data/DimensionType.1.0.0.md)
<a name="Discoverability"></a>
* **Discoverability**<br>
  (OSDU) Understand OSDU discoverability and its limitations. OSDU schemas support extensions, however, without discoverability unless using custom schemas. Recommendations in the Usage Guide Introduction and Known Issues.<br>
    &rarr; _Schema Usage Guide:_ [1.4.1 Search, Discoverability](01-Introduction.md#141-search-discoverability), [Appendix E.4 Search Queries do not work...](94-KnownIssues.md#appendix-e4-search-queries-do-not-work)
<a name="Discoverability-By-Search"></a>
* **Discoverability By Search**<br>
  (OSDU entity type **DiscoverabilityBySearch** in group-type reference-data) Description: _The enumeration of different levels of query discoverability from simple queries, flattened array queries, nested array queries or no discoverability at all (no-indexed arrays of objects)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DiscoverabilityBySearch](../../E-R/reference-data/DiscoverabilityBySearch.1.0.0.md)
<a name="Discretisation-Scheme-Type"></a>
* **Discretisation Scheme Type**<br>
  (OSDU entity type **DiscretisationSchemeType** in group-type reference-data) Description: _Describes geometrically where in a discretised cell representation of a velocity number field the value applies, such as vertex, cell center, average across cell._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DiscretisationSchemeType](../../E-R/reference-data/DiscretisationSchemeType.1.0.0.md)
<a name="Displaced-Fluid-Type"></a>
* **Displaced Fluid Type**<br>
  (OSDU entity type **DisplacedFluidType** in group-type reference-data) Description: _The type of fluid being displaced from the rock sample during saturation or desaturation measurements._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DisplacedFluidType](../../E-R/reference-data/DisplacedFluidType.1.0.0.md)
<a name="Disposition-Type"></a>
* **Disposition Type**<br>
  (OSDU entity type **DispositionType** in group-type reference-data) Description: _The result of a stage of movement, or use, of a product within the value stream of a well or facility._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DispositionType](../../E-R/reference-data/DispositionType.1.0.1.md)
<a name="District"></a>
* **District**<br>
  (GeoPoliticalEntityType) Area governed by a District-like related system. District is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Division"></a>
* **Division**<br>
  (GeoPoliticalEntityType) Area governed by a Division-like related system. Division is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Document"></a>
* **Document**<br>
  (OSDU entity type **Document** in group-type work-product-component) Description: _A document can be any document that is required to be stored in an electronic format. Examples of this could be daily drilling reports, drilling schematics, or material quality analysis reports._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--Document](../../E-R/work-product-component/Document.2.0.0.md)
<a name="Document-Store"></a>
* **Document Store**<br>
  A Document Store is a document-oriented database is designed for storing, retrieving, and managing semi-structured data.
<a name="Document-Taxonomy"></a>
* **Document Taxonomy**<br>
  (OSDU entity type **DocumentTaxonomy** in group-type reference-data) Description: _The Document Taxonomy provides a structured taxonomy for categorising document types. This taxonomy adheres to a consistent naming convention of a DISCIPLINE followed by a relevant DocumentType. In the practical implementation it uses a dot-based nomenclature e.g., <DISCIPLINE>.<DocumentType>, allowing for a two level hierarchy of the document type to support classification and search._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DocumentTaxonomy](../../E-R/reference-data/DocumentTaxonomy.1.0.0.md)
<a name="Document-Type"></a>
* **Document Type**<br>
  (OSDU entity type **DocumentType** in group-type reference-data) Description: _A piece of printed or electronic material containing communication or evidence that is intended for persistent or permanent record._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DocumentType](../../E-R/reference-data/DocumentType.1.0.1.md)
<a name="Domain"></a>
* **Domain**<br>
  * (Geophysics) The set of values an independent variable can take. For example, the independent variable of the time domain is time; and for the frequency domain, it is frequency.
  * (Reservoir Characterization)
    * A region of magnetic polarity within a ferromagnetic body. Domains collectively determine the magnetic properties of the body by their arrangement.
    * A region characterized by a specific feature.
  * (OSDU) Data domain
    &rarr; _See also_ [Data Domain](#Data-Domain).
<a name="Domain-Service"></a>
* **Domain Service**<br>
  A service that models a specific domain and implements its business logic. Usually leverages one or more domain data management services. The main difference to domain data management service is that it focuses on rich and elaborate consumption patterns as opposed to domain specific storage.<br>
    &rarr; _See also_ [DDMS](#DDMS).
<a name="Domain-Type"></a>
* **Domain Type**<br>
  (OSDU entity type **DomainType** in group-type reference-data) Description: _The vertical domain type of models, interpretations and representations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DomainType](../../E-R/reference-data/DomainType.1.0.0.md)
<a name="Down-Time-Type"></a>
* **Down Time Type**<br>
  (OSDU entity type **DownTimeType** in group-type reference-data) Description: _Specifies the loss caused by this event, or the type of the down time event is Planned, Unplanned or External._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DownTimeType](../../E-R/reference-data/DownTimeType.1.0.0.md)
<a name="Downtime-Component-Type"></a>
* **Downtime Component Type**<br>
  (OSDU entity type **DowntimeComponentType** in group-type reference-data) Description: _Identifies the "Where" condition of the downtime event; i.e. which component of the system was affected? The downtime component values are further sorted into Surface and Subsurface components_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DowntimeComponentType](../../E-R/reference-data/DowntimeComponentType.1.0.0.md)
<a name="Downtime-Event"></a>
* **Downtime Event**<br>
  (OSDU entity type **DowntimeEvent** in group-type work-product-component) Description: _A downtime event is an event that spans a discrete period that negatively affects the production or processing of hydrocarbon products (e.g. produced oil, processed diesel, etc.) at different levels of the operations (e.g. well, facility, operating unit). The event  information includes a descriptions of the event, why it occurred, etc., and free format comments that further expand on the incident. An associated record recording deferred volumes due to the event may also exist referencing this event._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--DowntimeEvent](../../E-R/work-product-component/DowntimeEvent.1.0.0.md)
<a name="Downtime-Event-Status"></a>
* **Downtime Event Status**<br>
  (OSDU entity type **DowntimeEventStatus** in group-type reference-data) Description: _Specifies the downtime event status, such as is 'suspended' or 'complete'._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DowntimeEventStatus](../../E-R/reference-data/DowntimeEventStatus.1.0.0.md)
<a name="Downtime-Reason-Detail-Type"></a>
* **Downtime Reason Detail Type**<br>
  (OSDU entity type **DowntimeReasonDetailType** in group-type reference-data) Description: _Identifies the "Why" condition of the downtime event; i.e. why did it occur? These are the basic reasons for, or causes of the event_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DowntimeReasonDetailType](../../E-R/reference-data/DowntimeReasonDetailType.1.0.0.md)
<a name="Downtime-Reason-Type"></a>
* **Downtime Reason Type**<br>
  (OSDU entity type **DowntimeReasonType** in group-type reference-data) Description: _Identifies the "What" condition of the downtime event; i.e. what general type of activity or issue was involved? The downtime reason codes are grouped into Planned and Unplanned categories_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DowntimeReasonType](../../E-R/reference-data/DowntimeReasonType.1.0.0.md)
<a name="Drainage-Condition"></a>
* **Drainage Condition**<br>
  (OSDU entity type **DrainageCondition** in group-type reference-data) Description: _Identifies whether a physical rock sample has been drained of fluid as a part of rock analysis such as triaxial testing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DrainageCondition](../../E-R/reference-data/DrainageCondition.1.0.0.md)
<a name="Drift-Type"></a>
* **Drift Type**<br>
  (OSDU entity type **DriftType** in group-type reference-data) Description: _The reference list of possible tubular drift types.  For example, is the drift type "Standard" or "Special"._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DriftType](../../E-R/reference-data/DriftType.1.0.0.md)
<a name="Drilling-Activity-Class-Type"></a>
* **Drilling Activity Class Type**<br>
  (OSDU entity type **DrillingActivityClassType** in group-type reference-data) Description: _The type of drilling activity classes_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DrillingActivityClassType](../../E-R/reference-data/DrillingActivityClassType.1.0.0.md)
<a name="Drilling-Reason-Type"></a>
* **Drilling Reason Type**<br>
  (OSDU entity type **DrillingReasonType** in group-type reference-data) Description: _Used to describe the type of drilling reasons._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DrillingReasonType](../../E-R/reference-data/DrillingReasonType.1.0.0.md)
<a name="Duchy"></a>
* **Duchy**<br>
  (GeoPoliticalEntityType) Area governed by a Duchy-like related system. Duchy is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Duration-Context"></a>
* **Duration Context**<br>
  (OSDU entity type **DurationContext** in group-type reference-data) Description: _The explicit duration within a nominal reporting period._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--DurationContext](../../E-R/reference-data/DurationContext.1.0.1.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## E

<a name="Earth-Model-Interpretation"></a>
* **Earth Model Interpretation**<br>
  (OSDU entity type **EarthModelInterpretation** in group-type work-product-component) Description: _A single, consistent interpretation of an entire earth model._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--EarthModelInterpretation](../../E-R/work-product-component/EarthModelInterpretation.1.2.0.md)
<a name="EDS"></a>
* **EDS**<br>
  (OSDU Connected Data Source) OSDU platform support for external, connected data sources.<br>
    &rarr; _OSDU types/schemas:_ [master-data--ConnectedSourceDataJob](../../E-R/master-data/ConnectedSourceDataJob.1.9.0.md), [master-data--ConnectedSourceRegistryEntry](../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md), [dataset--ConnectedSource.Generic](../../E-R/dataset/ConnectedSource.Generic.1.0.1.md)
<a name="Eds-External-Process-Type"></a>
* **Eds External Process Type**<br>
  (OSDU entity type **EdsExternalProcessType** in group-type reference-data) Description: _Type of processing applied by external data source ingestion system._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--EdsExternalProcessType](../../E-R/reference-data/EdsExternalProcessType.1.0.0.md)
<a name="Eds-Notification-Policy"></a>
* **Eds Notification Policy**<br>
  (OSDU entity type **EdsNotificationPolicy** in group-type reference-data) Description: _For external data source ingestion system to notify users on the ingestion run status_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--EdsNotificationPolicy](../../E-R/reference-data/EdsNotificationPolicy.1.0.0.md)
<a name="Elemental-Analysis-Method"></a>
* **Elemental Analysis Method**<br>
  (OSDU entity type **ElementalAnalysisMethod** in group-type reference-data) Description: _The technique used to detect an element in a specimen._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ElementalAnalysisMethod](../../E-R/reference-data/ElementalAnalysisMethod.1.0.0.md)
<a name="Elemental-Measurement-Method"></a>
* **Elemental Measurement Method**<br>
  (OSDU entity type **ElementalMeasurementMethod** in group-type reference-data) Description: _The list of methods used to quantify elemental concentrations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ElementalMeasurementMethod](../../E-R/reference-data/ElementalMeasurementMethod.1.0.0.md)
<a name="Elements"></a>
* **Elements**<br>
  (OSDU entity type **Elements** in group-type reference-data) Description: _Chemical elements that can be detected by elemental analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--Elements](../../E-R/reference-data/Elements.1.0.0.md)
<a name="Empire"></a>
* **Empire**<br>
  (GeoPoliticalEntityType) Area governed by a Empire-like related system. Empire is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Encoding-Format-Type"></a>
* **Encoding Format Type**<br>
  (OSDU entity type **EncodingFormatType** in group-type reference-data) Description: _Used to describe the type of encoding formats._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--EncodingFormatType](../../E-R/reference-data/EncodingFormatType.1.0.0.md)
<a name="End-Face-Estimation-Method"></a>
* **End Face Estimation Method**<br>
  (OSDU entity type **EndFaceEstimationMethod** in group-type reference-data) Description: _The method used to calculate the phase saturation at the end face of a rock core - that is, the exposed circular end of the core._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--EndFaceEstimationMethod](../../E-R/reference-data/EndFaceEstimationMethod.1.0.0.md)
<a name="Entity"></a>
* **Entity**
  * **Entity**<br>
    This can refer to an entity type, which is identified by a `kind`. Alternatively, it may refer to a record _instance_ described by a `kind`.<br>
      &rarr; _See also_ [kind](#kind).
  * **Entity**<br>
    (GeoPoliticalEntityType) Area governed by a Entity-like related system. Entity is represented as GeoPoliticalEntityType in OSDU.<br>
      &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Equilibrium-Model-Saturation-Type"></a>
* **Equilibrium Model Saturation Type**<br>
  (OSDU entity type **EquilibriumModelSaturationType** in group-type reference-data) Description: _List of types of fluid saturation systems applicable to reservoir simulation equilibrium models._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--EquilibriumModelSaturationType](../../E-R/reference-data/EquilibriumModelSaturationType.1.0.0.md)
<a name="Equipment-Inventory"></a>
* **Equipment Inventory**<br>
  (OSDU entity type **EquipmentInventory** in group-type master-data) Description: _Use with the Rig.2.0.0 or later schema. A list tracking the various types of equipment and units at the well site during a specific period of time. For example, Mud Pumps, Cement Units, Coil Tubing Reels,  etc._<br>
    &rarr; _OSDU types/schemas:_ [master-data--EquipmentInventory](../../E-R/master-data/EquipmentInventory.1.1.0.md)
<a name="ETP-Dataspace"></a>
* **ETP Dataspace**<br>
  (OSDU entity type **ETPDataspace** in group-type dataset) Description: _Describes the location and attributes of a Dataspace accessible through ETP (Energistics Transfer Protocol) APIs, for ETP 1.2 and above_<br>
    &rarr; _OSDU types/schemas:_ [dataset--ETPDataspace](../../E-R/dataset/ETPDataspace.1.0.1.md)
<a name="Evaluation-Plan"></a>
* **Evaluation Plan**<br>
  (OSDU entity type **EvaluationPlan** in group-type master-data) Description: _A planned evaluation on a drilling operation_<br>
    &rarr; _OSDU types/schemas:_ [master-data--EvaluationPlan](../../E-R/master-data/EvaluationPlan.1.1.0.md)
<a name="Event-Sourcing"></a>
* **Event Sourcing**<br>
  The Event Sourcing pattern defines an approach to handling operations on data that is driven by a sequence of events, each of which is recorded in an append-only store. Application code sends a series of events that imperatively describe each action that has occurred on the data to the event store, where they are persisted. Each event represents a set of changes to the data. The events are persisted in an event store that acts as the source of truth or system of record (the authoritative data source for a given data element or piece of information) about the current state of the data. The event store typically publishes these events so that consumers can be notified and can handle them if needed. Consumers could, for example, initiate tasks that apply the operations in the events to other systems, or perform any other associated action that is required to complete the operation. (More at http://martinfowler.com/eaaDev/EventSourcing.html)
<a name="Eventual-Consistency"></a>
* **Eventual Consistency**<br>
  Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.<br>
  <br>
  Eventual consistency is widely deployed in distributed systems, often under the moniker of optimistic replication, and has origins in early mobile computing projects. A system that has achieved eventual consistency is often said to have converged, or achieved replica convergence.<br>
    &rarr; _See also_ [CAP Theorem](#CAP-Theorem).
<a name="Existence-Kind"></a>
* **Existence Kind**<br>
  (OSDU entity type **ExistenceKind** in group-type reference-data) Description: _ExistenceKind describes at which stage the instance is in the cradle-to-grave span of its existence. Typical values are: "Proposed", "Planned", "Active", "Inactive", "Marked for Disposal"._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExistenceKind](../../E-R/reference-data/ExistenceKind.1.0.0.md)
<a name="Experimental-Schemas"></a>
* **Experimental Schemas**<br>
  (OSDU Data Definition) In rare cases, OSDU publishes schemas in experimental state. The major semantic version number is in these cases "0". The schema state will remain as `DEVELOPMENT`, allowing in-place updates.<br>
    &rarr; _Schema Usage Guide:_ [6.1.2 Record `kind`](06-LifecycleProperties.md#612-record-kind)
<a name="Extensibility-of-Schemas"></a>
* **Extensibility of Schemas**<br>
  (OSDU) OSDU schemas support extensions, however, without discoverability unless using custom schemas. Recommendations in the Usage Guide Introduction.<br>
    &rarr; _Schema Usage Guide:_ [1.4.2 Extensions](01-Introduction.md#142-extensions)
<a name="External-Catalog-Namespace"></a>
* **External Catalog Namespace**<br>
  (OSDU entity type **ExternalCatalogNamespace** in group-type reference-data) Description: _A namespace for a group of catalog records. This is used in conjunction with external catalogs to group records of a particular kind belonging together to achieve unique code and name look-ups._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExternalCatalogNamespace](../../E-R/reference-data/ExternalCatalogNamespace.1.0.0.md)
<a name="External-Data-Source"></a>
* **External Data Source**<br>
  (OSDU) OSDU platform support for external, connected data sources.<br>
    &rarr; _OSDU types/schemas:_ [master-data--ConnectedSourceDataJob](../../E-R/master-data/ConnectedSourceDataJob.1.9.0.md), [master-data--ConnectedSourceRegistryEntry](../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md), [dataset--ConnectedSource.Generic](../../E-R/dataset/ConnectedSource.Generic.1.0.1.md)
<a name="External-Reference-Value-Mapping"></a>
* **External Reference Value Mapping**<br>
  (OSDU entity type **ExternalReferenceValueMapping** in group-type reference-data) Description: _This entity is used to provide a mapping of external reference values to the current platform instance reference values. The scope can be global or specific to an external entity type. It can provide simple mappings or complex mappings, which maps the source value to multiple property values — well status and classification is an example for such complex mappings._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExternalReferenceValueMapping](../../E-R/reference-data/ExternalReferenceValueMapping.1.0.0.md)
<a name="External-Unit-Of-Measure"></a>
* **External Unit Of Measure**<br>
  (OSDU entity type **ExternalUnitOfMeasure** in group-type reference-data) Description: _A unit of measure description belonging to an external system, which is intended to be mapped or related to a platform-standard UnitOfMeasure record. Mappings can be exact or not. This is expressed by he MapStatus. MapStatus:identical means that the external unit reference can be swapped out by the platform standard reference. MapStatus:corrected indicates same concept but differences in the conversion parameters. Data must be treated or re-labeled; the decision can only be taken on a case by case basis. Finally  MapStatus:unsupported means that there is no equivalent platform standard reference. An ExternalUnitOfMeasure record can be seen as an 'alias' for the UnitOfMeasureID it refers to. Adding NameAliases to UnitOfMeasure is, however, not recommended because local overrides may be lost when new OSDU updates are shipped._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExternalUnitOfMeasure](../../E-R/reference-data/ExternalUnitOfMeasure.1.0.0.md)
<a name="External-Unit-Quantity"></a>
* **External Unit Quantity**<br>
  (OSDU entity type **ExternalUnitQuantity** in group-type reference-data) Description: _An external unit quantity definition to map to a platform standard UnitQuantity record. An ExternalUnitQuantity record can be seen as an 'alias' for the UnitQuantityID it refers to. Adding NameAliases to UnitQuantity is, however, not recommended because local overrides may be lost when new OSDU updates are shipped._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExternalUnitQuantity](../../E-R/reference-data/ExternalUnitQuantity.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## F

<a name="Facet-Role"></a>
* **Facet Role**<br>
  (OSDU entity type **FacetRole** in group-type reference-data) Description: _The role of a facet, e.g. maximum threshold, cumulative, surface condition, reservoir condition, oil, water, gas, condensate._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FacetRole](../../E-R/reference-data/FacetRole.1.1.0.md)
<a name="Facet-Type"></a>
* **Facet Type**<br>
  (OSDU entity type **FacetType** in group-type reference-data) Description: _Enumerations of the type of qualifier that applies to a property type to provide additional context about the nature of the property. For example, may include conditions, direction, qualifiers, or statistics. Facets are used in RESQML to provide qualifiers to existing property types, which minimizes the need to create specialized property types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FacetType](../../E-R/reference-data/FacetType.1.0.0.md)
<a name="Facility"></a>
* **Facility**<br>
  (OSDU) In current OSDU definitions Well, Wellbore and Rig are "facilities". Surface facilities like, e.g., compressors, pumps, pipelines, are currently not modelled.<br>
    &rarr; _OSDU types/schemas:_ [AbstractFacility](../../E-R/abstract/AbstractFacility.1.1.0.md), [master-data--Rig](../../E-R/master-data/Rig.2.0.0.md), [master-data--Well](../../E-R/master-data/Well.1.5.0.md), [master-data--Wellbore](../../E-R/master-data/Wellbore.1.5.1.md)
<a name="Facility-Event-Type"></a>
* **Facility Event Type**<br>
  (OSDU entity type **FacilityEventType** in group-type reference-data) Description: _Used to describe the type of facility events._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FacilityEventType](../../E-R/reference-data/FacilityEventType.1.0.0.md)
<a name="Facility-State-Type"></a>
* **Facility State Type**<br>
  (OSDU entity type **FacilityStateType** in group-type reference-data) Description: _Life Cycle [Facility State Type] is a set of major phases that are significant to regulators and/or business stakeholders. Life Cycle may apply to a well or its components [or other facility]._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FacilityStateType](../../E-R/reference-data/FacilityStateType.1.0.0.md)
<a name="Facility-Type"></a>
* **Facility Type**<br>
  (OSDU entity type **FacilityType** in group-type reference-data) Description: _Used to identify and describe the type of facility. A facility is a grouping of equipment that is located within a specific geographic boundary or site and that is used in the context of energy-related activities such as exploration, extraction, generation, storage, processing, disposal, supply, or transfer. Clarifications: (1) A facility may be surface or subsurface located. (2) Usually facility equipment is commonly owned or operated. (3) Industry definitions may vary and differ from this one._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FacilityType](../../E-R/reference-data/FacilityType.1.0.0.md)
<a name="Fault-Imbricate"></a>
* **Fault Imbricate**<br>
  (ProspectType) Porous reservoir capped by top seal and laterally truncated by sealing fault. Fault Imbricate is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Fault-Interpretation"></a>
* **Fault Interpretation**<br>
  (OSDU entity type **FaultInterpretation** in group-type work-product-component) Description: _Geologic information associated to fault-related objects  (marker, fault sticks, modeled objects like triangulated surface)_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FaultInterpretation](../../E-R/work-product-component/FaultInterpretation.1.3.0.md)
<a name="Fault-Plane"></a>
* **Fault Plane**<br>
  (ProspectType) Reservoir is porous rock abutting a sealing fault or non-permeable rock across the fault. Fault Plane is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Fault-Throw-Type"></a>
* **Fault Throw Type**<br>
  (OSDU entity type **FaultThrowType** in group-type reference-data) Description: _Classification of the fault throw type, e.g. reverse, normal etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FaultThrowType](../../E-R/reference-data/FaultThrowType.1.0.0.md)
<a name="Feature"></a>
* **Feature**
  * **Feature**<br>
    (Energistics RESQML) Something that has physical existence at some point during the exploration, development, production, or abandonment of a reservoir. For example: It can be a boundary, a rock volume, a basin area, but also extends to a drilled well, a drilling rig, an injected or produced fluid, or a 2D, 3D, or 4D seismic survey. Features are divided into these categories: geological or technical.
  * **Feature**<br>
    (OSDU) In OSDU the Energistics RESQML features exist under two categories: 'global features' are features, which are recognizable across different model realizations or versions and are under the master-data group-type; 'local features' represent RESQML features, which are existing just in the context of a model and are under the work-product-component group-type. <br>
      &rarr; _OSDU types/schemas:_ [master-data--BoundaryFeature](../../E-R/master-data/BoundaryFeature.1.1.0.md), [master-data--ModelFeature](../../E-R/master-data/ModelFeature.1.1.0.md), [master-data--RockVolumeFeature](../../E-R/master-data/RockVolumeFeature.1.1.0.md), [work-product-component--LocalBoundaryFeature](../../E-R/work-product-component/LocalBoundaryFeature.1.2.0.md), [work-product-component--LocalModelFeature](../../E-R/work-product-component/LocalModelFeature.1.2.0.md), [work-product-component--LocalRockVolumeFeature](../../E-R/work-product-component/LocalRockVolumeFeature.1.2.0.md)
<a name="Feature-Type"></a>
* **Feature Type**<br>
  (OSDU entity type **FeatureType** in group-type reference-data) Description: _Used to describe the type of features._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FeatureType](../../E-R/reference-data/FeatureType.1.0.0.md)
<a name="Federated-state"></a>
* **Federated state**<br>
  (GeoPoliticalEntityType) Area governed by a Federated state-like related system. Federated state is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Field"></a>
* **Field**<br>
  (OSDU entity type **Field** in group-type master-data) Description: _A mineral deposit that has been exploited for commercial purposes._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Field](../../E-R/master-data/Field.1.1.0.md)
<a name="File-Collection-Bluware-Open-VDS"></a>
* **File Collection Bluware Open VDS**<br>
  (OSDU entity type **FileCollection.Bluware.OpenVDS** in group-type dataset) Description: _The dataset representation for optimized seismic access using the OpenVDS (Open Volume Data Store) framework._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.Bluware.OpenVDS](../../E-R/dataset/FileCollection.Bluware.OpenVDS.1.2.0.md)
<a name="File-Collection-EPC"></a>
* **File Collection EPC**<br>
  (OSDU entity type **FileCollection.EPC** in group-type dataset) Description: _Energistics Packaging Convention  (EPC) supports complex, multi-file datasets. This file collection allows to keep the EPC file with its external parts (in most cases a single HDF5 file) all together._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.EPC](../../E-R/dataset/FileCollection.EPC.1.0.2.md)
<a name="File-Collection-Esri-Shape"></a>
* **File Collection Esri Shape**<br>
  (OSDU entity type **FileCollection.Esri.Shape** in group-type dataset) Description: _A dataset representing a shapefile format, i.e. a collection of files with specific extensions. A shapefile is a geospatial vector data format for geographic information system (GIS) software. It is developed and regulated by Esri as a mostly open specification for data interoperability among Esri and other GIS software products. The shapefile format can spatially describe vector features: points, lines, and polygons, representing, for example, water wells, rivers, and lakes. Each item usually has attributes that describe it, such as name or properties. The role of the files in the collection is identified by the standard file extension, e.g. '.dbf', '.shp', '.shx', etc._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.Esri.Shape](../../E-R/dataset/FileCollection.Esri.Shape.1.1.0.md)
<a name="File-Collection-Generic"></a>
* **File Collection Generic**<br>
  (OSDU entity type **FileCollection.Generic** in group-type dataset) Description: _The generic file collection template._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.Generic](../../E-R/dataset/FileCollection.Generic.1.1.0.md)
<a name="File-Collection-SEGA"></a>
* **File Collection SEGA**<br>
  (OSDU entity type **FileCollection.SEGA** in group-type dataset) Description: _A representation for a SEG Format A dataset represented as a set of files or tape reels containing seismic field trace recordings or processed traces. The format description is provided by the 1967 paper  https://seg.org/Portals/0/SEG/News%20and%20Resources/Technical%20Standards/seg_a_b_ex.pdf._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.SEGA](../../E-R/dataset/FileCollection.SEGA.1.1.0.md)
<a name="File-Collection-SEGB"></a>
* **File Collection SEGB**<br>
  (OSDU entity type **FileCollection.SEGB** in group-type dataset) Description: _A representation for a SEG Format B dataset represented as a set of files or tape reels containing seismic field trace recordings or processed traces. The format description is provided by the 1967 paper  https://seg.org/Portals/0/SEG/News%20and%20Resources/Technical%20Standards/seg_a_b_ex.pdf._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.SEGB](../../E-R/dataset/FileCollection.SEGB.1.1.0.md)
<a name="File-Collection-SEGD"></a>
* **File Collection SEGD**<br>
  (OSDU entity type **FileCollection.SEGD** in group-type dataset) Description: _A generic representation for  SEGD dataset represented as set of files, e.g. representing original tape reels._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.SEGD](../../E-R/dataset/FileCollection.SEGD.1.2.0.md)
<a name="File-Collection-SEGY"></a>
* **File Collection SEGY**<br>
  (OSDU entity type **FileCollection.SEGY** in group-type dataset) Description: _A generic representation for  SEGY dataset represented as set of files, e.g. representing original tape reels._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.SEGY](../../E-R/dataset/FileCollection.SEGY.1.3.0.md)
<a name="File-Collection-Slb-Open-ZGY"></a>
* **File Collection Slb Open ZGY**<br>
  (OSDU entity type **FileCollection.Slb.OpenZGY** in group-type dataset) Description: _The dataset representation for optimized seismic access to the OpenZGY framework developed by Schlumberger, storing seismic 3D data for seismic interpretation._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.Slb.OpenZGY](../../E-R/dataset/FileCollection.Slb.OpenZGY.1.2.0.md)
<a name="File-Collection-TGSMDIO"></a>
* **File Collection TGSMDIO**<br>
  (OSDU entity type **FileCollection.TGS.MDIO** in group-type dataset) Description: _The dataset representation for optimized seismic access using the (Multi-dimensional input-output) framework._<br>
    &rarr; _OSDU types/schemas:_ [dataset--FileCollection.TGS.MDIO](../../E-R/dataset/FileCollection.TGS.MDIO.1.0.0.md)
<a name="File-Compressed-Vector-Headers"></a>
* **File Compressed Vector Headers**<br>
  (OSDU entity type **File.CompressedVectorHeaders** in group-type dataset) Description: _A File type carrying compression and vector header mapping information._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.CompressedVectorHeaders](../../E-R/dataset/File.CompressedVectorHeaders.1.1.0.md)
<a name="File-EML"></a>
* **File EML**<br>
  (OSDU entity type **File.EML** in group-type dataset) Description: _An EML file is the XML expression of an EML Entity : EnergyML Common Technical Architecture (CTA) Entity like Activity Template, Activity, Graphical Attributes (Energistics industry-specific standard)._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.EML](../../E-R/dataset/File.EML.1.1.0.md)
<a name="File-Generic"></a>
* **File Generic**<br>
  (OSDU entity type **File.Generic** in group-type dataset) Description: _The Generic File template._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.Generic](../../E-R/dataset/File.Generic.1.1.0.md)
<a name="File-Geo-JSON"></a>
* **File Geo JSON**<br>
  (OSDU entity type **File.GeoJSON** in group-type dataset) Description: _GeoJSON is an open standard format designed for representing simple geographical features, optionally along with their non-spatial attributes. It is based on the JSON format; the schema is available via https://geojson.org/schema/FeatureCollection.json. The features include points, line strings, polygons, and multi-part collections of these types. Coordinates are exclusively expressed in EPSG::4326._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.GeoJSON](../../E-R/dataset/File.GeoJSON.1.1.0.md)
<a name="File-HDF5"></a>
* **File HDF5**<br>
  (OSDU entity type **File.HDF5** in group-type dataset) Description: _The Hierarchical Data Format version 5 (HDF5), is an open source file format that supports large, complex, heterogeneous data. HDF5 uses a "file directory" like structure that allows you to organize data within the file in many different structured ways, as you might do with files on your computer. The HDF5 format also allows for embedding of metadata making it self-describing. If this File.HDF5 file is part of an EPC+HDF5 combo, this dataset should **not** be used but the FileCollection.EPC must be used instead._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.HDF5](../../E-R/dataset/File.HDF5.1.1.0.md)
<a name="File-Image-JPEG"></a>
* **File Image JPEG**<br>
  (OSDU entity type **File.Image.JPEG** in group-type dataset) Description: _An image file in JPEG format, https://en.wikipedia.org/wiki/JPEG._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.Image.JPEG](../../E-R/dataset/File.Image.JPEG.1.1.0.md)
<a name="File-Image-PNG"></a>
* **File Image PNG**<br>
  (OSDU entity type **File.Image.PNG** in group-type dataset) Description: _An image file in Portable Network Graphics (PNG) format, https://en.wikipedia.org/wiki/Portable_Network_Graphics._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.Image.PNG](../../E-R/dataset/File.Image.PNG.1.1.0.md)
<a name="File-Image-TIFF"></a>
* **File Image TIFF**<br>
  (OSDU entity type **File.Image.TIFF** in group-type dataset) Description: _An image file in Tagged Image File Format (TIFF), https://en.wikipedia.org/wiki/TIFF._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.Image.TIFF](../../E-R/dataset/File.Image.TIFF.1.1.0.md)
<a name="File-Image-World-File"></a>
* **File Image World File**<br>
  (OSDU entity type **File.Image.WorldFile** in group-type dataset) Description: _A file accompanying a File.Image.JPEG, File.Image.PNG or File.Image.TIFF containing the original pixel to 'world' coordinate transformation instructions. Typical file extensions are .jgw, .j2w, .pgw, .tfw, depending on the image type in context._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.Image.WorldFile](../../E-R/dataset/File.Image.WorldFile.1.1.0.md)
<a name="File-OGC-Geo-TIFF"></a>
* **File OGC Geo TIFF**<br>
  (OSDU entity type **File.OGC.GeoTIFF** in group-type dataset) Description: _File.OGC.GeoTIFF represents a standard, tagged image file format defined by the Open Geospatial Consortium. The geospatial metadata are included or 'inlined' in the file. The geospatial information includes map projection, coordinate systems, ellipsoids, datums, and everything else necessary to establish the exact spatial reference for the file._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.OGC.GeoTIFF](../../E-R/dataset/File.OGC.GeoTIFF.1.1.0.md)
<a name="File-PRODML"></a>
* **File PRODML**<br>
  (OSDU entity type **File.PRODML** in group-type dataset) Description: _A PRODML file is the expression of a PRODML Entity (Energistics industry-specific standard). PRODML is a set of standards for optimizing producing oil and gas wells, with a focus on data from the reservoir-wellbore boundary to the custody transfer point. PRODML files follow xml conventions._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.PRODML](../../E-R/dataset/File.PRODML.1.1.0.md)
<a name="File-Seismic-Histogram"></a>
* **File Seismic Histogram**<br>
  (OSDU entity type **File.SeismicHistogram** in group-type dataset) Description: _Typically an artefact of a SeismicTraceData or SeismicFieldTraceData record containing a statistical summary and one or more histograms._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.SeismicHistogram](../../E-R/dataset/File.SeismicHistogram.1.1.0.md)
<a name="File-Seismic-Line-Geometry"></a>
* **File Seismic Line Geometry**<br>
  (OSDU entity type **File.SeismicLineGeometry** in group-type dataset) Description: _A dedicated dataset type referring to seismic 2D line geometry. The associated file format is content--TraceNavigation._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.SeismicLineGeometry](../../E-R/dataset/File.SeismicLineGeometry.1.1.0.md)
<a name="File-Tabular-Data"></a>
* **File Tabular Data**<br>
  (OSDU entity type **File.TabularData** in group-type dataset) Description: _A dataset record representing tabular data. The actual format is defined via data.DatasetProperties.FileSourceInfo.EncodingFormatTypeID. Each data row contains all columns. Column metadata are_<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.TabularData](../../E-R/dataset/File.TabularData.1.0.0.md)
<a name="File-WITSML"></a>
* **File WITSML**<br>
  (OSDU entity type **File.WITSML** in group-type dataset) Description: _Schema describing a WITSML file resource._<br>
    &rarr; _OSDU types/schemas:_ [dataset--File.WITSML](../../E-R/dataset/File.WITSML.1.1.0.md)
<a name="FIT"></a>
* **FIT**<br>
  (OSDU FormationIntegrityTest) Abbreviation for Formation Integrity Test<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FormationIntegrityTest](../../E-R/work-product-component/FormationIntegrityTest.1.2.0.md)
<a name="FIXED"></a>
* **FIXED**<br>
  (OSDU Reference Value Governance) A reference value governance mode for enumeration-like reference value lists, which are not intended to be extended.<br>
    &rarr; _Schema Usage Guide:_ [2.2 Reference Data](02-GroupType.md#22-reference-data), [Appendix D.3.6 Reference Value Governance Definition](93-OSDU-Schemas.md#appendix-d36-reference-value-governance-definition)
<a name="Flare-Type"></a>
* **Flare Type**<br>
  (OSDU entity type **FlareType** in group-type reference-data) Description: _Defines the type of flare used on the rig._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FlareType](../../E-R/reference-data/FlareType.1.0.0.md)
<a name="Flow-Test"></a>
* **Flow Test**<br>
  (OSDU entity type **FlowTest** in group-type work-product-component) Description: _A flow measurement captured for a discrete period using a test measurement vessel or other measurement device (well test separator, wellhead MPFM, etc.) to obtain individual flow rates. During the testing period pressure, temperature, and fluid samples may be obtained so that an estimated 24-hour flow rate at standard conditions can be calculated. This theoretical volume will typically be used for hydrocarbon allocation and well surveillance purposes._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FlowTest](../../E-R/work-product-component/FlowTest.1.0.0.md)
<a name="Flow-Test-Measurement-Type"></a>
* **Flow Test Measurement Type**<br>
  (OSDU entity type **FlowTestMeasurementType** in group-type reference-data) Description: _The kinds of quantities recorded for an instance of a flow test record._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FlowTestMeasurementType](../../E-R/reference-data/FlowTestMeasurementType.1.0.0.md)
<a name="Flow-Test-Type"></a>
* **Flow Test Type**<br>
  (OSDU entity type **FlowTestType** in group-type reference-data) Description: _A test of flow rate, pressure and fluids to determine the capability of a well._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FlowTestType](../../E-R/reference-data/FlowTestType.1.0.1.md)
<a name="Fluid-Additive-Conc-Unit-Of-Measure"></a>
* **Fluid Additive Conc Unit Of Measure**<br>
  (OSDU entity type **FluidAdditiveConcUnitOfMeasure** in group-type reference-data) Description: _Fluid Additive Concentration Unit of Measure - Unit of measurement for the selected Additive concentration._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidAdditiveConcUnitOfMeasure](../../E-R/reference-data/FluidAdditiveConcUnitOfMeasure.1.0.0.md)
<a name="Fluid-Additive-Concentration-Type"></a>
* **Fluid Additive Concentration Type**<br>
  (OSDU entity type **FluidAdditiveConcentrationType** in group-type reference-data) Description: _Fluid Additive Concentration Type - Percentage concentration of additive in fluid and basis for that percentage representation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidAdditiveConcentrationType](../../E-R/reference-data/FluidAdditiveConcentrationType.1.0.0.md)
<a name="Fluid-Additive-Formulation-Type"></a>
* **Fluid Additive Formulation Type**<br>
  (OSDU entity type **FluidAdditiveFormulationType** in group-type reference-data) Description: _Fluid Additive Formulation Type - Whether wet or dry._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidAdditiveFormulationType](../../E-R/reference-data/FluidAdditiveFormulationType.1.0.0.md)
<a name="Fluid-Additive-Name"></a>
* **Fluid Additive Name**<br>
  (OSDU entity type **FluidAdditiveName** in group-type reference-data) Description: _Any additive added to any fluid defined as part of the cement job._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidAdditiveName](../../E-R/reference-data/FluidAdditiveName.1.0.0.md)
<a name="Fluid-Additive-Unit-Of-Measure"></a>
* **Fluid Additive Unit Of Measure**<br>
  (OSDU entity type **FluidAdditiveUnitOfMeasure** in group-type reference-data) Description: _Fluid Additive Unit Of Measure - Definition of the additive unit of measure._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidAdditiveUnitOfMeasure](../../E-R/reference-data/FluidAdditiveUnitOfMeasure.1.0.0.md)
<a name="Fluid-Boundary-Interpretation"></a>
* **Fluid Boundary Interpretation**<br>
  (OSDU entity type **FluidBoundaryInterpretation** in group-type work-product-component) Description: _FluidBoundary information  associated to Fluid boundary-related objects  (planes, triangulated surfaces)_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FluidBoundaryInterpretation](../../E-R/work-product-component/FluidBoundaryInterpretation.1.2.0.md)
<a name="Fluid-Contact-Type"></a>
* **Fluid Contact Type**<br>
  (OSDU entity type **FluidContactType** in group-type reference-data) Description: _Describes the kind of contact of this boundary._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidContactType](../../E-R/reference-data/FluidContactType.1.0.0.md)
<a name="Fluid-Density-Measurement-Method"></a>
* **Fluid Density Measurement Method**<br>
  (OSDU entity type **FluidDensityMeasurementMethod** in group-type reference-data) Description: _Fluid density measurement methods whether downhole or surface, automatic or manual._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidDensityMeasurementMethod](../../E-R/reference-data/FluidDensityMeasurementMethod.1.0.0.md)
<a name="Fluid-Model"></a>
* **Fluid Model**<br>
  (OSDU entity type **FluidModel** in group-type work-product-component) Description: _A Fluid Model is a mathematical model which describes the fluid behaviour. It is often derived from sources such as laboratory fluid sample analysis. Fluid models typically contain properties that can be defined using tables (e.g. Black Oil Table), using Equation of State formulation methods, using correlations, or a combination of the above. Fluid models are frequently an input for reservoir simulation._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FluidModel](../../E-R/work-product-component/FluidModel.1.0.0.md)
<a name="Fluid-Model-Property-Formulation-Method"></a>
* **Fluid Model Property Formulation Method**<br>
  (OSDU entity type **FluidModelPropertyFormulationMethod** in group-type reference-data) Description: _List of formulation methods, such as Peng-Robinson equation of state, used in generating the numerical values assigned to Fluid Model properties._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidModelPropertyFormulationMethod](../../E-R/reference-data/FluidModelPropertyFormulationMethod.1.0.0.md)
<a name="Fluid-Model-Property-Phase"></a>
* **Fluid Model Property Phase**<br>
  (OSDU entity type **FluidModelPropertyPhase** in group-type reference-data) Description: _The phase of the fluid model property identified._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidModelPropertyPhase](../../E-R/reference-data/FluidModelPropertyPhase.1.0.0.md)
<a name="Fluid-Model-Property-Type"></a>
* **Fluid Model Property Type**<br>
  (OSDU entity type **FluidModelPropertyType** in group-type reference-data) Description: _List of fluid model property types that may be represented in a Fluid Model, such as phase equilibrium, densities, and viscosities._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidModelPropertyType](../../E-R/reference-data/FluidModelPropertyType.1.0.0.md)
<a name="Fluid-Model-Saturation-Type"></a>
* **Fluid Model Saturation Type**<br>
  (OSDU entity type **FluidModelSaturationType** in group-type reference-data) Description: _The list of the phase behavior systems, assigned to the saturation type, that are used by the simulator to equilibrate the model (e.g. bubble point, etc)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidModelSaturationType](../../E-R/reference-data/FluidModelSaturationType.1.0.0.md)
<a name="Fluid-Model-Surface-Separation-Process-Type"></a>
* **Fluid Model Surface Separation Process Type**<br>
  (OSDU entity type **FluidModelSurfaceSeparationProcessType** in group-type reference-data) Description: _List of the types of processes used to separate the produced fluid into a gas and liquid stream at the surface._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidModelSurfaceSeparationProcessType](../../E-R/reference-data/FluidModelSurfaceSeparationProcessType.1.0.0.md)
<a name="Fluid-Model-Type"></a>
* **Fluid Model Type**<br>
  (OSDU entity type **FluidModelType** in group-type reference-data) Description: _List of types of fluid models, which are approaches used to describe the behavior and characteristics of fluids. They vary in complexity of approach and physical processes modelled._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidModelType](../../E-R/reference-data/FluidModelType.1.0.0.md)
<a name="Fluid-Phase-Type"></a>
* **Fluid Phase Type**<br>
  (OSDU entity type **FluidPhaseType** in group-type reference-data) Description: _The fluid phase present in a geological unit's pore space. Examples: aquifer, gas cap, oil column, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidPhaseType](../../E-R/reference-data/FluidPhaseType.1.0.0.md)
<a name="Fluid-Phases-Present"></a>
* **Fluid Phases Present**<br>
  (OSDU entity type **FluidPhasesPresent** in group-type reference-data) Description: _Identifies the phases of fluid present in the sample. In this context, the concept is a combination of substance type and phase._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidPhasesPresent](../../E-R/reference-data/FluidPhasesPresent.1.0.0.md)
<a name="Fluid-Property-Facet-Name"></a>
* **Fluid Property Facet Name**<br>
  (OSDU entity type **FluidPropertyFacetName** in group-type reference-data) Description: _Reference list of facet names, includes items such as such as  Minimum, Maximum  and Average_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidPropertyFacetName](../../E-R/reference-data/FluidPropertyFacetName.1.0.0.md)
<a name="Fluid-Property-Name"></a>
* **Fluid Property Name**<br>
  (OSDU entity type **FluidPropertyName** in group-type reference-data) Description: _Fluid properties such as Ph, Pv, Yp, Oil/Water Ratio_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidPropertyName](../../E-R/reference-data/FluidPropertyName.1.0.0.md)
<a name="Fluid-Resistivity-Measurement-Method"></a>
* **Fluid Resistivity Measurement Method**<br>
  (OSDU entity type **FluidResistivityMeasurementMethod** in group-type reference-data) Description: _The method of measuring a fluid sample's resistance when exposed to an electrical current._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidResistivityMeasurementMethod](../../E-R/reference-data/FluidResistivityMeasurementMethod.1.0.0.md)
<a name="Fluid-Rheological-Model-Type"></a>
* **Fluid Rheological Model Type**<br>
  (OSDU entity type **FluidRheologicalModelType** in group-type reference-data) Description: _Mathematical model used in cement calculations_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidRheologicalModelType](../../E-R/reference-data/FluidRheologicalModelType.1.0.1.md)
<a name="Fluid-Rheometer-Temp-Direction"></a>
* **Fluid Rheometer Temp Direction**<br>
  (OSDU entity type **FluidRheometerTempDirection** in group-type reference-data) Description: _The temperature trend when rheometer readings are taken._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidRheometerTempDirection](../../E-R/reference-data/FluidRheometerTempDirection.1.0.0.md)
<a name="Fluid-Saturant-Type"></a>
* **Fluid Saturant Type**<br>
  (OSDU entity type **FluidSaturantType** in group-type reference-data) Description: _Missing description for FluidSaturantType_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidSaturantType](../../E-R/reference-data/FluidSaturantType.1.0.0.md)
<a name="Fluid-System-Analysis-Type"></a>
* **Fluid System Analysis Type**<br>
  (OSDU entity type **FluidSystemAnalysisType** in group-type reference-data) Description: _A fluid system in the context of sample analysis is the combination of certain fluids (e.g. oil, water) and/or gases (e.g. air, CO2), used in lab tests on rock specimens._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FluidSystemAnalysisType](../../E-R/reference-data/FluidSystemAnalysisType.1.0.0.md)
<a name="Fluids-Program"></a>
* **Fluids Program**<br>
  (OSDU entity type **FluidsProgram** in group-type master-data) Description: _The planned or actual drilling fluid program per hole section or depth interval._<br>
    &rarr; _OSDU types/schemas:_ [master-data--FluidsProgram](../../E-R/master-data/FluidsProgram.1.3.0.md)
<a name="Fluids-Report"></a>
* **Fluids Report**<br>
  (OSDU entity type **FluidsReport** in group-type master-data) Description: _Used to capture an analysis of the drilling mud, completion fluid or other fluids pumped during well construction. Printed snapshots, e.g. PDF files, are captured as work-product-component--Document, which relate via data.LineageAssertions._<br>
    &rarr; _OSDU types/schemas:_ [master-data--FluidsReport](../../E-R/master-data/FluidsReport.1.2.0.md)
<a name="Forearc-Ocean-Continent"></a>
* **Forearc Ocean-Continent**<br>
  (BasinType) Structural basin developed on top of accretionary prism in front of oceanic arc developed on leading edge of continental plate that is overriding subducting oceanic plate. Forearc Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Forearc-Ocean-Ocean"></a>
* **Forearc Ocean-Ocean**<br>
  (BasinType) Structural basin developed on top of accretionary prism in front of oceanic arc developed on leading edge of oceanic plate that is overriding subducting oceanic plate. Forearc Ocean-Ocean is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Forearc-Piggyback-Ocean-Continent"></a>
* **Forearc Piggyback Ocean-Continent**<br>
  (BasinType) Fore-arc with basin carried on thrust sheet at continental margin. Forearc Piggyback Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Forearc-Piggyback-Ocean-Ocean"></a>
* **Forearc Piggyback Ocean-Ocean**<br>
  (BasinType) Fore-arc with basin carried on thrust sheet in front of oceanic arc. Forearc Piggyback Ocean-Ocean is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Foreland-Basin"></a>
* **Foreland Basin**<br>
  (BasinType) Basin developed immediately in front of advancing thrust or transpressional strike slip belt by loading/depression of (continental) crust by overriding crustal material (e.g. thrust sheets). Foreland Basin is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Format"></a>
* **Format**<br>
  (PPDM) Format is used to describe how data is organized in digital form. Many formats are defined by standards organizations. Understanding the format helps the user manage and deploy data appropriately.
<a name="Formation-Integrity-Pressure-Data-Source"></a>
* **Formation Integrity Pressure Data Source**<br>
  (OSDU entity type **FormationIntegrityPressureDataSource** in group-type reference-data) Description: _The data source location of the measured values acquired during a Formation Integrity Test._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FormationIntegrityPressureDataSource](../../E-R/reference-data/FormationIntegrityPressureDataSource.1.0.0.md)
<a name="Formation-Integrity-Surface-Pressure-Data-Source"></a>
* **Formation Integrity Surface Pressure Data Source**<br>
  (OSDU entity type **FormationIntegritySurfacePressureDataSource** in group-type reference-data) Description: _The measurement source for Formation Integrity Surface Pressure readings._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FormationIntegritySurfacePressureDataSource](../../E-R/reference-data/FormationIntegritySurfacePressureDataSource.1.0.0.md)
<a name="Formation-Integrity-Test"></a>
* **Formation Integrity Test**<br>
  (OSDU entity type **FormationIntegrityTest** in group-type work-product-component) Description: _A downhole pressure test performed in open hole to measure formation strength._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FormationIntegrityTest](../../E-R/work-product-component/FormationIntegrityTest.1.2.0.md)
<a name="Formation-Integrity-Test-Result"></a>
* **Formation Integrity Test Result**<br>
  (OSDU entity type **FormationIntegrityTestResult** in group-type reference-data) Description: _The set of outcome types from a completed Formation Integrity Test._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FormationIntegrityTestResult](../../E-R/reference-data/FormationIntegrityTestResult.1.0.0.md)
<a name="Formation-Integrity-Test-Type"></a>
* **Formation Integrity Test Type**<br>
  (OSDU entity type **FormationIntegrityTestType** in group-type reference-data) Description: _The list of different types of Formation Integrity Tests that can be performed._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FormationIntegrityTestType](../../E-R/reference-data/FormationIntegrityTestType.1.0.0.md)
<a name="Formation-Pressure-Test-Type"></a>
* **Formation Pressure Test Type**<br>
  (OSDU entity type **FormationPressureTestType** in group-type reference-data) Description: _FIT, LOT, XLOT etc. Proposed reference values: Formation Integrity Test, Leak Off Test, Extended Leak Off Test_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FormationPressureTestType](../../E-R/reference-data/FormationPressureTestType.1.0.0.md)
<a name="Fossil-Preservation"></a>
* **Fossil Preservation**<br>
  (OSDU entity type **FossilPreservation** in group-type reference-data) Description: _Descriptive terms for the quality and condition of fossils within a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FossilPreservation](../../E-R/reference-data/FossilPreservation.1.0.0.md)
<a name="Fossil-Recovery"></a>
* **Fossil Recovery**<br>
  (OSDU entity type **FossilRecovery** in group-type reference-data) Description: _Descriptive terms for the quantity of fossils within a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FossilRecovery](../../E-R/reference-data/FossilRecovery.1.0.0.md)
<a name="Fractionation-Component"></a>
* **Fractionation Component**<br>
  (OSDU entity type **FractionationComponent** in group-type reference-data) Description: _Hydrocarbon compound types identified in Fractionation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FractionationComponent](../../E-R/reference-data/FractionationComponent.1.0.0.md)
<a name="Fractionation-Method"></a>
* **Fractionation Method**<br>
  (OSDU entity type **FractionationMethod** in group-type reference-data) Description: _Experiment methods used to separate and identify individual components from a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--FractionationMethod](../../E-R/reference-data/FractionationMethod.1.0.0.md)
<a name="Framework"></a>
* **Framework**<br>
  A framework is a structure of assumptions, values, principles, and rules that holds together the ideas comprising a broad concept.  In some cases, a framework may be supported by implementation to facilitate adherence to these values, principles and rules; however, the enduring element of the framework are the ideas.

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## G

<a name="Gantry-Type"></a>
* **Gantry Type**<br>
  (OSDU entity type **GantryType** in group-type reference-data) Description: _Defines the type of gantry used on the rig._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GantryType](../../E-R/reference-data/GantryType.1.0.0.md)
<a name="Gas-Hydrate"></a>
* **Gas Hydrate**<br>
  (PlayType) An intention or development to produce methane trapped within the molecular structure of solid water (ice.) Gas hydrates occur on some continental margins and polar regions. Gas hydrate is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="Gas-Isotope-Components"></a>
* **Gas Isotope Components**<br>
  (OSDU entity type **GasIsotopeComponents** in group-type reference-data) Description: _Gas Compounds, such as Methane or Propane, used in Isotope Analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GasIsotopeComponents](../../E-R/reference-data/GasIsotopeComponents.1.0.0.md)
<a name="Gas-Reading-Type"></a>
* **Gas Reading Type**<br>
  (OSDU entity type **GasReadingType** in group-type reference-data) Description: _Type of gas readings associated with an operations report_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GasReadingType](../../E-R/reference-data/GasReadingType.1.0.0.md)
<a name="GCMS-Compounds-Ratios"></a>
* **GCMS Compounds Ratios**<br>
  (OSDU entity type **GCMSCompoundsRatios** in group-type reference-data) Description: _Identifies specific ratios between compounds or groupings of compounds useful in Gas Chromatography Mass Spectrometry._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GCMSCompoundsRatios](../../E-R/reference-data/GCMSCompoundsRatios.1.0.0.md)
<a name="GCMSMS-Compounds"></a>
* **GCMSMS Compounds**<br>
  (OSDU entity type **GCMSMSCompounds** in group-type reference-data) Description: _Chemical compounds identified through the GCMSMS method of fluid analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GCMSMSCompounds](../../E-R/reference-data/GCMSMSCompounds.1.0.0.md)
<a name="Generic-Bin-Grid"></a>
* **Generic Bin Grid**<br>
  (OSDU entity type **GenericBinGrid** in group-type work-product-component) Description: _The properties for a generic bin grid._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GenericBinGrid](../../E-R/work-product-component/GenericBinGrid.1.0.0.md)
<a name="Generic-Facility"></a>
* **Generic Facility**<br>
  (OSDU entity type **GenericFacility** in group-type master-data) Description: _A facility is a grouping of equipment that is located within a specific geographic boundary or site and that is used in the context of energy-related activities such as exploration, extraction, generation, storage, processing, disposal, supply, or transfer. A generic facility identifies a facility that is not defined by a specialized data schema such as Well, Wellbore, StorageFacility , IsolatedInterval, Rig, etc._<br>
    &rarr; _OSDU types/schemas:_ [master-data--GenericFacility](../../E-R/master-data/GenericFacility.1.0.1.md)
<a name="Generic-Image"></a>
* **Generic Image**<br>
  (OSDU entity type **GenericImage** in group-type work-product-component) Description: _A generic image work-product-component, which associates an image dataset, typically a JPEG, PNG or TIFF file to a master-data or work-product-component item. GenericImage should not be used for geo-referenced images or core images, which have their own dedicated types._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GenericImage](../../E-R/work-product-component/GenericImage.1.2.0.md)
<a name="Generic-Property"></a>
* **Generic Property**<br>
  (OSDU entity type **GenericProperty** in group-type work-product-component) Description: _The reservoir property representation record, derived from the RESQML AbstractProperty. In RESQML, all subsurface or surface values tied to specific topological locations (or IndexableElements) in a model are carried by any concrete data object that derives from abstract property (contained in the properties package) attached to one or more representations. A representation can have several properties and provides the indexable elements for these lists of values (for more information see IndexableElement)._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GenericProperty](../../E-R/work-product-component/GenericProperty.1.3.0.md)
<a name="Generic-Representation"></a>
* **Generic Representation**<br>
  (OSDU entity type **GenericRepresentation** in group-type work-product-component) Description: _1D or 2D representations of Geologic Objects such as fault sticks, horizon surfaces, etc._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GenericRepresentation](../../E-R/work-product-component/GenericRepresentation.1.2.0.md)
<a name="Generic-Site"></a>
* **Generic Site**<br>
  (OSDU entity type **GenericSite** in group-type master-data) Description: _A non-facility location that can be used for energy industry related activities, such as the collection of a rock or fluid sample. In contrast with a facility, a generic site is usually a natural location (e.g. beach, oil seep, outcrop, sinkhole), not a man-made structure or a grouping of equipment. It is classified by Site Type._<br>
    &rarr; _OSDU types/schemas:_ [master-data--GenericSite](../../E-R/master-data/GenericSite.1.1.1.md)
<a name="Geo-Context"></a>
* **Geo Context**<br>
  (OSDU) A standardised mechanism to associate master-data and work-product-component data records with one or many GeoPoliticalEntity, Basin, Field, Play and Prospect records.<br>
    &rarr; _Schema Usage Guide:_ [8.3 GeoContexts](08-GeographicEntities.md#83-geocontexts), [Appendix E.1.3 GeoContexts](94-KnownIssues.md#appendix-e13-geocontexts)   <br>&rarr; _OSDU types/schemas:_ [AbstractGeoContext](../../E-R/abstract/AbstractGeoContext.1.0.0.md), [AbstractMaster](../../E-R/abstract/AbstractMaster.1.2.0.md), [AbstractWorkProductComponent](../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md)
<a name="Geo-Label-Set"></a>
* **Geo Label Set**<br>
  (OSDU entity type **GeoLabelSet** in group-type work-product-component) Description: _The GeoLabelSet acts as an object for collecting consolidated geological properties or information related to a labelled master entity, which could be a Reservoir, Reservoir Segment, Field, Prospect, etc. Individual labels are name-value pairs categorised by a GeoLabelType which allows for specifying characteristics such as: the average porosity of a Reservoir as 20%, the average initial reservoir pressure for Reservoir Segment as at 8000 psi, or identifying the predominant depositional environment of a Field as “marine shallow”. The content may have been identified through various methods, including measurement, interpretation, estimation, data collection from reports, delivered data packages, data mining etc._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GeoLabelSet](../../E-R/work-product-component/GeoLabelSet.1.1.0.md)
<a name="Geo-Label-Type"></a>
* **Geo Label Type**<br>
  (OSDU entity type **GeoLabelType** in group-type reference-data) Description: _A reference value list to categorize GeoLabels (used by work-product-component--GeoLabelSet). Labels can be numerical, Boolean, textual or relational. Numerical labels can be associated with physical properties (via PWLS3 codes via PropertyType). Labels holding relationships to other reference-data can also be defined. GeoLabels are further classified by facets, which narrow the scope of the labels._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GeoLabelType](../../E-R/reference-data/GeoLabelType.1.0.1.md)
<a name="Geo-Magnetic-Model"></a>
* **Geo Magnetic Model**<br>
  (OSDU entity type **GeoMagneticModel** in group-type reference-data) Description: _The name of the model used to calculate the geomagnetic field at a given date, location or depth down a wellbore._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GeoMagneticModel](../../E-R/reference-data/GeoMagneticModel.1.0.0.md)
<a name="Geo-Political-Entity"></a>
* **Geo Political Entity**<br>
  (OSDU entity type **GeoPoliticalEntity** in group-type master-data) Description: _A named geographical area which is defined and administered by an official entity._<br>
    &rarr; _OSDU types/schemas:_ [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Geo-Political-Entity-Type"></a>
* **Geo Political Entity Type**<br>
  (OSDU entity type **GeoPoliticalEntityType** in group-type reference-data) Description: _Used to describe the type of geopolitical entities._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GeoPoliticalEntityType](../../E-R/reference-data/GeoPoliticalEntityType.1.0.0.md)
<a name="Geo-Referenced-Image"></a>
* **Geo Referenced Image**<br>
  (OSDU entity type **GeoReferencedImage** in group-type work-product-component) Description: _An image representation which contains a coordinate reference system or relates the image map or aerial photo image to a coordinate reference system. With this reference it is possible to compute world coordinates for each image pixel position. The mapping from pixel to world coordinates is often provided by companion file, a so-called world file, see: https://en.wikipedia.org/wiki/World_file._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GeoReferencedImage](../../E-R/work-product-component/GeoReferencedImage.1.3.0.md)
<a name="Geo-Referenced-Image-Type"></a>
* **Geo Referenced Image Type**<br>
  (OSDU entity type **GeoReferencedImageType** in group-type reference-data) Description: _The type of a geo-referenced image, like, e.g., horizontal map, vertical curtain._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GeoReferencedImageType](../../E-R/reference-data/GeoReferencedImageType.1.0.0.md)
<a name="Geobody-Boundary-Interpretation"></a>
* **Geobody Boundary Interpretation**<br>
  (OSDU entity type **GeobodyBoundaryInterpretation** in group-type work-product-component) Description: _Geologic information associated to geobody boundary-related objects  (marker, seismic picks, modeled objects like triangulated surface)_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GeobodyBoundaryInterpretation](../../E-R/work-product-component/GeobodyBoundaryInterpretation.1.2.0.md)
<a name="Geobody-Interpretation"></a>
* **Geobody Interpretation**<br>
  (OSDU entity type **GeobodyInterpretation** in group-type work-product-component) Description: _One of potentially many geobody interpretations as a single consistent description of a local rock volume feature. An interpretation is subjective and very strongly tied to the intellectual activity of the project team members._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GeobodyInterpretation](../../E-R/work-product-component/GeobodyInterpretation.1.3.0.md)
<a name="Geologic-Unit-Occurrence-Interpretation"></a>
* **Geologic Unit Occurrence Interpretation**<br>
  (OSDU entity type **GeologicUnitOccurrenceInterpretation** in group-type work-product-component) Description: _Interpretation of a sequence of geologic units actually observed (interpreted)  along or inside a representation, the representation can be <br>
  •	1D such as a well or an arbitrary line<br>
  •	2D like a cross section<br>
  •	3D like a entire model or a group of fault blocks<br>
  It is typically based on a stratigraphic column rank but can include more units (example intrusive bodies), duplicated units (repeated sequence along a well or lines), or less units (Eroded or non-deposited).<br>
  An ordering criteria indicates the reason for the order (age, apparent depth or measured depth)._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GeologicUnitOccurrenceInterpretation](../../E-R/work-product-component/GeologicUnitOccurrenceInterpretation.1.2.0.md)
<a name="Geologic-Unit-Shape-Type"></a>
* **Geologic Unit Shape Type**<br>
  (OSDU entity type **GeologicUnitShapeType** in group-type reference-data) Description: _GeologicUnitShapeType holds the values for 3D shape classifications corresponding to the Energistics Shape3dExt._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GeologicUnitShapeType](../../E-R/reference-data/GeologicUnitShapeType.1.0.0.md)
<a name="Geological-Formation"></a>
* **Geological Formation**<br>
  (OSDU entity type **GeologicalFormation** in group-type reference-data) Description: _The name given to a body of rock having a consistent set of physical (litho-stratigraphic), temporal (chrono-stratigraphic) or fossil (bio-stratigraphic) characteristics that distinguishes it from adjacent bodies of rock, and which occupies a particular position in the layers of rock in a geographical region._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GeologicalFormation](../../E-R/reference-data/GeologicalFormation.1.0.0.md)
<a name="Geometric-Target-Set"></a>
* **Geometric Target Set**<br>
  (OSDU entity type **GeometricTargetSet** in group-type master-data) Description: _Targets (in the geometrical point of view) for a drilling plan_<br>
    &rarr; _OSDU types/schemas:_ [master-data--GeometricTargetSet](../../E-R/master-data/GeometricTargetSet.1.1.0.md)
<a name="Governorate"></a>
* **Governorate**<br>
  (GeoPoliticalEntityType) Area governed by a Governorate-like related system. Governorate is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Gp-Grid-Representation"></a>
* **Gp Grid Representation**<br>
  (OSDU entity type **GpGridRepresentation** in group-type work-product-component) Description: _General Purpose Grid. This Grid is the only one to be able to mix different grid representations (ijk, unstructured column layer, unstructured) into a single one without having to use grid refinement._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GpGridRepresentation](../../E-R/work-product-component/GpGridRepresentation.1.2.0.md)
<a name="Grain-Density-Measurement-Type"></a>
* **Grain Density Measurement Type**<br>
  (OSDU entity type **GrainDensityMeasurementType** in group-type reference-data) Description: _The type of measurement used to calculate the mass of solid material within a sample relative to the volume of the sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GrainDensityMeasurementType](../../E-R/reference-data/GrainDensityMeasurementType.1.0.1.md)
<a name="Grain-Size-Analysis-Method"></a>
* **Grain Size Analysis Method**<br>
  (OSDU entity type **GrainSizeAnalysisMethod** in group-type reference-data) Description: _A reference-value record describing a GrainSizeAnalysis method._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GrainSizeAnalysisMethod](../../E-R/reference-data/GrainSizeAnalysisMethod.1.0.0.md)
<a name="Grain-Size-Classification"></a>
* **Grain Size Classification**<br>
  (OSDU entity type **GrainSizeClassification** in group-type reference-data) Description: _The textual label of a grain size classification interval. GrainSizeClassification codes are referred to by GrainSizeClassificationSchemes, which will associate an actual grain size range and optionally ASTM sieve number to a GrainSizeClassification._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GrainSizeClassification](../../E-R/reference-data/GrainSizeClassification.1.0.0.md)
<a name="Grain-Size-Classification-Scheme"></a>
* **Grain Size Classification Scheme**<br>
  (OSDU entity type **GrainSizeClassificationScheme** in group-type reference-data) Description: _GrainSizeClassificationScheme contains a table of particle size to GrainSizeClassification associations as well as optionally ASTM sieve numbers._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GrainSizeClassificationScheme](../../E-R/reference-data/GrainSizeClassificationScheme.1.0.0.md)
<a name="Graph-Database"></a>
* **Graph Database**<br>
  A graph database, also called a graph-oriented database, is a type of NoSQL database that uses graph theory to store, map and query relationships. The OSDU schemas identify properties representing relationships so that the relationships can be 'indexed' in a graph database.<br>
    &rarr; _See also_ [Relationship](#Relationship).
<a name="Gravity-Magnetic-Acquisition-Platform"></a>
* **Gravity Magnetic Acquisition Platform**<br>
  (OSDU entity type **GravityMagneticAcquisitionPlatform** in group-type reference-data) Description: _The acquisition platform method for this survey, for example, airborne, marine, land, satellite, borehole, ocean bottom, UAV, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GravityMagneticAcquisitionPlatform](../../E-R/reference-data/GravityMagneticAcquisitionPlatform.1.0.0.md)
<a name="Gravity-Magnetic-Acquisition-Survey"></a>
* **Gravity Magnetic Acquisition Survey**<br>
  (OSDU entity type **GravityMagneticAcquisitionSurvey** in group-type master-data) Description: _A gravity and magnetics acquisition survey is a type of a geophysical survey acquisition and a business project that deploys resources to the field to record (passive) gravity and or magnetic geophysical measurement data.<br>
  <br>
  Several types of gravity and magnetic data can be acquired simultaneously from the same survey, and different acquisition platforms can be used to acquire the data, for example, land, air, marine, satellite and borehole.<br>
  <br>
  It may be referred to as a field survey, acquisition survey, or field program._<br>
    &rarr; _OSDU types/schemas:_ [master-data--GravityMagneticAcquisitionSurvey](../../E-R/master-data/GravityMagneticAcquisitionSurvey.1.0.0.md)
<a name="Gravity-Magnetic-Data-Acquisition-Type"></a>
* **Gravity Magnetic Data Acquisition Type**<br>
  (OSDU entity type **GravityMagneticDataAcquisitionType** in group-type reference-data) Description: _The type of gravity and magnetics geophysical data acquired in this survey, for example, gravity, magnetic, full tensor gradiometry/airborne gravity gradiometry.<br>
  This could be one or several acquisition types that were acquired simultaneously in the same survey._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GravityMagneticDataAcquisitionType](../../E-R/reference-data/GravityMagneticDataAcquisitionType.1.0.0.md)
<a name="Gravity-Model"></a>
* **Gravity Model**<br>
  (OSDU entity type **GravityModel** in group-type reference-data) Description: _The name of the model used to calculate local gravity field for a given location._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--GravityModel](../../E-R/reference-data/GravityModel.1.0.0.md)
<a name="Grid-Connection-Set-Representation"></a>
* **Grid Connection Set Representation**<br>
  (OSDU entity type **GridConnectionSetRepresentation** in group-type work-product-component) Description: _A list of cell (and optionally local face) connections in a grid._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--GridConnectionSetRepresentation](../../E-R/work-product-component/GridConnectionSetRepresentation.1.2.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## H

<a name="Header-Key-Name"></a>
* **Header Key Name**<br>
  (OSDU entity type **HeaderKeyName** in group-type reference-data) Description: _Reference data for header names of standard fields used in storage file formats, such as CDPX, INLINE in SEGY._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--HeaderKeyName](../../E-R/reference-data/HeaderKeyName.1.0.0.md)
<a name="Hold-Up-Depth-Category"></a>
* **Hold Up Depth Category**<br>
  (OSDU entity type **HoldUpDepthCategory** in group-type reference-data) Description: _Wellbore Hold Up Depth Category (HUD or Fish)_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--HoldUpDepthCategory](../../E-R/reference-data/HoldUpDepthCategory.1.0.0.md)
<a name="Hold-Up-Depth-Type"></a>
* **Hold Up Depth Type**<br>
  (OSDU entity type **HoldUpDepthType** in group-type reference-data) Description: _Wellbore Hold Up Depth type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--HoldUpDepthType](../../E-R/reference-data/HoldUpDepthType.1.0.0.md)
<a name="Hole-Opener-Type"></a>
* **Hole Opener Type**<br>
  (OSDU entity type **HoleOpenerType** in group-type reference-data) Description: _HoleOpenerType to be properly defined_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--HoleOpenerType](../../E-R/reference-data/HoleOpenerType.1.0.0.md)
<a name="Hole-Section"></a>
* **Hole Section**<br>
  (OSDU entity type **HoleSection** in group-type master-data) Description: _A section of a wellbore drilled with a constant bit and/or under-reamer diameter_<br>
    &rarr; _OSDU types/schemas:_ [master-data--HoleSection](../../E-R/master-data/HoleSection.1.4.0.md)
<a name="Horizon-Control-Points"></a>
* **Horizon Control Points**<br>
  (OSDU entity type **HorizonControlPoints** in group-type work-product-component) Description: _Horizon control points (seed points) representing sparse interpreter picks used to guide automated horizon tracking. Each control point captures a single depth or time pick at a spatial location. This work-product-component specializes AbstractRepresentation to deliver sparse seed points for a HorizonInterpretation. The InterpretationID links to the target HorizonInterpretation, while RepresentationRole (typically Pick) and RepresentationType (typically PointSet) characterize this representation. Control points capture key structural features, well ties, or high-confidence areas, and may serve as training labels for ML-based horizon prediction. Data may be stored inline via ColumnValues or as attached datasets such as File.TabularData._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--HorizonControlPoints](../../E-R/work-product-component/HorizonControlPoints.1.0.0.md)
<a name="Horizon-Interpretation"></a>
* **Horizon Interpretation**<br>
  (OSDU entity type **HorizonInterpretation** in group-type work-product-component) Description: _Geologic information associated to horizon-related object types (marker, seismic picks, modeled objects etc…)_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--HorizonInterpretation](../../E-R/work-product-component/HorizonInterpretation.1.2.0.md)
<a name="Hundred"></a>
* **Hundred**<br>
  (GeoPoliticalEntityType) Area governed by a Hundred-like related system. Hundred is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Hybrid-Trap"></a>
* **Hybrid Trap**<br>
  (ProspectType) Prospect involves more than one trapping constraint. Hybrid Trap is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Hydrocarbon-Seal-Type"></a>
* **Hydrocarbon Seal Type**<br>
  (OSDU entity type **HydrocarbonSealType** in group-type reference-data) Description: _A classification of hydrocarbon seals based on their geological characteristics and sealing mechanisms. A hydrocarbon seal is a geological barrier that prevents the upward migration of hydrocarbons (such as oil and gas) from a subsurface reservoir._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--HydrocarbonSealType](../../E-R/reference-data/HydrocarbonSealType.1.0.0.md)
<a name="Hydrodynamic-Trap"></a>
* **Hydrodynamic Trap**<br>
  (ProspectType) Hydrocarbons trapped by a flowing aquifer in reservoir. Hydrodynamic Trap is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## I

<a name="id"></a>
* **id**<br>
  The system property `id` uniquely defining an OSDU resource (object).
  1. data-partition-id (or namespace) identifies an OSDU implementation instance.
  2. type identifies an OSDU Type consisting of a group-type and an IndividualType, e.g. master-data--Well
  3. UniqueObjectKey - in case of natural key derived ids, the natural key must be URL-encoded.

  The instance version is stored separately in the system property `version`.
  In references or relationships the four components above are joined by a colon `:`. The data-partition-id, Type and UniqueObjectKey identify an OSDU Resource Object. Adding the Version identifies an OSDU Resource Object Version. When leaving a version unspecified, the latest version is implied.
<a name="Ijk-Cell-Face"></a>
* **Ijk Cell Face**<br>
  (OSDU entity type **IjkCellFace** in group-type reference-data) Description: _An enumeration of the face of a cell in an IJK grid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IjkCellFace](../../E-R/reference-data/IjkCellFace.1.0.0.md)
<a name="Ijk-Grid-Numerical-Aquifer-Representation"></a>
* **Ijk Grid Numerical Aquifer Representation**<br>
  (OSDU entity type **IjkGridNumericalAquiferRepresentation** in group-type work-product-component) Description: _A numerical aquifer representation defines the geometry of the aquifer as IJK grid cell indices._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--IjkGridNumericalAquiferRepresentation](../../E-R/work-product-component/IjkGridNumericalAquiferRepresentation.1.2.0.md)
<a name="Ijk-Grid-Representation"></a>
* **Ijk Grid Representation**<br>
  (OSDU entity type **IjkGridRepresentation** in group-type work-product-component) Description: _Definition of a collection of hexahedra which are organized and indexable by means of 3 (almost orthogonal) directions and called I, J and K._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--IjkGridRepresentation](../../E-R/work-product-component/IjkGridRepresentation.1.2.0.md)
<a name="Image-Lighting-Condition"></a>
* **Image Lighting Condition**<br>
  (OSDU entity type **ImageLightingCondition** in group-type reference-data) Description: _The light used to illuminate a rock sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ImageLightingCondition](../../E-R/reference-data/ImageLightingCondition.1.0.1.md)
<a name="In-SAR-Application"></a>
* **In SAR Application**<br>
  (OSDU entity type **InSARApplication** in group-type reference-data) Description: _The primary business application of the InSAR data set_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--InSARApplication](../../E-R/reference-data/InSARApplication.1.0.0.md)
<a name="In-SAR-Frequency-Band"></a>
* **In SAR Frequency Band**<br>
  (OSDU entity type **InSARFrequencyBand** in group-type reference-data) Description: _The reference value type defining the frequency band of the radar used for the image acquisition_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--InSARFrequencyBand](../../E-R/reference-data/InSARFrequencyBand.1.0.0.md)
<a name="In-SAR-Image-Mode"></a>
* **In SAR Image Mode**<br>
  (OSDU entity type **InSARImageMode** in group-type reference-data) Description: _The reference value type defining the radar imaging mode utilised for image acquisition_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--InSARImageMode](../../E-R/reference-data/InSARImageMode.1.0.0.md)
<a name="In-SAR-Polarisation"></a>
* **In SAR Polarisation**<br>
  (OSDU entity type **InSARPolarisation** in group-type reference-data) Description: _the reference value type defining the radar polarisation utilised for the image acquisition. The polarisation being the direction of the electromagnetic wave._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--InSARPolarisation](../../E-R/reference-data/InSARPolarisation.1.0.0.md)
<a name="In-SAR-Processing-Type"></a>
* **In SAR Processing Type**<br>
  (OSDU entity type **InSARProcessingType** in group-type reference-data) Description: _Describes what main process or workflow manipulated the data before arriving at its current state or that it is as acquired_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--InSARProcessingType](../../E-R/reference-data/InSARProcessingType.1.0.0.md)
<a name="Index-Extensions"></a>
* **Index Extensions**<br>
  (Configuration) Indexing is based on the entity schema definitions. Schema defined properties are automatically indexed, except for arrays of objects (see `x-osdu-indexing`).<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.6.2 Index Extensibility](93-OSDU-Schemas.md#appendix-d62-index-extensibility)   <br>&rarr; _OSDU types/schemas:_ [reference-data--IndexPropertyPathConfiguration](../../E-R/reference-data/IndexPropertyPathConfiguration.1.0.0.md)
<a name="Index-Property-Path-Configuration"></a>
* **Index Property Path Configuration**<br>
  (OSDU entity type **IndexPropertyPathConfiguration** in group-type reference-data) Description: _IndexPropertyPathConfiguration contains the de-normalization configuration settings for the Search index. The record id contains the kind so that there is a unique relationship between the kind and the kind's index extensions._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IndexPropertyPathConfiguration](../../E-R/reference-data/IndexPropertyPathConfiguration.1.0.0.md)
<a name="Indexable-Element"></a>
* **Indexable Element**<br>
  (OSDU entity type **IndexableElement** in group-type reference-data) Description: _IndexableElement follows the RESQML pattern. IndexableElement is used to 1) contain geometry within a representation, 2) attach properties to a representation, 3) identify portions of a representation when expressing a representation identity, and 4) construct a sub-representation from an existing representation. Several specialized indexable elements, e.g., hinge node faces, have been included to add higher order geometry to a grid representation, and are not available for other purposes._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IndexableElement](../../E-R/reference-data/IndexableElement.1.0.0.md)
<a name="Indexer-Schema-Optimization"></a>
* **Indexer Schema Optimization**<br>
  (OSDU) An optimization for the [indexer service](https://community.opengroup.org/osdu/platform/system/indexer-service/-/tree/master/docs/docs) providing a look-up table for `kind`s to find the appropriate indexing schema. The optimization resource is provided in [Generated/SchemaToIndexSchema.json](../../Generated/SchemaToIndexSchema.json).<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.7 Reusable Schemas for Indexing](93-OSDU-Schemas.md#appendix-d7-reusable-schemas-for-indexing)   <br>&rarr; _OSDU types/schemas:_ [reference-data--ReferenceDataIndexTemplate](../../E-R/reference-data/ReferenceDataIndexTemplate.1.0.0.md)
<a name="Indexing"></a>
* **Indexing**<br>
  (OSDU) Indexing is a core platform system service, which is driven by the schema definitions. Arrays of objects challenge the indexer; a number of options are available to guide the indexer to deliver good enough support for the expected queries.<br>
    &rarr; _Schema Usage Guide:_ [Appendix A.2 OSDU System Services](90-References.md#appendix-a2-osdu-system-services), [Appendix D.3.3 `x-osdu-indexing` - Indexing Hints](93-OSDU-Schemas.md#appendix-d33-x-osdu-indexing-indexing-hints)
<a name="Indian-Reservation"></a>
* **Indian Reservation**<br>
  (GeoPoliticalEntityType) Area governed by a Indian Reservation-like related system. Indian Reservation is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Insular-Area"></a>
* **Insular Area**<br>
  (GeoPoliticalEntityType) Area governed by a Insular Area-like related system. Insular Area is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Interpolation-Method"></a>
* **Interpolation Method**<br>
  (OSDU entity type **InterpolationMethod** in group-type reference-data) Description: _Mathematical form of velocity interpolation between discretely sample nodes, such as linear in space, bicubic spline, linear in time, trilinear, horizon-based, constant vertically up, constant vertically down, constant vertically both ways._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--InterpolationMethod](../../E-R/reference-data/InterpolationMethod.1.0.0.md)
<a name="Intracratonic-Postwrench-Sag"></a>
* **Intracratonic Postwrench Sag**<br>
  (BasinType) A depression entirely within continental crust caused by thermal subsidence following strike-slip pullapart within the continental crust. Intracratonic Postwrench Sag is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Intracratonic-Sag"></a>
* **Intracratonic Sag**<br>
  (BasinType) A depression entirely within continental crust caused by thermal subsidence and/or sediment loading in a region of crustal weakness. Intracratonic Sag is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Intracratonic-Wrench"></a>
* **Intracratonic Wrench**<br>
  (BasinType) Pullapart (strike-slip) basin formed at extensional (non-restraining) offset in strike slip fault entirely within continental crust. Intracratonic Wrench is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Intramontane-Wrench-Continent-Continent"></a>
* **Intramontane Wrench Continent-Continent**<br>
  (BasinType) Pullapart (strike slip) basin developed within mountainous collision zone where continental crust is obliquely colliding with another continental plate. Intramontane Wrench Continent-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Isolated-Interval"></a>
* **Isolated Interval**<br>
  (OSDU entity type **IsolatedInterval** in group-type master-data) Description: _A hydraulic/pressure isolated interval in one or more Wellbores that functions to produce or inject fluids. The isolated interval must be capable of isolating a fluid flow for continuous measurement._<br>
    &rarr; _OSDU types/schemas:_ [master-data--IsolatedInterval](../../E-R/master-data/IsolatedInterval.1.2.0.md)
<a name="Isolated-Interval-Cement-Option"></a>
* **Isolated Interval Cement Option**<br>
  (OSDU entity type **IsolatedIntervalCementOption** in group-type reference-data) Description: _Cement option used for the isolated interval, for example, Cemented, Uncemented._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IsolatedIntervalCementOption](../../E-R/reference-data/IsolatedIntervalCementOption.1.0.0.md)
<a name="Isolated-Interval-Classification"></a>
* **Isolated Interval Classification**<br>
  (OSDU entity type **IsolatedIntervalClassification** in group-type reference-data) Description: _Isolated interval classification, for example, Single Completion, Dual Completion, Mixed Water Injection, Produced Water Injection, Reservoir Surveillance, Sour Gas Producer, Sour Oil Producer, Sweet Gas Producer, Sweet Oil Producer._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IsolatedIntervalClassification](../../E-R/reference-data/IsolatedIntervalClassification.1.0.0.md)
<a name="Isolated-Interval-Isolation-Mechanism"></a>
* **Isolated Interval Isolation Mechanism**<br>
  (OSDU entity type **IsolatedIntervalIsolationMechanism** in group-type reference-data) Description: _Isolated interval isolation mechanism, for example, Swellable Packers, Cement, Hydraulic Swell Packers, Inflatable Packers, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IsolatedIntervalIsolationMechanism](../../E-R/reference-data/IsolatedIntervalIsolationMechanism.1.0.0.md)
<a name="Isolated-Interval-Type"></a>
* **Isolated Interval Type**<br>
  (OSDU entity type **IsolatedIntervalType** in group-type reference-data) Description: _The classification of an IsolatedInterval (aka. Completion). Values are CasedHole.FullString, CaseHole.ProductionLiner and OpenHole._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IsolatedIntervalType](../../E-R/reference-data/IsolatedIntervalType.1.0.0.md)
<a name="Isolated-Interval-Zone-Access-Mechanism"></a>
* **Isolated Interval Zone Access Mechanism**<br>
  (OSDU entity type **IsolatedIntervalZoneAccessMechanism** in group-type reference-data) Description: _Isolated interval zone access mechanism, for example, Abrasive Jet, Casing Deployed Perforations, Pump down, Plug & Perf, Tubing Conveyed Perforation, Sliding Sleeves, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IsolatedIntervalZoneAccessMechanism](../../E-R/reference-data/IsolatedIntervalZoneAccessMechanism.1.0.0.md)
<a name="Isotope-Ratio-Elements"></a>
* **Isotope Ratio Elements**<br>
  (OSDU entity type **IsotopeRatioElements** in group-type reference-data) Description: _Stable isotopic elements whose ratios are measured in isotope analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--IsotopeRatioElements](../../E-R/reference-data/IsotopeRatioElements.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## J

<a name="Jar-Action-Type"></a>
* **Jar Action Type**<br>
  (OSDU entity type **JarActionType** in group-type reference-data) Description: _Jar Action Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--JarActionType](../../E-R/reference-data/JarActionType.1.0.0.md)
<a name="Jar-Type"></a>
* **Jar Type**<br>
  (OSDU entity type **JarType** in group-type reference-data) Description: _Jar Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--JarType](../../E-R/reference-data/JarType.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## K

<a name="K-Direction-Type"></a>
* **K Direction Type**<br>
  (OSDU entity type **KDirectionType** in group-type reference-data) Description: _An enumeration for the K-Direction based on the RESQML model, i.e. up, down, not monotonic._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--KDirectionType](../../E-R/reference-data/KDirectionType.1.0.0.md)
<a name="Kerogen-Type"></a>
* **Kerogen Type**<br>
  (OSDU entity type **KerogenType** in group-type reference-data) Description: _The type of solid, insoluble organic matter in sedimentary rocks._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--KerogenType](../../E-R/reference-data/KerogenType.1.0.0.md)
<a name="kind"></a>
* **kind**<br>
  A schema identifier for an OSDU resource. It consists of four components separated by colon `:`
  1. namespace - for shared schemas the schema authority, e.g., `osdu`, or for internal schemas the data-partition-id.
  2. source or context identifier, which will not be included in the record `id`, e.g., `wks` for OSDU well-known schemas.
  3. group-type--IndividualType - the type name.
  4. the schema's semantic version number in the form major.minor.patch, where major, minor and patch are the numeric version numbers. The version numbers are separated by dots `.`.

  Although OSDU kinds are consistently mixed case, some sub-systems operate case-insensitive. Two kinds considered as different entities may not only differ by casing.
<a name="Kingdom"></a>
* **Kingdom**<br>
  (GeoPoliticalEntityType) Area governed by a Kingdom-like related system. Kingdom is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Known-Issues"></a>
* **Known Issues**<br>
  (OSDU) Known Issues is a chapter in the appendix of the Schema Usage Guide <br>
    &rarr; _Schema Usage Guide:_ [Appendix E Known Issues](94-KnownIssues.md#appendix-e-known-issues)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## L

<a name="Lahee-Class"></a>
* **Lahee Class**<br>
  (OSDU entity type **LaheeClass** in group-type reference-data) Description: _A traditional, commonly accepted, scheme to categorize wells by the general degree of risk assumed by the operator at the time of drilling._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LaheeClass](../../E-R/reference-data/LaheeClass.1.0.0.md)
<a name="Late-Postorogenic-Extension-Continent-Continent"></a>
* **Late Postorogenic Extension Continent-Continent**<br>
  (BasinType) Extensional basin formed by crustal delamination and/or crustal relaxation and thermal subsidence following collision between two continental plates. Late Postorogenic Extension Continent-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Legal-Status"></a>
* **Legal Status**<br>
  (OSDU entity type **LegalStatus** in group-type reference-data) Description: _The status of a legal status evaluation. Typical values are "compliant" and "incompliant"._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LegalStatus](../../E-R/reference-data/LegalStatus.1.0.0.md)
<a name="Level-Hierarchy"></a>
* **Level (Hierarchy)**<br>
  (PPDM) Level (hierarchy) indicates the position of an object within a defined hierarchy. In a hierarchy, multiple entries may exist at the same level of a hierarchy.
<a name="License-Block"></a>
* **License Block**<br>
  (GeoPoliticalEntityType) Area governed by the Licence/Block related terms definition. License Block is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="License-State"></a>
* **License State**<br>
  (OSDU entity type **LicenseState** in group-type reference-data) Description: _The record's license state. Typical values are: "Proprietary", "Licensed", "Unlicensed"._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LicenseState](../../E-R/reference-data/LicenseState.1.0.0.md)
<a name="Lineage-Relationship-Type"></a>
* **Lineage Relationship Type**<br>
  (OSDU entity type **LineageRelationshipType** in group-type reference-data) Description: _Used by LineageAssertion to describe the nature of the line of descent of a work product component from a prior Resource, such as DIRECT, INDIRECT, REFERENCE.  It is not for proximity (number of nodes away), it is not to cover all the relationships in a full ontology or graph, and it is not to describe the type of activity that created the asserting Work Product or Work Product Component.  LineageAssertion does not encompass a full provenance, process history, or activity model._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LineageRelationshipType](../../E-R/reference-data/LineageRelationshipType.1.0.0.md)
<a name="Liner-Type"></a>
* **Liner Type**<br>
  (OSDU entity type **LinerType** in group-type reference-data) Description: _This reference table describes the type of liner used in the borehole. For example, slotted, gravel packed or pre-perforated etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LinerType](../../E-R/reference-data/LinerType.1.0.0.md)
<a name="Litho-Stratigraphy"></a>
* **Litho Stratigraphy**<br>
  (OSDU entity type **LithoStratigraphy** in group-type reference-data) Description: _Name of lithostratigraphy, regionally dependent_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LithoStratigraphy](../../E-R/reference-data/LithoStratigraphy.1.0.0.md)
<a name="Lithology-Qualifier"></a>
* **Lithology Qualifier**<br>
  (OSDU entity type **LithologyQualifier** in group-type reference-data) Description: _An additional qualifier, further detailing the LithologyType._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LithologyQualifier](../../E-R/reference-data/LithologyQualifier.1.0.0.md)
<a name="Lithology-Type"></a>
* **Lithology Type**<br>
  (OSDU entity type **LithologyType** in group-type reference-data) Description: _Geological description for the type of lithology._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LithologyType](../../E-R/reference-data/LithologyType.1.1.0.md)
<a name="LOCAL"></a>
* **LOCAL**<br>
  (OSDU Reference Value Governance) A reference value governance mode for customer authored content; OSDU provided content can be considered as examples.<br>
    &rarr; _Schema Usage Guide:_ [2.2 Reference Data](02-GroupType.md#22-reference-data), [Appendix D.3.6 Reference Value Governance Definition](93-OSDU-Schemas.md#appendix-d36-reference-value-governance-definition)
<a name="Local-Boundary-Feature"></a>
* **Local Boundary Feature**<br>
  (OSDU entity type **LocalBoundaryFeature** in group-type work-product-component) Description: _An interface between two geological objects, such as horizons and faults in the scope of a model. It is a surface object. The scope can be widened by establishing a relationship to a master-data--BoundaryFeature instance._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--LocalBoundaryFeature](../../E-R/work-product-component/LocalBoundaryFeature.1.2.0.md)
<a name="Local-Council"></a>
* **Local Council**<br>
  (GeoPoliticalEntityType) Area governed by a Local Council-like related system. Local Council is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Local-Government-Area"></a>
* **Local Government Area**<br>
  (GeoPoliticalEntityType) Area governed by a Local Government Area-like related system. Local Government Area is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Local-Model-Compound-Crs"></a>
* **Local Model Compound Crs**<br>
  (OSDU entity type **LocalModelCompoundCrs** in group-type work-product-component) Description: _This WPC intends to be a placeholder for storing metadata about the CRS in a Reservoir study. No attribute is present yet but could be added in next releases. The main intent is for now to be able to reference the same CRS (whatever how it is defined) from several representations._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--LocalModelCompoundCrs](../../E-R/work-product-component/LocalModelCompoundCrs.1.2.0.md)
<a name="Local-Model-Feature"></a>
* **Local Model Feature**<br>
  (OSDU entity type **LocalModelFeature** in group-type work-product-component) Description: _A LocalModelFeature is an explicit description of the relationships between geologic features such as rock volume features (e.g. stratigraphic units, geobodies, phase unit) and boundary features (e.g., genetic, tectonic, and fluid boundaries)._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--LocalModelFeature](../../E-R/work-product-component/LocalModelFeature.1.2.0.md)
<a name="Local-Rock-Volume-Feature"></a>
* **Local Rock Volume Feature**<br>
  (OSDU entity type **LocalRockVolumeFeature** in group-type work-product-component) Description: _A volume of rock that is identified based on some specific attribute, like its mineral content or other physical characteristic. It exists typically in the scope of a model, can be associated with a master-data--RockVolumeFeature for regional correlations._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--LocalRockVolumeFeature](../../E-R/work-product-component/LocalRockVolumeFeature.1.2.0.md)
<a name="Location"></a>
* **Location**<br>
  (PPDM) Location describes the point or area occupied by an entity. Can be a descriptive name or term that may or may not be associated with geographic coordinates.
<a name="Log-Curve-Business-Value"></a>
* **Log Curve Business Value**<br>
  (OSDU entity type **LogCurveBusinessValue** in group-type reference-data) Description: _Used to describe the log curve business values._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LogCurveBusinessValue](../../E-R/reference-data/LogCurveBusinessValue.1.0.0.md)
<a name="Log-Curve-Family"></a>
* **Log Curve Family**<br>
  (OSDU entity type **LogCurveFamily** in group-type reference-data) Description: _LogCurveFamily is the detailed Geological Physical Quantity Measured - such as neutron porosity._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LogCurveFamily](../../E-R/reference-data/LogCurveFamily.1.1.0.md)
<a name="Log-Curve-Main-Family"></a>
* **Log Curve Main Family**<br>
  (OSDU entity type **LogCurveMainFamily** in group-type reference-data) Description: _LogCurveMainFamily is the Geological Physical Quantity Measured - such as porosity_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LogCurveMainFamily](../../E-R/reference-data/LogCurveMainFamily.1.0.0.md)
<a name="Log-Curve-Type"></a>
* **Log Curve Type**<br>
  (OSDU entity type **LogCurveType** in group-type reference-data) Description: _LogCurveType is the standard mnemonic chosen by the company - OSDU provides an initial list._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LogCurveType](../../E-R/reference-data/LogCurveType.1.1.0.md)
<a name="Log-Type"></a>
* **Log Type**<br>
  (OSDU entity type **LogType** in group-type reference-data) Description: _Used to describe the type of logs._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--LogType](../../E-R/reference-data/LogType.1.0.0.md)
<a name="LOT"></a>
* **LOT**<br>
  (OSDU FormationIntegrityTest) Abbreviation for Leak Off Test, which is represented by the Formation Integrity Test<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--FormationIntegrityTest](../../E-R/work-product-component/FormationIntegrityTest.1.2.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## M

<a name="Marker-Property-Type"></a>
* **Marker Property Type**<br>
  (OSDU entity type **MarkerPropertyType** in group-type reference-data) Description: _The wellbore marker property catalog for e.g. WellboreMarkerSet data.AvailableMarkerProperties. Similar to LogCurveType and the TrajectoryStationPropertyType which describes well-known properties (or curves or channels in an array view), which can be accessed via the Wellbore Domain Data Management Services._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MarkerPropertyType](../../E-R/reference-data/MarkerPropertyType.1.0.0.md)
<a name="Marker-Type"></a>
* **Marker Type**<br>
  (OSDU entity type **MarkerType** in group-type reference-data) Description: _Type of stratigraphic body for which a geologist picks a wellbore intersection depth._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MarkerType](../../E-R/reference-data/MarkerType.1.0.1.md)
<a name="Marker-Marker-Set"></a>
* **Marker, Marker Set**<br>
  (OSDU) Interpretations and representations of intersections of boundary features with the wellbore path (trajectory).<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellboreMarkerSet](../../E-R/work-product-component/WellboreMarkerSet.1.5.1.md)
<a name="Massive-Margin-Inversion"></a>
* **Massive Margin Inversion**<br>
  (BasinType) Redeposition of passive margin basin sediments on margins of uplift caused by later reverse movement on one or more continental margin extension faults. Massive Margin Inversion is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Master-Data"></a>
* **Master Data**<br>
  Master Data is a single source of basic business data used across multiple systems, applications, and/or processes. Data mastering is the process by which an unmastered data source record is linked or merged with another master data record.<br>
  In terms of OSDU schema, the result of the data mastering process will end in curated data instances for the group-type master-data.<br>
    &rarr; _See also_ [master-data](#master-data).
<a name="master-data"></a>
* **master-data**<br>
  One of the OSDU schema group-types. When applied to OSDU group types, the term “master” must not be confused with conventional uses of the term in the industry. It is not the same as mastering or golden or other such meanings. Here, an entity of the group type “master data” refers to the information about business objects managed in the OSDU Record catalog. These objects tend to be real-world things with natural identifiers. The function of the schema entity is to collect information about these real-world things, so they can be tracked and related to digital objects, and to provide their context. This leads to some characteristics:
  * Objects are typically created by a company’s business processes; the catalog of objects grows steadily over time
  * The `id` can be created separately from the OSDU platform. Since master data objects typically have a presence in the real world, they also often have established identifiers that can be supplied, possibly with some modification, before the ingestion process. Where they do not exist, the platform implementer may choose to establish an internal company unique identifier.
  * A single version of truth is desired. While there may be different understandings about the properties of the master object in different source systems, there is only one truth, and business processes are established to try to reconcile those differences. When a single version of truth has been established, the object is referred to as a well-known entity. This is to say that the well-known entity for a master data record is the authoritative source for what the implementing company knows about
  the object.
  * Business processes operate on the object over time and may change its properties. This means that the object is versioned while its identity remains the same.
  * The objects tend to be physical (e.g., wellbore, oil field) or business activities (e.g., seismic acquisition).
<a name="Material-Grade-Standard-Type"></a>
* **Material Grade Standard Type**<br>
  (OSDU entity type **MaterialGradeStandardType** in group-type reference-data) Description: _The reference list to specify the material grade standard.  Typically the type is "API/ISO" or "Proprietary"._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MaterialGradeStandardType](../../E-R/reference-data/MaterialGradeStandardType.1.0.0.md)
<a name="Maximum-Schema-Version-Configuration"></a>
* **Maximum Schema Version Configuration**<br>
  (Configuration) A way a platform owner/operator can indicate the highest permitted schema version for a given, versioned entity schema.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.5 Schema Version Management/Configuration](93-OSDU-Schemas.md#appendix-d5-schema-version-managementconfiguration)   <br>&rarr; _OSDU types/schemas:_ [reference-data--PreferredSchemaVersion](../../E-R/reference-data/PreferredSchemaVersion.1.0.0.md)
<a name="Measurement"></a>
* **Measurement**
  * **Measurement**<br>
    (OSDU UnitQuantity) The definition of a kind of measurement, known as UnitQuantity, part of the Energistics Unit of Measure standard.<br>
      &rarr; _Schema Usage Guide:_ [4.1 Unit of Measure Foundation](04-FrameOfReference.md#41-unit-of-measure-foundation)   <br>&rarr; _OSDU types/schemas:_ [reference-data--UnitQuantity](../../E-R/reference-data/UnitQuantity.1.0.0.md)
  * **Measurement**<br>
    (OSDU PropertyType) The definition of a specialised kind of measurement, known as PropertyType, which is following the Energistics PWLS 3 standard.<br>
      &rarr; _Schema Usage Guide:_ [4.1 Unit of Measure Foundation](04-FrameOfReference.md#41-unit-of-measure-foundation)   <br>&rarr; _OSDU types/schemas:_ [reference-data--PropertyType](../../E-R/reference-data/PropertyType.1.0.0.md)
<a name="Measurement-Class"></a>
* **Measurement Class**<br>
  (PPDM) A Measurement Class is a list of the units of measure that are appropriate to use when measuring a particular property.<br>
    &rarr; _OSDU types/schemas:_ [reference-data--UnitOfMeasureConfiguration](../../E-R/reference-data/UnitOfMeasureConfiguration.1.0.0.md)
<a name="Method"></a>
* **Method**<br>
  (PPDM) Methods are systematic procedures followed for deriving a specific kind of outcome. For example, methods used by laboratories are specific to obtaining TOC data.
<a name="Metropolitan-Area"></a>
* **Metropolitan Area**<br>
  (GeoPoliticalEntityType) Area governed by a Metropolitan Area-like related system. Metropolitan Area is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Minerals"></a>
* **Minerals**<br>
  (OSDU entity type **Minerals** in group-type reference-data) Description: _Names of minerals identified via mineralogy analysis of rock._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--Minerals](../../E-R/reference-data/Minerals.1.0.0.md)
<a name="Minimum-Schema-Version-Configuration"></a>
* **Minimum Schema Version Configuration**<br>
  (Configuration) A way a platform owner/operator can indicate a minimum schema version for a given, versioned entity schema.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.5 Schema Version Management/Configuration](93-OSDU-Schemas.md#appendix-d5-schema-version-managementconfiguration)   <br>&rarr; _OSDU types/schemas:_ [reference-data--PreferredSchemaVersion](../../E-R/reference-data/PreferredSchemaVersion.1.0.0.md)
<a name="Model-Feature"></a>
* **Model Feature**<br>
  (OSDU entity type **ModelFeature** in group-type master-data) Description: _A ModelFeature is an explicit description of the relationships between geologic features such as rock volume features (e.g. stratigraphic units, geobodies, phase unit) and boundary features (e.g., genetic, tectonic, and fluid boundaries)._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ModelFeature](../../E-R/master-data/ModelFeature.1.1.0.md)
<a name="Mooring-Type"></a>
* **Mooring Type**<br>
  (OSDU entity type **MooringType** in group-type reference-data) Description: _Defines the type of Mooring used to secure the rig._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MooringType](../../E-R/reference-data/MooringType.1.0.0.md)
<a name="Mud-Base-Type"></a>
* **Mud Base Type**<br>
  (OSDU entity type **MudBaseType** in group-type reference-data) Description: _The base fluid type of the Mud/Drilling Fluid in well at time of the Formation Integrity test._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MudBaseType](../../E-R/reference-data/MudBaseType.1.0.0.md)
<a name="Mud-Class"></a>
* **Mud Class**<br>
  (OSDU entity type **MudClass** in group-type reference-data) Description: _The status of the fluid liquid. Proposed reference values: water based, oil based, other, pneumatic, unknown_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MudClass](../../E-R/reference-data/MudClass.1.0.0.md)
<a name="Mud-Motor-Bearing-Type"></a>
* **Mud Motor Bearing Type**<br>
  (OSDU entity type **MudMotorBearingType** in group-type reference-data) Description: _Specifies the bearing type of a mud motor._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MudMotorBearingType](../../E-R/reference-data/MudMotorBearingType.1.0.0.md)
<a name="Mud-Tracer-Type"></a>
* **Mud Tracer Type**<br>
  (OSDU entity type **MudTracerType** in group-type reference-data) Description: _A mud-additive with a unique signature or traceability to help understand mud-movement and/or contamination in subsequent rock, fluid, and subsurface tests._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--MudTracerType](../../E-R/reference-data/MudTracerType.1.0.1.md)
<a name="Municipality"></a>
* **Municipality**<br>
  (GeoPoliticalEntityType) Area governed by a Municipality-like related system. Municipality is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## N

<a name="National-Recreation-Area"></a>
* **National Recreation Area**<br>
  (GeoPoliticalEntityType) Area governed by a National Recreation Area-like related system. National Recreation Area is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Natural-Key"></a>
* **Natural Key**<br>
  (Identifier) A unique key, used also outside ot the OSDU platform, to identify an object in Storage.
<a name="NMR-Test-Condition"></a>
* **NMR Test Condition**<br>
  (OSDU entity type **NMRTestCondition** in group-type reference-data) Description: _The pore space conditions of a rock sample undergoing nuclear magnetic resonance analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NMRTestCondition](../../E-R/reference-data/NMRTestCondition.1.0.0.md)
<a name="Non-Gas-Isotope-Components"></a>
* **Non Gas Isotope Components**<br>
  (OSDU entity type **NonGasIsotopeComponents** in group-type reference-data) Description: _Types of non-gas compounds, such as aromatics, saturates, water or bitumen, used in isotope analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NonGasIsotopeComponents](../../E-R/reference-data/NonGasIsotopeComponents.1.0.0.md)
<a name="Non-hydrocarbon"></a>
* **Non-hydrocarbon**<br>
  (PlayType) This Play Type does not have hydrocarbons as the main objective. Examples are geothermal, potash, uranium and sulphur. Non-hydrocarbon is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="NoSQL"></a>
* **NoSQL**<br>
  A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. The Storage service backend is an example of a NoSQL database.
<a name="Notional-Seismic-Line"></a>
* **Notional Seismic Line**<br>
  (OSDU entity type **NotionalSeismicLine** in group-type work-product-component) Description: _The set of geometries comprising a full seismic transect (referenced through parent-child relationships).  This entity encompasses the concept of a logical processed line.  The parts comprising it cover things like extensions and boundary crossings.  It is largely a data management object to help collect all the geometries pertaining to a transect.  It is not needed for interpretation.  The universal WPC Name property is essential for describing the principal, preferred line name for the full transect._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--NotionalSeismicLine](../../E-R/work-product-component/NotionalSeismicLine.1.3.0.md)
<a name="Notional-Seismic-Processing-Product"></a>
* **Notional Seismic Processing Product**<br>
  (OSDU entity type **NotionalSeismicProcessingProduct** in group-type work-product-component) Description: _The set of seismic trace data comprising a singular seismic processing output.  This entity encompasses the concept of a logical processing deliverable._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--NotionalSeismicProcessingProduct](../../E-R/work-product-component/NotionalSeismicProcessingProduct.1.0.0.md)
<a name="NPT-Cause-Sub-Type"></a>
* **NPT Cause Sub Type**<br>
  (OSDU entity type **NPTCauseSubType** in group-type reference-data) Description: _Non-Productive Time Cause Sub Type. Sub-types are parented by a Cause type and provide additional detail on assigned causes of NPT._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTCauseSubType](../../E-R/reference-data/NPTCauseSubType.1.0.0.md)
<a name="NPT-Cause-Type"></a>
* **NPT Cause Type**<br>
  (OSDU entity type **NPTCauseType** in group-type reference-data) Description: _Non-Productive Time Cause Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTCauseType](../../E-R/reference-data/NPTCauseType.1.0.0.md)
<a name="NPT-Equipment-Type"></a>
* **NPT Equipment Type**<br>
  (OSDU entity type **NPTEquipmentType** in group-type reference-data) Description: _Non-Productive Time Equipment Type - types of Rig/Work Unit, other Surface and Downhole Equipment list whose failure may cause NPT_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTEquipmentType](../../E-R/reference-data/NPTEquipmentType.1.0.0.md)
<a name="NPT-Investigation-Status-Type"></a>
* **NPT Investigation Status Type**<br>
  (OSDU entity type **NPTInvestigationStatusType** in group-type reference-data) Description: _Non-Productive Time Investigation Status Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTInvestigationStatusType](../../E-R/reference-data/NPTInvestigationStatusType.1.0.0.md)
<a name="NPT-Risk-Assessment-Type"></a>
* **NPT Risk Assessment Type**<br>
  (OSDU entity type **NPTRiskAssessmentType** in group-type reference-data) Description: _Non-Productive Time Risk Assessment Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTRiskAssessmentType](../../E-R/reference-data/NPTRiskAssessmentType.1.0.0.md)
<a name="NPT-Root-Cause-Type"></a>
* **NPT Root Cause Type**<br>
  (OSDU entity type **NPTRootCauseType** in group-type reference-data) Description: _Non-Productive Time Root Cause Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTRootCauseType](../../E-R/reference-data/NPTRootCauseType.1.0.0.md)
<a name="NPT-Safety-Classification-Type"></a>
* **NPT Safety Classification Type**<br>
  (OSDU entity type **NPTSafetyClassificationType** in group-type reference-data) Description: _Non-Productive Time Safety Classification Type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTSafetyClassificationType](../../E-R/reference-data/NPTSafetyClassificationType.1.0.0.md)
<a name="NPT-Severity-Level"></a>
* **NPT Severity Level**<br>
  (OSDU entity type **NPTSeverityLevel** in group-type reference-data) Description: _Non-Productive Time SeverityLevel - gradational scale based on assessed Time and/or Cost impact to the ongoing well activity_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTSeverityLevel](../../E-R/reference-data/NPTSeverityLevel.1.0.0.md)
<a name="NPT-Unplanned-Event-Type"></a>
* **NPT Unplanned Event Type**<br>
  (OSDU entity type **NPTUnplannedEventType** in group-type reference-data) Description: _Non-Productive Time Unplanned Event Type - Equipment Failure causing NPT, non-Equipment Failure NPTs and no operations impact  Equipment Failures (no NPT)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--NPTUnplannedEventType](../../E-R/reference-data/NPTUnplannedEventType.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## O

<a name="O-Auth2-Flow-Type"></a>
* **O Auth2 Flow Type**<br>
  (OSDU entity type **OAuth2FlowType** in group-type reference-data) Description: _Flows, or grants, supported within the OAuth 2.0 authorization framework._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OAuth2FlowType](../../E-R/reference-data/OAuth2FlowType.1.0.0.md)
<a name="Object-Relationships"></a>
* **Object Relationships**<br>
  (OSDU) OSDU represents relationships as string properties holding the target record id:version, where version is optional. The schema is decorated with x-osdu-relationship. <br>
    &rarr; _Schema Usage Guide:_ [6.4 How to form Relationships](06-LifecycleProperties.md#64-how-to-form-relationships), [Appendix D.3.2 `x-osdu-relationship` - Relationship Decorators](93-OSDU-Schemas.md#appendix-d32-x-osdu-relationship-relationship-decorators)
<a name="Objective-Type"></a>
* **Objective Type**<br>
  (OSDU entity type **ObjectiveType** in group-type reference-data) Description: _Purpose or intended use of a work product component, such as Stacking, Depth Migration, Time Migration, Time-depth Conversion._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ObjectiveType](../../E-R/reference-data/ObjectiveType.1.0.0.md)
<a name="Oblast"></a>
* **Oblast**<br>
  (GeoPoliticalEntityType) Area governed by a Oblast-like related system. Oblast is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Obligation-Type"></a>
* **Obligation Type**<br>
  (OSDU entity type **ObligationType** in group-type reference-data) Description: _An article or clause [OSDU calls this Obligation Type] that introduces a condition or term which the fulfillment of an agreement depends (provides operational and/or earning requirements) A kind of commitment or duty that in specific scenarios requires a particular course of action as defined in an agreement._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ObligationType](../../E-R/reference-data/ObligationType.1.0.1.md)
<a name="Office-Type"></a>
* **Office Type**<br>
  (OSDU entity type **OfficeType** in group-type reference-data) Description: _A list specifying the kind of office such as  branch office, head office, laboratory, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OfficeType](../../E-R/reference-data/OfficeType.1.0.0.md)
<a name="Oil-Sands"></a>
* **Oil Sands**<br>
  (PlayType) An intention or development to produce bitumen or very heavy oil from a sand reservoir. Oil Sands is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="OPEN"></a>
* **OPEN**<br>
  (OSDU Reference Value Governance) A reference value governance mode for extensible reference value lists; existing value codes should be kept for interoperability.<br>
    &rarr; _Schema Usage Guide:_ [2.2 Reference Data](02-GroupType.md#22-reference-data), [Appendix D.3.6 Reference Value Governance Definition](93-OSDU-Schemas.md#appendix-d36-reference-value-governance-definition)
<a name="Operating-Environment"></a>
* **Operating Environment**<br>
  (OSDU entity type **OperatingEnvironment** in group-type reference-data) Description: _The geographic environment in which operations occur or data is collected._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OperatingEnvironment](../../E-R/reference-data/OperatingEnvironment.1.0.0.md)
<a name="Operational-Data"></a>
* **Operational Data**<br>
  Operational data is data that is tied to the specific problem being addressed in the Platform or solution. It’s schema, lifecycle, format and footprint match and evolves with the needs of the platform.
<a name="Operations-Report"></a>
* **Operations Report**<br>
  (OSDU entity type **OperationsReport** in group-type master-data) Description: _A standard report of all drilling, completion or well work events conducted on a well during a given period, usually a 24-hour day, not necessarily aligned with the local time zone. Printed snapshots, e.g. PDF files, are captured as work-product-component--Document, which relate via data.LineageAssertions._<br>
    &rarr; _OSDU types/schemas:_ [master-data--OperationsReport](../../E-R/master-data/OperationsReport.1.4.0.md)
<a name="Ordering-Criteria-Type"></a>
* **Ordering Criteria Type**<br>
  (OSDU entity type **OrderingCriteriaType** in group-type reference-data) Description: _Enumeration used to specify the order of  GeologicalUnitOccurrenceInterpretation_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OrderingCriteriaType](../../E-R/reference-data/OrderingCriteriaType.1.0.0.md)
<a name="Organisation"></a>
* **Organisation**<br>
  (OSDU entity type **Organisation** in group-type master-data) Description: _A legal or administrative body, institution, or company, or any of its divisions._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Organisation](../../E-R/master-data/Organisation.1.2.0.md)
<a name="Organisation-Type"></a>
* **Organisation Type**<br>
  (OSDU entity type **OrganisationType** in group-type reference-data) Description: _A general category of an enterprise,  government or other industrial group._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OrganisationType](../../E-R/reference-data/OrganisationType.1.0.0.md)
<a name="Osdu-Domain"></a>
* **Osdu Domain**<br>
  (OSDU entity type **OsduDomain** in group-type reference-data) Description: _A multi-level domain hierarchy with a domain definition in description._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OsduDomain](../../E-R/reference-data/OsduDomain.1.0.0.md)
<a name="OSDU-Json-Extensions"></a>
* **OSDU Json Extensions**<br>
  (OSDU entity type **OSDUJsonExtensions** in group-type reference-data) Description: _These records build the catalog of OSDU JSON extensions tags, which are known to the system._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OSDUJsonExtensions](../../E-R/reference-data/OSDUJsonExtensions.1.0.0.md)
<a name="OSDU-Platform"></a>
* **OSDU Platform**<br>
  The OSDU Data Platform provides:
  * Universal, typed data repository for all relevant data, including safety through encryption, continuity through versioning and lineage relationships, integrity through quality assertions, and coherence as the single data distribution source.
  * Data Loading, including loading data content that results from work activities, characterizing data content with disciplined metadata, integrity through data immutability, assessing the data content's fitness for purpose for various uses, and adding value through the derivation of related data items, and intelligent application of languages, dialects and taxonomies.
  * Data Search and Discovery, including contextual search with immediate data discovery, qualification, and preview; intelligent value-added deep criteria, such as sentiment analysis; and multiple forms of search criteria, including geospatial search, full-text search, and faceted search.
  * Data Delivery, including security through entitlement checking, access efficiency through standard and high-performance means of access, highly usable, configurable convenience functionality with complex transformations, extensibility through support for externally managed data and data virtualization.
  * Business and technology agnostic basic framework and functionality enhanced by configurable business data context, internal data platform workflows, and event-driven data platform capabilities.
<a name="OSDU-Region"></a>
* **OSDU Region**<br>
  (OSDU entity type **OSDURegion** in group-type reference-data) Description: _Used to describe the OSDU regions._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--OSDURegion](../../E-R/reference-data/OSDURegion.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## P

<a name="Parameter-Kind"></a>
* **Parameter Kind**<br>
  (OSDU entity type **ParameterKind** in group-type reference-data) Description: _ParameterKind describes the value type of the parameter. Known values are integer, double, string, timestamp, subActivity, dataObject._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ParameterKind](../../E-R/reference-data/ParameterKind.1.0.0.md)
<a name="Parameter-Role"></a>
* **Parameter Role**<br>
  (OSDU entity type **ParameterRole** in group-type reference-data) Description: _Reference value type describing how an activity  parameter was used by an activity, such as input, output, control, constraint, agent, predecessor activity, successor activity._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ParameterRole](../../E-R/reference-data/ParameterRole.1.0.0.md)
<a name="Parameter-Type"></a>
* **Parameter Type**<br>
  (OSDU entity type **ParameterType** in group-type reference-data) Description: _Used to describe the type of parameters._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ParameterType](../../E-R/reference-data/ParameterType.1.0.0.md)
<a name="Parent-Matching-Rule-Sets"></a>
* **Parent Matching Rule Sets**<br>
  (OSDU entity type **ParentMatchingRuleSets** in group-type reference-data) Description: _Given a namespace, source and target schema kinds, provide matching rule sets to configure external to target object matching._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ParentMatchingRuleSets](../../E-R/reference-data/ParentMatchingRuleSets.1.2.0.md)
<a name="Parish"></a>
* **Parish**<br>
  (GeoPoliticalEntityType) Area governed by a Parish-like related system. Parish is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Passive-Margin"></a>
* **Passive Margin**<br>
  (BasinType) Shallow to deep marine sediments deposited on trailing continental margin, across transition from extended continental to newer oceanic crust. Passive Margin is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Payload-Template"></a>
* **Payload Template**<br>
  (OSDU entity type **PayloadTemplate** in group-type reference-data) Description: _To allow Data Provider/Operator to define the JSON payload template tailored to the API they are making requests to._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PayloadTemplate](../../E-R/reference-data/PayloadTemplate.1.0.0.md)
<a name="Perforation-Centralization-Method-Type"></a>
* **Perforation Centralization Method Type**<br>
  (OSDU entity type **PerforationCentralizationMethodType** in group-type reference-data) Description: _The Perforating Gun Centralization Method Type used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationCentralizationMethodType](../../E-R/reference-data/PerforationCentralizationMethodType.1.0.0.md)
<a name="Perforation-Conveyed-Method"></a>
* **Perforation Conveyed Method**<br>
  (OSDU entity type **PerforationConveyedMethod** in group-type reference-data) Description: _Equipment type used to run perforation equipment downhole._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationConveyedMethod](../../E-R/reference-data/PerforationConveyedMethod.1.0.0.md)
<a name="Perforation-Gun-Carrier-Category"></a>
* **Perforation Gun Carrier Category**<br>
  (OSDU entity type **PerforationGunCarrierCategory** in group-type reference-data) Description: _The Perforating Gun Category used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunCarrierCategory](../../E-R/reference-data/PerforationGunCarrierCategory.1.0.0.md)
<a name="Perforation-Gun-Carrier-Model"></a>
* **Perforation Gun Carrier Model**<br>
  (OSDU entity type **PerforationGunCarrierModel** in group-type reference-data) Description: _The Perforating Gun Carrier Model used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunCarrierModel](../../E-R/reference-data/PerforationGunCarrierModel.1.0.0.md)
<a name="Perforation-Gun-Carrier-Type"></a>
* **Perforation Gun Carrier Type**<br>
  (OSDU entity type **PerforationGunCarrierType** in group-type reference-data) Description: _The Perforating Gun Carrier Type  used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunCarrierType](../../E-R/reference-data/PerforationGunCarrierType.1.0.0.md)
<a name="Perforation-Gun-Charge-Shape"></a>
* **Perforation Gun Charge Shape**<br>
  (OSDU entity type **PerforationGunChargeShape** in group-type reference-data) Description: _The Perforating Gun Charge Shape used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunChargeShape](../../E-R/reference-data/PerforationGunChargeShape.1.0.0.md)
<a name="Perforation-Gun-Charge-Size"></a>
* **Perforation Gun Charge Size**<br>
  (OSDU entity type **PerforationGunChargeSize** in group-type reference-data) Description: _The Perforating Gun Charge Size used in a perforation interval. The value is a number as string, always measured in grams (g = 0.001 kg)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunChargeSize](../../E-R/reference-data/PerforationGunChargeSize.1.0.0.md)
<a name="Perforation-Gun-Charge-Type"></a>
* **Perforation Gun Charge Type**<br>
  (OSDU entity type **PerforationGunChargeType** in group-type reference-data) Description: _The Perforating Gun Charge Type used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunChargeType](../../E-R/reference-data/PerforationGunChargeType.1.0.0.md)
<a name="Perforation-Gun-Firing-Head-Type"></a>
* **Perforation Gun Firing Head Type**<br>
  (OSDU entity type **PerforationGunFiringHeadType** in group-type reference-data) Description: _The Perforating Gun Firing Head Type used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunFiringHeadType](../../E-R/reference-data/PerforationGunFiringHeadType.1.0.0.md)
<a name="Perforation-Gun-Metallurgy-Type"></a>
* **Perforation Gun Metallurgy Type**<br>
  (OSDU entity type **PerforationGunMetallurgyType** in group-type reference-data) Description: _The Perforating Gun Metallurgy Type used in a perforation interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunMetallurgyType](../../E-R/reference-data/PerforationGunMetallurgyType.1.0.0.md)
<a name="Perforation-Gun-Phasing-Type"></a>
* **Perforation Gun Phasing Type**<br>
  (OSDU entity type **PerforationGunPhasingType** in group-type reference-data) Description: _The angle between shots of a well perforation tool._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationGunPhasingType](../../E-R/reference-data/PerforationGunPhasingType.1.0.1.md)
<a name="Perforation-Interval"></a>
* **Perforation Interval**<br>
  (OSDU entity type **PerforationInterval** in group-type master-data) Description: _A Perforation Interval is associated to a Perforation Job. An interval is the Top & Base depth range that a specific Perforating Gun suite was fired in unison to produce Openings. An interval should be created for each Gun suite fired. A interval should also be created for a specific Tubing Punch firing events also._<br>
    &rarr; _OSDU types/schemas:_ [master-data--PerforationInterval](../../E-R/master-data/PerforationInterval.1.2.0.md)
<a name="Perforation-Interval-Reason"></a>
* **Perforation Interval Reason**<br>
  (OSDU entity type **PerforationIntervalReason** in group-type reference-data) Description: _Reason why the perforation interval was constructed._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationIntervalReason](../../E-R/reference-data/PerforationIntervalReason.1.0.0.md)
<a name="Perforation-Interval-Type"></a>
* **Perforation Interval Type**<br>
  (OSDU entity type **PerforationIntervalType** in group-type reference-data) Description: _The method type used during the perforation of an interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationIntervalType](../../E-R/reference-data/PerforationIntervalType.1.0.0.md)
<a name="Perforation-Interval-WL-Size"></a>
* **Perforation Interval WL Size**<br>
  (OSDU entity type **PerforationIntervalWLSize** in group-type reference-data) Description: _Wireline Diameter as string value, always measured in inches  (=0.0254 m)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationIntervalWLSize](../../E-R/reference-data/PerforationIntervalWLSize.1.0.0.md)
<a name="Perforation-Job"></a>
* **Perforation Job**<br>
  (OSDU entity type **PerforationJob** in group-type master-data) Description: _A Perforation Job describes an activity performed on a well for the purpose of firing perforation guns or puncher inside Casing, Liner or Tubing to create a flow path between the reservoir outside the pipe and the production annulus within the pipe. A Squeeze job is a remedial effort performed to create a temporary flow path to allow cement to be pumped outside the casing to repair the annular seal. Perf Intervals result in the creation of equivalent Wellbore Openings where they are managed as part of the Completion. A Squeeze job would not result in creation of Wellbore Openings as these are temporary to better seal that interval._<br>
    &rarr; _OSDU types/schemas:_ [master-data--PerforationJob](../../E-R/master-data/PerforationJob.1.2.0.md)
<a name="Perforation-Pill-Type"></a>
* **Perforation Pill Type**<br>
  (OSDU entity type **PerforationPillType** in group-type reference-data) Description: _Liquid pill pumped to optimise perforation job, e.g., debris prevention._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PerforationPillType](../../E-R/reference-data/PerforationPillType.1.0.0.md)
<a name="Peripheral-Foreland-Continent-Continent"></a>
* **Peripheral Foreland Continent-Continent**<br>
  (BasinType) Basin developed on one or both sides of mountainous collision massif developed in continent-continent collision zone. Peripheral Foreland Continent-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Permeability-Measurement-Method"></a>
* **Permeability Measurement Method**<br>
  (OSDU entity type **PermeabilityMeasurementMethod** in group-type reference-data) Description: _The technique used to measure the permeability of the sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PermeabilityMeasurementMethod](../../E-R/reference-data/PermeabilityMeasurementMethod.1.0.0.md)
<a name="Permeability-Measurement-Type"></a>
* **Permeability Measurement Type**<br>
  (OSDU entity type **PermeabilityMeasurementType** in group-type reference-data) Description: _The method used in routine core analysis to measure the ability of gas or fluid to flow through a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PermeabilityMeasurementType](../../E-R/reference-data/PermeabilityMeasurementType.1.0.1.md)
<a name="Persistable-Reference"></a>
* **Persistable Reference**<br>
  (OSDU) A string-serialized JSON structure, which is a self-contained description of a UnitOfMeasure, CoordinateReferenceSystem, DateTime frame of reference definition. It is used in the meta[] array members. In the platform it is slowly replaced by references to UoM, CRS catalog members (reference data entity types). These in turn hold the persistable reference string once.<br>
    &rarr; _Schema Usage Guide:_ [4.3.2 FoR in Records](04-FrameOfReference.md#432-for-in-records)   <br>&rarr; _OSDU types/schemas:_ [AbstractPersistableReference](../../E-R/abstract/AbstractPersistableReference.1.0.0.md)
<a name="Persisted-Collection"></a>
* **Persisted Collection**<br>
  (OSDU entity type **PersistedCollection** in group-type work-product-component) Description: _A persisted collection of objects ingested in the data platform. The collection can aggregate objects of different nature, including master data, work-product-components and reference data. A PersistedCollection can also contain other PersistedCollection(s)._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--PersistedCollection](../../E-R/work-product-component/PersistedCollection.1.2.0.md)
<a name="Personnel-Organisation-Role"></a>
* **Personnel Organisation Role**<br>
  (OSDU entity type **PersonnelOrganisationRole** in group-type reference-data) Description: _Type of Organisational Role that a person can perform_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PersonnelOrganisationRole](../../E-R/reference-data/PersonnelOrganisationRole.1.0.0.md)
<a name="Personnel-Service-Type"></a>
* **Personnel Service Type**<br>
  (OSDU entity type **PersonnelServiceType** in group-type reference-data) Description: _Type of drilling service that a person can perform_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PersonnelServiceType](../../E-R/reference-data/PersonnelServiceType.1.0.0.md)
<a name="Petroleum-System-Element-Type"></a>
* **Petroleum System Element Type**<br>
  (OSDU entity type **PetroleumSystemElementType** in group-type reference-data) Description: _Petroleum system risk element such as Reservoir, Source, Seal, Structure (geometry)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PetroleumSystemElementType](../../E-R/reference-data/PetroleumSystemElementType.1.0.0.md)
<a name="PH-Measurement-Method"></a>
* **PH Measurement Method**<br>
  (OSDU entity type **PHMeasurementMethod** in group-type reference-data) Description: _The methods and related tools used to determine the pH value of a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PHMeasurementMethod](../../E-R/reference-data/PHMeasurementMethod.1.0.0.md)
<a name="Physical-Media"></a>
* **Physical Media**<br>
  (OSDU entity type **PhysicalMedia** in group-type dataset) Description: _A dataset record representing physical (non-digital) media, for example tape reels, tape cassettes, paper hard copies, prints, which are located in some warehouse represented by a StorageFacility._<br>
    &rarr; _OSDU types/schemas:_ [dataset--PhysicalMedia](../../E-R/dataset/PhysicalMedia.1.0.1.md)
<a name="Piggyback"></a>
* **Piggyback**<br>
  (BasinType) Local topographic basin typically developed on top of active thrust and fold belt. Piggyback is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Pillar-Shape-Type"></a>
* **Pillar Shape Type**<br>
  (OSDU entity type **PillarShapeType** in group-type reference-data) Description: _An enumeration of the pillar shape type based on the RESQML model, i.e., vertical, straight, curved._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PillarShapeType](../../E-R/reference-data/PillarShapeType.1.0.0.md)
<a name="Pinchout"></a>
* **Pinchout**<br>
  (ProspectType) Reservoir is porous sand tapering up dip into shale. Pinchout is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Pinnacle-Reef"></a>
* **Pinnacle Reef**<br>
  (ProspectType) Isolated carbonate reef in marine shale. Pinnacle Reef is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Pitfalls"></a>
* **Pitfalls**<br>
  (OSDU) See the Known Issues chapter in the appendix of the Schema Usage Guide <br>
    &rarr; _Schema Usage Guide:_ [Appendix E Known Issues](94-KnownIssues.md#appendix-e-known-issues)
<a name="Planned-Cement-Job"></a>
* **Planned Cement Job**<br>
  (OSDU entity type **PlannedCementJob** in group-type master-data) Description: _A single cement job description for the purpose of planning._<br>
    &rarr; _OSDU types/schemas:_ [master-data--PlannedCementJob](../../E-R/master-data/PlannedCementJob.1.4.0.md)
<a name="Planned-Lithology"></a>
* **Planned Lithology**<br>
  (OSDU entity type **PlannedLithology** in group-type work-product-component) Description: _Describes the sequence of expected lithologic intervals for the Wellbore_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--PlannedLithology](../../E-R/work-product-component/PlannedLithology.1.2.0.md)
<a name="Platform"></a>
* **Platform**<br>
  * (Geology) A relatively flat, nearly level area of sedimentary rocks in a continent that overlies or abuts the basement rocks of a craton.
  * OSDU Platform
    &rarr; _See also_ [OSDU Platform](#OSDU-Platform).
<a name="Play"></a>
* **Play**<br>
  (OSDU entity type **Play** in group-type master-data) Description: _A named area that likely contains a combination of certain geological factors making it prospective for mineral exploration. It is often considered to be a set of prospects with a common set of characteristics._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="Play-Type"></a>
* **Play Type**<br>
  (OSDU entity type **PlayType** in group-type reference-data) Description: _Play Type [Well Play Type] is the focus or area conducive to hydrocarbon discovery and includes the related activities for the development and production of the reservoir._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PlayType](../../E-R/reference-data/PlayType.1.0.0.md)
<a name="Plug-Type"></a>
* **Plug Type**<br>
  (OSDU entity type **PlugType** in group-type reference-data) Description: _Purpose of Cement Plug such as wellbore abandonment, side-tracking or kick-off._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PlugType](../../E-R/reference-data/PlugType.1.0.1.md)
<a name="Porosity-Measurement-Type"></a>
* **Porosity Measurement Type**<br>
  (OSDU entity type **PorosityMeasurementType** in group-type reference-data) Description: _The method of porosity measurement used to determine basic rock properties by routine core analysis (RCA) and crushed rock analysis. Not for special core analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PorosityMeasurementType](../../E-R/reference-data/PorosityMeasurementType.1.0.1.md)
<a name="Position-Order"></a>
* **Position (Order)**<br>
  (PPDM) Position indicates the rank, sequence or order of an entity relative to other entities.
<a name="Postrift-Sag"></a>
* **Postrift Sag**<br>
  (BasinType) Basin localized by thermal subsidence of failed or inactive continental rift. Postrift Sag is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Postrift-Sag-Inversion"></a>
* **Postrift Sag Inversion**<br>
  (BasinType) Redeposition of post-rift sag deposits on margins of uplift caused by later reverse motion on one or more rift-bounding extension faults. Postrift Sag Inversion is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="PPDM"></a>
* **PPDM**<br>
  (Standards Organisation) The PPDM Association is the not for profit, global society that enables the development of data professionals, engages them in community, and endorses a collective body of knowledge for data capability across the energy and natural resources industry. [PPDM Homepage](https://ppdm.org/ppdm).
<a name="PPDM-Reference-Data"></a>
* **PPDM Reference Data**<br>
  (OSDU reference-data Records) PPDM curates and governs a number of reference value lists for OSDU. [The PPDM curated/governed lists are summarized here.](../../E-R/PPDM_Lists_Report.md)
<a name="PPDM-Reference-Value-Lists"></a>
* **PPDM Reference Value Lists**<br>
  (PPDM) Also called pick lists - PPDM governed lists and list values are summarized in [README](../../E-R/PPDM_Lists_Report.md). See also the complete [AllReferenceValues.xlsx](../../ReferenceValues/Manifests/AllReferenceValues.xlsx).
<a name="PPFG-Context-Type"></a>
* **PPFG Context Type**<br>
  (OSDU entity type **PPFGContextType** in group-type reference-data) Description: _Reflects the context of the PPFG acquired data (may be Pre-Drill/Post-Drill...)_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGContextType](../../E-R/reference-data/PPFGContextType.1.0.0.md)
<a name="PPFG-Curve-Family"></a>
* **PPFG Curve Family**<br>
  (OSDU entity type **PPFGCurveFamily** in group-type reference-data) Description: _The PPFG Curve Family reflects the 'Detailed' Geological Physical Quantity Measured - such Pore Pressure in Shale_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveFamily](../../E-R/reference-data/PPFGCurveFamily.1.0.0.md)
<a name="PPFG-Curve-Litho-Type"></a>
* **PPFG Curve Litho Type**<br>
  (OSDU entity type **PPFGCurveLithoType** in group-type reference-data) Description: _Reflects the lithological unit a PPFG curve is representing_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveLithoType](../../E-R/reference-data/PPFGCurveLithoType.1.0.0.md)
<a name="PPFG-Curve-Main-Family"></a>
* **PPFG Curve Main Family**<br>
  (OSDU entity type **PPFGCurveMainFamily** in group-type reference-data) Description: _Reflects the Geological Physical Quantity measured within the PPFG Curve - can be 'Pore Pressure', 'FractureGradient', 'HorizontalStress'..._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveMainFamily](../../E-R/reference-data/PPFGCurveMainFamily.1.0.0.md)
<a name="PPFG-Curve-Mnemonic"></a>
* **PPFG Curve Mnemonic**<br>
  (OSDU entity type **PPFGCurveMnemonic** in group-type reference-data) Description: _The mnemonic of the PPFG Curve is the value as received either from Raw Providers or from Internal Processing team._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveMnemonic](../../E-R/reference-data/PPFGCurveMnemonic.1.0.0.md)
<a name="PPFG-Curve-Probability"></a>
* **PPFG Curve Probability**<br>
  (OSDU entity type **PPFGCurveProbability** in group-type reference-data) Description: _The PPFG Curve Family reflects the level of probability associated to the Curve - defined by any company - could be 'Most Likely', 'Min Case',..._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveProbability](../../E-R/reference-data/PPFGCurveProbability.1.0.0.md)
<a name="PPFG-Curve-Processing-Type"></a>
* **PPFG Curve Processing Type**<br>
  (OSDU entity type **PPFGCurveProcessingType** in group-type reference-data) Description: _Describes the level of processing each PPFG curve went through_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveProcessingType](../../E-R/reference-data/PPFGCurveProcessingType.1.0.0.md)
<a name="PPFG-Curve-Transform-Model-Type"></a>
* **PPFG Curve Transform Model Type**<br>
  (OSDU entity type **PPFGCurveTransformModelType** in group-type reference-data) Description: _Name of the empirical calibrated model used for pressure calculation from a petrophysical curve (sonic or resistivity logs) - such as "Eaton" and  "Bowers",..._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PPFGCurveTransformModelType](../../E-R/reference-data/PPFGCurveTransformModelType.1.0.0.md)
<a name="PPFG-Dataset"></a>
* **PPFG Dataset**<br>
  (OSDU entity type **PPFGDataset** in group-type work-product-component) Description: _Pore Pressure and Fracture (Pressure) Gradient (PPFG) data describes the predicted (Pre-drill) and actual (Post-drill) depth-related variations in overburden stress, pore pressure, fracture pressure and minimum principal stress within a wellbore and conveys the range of uncertainty in these values given various plausible geological scenarios. PPFG predictions are fundamental inputs for well design and construction and estimates of pore and fracture pressure are typically provided to the well planning and execution teams._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--PPFGDataset](../../E-R/work-product-component/PPFGDataset.1.2.0.md)
<a name="Prefecture"></a>
* **Prefecture**<br>
  (GeoPoliticalEntityType) Area governed by a Prefecture-like related system. Prefecture is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Preferred-Schema-Version"></a>
* **Preferred Schema Version**<br>
  (OSDU entity type **PreferredSchemaVersion** in group-type reference-data) Description: _A configuration record to identify a minimum, maximum and a preferred schema version for a given schema kind fragment defined by major version number, e.g., `osdu:wks:group-type--EntityType:2.`. This kind fragment is the `data.Code` and part of the `id`  of the reference-data--PreferredSchemaVersion record._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PreferredSchemaVersion](../../E-R/reference-data/PreferredSchemaVersion.1.0.0.md)
<a name="Pressure-Gradient-Calculation-Method"></a>
* **Pressure Gradient Calculation Method**<br>
  (OSDU entity type **PressureGradientCalculationMethod** in group-type reference-data) Description: _Describes the different potential methods to determine or compute a Pressure Gradient_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PressureGradientCalculationMethod](../../E-R/reference-data/PressureGradientCalculationMethod.1.0.0.md)
<a name="Pressure-Measurement-Type"></a>
* **Pressure Measurement Type**<br>
  (OSDU entity type **PressureMeasurementType** in group-type reference-data) Description: _The actual or theoretical pressure conditions applied to a rock or fluid sample during an experiment._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PressureMeasurementType](../../E-R/reference-data/PressureMeasurementType.1.0.1.md)
<a name="Principality"></a>
* **Principality**<br>
  (GeoPoliticalEntityType) Area governed by a Principality-like related system. Principality is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Processed-In-SAR"></a>
* **Processed In SAR**<br>
  (OSDU entity type **ProcessedInSAR** in group-type work-product-component) Description: _Interferometric Synthetic Aperture Radar (InSAR) is a representation of surface or ground deformation from satellite radar image data over time_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ProcessedInSAR](../../E-R/work-product-component/ProcessedInSAR.1.2.0.md)
<a name="Processing-Parameter-Type"></a>
* **Processing Parameter Type**<br>
  (OSDU entity type **ProcessingParameterType** in group-type reference-data) Description: _A variable that can be changed independently and often arbitrarily between calculations but which remains constant during any calculation. (SEG)_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ProcessingParameterType](../../E-R/reference-data/ProcessingParameterType.1.0.1.md)
<a name="Product-Kind"></a>
* **Product Kind**<br>
  (OSDU entity type **ProductKind** in group-type reference-data) Description: _The kind of fluid or substance values are recorded for._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ProductKind](../../E-R/reference-data/ProductKind.1.0.0.md)
<a name="Production-Property-Type"></a>
* **Production Property Type**<br>
  (OSDU entity type **ProductionPropertyType** in group-type reference-data) Description: _The kind of quantity being recorded for a product._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ProductionPropertyType](../../E-R/reference-data/ProductionPropertyType.1.0.0.md)
<a name="Production-Values"></a>
* **Production Values**<br>
  (OSDU entity type **ProductionValues** in group-type work-product-component) Description: _The result of activities or events that result in production metric values, the distinct instances of which reside within the DDMS and/or dataset itself._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ProductionValues](../../E-R/work-product-component/ProductionValues.2.0.0.md)
<a name="Project-Role"></a>
* **Project Role**<br>
  (OSDU entity type **ProjectRole** in group-type reference-data) Description: _The role of an individual supporting a Project, such as Project Manager, Party Chief, Client Representative, Senior Observer._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ProjectRole](../../E-R/reference-data/ProjectRole.1.0.0.md)
<a name="Project-State-Type"></a>
* **Project State Type**<br>
  (OSDU entity type **ProjectStateType** in group-type reference-data) Description: _The Project life cycle state from planning to completion._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ProjectStateType](../../E-R/reference-data/ProjectStateType.1.0.0.md)
<a name="Property"></a>
* **Property**<br>
  (PPDM) A Property is an essential or distinctive characteristic of an entity that can be quantified (measured) or identified (named). These values describe what is being measured.<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PropertyType](../../E-R/reference-data/PropertyType.1.0.0.md)
<a name="Property-Field-Representation-Type"></a>
* **Property Field Representation Type**<br>
  (OSDU entity type **PropertyFieldRepresentationType** in group-type reference-data) Description: _The type of topology used to represent the discrete velocity observations, such as Grid or Mesh._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PropertyFieldRepresentationType](../../E-R/reference-data/PropertyFieldRepresentationType.1.0.0.md)
<a name="Property-Name-Type"></a>
* **Property Name Type**<br>
  (OSDU entity type **PropertyNameType** in group-type reference-data) Description: _Name of a measured or observed property, such as Vp, Vs, epsilon, delta, eta._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PropertyNameType](../../E-R/reference-data/PropertyNameType.1.0.0.md)
<a name="Property-Type"></a>
* **Property Type**<br>
  (OSDU entity type **PropertyType** in group-type reference-data) Description: _PropertyType is part of Energistics PWLS 3, which defines a detailed hierarchy of properties linked to the Energistics UnitQuantity/UnitOfMeasure._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PropertyType](../../E-R/reference-data/PropertyType.1.0.0.md)
<a name="Property-Type-Class"></a>
* **Property Type Class**<br>
  (OSDU entity type **PropertyTypeClass** in group-type reference-data) Description: _The classification of the nature of a property type (e.g., discrete, continuous, or categorical)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PropertyTypeClass](../../E-R/reference-data/PropertyTypeClass.1.0.0.md)
<a name="Prospect"></a>
* **Prospect**<br>
  (OSDU entity type **Prospect** in group-type master-data) Description: _A named area or location, likely containing commercial deposits of a mineral, that is a candidate for extraction.  This normally means a candidate drilling location.._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Prospect-Type"></a>
* **Prospect Type**<br>
  (OSDU entity type **ProspectType** in group-type reference-data) Description: _A kind of potential trap that must be evaluated by drilling to determine whether it contains commercial quantities of petroleum._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ProspectType](../../E-R/reference-data/ProspectType.1.1.0.md)
<a name="Province"></a>
* **Province**<br>
  (GeoPoliticalEntityType) Area governed by a Province-like related system. Province is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Pump-Op-Type"></a>
* **Pump Op Type**<br>
  (OSDU entity type **PumpOpType** in group-type reference-data) Description: _Type of pump operations performed in the operations report_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--PumpOpType](../../E-R/reference-data/PumpOpType.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## Q

<a name="Qualifier"></a>
* **Qualifier**<br>
  (PPDM) Qualifiers are word groups that expand on, limit or clarify the meaning of another concept or piece of information. They may also be used to differentiate between meanings that may otherwise be semantically unclear.
<a name="Qualitative-Spatial-Accuracy-Type"></a>
* **Qualitative Spatial Accuracy Type**<br>
  (OSDU entity type **QualitativeSpatialAccuracyType** in group-type reference-data) Description: _The level of confidence that the spatial feature is correctly located._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--QualitativeSpatialAccuracyType](../../E-R/reference-data/QualitativeSpatialAccuracyType.1.0.1.md)
<a name="Quality-Assessment-Method"></a>
* **Quality Assessment Method**<br>
  (OSDU entity type **QualityAssessmentMethod** in group-type reference-data) Description: _Platform-known assessment method types with their descriptions._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--QualityAssessmentMethod](../../E-R/reference-data/QualityAssessmentMethod.1.0.0.md)
<a name="Quality-Assessment-State"></a>
* **Quality Assessment State**<br>
  (OSDU entity type **QualityAssessmentState** in group-type reference-data) Description: _A reference value capturing Quality assessments: Passed, Failed, Error or Unevaluated._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--QualityAssessmentState](../../E-R/reference-data/QualityAssessmentState.1.0.0.md)
<a name="Quantitative-Accuracy-Band"></a>
* **Quantitative Accuracy Band**<br>
  (OSDU entity type **QuantitativeAccuracyBand** in group-type reference-data) Description: _A number to express the proximity of a measurement to the true value._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--QuantitativeAccuracyBand](../../E-R/reference-data/QuantitativeAccuracyBand.1.0.0.md)
<a name="Quantity-Class"></a>
* **Quantity Class**<br>
  (PPDM) Quantity Class: The kind of units, with the same dimension and same underlying measurement concept, that are used when measuring a property. <br>
    &rarr; _OSDU types/schemas:_ [reference-data--UnitQuantity](../../E-R/reference-data/UnitQuantity.1.0.0.md)
<a name="Quantity-Method"></a>
* **Quantity Method**<br>
  (OSDU entity type **QuantityMethod** in group-type reference-data) Description: _The method to measure or derive a production volume or related property suitable for accounting, reporting and analytics._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--QuantityMethod](../../E-R/reference-data/QuantityMethod.1.0.1.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## R

<a name="Rancheria"></a>
* **Rancheria**<br>
  (GeoPoliticalEntityType) Area governed by a Rancheria-like related system. Rancheria is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="RCA"></a>
* **RCA**<br>
  (OSDU) Acronym for [Routine Core Analysis](#Routine-Core-Analysis).
<a name="Reason"></a>
* **Reason**<br>
  (PPDM) Reasons reflect why a procedure or activity will be done and are usually captured in advance of the event or activity.
<a name="Reason-Trip-Type"></a>
* **Reason Trip Type**<br>
  (OSDU entity type **ReasonTripType** in group-type reference-data) Description: _BHA trip reason such as Change Bottomhole Assembly, Downhole Motor Failure, Drill Stem Failure_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReasonTripType](../../E-R/reference-data/ReasonTripType.1.0.0.md)
<a name="Reef"></a>
* **Reef**<br>
  (ProspectType) Porous carbonate reef. Reef is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Reef-Margin"></a>
* **Reef Margin**<br>
  (ProspectType) Carbonate reef margin with up dip and top seals of marine shale. Reef Margin is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Reference-Context"></a>
* **Reference (Context)**<br>
  (PPDM) Reference (Context): A reference list containing terms that are used to provide context to other information in a data object. For examples, depth readings in a storage tank may be based on tank strapping markers installed on the side of the tank.
<a name="Reference-Data-Index-Template"></a>
* **Reference Data Index Template**<br>
  (OSDU entity type **ReferenceDataIndexTemplate** in group-type reference-data) Description: _The formal indexing schema for all reference-data entities, which do not contain any individual properties. ReferenceDataIndexTemplate is not supposed to be populated with reference values. No manifest is provided by OSDU._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReferenceDataIndexTemplate](../../E-R/reference-data/ReferenceDataIndexTemplate.1.0.0.md)
<a name="Reference-Level"></a>
* **Reference Level**<br>
  (OSDU entity type **ReferenceLevel** in group-type master-data) Description: _A reference level or horizontal reference surface, which can be re-used by many other entities. The area of use is indicated by data.SpatialLocation - as a polygon or as a point if used in context of a Well or Wellbore._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ReferenceLevel](../../E-R/master-data/ReferenceLevel.1.1.0.md)
<a name="Reference-Value-Deprecation"></a>
* **Reference Value Deprecation**<br>
  (OSDU Data Definition) OSDU does not remove reference value records, instead it deprecates the records with the old record `id` and, if feasible, provides the upgrade resources to supersede the references.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.4.2 Reference Value Upgrade](93-OSDU-Schemas.md#appendix-d42-reference-value-upgrade)   <br>&rarr; _OSDU types/schemas:_ [reference-data--ReferenceValueUpgradeLookUp](../../E-R/reference-data/ReferenceValueUpgradeLookUp.2.0.0.md)
<a name="Reference-Value-Lists"></a>
* **Reference Value Lists**<br>
  (OSDU, PPDM) Also called pick lists - OSDU assigns many specific value lists or catalog as reference value controlled lists. All such lists belong to the reference-data group type. Some codes appear in multiple reference value lists. OSDU delivers an overview of all published reference value Code and Name for each reference-data types. The result is available in [AllReferenceValues.xlsx](../../ReferenceValues/Manifests/AllReferenceValues.xlsx). Links to the source spreadsheets and manifest resources are available in ths [README](../../ReferenceValues/Manifests/README.md).
<a name="Reference-Value-Upgrade-Look-Up"></a>
* **Reference Value Upgrade Look Up**<br>
  (OSDU entity type **ReferenceValueUpgradeLookUp** in group-type reference-data) Description: _ReferenceValueUpgradeLookUp provides a list of reference-data usages, associated to a look-up table from deprecated to superseded reference values._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReferenceValueUpgradeLookUp](../../E-R/reference-data/ReferenceValueUpgradeLookUp.2.0.0.md)
<a name="Region"></a>
* **Region**<br>
  (GeoPoliticalEntityType) Area governed by a Region-like related system. Region is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Regional-County"></a>
* **Regional County**<br>
  (GeoPoliticalEntityType) Area governed by a Regional County-like related system. Regional County is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Relationship"></a>
* **Relationship**<br>
  (OSDU) OSDU represents relationships as string properties holding the target record id:version, where version is optional. The schema is decorated with x-osdu-relationship identifying the target group-type and entity type if constrained. This decoration is used to create a regex expression for the expected target `id:version`. <br>
    &rarr; _Schema Usage Guide:_ [6.4 How to form Relationships](06-LifecycleProperties.md#64-how-to-form-relationships), [Appendix D.3.2 `x-osdu-relationship` - Relationship Decorators](93-OSDU-Schemas.md#appendix-d32-x-osdu-relationship-relationship-decorators)
<a name="Reporting-Period"></a>
* **Reporting Period**<br>
  (OSDU entity type **ReportingPeriod** in group-type reference-data) Description: _A time interval associated with a numeric value for production reporting purposes._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReportingPeriod](../../E-R/reference-data/ReportingPeriod.1.0.1.md)
<a name="Representation-Role"></a>
* **Representation Role**<br>
  (OSDU entity type **RepresentationRole** in group-type reference-data) Description: _A specification of the role, which the representation in context plays. For example: 'Map', 'Pick', 'FaultCenterLine', 'InnerRing', 'OuterRing'._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RepresentationRole](../../E-R/reference-data/RepresentationRole.1.0.0.md)
<a name="Representation-Type"></a>
* **Representation Type**<br>
  (OSDU entity type **RepresentationType** in group-type reference-data) Description: _The type of a representation, such as, for example, 'PointSet', 'Polyline', 'PolylineSet', 'TriangulatedSurface', etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RepresentationType](../../E-R/reference-data/RepresentationType.1.0.0.md)
<a name="Reservoir"></a>
* **Reservoir**<br>
  (OSDU entity type **Reservoir** in group-type master-data) Description: _A reservoir is a subsurface rock formation which 1) is a volume of porous and permeable rock and 2) contains an individual and separate natural accumulation of moveable fluids that are confined by impermeable rock formations. Fluids may be produced from a reservoir and injected into a reservoir for increased recovery, storage or disposal._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Reservoir](../../E-R/master-data/Reservoir.2.0.0.md)
<a name="Reservoir-Compartment-Interpretation"></a>
* **Reservoir Compartment Interpretation**<br>
  (OSDU entity type **ReservoirCompartmentInterpretation** in group-type work-product-component) Description: _A portion of a reservoir rock which is differentiated laterally from other portions of the same reservoir stratum. This differentiation could be due to being in a different fault block or a different channel or other stratigraphic or structural aspect. A reservoir compartment may or may not be in contact with other reservoir compartments._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirCompartmentInterpretation](../../E-R/work-product-component/ReservoirCompartmentInterpretation.1.2.0.md)
<a name="Reservoir-Component-Composition-Type"></a>
* **Reservoir Component Composition Type**<br>
  (OSDU entity type **ReservoirComponentCompositionType** in group-type reference-data) Description: _List of phases which specify the composition/ component mole fractions versus depth._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirComponentCompositionType](../../E-R/reference-data/ReservoirComponentCompositionType.1.0.0.md)
<a name="Reservoir-Drive-Mechanism-Type"></a>
* **Reservoir Drive Mechanism Type**<br>
  (OSDU entity type **ReservoirDriveMechanismType** in group-type reference-data) Description: _A reservoir drive mechanism refers to the energy source that helps displace hydrocarbons from a subsurface reservoir and push them toward the production well. The drive mechanism is crucial for designing effective reservoir management strategies and optimizing hydrocarbon recovery._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirDriveMechanismType](../../E-R/reference-data/ReservoirDriveMechanismType.1.0.0.md)
<a name="Reservoir-Estimated-Volume-Property-Type"></a>
* **Reservoir Estimated Volume Property Type**<br>
  (OSDU entity type **ReservoirEstimatedVolumePropertyType** in group-type reference-data) Description: _The list of estimated in-place or technical recoverable volume property types. Used by ReservoirEstimatedVolume._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirEstimatedVolumePropertyType](../../E-R/reference-data/ReservoirEstimatedVolumePropertyType.1.0.0.md)
<a name="Reservoir-Estimated-Volume-Type"></a>
* **Reservoir Estimated Volume Type**<br>
  (OSDU entity type **ReservoirEstimatedVolumeType** in group-type reference-data) Description: _The discriminator type to scope work-product-component--ReservoirEstimatedVolumes to either in-place or technical recoverable volume._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirEstimatedVolumeType](../../E-R/reference-data/ReservoirEstimatedVolumeType.1.0.0.md)
<a name="Reservoir-Estimated-Volumes"></a>
* **Reservoir Estimated Volumes**<br>
  (OSDU entity type **ReservoirEstimatedVolumes** in group-type work-product-component) Description: _Details on hydrocarbons estimated in place or estimated ultimate technical recoverables at some reservoir entity level. The scope is given by the related ParentObjectID, which is either a Field, Reservoir or ReservoirSegment._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirEstimatedVolumes](../../E-R/work-product-component/ReservoirEstimatedVolumes.1.1.1.md)
<a name="Reservoir-Life-Cycle-Status"></a>
* **Reservoir Life Cycle Status**<br>
  (OSDU entity type **ReservoirLifeCycleStatus** in group-type reference-data) Description: _The Life Cycle Status of the Reservoir or ReservoirSegment, a concept which is typically chronological._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirLifeCycleStatus](../../E-R/reference-data/ReservoirLifeCycleStatus.1.0.0.md)
<a name="Reservoir-Model-Scenario"></a>
* **Reservoir Model Scenario**<br>
  (OSDU entity type **ReservoirModelScenario** in group-type work-product-component) Description: _Represents a comprehensive set of objects – aiming to represent a specific model hypothesis from a real studied reservoir context_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirModelScenario](../../E-R/work-product-component/ReservoirModelScenario.1.0.0.md)
<a name="Reservoir-Segment"></a>
* **Reservoir Segment**<br>
  (OSDU entity type **ReservoirSegment** in group-type master-data) Description: _A reservoir segment is an earth volume within a reservoir (e.g., reservoir zone, reservoir pattern, subsidence bowl, drainage region of one or more wells, etc.). Each reservoir segment is a unique and spatially non-overlapping part of a reservoir.<br>
  A comprehensive set of Segments can be built with a PersistedCollection._<br>
    &rarr; _OSDU types/schemas:_ [master-data--ReservoirSegment](../../E-R/master-data/ReservoirSegment.2.0.0.md)
<a name="Reservoir-Simulation-Equilibrium-Model"></a>
* **Reservoir Simulation Equilibrium Model**<br>
  (OSDU entity type **ReservoirSimulationEquilibriumModel** in group-type work-product-component) Description: _Description of the gravity and thermodynamic equilibrium assumed to be reached between all phases for the simulation run or set of runs for a specific Reservoir Simulation Model_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirSimulationEquilibriumModel](../../E-R/work-product-component/ReservoirSimulationEquilibriumModel.1.0.0.md)
<a name="Reservoir-Simulation-Initialisation-Data-Type"></a>
* **Reservoir Simulation Initialisation Data Type**<br>
  (OSDU entity type **ReservoirSimulationInitialisationDataType** in group-type reference-data) Description: _Describes the type of initialisation in the context of Reservoir Simulation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationInitialisationDataType](../../E-R/reference-data/ReservoirSimulationInitialisationDataType.1.0.0.md)
<a name="Reservoir-Simulation-Initialisation-Type"></a>
* **Reservoir Simulation Initialisation Type**<br>
  (OSDU entity type **ReservoirSimulationInitialisationType** in group-type reference-data) Description: _Describes the type of initialisation applied for a specific reservoir simulation model. I.e., enumerated, equilibrium, or mixed._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationInitialisationType](../../E-R/reference-data/ReservoirSimulationInitialisationType.1.0.0.md)
<a name="Reservoir-Simulation-Model"></a>
* **Reservoir Simulation Model**<br>
  (OSDU entity type **ReservoirSimulationModel** in group-type work-product-component) Description: _A Reservoir Simulation Model assembles models of the static and dynamic characteristics for use in mathematical modelling of the reservoir._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirSimulationModel](../../E-R/work-product-component/ReservoirSimulationModel.1.0.0.md)
<a name="Reservoir-Simulation-Phase"></a>
* **Reservoir Simulation Phase**<br>
  (OSDU entity type **ReservoirSimulationPhase** in group-type reference-data) Description: _Identifies the potential phase (e.g., oil, gas, water) present in a reservoir simulation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationPhase](../../E-R/reference-data/ReservoirSimulationPhase.1.0.0.md)
<a name="Reservoir-Simulation-Property-Facet-Type"></a>
* **Reservoir Simulation Property Facet Type**<br>
  (OSDU entity type **ReservoirSimulationPropertyFacetType** in group-type reference-data) Description: _In compositional fluid model only (reservoir simulation context), describes the type of gridded property used for assignment - and the facet of this property assignment_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationPropertyFacetType](../../E-R/reference-data/ReservoirSimulationPropertyFacetType.1.0.0.md)
<a name="Reservoir-Simulation-Property-Type"></a>
* **Reservoir Simulation Property Type**<br>
  (OSDU entity type **ReservoirSimulationPropertyType** in group-type reference-data) Description: _List of types of attributes that specific reservoir simulation model properties capture (e.g., specific regions, permeabilities, porosities, saturations, ratios, production rates, pressures, indicators, etc.)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationPropertyType](../../E-R/reference-data/ReservoirSimulationPropertyType.1.0.0.md)
<a name="Reservoir-Simulation-Rock-Model-Mapping-Type"></a>
* **Reservoir Simulation Rock Model Mapping Type**<br>
  (OSDU entity type **ReservoirSimulationRockModelMappingType** in group-type reference-data) Description: _A list of aspects of the Reservoir Simulation Rock Model considered for a specific region-to-model assignment (e.g., Saturation Function, Rock Physics)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationRockModelMappingType](../../E-R/reference-data/ReservoirSimulationRockModelMappingType.1.0.0.md)
<a name="Reservoir-Simulation-Rock-Physics-Model"></a>
* **Reservoir Simulation Rock Physics Model**<br>
  (OSDU entity type **ReservoirSimulationRockPhysicsModel** in group-type work-product-component) Description: _A reservoir simulation rock physics model describes the rock compressibility (AKA compaction) of rock, its thermal properties and additional rock physics properties needed for reservoir simulation. It is an input for the task of reservoir simulation (AKA dynamic reservoir modeling). In OSDU, a reservoir simulation rock physics model and a saturation function set are associated to the ReservoirSimulationModel and assigned to the regions defining the rock properties. This rock physics model data object is only intended to support reservoir simulation, not to capture other rock physics data such as acoustic and elastic properties._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirSimulationRockPhysicsModel](../../E-R/work-product-component/ReservoirSimulationRockPhysicsModel.1.0.0.md)
<a name="Reservoir-Simulation-Run-Configuration"></a>
* **Reservoir Simulation Run Configuration**<br>
  (OSDU entity type **ReservoirSimulationRunConfiguration** in group-type work-product-component) Description: _A reservoir simulation run configuration captures parameters used to execute an actual iteration of reservoir simulation with focus on compute (HPC) configuration. It is meant to ensure reproducible outcomes. It can be shared across multiple models._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--ReservoirSimulationRunConfiguration](../../E-R/work-product-component/ReservoirSimulationRunConfiguration.1.0.0.md)
<a name="Reservoir-Simulation-Type-Tag"></a>
* **Reservoir Simulation Type Tag**<br>
  (OSDU entity type **ReservoirSimulationTypeTag** in group-type reference-data) Description: _List of higher level grouping terms that are used to search for reservoir simulation models based on various aspects of model type (e.g., purpose)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationTypeTag](../../E-R/reference-data/ReservoirSimulationTypeTag.1.0.0.md)
<a name="Reservoir-Simulation-Type-Tag-Category"></a>
* **Reservoir Simulation Type Tag Category**<br>
  (OSDU entity type **ReservoirSimulationTypeTagCategory** in group-type reference-data) Description: _Categories that classify reservoir simulation type tags more broadly for filtering purposes._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirSimulationTypeTagCategory](../../E-R/reference-data/ReservoirSimulationTypeTagCategory.1.0.0.md)
<a name="Reservoir-Trapping-Mechanism-Type"></a>
* **Reservoir Trapping Mechanism Type**<br>
  (OSDU entity type **ReservoirTrappingMechanismType** in group-type reference-data) Description: _A reservoir trapping mechanism refers to the geological processes and conditions that lead to the retention of hydrocarbons (oil and gas) within a subsurface reservoir. The presence of an effective trapping mechanism enhances the chances of discovering and exploiting economically viable hydrocarbon reserves._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirTrappingMechanismType](../../E-R/reference-data/ReservoirTrappingMechanismType.1.0.0.md)
<a name="Reservoir-Type"></a>
* **Reservoir Type**<br>
  (OSDU entity type **ReservoirType** in group-type reference-data) Description: _A general kind of reservoir based on the business or technical requirement._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ReservoirType](../../E-R/reference-data/ReservoirType.1.0.1.md)
<a name="Resource-Curation-Status"></a>
* **Resource Curation Status**<br>
  (OSDU entity type **ResourceCurationStatus** in group-type reference-data) Description: _Used to describe the resource curation statuses._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ResourceCurationStatus](../../E-R/reference-data/ResourceCurationStatus.1.0.0.md)
<a name="Resource-ID"></a>
* **Resource ID**<br>
  (OSDU) Also called `id`, the unique, version identifier of a record. The record's system property `id` carries the resource type, see `AbstractSystemProperties`, included by every storable record.<br>
    &rarr; _Schema Usage Guide:_ [6.1.1 Record `id`](06-LifecycleProperties.md#611-record-id)   <br>&rarr; _OSDU types/schemas:_ [AbstractSystemProperties](../../E-R/abstract/AbstractSystemProperties.1.0.0.md)
<a name="Resource-Lifecycle-Status"></a>
* **Resource Lifecycle Status**<br>
  (OSDU entity type **ResourceLifecycleStatus** in group-type reference-data) Description: _Used to describe the resource lifecycle statuses, where the resource is in the process to ingest and release it._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ResourceLifecycleStatus](../../E-R/reference-data/ResourceLifecycleStatus.1.0.0.md)
<a name="Resource-Type"></a>
* **Resource Type**<br>
  (OSDU) Also called `ResourceTypeID`, a term referring to a schema kind or schema definition. The record's system property `kind` carries the resource type, see `AbstractSystemProperties`, included by every storable record.<br>
    &rarr; _Schema Usage Guide:_ [6.1.2 Record `kind`](06-LifecycleProperties.md#612-record-kind)   <br>&rarr; _OSDU types/schemas:_ [AbstractSystemProperties](../../E-R/abstract/AbstractSystemProperties.1.0.0.md)
<a name="RESQML"></a>
* **RESQML**<br>
  (Energistics Standard) RESQML is an XML- and HDF5-based data-exchange standard that facilitates reliable, automated exchange of data among software packages used in subsurface workflows. RESQML consists of a set of XML schemas (XSD files) and other standards-based technology, which developers implement into software packages. Software that has implemented RESQML can read and write the standard format.<br>RESQML has been developed by a global consortium of operators, service companies, software vendors, and government agencies under the umbrella of Energistics.<br>
    &rarr; _Schema Usage Guide:_ [13.1 The RESQML conceptual data model](13-EarthModelling.md#131-the-resqml-conceptual-data-model)
<a name="Result"></a>
* **Result**<br>
  (PPDM) A result is the conclusion or end to which any course or condition of things leads, or which is obtained by any process or operation; consequence or effect.All outcomes are results, but not all results are outcomes.
<a name="Retroarc-Extensional-Ocean-Continent"></a>
* **Retroarc Extensional Ocean-Continent**<br>
  (BasinType) Extensional basin occurring behind arc developed on continental margin above subducting oceanic slab. Retroarc Extensional Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Extensional-Ocean-Continent-Inversion"></a>
* **Retroarc Extensional Ocean-Continent Inversion**<br>
  (BasinType) Redeposition of retro-arc sediments adjacent to uplift caused by reverse motion on extensional basin occurring behind arc developed on continental margin above subducting oceanic slab. Retroarc Extensional Ocean-Continent Inversion is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Extensional-Ocean-Ocean"></a>
* **Retroarc Extensional Ocean-Ocean**<br>
  (BasinType) Extensional basin occurring behind volcanic arc developed on overriding oceanic crust above subducting oceanic slab. Retroarc Extensional Ocean-Ocean is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Foreland-Ocean-Continent"></a>
* **Retroarc Foreland Ocean-Continent**<br>
  (BasinType) Basin developed behind volcanic arc superimposed on continental crust that is being thrust over itself, loading and depressing the adjacent continental crust. Retroarc Foreland Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Foreland-Ocean-Ocean"></a>
* **Retroarc Foreland Ocean-Ocean**<br>
  (BasinType) Basin developed behind volcanic arc superimposed on oceanic crust that is being thrust over itself, loading and depressing the adjacent oceanic crust. Retroarc Foreland Ocean-Ocean is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Postextensional-Sag-Ocean-Continent"></a>
* **Retroarc Postextensional Sag Ocean-Continent**<br>
  (BasinType) Later thermal subsidence of extensional basin occurring behind arc developed on continental margin above subducting oceanic slab. Retroarc Postextensional Sag Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Postextensional-Sag-Ocean-Continent-Inversion"></a>
* **Retroarc Postextensional Sag Ocean-Continent Inversion**<br>
  (BasinType) Redeposition of retro-arc post-extensional sediments adjacent to uplift caused by reverse motion on earlier extension faults near ocean-continent margin. Retroarc Postextensional Sag Ocean-Continent Inversion is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Retroarc-Postextensional-Sag-Ocean-Ocean"></a>
* **Retroarc Postextensional Sag Ocean-Ocean**<br>
  (BasinType) Later thermal subsidence of extensional basin occurring behind volcanic arc developed on overriding oceanic crust above subducting oceanic slab. Retroarc Postextensional Sag Ocean-Ocean is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Rift"></a>
* **Rift**<br>
  (BasinType) Typically a somewhat linear feature where continental crust has been pulled apart (extended). Rift is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Rig"></a>
* **Rig**<br>
  (OSDU entity type **Rig** in group-type master-data) Description: _Definition the Physical Rig. These values do not or very rarely change. Use the RigSpecification schema for all configuration data for the rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Rig](../../E-R/master-data/Rig.2.0.0.md)
<a name="Rig-Anchor"></a>
* **Rig Anchor**<br>
  (OSDU entity type **RigAnchor** in group-type master-data) Description: _Defines the properties of an anchor found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigAnchor](../../E-R/master-data/RigAnchor.1.0.0.md)
<a name="Rig-Boiler"></a>
* **Rig Boiler**<br>
  (OSDU entity type **RigBoiler** in group-type master-data) Description: _Defines the properties of a Boiler found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigBoiler](../../E-R/master-data/RigBoiler.1.0.0.md)
<a name="Rig-Cement-Unit"></a>
* **Rig Cement Unit**<br>
  (OSDU entity type **RigCementUnit** in group-type master-data) Description: _Defines the properties of a Cement unit found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigCementUnit](../../E-R/master-data/RigCementUnit.1.0.0.md)
<a name="Rig-Centrifuge"></a>
* **Rig Centrifuge**<br>
  (OSDU entity type **RigCentrifuge** in group-type master-data) Description: _Defines the properties of a Centrifuge found on the rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigCentrifuge](../../E-R/master-data/RigCentrifuge.1.0.0.md)
<a name="Rig-Circulating-System"></a>
* **Rig Circulating System**<br>
  (OSDU entity type **RigCirculatingSystem** in group-type master-data) Description: _Defines the properties of the circulation system on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigCirculatingSystem](../../E-R/master-data/RigCirculatingSystem.1.0.0.md)
<a name="Rig-Coil-Tubing-Reel"></a>
* **Rig Coil Tubing Reel**<br>
  (OSDU entity type **RigCoilTubingReel** in group-type master-data) Description: _Defines the properties of coil tubing reel found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigCoilTubingReel](../../E-R/master-data/RigCoilTubingReel.1.0.0.md)
<a name="Rig-Crane"></a>
* **Rig Crane**<br>
  (OSDU entity type **RigCrane** in group-type master-data) Description: _Defines the properties of a crane found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigCrane](../../E-R/master-data/RigCrane.1.0.0.md)
<a name="Rig-Degasser"></a>
* **Rig Degasser**<br>
  (OSDU entity type **RigDegasser** in group-type master-data) Description: _Defines the properties of a Degasser found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigDegasser](../../E-R/master-data/RigDegasser.1.0.0.md)
<a name="Rig-Derrick"></a>
* **Rig Derrick**<br>
  (OSDU entity type **RigDerrick** in group-type master-data) Description: _Definition of a drilling rig Derrick._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigDerrick](../../E-R/master-data/RigDerrick.1.0.0.md)
<a name="Rig-Hydrocyclone"></a>
* **Rig Hydrocyclone**<br>
  (OSDU entity type **RigHydrocyclone** in group-type master-data) Description: _Defines the properties of a Hydrocyclone found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigHydrocyclone](../../E-R/master-data/RigHydrocyclone.1.0.0.md)
<a name="Rig-Motor"></a>
* **Rig Motor**<br>
  (OSDU entity type **RigMotor** in group-type master-data) Description: _Defines the properties of a Motor found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigMotor](../../E-R/master-data/RigMotor.1.0.0.md)
<a name="Rig-Pit"></a>
* **Rig Pit**<br>
  (OSDU entity type **RigPit** in group-type master-data) Description: _Defines the properties of a Pit found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigPit](../../E-R/master-data/RigPit.1.0.0.md)
<a name="Rig-Pump"></a>
* **Rig Pump**<br>
  (OSDU entity type **RigPump** in group-type master-data) Description: _Defines the properties of a Pump found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigPump](../../E-R/master-data/RigPump.1.1.0.md)
<a name="Rig-Riser"></a>
* **Rig Riser**<br>
  (OSDU entity type **RigRiser** in group-type master-data) Description: _Defines the properties of a Riser found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigRiser](../../E-R/master-data/RigRiser.1.0.0.md)
<a name="Rig-Shaker"></a>
* **Rig Shaker**<br>
  (OSDU entity type **RigShaker** in group-type master-data) Description: _Defines the properties of a Shaker found on a rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigShaker](../../E-R/master-data/RigShaker.1.0.0.md)
<a name="Rig-Specifications"></a>
* **Rig Specifications**<br>
  (OSDU entity type **RigSpecifications** in group-type master-data) Description: _The specifications or configuration of the rig over a period of time. Use with the Rig.2.0.0 or later schema._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigSpecifications](../../E-R/master-data/RigSpecifications.1.0.0.md)
<a name="Rig-Type"></a>
* **Rig Type**<br>
  (OSDU entity type **RigType** in group-type reference-data) Description: _Types of Drilling Rigs. Possible reference values: Barge, Coiled Tubing, Floater, Jackup, Land, Platform, Semi_Submersible, Unknown._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RigType](../../E-R/reference-data/RigType.1.0.1.md)
<a name="Rig-Utilization"></a>
* **Rig Utilization**<br>
  (OSDU entity type **RigUtilization** in group-type master-data) Description: _Defines when the Rig is on/off location and the hole section depths related to the operations being performed by the rig._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RigUtilization](../../E-R/master-data/RigUtilization.2.0.0.md)
<a name="Risk"></a>
* **Risk**<br>
  (OSDU entity type **Risk** in group-type master-data) Description: _The exposure to the possibility of loss, injury, or other adverse or unwelcome circumstance; a chance or situation involving such a possibility. For example, the possible loss, injury, or other adverse or unwelcome circumstance encountered during the run of a drilling program or a single drilling string run._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Risk](../../E-R/master-data/Risk.2.0.0.md)
<a name="Risk-Category"></a>
* **Risk Category**<br>
  (OSDU entity type **RiskCategory** in group-type reference-data) Description: _Proposed reference values: hydraulics, mechanical, time related, wellbore stability, directional drilling, bit, equipment failure, completion, casing, other, HSE, unknown_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskCategory](../../E-R/reference-data/RiskCategory.1.0.1.md)
<a name="Risk-Consequence-Category"></a>
* **Risk Consequence Category**<br>
  (OSDU entity type **RiskConsequenceCategory** in group-type reference-data) Description: _Consequence category of the risk for possible effects on Asset, Business & Reputation, Environment, Health & Safety…_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskConsequenceCategory](../../E-R/reference-data/RiskConsequenceCategory.1.0.0.md)
<a name="Risk-Consequence-Sub-Category"></a>
* **Risk Consequence Sub Category**<br>
  (OSDU entity type **RiskConsequenceSubCategory** in group-type reference-data) Description: _References the consequence sub-category of the risk. Possible effects arising were a risk event to occur._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskConsequenceSubCategory](../../E-R/reference-data/RiskConsequenceSubCategory.1.0.0.md)
<a name="Risk-Discipline"></a>
* **Risk Discipline**<br>
  (OSDU entity type **RiskDiscipline** in group-type reference-data) Description: _Organisational unit accountable for maintaining appropriate focus on a risk and its management and for appropriate consultation with stakeholders_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskDiscipline](../../E-R/reference-data/RiskDiscipline.1.0.1.md)
<a name="Risk-Hierarchy-Level"></a>
* **Risk Hierarchy Level**<br>
  (OSDU entity type **RiskHierarchyLevel** in group-type reference-data) Description: _Area within organisation where risks will be most applicable, includes Well-level, Field-level, Region-level, Global-level_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskHierarchyLevel](../../E-R/reference-data/RiskHierarchyLevel.1.0.1.md)
<a name="Risk-Response-Status"></a>
* **Risk Response Status**<br>
  (OSDU entity type **RiskResponseStatus** in group-type reference-data) Description: _Describes the status of the action such as In progress, done, cancelled…_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskResponseStatus](../../E-R/reference-data/RiskResponseStatus.1.0.0.md)
<a name="Risk-Sub-Category"></a>
* **Risk Sub Category**<br>
  (OSDU entity type **RiskSubCategory** in group-type reference-data) Description: _The reference values for risk sub-categories following the WITSML standard._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskSubCategory](../../E-R/reference-data/RiskSubCategory.1.0.1.md)
<a name="Risk-Type"></a>
* **Risk Type**<br>
  (OSDU entity type **RiskType** in group-type reference-data) Description: _Proposed reference values: risk, event, near miss, best practice, lessons learned, other, unknown_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RiskType](../../E-R/reference-data/RiskType.1.0.0.md)
<a name="Rock-Fluid-Organization-Interpretation"></a>
* **Rock Fluid Organization Interpretation**<br>
  (OSDU entity type **RockFluidOrganizationInterpretation** in group-type work-product-component) Description: _A collection of RockFluid unit interpretations which are part of a same organization i.e. which are inter related._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--RockFluidOrganizationInterpretation](../../E-R/work-product-component/RockFluidOrganizationInterpretation.1.2.0.md)
<a name="Rock-Fluid-Unit-Interpretation"></a>
* **Rock Fluid Unit Interpretation**<br>
  (OSDU entity type **RockFluidUnitInterpretation** in group-type work-product-component) Description: _A type of rock fluid feature-interpretation , this class identifies a rock fluid feature by its phase._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--RockFluidUnitInterpretation](../../E-R/work-product-component/RockFluidUnitInterpretation.1.3.0.md)
<a name="Rock-Image-Type"></a>
* **Rock Image Type**<br>
  (OSDU entity type **RockImageType** in group-type reference-data) Description: _The type of image taken of a rock sample. For example a photograph or CT image_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RockImageType](../../E-R/reference-data/RockImageType.1.0.0.md)
<a name="Rock-Model-Capillary-Pressure-Phase"></a>
* **Rock Model Capillary Pressure Phase**<br>
  (OSDU entity type **RockModelCapillaryPressurePhase** in group-type reference-data) Description: _List of values that indicate the phases of a capillary pressure curve_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RockModelCapillaryPressurePhase](../../E-R/reference-data/RockModelCapillaryPressurePhase.1.0.0.md)
<a name="Rock-Model-Relative-Permeability-Phase"></a>
* **Rock Model Relative Permeability Phase**<br>
  (OSDU entity type **RockModelRelativePermeabilityPhase** in group-type reference-data) Description: _List of values that indicate the phases of a relative permeability curve in a two-phase or three-phase system._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RockModelRelativePermeabilityPhase](../../E-R/reference-data/RockModelRelativePermeabilityPhase.1.0.0.md)
<a name="Rock-Sample-Analysis-Type"></a>
* **Rock Sample Analysis Type**<br>
  (OSDU entity type **RockSampleAnalysisType** in group-type reference-data) Description: _A reference value catalog containing the names of the nested analysis objects in the work-product-component--RockSampleAnalysis. Examples are RoutineCoreAnalysis, GrainSizeAnalysis. Using these values it will be possible to query for RockSampleAnalysis records containing a specific kind of analysis. This list is fixed and governed by OSDU._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RockSampleAnalysisType](../../E-R/reference-data/RockSampleAnalysisType.1.0.0.md)
<a name="Rock-Volume-Feature"></a>
* **Rock Volume Feature**<br>
  (OSDU entity type **RockVolumeFeature** in group-type master-data) Description: _A volume of rock that is identified based on some specific attribute, like its mineral content or other physical characteristic. It exists typically in the scope of a model._<br>
    &rarr; _OSDU types/schemas:_ [master-data--RockVolumeFeature](../../E-R/master-data/RockVolumeFeature.1.1.0.md)
<a name="Role"></a>
* **Role**<br>
  (PPDM) A Role is a function assumed or assigned, or part played, by a person or thing in a particular situation.
<a name="Rotary-Steerable-Deflection-Method"></a>
* **Rotary Steerable Deflection Method**<br>
  (OSDU entity type **RotarySteerableDeflectionMethod** in group-type reference-data) Description: _Method used by the RSS to direct the deviation of the trajectory: point the bit or push the bit_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--RotarySteerableDeflectionMethod](../../E-R/reference-data/RotarySteerableDeflectionMethod.1.0.0.md)
<a name="Routine-Core-Analysis"></a>
* **Routine Core Analysis**<br>
  (OSDU) A kind of rock sample analysis containing in the `work-product-component--SamplesAnalysis`. See also [Samples Analysis](#Samples-Analysis).<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SamplesAnalysis](../../E-R/work-product-component/SamplesAnalysis.2.0.0.md)
<a name="Rural"></a>
* **Rural**<br>
  (GeoPoliticalEntityType) Area governed by a Rural-like related system. Rural is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## S

<a name="Salt-Dome"></a>
* **Salt Dome**<br>
  (ProspectType) Porous rocks deformed and sealed by a salt diapir moving upward through the strata. Salt Dome is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Sample"></a>
* **Sample**<br>
  (OSDU entity type **Sample** in group-type master-data) Description: _This object captures attributes of a sample or specimen (rocks, fluids, or other materials) acquired either through an original acquisition event, sub-sampling event, generated from recombination of other samples or specimens or derived through the application of some laboratory process on the parent sample._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Sample](../../E-R/master-data/Sample.3.1.0.md)
<a name="Sample-Acquisition-Job"></a>
* **Sample Acquisition Job**<br>
  (OSDU entity type **SampleAcquisitionJob** in group-type master-data) Description: _This provides information about the project / job responsible for managing one or more sample acquisition events undertaken within a given period._<br>
    &rarr; _OSDU types/schemas:_ [master-data--SampleAcquisitionJob](../../E-R/master-data/SampleAcquisitionJob.1.0.0.md)
<a name="Sample-Acquisition-Tool-Family"></a>
* **Sample Acquisition Tool Family**<br>
  (OSDU entity type **SampleAcquisitionToolFamily** in group-type reference-data) Description: _Identifies the category of the tool type used to acquire the sample/specimen, such as rotary or percussive sidewall tooling, or the inner barrel type for conventional coring. Note that other relevant facets of tool identification are captured by other reference lists, such as core catcher type, inner sleeve material type, drill bit, and sample container._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleAcquisitionToolFamily](../../E-R/reference-data/SampleAcquisitionToolFamily.1.0.0.md)
<a name="Sample-Acquisition-Type"></a>
* **Sample Acquisition Type**<br>
  (OSDU entity type **SampleAcquisitionType** in group-type reference-data) Description: _This is a reference list of the different types of sample acquisition events used in acquiring samples. i.e. downhole sample acquisition type, outcrop, coring, non-facility site, etc_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleAcquisitionType](../../E-R/reference-data/SampleAcquisitionType.1.0.0.md)
<a name="Sample-Analysis-Family"></a>
* **Sample Analysis Family**<br>
  (OSDU entity type **SampleAnalysisFamily** in group-type reference-data) Description: _The higher level of the hierarchy in organising sample analysis data for the purpose of ingestion and discovery. Family sometimes represents the trait measured. In other cases, Family represents a general method or suite of analysis, such as those where there are many traits measured, like "compositional analysis". The key considerations for adding to this list are (a) whether this information is relevant for searching and discovering the data record, and (b) keeping items on this list mutually exclusive._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleAnalysisFamily](../../E-R/reference-data/SampleAnalysisFamily.1.0.0.md)
<a name="Sample-Analysis-Sub-Family"></a>
* **Sample Analysis Sub Family**<br>
  (OSDU entity type **SampleAnalysisSubFamily** in group-type reference-data) Description: _The lower level of the hierarchy in organising sample analysis data for the purpose of ingestion and discovery. SubFamily can represent the trait measured, the method by which a trait is measured, and/or highly relevant parameters for the analysis. The key considerations for adding to this list are (a) whether this information is relevant for searching and discovering the data record, and (b) keeping each combination of Family and SubFamily unique._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleAnalysisSubFamily](../../E-R/reference-data/SampleAnalysisSubFamily.1.0.0.md)
<a name="Sample-Analysis-Type"></a>
* **Sample Analysis Type**<br>
  (OSDU entity type **SampleAnalysisType** in group-type reference-data) Description: _A two-level, hierarchical sample analysis classification combining a higher level SampleAnalysisFamily with a lower level SampleAnalysisSubFamily. Please see descriptions of those reference lists for detail. The dot-separated code combination, SampleAnalysisFamily.SampleAnalysisSubFamily is designed to ease choices during ingestion and aid the discovery of SamplesAnalysis or SamplesAnalysesReport records holding relevant content._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleAnalysisType](../../E-R/reference-data/SampleAnalysisType.1.0.0.md)
<a name="Sample-Chain-Of-Custody-Event"></a>
* **Sample Chain Of Custody Event**<br>
  (OSDU entity type **SampleChainOfCustodyEvent** in group-type master-data) Description: _This provides historical information on the events that affect the physical sample, such as sub-sampling, or changing storage container or storage location._<br>
    &rarr; _OSDU types/schemas:_ [master-data--SampleChainOfCustodyEvent](../../E-R/master-data/SampleChainOfCustodyEvent.1.1.0.md)
<a name="Sample-Composition-Component"></a>
* **Sample Composition Component**<br>
  (OSDU entity type **SampleCompositionComponent** in group-type reference-data) Description: _The list of sample components that make up a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleCompositionComponent](../../E-R/reference-data/SampleCompositionComponent.1.0.0.md)
<a name="Sample-Container"></a>
* **Sample Container**<br>
  (OSDU entity type **SampleContainer** in group-type master-data) Description: _Information on the sample container used in storing the sample._<br>
    &rarr; _OSDU types/schemas:_ [master-data--SampleContainer](../../E-R/master-data/SampleContainer.1.0.0.md)
<a name="Sample-Container-Service-Type"></a>
* **Sample Container Service Type**<br>
  (OSDU entity type **SampleContainerServiceType** in group-type reference-data) Description: _The list of substances, certified by the manufacturer, that the sample container can hold._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleContainerServiceType](../../E-R/reference-data/SampleContainerServiceType.1.0.0.md)
<a name="Sample-Container-Type"></a>
* **Sample Container Type**<br>
  (OSDU entity type **SampleContainerType** in group-type reference-data) Description: _The type or kind of the sample container used._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleContainerType](../../E-R/reference-data/SampleContainerType.1.0.0.md)
<a name="Sample-Image"></a>
* **Sample Image**<br>
  (OSDU entity type **SampleImage** in group-type work-product-component) Description: _An image captured of rock or fluid samples or specimens, such as core, sidewall core, fluid bottle, or thin section slide. This image, which may be in the form of a photograph, scan, or similar, provides a visual depiction of the sample_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SampleImage](../../E-R/work-product-component/SampleImage.1.1.0.md)
<a name="Sample-Image-Beam-Type"></a>
* **Sample Image Beam Type**<br>
  (OSDU entity type **SampleImageBeamType** in group-type reference-data) Description: _The type of beam used in an electron microscope for a sample image, for example, electron or ion beam._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageBeamType](../../E-R/reference-data/SampleImageBeamType.1.0.0.md)
<a name="Sample-Image-Colour-Space"></a>
* **Sample Image Colour Space**<br>
  (OSDU entity type **SampleImageColourSpace** in group-type reference-data) Description: _The colour space for a sample image, for example, could be RGB, Monochrome, or CMYK._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageColourSpace](../../E-R/reference-data/SampleImageColourSpace.1.0.0.md)
<a name="Sample-Image-Lighting-Condition"></a>
* **Sample Image Lighting Condition**<br>
  (OSDU entity type **SampleImageLightingCondition** in group-type reference-data) Description: _The mode of lighting for a sample image, for example, Natural, White and Ultraviolet._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageLightingCondition](../../E-R/reference-data/SampleImageLightingCondition.1.0.0.md)
<a name="Sample-Image-Optical-Light-Filter"></a>
* **Sample Image Optical Light Filter**<br>
  (OSDU entity type **SampleImageOpticalLightFilter** in group-type reference-data) Description: _The type of filter applied to the light source of a sample image, for example, Cross Polarised, Brightfield and Darkfield._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageOpticalLightFilter](../../E-R/reference-data/SampleImageOpticalLightFilter.1.0.0.md)
<a name="Sample-Image-Optical-Light-Path"></a>
* **Sample Image Optical Light Path**<br>
  (OSDU entity type **SampleImageOpticalLightPath** in group-type reference-data) Description: _The light path for a sample image, for example, incident or transmitted._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageOpticalLightPath](../../E-R/reference-data/SampleImageOpticalLightPath.1.0.0.md)
<a name="Sample-Image-Parameters"></a>
* **Sample Image Parameters**<br>
  (OSDU entity type **SampleImageParameters** in group-type reference-data) Description: _The Image parameters for this sample image. Examples include magnification, pixel size and camera resolution._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageParameters](../../E-R/reference-data/SampleImageParameters.1.0.0.md)
<a name="Sample-Image-Resolution-Source"></a>
* **Sample Image Resolution Source**<br>
  (OSDU entity type **SampleImageResolutionSource** in group-type reference-data) Description: _The source of the pixel resolution for s sample image, for example, it may be inferred from a scale bar or a known reference._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageResolutionSource](../../E-R/reference-data/SampleImageResolutionSource.1.0.0.md)
<a name="Sample-Image-X-Ray-Detector"></a>
* **Sample Image X Ray Detector**<br>
  (OSDU entity type **SampleImageXRayDetector** in group-type reference-data) Description: _The type of X Ray detector used for a sample image, for example, Wavelength Dispersive Detector WDS/WDX) and Energy Dispersive Detector (EDS/EDX)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleImageXRayDetector](../../E-R/reference-data/SampleImageXRayDetector.1.0.0.md)
<a name="Sample-Injection-Fluid-Type"></a>
* **Sample Injection Fluid Type**<br>
  (OSDU entity type **SampleInjectionFluidType** in group-type reference-data) Description: _The type of fluid injected into a rock sample during the lab experiment, usually to displace other fluids._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleInjectionFluidType](../../E-R/reference-data/SampleInjectionFluidType.1.0.0.md)
<a name="Sample-Organic-Composition-Component"></a>
* **Sample Organic Composition Component**<br>
  (OSDU entity type **SampleOrganicCompositionComponent** in group-type reference-data) Description: _Names of chemical elements and compounds, including many hydrocarbon compounds, found in a fluid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleOrganicCompositionComponent](../../E-R/reference-data/SampleOrganicCompositionComponent.1.0.0.md)
<a name="Sample-Orientation-Type"></a>
* **Sample Orientation Type**<br>
  (OSDU entity type **SampleOrientationType** in group-type reference-data) Description: _The orientation of the long axis of a rock sample, relative to the bedding in the source or to the wellbore path._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleOrientationType](../../E-R/reference-data/SampleOrientationType.1.0.1.md)
<a name="Sample-Origin-Type"></a>
* **Sample Origin Type**<br>
  (OSDU entity type **SampleOriginType** in group-type reference-data) Description: _This provides information about the type of the origin of the sample. It can be used to determine if the sample was acquired from an original source location, result of recombination, subsampling or derived from some laboratory process._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleOriginType](../../E-R/reference-data/SampleOriginType.1.0.0.md)
<a name="Sample-Preparation-Method"></a>
* **Sample Preparation Method**<br>
  (OSDU entity type **SamplePreparationMethod** in group-type reference-data) Description: _Provide additional details on which industrial/lab method used to conduct the sample preparation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SamplePreparationMethod](../../E-R/reference-data/SamplePreparationMethod.1.0.0.md)
<a name="Sample-Preparation-Type"></a>
* **Sample Preparation Type**<br>
  (OSDU entity type **SamplePreparationType** in group-type reference-data) Description: _Provides extra details on any processes applied after the sample has been acquired._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SamplePreparationType](../../E-R/reference-data/SamplePreparationType.1.0.0.md)
<a name="Sample-Stress-Loading-Method"></a>
* **Sample Stress Loading Method**<br>
  (OSDU entity type **SampleStressLoadingMethod** in group-type reference-data) Description: _Identifies the method by which pressure is applied to the sample, whether continuously or in one or multiple stages._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleStressLoadingMethod](../../E-R/reference-data/SampleStressLoadingMethod.1.0.0.md)
<a name="Sample-Stress-Loading-Stage"></a>
* **Sample Stress Loading Stage**<br>
  (OSDU entity type **SampleStressLoadingStage** in group-type reference-data) Description: _The stages of loading and unloading of stress from a sample._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleStressLoadingStage](../../E-R/reference-data/SampleStressLoadingStage.1.0.0.md)
<a name="Sample-Substance-Family"></a>
* **Sample Substance Family**<br>
  (OSDU entity type **SampleSubstanceFamily** in group-type reference-data) Description: _Identifies the category of the substance of the sample/specimen, such as rock or fluid, for the purpose of general filtering._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleSubstanceFamily](../../E-R/reference-data/SampleSubstanceFamily.1.0.0.md)
<a name="Sample-Test-Condition"></a>
* **Sample Test Condition**<br>
  (OSDU entity type **SampleTestCondition** in group-type reference-data) Description: _The category of environmental parameters and conditions under which fluid samples are analyzed and tested. These test conditions are designed to replicate the temperature and pressure conditions found in the subsurface reservoir._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleTestCondition](../../E-R/reference-data/SampleTestCondition.1.0.0.md)
<a name="Sample-Type"></a>
* **Sample Type**<br>
  (OSDU entity type **SampleType** in group-type reference-data) Description: _The classification of the type of specimen/sample, which is identified for the purpose of analysing the specimen or a subsample of it. For rock, the sample type is based on a combination of general substance type, size, shape, and in certain cases, the retrieval method. For fluids, sample type is based on general substance type and source, which affects how it will be analysed. For other materials, sample type is based primarily on general substance type. In rare cases, the special purpose of a specimen might contribute to its sample type classification._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SampleType](../../E-R/reference-data/SampleType.1.1.0.md)
<a name="Samples-Analyses-Report"></a>
* **Samples Analyses Report**<br>
  (OSDU entity type **SamplesAnalysesReport** in group-type work-product-component) Description: _Attributes needed to find and retrieve a delivered report containing rock and/or fluid sample analysis data. Often this report contains more than one data frame of analysis data and/or more than one Analysis Family. Examples of this could include end-of-well reports, well completion reports, regional multi-well studies, or SCAL reports. This report can be decomposed into analysis sets via the SamplesAnalysis work-product-component. In other cases, this report contains part of a dataset which could then be aggregated into a SamplesAnalysis work-product-component._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SamplesAnalysesReport](../../E-R/work-product-component/SamplesAnalysesReport.1.0.0.md)
<a name="Samples-Analysis"></a>
* **Samples Analysis**<br>
  (OSDU entity type **SamplesAnalysis** in group-type work-product-component) Description: _Samples Analysis is the data resulting when a scientific lab has analyzed physical specimens such as rock core, fluid samples such as dead oil or headspace gas, or other substances. A single Samples Analysis record can relate to more than one sample/specimen, but is characterized by only one Sample Analysis Type such as routine core analysis, compositional analysis, or differential liberation._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SamplesAnalysis](../../E-R/work-product-component/SamplesAnalysis.2.0.0.md)
<a name="Samples-Analysis-Category-Tag"></a>
* **Samples Analysis Category Tag**<br>
  (OSDU entity type **SamplesAnalysisCategoryTag** in group-type reference-data) Description: _List of higher level grouping terms for rock and fluid sample analyses that are often used within organisations to search for analysis types in addition to the formal SampleAnalysisType, but which are variable across organisations and therefore do not need to be governed strictly by the OSDU Forum. For example: SCAL, Static SCAL, Dynamic SCAL, Source Rock Analysis. We suggest you use a prefix, like the operators name, e.g., Shell.SCAL, BP.SCAL, Equinor.SCAL, Chevron.SCAL, Exxon.SCAL and so on._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SamplesAnalysisCategoryTag](../../E-R/reference-data/SamplesAnalysisCategoryTag.1.0.0.md)
<a name="Sampling-Point-Type"></a>
* **Sampling Point Type**<br>
  (OSDU entity type **SamplingPointType** in group-type reference-data) Description: _A reference list containing the different types of sampling points. It refers to the information associated with specific locations or points where samples are collected_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SamplingPointType](../../E-R/reference-data/SamplingPointType.1.0.0.md)
<a name="Sand-Bar"></a>
* **Sand Bar**<br>
  (ProspectType) Reservoir is sand bar deposited in a river. Sand Bar is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Satellite-Geometry"></a>
* **Satellite Geometry**<br>
  (OSDU entity type **SatelliteGeometry** in group-type reference-data) Description: _the reference value type defining the orbit or flight direction of the satellite over the image area_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SatelliteGeometry](../../E-R/reference-data/SatelliteGeometry.1.0.0.md)
<a name="Satellite-Mission"></a>
* **Satellite Mission**<br>
  (OSDU entity type **SatelliteMission** in group-type reference-data) Description: _The reference value type defining the satellite mission and the operational period_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SatelliteMission](../../E-R/reference-data/SatelliteMission.1.0.0.md)
<a name="Saturate-GCMS-Compounds"></a>
* **Saturate GCMS Compounds**<br>
  (OSDU entity type **SaturateGCMSCompounds** in group-type reference-data) Description: _Saturates are saturated hydrocarbons, which means they contain only single bonds between carbon atoms and are saturated with hydrogen atoms. These compounds are also known as alkanes or paraffins and have the general formula CnH2n+2._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturateGCMSCompounds](../../E-R/reference-data/SaturateGCMSCompounds.1.0.0.md)
<a name="Saturation-Fluid-Type"></a>
* **Saturation Fluid Type**<br>
  (OSDU entity type **SaturationFluidType** in group-type reference-data) Description: _The type of fluid used to saturate (fill the pore spaces) of the rock sample during lab analysis; e.g. water, gas, or oil._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturationFluidType](../../E-R/reference-data/SaturationFluidType.1.0.0.md)
<a name="Saturation-Function-Set"></a>
* **Saturation Function Set**<br>
  (OSDU entity type **SaturationFunctionSet** in group-type work-product-component) Description: _A saturation function set is used to describe the relationship between fluid saturations and other properties such as relative permeability and capillary pressure in porous media, which are key factors in determining fluid flow in reservoir rocks. It is an input for the task of reservoir simulation (AKA dynamic reservoir modeling). In OSDU, a reservoir simulation rock physics model and a saturation function set are associated to the ReservoirSimulationModel and assigned to the regions defining the rock properties._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SaturationFunctionSet](../../E-R/work-product-component/SaturationFunctionSet.1.0.0.md)
<a name="Saturation-Function-Usage-Type"></a>
* **Saturation Function Usage Type**<br>
  (OSDU entity type **SaturationFunctionUsageType** in group-type reference-data) Description: _How a saturation function may be used, such as drainage (relevant to reservoir depletion or gas injection) or imbibition (relevant to water-flooding)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturationFunctionUsageType](../../E-R/reference-data/SaturationFunctionUsageType.1.0.0.md)
<a name="Saturation-Measurement-Location"></a>
* **Saturation Measurement Location**<br>
  (OSDU entity type **SaturationMeasurementLocation** in group-type reference-data) Description: _Identifies the area of focus for this saturation measurement in rock sample analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturationMeasurementLocation](../../E-R/reference-data/SaturationMeasurementLocation.1.0.0.md)
<a name="Saturation-Method-Type"></a>
* **Saturation Method Type**<br>
  (OSDU entity type **SaturationMethodType** in group-type reference-data) Description: _The method used to measure water saturation in routine core analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturationMethodType](../../E-R/reference-data/SaturationMethodType.1.0.1.md)
<a name="Saturation-Pressure-Type"></a>
* **Saturation Pressure Type**<br>
  (OSDU entity type **SaturationPressureType** in group-type reference-data) Description: _The kind of saturation pressure, such as bubble point, dew point, and two-phase_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturationPressureType](../../E-R/reference-data/SaturationPressureType.1.0.0.md)
<a name="Saturation-Process-Method"></a>
* **Saturation Process Method**<br>
  (OSDU entity type **SaturationProcessMethod** in group-type reference-data) Description: _The method used to saturate the rock sample (fill the pore spaces) with a particular fluid in the lab experiment._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SaturationProcessMethod](../../E-R/reference-data/SaturationProcessMethod.1.0.0.md)
<a name="Schema"></a>
* **Schema**<br>
  A data/metadata model expressed as JSON schema for a type of data, i.e. a `kind`. The phrase 'standardized schema' is used to emphasize that all instances of a given type of data content associate with (conform with) the same schema. In other words, data content can be read and understood based on the associated schema, including to understand and/or process data for loading, ingestion, indexing, as well as direct search/discovery and delivery/consumption.
<a name="Schema-Extensibility"></a>
* **Schema Extensibility**<br>
  (OSDU) OSDU schemas support extensions, however, without discoverability unless using custom schemas. Recommendations in the Usage Guide Introduction.<br>
    &rarr; _Schema Usage Guide:_ [1.4.2 Extensions](01-Introduction.md#142-extensions)
<a name="Schema-Format-Type"></a>
* **Schema Format Type**<br>
  (OSDU entity type **SchemaFormatType** in group-type reference-data) Description: _Used to describe the type of schema formats._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SchemaFormatType](../../E-R/reference-data/SchemaFormatType.1.0.0.md)
<a name="Schema-Property-Deprecation"></a>
* **Schema Property Deprecation**<br>
  (OSDU Data Definition) Schema properties no longer recommended for use are declared deprecated; this is done by prefixing the property description with DEPRECATED. The properties are still indexed and the schemas are still including the definitions.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.4 Schema Upgrade](93-OSDU-Schemas.md#appendix-d4-schema-upgrade)   <br>&rarr; _OSDU types/schemas:_ [reference-data--SchemaUpgradeSpecification](../../E-R/reference-data/SchemaUpgradeSpecification.1.0.0.md)
<a name="Schema-To-Index-Schema"></a>
* **Schema To Index Schema**<br>
  (OSDU) An optimization for the [indexer service](https://community.opengroup.org/osdu/platform/system/indexer-service/-/tree/master/docs/docs) providing a look-up table for `kind`s to find the appropriate indexing schema. The optimization resource is provided in [Generated/SchemaToIndexSchema.json](../../Generated/SchemaToIndexSchema.json).<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.7 Reusable Schemas for Indexing](93-OSDU-Schemas.md#appendix-d7-reusable-schemas-for-indexing)   <br>&rarr; _OSDU types/schemas:_ [reference-data--ReferenceDataIndexTemplate](../../E-R/reference-data/ReferenceDataIndexTemplate.1.0.0.md)
<a name="Schema-Upgrade"></a>
* **Schema Upgrade**<br>
  (OSDU Platform, OSDU Data Definition) OSDU schemas and reference-data lists evolve. This requires maintenance of Storage records, which need to be upgraded to newer schema versions and superseded reference-data values. The [Schema Upgrade Service](https://community.opengroup.org/osdu/platform/system/reference/schema-upgrade) is serving that purpose.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.4 Schema Upgrade](93-OSDU-Schemas.md#appendix-d4-schema-upgrade)   <br>&rarr; _OSDU types/schemas:_ [reference-data--SchemaUpgradeSpecification](../../E-R/reference-data/SchemaUpgradeSpecification.1.0.0.md), [reference-data--ReferenceValueUpgradeLookUp](../../E-R/reference-data/ReferenceValueUpgradeLookUp.2.0.0.md)
<a name="Schema-Upgrade-Chain"></a>
* **Schema Upgrade Chain**<br>
  (OSDU entity type **SchemaUpgradeChain** in group-type reference-data) Description: _Given a kind (via the Code/id), list the SchemaUpgradeSpecification ids, to which upgrade specifications exist and list the source kinds, which can ultimately be upgraded to the current (target) kind._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SchemaUpgradeChain](../../E-R/reference-data/SchemaUpgradeChain.1.0.0.md)
<a name="Schema-Upgrade-Specification"></a>
* **Schema Upgrade Specification**<br>
  (OSDU entity type **SchemaUpgradeSpecification** in group-type reference-data) Description: _A reference list containing schema upgrade specifications feeding the OSDU schema upgrade service._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SchemaUpgradeSpecification](../../E-R/reference-data/SchemaUpgradeSpecification.1.0.0.md)
<a name="Schema-Version-Configuration"></a>
* **Schema Version Configuration**<br>
  (Configuration) A way to manage and steer the adoption of schema versions if multiple minor or patch versions are defined for the same entity.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.5 Schema Version Management/Configuration](93-OSDU-Schemas.md#appendix-d5-schema-version-managementconfiguration)   <br>&rarr; _OSDU types/schemas:_ [reference-data--PreferredSchemaVersion](../../E-R/reference-data/PreferredSchemaVersion.1.0.0.md)
<a name="Scheme"></a>
* **Scheme**<br>
  (PPDM) A scheme is a named set of criteria that has been organized by an authoritative source, and which is used as a reference in analysis, interpretation or organization of data. A data schema is a kind of scheme.
<a name="Sealed-Surface-Framework"></a>
* **Sealed Surface Framework**<br>
  (OSDU entity type **SealedSurfaceFramework** in group-type work-product-component) Description: _Sealed structural model representations associated to geometric elements such as faults, horizons, and intrusions on a scale of meters to kilometers._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SealedSurfaceFramework](../../E-R/work-product-component/SealedSurfaceFramework.1.2.0.md)
<a name="Sealed-Volume-Framework"></a>
* **Sealed Volume Framework**<br>
  (OSDU entity type **SealedVolumeFramework** in group-type work-product-component) Description: _Sealed volume model representations associated to geometric elements such as faults, horizons, and intrusions on a scale of meters to kilometers._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SealedVolumeFramework](../../E-R/work-product-component/SealedVolumeFramework.1.2.0.md)
<a name="Search"></a>
* **Search**<br>
  (OSDU) Understand OSDU schema search and its limitations. OSDU schemas support extensions, however, without discoverability unless using custom schemas. Recommendations in the Usage Guide Introduction and Known Issues.<br>
    &rarr; _Schema Usage Guide:_ [1.4.1 Search, Discoverability](01-Introduction.md#141-search-discoverability), [Appendix E.4 Search Queries do not work...](94-KnownIssues.md#appendix-e4-search-queries-do-not-work)
<a name="Security-Scheme-Type"></a>
* **Security Scheme Type**<br>
  (OSDU entity type **SecuritySchemeType** in group-type reference-data) Description: _A type of security scheme, such as OAuth2, used to generate access credentials to a resource._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SecuritySchemeType](../../E-R/reference-data/SecuritySchemeType.1.0.0.md)
<a name="SEGYHeader-Mapping-Template"></a>
* **SEGY- Header Mapping Template**<br>
  (OSDU entity type **SEGY-HeaderMappingTemplate** in group-type reference-data) Description: _The template for SEG-Y trace header mappings to facilitate SEG-Y trace header parsing and trace header value extraction, for, e.g., navigation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SEGY-HeaderMappingTemplate](../../E-R/reference-data/SEGY-HeaderMappingTemplate.1.0.0.md)
<a name="Seismic-Acquisition-Documents"></a>
* **Seismic Acquisition Documents**<br>
  (OSDU entity type **SeismicAcquisitionDocuments** in group-type work-product-component) Description: _Files produced during the course of Seismic Acquisition, including observer logs, source and receiver information tables, and unprocessed navigation._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicAcquisitionDocuments](../../E-R/work-product-component/SeismicAcquisitionDocuments.2.0.0.md)
<a name="Seismic-Acquisition-Survey"></a>
* **Seismic Acquisition Survey**<br>
  (OSDU entity type **SeismicAcquisitionSurvey** in group-type master-data) Description: _A seismic acquisition project is a type of business project that deploys resources to the field to record seismic data.  It may be referred to as a field survey, acquisition survey, or field program.  It is not the same as the geometry of the deployed equipment (nav), which is a work product component._<br>
    &rarr; _OSDU types/schemas:_ [master-data--SeismicAcquisitionSurvey](../../E-R/master-data/SeismicAcquisitionSurvey.1.4.0.md)
<a name="Seismic-Acquisition-Type"></a>
* **Seismic Acquisition Type**<br>
  (OSDU entity type **SeismicAcquisitionType** in group-type reference-data) Description: _The SeismicAcquisitionType, e.g. Conventional, Wide Azimuth, Multi Azimuth etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicAcquisitionType](../../E-R/reference-data/SeismicAcquisitionType.1.0.0.md)
<a name="Seismic-Attribute-Type"></a>
* **Seismic Attribute Type**<br>
  (OSDU entity type **SeismicAttributeType** in group-type reference-data) Description: _Describes the meaning of the seismic sample measurements such as amplitude, phase, dip, azimuth._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicAttributeType](../../E-R/reference-data/SeismicAttributeType.1.0.0.md)
<a name="Seismic-Bin-Grid"></a>
* **Seismic Bin Grid**<br>
  (OSDU entity type **SeismicBinGrid** in group-type work-product-component) Description: _A representation of the surface positions for each subsurface node in a set of processed trace data work product components with common positions.  Different sampling (spacing) and extents (ranges) in the trace data may be handled by the same bin grid._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicBinGrid](../../E-R/work-product-component/SeismicBinGrid.1.3.0.md)
<a name="Seismic-Bin-Grid-Type"></a>
* **Seismic Bin Grid Type**<br>
  (OSDU entity type **SeismicBinGridType** in group-type reference-data) Description: _Activity responsible for creating node list such as Acquisition, Processing, Velocity.  Usually Processing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicBinGridType](../../E-R/reference-data/SeismicBinGridType.1.0.0.md)
<a name="Seismic-Domain-Type"></a>
* **Seismic Domain Type**<br>
  (OSDU entity type **SeismicDomainType** in group-type reference-data) Description: _Nature of the vertical axis in the trace data set, usually Depth or Time.  Indicates which pair of start/end values in trace data is the reliable, precise pair._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicDomainType](../../E-R/reference-data/SeismicDomainType.1.0.0.md)
<a name="Seismic-Energy-Source-Type"></a>
* **Seismic Energy Source Type**<br>
  (OSDU entity type **SeismicEnergySourceType** in group-type reference-data) Description: _The method of introducing seismic energy  into the earth. This list is about types of sources, not about types of seismic energy._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicEnergySourceType](../../E-R/reference-data/SeismicEnergySourceType.1.0.1.md)
<a name="Seismic-Fault"></a>
* **Seismic Fault**<br>
  (OSDU entity type **SeismicFault** in group-type work-product-component) Description: _A representation of a single fault picked on the basis of seismic data. The record carries information about the seismic geometry context. It can be part of an UnsealedSurfaceFramework._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicFault](../../E-R/work-product-component/SeismicFault.2.0.0.md)
<a name="Seismic-Fault-Type"></a>
* **Seismic Fault Type**<br>
  (OSDU entity type **SeismicFaultType** in group-type reference-data) Description: _The geological type of fault that creates a seismic reflection._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicFaultType](../../E-R/reference-data/SeismicFaultType.1.0.1.md)
<a name="Seismic-Field-Trace-Data"></a>
* **Seismic Field Trace Data**<br>
  (OSDU entity type **SeismicFieldTraceData** in group-type work-product-component) Description: _A logical dataset containing seismic traces. The traces are the original recordings, prior to processing._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicFieldTraceData](../../E-R/work-product-component/SeismicFieldTraceData.1.1.0.md)
<a name="Seismic-Filtering-Type"></a>
* **Seismic Filtering Type**<br>
  (OSDU entity type **SeismicFilteringType** in group-type reference-data) Description: _Class of final applied filters, for ex. high cut, low cut, spiking deconvolution, multiple elimination._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicFilteringType](../../E-R/reference-data/SeismicFilteringType.1.0.0.md)
<a name="Seismic-Gather-Type"></a>
* **Seismic Gather Type**<br>
  (OSDU entity type **SeismicGatherType** in group-type reference-data) Description: _The type of gathers represented in seismic pre-stack datasets._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicGatherType](../../E-R/reference-data/SeismicGatherType.1.0.0.md)
<a name="Seismic-Geometry-Type"></a>
* **Seismic Geometry Type**<br>
  (OSDU entity type **SeismicGeometryType** in group-type reference-data) Description: _The general geometrical layout of sources and receivers in a seismic acquisition survey._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicGeometryType](../../E-R/reference-data/SeismicGeometryType.1.0.2.md)
<a name="Seismic-Horizon"></a>
* **Seismic Horizon**<br>
  (OSDU entity type **SeismicHorizon** in group-type work-product-component) Description: _A set of picks related to seismic processing geometry which define a surface.  The geometry used is referenced by the Interpretation Project. This is specialisation of GenericRepresentation._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicHorizon](../../E-R/work-product-component/SeismicHorizon.2.1.0.md)
<a name="Seismic-Horizon-Type"></a>
* **Seismic Horizon Type**<br>
  (OSDU entity type **SeismicHorizonType** in group-type reference-data) Description: _The position on a seismic waveform where a reflection or refraction horizon is picked in order to investigate a subsurface formation definition._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicHorizonType](../../E-R/reference-data/SeismicHorizonType.1.0.2.md)
<a name="Seismic-Line-Geometry"></a>
* **Seismic Line Geometry**<br>
  (OSDU entity type **SeismicLineGeometry** in group-type work-product-component) Description: _The 2D processing geometry of a 2D seismic line.  This is not the navigation (acquisition surface geometry). The fully sampled geometry is contained in the work product component's file.  This shows the relationship between CMP, X, Y, and station label. The ends and bends version for mapping purposes is in the work product component's spatial area.  The Name universal property is essential for describing the Line Name._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicLineGeometry](../../E-R/work-product-component/SeismicLineGeometry.1.2.0.md)
<a name="Seismic-Migration-Type"></a>
* **Seismic Migration Type**<br>
  (OSDU entity type **SeismicMigrationType** in group-type reference-data) Description: _Methods to rearrange seismic information elements so that reflections and diffractions are plotted at their true locations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicMigrationType](../../E-R/reference-data/SeismicMigrationType.1.0.1.md)
<a name="Seismic-Phase"></a>
* **Seismic Phase**<br>
  (OSDU entity type **SeismicPhase** in group-type reference-data) Description: _Seismic phase describes the phase of the seismic wavelet.  The seismic wavelet contains a broad range of frequencies. A zero phase wavelet is symmetric around  time zero, while mixed phase or minimum-phase are asymmetric._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicPhase](../../E-R/reference-data/SeismicPhase.1.0.0.md)
<a name="Seismic-Picking-Type"></a>
* **Seismic Picking Type**<br>
  (OSDU entity type **SeismicPickingType** in group-type reference-data) Description: _The method that is used to make the seismic picks._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicPickingType](../../E-R/reference-data/SeismicPickingType.1.0.1.md)
<a name="Seismic-Polarity"></a>
* **Seismic Polarity**<br>
  (OSDU entity type **SeismicPolarity** in group-type reference-data) Description: _Seismic polarity describes the appearance of the seismic response to an isolated impedance contrast._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicPolarity](../../E-R/reference-data/SeismicPolarity.1.0.0.md)
<a name="Seismic-Post-Stack-Processing-Product"></a>
* **Seismic Post Stack Processing Product**<br>
  (OSDU entity type **SeismicPostStackProcessingProduct** in group-type work-product-component) Description: _A singular post stack output from a seismic processing project, encompassing one or many sections and/or volumes._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicPostStackProcessingProduct](../../E-R/work-product-component/SeismicPostStackProcessingProduct.0.0.0.md)
<a name="Seismic-Post-Stack-Trace2D-Section"></a>
* **Seismic Post Stack Trace2D Section**<br>
  (OSDU entity type **SeismicPostStackTrace2DSection** in group-type work-product-component) Description: _A single logical post stack dataset containing seismic samples related to a 2D section._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicPostStackTrace2DSection](../../E-R/work-product-component/SeismicPostStackTrace2DSection.0.0.0.md)
<a name="Seismic-Post-Stack-Trace3D-Volume"></a>
* **Seismic Post Stack Trace3D Volume**<br>
  (OSDU entity type **SeismicPostStackTrace3DVolume** in group-type work-product-component) Description: _A single logical post stack dataset containing seismic samples related to a 3D volume._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicPostStackTrace3DVolume](../../E-R/work-product-component/SeismicPostStackTrace3DVolume.0.0.0.md)
<a name="Seismic-Pre-Stack-Processing-Product"></a>
* **Seismic Pre Stack Processing Product**<br>
  (OSDU entity type **SeismicPreStackProcessingProduct** in group-type work-product-component) Description: _A singular pre-stack output from a seismic processing project, encompassing one or many sections and/or volumes._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicPreStackProcessingProduct](../../E-R/work-product-component/SeismicPreStackProcessingProduct.0.0.0.md)
<a name="Seismic-Pre-Stack-Trace2D-Section"></a>
* **Seismic Pre Stack Trace2D Section**<br>
  (OSDU entity type **SeismicPreStackTrace2DSection** in group-type work-product-component) Description: _A single logical prestack dataset containing seismic samples related to a 2D section._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicPreStackTrace2DSection](../../E-R/work-product-component/SeismicPreStackTrace2DSection.0.0.0.md)
<a name="Seismic-Pre-Stack-Trace3D-Volume"></a>
* **Seismic Pre Stack Trace3D Volume**<br>
  (OSDU entity type **SeismicPreStackTrace3DVolume** in group-type work-product-component) Description: _A single logical pre-stack dataset containing seismic samples related to a 3D volume._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicPreStackTrace3DVolume](../../E-R/work-product-component/SeismicPreStackTrace3DVolume.0.0.0.md)
<a name="Seismic-Processing-Project"></a>
* **Seismic Processing Project**<br>
  (OSDU entity type **SeismicProcessingProject** in group-type master-data) Description: _A seismic processing project is a type of business project which manages the creation of processed seismic work products. It is not the same as the geometry of the processed traces (binning or bin grid), which is a work product component, although it typically defines a single binning.  A processing project may merge data from multiple field surveys, so it is not required to be equated to a single field survey.  Original processing and re-processing activities generate separate and independent processing projects._<br>
    &rarr; _OSDU types/schemas:_ [master-data--SeismicProcessingProject](../../E-R/master-data/SeismicProcessingProject.1.4.0.md)
<a name="Seismic-Processing-Stage-Type"></a>
* **Seismic Processing Stage Type**<br>
  (OSDU entity type **SeismicProcessingStageType** in group-type reference-data) Description: _A set of activities in a workflow for processing seismic data in preparation for interpretation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicProcessingStageType](../../E-R/reference-data/SeismicProcessingStageType.1.0.1.md)
<a name="Seismic-Receiver-Type"></a>
* **Seismic Receiver Type**<br>
  (OSDU entity type **SeismicReceiverType** in group-type reference-data) Description: _A catalog member defining a receiver type in seismic data acquisition._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicReceiverType](../../E-R/reference-data/SeismicReceiverType.1.0.0.md)
<a name="Seismic-Stacking-Type"></a>
* **Seismic Stacking Type**<br>
  (OSDU entity type **SeismicStackingType** in group-type reference-data) Description: _Class of trace stacking state - the dimension stacked along, like partial (offset), full, angle, azimuth.  May be qualified with range indicator such as Near, Mid, Far._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicStackingType](../../E-R/reference-data/SeismicStackingType.1.0.0.md)
<a name="Seismic-Surface-Gridding-Algorithm"></a>
* **Seismic Surface Gridding Algorithm**<br>
  (OSDU entity type **SeismicSurfaceGriddingAlgorithm** in group-type reference-data) Description: _A mathematical interpolation method used to compute a continuous, regularly sampled surface from a set of irregularly distributed input points derived from seismic horizon interpretation. The algorithm estimates surface values at each node of a regular grid by analysing the spatial distribution, proximity, and variability of the input point set._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicSurfaceGriddingAlgorithm](../../E-R/reference-data/SeismicSurfaceGriddingAlgorithm.1.0.0.md)
<a name="Seismic-Trace-Data"></a>
* **Seismic Trace Data**<br>
  (OSDU entity type **SeismicTraceData** in group-type work-product-component) Description: _A single logical dataset containing seismic samples._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SeismicTraceData](../../E-R/work-product-component/SeismicTraceData.1.8.0.md)
<a name="Seismic-Trace-Data-Dimensionality-Type"></a>
* **Seismic Trace Data Dimensionality Type**<br>
  (OSDU entity type **SeismicTraceDataDimensionalityType** in group-type reference-data) Description: _The dimensionality of Seismic trace data sets, represent reflections of seismic waves from subsurface layers. They come in different values based on the data acquired and its representation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicTraceDataDimensionalityType](../../E-R/reference-data/SeismicTraceDataDimensionalityType.1.0.1.md)
<a name="Seismic-Trace-Sort-Order"></a>
* **Seismic Trace Sort Order**<br>
  (OSDU entity type **SeismicTraceSortOrder** in group-type reference-data) Description: _The types of sorting orders for pre-stack seismic datasets. It describes the trace order of the persisted dataset._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicTraceSortOrder](../../E-R/reference-data/SeismicTraceSortOrder.1.0.0.md)
<a name="Seismic-Wave-Type"></a>
* **Seismic Wave Type**<br>
  (OSDU entity type **SeismicWaveType** in group-type reference-data) Description: _The kind of elastic wave resulting from a seismic energy impulse._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SeismicWaveType](../../E-R/reference-data/SeismicWaveType.1.0.1.md)
<a name="Seismic2D-Interpretation-Set"></a>
* **Seismic2D Interpretation Set**<br>
  (OSDU entity type **Seismic2DInterpretationSet** in group-type master-data) Description: _A seismic 2D interpretation set is a collection of logical processed lines and associated trace datasets that represent an important and uniform set for interpretation.  It does not comprise all of the datasets with a common processing geometry, nor all of the lines/datasets from a processing project, nor all of the lines/datasets from an acquisition project, because some are not suitable for interpretation.  An interpretation survey may include 2D lines and datasets from more than one acquisition or processing project.  Consequently, it is not an acquisition survey nor a processing survey.  It is not an application project, which is a collection of all the various objects an application and user care about for some analysis (seismic, wells, etc.).  It inherits properties shared by project entities because it can serve to capture the archiving of a master or authorized project activity.  Interpretation objects (horizons) are hung from an interpretation project to give context and to derive spatial location based on the processing geometry of the associated 2D lines. Trace datasets and seismic horizons are associated through LineageAssertion, although a master collection of trace datasets and horizons are explicitly related through a child relationship property._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Seismic2DInterpretationSet](../../E-R/master-data/Seismic2DInterpretationSet.1.2.0.md)
<a name="Seismic3D-Interpretation-Set"></a>
* **Seismic3D Interpretation Set**<br>
  (OSDU entity type **Seismic3DInterpretationSet** in group-type master-data) Description: _A seismic 3D interpretation survey is a collection of trace datasets with a common bin grid that are important for interpretation.  It does not comprise all of the datasets with a common bin grid, nor all of the datasets from a processing project, nor all of the datasets from an acquisition project, because some are not suitable for interpretation.  An interpretation survey may include datasets from more than one acquisition or processing project.  Consequently, it is not an acquisition survey nor a processing survey.  It is not an application project, which is a collection of all the various objects an application and user care about for some analysis (seismic, wells, etc.).  It inherits properties shared by project entities because it can serve to capture the archiving of a master or authorized project activity. Interpretation objects (horizons) are hung from an interpretation survey to give context and to derive spatial location based on the common bin grid.  Trace datasets and seismic horizons are associated through LineageAssertion, although a master collection of trace datasets and horizons are explicitly related through a child relationship property._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Seismic3DInterpretationSet](../../E-R/master-data/Seismic3DInterpretationSet.1.2.0.md)
<a name="Sequence-Stratigraphic-Schema-Type"></a>
* **Sequence Stratigraphic Schema Type**<br>
  (OSDU entity type **SequenceStratigraphicSchemaType** in group-type reference-data) Description: _Sequence Stratigraphic Schema type, valid if Stratigraphic Column role type is set to Chronostratigraphic_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SequenceStratigraphicSchemaType](../../E-R/reference-data/SequenceStratigraphicSchemaType.1.0.0.md)
<a name="Sequence-Stratigraphy-Surface-Type"></a>
* **Sequence Stratigraphy Surface Type**<br>
  (OSDU entity type **SequenceStratigraphySurfaceType** in group-type reference-data) Description: _Describes the horizon sequence stratigraphic information (flooding, ravinement, maximum flooding, transgressive)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SequenceStratigraphySurfaceType](../../E-R/reference-data/SequenceStratigraphySurfaceType.1.0.0.md)
<a name="Set"></a>
* **Set**<br>
  (PPDM) A Set is a logical collection of things or concepts that are grouped for a described purpose. For each reference list, the purpose that binds them into a set should be described.A set of characteristics that describe roads. Components may comprise a set.
<a name="Shale"></a>
* **Shale**
  * **Shale**<br>
    (PlayType) An intention or development to produce hydrocarbons from shale, using special methods to release the hydrocarbons from the very low permeability mudrock. Shale is represented as PlayType in OSDU.<br>
      &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
  * **Shale**<br>
    (ProspectType) Hydrocarbon-bearing shale requiring specialized unconventional completion methods. Shale is represented as ProspectType in OSDU.<br>
      &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Shire"></a>
* **Shire**<br>
  (GeoPoliticalEntityType) Area governed by a Shire-like related system. Shire is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Side-car"></a>
* **Side-car**<br>
  (OSDU) A OSDU design pattern to define domain specific extensions to frequently used, cross-domain relevant schemas. An example is WellPlanningWellbore extending (=being the side-car) Wellbore ('motorbike').<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.3.4 `x-osdu-side-car-type-to` Side-Car Relationship](93-OSDU-Schemas.md#appendix-d34-x-osdu-side-car-type-to-side-car-relationship)   <br>&rarr; _OSDU types/schemas:_ [master-data--WellPlanningWellbore](../../E-R/master-data/WellPlanningWellbore.1.4.0.md), [master-data--Wellbore](../../E-R/master-data/Wellbore.1.5.1.md)
<a name="Site-Type"></a>
* **Site Type**<br>
  (OSDU entity type **SiteType** in group-type reference-data) Description: _Identifies the type of non-facility location (e.g. beach, oil seep, outcrop, sinkhole) that can be used for energy industry related activities, such as the collection of a rock or fluid sample. Being different from a facility, a generic site is usually a natural location, not a man-made structure or a grouping of equipment._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SiteType](../../E-R/reference-data/SiteType.1.1.0.md)
<a name="SMDS"></a>
* **SMDS**<br>
  A term no longer in use. Subsurface Master Data Store (or Services). A historical name for the OSDU data platform capabilities related to master data and reference data resource types.
<a name="Soil-Gas-Analysis-Type"></a>
* **Soil Gas Analysis Type**<br>
  (OSDU entity type **SoilGasAnalysisType** in group-type reference-data) Description: _Analytical method used by laboratory to complete soil gas analysis testing_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SoilGasAnalysisType](../../E-R/reference-data/SoilGasAnalysisType.1.0.0.md)
<a name="Soil-Gas-Application"></a>
* **Soil Gas Application**<br>
  (OSDU entity type **SoilGasApplication** in group-type reference-data) Description: _The soil gas application or situational setting that the data is being used for or acquired within. Examples include carbon capture & storage, depleted oil or gas field, water reservoir, producing oil or gas, fracking, etc_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SoilGasApplication](../../E-R/reference-data/SoilGasApplication.1.0.0.md)
<a name="Soil-Gas-Monitoring"></a>
* **Soil Gas Monitoring**<br>
  (OSDU entity type **SoilGasMonitoring** in group-type work-product-component) Description: _Soil Gas Monitoring is a type of environmental monitoring. Environment monitoring consists of tools, techniques and processes designed to observe an environment and characterise its quality for the purpose of accurately quantifying the impact an activity has on an environment. Other environmental monitoring types or techniques include air, water, contamination and erosion monitoring. And data is typically comprised of baseline and subsequent temporal data sets._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SoilGasMonitoring](../../E-R/work-product-component/SoilGasMonitoring.1.1.0.md)
<a name="Soil-Gas-Sampling-Method"></a>
* **Soil Gas Sampling Method**<br>
  (OSDU entity type **SoilGasSamplingMethod** in group-type reference-data) Description: _Methodology detailing how the soil gas sample was acquired_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SoilGasSamplingMethod](../../E-R/reference-data/SoilGasSamplingMethod.1.0.0.md)
<a name="Source"></a>
* **Source**<br>
  (PPDM) Source: something that refers a reader or consulter to the origin or provider of information. A source may be another organization, a procedure or software system, data store etc.Example: Where I got this from
<a name="Sovereign-State"></a>
* **Sovereign State**<br>
  (GeoPoliticalEntityType) Area governed by a Sovereign State-like related system. Sovereign State is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Spatial-Geometry-Type"></a>
* **Spatial Geometry Type**<br>
  (OSDU entity type **SpatialGeometryType** in group-type reference-data) Description: _Used to describe the type of spatial geometries._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SpatialGeometryType](../../E-R/reference-data/SpatialGeometryType.1.0.0.md)
<a name="Spatial-Parameter-Type"></a>
* **Spatial Parameter Type**<br>
  (OSDU entity type **SpatialParameterType** in group-type reference-data) Description: _Used to describe the type of spatial parameters._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SpatialParameterType](../../E-R/reference-data/SpatialParameterType.1.0.0.md)
<a name="Special-Administrative-Region"></a>
* **Special Administrative Region**<br>
  (GeoPoliticalEntityType) Area governed by a Special Administrative Region-like related system. Special Administrative Region is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="SRN"></a>
* **SRN**<br>
  An OSDU formal identifier ("Subsurface Data Universe Resource Name") for an instance of OSDU data. It is stored in the system property `id` and has the form: data-partition-id:group-type--IndividualType:UniqueObjectKey. <br>
    &rarr; _See also_ [SRN](#SRN).
<a name="SRN-id"></a>
* **SRN id**<br>
  An SRN can be used to identify OSDU Resources. It consists of data-partition-id:type-identifier-UniqueObjectKey (stored in the system property `id`) and the generated version (stored in the system property `version`). <br>
    &rarr; _See also_ [id](#id).
<a name="SRN-Type"></a>
* **SRN Type**<br>
  Better known as `kind`. The kind determines the expected schema of the OSDU resource.<br>
    &rarr; _See also_ [kind](#kind).
<a name="Stabiliser-Blade-Design-Type"></a>
* **Stabiliser Blade Design Type**<br>
  (OSDU entity type **StabiliserBladeDesignType** in group-type reference-data) Description: _Classification based on Blade Types_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StabiliserBladeDesignType](../../E-R/reference-data/StabiliserBladeDesignType.1.0.0.md)
<a name="Stabiliser-Operating-Design"></a>
* **Stabiliser Operating Design**<br>
  (OSDU entity type **StabiliserOperatingDesign** in group-type reference-data) Description: _Classification based on operating design of the stabiliser_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StabiliserOperatingDesign](../../E-R/reference-data/StabiliserOperatingDesign.1.0.0.md)
<a name="Stabiliser-Type"></a>
* **Stabiliser Type**<br>
  (OSDU entity type **StabiliserType** in group-type reference-data) Description: _Classification based on stabiliser type_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StabiliserType](../../E-R/reference-data/StabiliserType.1.0.0.md)
<a name="Stacked-Pay"></a>
* **Stacked Pay**<br>
  (ProspectType) Multiple hydrocarbon reservoir zones in a thick vertical section. Stacked Pay is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Standards-Organisation"></a>
* **Standards Organisation**<br>
  (OSDU entity type **StandardsOrganisation** in group-type reference-data) Description: _The reference-data type holding a StandardsOrganisation, e.g. ISO, IOGP, Energistics, etc. The main purpose is to define organisations, which provide alias names to reference-data._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StandardsOrganisation](../../E-R/reference-data/StandardsOrganisation.1.0.0.md)
<a name="State"></a>
* **State**<br>
  (GeoPoliticalEntityType) Area governed by a State-like related system. State is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Status"></a>
* **Status**<br>
  (PPDM) Status indicates a state of an entity with respect to circumstances or a particular perspective (such as from the perspective of finance, regulatory approvals, construction etc.). Each status typically has a starting and ending date which is dependent on an event, activity or condition.
<a name="Step"></a>
* **Step**<br>
  (PPDM) A step is a particular activity or event in an organized set of activities or events that are part of a workflow. Example: Stage, Phase.
<a name="Stim-Additive-Type"></a>
* **Stim Additive Type**<br>
  (OSDU entity type **StimAdditiveType** in group-type reference-data) Description: _The types of fluid additives that may be added to a Stimulation Fluid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimAdditiveType](../../E-R/reference-data/StimAdditiveType.1.0.0.md)
<a name="Stim-FE-Test-Analysis-Method"></a>
* **Stim FE Test Analysis Method**<br>
  (OSDU entity type **StimFETestAnalysisMethod** in group-type reference-data) Description: _The analysis methods used in a Fluid Efficiency Test for a Stimulation Job Pumping Diagnostic Session._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimFETestAnalysisMethod](../../E-R/reference-data/StimFETestAnalysisMethod.1.0.0.md)
<a name="Stim-Flow-Path-Type"></a>
* **Stim Flow Path Type**<br>
  (OSDU entity type **StimFlowPathType** in group-type reference-data) Description: _The fluid flow path type used during a Stimulation Job which describes how where fluid is pumped from surface to the stimulated interval._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimFlowPathType](../../E-R/reference-data/StimFlowPathType.1.0.0.md)
<a name="Stim-Job-Diversion-Method"></a>
* **Stim Job Diversion Method**<br>
  (OSDU entity type **StimJobDiversionMethod** in group-type reference-data) Description: _The Diversion Method used within a Stimulation Stage._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimJobDiversionMethod](../../E-R/reference-data/StimJobDiversionMethod.1.0.0.md)
<a name="Stim-Job-Fluid-Type"></a>
* **Stim Job Fluid Type**<br>
  (OSDU entity type **StimJobFluidType** in group-type reference-data) Description: _The Fluid Types and associated Sub-types which may be pumped during a Stimulation Job/Stage._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimJobFluidType](../../E-R/reference-data/StimJobFluidType.1.0.0.md)
<a name="Stim-Job-Step-Type"></a>
* **Stim Job Step Type**<br>
  (OSDU entity type **StimJobStepType** in group-type reference-data) Description: _The pumping schedule Step Type that may be performed within a Simulation Stage._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimJobStepType](../../E-R/reference-data/StimJobStepType.1.0.0.md)
<a name="Stim-Job-Type"></a>
* **Stim Job Type**<br>
  (OSDU entity type **StimJobType** in group-type reference-data) Description: _Stimulation Job Types and associated Sub-types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimJobType](../../E-R/reference-data/StimJobType.1.0.0.md)
<a name="Stim-Material-Type"></a>
* **Stim Material Type**<br>
  (OSDU entity type **StimMaterialType** in group-type reference-data) Description: _The types of materials that may be pumped during a Stimulation Job/Stage._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimMaterialType](../../E-R/reference-data/StimMaterialType.1.0.0.md)
<a name="Stim-PIDX-Commodity-Code"></a>
* **Stim PIDX Commodity Code**<br>
  (OSDU entity type **StimPIDXCommodityCode** in group-type reference-data) Description: _PIDX Commodity Codes associated to a Stimulation Job._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimPIDXCommodityCode](../../E-R/reference-data/StimPIDXCommodityCode.1.0.0.md)
<a name="Stim-Proppant-Agent-Type"></a>
* **Stim Proppant Agent Type**<br>
  (OSDU entity type **StimProppantAgentType** in group-type reference-data) Description: _The types of proppant used within a Stimulation Job/Stage._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StimProppantAgentType](../../E-R/reference-data/StimProppantAgentType.1.0.0.md)
<a name="Stimulation-Job"></a>
* **Stimulation Job**<br>
  (OSDU entity type **StimulationJob** in group-type work-product-component) Description: _Parent object for all the information for one Frac / Stimulation Job within a Well/Wellbore. A Stimulation Job can be associated to one or more Stimulation Stages with each Stage having one or more Job Steps._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StimulationJob](../../E-R/work-product-component/StimulationJob.1.1.0.md)
<a name="Stimulation-Stage"></a>
* **Stimulation Stage**<br>
  (OSDU entity type **StimulationStage** in group-type work-product-component) Description: _A Stage treated during a Stimulation Job._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StimulationStage](../../E-R/work-product-component/StimulationStage.1.0.0.md)
<a name="Storage-Facility"></a>
* **Storage Facility**<br>
  (OSDU entity type **StorageFacility** in group-type master-data) Description: _A generic storage facility for e.g., core and rock or fluid samples, seismic tapes, etc._<br>
    &rarr; _OSDU types/schemas:_ [master-data--StorageFacility](../../E-R/master-data/StorageFacility.1.2.0.md)
<a name="Stratigraphic-Column"></a>
* **Stratigraphic Column**<br>
  (OSDU entity type **StratigraphicColumn** in group-type work-product-component) Description: _Representation describing the vertical location of rock units in a particular area_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StratigraphicColumn](../../E-R/work-product-component/StratigraphicColumn.1.2.0.md)
<a name="Stratigraphic-Column-Rank-Interpretation"></a>
* **Stratigraphic Column Rank Interpretation**<br>
  (OSDU entity type **StratigraphicColumnRankInterpretation** in group-type work-product-component) Description: _A global hierarchy containing an ordered list of stratigraphic unit interpretations_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StratigraphicColumnRankInterpretation](../../E-R/work-product-component/StratigraphicColumnRankInterpretation.1.3.0.md)
<a name="Stratigraphic-Column-Rank-Unit-Type"></a>
* **Stratigraphic Column Rank Unit Type**<br>
  (OSDU entity type **StratigraphicColumnRankUnitType** in group-type reference-data) Description: _The reference value type defining a column position in a stratigraphic chart, which is ordered by rank (increasing from left to right)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StratigraphicColumnRankUnitType](../../E-R/reference-data/StratigraphicColumnRankUnitType.1.1.0.md)
<a name="Stratigraphic-Column-Validity-Area-Type"></a>
* **Stratigraphic Column Validity Area Type**<br>
  (OSDU entity type **StratigraphicColumnValidityAreaType** in group-type reference-data) Description: _Member where the custom stratigraphic column has been produced._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StratigraphicColumnValidityAreaType](../../E-R/reference-data/StratigraphicColumnValidityAreaType.1.0.0.md)
<a name="Stratigraphic-Role-Type"></a>
* **Stratigraphic Role Type**<br>
  (OSDU entity type **StratigraphicRoleType** in group-type reference-data) Description: _The role or type of stratigraphy, e.g., Chronostratigraphic, Lithostratigraphic, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StratigraphicRoleType](../../E-R/reference-data/StratigraphicRoleType.1.0.0.md)
<a name="Stratigraphic-Unit-Interpretation"></a>
* **Stratigraphic Unit Interpretation**<br>
  (OSDU entity type **StratigraphicUnitInterpretation** in group-type work-product-component) Description: _One of potentially many boundary interpretations as a single consistent description of a local boundary feature. An interpretation is subjective and very strongly tied to the intellectual activity of the project team members._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StratigraphicUnitInterpretation](../../E-R/work-product-component/StratigraphicUnitInterpretation.1.3.0.md)
<a name="String-Class"></a>
* **String Class**<br>
  (OSDU entity type **StringClass** in group-type reference-data) Description: _Used to describe the string classes._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--StringClass](../../E-R/reference-data/StringClass.1.0.0.md)
<a name="Structural-Organization-Interpretation"></a>
* **Structural Organization Interpretation**<br>
  (OSDU entity type **StructuralOrganizationInterpretation** in group-type work-product-component) Description: _Structural Model Interpretations related to geometric elements such as faults, horizons, and intrusions on a scale of meters to kilometers._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StructuralOrganizationInterpretation](../../E-R/work-product-component/StructuralOrganizationInterpretation.1.2.0.md)
<a name="Structure-Map"></a>
* **Structure Map**<br>
  (OSDU entity type **StructureMap** in group-type work-product-component) Description: _A structure map (representation) is a support for properties based on a GenericBinGrid. Consequently, its type is always a Regular2DGrid. It is often associated to some Z values either in depth or time domain_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--StructureMap](../../E-R/work-product-component/StructureMap.1.0.0.md)
<a name="Sub-Representation"></a>
* **Sub Representation**<br>
  (OSDU entity type **SubRepresentation** in group-type work-product-component) Description: _An ordered list of indexable elements and/or indexable element pairs of existing representations_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--SubRepresentation](../../E-R/work-product-component/SubRepresentation.1.2.0.md)
<a name="Sub-salt"></a>
* **Sub-salt**<br>
  (PlayType) An intention or development to produce hydrocarbons from beneath a salt layer. Sub-salt is represented as PlayType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
<a name="Subjective-Classification-Rating"></a>
* **Subjective Classification Rating**<br>
  (OSDU entity type **SubjectiveClassificationRating** in group-type reference-data) Description: _SubjectiveClassificationRating is used for the categorization of ratings, degrees or interpretations that are subjective and dependent on context, often employed to convey relative qualities or degrees. The meanings of these classifications can fluctuate depending on the context they are used in and may be founded on personal beliefs, individual viewpoints, or experiences, rather than on objective, quantifiable criteria.<br>
  These classifications are utilized to categorize ratings based on their intended purpose, which could be quantity/size, quality/desirability, strength/intensity, or confidence/certainty.<br>
  It’s important to note that these classifications are not designed for use when describing data or interpretations through statistical or data distribution analysis. Furthermore, they are intended to be distinct from data assurance, which strives for a more objective and confident position, typically adhering to standard operating procedures or control and assurance frameworks._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SubjectiveClassificationRating](../../E-R/reference-data/SubjectiveClassificationRating.1.0.0.md)
<a name="Subsalt"></a>
* **Subsalt**<br>
  (ProspectType) Reservoir is tilted or deformed porous sediments beneath a salt layer. Subsalt is represented as ProspectType in OSDU<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Survey-Program"></a>
* **Survey Program**<br>
  (OSDU entity type **SurveyProgram** in group-type master-data) Description: _The plan for obtaining directional survey data by survey sections, acquired during a drilling campaign or later post-drilling work._<br>
    &rarr; _OSDU types/schemas:_ [master-data--SurveyProgram](../../E-R/master-data/SurveyProgram.1.2.0.md)
<a name="Survey-Tool-Type"></a>
* **Survey Tool Type**<br>
  (OSDU entity type **SurveyToolType** in group-type reference-data) Description: _Standardized Type of survey tool used. The content is generally derived from the ISCWSA Set of Generic Tool Codes._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--SurveyToolType](../../E-R/reference-data/SurveyToolType.1.0.0.md)
<a name="SWPS"></a>
* **SWPS**<br>
  A term no longer in use. Subsurface Work Product Store (or Services). A historical name for the OSDU data platform capabilities related to work product, work product component, and file resource types.
<a name="Synorogenic-Extensional-Continent-Continent"></a>
* **Synorogenic Extensional Continent-Continent**<br>
  (BasinType) Basin developed on extended top of mountainous collision massif developed in continent-continent collision zone. Synorogenic Extensional Continent-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="System-of-record"></a>
* **System of record**<br>
  A system of record is an information storage system that is the authoritative data source for a given data element or piece of information.
<a name="System-of-Reference"></a>
* **System of Reference**<br>
  A System of Reference may or may not be the System of Record for a transaction, but it is an Operational Data Store or Data Warehouse where other systems are able to get access to that transaction sometime after it has been created.

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## T

<a name="Target-Shape"></a>
* **Target Shape**<br>
  (OSDU entity type **TargetShape** in group-type reference-data) Description: _Target shape such as point, rectangular etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TargetShape](../../E-R/reference-data/TargetShape.1.0.0.md)
<a name="Target-Type"></a>
* **Target Type**<br>
  (OSDU entity type **TargetType** in group-type reference-data) Description: _Target Category such as geological target or driller target_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TargetType](../../E-R/reference-data/TargetType.1.0.0.md)
<a name="Technical-Assurance-Type"></a>
* **Technical Assurance Type**<br>
  (OSDU entity type **TechnicalAssuranceType** in group-type reference-data) Description: _The reference value type describing a record's overall suitability for general business consumption based on data quality. Clarifications: Since Certified is the highest classification of suitable quality, any further change or versioning of a Certified record should be carefully considered and justified. If a Technical Assurance value is not populated then one can assume the data has not been evaluated or its quality is unknown  (=Unevaluated). Technical Assurance values are not intended to be used for the identification of a single "preferred" or "definitive" record by comparison with other records._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TechnicalAssuranceType](../../E-R/reference-data/TechnicalAssuranceType.1.0.0.md)
<a name="Tectonic-Setting-Type"></a>
* **Tectonic Setting Type**<br>
  (OSDU entity type **TectonicSettingType** in group-type reference-data) Description: _Reference object to offer a list of values to describe the Tectonic Setting - which is a scenario used for Planning and Pore Pressure Practitioners - such as 'Strike Slip'_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TectonicSettingType](../../E-R/reference-data/TectonicSettingType.1.0.0.md)
<a name="Tensile-Strength-Method"></a>
* **Tensile Strength Method**<br>
  (OSDU entity type **TensileStrengthMethod** in group-type reference-data) Description: _The method by which a sample's ability to resist tearing under tension was measured or calculated._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TensileStrengthMethod](../../E-R/reference-data/TensileStrengthMethod.1.0.0.md)
<a name="Territory"></a>
* **Territory**<br>
  (GeoPoliticalEntityType) Area governed by a Territory-like related system. Territory is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Test-Approval-Status"></a>
* **Test Approval Status**<br>
  (OSDU entity type **TestApprovalStatus** in group-type reference-data) Description: _The acceptance status of an instance of a volume well test record_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TestApprovalStatus](../../E-R/reference-data/TestApprovalStatus.1.0.0.md)
<a name="Test-Sub-Type"></a>
* **Test Sub Type**<br>
  (OSDU entity type **TestSubType** in group-type reference-data) Description: _Well Barrier Element test sub-types for the barrier component being tested such as Abandoned Test, Plug Test, Manifold Test, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TestSubType](../../E-R/reference-data/TestSubType.1.0.1.md)
<a name="Test-Type"></a>
* **Test Type**<br>
  (OSDU entity type **TestType** in group-type reference-data) Description: _Well Barrier Element test types._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TestType](../../E-R/reference-data/TestType.1.0.1.md)
<a name="Thermal-Model-Type"></a>
* **Thermal Model Type**<br>
  (OSDU entity type **ThermalModelType** in group-type reference-data) Description: _List of the thermal model types for the rock physics model._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ThermalModelType](../../E-R/reference-data/ThermalModelType.1.0.0.md)
<a name="Three-Phase-Relative-Permeability-Model-Type"></a>
* **Three Phase Relative Permeability Model Type**<br>
  (OSDU entity type **ThreePhaseRelativePermeabilityModelType** in group-type reference-data) Description: _A list of the types of specific computational approaches or methods used to calculate the relative permeability relationships between oil, water, and gas phases as a function of their saturations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ThreePhaseRelativePermeabilityModelType](../../E-R/reference-data/ThreePhaseRelativePermeabilityModelType.1.0.0.md)
<a name="Tiered-Storage"></a>
* **Tiered Storage**<br>
  Tiered storage is the assignment of different categories of data to different types of storage media in order to reduce total storage cost. Categories may be based on levels of protection needed, performance requirements, frequency of use, and other considerations.
<a name="Tight-Sand"></a>
* **Tight Sand**
  * **Tight Sand**<br>
    (PlayType) An intention or development to produce hydrocarbons from a low-permeability reservoir using special completion techniques. Tight sand is represented as PlayType in OSDU.<br>
      &rarr; _OSDU types/schemas:_ [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md), [master-data--Play](../../E-R/master-data/Play.1.1.0.md)
  * **Tight Sand**<br>
    (ProspectType) Very low porosity sand requiring specialized unconventional completion methods. Tight Sand is represented as ProspectType in OSDU.<br>
      &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Time-Series"></a>
* **Time Series**<br>
  (OSDU entity type **TimeSeries** in group-type work-product-component) Description: _Stores an ordered list of times, for example used for time-dependent properties (saturation) or geometries (varying reservoir geometry through time)._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--TimeSeries](../../E-R/work-product-component/TimeSeries.1.2.0.md)
<a name="Timelapse-Seismic"></a>
* **Timelapse Seismic**<br>
  (OSDU Seismic) Seismic that is acquired to assess changes in the subsurface over time and is accomplished by acquiring new seismic over an existing survey, typically using the previous survey acquisition geometry.<br>
    &rarr; _OSDU types/schemas:_ [master-data--SeismicAcquisitionSurvey](../../E-R/master-data/SeismicAcquisitionSurvey.1.4.0.md), [master-data--SeismicProcessingProject](../../E-R/master-data/SeismicProcessingProject.1.4.0.md), [work-product-component--SeismicTraceData](../../E-R/work-product-component/SeismicTraceData.1.8.0.md), [work-product-component--TimeSeries](../../E-R/work-product-component/TimeSeries.1.2.0.md)
<a name="Town"></a>
* **Town**<br>
  (GeoPoliticalEntityType) Area governed by a Town-like related system. Town is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Township"></a>
* **Township**<br>
  (GeoPoliticalEntityType) Area governed by a Township-like related system. Township is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Trajectory-Station-Property-Type"></a>
* **Trajectory Station Property Type**<br>
  (OSDU entity type **TrajectoryStationPropertyType** in group-type reference-data) Description: _The trajectory station property catalog for e.g. WellboreTrajectory AvailableTrajectoryStationProperties. Similar to LogCurveType the TrajectoryStationPropertyType describes well-known properties (or curves or channels in an array view), which can be accessed via the Wellbore Domain Data Management Services._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TrajectoryStationPropertyType](../../E-R/reference-data/TrajectoryStationPropertyType.1.0.0.md)
<a name="Trapped-Oceanic-Crustal-Sag-Continent-Continent"></a>
* **Trapped Oceanic Crustal Sag Continent-Continent**<br>
  (BasinType) Mechanical and thermal subsidence of (narrow) ocean basin trapped between two convergent continental masses. Trapped Oceanic Crustal Sag Continent-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)
<a name="Tubular-Assembly"></a>
* **Tubular Assembly**
  * **Tubular Assembly**<br>
    (OSDU entity type **TubularAssembly** in group-type master-data) Description: _Well Tubular data contains information on the tubular assemblies and their components for the well, wellbore, or wellbore completion (as appropriate). Tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well in the context of drilling, which is then pulled back out e.g. a drillstring or workstring._<br>
      &rarr; _OSDU types/schemas:_ [master-data--TubularAssembly](../../E-R/master-data/TubularAssembly.2.1.0.md)
  * **Tubular Assembly**<br>
    (OSDU entity type **TubularAssembly** in group-type work-product-component) Description: _Well Tubular data contains information on the tubular assemblies and their components for the well, wellbore, or wellbore completion (as appropriate). The tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well in the context of drilling, which is then pulled back out._<br>
      &rarr; _OSDU types/schemas:_ [work-product-component--TubularAssembly](../../E-R/work-product-component/TubularAssembly.1.3.0.md)
<a name="Tubular-Assembly-Activity-Type"></a>
* **Tubular Assembly Activity Type**<br>
  (OSDU entity type **TubularAssemblyActivityType** in group-type reference-data) Description: _Used to describe the type of activity on TubularAssembly, such as RunActivity, PullActivity,…_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularAssemblyActivityType](../../E-R/reference-data/TubularAssemblyActivityType.1.0.0.md)
<a name="Tubular-Assembly-Status-Type"></a>
* **Tubular Assembly Status Type**<br>
  (OSDU entity type **TubularAssemblyStatusType** in group-type reference-data) Description: _Used to describe the status of the Tubular Assembly, such as Pulled, Installed,....._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularAssemblyStatusType](../../E-R/reference-data/TubularAssemblyStatusType.1.0.0.md)
<a name="Tubular-Assembly-Type"></a>
* **Tubular Assembly Type**<br>
  (OSDU entity type **TubularAssemblyType** in group-type reference-data) Description: _Used to describe the type of tubular assemblies._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularAssemblyType](../../E-R/reference-data/TubularAssemblyType.1.0.0.md)
<a name="Tubular-Component"></a>
* **Tubular Component**
  * **Tubular Component**<br>
    (OSDU entity type **TubularComponent** in group-type master-data) Description: _Well Tubular data contains information on the tubular assemblies installed into the well, wellbore, or wellbore completion (as appropriate). Tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well e.g. a drillstring, which is then pulled back out._<br>
      &rarr; _OSDU types/schemas:_ [master-data--TubularComponent](../../E-R/master-data/TubularComponent.2.5.0.md)
  * **Tubular Component**<br>
    (OSDU entity type **TubularComponent** in group-type work-product-component) Description: _Well Tubular data contains information on the tubular assemblies and their components for the well, wellbore, or wellbore completion (as appropriate). The tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well in the context of drilling, which is then pulled back out._<br>
      &rarr; _OSDU types/schemas:_ [work-product-component--TubularComponent](../../E-R/work-product-component/TubularComponent.1.3.0.md)
<a name="Tubular-Component-Connection-Type"></a>
* **Tubular Component Connection Type**<br>
  (OSDU entity type **TubularComponentConnectionType** in group-type reference-data) Description: _Used to describe the type of tubular component connections._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentConnectionType](../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md)
<a name="Tubular-Component-CXN-Position"></a>
* **Tubular Component CXN Position**<br>
  (OSDU entity type **TubularComponentCXNPosition** in group-type reference-data) Description: _Specifies the position of a connection on a tubular component._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentCXNPosition](../../E-R/reference-data/TubularComponentCXNPosition.1.0.0.md)
<a name="Tubular-Component-Grade"></a>
* **Tubular Component Grade**<br>
  (OSDU entity type **TubularComponentGrade** in group-type reference-data) Description: _Id of tubing grade - eg. the tensile strength of the tubing material. A system of classifying the material specifications for steel alloys used in the manufacture of tubing._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentGrade](../../E-R/reference-data/TubularComponentGrade.1.0.0.md)
<a name="Tubular-Component-Nozzle-Type"></a>
* **Tubular Component Nozzle Type**<br>
  (OSDU entity type **TubularComponentNozzleType** in group-type reference-data) Description: _Type of Nozzle installed in TubularComponent_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentNozzleType](../../E-R/reference-data/TubularComponentNozzleType.1.0.0.md)
<a name="Tubular-Component-Pin-Box-Type"></a>
* **Tubular Component Pin Box Type**<br>
  (OSDU entity type **TubularComponentPinBoxType** in group-type reference-data) Description: _The type of collar used to couple the tubular with another tubing string._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentPinBoxType](../../E-R/reference-data/TubularComponentPinBoxType.1.0.0.md)
<a name="Tubular-Component-Sensor-Type"></a>
* **Tubular Component Sensor Type**<br>
  (OSDU entity type **TubularComponentSensorType** in group-type reference-data) Description: _Type of Sensor installed in TubularComponent_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentSensorType](../../E-R/reference-data/TubularComponentSensorType.1.0.0.md)
<a name="Tubular-Component-Type"></a>
* **Tubular Component Type**<br>
  (OSDU entity type **TubularComponentType** in group-type reference-data) Description: _Specifies the types of components that can be used in a tubular string. These are used to specify the type of component and multiple components are used to define a tubular string (Tubular)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularComponentType](../../E-R/reference-data/TubularComponentType.1.1.0.md)
<a name="Tubular-Direction"></a>
* **Tubular Direction**<br>
  (OSDU entity type **TubularDirection** in group-type reference-data) Description: _The direction of the TubularAssembly/TubularComponent sequence._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularDirection](../../E-R/reference-data/TubularDirection.1.0.0.md)
<a name="Tubular-Ext-Comp-Attach-Mechanism"></a>
* **Tubular Ext Comp Attach Mechanism**<br>
  (OSDU entity type **TubularExtCompAttachMechanism** in group-type reference-data) Description: _List of methods used to attach external components to a tubular assembly._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularExtCompAttachMechanism](../../E-R/reference-data/TubularExtCompAttachMechanism.1.0.0.md)
<a name="Tubular-Ext-Comp-Attach-Pattern"></a>
* **Tubular Ext Comp Attach Pattern**<br>
  (OSDU entity type **TubularExtCompAttachPattern** in group-type reference-data) Description: _List of external component placement patterns which describe frequency of the equipment being installed onto the tubular assembly._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularExtCompAttachPattern](../../E-R/reference-data/TubularExtCompAttachPattern.1.0.0.md)
<a name="Tubular-Ext-Comp-Type"></a>
* **Tubular Ext Comp Type**<br>
  (OSDU entity type **TubularExtCompType** in group-type reference-data) Description: _List of tubular assembly external component (equipment) types for drilling, casing/liner and completion assemblies._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularExtCompType](../../E-R/reference-data/TubularExtCompType.1.0.0.md)
<a name="Tubular-External-Component"></a>
* **Tubular External Component**
  * **Tubular External Component**<br>
    (OSDU entity type **TubularExternalComponent** in group-type master-data) Description: _An External Component aka Jewellery is any equipment attached to the outside of a tubular assembly. Examples include Casing Centralizers or Scratchers, Friction Reduction Devices for a Drillstring, Clamps for Umbilical Lines._<br>
      &rarr; _OSDU types/schemas:_ [master-data--TubularExternalComponent](../../E-R/master-data/TubularExternalComponent.2.0.0.md)
  * **Tubular External Component**<br>
    (OSDU entity type **TubularExternalComponent** in group-type work-product-component) Description: _An External Component aka Jewellery is any equipment attached to the outside of a tubular assembly. Examples include Casing Centralizers or Scratchers, Friction Reduction Devices for a Drillstring, Clamps for Umbilical Lines._<br>
      &rarr; _OSDU types/schemas:_ [work-product-component--TubularExternalComponent](../../E-R/work-product-component/TubularExternalComponent.1.1.0.md)
<a name="Tubular-Material-Type"></a>
* **Tubular Material Type**<br>
  (OSDU entity type **TubularMaterialType** in group-type reference-data) Description: _The general or specific description of the material used to make tubular goods (casing, pipe, etc.)_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularMaterialType](../../E-R/reference-data/TubularMaterialType.1.0.0.md)
<a name="Tubular-Section-Type"></a>
* **Tubular Section Type**<br>
  (OSDU entity type **TubularSectionType** in group-type reference-data) Description: _Used to describe the type of tubular sections._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularSectionType](../../E-R/reference-data/TubularSectionType.1.0.0.md)
<a name="Tubular-Umbilical"></a>
* **Tubular Umbilical**
  * **Tubular Umbilical**<br>
    (OSDU entity type **TubularUmbilical** in group-type master-data) Description: _An umbilical is any control, power or sensor cable or tube run through an outlet on the wellhead down to a particular receptacle on a downhole component (power or hydraulic line) or simply to a specific depth (sensors). Examples include Gas lift injection tube, Subsea valve control line, ESP power cable, iWire for external gauges, external Fiber Optic Sensor cable. Umbilicals are run outside of the casing or completion assembly and are typically attached by clamps. Umbilicals are run in hole same time as the host assembly. Casing Umbilicals may be cemented in place e.g. Fiber Optic._<br>
      &rarr; _OSDU types/schemas:_ [master-data--TubularUmbilical](../../E-R/master-data/TubularUmbilical.2.0.0.md)
  * **Tubular Umbilical**<br>
    (OSDU entity type **TubularUmbilical** in group-type work-product-component) Description: _An umbilical is any control, power or sensor cable or tube run through an outlet on the wellhead down to a particular receptacle on a downhole component (power or hydraulic line) or simply to a specific depth (sensors). Examples include Gas lift injection tube, Subsea valve control line, ESP power cable, iWire for external gauges, external Fiber Optic Sensor cable. Umbilicals are run outside of the casing or completion assembly and are typically attached by clamps. Umbilicals are run in hole same time as the host assembly. Casing Umbilicals may be cemented in place e.g. Fiber Optic._<br>
      &rarr; _OSDU types/schemas:_ [work-product-component--TubularUmbilical](../../E-R/work-product-component/TubularUmbilical.1.2.0.md)
<a name="Tubular-Umbilical-Service-Type"></a>
* **Tubular Umbilical Service Type**<br>
  (OSDU entity type **TubularUmbilicalServiceType** in group-type reference-data) Description: _Used to describe the service the umbilical is designed for (such as "Standard", "H2S Sour Service",...)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularUmbilicalServiceType](../../E-R/reference-data/TubularUmbilicalServiceType.1.0.0.md)
<a name="Tubular-Umbilical-Type"></a>
* **Tubular Umbilical Type**<br>
  (OSDU entity type **TubularUmbilicalType** in group-type reference-data) Description: _Used to describe the type of tubular umbilical._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--TubularUmbilicalType](../../E-R/reference-data/TubularUmbilicalType.1.0.0.md)
<a name="Turbidite"></a>
* **Turbidite**<br>
  (ProspectType) Reservoir is sand moved by gravity flow down the continental margin and deposited as a sand lens in the basin. Turbidite is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Type"></a>
* **Type**<br>
  (PPDM) Types are terms used to describe and characterizes a thing or concept. They do not describe methods, procedures or techniques (use METHOD). They may be considered nouns or adjectives.Examples: kind, thing.<br>
    &rarr; _See also_ [kind](#kind).

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## U

<a name="Unconformity"></a>
* **Unconformity**<br>
  (ProspectType) Reservoir rock is overlain by non-porous sediments deposited after a major gap in the geological time record. Unconformity is represented as ProspectType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md), [master-data--Prospect](../../E-R/master-data/Prospect.1.1.0.md)
<a name="Uniaxial-Cycle-Type"></a>
* **Uniaxial Cycle Type**<br>
  (OSDU entity type **UniaxialCycleType** in group-type reference-data) Description: _The cycle type identifies whether a pressure cycle is loading or unloading, to include preliminary cycles used to precondition or assess initial response and the main test pressure cycles._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--UniaxialCycleType](../../E-R/reference-data/UniaxialCycleType.1.0.0.md)
<a name="Uniaxial-Test-Control-Type"></a>
* **Uniaxial Test Control Type**<br>
  (OSDU entity type **UniaxialTestControlType** in group-type reference-data) Description: _Identifies the type of pore pressure control during the pressure test, such as constant or depletion._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--UniaxialTestControlType](../../E-R/reference-data/UniaxialTestControlType.1.0.0.md)
<a name="Unit"></a>
* **Unit**
  * **Unit**<br>
    (OSDU UnitOfMeasure) The Energistics derived Unit of Measure Standard, the platform standard for units and unit quantities.<br>
      &rarr; _Schema Usage Guide:_ [4.1 Unit of Measure Foundation](04-FrameOfReference.md#41-unit-of-measure-foundation)   <br>&rarr; _OSDU types/schemas:_ [reference-data--UnitOfMeasure](../../E-R/reference-data/UnitOfMeasure.1.0.0.md), [reference-data--UnitQuantity](../../E-R/reference-data/UnitQuantity.1.0.0.md)
  * **Unit**<br>
    (OSDU StratigraphicUnitInterpretation; RockFluidInterpretation; GeobodyInterpretation) Short term for geologic or structural unit, a volume.<br>
      &rarr; _OSDU types/schemas:_ [AbstractGeologicUnitInterpretation](../../E-R/abstract/AbstractGeologicUnitInterpretation.1.1.0.md), [work-product-component--StratigraphicUnitInterpretation](../../E-R/work-product-component/StratigraphicUnitInterpretation.1.3.0.md), [work-product-component--RockFluidUnitInterpretation](../../E-R/work-product-component/RockFluidUnitInterpretation.1.3.0.md), [work-product-component--GeobodyInterpretation](../../E-R/work-product-component/GeobodyInterpretation.1.3.0.md)
<a name="Unit-Alias"></a>
* **Unit Alias**<br>
  (OSDU ExternalUnitOfMeasure) Alias unit symbols are mapped via ExternalUnitOfMeasure and related entities to the platform standard UnitOfMeasure. <br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExternalUnitOfMeasure](../../E-R/reference-data/ExternalUnitOfMeasure.1.0.0.md), [reference-data--ExternalUnitQuantity](../../E-R/reference-data/ExternalUnitQuantity.1.0.0.md), [reference-data--ExternalCatalogNamespace](../../E-R/reference-data/ExternalCatalogNamespace.1.0.0.md)
<a name="Unit-Of-Measure"></a>
* **Unit Of Measure**<br>
  (OSDU entity type **UnitOfMeasure** in group-type reference-data) Description: _Used to describe the unit of measures._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--UnitOfMeasure](../../E-R/reference-data/UnitOfMeasure.1.0.0.md)
<a name="Unit-Of-Measure-Configuration"></a>
* **Unit Of Measure Configuration**<br>
  (OSDU entity type **UnitOfMeasureConfiguration** in group-type reference-data) Description: _A UnitOfMeasure configuration allowing to associate preferred units and default units to specific UnitQuantity values. UnitQuantity provides the full list of units, UnitOfMeasureConfiguration scopes the lists to a domain's/app's/user's requirements._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--UnitOfMeasureConfiguration](../../E-R/reference-data/UnitOfMeasureConfiguration.1.0.0.md)
<a name="Unit-Quantity"></a>
* **Unit Quantity**<br>
  (OSDU entity type **UnitQuantity** in group-type reference-data) Description: _A single unit quantity class representing a superclass of mutually comparable quantity kinds. The class may or may not represent a recognized quantity kind (i.e., it may logically be abstract).  Quantities of the same class will have the same quantity dimension.  However, quantities of the same dimension are not necessarily of the same class. The term "unit quantity class" is intended to have the same general  meaning as the term "kind of quantity" as defined by the  "International vocabulary of meteorology - Basic and general concepts and associated terms (VIM)" (JCGM 200:2008) https://www.bipm.org/utils/common/documents/jcgm/JCGM_200_2012.pdf._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--UnitQuantity](../../E-R/reference-data/UnitQuantity.1.0.0.md)
<a name="Unit-Symbol"></a>
* **Unit Symbol**<br>
  (OSDU UnitOfMeasure; ExternalUnitOfMeasure) Unit symbols must be looked up against the platform standard catalog UnitOfMeasure, for incoming external symbols, a look-up in the ExternalUnitOfMeasure is required to disambiguate symbols.<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ExternalUnitOfMeasure](../../E-R/reference-data/ExternalUnitOfMeasure.1.0.0.md), [reference-data--ExternalUnitQuantity](../../E-R/reference-data/ExternalUnitQuantity.1.0.0.md)
<a name="Unsealed-Surface-Framework"></a>
* **Unsealed Surface Framework**<br>
  (OSDU entity type **UnsealedSurfaceFramework** in group-type work-product-component) Description: _Unsealed structural model representations associated to geometric elements such as faults, horizons, and intrusions on a scale of meters to kilometers._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--UnsealedSurfaceFramework](../../E-R/work-product-component/UnsealedSurfaceFramework.1.3.1.md)
<a name="Unstructured-Column-Layer-Grid-Representation"></a>
* **Unstructured Column Layer Grid Representation**<br>
  (OSDU entity type **UnstructuredColumnLayerGridRepresentation** in group-type work-product-component) Description: _Definition of a collection of polyhedra which are only organized by column._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--UnstructuredColumnLayerGridRepresentation](../../E-R/work-product-component/UnstructuredColumnLayerGridRepresentation.1.2.0.md)
<a name="Unstructured-Grid-Representation"></a>
* **Unstructured Grid Representation**<br>
  (OSDU entity type **UnstructuredGridRepresentation** in group-type work-product-component) Description: _Definition of a collection of polyhedra which are not organized in any dimension._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--UnstructuredGridRepresentation](../../E-R/work-product-component/UnstructuredGridRepresentation.1.2.0.md)
<a name="Urban-area"></a>
* **Urban area**<br>
  (GeoPoliticalEntityType) Area governed by a Urban area-like related system. Urban Area is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="User-Profile"></a>
* **User Profile**<br>
  (OSDU entity type **UserProfile** in group-type master-data) Description: _A user profile for an individual using the OSDU data platform. This profile represents one given instance of the user activation._<br>
    &rarr; _OSDU types/schemas:_ [master-data--UserProfile](../../E-R/master-data/UserProfile.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## V

<a name="Value-Chain-Status-Type"></a>
* **Value Chain Status Type**<br>
  (OSDU entity type **ValueChainStatusType** in group-type reference-data) Description: _Phase of the value chain to which the referring item has been associated with, e.g., Exploration, Field Development, Production or Late Life._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ValueChainStatusType](../../E-R/reference-data/ValueChainStatusType.1.0.1.md)
<a name="Velocity-Analysis-Method"></a>
* **Velocity Analysis Method**<br>
  (OSDU entity type **VelocityAnalysisMethod** in group-type reference-data) Description: _The process of selecting the optimal wave speed (velocity) to stack or migrate seismic traces._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VelocityAnalysisMethod](../../E-R/reference-data/VelocityAnalysisMethod.1.0.1.md)
<a name="Velocity-Direction-Type"></a>
* **Velocity Direction Type**<br>
  (OSDU entity type **VelocityDirectionType** in group-type reference-data) Description: _The assumed direction of the stacking geometry in a velocity model._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VelocityDirectionType](../../E-R/reference-data/VelocityDirectionType.1.0.1.md)
<a name="Velocity-Modeling"></a>
* **Velocity Modeling**<br>
  (OSDU entity type **VelocityModeling** in group-type work-product-component) Description: _An earth model describing seismic velocities._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--VelocityModeling](../../E-R/work-product-component/VelocityModeling.1.4.0.md)
<a name="Velocity-Type"></a>
* **Velocity Type**<br>
  (OSDU entity type **VelocityType** in group-type reference-data) Description: _A descriptive term applied to a seismic velocity to indicate the type of calculation applied to the seismic data._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VelocityType](../../E-R/reference-data/VelocityType.1.0.1.md)
<a name="Vertical-Measurement-Path"></a>
* **Vertical Measurement Path**<br>
  (OSDU entity type **VerticalMeasurementPath** in group-type reference-data) Description: _The type of distance of a point relative to a defined reference point._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VerticalMeasurementPath](../../E-R/reference-data/VerticalMeasurementPath.1.0.1.md)
<a name="Vertical-Measurement-Source"></a>
* **Vertical Measurement Source**<br>
  (OSDU entity type **VerticalMeasurementSource** in group-type reference-data) Description: _Used to describe the type of vertical measurement sources._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VerticalMeasurementSource](../../E-R/reference-data/VerticalMeasurementSource.1.0.0.md)
<a name="Vertical-Measurement-Type"></a>
* **Vertical Measurement Type**<br>
  (OSDU entity type **VerticalMeasurementType** in group-type reference-data) Description: _A fixed elevation, depth, or surface point used as a reference plane to measure and report the depth within a wellbore or other features._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VerticalMeasurementType](../../E-R/reference-data/VerticalMeasurementType.1.0.3.md)
<a name="Village"></a>
* **Village**<br>
  (GeoPoliticalEntityType) Area governed by a Village-like related system. Village is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Virtual-Properties"></a>
* **Virtual Properties**<br>
  (OSDU Schema Extension Tag) A JSON structure to disambiguate 'competing' schema properties like locations and names.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.3.1 `x-osdu-virtual-properties` VirtualProperties](93-OSDU-Schemas.md#appendix-d31-x-osdu-virtual-properties-virtualproperties)
<a name="Viscosity-Method"></a>
* **Viscosity Method**<br>
  (OSDU entity type **ViscosityMethod** in group-type reference-data) Description: _The method by which fluid viscosity was measured or calculated._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ViscosityMethod](../../E-R/reference-data/ViscosityMethod.1.0.0.md)
<a name="Viscosity-Model-Type"></a>
* **Viscosity Model Type**<br>
  (OSDU entity type **ViscosityModelType** in group-type reference-data) Description: _List of the viscosity model types used in fluid models._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--ViscosityModelType](../../E-R/reference-data/ViscosityModelType.1.0.0.md)
<a name="Vitrinite-Mount-Technique"></a>
* **Vitrinite Mount Technique**<br>
  (OSDU entity type **VitriniteMountTechnique** in group-type reference-data) Description: _The technique or medium used to mount a vitrinite sample for analysis, e.g. epoxy resin or impregnation with a low-viscosity liquid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VitriniteMountTechnique](../../E-R/reference-data/VitriniteMountTechnique.1.0.0.md)
<a name="Vitrinite-Reflectance-Population-Type"></a>
* **Vitrinite Reflectance Population Type**<br>
  (OSDU entity type **VitriniteReflectancePopulationType** in group-type reference-data) Description: _Identifies the relative state of vitrinite reflectance as a result of thermal alteration, also called thermal maturity._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VitriniteReflectancePopulationType](../../E-R/reference-data/VitriniteReflectancePopulationType.1.0.0.md)
<a name="Voidage-Group-Interpretation"></a>
* **Voidage Group Interpretation**<br>
  (OSDU entity type **VoidageGroupInterpretation** in group-type work-product-component) Description: _A group of several reservoir compartments which can be associated to RockFluidOrganisationInterpretations and/or to GeologicUnitOrganizationInterpretations._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--VoidageGroupInterpretation](../../E-R/work-product-component/VoidageGroupInterpretation.1.2.0.md)
<a name="Voivodeship"></a>
* **Voivodeship**<br>
  (GeoPoliticalEntityType) Area governed by a Voivodeship-like related system. Voivodeship is represented as GeoPoliticalEntityType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md), [master-data--GeoPoliticalEntity](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
<a name="Volume-Flow-Measurement-Type"></a>
* **Volume Flow Measurement Type**<br>
  (OSDU entity type **VolumeFlowMeasurementType** in group-type reference-data) Description: _The direction of flow into, or out of the entity to which a production value recorded is associated<br>
  OR<br>
  HAL : "This table is used to store information for the types of volumes flow . Ex. Open Inventory , Closing Inventory, Production, Injection Disposition."_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VolumeFlowMeasurementType](../../E-R/reference-data/VolumeFlowMeasurementType.1.0.0.md)
<a name="Vsh-Calculation-Model"></a>
* **Vsh Calculation Model**<br>
  (OSDU entity type **VshCalculationModel** in group-type reference-data) Description: _The volume of shale (Vsh) calculation models used to derive a Vsh output from gamma-ray (GR) measurements._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--VshCalculationModel](../../E-R/reference-data/VshCalculationModel.1.0.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## W

<a name="Warehouse"></a>
* **Warehouse**<br>
  (OSDU) A generic storage facility for artefacts like samples, documents, tapes, etc. In OSDU represented by master-data--StorageFacility.<br>
    &rarr; _OSDU types/schemas:_ [master-data--StorageFacility](../../E-R/master-data/StorageFacility.1.2.0.md)
<a name="Water-Saturation-Composition-Component"></a>
* **Water Saturation Composition Component**<br>
  (OSDU entity type **WaterSaturationCompositionComponent** in group-type reference-data) Description: _Missing description for WaterSaturationCompositionComponent_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WaterSaturationCompositionComponent](../../E-R/reference-data/WaterSaturationCompositionComponent.1.0.0.md)
<a name="Weather-Type"></a>
* **Weather Type**<br>
  (OSDU entity type **WeatherType** in group-type reference-data) Description: _Type of weather observed during the operations reporting period_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WeatherType](../../E-R/reference-data/WeatherType.1.0.0.md)
<a name="Well"></a>
* **Well**<br>
  (OSDU entity type **Well** in group-type master-data) Description: _The origin of a set of wellbores._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Well](../../E-R/master-data/Well.1.5.0.md)
<a name="Well-Activity"></a>
* **Well Activity**<br>
  (OSDU entity type **WellActivity** in group-type master-data) Description: _A Well Activity is a operation performed on a well to accomplish a predetermined objective. This may be as short as a few hours in duration, or may last several days, weeks or even months. It will have one or more associated daily Operations Reports, and may have other associated data as well._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellActivity](../../E-R/master-data/WellActivity.1.3.0.md)
<a name="Well-Activity-Phase-Type"></a>
* **Well Activity Phase Type**<br>
  (OSDU entity type **WellActivityPhaseType** in group-type reference-data) Description: _Key milestones in a well activity program, usually based on the major sections of the well or non well-related work_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellActivityPhaseType](../../E-R/reference-data/WellActivityPhaseType.1.0.0.md)
<a name="Well-Activity-Program"></a>
* **Well Activity Program**<br>
  (OSDU entity type **WellActivityProgram** in group-type master-data) Description: _A complete description of an Activity Program for a unique or a set of Well(s) and/or Wellbore(s)_<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellActivityProgram](../../E-R/master-data/WellActivityProgram.1.2.0.md)
<a name="Well-Activity-Program-Type"></a>
* **Well Activity Program Type**<br>
  (OSDU entity type **WellActivityProgramType** in group-type reference-data) Description: _Type of well activity program. Can be "Primary" or "Contingency"_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellActivityProgramType](../../E-R/reference-data/WellActivityProgramType.1.0.0.md)
<a name="Well-Activity-Type"></a>
* **Well Activity Type**<br>
  (OSDU entity type **WellActivityType** in group-type reference-data) Description: _The type of well activity being conducted._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellActivityType](../../E-R/reference-data/WellActivityType.1.0.0.md)
<a name="Well-Barrier-Element-Test"></a>
* **Well Barrier Element Test**<br>
  (OSDU entity type **WellBarrierElementTest** in group-type master-data) Description: _Describes a complete sequence tested or planned to be tested for Well Integrity._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellBarrierElementTest](../../E-R/master-data/WellBarrierElementTest.1.3.0.md)
<a name="Well-Business-Intention"></a>
* **Well Business Intention**<br>
  (OSDU entity type **WellBusinessIntention** in group-type reference-data) Description: _Business Intention [Well Business Intention] is the general purpose for which resources are approved for drilling a new well or subsequent wellbore(s)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellBusinessIntention](../../E-R/reference-data/WellBusinessIntention.1.0.0.md)
<a name="Well-Business-Intention-Outcome"></a>
* **Well Business Intention Outcome**<br>
  (OSDU entity type **WellBusinessIntentionOutcome** in group-type reference-data) Description: _Outcome [Well Business Intention Outcome] is the result of attempting to accomplish the Business Intention [Well Business Intention]._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellBusinessIntentionOutcome](../../E-R/reference-data/WellBusinessIntentionOutcome.1.0.0.md)
<a name="Well-Condition"></a>
* **Well Condition**<br>
  (OSDU entity type **WellCondition** in group-type reference-data) Description: _Condition [Well Condition] is the operational state of a well component relative to the Role [Well Role]._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellCondition](../../E-R/reference-data/WellCondition.1.0.0.md)
<a name="Well-Control-Event-Classification"></a>
* **Well Control Event Classification**<br>
  (OSDU entity type **WellControlEventClassification** in group-type reference-data) Description: _Well Control Event Classification levels_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellControlEventClassification](../../E-R/reference-data/WellControlEventClassification.1.0.0.md)
<a name="Well-Fluid-Direction"></a>
* **Well Fluid Direction**<br>
  (OSDU entity type **WellFluidDirection** in group-type reference-data) Description: _Fluid Direction [Well Fluid Direction] is the flow direction of the wellhead stream. The facet value can change over the life of the well._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellFluidDirection](../../E-R/reference-data/WellFluidDirection.1.0.0.md)
<a name="Well-Fluid-Role"></a>
* **Well Fluid Role**<br>
  (OSDU entity type **WellFluidRole** in group-type reference-data) Description: _Purpose the fluid will play in the wellbore, such as Cement Displacement, Hole Cleaning, Sweep, Completion Fluid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellFluidRole](../../E-R/reference-data/WellFluidRole.1.0.0.md)
<a name="Well-Fluid-Type"></a>
* **Well Fluid Type**<br>
  (OSDU entity type **WellFluidType** in group-type reference-data) Description: _Type of drilling or completions fluid._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellFluidType](../../E-R/reference-data/WellFluidType.1.0.0.md)
<a name="Well-Fluids-Report"></a>
* **Well Fluids Report**<br>
  (OSDU entity type **WellFluidsReport** in group-type work-product-component) Description: _Used to capture an analysis of the drilling mud, completion fluid or other fluids pumped during well construction. Printed snapshots, e.g. PDF files, are captured via data.Artefacts[]._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellFluidsReport](../../E-R/work-product-component/WellFluidsReport.2.0.0.md)
<a name="Well-Interest-Type"></a>
* **Well Interest Type**<br>
  (OSDU entity type **WellInterestType** in group-type reference-data) Description: _Well Business Interest [Well Interest Type] describes whether a company currently considers a well entity or its data to be a real or planned asset, and if so, the nature of and motivation for that company's interest._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellInterestType](../../E-R/reference-data/WellInterestType.1.0.0.md)
<a name="Well-License"></a>
* **Well License**<br>
  (OSDU entity type **WellLicense** in group-type master-data) Description: _The relationship between a well license and the geographic or geopolitical areas that contain this license provides useful insight into which legislation may be relevant, what environmental controls may be in place, what citizens require notification and more.  This subset primarily provides a place to describe the intersections between the license and areas._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellLicense](../../E-R/master-data/WellLicense.1.0.0.md)
<a name="Well-License-Condition-Type"></a>
* **Well License Condition Type**<br>
  (OSDU entity type **WellLicenseConditionType** in group-type reference-data) Description: _The type of condition applied to the well license, such as flaring rate, venting rate, production rate, H2S content limit, emissions etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseConditionType](../../E-R/reference-data/WellLicenseConditionType.1.0.0.md)
<a name="Well-License-Service-Quality-Type"></a>
* **Well License Service Quality Type**<br>
  (OSDU entity type **WellLicenseServiceQualityType** in group-type reference-data) Description: _Service Quality is the perspective of the customer on the reliability or other factors about the performance of a business associate in the context of a Well License._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseServiceQualityType](../../E-R/reference-data/WellLicenseServiceQualityType.1.0.0.md)
<a name="Well-License-Service-Type"></a>
* **Well License Service Type**<br>
  (OSDU entity type **WellLicenseServiceType** in group-type reference-data) Description: _These services are specific to the license and its management._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseServiceType](../../E-R/reference-data/WellLicenseServiceType.1.0.0.md)
<a name="Well-License-Status-Class"></a>
* **Well License Status Class**<br>
  (OSDU entity type **WellLicenseStatusClass** in group-type reference-data) Description: _Status often serves as a shortcut to summarize information derived from one or more data systems. They may also imply legal or regulatory conditions or stipulations or serve as triggers for certain kinds of obligations._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseStatusClass](../../E-R/reference-data/WellLicenseStatusClass.1.0.0.md)
<a name="Well-License-Status-Type"></a>
* **Well License Status Type**<br>
  (OSDU entity type **WellLicenseStatusType** in group-type reference-data) Description: _Some status information is permanent or semipermanent. Other status information may indicate where a specific data object is on a life cycle, workflow or business process._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseStatusType](../../E-R/reference-data/WellLicenseStatusType.1.0.0.md)
<a name="Well-License-Substance"></a>
* **Well License Substance**<br>
  (OSDU entity type **WellLicenseSubstance** in group-type reference-data) Description: _When a product or other substance is named as an element in a well license condition, use this reference list to select the product or products._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseSubstance](../../E-R/reference-data/WellLicenseSubstance.1.0.0.md)
<a name="Well-License-Substance-Loss"></a>
* **Well License Substance Loss**<br>
  (OSDU entity type **WellLicenseSubstanceLoss** in group-type reference-data) Description: _The identify of any substance that escapes or spills, particularly when unintended._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseSubstanceLoss](../../E-R/reference-data/WellLicenseSubstanceLoss.1.0.0.md)
<a name="Well-License-Substance-Loss-Type"></a>
* **Well License Substance Loss Type**<br>
  (OSDU entity type **WellLicenseSubstanceLossType** in group-type reference-data) Description: _The type of loss experienced. This may include fuel spills from a vehicle, gas emissions from a wellhead or feeder line, or any other substance._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseSubstanceLossType](../../E-R/reference-data/WellLicenseSubstanceLossType.1.0.0.md)
<a name="Well-License-Violation-Consequence-Type"></a>
* **Well License Violation Consequence Type**<br>
  (OSDU entity type **WellLicenseViolationConsequenceType** in group-type reference-data) Description: _The consequence of the violation as assigned by the regulatory or other authority, there may be more than one consequences._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseViolationConsequenceType](../../E-R/reference-data/WellLicenseViolationConsequenceType.1.0.0.md)
<a name="Well-License-Violation-Resolution-Method-Class"></a>
* **Well License Violation Resolution Method Class**<br>
  (OSDU entity type **WellLicenseViolationResolutionMethodClass** in group-type reference-data) Description: _A classification of kinds of violations. This is a broad grouping of violations that can be used for metrics and other analysis._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseViolationResolutionMethodClass](../../E-R/reference-data/WellLicenseViolationResolutionMethodClass.1.0.0.md)
<a name="Well-License-Violation-Resolution-Method-Type"></a>
* **Well License Violation Resolution Method Type**<br>
  (OSDU entity type **WellLicenseViolationResolutionMethodType** in group-type reference-data) Description: _The method by which a license violation has been resolved._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseViolationResolutionMethodType](../../E-R/reference-data/WellLicenseViolationResolutionMethodType.1.0.0.md)
<a name="Well-License-Violation-Type"></a>
* **Well License Violation Type**<br>
  (OSDU entity type **WellLicenseViolationType** in group-type reference-data) Description: _The type of violation of a license that is being recorded. Can be as simple as failure to submit necessary reports or something more difficult such as improper procedures._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLicenseViolationType](../../E-R/reference-data/WellLicenseViolationType.1.0.0.md)
<a name="Well-Log"></a>
* **Well Log**<br>
  (OSDU entity type **WellLog** in group-type work-product-component) Description: _A well log is a data type that correlates a particular measurement or multiple measurements in a wellbore against depth and/or time within that wellbore. When plotted visually, well logs are typically long line graphs (called "curves") but may sometimes be discrete points or intervals. This schema object is intended for digital well logs, not raster log files or raster calibration files, but may be used for the latter in the absence of a defined OSDU schema for these use cases._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellLog](../../E-R/work-product-component/WellLog.1.5.0.md)
<a name="Well-Log-Acquisition"></a>
* **Well Log Acquisition**<br>
  (OSDU entity type **WellLogAcquisition** in group-type master-data) Description: _A well log acquisition project includes the mobilization of resources i.e. financial, equipment and people, to the well site to conduct a well logging activity and acquisition of well log information. May be referred to as a Logging Job._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellLogAcquisition](../../E-R/master-data/WellLogAcquisition.1.0.0.md)
<a name="Well-Log-Class"></a>
* **Well Log Class**<br>
  (OSDU entity type **WellLogClass** in group-type reference-data) Description: _Identifies the business domain of a set of associated well log curves. Examples include, Petrophysical Logs, Drilling Logs and Production Logs._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogClass](../../E-R/reference-data/WellLogClass.1.0.0.md)
<a name="Well-Log-Direction"></a>
* **Well Log Direction**<br>
  (OSDU entity type **WellLogDirection** in group-type reference-data) Description: _Indicates the direction in which the well logging operation is performed._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogDirection](../../E-R/reference-data/WellLogDirection.1.0.0.md)
<a name="Well-Log-Flowing-Condition"></a>
* **Well Log Flowing Condition**<br>
  (OSDU entity type **WellLogFlowingCondition** in group-type reference-data) Description: _Describes the state of the well in terms of fluid flow during the logging operation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogFlowingCondition](../../E-R/reference-data/WellLogFlowingCondition.1.0.0.md)
<a name="Well-Log-Hole-Type"></a>
* **Well Log Hole Type**<br>
  (OSDU entity type **WellLogHoleType** in group-type reference-data) Description: _Specifies the type of hole being logged in the wellbore._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogHoleType](../../E-R/reference-data/WellLogHoleType.1.0.0.md)
<a name="Well-Log-Method"></a>
* **Well Log Method**<br>
  (OSDU entity type **WellLogMethod** in group-type reference-data) Description: _A reference value list for well logging methods as defined by the Energistics Practical Well Log Standard (PWLS), which is referred to by  WellLoggingTool._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogMethod](../../E-R/reference-data/WellLogMethod.1.0.0.md)
<a name="Well-Log-Pass-Type"></a>
* **Well Log Pass Type**<br>
  (OSDU entity type **WellLogPassType** in group-type reference-data) Description: _Defines the type of pass made by the logging tool during the well logging operation._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogPassType](../../E-R/reference-data/WellLogPassType.1.0.0.md)
<a name="Well-Log-Sampling-Domain-Type"></a>
* **Well Log Sampling Domain Type**<br>
  (OSDU entity type **WellLogSamplingDomainType** in group-type reference-data) Description: _The reference type for the well log, e.g. the domain of the reference curve. The most common value is Depth but it can also be calendar time, e.g. TimePast-1970-01-01 or SeismicTwoWayTravelTime._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogSamplingDomainType](../../E-R/reference-data/WellLogSamplingDomainType.1.0.0.md)
<a name="Well-Log-Tool-Class"></a>
* **Well Log Tool Class**<br>
  (OSDU entity type **WellLogToolClass** in group-type reference-data) Description: _A list of well log tool class codes and a description of each code. It is used for classifications in context of the Energistics Practical Well Log Standard (PWLS)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogToolClass](../../E-R/reference-data/WellLogToolClass.1.0.0.md)
<a name="Well-Log-Tool-Code"></a>
* **Well Log Tool Code**<br>
  (OSDU entity type **WellLogToolCode** in group-type reference-data) Description: _A reference value list of well log tool codes and associated information, including LogCurveType references typically expected to be present._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellLogToolCode](../../E-R/reference-data/WellLogToolCode.1.0.0.md)
<a name="Well-MAASP"></a>
* **Well MAASP**<br>
  (OSDU entity type **WellMAASP** in group-type work-product-component) Description: _Calculated Maximum Allowable Annulus Surface Pressures for a set of Wellhead Annuli appropriate for a specific timeframe of the well to support Well integrity Annular pressure management._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellMAASP](../../E-R/work-product-component/WellMAASP.1.0.0.md)
<a name="Well-Operations-Report"></a>
* **Well Operations Report**<br>
  (OSDU entity type **WellOperationsReport** in group-type work-product-component) Description: _A standard report of all drilling, completion or other well work operations conducted on a well during a given reporting period, usually a 24-hour day, not necessarily aligned with the local time zone._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellOperationsReport](../../E-R/work-product-component/WellOperationsReport.2.1.0.md)
<a name="Well-Ops-Non-Productive-Time"></a>
* **Well Ops Non Productive Time**<br>
  (OSDU entity type **WellOpsNonProductiveTime** in group-type work-product-component) Description: _Non Productive Time (NPT) during Well Operations is the time taken to perform all remedial activities that DO NOT continue to progress towards the planned objective(s). NPT will  include all subsequent time taken to reach the same stage in the work programme prior to the NPT event occurring e.g. reach the same depth before stuck pipe event and back-off etc. NPTs caused by an Equipment Failure may be associated to a DowntimeEvent. An NPT start must align to an Operations Report Activity; similarly, an NPT must end at the end of an Operations Report activity._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellOpsNonProductiveTime](../../E-R/work-product-component/WellOpsNonProductiveTime.1.0.0.md)
<a name="Well-Planning-Well"></a>
* **Well Planning Well**<br>
  (OSDU entity type **WellPlanningWell** in group-type master-data) Description: _Information about a single well. A well is a unique surface location from which wellbores are drilled into the Earth for the purpose of either (1) finding or producing underground resources; or (2) providing services related to the production of underground resources._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellPlanningWell](../../E-R/master-data/WellPlanningWell.1.1.0.md)
<a name="Well-Planning-Wellbore"></a>
* **Well Planning Wellbore**<br>
  (OSDU entity type **WellPlanningWellbore** in group-type master-data) Description: _A planned wellbore extending from a point at the earth's surface to the maximum point of penetration (planned total depth)._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellPlanningWellbore](../../E-R/master-data/WellPlanningWellbore.1.4.0.md)
<a name="Well-Pressure-Detailed-Test-Category"></a>
* **Well Pressure Detailed Test Category**<br>
  (OSDU entity type **WellPressureDetailedTestCategory** in group-type reference-data) Description: _Indicates which detailed type of test (DST, miniDST, sampling,…) has been conducted within a well pressure test_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureDetailedTestCategory](../../E-R/reference-data/WellPressureDetailedTestCategory.1.0.0.md)
<a name="Well-Pressure-Test-Acquisition-Job"></a>
* **Well Pressure Test Acquisition Job**<br>
  (OSDU entity type **WellPressureTestAcquisitionJob** in group-type master-data) Description: _A Well Pressure Test Acquisition Job is a subset of a Well Pressure Test Acquisition Program - usually assigned to a single contracting company and summarizing the overall testing phases (multiple measurement stations, run over multiple passes from one or more runs).<br>
  The Acquisition String can change between two different runs - and at each station, only a subset of the "in place" string can be activated - which subset can evolve from 1 measurement to the other._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellPressureTestAcquisitionJob](../../E-R/master-data/WellPressureTestAcquisitionJob.1.2.0.md)
<a name="Well-Pressure-Test-Category"></a>
* **Well Pressure Test Category**<br>
  (OSDU entity type **WellPressureTestCategory** in group-type reference-data) Description: _Main Type of Well Pressure Test - as agreed per OSDU work group April 2024_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureTestCategory](../../E-R/reference-data/WellPressureTestCategory.1.0.0.md)
<a name="Well-Pressure-Test-Gauge-Type"></a>
* **Well Pressure Test Gauge Type**<br>
  (OSDU entity type **WellPressureTestGaugeType** in group-type reference-data) Description: _Describes the specific type of gauge installed in an acquisition string and usable to run WellPressureTests_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureTestGaugeType](../../E-R/reference-data/WellPressureTestGaugeType.1.0.0.md)
<a name="Well-Pressure-Test-Interpretation"></a>
* **Well Pressure Test Interpretation**<br>
  (OSDU entity type **WellPressureTestInterpretation** in group-type work-product-component) Description: _Entity aiming to capture the results of interpretations carried out on the results of a well test activity. Intended to be partnered with a WellPressureTestRawMeasurement WPC that captures raw measurements before any kind of processing, composing, interpretation or analysis_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellPressureTestInterpretation](../../E-R/work-product-component/WellPressureTestInterpretation.1.0.0.md)
<a name="Well-Pressure-Test-Measurement-Period-Kind"></a>
* **Well Pressure Test Measurement Period Kind**<br>
  (OSDU entity type **WellPressureTestMeasurementPeriodKind** in group-type reference-data) Description: _In Well Pressure Test - records can be splitted in small individual, discrete events or periods. This captures the type of period/events_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureTestMeasurementPeriodKind](../../E-R/reference-data/WellPressureTestMeasurementPeriodKind.1.0.0.md)
<a name="Well-Pressure-Test-Probe-Type"></a>
* **Well Pressure Test Probe Type**<br>
  (OSDU entity type **WellPressureTestProbeType** in group-type reference-data) Description: _Type of the probe installed or active in the acquisition tool string_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureTestProbeType](../../E-R/reference-data/WellPressureTestProbeType.1.0.0.md)
<a name="Well-Pressure-Test-Raw-Measurement"></a>
* **Well Pressure Test Raw Measurement**<br>
  (OSDU entity type **WellPressureTestRawMeasurement** in group-type work-product-component) Description: _Entity aiming to capture raw measurements from Well Pressure Tests. It aims to capture single test file gathering raw measurements before any kind of processing, composing, interpretation or analysis_<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellPressureTestRawMeasurement](../../E-R/work-product-component/WellPressureTestRawMeasurement.1.1.0.md)
<a name="Well-Pressure-Test-Tool-Name"></a>
* **Well Pressure Test Tool Name**<br>
  (OSDU entity type **WellPressureTestToolName** in group-type reference-data) Description: _Long Name of the Tool used for a Well Pressure Test_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureTestToolName](../../E-R/reference-data/WellPressureTestToolName.1.0.0.md)
<a name="Well-Pressure-Test-Validity-Status"></a>
* **Well Pressure Test Validity Status**<br>
  (OSDU entity type **WellPressureTestValidityStatus** in group-type reference-data) Description: _List of Validity Status for any kind of Well Pressure Test (basically Failed or Valid)_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellPressureTestValidityStatus](../../E-R/reference-data/WellPressureTestValidityStatus.1.0.0.md)
<a name="Well-Product-Type"></a>
* **Well Product Type**<br>
  (OSDU entity type **WellProductType** in group-type reference-data) Description: _Product Type [Well Product Type] is the physical product(s) that can be attributed to any well component._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellProductType](../../E-R/reference-data/WellProductType.1.0.0.md)
<a name="Well-Role"></a>
* **Well Role**<br>
  (OSDU entity type **WellRole** in group-type reference-data) Description: _Role [Well Role] is the current purpose, whether planned or actual. If there are multiple Roles among a well’s components, the well may be assigned the facet value with the highest significance. The value of Role may change over the Life Cycle._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellRole](../../E-R/reference-data/WellRole.1.0.0.md)
<a name="Well-Site-Product-Type"></a>
* **Well Site Product Type**<br>
  (OSDU entity type **WellSiteProductType** in group-type reference-data) Description: _Type of product produced in context of the well site._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellSiteProductType](../../E-R/reference-data/WellSiteProductType.1.0.0.md)
<a name="Well-Site-Structure"></a>
* **Well Site Structure**<br>
  (OSDU entity type **WellSiteStructure** in group-type master-data) Description: _A fixed location hosting one or more wells e.g. a Pad, Platform, Subsea Template for the purpose of oil and gas development. A WellSiteStructure can host an array of one or more Well Slot Locations. The WellSiteStructure schema is not intended to describe equipments and non-well facilities also present on location._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellSiteStructure](../../E-R/master-data/WellSiteStructure.1.0.0.md)
<a name="Well-Site-Structure-Type"></a>
* **Well Site Structure Type**<br>
  (OSDU entity type **WellSiteStructureType** in group-type reference-data) Description: _An oil and gas platform is a facility type that is designed to extract, process, and or store petroleum produced from one or more wells._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellSiteStructureType](../../E-R/reference-data/WellSiteStructureType.1.0.1.md)
<a name="Well-Status-Summary"></a>
* **Well Status Summary**<br>
  (OSDU entity type **WellStatusSummary** in group-type reference-data) Description: _Identifies the status of a well component in a way that may combine and-or summarize concepts found in other status facets. For example, a Well Status Summary of Gas Injector Shut-in, which contains commonly desired business information, combines concepts from Product Type, Fluid Direction, and Condition._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellStatusSummary](../../E-R/reference-data/WellStatusSummary.1.0.0.md)
<a name="Well-Technology-Applied"></a>
* **Well Technology Applied**<br>
  (OSDU entity type **WellTechnologyApplied** in group-type reference-data) Description: _Well technology benchmarking categories, e.g. Coil tubing, Hammer drilling, etc._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellTechnologyApplied](../../E-R/reference-data/WellTechnologyApplied.1.0.0.md)
<a name="Well-Treatment-Type"></a>
* **Well Treatment Type**<br>
  (OSDU entity type **WellTreatmentType** in group-type reference-data) Description: _The activity to enhance the reservoir properties for fluid flow or to repair damage to the formation and/or the production string(s)._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellTreatmentType](../../E-R/reference-data/WellTreatmentType.1.0.1.md)
<a name="Well-known-Schema"></a>
* **Well-known Schema**<br>
  A standardized schema associated with a 'type' of the data, i.e. `kind` within a data domain. The schema will be most accommodative for that data domain type. It is a schema that is used to understand and/or process data in particular for discovery, exchange and default consumption. Schemas delivered by OSDU Data Definitions all carry the `wks` identifier in the `kind` and are well-known by definition.
<a name="Wellbore"></a>
* **Wellbore**<br>
  (OSDU entity type **Wellbore** in group-type master-data) Description: _A hole in the ground extending from a point at the earth's surface to the maximum point of penetration._<br>
    &rarr; _OSDU types/schemas:_ [master-data--Wellbore](../../E-R/master-data/Wellbore.1.5.1.md)
<a name="Wellbore-Architecture"></a>
* **Wellbore Architecture**<br>
  (OSDU entity type **WellboreArchitecture** in group-type master-data) Description: _Describes the physical structures for a borehole_<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellboreArchitecture](../../E-R/master-data/WellboreArchitecture.1.2.0.md)
<a name="Wellbore-Fluid-Type"></a>
* **Wellbore Fluid Type**<br>
  (OSDU entity type **WellboreFluidType** in group-type reference-data) Description: _The type of fluid present in the wellbore at the time of the wellbore activity, not to be confused with WellProductType which is the produced fluid of the wellbore._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellboreFluidType](../../E-R/reference-data/WellboreFluidType.1.0.0.md)
<a name="Wellbore-Hold-Up-Depth"></a>
* **Wellbore Hold Up Depth**<br>
  (OSDU entity type **WellboreHoldUpDepth** in group-type master-data) Description: _A depth or depth interval where damage to the outer casing / tubing or other material in the pipe or annulus prevents tool passage to the designed drift diameter._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellboreHoldUpDepth](../../E-R/master-data/WellboreHoldUpDepth.1.0.0.md)
<a name="Wellbore-Interval-Set"></a>
* **Wellbore Interval Set**<br>
  (OSDU entity type **WellboreIntervalSet** in group-type work-product-component) Description: _Define the geologic unit (including stratigraphic units) or fluid intervals along the wellbore, independent or based on markers  (defined in one or several WellboreMarkerSets)._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellboreIntervalSet](../../E-R/work-product-component/WellboreIntervalSet.1.3.1.md)
<a name="Wellbore-Marker-Set"></a>
* **Wellbore Marker Set**<br>
  (OSDU entity type **WellboreMarkerSet** in group-type work-product-component) Description: _Wellbore Markers identify the depth in a wellbore, measured below a reference elevation, at which a person or an automated process identifies a noteworthy observation, which is usually a change in the rock that intersects that wellbore. Formation Marker data includes attributes/properties that put these depths in context. Formation Markers are sometimes known as picks or formation tops._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellboreMarkerSet](../../E-R/work-product-component/WellboreMarkerSet.1.5.1.md)
<a name="Wellbore-Opening"></a>
* **Wellbore Opening**<br>
  (OSDU entity type **WellboreOpening** in group-type master-data) Description: _A measured depth range within a Wellbore that is constructed to put the Wellbore annulus in contact with one or more stratigraphic zones for the purpose of injection, production or service. WellboreOpening interval ranges are always stratigraphically aligned, regardless of type._<br>
    &rarr; _OSDU types/schemas:_ [master-data--WellboreOpening](../../E-R/master-data/WellboreOpening.1.2.0.md)
<a name="Wellbore-Opening-State-Type"></a>
* **Wellbore Opening State Type**<br>
  (OSDU entity type **WellboreOpeningStateType** in group-type reference-data) Description: _Wellbore Opening State Type describes the physical state history of the Wellbore Opening that is significant for monitoring the completion and inform regulators and/or business stakeholders. Values are Open, Closed and Squeezed._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellboreOpeningStateType](../../E-R/reference-data/WellboreOpeningStateType.1.0.0.md)
<a name="Wellbore-Opening-Type"></a>
* **Wellbore Opening Type**<br>
  (OSDU entity type **WellboreOpeningType** in group-type reference-data) Description: _The type of opening to enable flow between the wellbore and the reservoir._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellboreOpeningType](../../E-R/reference-data/WellboreOpeningType.1.0.1.md)
<a name="Wellbore-Reason"></a>
* **Wellbore Reason**<br>
  (OSDU entity type **WellboreReason** in group-type reference-data) Description: _A general description of the technical or operational reason for drilling a wellbore._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellboreReason](../../E-R/reference-data/WellboreReason.1.0.1.md)
<a name="Wellbore-Trajectory"></a>
* **Wellbore Trajectory**<br>
  (OSDU entity type **WellboreTrajectory** in group-type work-product-component) Description: _Work Product Component describing an individual instance of a wellbore trajectory data object. Also called a directional or deviation survey, wellbore trajectory is data that is used to calculate the position and spatial uncertainty of a planned or actual wellbore in 2-dimensional and 3-dimensional space._<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellboreTrajectory](../../E-R/work-product-component/WellboreTrajectory.1.4.0.md)
<a name="Wellbore-Trajectory-Type"></a>
* **Wellbore Trajectory Type**<br>
  (OSDU entity type **WellboreTrajectoryType** in group-type reference-data) Description: _Profile Type [Well Profile Type, Wellbore Trajectory Type] is the general geometry of the wellbore relative to the vertical plane. The specific criteria may vary by operator or regulator. The facet value may change if conditions encountered during drilling are not what was planned or permitted._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellboreTrajectoryType](../../E-R/reference-data/WellboreTrajectoryType.1.0.0.md)
<a name="Wellhead-Connection"></a>
* **Wellhead Connection**<br>
  (OSDU entity type **WellheadConnection** in group-type reference-data) Description: _Current wellhead connection_<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WellheadConnection](../../E-R/reference-data/WellheadConnection.1.0.0.md)
<a name="Wettability-Index-Type"></a>
* **Wettability Index Type**<br>
  (OSDU entity type **WettabilityIndexType** in group-type reference-data) Description: _The type of wettability index reported; e.g. AmottHarvey or USBM._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WettabilityIndexType](../../E-R/reference-data/WettabilityIndexType.1.0.0.md)
<a name="Wettability-Phase-Type"></a>
* **Wettability Phase Type**<br>
  (OSDU entity type **WettabilityPhaseType** in group-type reference-data) Description: _Identifies how a liquid phase interacts with a dissimilar solid or liquid phase, such as by spreading out and adhering to a solid surface or by forming droplets on it. This behavior is largely defined by the contact angle, where a smaller angle indicates better wetting properties, and a larger angle indicates poor wetting._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WettabilityPhaseType](../../E-R/reference-data/WettabilityPhaseType.1.0.0.md)
<a name="WKE"></a>
* **WKE**<br>
  An entity which **best** represents that entity type. E.g., A Wellbore that is created by merging the most correct information from various sources available for that Wellbore. A log that is tagged as the best log by a SME. WKE has the same schema as the WKS for that domain data type.<br>
<a name="WKS"></a>
* **WKS**<br>
  Acronym<br>
    &rarr; _See also_ [Well-known Schema](#Well-known-Schema).
<a name="WO-Gn-Cycle-Notation"></a>
* **WO Gn Cycle Notation**<br>
  (OSDU entity type **WOGnCycleNotation** in group-type reference-data) Description: _Values that capture the saturation dynamics - that is, whether water, oil, or gas is increasing, decreasing, or remaining constant, and the cycle number._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WOGnCycleNotation](../../E-R/reference-data/WOGnCycleNotation.1.0.0.md)
<a name="Word-Format-Type"></a>
* **Word Format Type**<br>
  (OSDU entity type **WordFormatType** in group-type reference-data) Description: _Reference data for primitive data format types which describe the computer interpretation of a storage word, such as Integer, Float._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WordFormatType](../../E-R/reference-data/WordFormatType.1.0.0.md)
<a name="Work-Product"></a>
* **Work Product**<br>
  (OSDU entity type **WorkProduct** in group-type work-product) Description: _A collection of work product components such as might be produced by a business activity and which is delivered to the data platform for loading._<br>
    &rarr; _OSDU types/schemas:_ [work-product--WorkProduct](../../E-R/work-product/WorkProduct.1.0.0.md)
<a name="work-product"></a>
* **work-product**<br>
  An OSDU group-type. <br>
  A work product is a set of work product components brought together to the data platform for ingestion. This set may<br>
  comprise different entity types and with different genesis. What ties them together is only that they have been<br>
  delivered together for ingestion. A close analogy in the physical world is a “shipment” in that it represents a package<br>
  of materials brought to the “door” of the data system from the outside to be cataloged at that time. This entity is<br>
  helpful for audit purposes and for preventing orphans when business relationships are missing. There is only one entity<br>
  type: work product.<br>
  Sometimes, it may actually be a shipment. In this case, the properties of WorkProduct may be used to capture information<br>
  from the transmittal. For example, Name can be the shipment identifier, bar code, and so on. An AuthorID can be the<br>
  company name of the supplier. The transmittal or other supplied documents can be stored as “Documents” and included in<br>
  the set of components.
<a name="work-product-component"></a>
* **work-product-component**<br>
  A typed, smallest independently usable unit of business data content transferred to OSDU, often as part of a Work Product. Each Work Product Component consists of one or more data content units known as OSDU datasets.
<a name="work-product-component-type"></a>
* **work-product-component type**<br>
  The schema identifier for a work-product-component kind.<br>
    &rarr; _See also_ [kind](#kind).
<a name="Workflow-Persona-Type"></a>
* **Workflow Persona Type**<br>
  (OSDU entity type **WorkflowPersonaType** in group-type reference-data) Description: _Name of the role or personas that the record is technical assurance value is valid or not valid for._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WorkflowPersonaType](../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)
<a name="Workflow-Usage-Type"></a>
* **Workflow Usage Type**<br>
  (OSDU entity type **WorkflowUsageType** in group-type reference-data) Description: _Describes the workflows that the technical assurance value is valid or not valid for._<br>
    &rarr; _OSDU types/schemas:_ [reference-data--WorkflowUsageType](../../E-R/reference-data/WorkflowUsageType.1.0.1.md)
<a name="Wrench-Ocean-Continent"></a>
* **Wrench Ocean-Continent**<br>
  (BasinType) Pullapart (strike-slip) basin formed at extensional (non-restraining) offset in strike slip fault system at margin between continental and oceanic crustal blocks. Wrench Ocean-Continent is represented as BasinType in OSDU.<br>
    &rarr; _OSDU types/schemas:_ [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md), [master-data--Basin](../../E-R/master-data/Basin.1.2.0.md)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## X

<a name="x-osdu-indexing"></a>
* **x-osdu-indexing**<br>
  (OSDU) Indexing is a core platform system service, which is driven by the schema definitions. Arrays of objects challenge the indexer; a number of options are available to guide the indexer to deliver good enough support for the expected queries.<br>
    &rarr; _Schema Usage Guide:_ [Appendix A.2 OSDU System Services](90-References.md#appendix-a2-osdu-system-services), [Appendix D.3.3 `x-osdu-indexing` - Indexing Hints](93-OSDU-Schemas.md#appendix-d33-x-osdu-indexing-indexing-hints)
<a name="x-osdu-relationship"></a>
* **x-osdu-relationship**<br>
  (OSDU Schema Extension Tag) An OSDU JSON schema extension tag, which denotes the expected target entity type in a relationship.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.3.2 `x-osdu-relationship` - Relationship Decorators](93-OSDU-Schemas.md#appendix-d32-x-osdu-relationship-relationship-decorators)
<a name="x-osdu-virtual-properties"></a>
* **x-osdu-virtual-properties**<br>
  (OSDU Schema Extension Tag) A JSON structure to disambiguate 'competing' schema properties like locations and names.<br>
    &rarr; _Schema Usage Guide:_ [Appendix D.3.1 `x-osdu-virtual-properties` VirtualProperties](93-OSDU-Schemas.md#appendix-d31-x-osdu-virtual-properties-virtualproperties)

Quick Navigation:  [4](#4) [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Z](#z) - [Top of Page](#TOC)

## Z

<a name="Zone-Zone-Set"></a>
* **Zone, Zone Set**<br>
  (OSDU) Interpretations, representations and properties of intersections of volume features with the wellbore path (trajectory).<br>
    &rarr; _OSDU types/schemas:_ [work-product-component--WellboreIntervalSet](../../E-R/work-product-component/WellboreIntervalSet.1.3.1.md)

---

## Links

1. Return to the [Beginning of the Chapter](#TOC)
2. Next Chapter: [Appendix C Proposals](92-Proposals.md)
3. Browse to the [Schema Usage Guide Table of Contents](../README.md)