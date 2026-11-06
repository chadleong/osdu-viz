<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractTechnicalAssurance:1.1.0`

Changes between [osdu:wks:AbstractTechnicalAssurance:1.0.0](../../../E-R/abstract/AbstractTechnicalAssurance.1.0.0.md) and [osdu:wks:AbstractTechnicalAssurance:1.1.0](../../../E-R/abstract/AbstractTechnicalAssurance.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_Reviewers[]_|_object_|_Abstract Contact_|_The individuals, or roles, that reviewed and determined the technical assurance value Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changed|
|Reviewers[].EmailAddress|string|Email Address|Contact email address. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|Reviewers[].PhoneNumber|string|Phone Number|Contact phone number. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|Reviewers[].RoleTypeID &rarr; [ContactRoleType](../../../E-R/reference-data/ContactRoleType.1.0.0.md)|string|Role Type ID|The identifier of a reference value for the role of the contact within the associated organisation, such as Account owner, Sales Representative, Technical Support, Project Manager, Party Chief, Client Representative, Senior Observer.|Changed|
|Reviewers[].DataGovernanceRoleTypeID &rarr; [DataGovernanceRoleType](../../../E-R/reference-data/DataGovernanceRoleType.1.0.0.md)|string|DataGovernanceRoleTypeID|The data governance role assigned to this contact if and only if the context has a data governance role (in context of TechnicalAssurance). The value is kept absent in all other cases.|Added property|
|Reviewers[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|WorkflowPersonaTypeID|The persona in context of workflows associated with this contact, as used in TechnicalAssurance.|Added property|
|Reviewers[].Comment|string|Comment|Additional information about the contact|Changed|
|Reviewers[].OrganisationID &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md)|string|Organisation ID|Reference to the company the contact is associated with.|Changed|
|Reviewers[].Name|string|Name|Name of the individual contact. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|_AcceptableUsage[]_|_object_|_AcceptableUsage_|_List of workflows and/or personas that the technical assurance value is valid for (e.g., This data is trusted for Seismic Processing) Fragment Description: Describes the workflows and/or personas that the technical assurance value is valid for (e.g., This data has a technical assurance property of "trusted" and it is suitable for Seismic Interpretation)._|Changed|
|AcceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.0.md)|string|Quality Data Rule Set ID|The QualityDataRuleSet, which had to pass successfully to achieve this level of technical assurance.|Added property|
|AcceptableUsage[].ValueChainStatusTypeID &rarr; [ValueChainStatusType](../../../E-R/reference-data/ValueChainStatusType.1.0.0.md)|string|Value Chain Status Type ID|The stage of business where the record is acceptable for workflow usage.|Added property|
|_UnacceptableUsage[]_|_object_|_UnacceptableUsage_|_List of workflows and/or personas that the technical assurance value is not valid for (e.g., This data is not trusted for seismic interpretation) Fragment Description: Describes the workflows and/or personas that the technical assurance value is not valid for (e.g., This data has a technical assurance property of "trusted", but it is not suitable for Seismic Interpretation)._|Changed|
|UnacceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.0.md)|string|Quality Data Rule Set ID|The QualityDataRuleSet, which did not pass successfully to achieve this level of technical assurance.|Added property|
|UnacceptableUsage[].ValueChainStatusTypeID &rarr; [ValueChainStatusType](../../../E-R/reference-data/ValueChainStatusType.1.0.0.md)|string|Value Chain Status Type ID|The stage of business where the record is not acceptable for workflow usage.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)