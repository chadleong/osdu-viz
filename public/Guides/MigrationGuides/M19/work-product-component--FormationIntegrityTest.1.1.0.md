<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--FormationIntegrityTest:1.2.0`

Changes between [osdu:wks:work-product-component--FormationIntegrityTest:1.1.0](../../../E-R/work-product-component/FormationIntegrityTest.1.1.0.md) and [osdu:wks:work-product-component--FormationIntegrityTest:1.2.0](../../../E-R/work-product-component/FormationIntegrityTest.1.2.0.md) are listed below.

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
|data.WellboreID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.4.0.md)|string|WellboreID|Business natural key or code of the Wellbore to which this record belongs|Changes in: Title, Example|
|data.HoleSectionID &rarr; [HoleSection](../../../E-R/master-data/HoleSection.1.3.0.md)|string|Hole Section Identifier|Association to Hole Section in which FIT/LOT is performed|Changes in: Title, Description|
|data.OperationsReportID &rarr; [OperationsReport](../../../E-R/master-data/OperationsReport.1.4.0.md)|string|OperationsReportID|Operations report where the FIT/LOT test operation is described. Populated from Operations Report - used to pull Rig Name via Rig associated to  Report.|Changes in: Title, Description|
|_data.VerticalMeasurement_|_object_|_AbstractFacilityVerticalMeasurement_|_The well vertical measurement elevation reference for  test MD and TVD. Fragment Description: A location along a wellbore, _usually_ associated with some aspect of the drilling of the wellbore, but not with any intersecting _subsurface_ natural surfaces._|Changes in: Description|
|data.TestDateTime|string|Test Date/time|Date/time well integrity test was performed.|Changes in: Title, Description|
|data.MudBaseType &rarr; [MudBaseType](../../../E-R/reference-data/MudBaseType.1.0.0.md)|string|Mud Base Type|Type of mud base|Changes in: Description|
|data.SurfaceMudWeight|number|Surface Mud Weight|Mud Weight at surface at time of test|Changes in: Description, Example|
|data.StaticDownholeMudWeight|number|Static Downhole Mud Weight|Static Downhole Mud Weight|Changes in: Example|
|data.StaticDownholeMudWeightSource|string|Static Downhole Mud Weight Source|Source of Static Downhole Mud Weight|Changes in: Description, Example|
|data.SurfaceCalculatedInflectionPointDHEMW|number|Surface Calculated Inflection Point Downhole Equivalent Mud Weight|Surface calculated Downhole Inflection Point Equivalent Mud Weight|Changes in: Example|
|data.SurfaceCalculatedDHEMWMax|number|Surface Calculated DH EMW Max|Surface calculated Downhole Inflection Point Equivalent Mud Weight Maximum|Changes in: Example|
|data.SurfaceCalculated5MinDHShutInEMW|number|Surface Calculated 5 Minute Downhole Shut In Equivalent Mud Weight|Surface Calculated 5 Minute Downhole Shut In Equivalent Mud Weight|Changes in: Example|
|data.PWDInflectionPointEMW|number|PWD Inflection Point EMW|Pressure While Drilling Inflection Point Equivalent Mud Weight (calculated).|Changes in: Example|
|data.PWDMaxPressureEMW|number|PWD Maximum Pressure EMW|Pressure While Drilling Maximum Pressure Equivalent Mud Weight.|Changes in: Example|
|data.PWD5MinShutInEMW|number|PWD 5 Minute Shut In EMW|PWD 5 Minute Shut In Equivalent Mud Weight (calculated)|Changes in: Example|
|data.PWDAdjustedSurfaceMaxEMW|number|PWD Adjusted Surface Maximum EMW|PWD Adjusted Surface Maximum EMW|Changes in: Example|
|data.CementInflectionPointDownholeEMW|number|Cement Inflection Point Downhole EMW|Cement Inflection Point Downhole Equivalent Mud Weight|Changes in: Example|
|data.CementMaxPointDownholeEMW|number|Cement Max Point Downhole EMW|Cement Max Point Downhole Equivalent Mud Weight|Changes in: Example|
|data.Cement5MinShutInPointDownholeEMW|number|Cement 5 Min ShutIn Point Downhole EMW|Cement 5 Min ShutIn Point Downhole Equivalent Mud Weight|Changes in: Example|
|data.VolumePressureResponses[].PressureDataSource &rarr; [FormationIntegrityPressureDataSource](../../../E-R/reference-data/FormationIntegrityPressureDataSource.1.0.0.md)|string|Pressure Data Source|Pressure Data Source|Changes in: Title|
|data.VolumePressureResponses[].SequenceNumber|integer|Sequence Number|Sequence Number|Changes in: Title|
|data.VolumePressureResponses[].ElapsedTime|number|Elapsed Time|Elapsed Time|Changes in: Title|
|data.VolumePressureResponses[].PumpRate|number|Pump Rate|Pump Rate|Changes in: Title|
|data.VolumePressureResponses[].PumpedVolume|number|Pumped Volume|Pumped Volume|Changes in: Title|
|data.VolumePressureResponses[].SurfacePressure|number|Surface Pressure|Surface Pressure|Changes in: Description|
|data.VolumePressureResponses[].SurfacePressureSource &rarr; [FormationIntegritySurfacePressureDataSource](../../../E-R/reference-data/FormationIntegritySurfacePressureDataSource.1.0.0.md)|string|Surface Pressure Source|Source for surface pressure measurement|Changes in: Title|
|data.VolumePressureResponses[].PWDElapsedTime|number|PWD Elapsed Time|PWD Elapsed Time|Changes in: Description, Frame of Reference|
|data.VolumePressureResponses[].PWDPressure|number|PWD Pressure|PWD Pressure|Changes in: Description, Frame of Reference|
|data.VolumePressureResponses[].FlowInRate|number|Flow In Rate|Flow In Rate|Changes in: Description|
|data.VolumePressureResponses[].FlowOutRate|number|Flow Out Rate|Flow Out Rate|Changes in: Description|
|data.VolumePressureResponses[].ChokeAOpenPercent|number|Choke A Open Percent|Choke A Open in fixed % (percent) unit. No unit conversion supported.|Changes in: Description|
|data.VolumePressureResponses[].Remark|string|Remark|Remark|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)