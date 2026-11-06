<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Reservoir:1.0.0`

Changes between [osdu:wks:master-data--Reservoir:0.0.0](../../../E-R/master-data/Reservoir.0.0.0.md) and [osdu:wks:master-data--Reservoir:1.0.0](../../../E-R/master-data/Reservoir.1.0.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Preliminary placeholder for the Reservoir schema._
  * New Description: **_A reservoir is a subsurface rock formation which 1) is a volume of porous and permeable rock and 2) contains an individual and separate natural accumulation of moveable fluids that are confined by impermeable rock formations. Fluids may be produced from a reservoir and injected into a reservoir for increased recovery, storage or disposal._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Name|string|Name|Name of the reservoir or reservoir segment.|Changes in: Included Schema Fragment Version, Description|
|data.ReservoirUnitArea|number|ReservoirUnitArea|The productive area is the measured or estimated total area of the reservoir unit considered, usually the area within the hydrocarbon-water contact.|Added property|
|data.ReservoirUnitPressureDatumTVDSS|number|Reservoir Unit Pressure Datum True Vertical Depth Subsea|This is the true vertical depth of the permanent reservoir unit datum used for pressure. This is measured vertically downwards from mean sea level.|Added property|
|data.IsSegmented|boolean|Is Segmented|This flag indicates that this reservoir is composed of reservoir segments, and that the characteristics of the segments should be aggregated to best describe the characteristics of the reservoir. When not segmented, the single reservoir segment describes the properties of the entire reservoir. If more than one reservoir segment is defined for this reservoir, this flag should be set and the characteristics for the reservoir should be calculated as summary data over all its reservoir segments.|Added property|
|_data.Status[]_|_object_|_Status_|_Array of Historical Status of a production model element as exploration, appraisal and development. The operational or legal status of the reservoir. Fragment Description: The operational or legal status of the reservoir_|Added property|
|data.Status[].StatusTypeID &rarr; [ReservoirStatusType](../../../E-R/reference-data/ReservoirStatusType.1.0.0.md)|string|Status Type Identifier|Status description, e.g., Discovery, FirstProduction, Active, FirstInjection, Abandonned.|Added property|
|data.Status[].StatusDate|string|Status Date|Date of a status change|Added property|
|data.Status[].EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|Added property|
|data.Status[].TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|Added property|
|_data.CurrentStatus_|_object_|_Current Status_|_Currently active Status of a production model element as exploration, appraisal and development. The operational or legal status of the reservoir._|Added property|
|data.CurrentStatus.StatusTypeID &rarr; [ReservoirStatusType](../../../E-R/reference-data/ReservoirStatusType.1.0.0.md)|string|Status Type Identifier|Status description, e.g., Discovery, FirstProduction, Active, FirstInjection, Abandonned.|Added property|
|data.CurrentStatus.StatusDate|string|Status Date|Date of a status change|Added property|
|data.CurrentStatus.EffectiveDateTime|string|Effective Date Time|The date and time at which the reservoir status type becomes effective.|Added property|
|data.CurrentStatus.TerminationDateTime|string|Termination Date Time|The date and time at which the reservoir status type is no longer in effect.|Added property|
|data.SectorID &rarr; [PersistedCollection](../../../E-R/work-product-component/PersistedCollection.1.2.0.md)|string|Sector Identifier|Identifier of the Persisted Collection in which are referred the whole set of child segments constituting a comprehensive sector.|Added property|
|data.ParentReservoirEntityID &rarr; [Reservoir](../../../E-R/master-data/Reservoir.1.0.0.md) &rarr; [ReservoirSegment](../../../E-R/master-data/ReservoirSegment.1.0.0.md)|string|Parent Reservoir Entity Identifier|Identifier linking to the parent reservoir entity (It could be either a segment or a reservoir)|Added property|
|_data.BusinessAssociate_|_object_|_Abstract Contact_|_Unique identifier for a business associate, such as a person, company, regulatory agency, government or consortium. Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Added property|
|data.BusinessAssociate.EmailAddress|string|Email Address|Contact email address. Property may be left empty where it is inappropriate to provide personally identifiable information.|Added property|
|data.BusinessAssociate.PhoneNumber|string|Phone Number|Contact phone number. Property may be left empty where it is inappropriate to provide personally identifiable information.|Added property|
|data.BusinessAssociate.RoleTypeID &rarr; [ContactRoleType](../../../E-R/reference-data/ContactRoleType.1.0.0.md)|string|Role Type ID|The identifier of a reference value for the role of the contact within the associated organisation, such as Account owner, Sales Representative, Technical Support, Project Manager, Party Chief, Client Representative, Senior Observer.|Added property|
|data.BusinessAssociate.Comment|string|Comment|Additional information about the contact|Added property|
|data.BusinessAssociate.OrganisationID &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Organisation ID|Reference to the company the contact is associated with.|Added property|
|data.BusinessAssociate.Name|string|Name|Name of the individual contact. Property may be left empty where it is inappropriate to provide personally identifiable information.|Added property|
|data.ReservoirTypeID &rarr; [ReservoirType](../../../E-R/reference-data/ReservoirType.1.0.0.md)|string|Reservoir Type ID|The type of hydrocarbon reservoir described, such as conventional or oil sands deposit. May also indicate a reservoir created for administrative reasons or for geologic (stratigraphic) definitions.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)