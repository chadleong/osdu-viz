<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellboreIntervalSet:1.2.0`

Changes between [osdu:wks:work-product-component--WellboreIntervalSet:1.1.0](../../../E-R/work-product-component/WellboreIntervalSet.1.1.0.md) and [osdu:wks:work-product-component--WellboreIntervalSet:1.2.0](../../../E-R/work-product-component/WellboreIntervalSet.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.TechnicalAssurances[].Reviewers[]_|_object_|_Abstract Contact_|_The individuals, or roles, that reviewed and determined the technical assurance value Fragment Description: An object with properties that describe a specific person or other point-of-contact (like an email distribution list) that is relevant in this context (like a given data set or business project). The contact specified may be either internal or external to the organisation (something denoted via the Organisation object that is referenced). Note that some properties contain personally identifiable information, so it might not be appropriate to populate all properties in all scenarios._|Changes in: Included Schema Fragment Version, Indexing hint|
|_data.TechnicalAssurances[].AcceptableUsage[]_|_object_|_AcceptableUsage_|_List of workflows and/or personas that the technical assurance value is valid for (e.g., This data is trusted for Seismic Processing) Fragment Description: Describes the workflows and/or personas that the technical assurance value is valid for (e.g., This data has a technical assurance property of "trusted" and it is suitable for Seismic Interpretation)._|Changes in: Included Schema Fragment Version, Example|
|data.TechnicalAssurances[].AcceptableUsage[].WorkflowUsageTypeID &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)|string|Workflow Usage Type ID|Name of the business activities, processes, and/or workflows that the record's technical assurance value is valid for.|Added property|
|data.TechnicalAssurances[].AcceptableUsage[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|Workflow Persona Type ID|Name of the role or personas that the record's technical assurance value is valid for.|Added property|
|data.TechnicalAssurances[].AcceptableUsage[].DataQualityRuleSetID &rarr; [DataQualityRuleSet](../../../E-R/reference-data/DataQualityRuleSet.1.0.0.md)|string|Data Quality Rule Set ID|The DataQualityRuleSet, which had to pass successfully to achieve this level of technical assurance.|Added property|
|data.TechnicalAssurances[].AcceptableUsage[].DataQualityID &rarr; [DataQuality](../../../E-R/work-product-component/DataQuality.2.0.0.md)|string|data Quality ID|The relationship to a work-product-component--DataQuality assessment record, which was used as the basis for this decision.|Added property|
|~~data.TechnicalAssurances[].AcceptableUsage[].WorkflowUsage &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)~~|~~string~~|~~Workflow Usage~~|~~DEPRECATED: superseded by WorkflowUsageTypeID. Name of the business activities, processes, and/or workflows that the record is technical assurance value is valid for.~~|**_Deprecated_: superseded by property "WorkflowUsageTypeID**"|
|~~data.TechnicalAssurances[].AcceptableUsage[].WorkflowPersona &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)~~|~~string~~|~~Workflow Persona~~|~~DEPRECATED: superseded by WorkflowPersonaTypeID. Name of the role or personas that the record is technical assurance value is valid for.~~|**_Deprecated_: superseded by property "WorkflowPersonaTypeID**"|
|~~data.TechnicalAssurances[].AcceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.1.md)~~|~~string~~|~~Quality Data Rule Set ID~~|~~DEPRECATED: superseded by DataQualityRuleSetID referring to DataQualityRuleSet. The QualityDataRuleSet, which had to pass successfully to achieve this level of technical assurance.~~|**_Deprecated_: superseded by property "DataQualityRuleSetID**"|
|_data.TechnicalAssurances[].UnacceptableUsage[]_|_object_|_UnacceptableUsage_|_List of workflows and/or personas that the technical assurance value is not valid for (e.g., This data is not trusted for seismic interpretation) Fragment Description: Describes the workflows and/or personas that the technical assurance value is not valid for (e.g., This data has a technical assurance property of "trusted", but it is not suitable for Seismic Interpretation)._|Changes in: Included Schema Fragment Version, Example|
|data.TechnicalAssurances[].UnacceptableUsage[].WorkflowUsageTypeID &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)|string|Workflow Usage Type ID|Name of the business activities, processes, and/or workflows that the record's technical assurance value is not valid for.|Added property|
|data.TechnicalAssurances[].UnacceptableUsage[].WorkflowPersonaTypeID &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)|string|Workflow Persona Type ID|Name of the role or personas that the record is technical assurance value is not valid for.|Added property|
|data.TechnicalAssurances[].UnacceptableUsage[].DataQualityRuleSetID &rarr; [DataQualityRuleSet](../../../E-R/reference-data/DataQualityRuleSet.1.0.0.md)|string|Data Quality Rule Set ID|The DataQualityRuleSet, which did not pass successfully to achieve this level of technical assurance.|Added property|
|data.TechnicalAssurances[].UnacceptableUsage[].DataQualityID &rarr; [DataQuality](../../../E-R/work-product-component/DataQuality.2.0.0.md)|string|data Quality ID|The relationship to a work-product-component--DataQuality assessment record, which was used as the basis for this decision.|Added property|
|~~data.TechnicalAssurances[].UnacceptableUsage[].WorkflowUsage &rarr; [WorkflowUsageType](../../../E-R/reference-data/WorkflowUsageType.1.0.1.md)~~|~~string~~|~~Workflow Usage~~|~~DEPRECATED: superseded by WorkflowUsageTypeID. Name of the business activities, processes, and/or workflows that the record is technical assurance value is not valid for.~~|**_Deprecated_: superseded by property "WorkflowUsageTypeID**"|
|~~data.TechnicalAssurances[].UnacceptableUsage[].WorkflowPersona &rarr; [WorkflowPersonaType](../../../E-R/reference-data/WorkflowPersonaType.1.0.1.md)~~|~~string~~|~~Workflow Persona~~|~~DEPRECATED: superseded by WorkflowPersonaTypeID. Name of the role or personas that the record is technical assurance value is not valid for.~~|**_Deprecated_: superseded by property "WorkflowPersonaTypeID**"|
|~~data.TechnicalAssurances[].UnacceptableUsage[].QualityDataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.1.md)~~|~~string~~|~~Quality Data Rule Set ID~~|~~DEPRECATED: superseded by DataQualityRuleSetID referring to DataQualityRuleSet. The QualityDataRuleSet, which did not pass successfully to achieve this level of technical assurance.~~|**_Deprecated_: superseded by property "DataQualityRuleSetID**"|
|data.IntervalProperties.KeyColumns[].UnitOfMeasureID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|data.IntervalProperties.KeyColumns[].ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|
|data.IntervalProperties.Columns[].UnitOfMeasureID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated of the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Added property|
|data.IntervalProperties.Columns[].ColumnName|string|Column Name|When describing a table column, e.g., in an associated dataset, this optional property allows the association of the record column definition(s) to dataset table column(s).|Added property|
|data.IntervalProperties.ColumnSize|integer|Size of columns|The count of elements in each column, i.e. the number of rows in the ColumnBasedTable. All columns must have the same size, including placeholder values for the undefined cells identified by ColumnValues[].UndefinedValueRows[].|Changes in: Included Schema Fragment Version, Description|
|data.IntervalProperties.ColumnValues[].UndefinedValueRows[]|integer|Undefined value rows|The row indexes for which the values are flagged as undefined. The first element has index 0.|Changes in: Included Schema Fragment Version, Description|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)