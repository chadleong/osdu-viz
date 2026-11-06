<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractTechnicalAssurance:1.2.0`

Changes between [osdu:wks:AbstractTechnicalAssurance:1.1.0](../../../E-R/abstract/AbstractTechnicalAssurance.1.1.0.md) and [osdu:wks:AbstractTechnicalAssurance:1.2.0](../../../E-R/abstract/AbstractTechnicalAssurance.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_Reviewers[]_|_object_|_Abstract Contact_|_The individuals, or roles, that reviewed and determined the technical assurance value Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changes in: Indexing hint|
|_AcceptableUsage[]_|_object_|_AcceptableUsage_|_List of workflows and/or personas that the technical assurance value is valid for (e.g., This data is trusted for Seismic Processing) Fragment Description: Describes the workflows and/or personas that the technical assurance value is valid for (e.g., This data has a technical assurance property of "trusted" and it is suitable for Seismic Interpretation)._|Changes in: Example|
|AcceptableUsage[].WorkflowUsageTypeID &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)|string|Workflow Usage Type ID|Name of the business activities, processes, and/or workflows that the record's technical assurance value is valid for.|Added property|
|AcceptableUsage[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|Workflow Persona Type ID|Name of the role or personas that the record's technical assurance value is valid for.|Added property|
|AcceptableUsage[].DataQualityRuleSetID &rarr; [DataQualityRuleSet](../../../E-R/reference-data/DataQualityRuleSet.1.0.0.md)|string|Data Quality Rule Set ID|The DataQualityRuleSet, which had to pass successfully to achieve this level of technical assurance.|Added property|
|AcceptableUsage[].DataQualityID &rarr; [DataQuality](../../../E-R/work-product-component/DataQuality.2.0.0.md)|string|data Quality ID|The relationship to a work-product-component--DataQuality assessment record, which was used as the basis for this decision.|Added property|
|~~AcceptableUsage[].WorkflowUsage &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)~~|~~string~~|~~Workflow Usage~~|~~DEPRECATED: superseded by WorkflowUsageTypeID. Name of the business activities, processes, and/or workflows that the record is technical assurance value is valid for.~~|**_Deprecated_: superseded by property "WorkflowUsageTypeID**"|
|~~AcceptableUsage[].WorkflowPersona &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)~~|~~string~~|~~Workflow Persona~~|~~DEPRECATED: superseded by WorkflowPersonaTypeID. Name of the role or personas that the record is technical assurance value is valid for.~~|**_Deprecated_: superseded by property "WorkflowPersonaTypeID**"|
|~~AcceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.1.md)~~|~~string~~|~~Quality Data Rule Set ID~~|~~DEPRECATED: superseded by DataQualityRuleSetID referring to DataQualityRuleSet. The QualityDataRuleSet, which had to pass successfully to achieve this level of technical assurance.~~|**_Deprecated_: superseded by property "DataQualityRuleSetID**"|
|_UnacceptableUsage[]_|_object_|_UnacceptableUsage_|_List of workflows and/or personas that the technical assurance value is not valid for (e.g., This data is not trusted for seismic interpretation) Fragment Description: Describes the workflows and/or personas that the technical assurance value is not valid for (e.g., This data has a technical assurance property of "trusted", but it is not suitable for Seismic Interpretation)._|Changes in: Example|
|UnacceptableUsage[].WorkflowUsageTypeID &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)|string|Workflow Usage Type ID|Name of the business activities, processes, and/or workflows that the record's technical assurance value is not valid for.|Added property|
|UnacceptableUsage[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|Workflow Persona Type ID|Name of the role or personas that the record is technical assurance value is not valid for.|Added property|
|UnacceptableUsage[].DataQualityRuleSetID &rarr; [DataQualityRuleSet](../../../E-R/reference-data/DataQualityRuleSet.1.0.0.md)|string|Data Quality Rule Set ID|The DataQualityRuleSet, which did not pass successfully to achieve this level of technical assurance.|Added property|
|UnacceptableUsage[].DataQualityID &rarr; [DataQuality](../../../E-R/work-product-component/DataQuality.2.0.0.md)|string|data Quality ID|The relationship to a work-product-component--DataQuality assessment record, which was used as the basis for this decision.|Added property|
|~~UnacceptableUsage[].WorkflowUsage &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)~~|~~string~~|~~Workflow Usage~~|~~DEPRECATED: superseded by WorkflowUsageTypeID. Name of the business activities, processes, and/or workflows that the record is technical assurance value is not valid for.~~|**_Deprecated_: superseded by property "WorkflowUsageTypeID**"|
|~~UnacceptableUsage[].WorkflowPersona &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)~~|~~string~~|~~Workflow Persona~~|~~DEPRECATED: superseded by WorkflowPersonaTypeID. Name of the role or personas that the record is technical assurance value is not valid for.~~|**_Deprecated_: superseded by property "WorkflowPersonaTypeID**"|
|~~UnacceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.1.md)~~|~~string~~|~~Quality Data Rule Set ID~~|~~DEPRECATED: superseded by DataQualityRuleSetID referring to DataQualityRuleSet. The QualityDataRuleSet, which did not pass successfully to achieve this level of technical assurance.~~|**_Deprecated_: superseded by property "DataQualityRuleSetID**"|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)