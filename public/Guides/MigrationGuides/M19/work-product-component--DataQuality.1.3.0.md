<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--DataQuality:2.0.0`

Changes between [osdu:wks:work-product-component--DataQuality:1.3.0](../../../E-R/work-product-component/DataQuality.1.3.0.md) and [osdu:wks:work-product-component--DataQuality:2.0.0](../../../E-R/work-product-component/DataQuality.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _This is used to store result from a run of Data Quality Metric Evaluation engine. Captures summary information, such as which Business rule-set(s) and rule(s) have been used, when this was run and by whom. Detailed result (such as which rule failed, for which meta data item and what was offending value causing the rule to fail) is meant to be made available in a file that is linked to this work-product component. Through Lineage Assertion, this can relate to the entities which were used for the run of Evaluation engine, such as a collection of wells whose meta data were inspected by using a set of rules._
  * New Description: **_This is used to store the result from a run of a Data Quality Metric Evaluation engine. Captures summary information, such as which rule-set(s) and rule(s) have been used, when this was run and by whom. Detailed results may be associated with a dataset._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.BusinessRules_|_object_|_AbstractBusinessRule_|_The BusinessRules on which this quality evaluation is based on combined with the run status results. Fragment Description: The business rule is a collection of one or more data rule sets with their run status as well as a collection of individual rules with their run status._|**_Breaking Change: REMOVED_**|
|_data.BusinessRules.DataRuleSets[]_|_object_|_DataRuleSets_|_The list of data rule sets that is relevant for this business process. Each data rule set reference is associated with a run-status._|**_Breaking Change: REMOVED_**|
|data.BusinessRules.DataRuleSets[].DataRuleSetID &rarr; [QualityDataRuleSet](../../../E-R/reference-data/QualityDataRuleSet.2.0.1.md)|string|DataRuleSet ID|The relationship to the QualityDataRuleSet.|**_Breaking Change: REMOVED_**|
|data.BusinessRules.DataRuleSets[].DataRuleSetRunStatus|boolean|DataRuleSet Run Status|True if data ruleset rule has passed, False if data ruleset rule dit not pass.|**_Breaking Change: REMOVED_**|
|_data.BusinessRules.DataRules[]_|_object_|_DataRules_|_The list of individual data rules that is relevant for this business process. Each data rule reference is associated with a run-status._|**_Breaking Change: REMOVED_**|
|data.BusinessRules.DataRules[].DataRuleID &rarr; [QualityDataRule](../../../E-R/reference-data/QualityDataRule.1.1.1.md)|string|DataRule ID|The relationship to the individual QualityDataRule.|**_Breaking Change: REMOVED_**|
|data.BusinessRules.DataRules[].DataRuleRunStatus|boolean|DataRule Run Status|True if data rule has passed, False if data rule did not pass.|**_Breaking Change: REMOVED_**|
|_data.QualityMetric_|_object_|_AbstractQualityMetric_|_The list of evaluated quality metrics for the evaluated data record. Fragment Description: Generic quality metric schema fragment containing the universal properties for data profiling and data metrics of OSDU objects._|**_Breaking Change: REMOVED_**|
|data.QualityMetric.RunDateTime|string|Run Date Time|Run timestamp of the Business data quality ruleset.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataCountTotal|number|Metadata Count Total|Total number of metadata attributes for object in scope.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataNull|number|Metadata Null|The count of total number where metadata is not populated.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataCountFormat|number|Metadata Count Format|Total number of attributes defined in reference value lists.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataFormat|number|Metadata Format|The count of total number where attribute follows the defined reference value lists.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataCountPattern|number|Metadata Count Pattern|Total number of attributes with a pattern.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataPattern|number|Metadata Pattern|The count of total number of attributes that follow pattern.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataCountRequired|number|Metadata Count Required|Total number required attributes.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataCountRequiredTrue|number|Metadata Count Required True|The count of required metadata that are not populated.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataCountAdditionalProperty|number|Metadata Count Additional Property|Total number of additional properties.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataAdditionalPropertiesTrue|number|Metadata Additional Properties True|The count of total number of additional properties that are not populated.|**_Breaking Change: REMOVED_**|
|data.QualityMetric.MetadataScore|number|Metadata Score|The score in % for the evaluated record.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.EvaluatedRecordID|string|Evaluated Record ID|The reference to the evaluated data record. The record version number is required.|Changes in: Title|
|data.EvaluatedDDMSDatasets[]|string|Evaluated DDMS Datasets|If the quality assessment dealt with dataset content, then this array of URIs will contain the references to the optimized DDMS content used in the assessment. The reference is expected to be a member of the EvaluatedRecordID's data.DDMSDatasets[] list of URIs.|Added property|
|data.EvaluatedKind|string|Evaluated Kind|The EvaluatedRecordID's kind.|Added property|
|data.DataQualityRuleSetID &rarr; [DataQualityRuleSet](../../../E-R/reference-data/DataQualityRuleSet.1.0.0.md)|string|Data Quality Rule Set ID|The DataQualityRuleSet aggregating other rule sets and/or individual DataQualityRule instances, individually weighted in the context of the DataQualityRuleSet.|Added property|
|data.StartDateTime|string|Start Date Time|The date-time at which the quality assessment started.|Added property|
|_data.DataRules[]_|_object_|_DataRule_|_The data rules part of this assessment. Fragment Description: The DataQualityRule and the DataQualityRule properties captured at the time of assessment._|Added property|
|data.DataRules[].DataQualityRuleID &rarr; [DataQualityRule](../../../E-R/reference-data/DataQualityRule.1.0.0.md)|string|Data Quality Rule ID|The reference to the individual DataQualityRule record ID. This is a mandatory property value.|Added property|
|data.DataRules[].DataRulePurposeTypeID &rarr; [DataRulePurposeType](../../../E-R/reference-data/DataRulePurposeType.1.0.0.md)|string|Data Rule Purpose Type ID|The rule's purpose in the context of this DataQualityRule as captured during the assessment.|Added property|
|data.DataRules[].DataRuleStatement|string|Data Rule Statement|The rule's statement in natural language as captured during the assessment.|Added property|
|data.DataRules[].Weight|number|Weight|The rule's weight in the context of the DataQualityRuleSet as captured during the assessment.|Added property|
|data.DataRules[].DataRuleDimensionTypeID &rarr; [DataRuleDimensionType](../../../E-R/reference-data/DataRuleDimensionType.1.0.0.md)|string|Data Rule Dimension Type ID|The rule's dimension type reference as captured during the assessment.|Added property|
|data.DataRules[].DataQualityRuleStatusID &rarr; [DataQualityRuleStatus](../../../E-R/reference-data/DataQualityRuleStatus.1.0.0.md)|string|Data Quality Rule Status ID|The rule's evaluation status, e.g., Active, Inactive, Development.|Added property|
|data.DataRules[].ExecutionTime|number|Execution Time|The time it took to perform the assessment of this rule.|Added property|
|_data.DataRules[].AssessmentResults[]_|_object_|_AssessmentResult_|_The assessment results for this this rule. Fragment Description: The assessment of an executed QualityDataRule._|Added property|
|data.DataRules[].AssessmentResults[].QualityAssessmentStateID &rarr; [QualityAssessmentState](../../../E-R/reference-data/QualityAssessmentState.1.0.0.md)|string|Quality Assessment State ID|The assessment state for this rule.|Added property|
|data.DataRules[].AssessmentResults[].AssessedPartID|string|Assessed Part ID|The unique identifier of an assessment result in the AssessmentResults[] array. This identifier becomes relevant if the assessments run over arrays of objects. Typically the 'local object identifier' of the assessed object will be used. Example: WellLog has Curves[], then Curves[].CurveID would be used as AssessedPartID.|Added property|
|_data.DataRules[].AssessmentResults[].ExtensionProperties_|_object_|_Extension Properties_|_An extension point to add properties, which are not searchable._|Added property|
|data.DataRules[].AssessmentResults[].ExtensionProperties|object|Extension Properties|An extension point to add properties, which are not searchable.|Added property|
|data.MethodID &rarr; [QualityAssessmentMethod](../../../E-R/reference-data/QualityAssessmentMethod.1.0.0.md)|string|Method ID|The reference to the assessment calculation method.|Added property|
|data.TotalScore|number|Total Score|The assessment score in % aggregated for all dimension types.|Added property|
|_data.DimensionMetrics[]_|_object_|_DimensionMetric_|_The individual scores per dimension. Fragment Description: The assessment score per data rule dimension type and its weight._|Added property|
|data.DimensionMetrics[].DataRuleDimensionTypeID &rarr; [DataRuleDimensionType](../../../E-R/reference-data/DataRuleDimensionType.1.0.0.md)|string|Data Rule Dimension Type ID|The reference to the DataRuleDimensionType, to which score and weight are associated.|Added property|
|data.DimensionMetrics[].Score|number|Score|The assessment score in % aggregated for this dimension type.|Added property|
|data.DimensionMetrics[].Weight|number|Weight|The weight factor for this score for the overall score.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)