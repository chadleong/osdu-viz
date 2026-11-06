<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--OperationsReport:1.3.0`

Changes between [osdu:wks:master-data--OperationsReport:1.2.0](../../../E-R/master-data/OperationsReport.1.2.0.md) and [osdu:wks:master-data--OperationsReport:1.3.0](../../../E-R/master-data/OperationsReport.1.3.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Personnel[].HeadCount|number|Head Count|Number of persons on board or on location for the selected company/organization. HeadCount should be reported as a non-negative integer.|Changed|
|data.Inventory[].Name|string|Name|Name or type of inventory item.|Added property|
|~~data.Inventory[].ItemName~~|~~number~~|~~Item Name~~|~~DEPRECATED: This property is incorrectly defined as a number, please use the Name property instead. Name or type of inventory item.~~|Deprecated|
|_data.JobContact[]_|_object_|_Abstract Contact_|_Operator personnel contact information on an operations report Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changed|
|data.JobContact[].EmailAddress|string|Email Address|Contact email address. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|data.JobContact[].PhoneNumber|string|Phone Number|Contact phone number. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|
|data.JobContact[].RoleTypeID &rarr; [ContactRoleType](../../../E-R/reference-data/ContactRoleType.1.0.0.md)|string|Role Type ID|The identifier of a reference value for the role of the contact within the associated organisation, such as Account owner, Sales Representative, Technical Support, Project Manager, Party Chief, Client Representative, Senior Observer.|Changed|
|data.JobContact[].DataGovernanceRoleTypeID &rarr; [DataGovernanceRoleType](../../../E-R/reference-data/DataGovernanceRoleType.1.0.0.md)|string|DataGovernanceRoleTypeID|The data governance role assigned to this contact if and only if the context has a data governance role (in context of TechnicalAssurance). The value is kept absent in all other cases.|Added property|
|data.JobContact[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|WorkflowPersonaTypeID|The persona in context of workflows associated with this contact, as used in TechnicalAssurance.|Added property|
|data.JobContact[].Comment|string|Comment|Additional information about the contact|Changed|
|data.JobContact[].OrganisationID &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md)|string|Organisation ID|Reference to the company the contact is associated with.|Changed|
|data.JobContact[].Name|string|Name|Name of the individual contact. Property may be left empty where it is inappropriate to provide personally identifiable information.|Changed|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)