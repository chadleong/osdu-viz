<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Risk:2.0.0`

Changes between [osdu:wks:master-data--Risk:1.2.0](../../../E-R/master-data/Risk.1.2.0.md) and [osdu:wks:master-data--Risk:2.0.0](../../../E-R/master-data/Risk.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Preventions[]_|_object_|_Risk Response_|_A textual description of the steps to prevent this risk Fragment Description: Describe a set of action to prevent for a risk or to mitigate its consequences_|**_Breaking Change: REMOVED_**|
|data.Preventions[].Name|string|Name|Name of the response|**_Breaking Change: REMOVED_**|
|data.Preventions[].Description|string|Description|General description of the response|**_Breaking Change: REMOVED_**|
|data.Preventions[].Status<br> &rarr; [RiskResponseStatus](../../../E-R/reference-data/RiskResponseStatus.1.0.0.md)|string|Status|Describes the status of the action such as (progress, done, canceled)|**_Breaking Change: REMOVED_**|
|_data.Preventions[].Responsibles[]_|_object_|_Abstract Contact_|_List of the staff responsible to proceed with the response. This is the 'by value' alternative to the 'by reference' data.Preventions[].ResponsiblesByReferenceIDs[]. Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].EmailAddress|string|Email Address|Contact email address. Property may be left empty where it is inappropriate to provide personally identifiable information.|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].PhoneNumber|string|Phone Number|Contact phone number. Property may be left empty where it is inappropriate to provide personally identifiable information.|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].RoleTypeID<br> &rarr; [ContactRoleType](../../../E-R/reference-data/ContactRoleType.1.0.0.md)|string|Role Type ID|The identifier of a reference value for the role of the contact within the associated organisation, such as Account owner, Sales Representative, Technical Support, Project Manager, Party Chief, Client Representative, Senior Observer.|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].DataGovernanceRoleTypeID<br> &rarr; [DataGovernanceRoleType](../../../E-R/reference-data/DataGovernanceRoleType.1.0.0.md)|string|DataGovernanceRoleTypeID|The data governance role assigned to this contact if and only if the context has a data governance role (in context of TechnicalAssurance). The value is kept absent in all other cases.|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].WorkflowPersonaTypeID<br> &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|WorkflowPersonaTypeID|The persona in context of workflows associated with this contact, as used in TechnicalAssurance.|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].Comment|string|Comment|Additional information about the contact|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].OrganisationID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Organisation ID|Reference to the company the contact is associated with.|**_Breaking Change: REMOVED_**|
|data.Preventions[].Responsibles[].Name|string|Name|Name of the individual contact. Property may be left empty where it is inappropriate to provide personally identifiable information.|**_Breaking Change: REMOVED_**|
|data.Preventions[].ResponsiblesByReferenceIDs[]<br> &rarr; [UserProfile](../../../E-R/master-data/UserProfile.1.0.0.md)|string|Responsibles by Reference IDs|List of the staff responsible to proceed with the response as references to UserProfile records. This is the 'by reference' alternative to 'by value' in data.Preventions[].Responsibles[].|**_Breaking Change: REMOVED_**|
|data.Preventions[].Deadline|number|Deadline|Date the response must be completed|**_Breaking Change: REMOVED_**|
|data.Preventions[].UpdateDate|number|Update Date|Date the description of the response has been updated.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Mitigations[]_|_object_|_Risk Response_|_Describes the measure or measures that may be applied to the risk to mitigate its consequences Fragment Description: Describe a set of action to prevent for a risk or to mitigate its consequences_|Changes in: Indexing hint|
|data.WellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Wellbore ID|Identifier of the planned Wellbore|Changes in: Required?|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)