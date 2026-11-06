<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--RockSampleAnalysis:1.1.0`

* Previous version [`osdu:wks:work-product-component--RockSampleAnalysis:1.0.0`](../../../E-R/work-product-component/RockSampleAnalysis.1.0.0.md)
* New version [`osdu:wks:work-product-component--RockSampleAnalysis:1.1.0`](../../../E-R/work-product-component/RockSampleAnalysis.1.1.0.md)

Milestone 14 extends RockSampleAnalysis to cover GrainSizeAnalysis **_in addition_** to RoutineCoreAnalysis. For the migration only one property is relevant, which is the new 

## Recommended Action

| Property Name                                                                                                         | Type         | Description                                                                                                                    | Migration Instruction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------------------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data.AnalysisTypeIDs[]` &rarr; [RockSampleAnalysisType](../../../E-R/reference-data/RockSampleAnalysisType.1.0.0.md) | string array | Type of laboratory test(s) performed (e.g. Routine Core Analysis, Grain Size) on a specific rock sample by a given laboratory. | All existing RockSampleAnalysis:1.0.0 records can only contain RoutineCoreAnalysis type of data. Therefore, please default the value of `data.AnalysisTypeIDs[]` array to: `"AnalysisTypeIDs": ["{{data-partition-id}}:reference-data--RockSampleAnalysisType:RoutineCoreAnalysis:"]`. The variable `{{data-partition-id}}` needs to be replaced with the value relevant to the environment hosting the data. <br><br> OSDU delivers the RockSampleAnalysisType list under FIXED Governance. The only two analysis types are shipped as reference values, see [documentation](../../../E-R/reference-data/RockSampleAnalysisType.1.0.0.md). |

[Back to TOC](#TOC)

All other new properties are left unpopulated during migration. 

`data.GrainSizeAnalysis` properties are organised as siblings to `data.RoutineCoreAnalysis` and 
[documented in the Individual Properties section](../../../E-R/work-product-component/RockSampleAnalysis.1.1.0.md). 

## Worked Examples

The worked examples for Coring, RockSample and RockSampleAnalysis have been extended to cover examples for 
GrainSizeAnalysis: ["Rock Sample Analysis, Kentish Knock South 1"](../../../Examples/WorkedExamples/RockSampleAnalysis/README.md).

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
