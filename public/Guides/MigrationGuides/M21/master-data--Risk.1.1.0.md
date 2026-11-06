<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Risk:1.2.0`

Changes between [osdu:wks:master-data--Risk:1.1.0](../../../E-R/master-data/Risk.1.1.0.md) and [osdu:wks:master-data--Risk:1.2.0](../../../E-R/master-data/Risk.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Possible risk potentially encountered during the run of a drilling program or a single string run._
  * New Description: **_The exposure to the possibility of loss, injury, or other adverse or unwelcome circumstance; a chance or situation involving such a possibility. For example, the possible loss, injury, or other adverse or unwelcome circumstance encountered during the run of a drilling program or a single drilling string run._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Preventions[].Responsibles[]_|_object_|_Abstract Contact_|_List of the staff responsible to proceed with the response. This is the 'by value' alternative to the 'by reference' data.Preventions[].ResponsiblesByReferenceIDs[]. Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changes in: Description|
|data.Preventions[].ResponsiblesByReferenceIDs[] &rarr; [UserProfile](../../../E-R/master-data/UserProfile.1.0.0.md)|string|Responsibles by Reference IDs|List of the staff responsible to proceed with the response as references to UserProfile records. This is the 'by reference' alternative to 'by value' in data.Preventions[].Responsibles[].|Added property|
|_data.Mitigations[].Responsibles[]_|_object_|_Abstract Contact_|_List of the staff responsible to proceed with the response. This is the 'by value' alternative to the 'by reference' data.Mitigations[].ResponsiblesByReferenceIDs[]. Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changes in: Description|
|data.Mitigations[].ResponsiblesByReferenceIDs[] &rarr; [UserProfile](../../../E-R/master-data/UserProfile.1.0.0.md)|string|Responsibles by Reference IDs|List of the staff responsible to proceed with the response as references to UserProfile records. This is the 'by reference' alternative to 'by value' in data.Mitigations[].Responsibles[].|Added property|
|_data.RiskResponsibles[]_|_object_|_Abstract Contact_|_Describes the responsibles (person/role/entity) for managing the risk 'by value'. This is an alternative to the 'by reference' property data.RiskResponsiblesByReferenceIDs[]. Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changes in: Description|
|data.RiskResponsiblesByReferenceIDs[] &rarr; [UserProfile](../../../E-R/master-data/UserProfile.1.0.0.md)|string|Risk Responsibles By Reference IDs|Describes the references to responsibles (person/role/entity) for managing the risk 'by reference' to UserProfile, an alternative to the 'by value' property data.RiskResponsibles[].|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)