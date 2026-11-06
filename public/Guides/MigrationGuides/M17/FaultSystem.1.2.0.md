<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--FaultSystem:1.3.0`

Changes between [osdu:wks:work-product-component--FaultSystem:1.2.0](../../../E-R/work-product-component/FaultSystem.1.2.0.md) and [osdu:wks:work-product-component--FaultSystem:1.3.0](../../../E-R/work-product-component/FaultSystem.1.3.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Datasets[]|string|Datasets|The record id, which identifies this OSDU File or dataset resource.|Changed|
|data.DDMSDatasets[]|string|DDMS Datasets|An array of references to content in Domain Data Management Services represented by this work-product-component. The references are formed as URI following https://www.rfc-editor.org/rfc/rfc3986#page-16. This property is exclusively populated by DDMSs. If a work-product-component is represented in more than one DDMS, DDMSs are obliged to find the specific reference by inspecting the URI's authority values matching the DDMS id.|Added property|
|_data.Artefacts[]_|_object_|_Artefacts_|_An array of Artefacts - each artefact has a Role, Resource tuple. An artefact is distinct from the file, in the sense certain valuable information is generated during loading process (Artefact generation process). Examples include retrieving location data, performing an OCR which may result in the generation of artefacts which need to be preserved distinctly_|Changed|
|data.Artefacts[].RoleID &rarr; [ArtefactRole](../../../E-R/reference-data/ArtefactRole.1.0.0.md)|string|Role Id|The record id of this artefact's role.|Changed|
|data.Artefacts[].ResourceKind|string|Resource Kind|The kind or schema ID of the artefact. Resolvable with the Schema Service.|Changed|
|data.Artefacts[].ResourceID|string|Resource Id|The SRN which identifies this OSDU Artefact resource.|Changed|
|data.IsExtendedLoad|boolean|Is Extended Load|A flag that indicates if the work product component is undergoing an extended load.  It reflects the fact that the work product component is in an early stage and may be updated before finalization.|Changed|
|data.IsDiscoverable|boolean|Is Discoverable|A flag that indicates if the work product component is searchable, which means covered in the search index.|Changed|
|_data.TechnicalAssurances[]_|_object_|_AbstractTechnicalAssurance_|_Describes a record's overall suitability for general business consumption based on data quality. Clarifications: Since Certified is the highest classification of suitable quality, any further change or versioning of a Certified record should be carefully considered and justified. If a Technical Assurance value is not populated then one can assume the data has not been evaluated or its quality is unknown (=Unevaluated). Technical Assurance values are not intended to be used for the identification of a single "preferred" or "definitive" record by comparison with other records. Fragment Description: Describes a record's overall suitability for general business consumption based on level of trust._|Changed|
|data.TechnicalAssurances[].TechnicalAssuranceTypeID &rarr; [TechnicalAssuranceType](../../../E-R/reference-data/TechnicalAssuranceType.1.0.0.md)|string|Technical Assurance Type ID|Describes a record's overall suitability for general business consumption based on data quality. Clarifications: Since Certified is the highest classification of suitable quality, any further change or versioning of a Certified record should be carefully considered and justified. If a Technical Assurance value is not populated then one can assume the data has not been evaluated or its quality is unknown (=Unevaluated). Technical Assurance values are not intended to be used for the identification of a single "preferred" or "definitive" record by comparison with other records.|Changed|
|_data.TechnicalAssurances[].Reviewers[]_|_object_|_Abstract Contact_|_The individuals, or roles, that reviewed and determined the technical assurance value Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changed|
|data.TechnicalAssurances[].Reviewers[].EmailAddress|string|Email Address|Contact email address. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|data.TechnicalAssurances[].Reviewers[].PhoneNumber|string|Phone Number|Contact phone number. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|data.TechnicalAssurances[].Reviewers[].RoleTypeID &rarr; [ContactRoleType](../../../E-R/reference-data/ContactRoleType.1.0.0.md)|string|Role Type ID|The identifier of a reference value for the role of the contact within the associated organisation, such as Account owner, Sales Representative, Technical Support, Project Manager, Party Chief, Client Representative, Senior Observer.|Changed|
|data.TechnicalAssurances[].Reviewers[].DataGovernanceRoleTypeID &rarr; [DataGovernanceRoleType](../../../E-R/reference-data/DataGovernanceRoleType.1.0.0.md)|string|DataGovernanceRoleTypeID|The data governance role assigned to this contact if and only if the context has a data governance role (in context of TechnicalAssurance). The value is kept absent in all other cases.|Added property|
|data.TechnicalAssurances[].Reviewers[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|WorkflowPersonaTypeID|The persona in context of workflows associated with this contact, as used in TechnicalAssurance.|Added property|
|data.TechnicalAssurances[].Reviewers[].Comment|string|Comment|Additional information about the contact|Changed|
|data.TechnicalAssurances[].Reviewers[].OrganisationID &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md)|string|Organisation ID|Reference to the company the contact is associated with.|Changed|
|data.TechnicalAssurances[].Reviewers[].Name|string|Name|Name of the individual contact. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|_data.TechnicalAssurances[].AcceptableUsage[]_|_object_|_AcceptableUsage_|_List of workflows and/or personas that the technical assurance value is valid for (e.g., This data is trusted for Seismic Processing) Fragment Description: Describes the workflows and/or personas that the technical assurance value is valid for (e.g., This data has a technical assurance property of "trusted" and it is suitable for Seismic Interpretation)._|Changed|
|data.TechnicalAssurances[].AcceptableUsage[].WorkflowUsage &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)|string|Workflow Usage|Name of the business activities, processes, and/or workflows that the record is technical assurance value is valid for.|Changed|
|data.TechnicalAssurances[].AcceptableUsage[].WorkflowPersona &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|Workflow Persona|Name of the role or personas that the record is technical assurance value is valid for.|Changed|
|data.TechnicalAssurances[].AcceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.0.md)|string|Quality Data Rule Set ID|The QualityDataRuleSet, which had to pass successfully to achieve this level of technical assurance.|Added property|
|data.TechnicalAssurances[].AcceptableUsage[].ValueChainStatusTypeID &rarr; [ValueChainStatusType](../../../E-R/reference-data/ValueChainStatusType.1.0.0.md)|string|Value Chain Status Type ID|The stage of business where the record is acceptable for workflow usage.|Added property|
|_data.TechnicalAssurances[].UnacceptableUsage[]_|_object_|_UnacceptableUsage_|_List of workflows and/or personas that the technical assurance value is not valid for (e.g., This data is not trusted for seismic interpretation) Fragment Description: Describes the workflows and/or personas that the technical assurance value is not valid for (e.g., This data has a technical assurance property of "trusted", but it is not suitable for Seismic Interpretation)._|Changed|
|data.TechnicalAssurances[].UnacceptableUsage[].WorkflowUsage &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)|string|Workflow Usage|Name of the business activities, processes, and/or workflows that the record is technical assurance value is not valid for.|Changed|
|data.TechnicalAssurances[].UnacceptableUsage[].WorkflowPersona &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|Workflow Persona|Name of the role or personas that the record is technical assurance value is not valid for.|Changed|
|data.TechnicalAssurances[].UnacceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.0.md)|string|Quality Data Rule Set ID|The QualityDataRuleSet, which did not pass successfully to achieve this level of technical assurance.|Added property|
|data.TechnicalAssurances[].UnacceptableUsage[].ValueChainStatusTypeID &rarr; [ValueChainStatusType](../../../E-R/reference-data/ValueChainStatusType.1.0.0.md)|string|Value Chain Status Type ID|The stage of business where the record is not acceptable for workflow usage.|Added property|
|data.TechnicalAssurances[].EffectiveDate|string|Effective Date|Date when the technical assurance determination for this record has taken place|Changed|
|data.TechnicalAssurances[].Comment|string|Comment|Any additional context to support the determination of technical assurance|Changed|
|_data.NameAliases[]_|_object_|_AbstractAliasNames_|_Alternative names, including historical, by which this work-product-component is/has been known (it should include all the identifiers). Fragment Description: A list of alternative names for an object.  The preferred name is in a separate, scalar property.  It may or may not be repeated in the alias list, though a best practice is to include it if the list is present, but to omit the list if there are no other names.  Note that the abstract entity is an array so the $ref to it is a simple property reference._|Added property|
|data.NameAliases[].AliasName|string|Alias Name|Alternative Name value of defined name type for an object.|Added property|
|data.NameAliases[].AliasNameTypeID &rarr; [AliasNameType](../../../E-R/reference-data/AliasNameType.1.0.0.md)|string|Alias Name Type Id|A classification of alias names such as by role played or type of source, such as regulatory name, regulatory code, company code, international standard name, etc.|Added property|
|data.NameAliases[].DefinitionOrganisationID &rarr; [StandardsOrganisation](../../../E-R/reference-data/StandardsOrganisation.1.0.0.md) &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md)|string|Definition Organisation Id|The StandardsOrganisation (reference-data) or Organisation (master-data) that provided the name (the source).|Added property|
|data.NameAliases[].EffectiveDateTime|string|Effective Date Time|The date and time when an alias name becomes effective.|Added property|
|data.NameAliases[].TerminationDateTime|string|Termination Date Time|The data and time when an alias name is no longer in effect.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)