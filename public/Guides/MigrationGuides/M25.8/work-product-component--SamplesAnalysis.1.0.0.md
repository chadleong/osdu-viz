<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SamplesAnalysis:2.0.0`

Changes between [osdu:wks:work-product-component--SamplesAnalysis:1.0.0](../../../E-R/work-product-component/SamplesAnalysis.1.0.0.md) and [osdu:wks:work-product-component--SamplesAnalysis:2.0.0](../../../E-R/work-product-component/SamplesAnalysis.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Attributes needed to find and retrieve the analysis of one particular rock or fluid sample analysis dataset, which generally contains one batch of analyses in one Analysis Family or SubFamily. For example, this could represent one table of data from a SamplesAnalysesReport,  or one dataset delivered as a work-product-component from a lab._
  * New Description: **_Samples Analysis is the data resulting when a scientific lab has analyzed physical specimens such as rock core, fluid samples such as dead oil or headspace gas, or other substances. A single Samples Analysis record can relate to more than one sample/specimen, but is characterized by only one Sample Analysis Type such as routine core analysis, compositional analysis, or differential liberation._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SampleAnalysisTypeIDs[]<br> &rarr; [SampleAnalysisType](../../../E-R/reference-data/SampleAnalysisType.1.0.0.md)|string|Sample Analysis Type I Ds|A list of all sample analysis types represented by this report, whether the sample analysis type relates to Rock, Fluid, or both.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SampleIDs[]<br> &rarr; [Sample](../../../E-R/master-data/Sample.3.0.0.md)|string|Sample IDs|Identifies the specific physical sample(s) on which this batch of lab analysis was performed.|Changes in: Title, Description|
|data.LaboratoryIDs[]<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Laboratory IDs|Identifies the laboratories that conducted the sample analysis contained in this dataset.|Changes in: Title, Description|
|data.LaboratoryAnalysts[]|string|Laboratory Analysts|The names and other information of the analysts responsible for conducting and reporting on the analysis performed.|Changes in: Title, Description|
|data.DatePublished|string|Date Published|The date that the results of the analysis containing observed measurements or calculations was published.|Changes in: Description|
|data.ParentSamplesAnalysesReports[].ParentSamplesAnalysesReportID<br> &rarr; [SamplesAnalysesReport](../../../E-R/work-product-component/SamplesAnalysesReport.1.0.0.md)|string|Parent Samples Analyses Report ID|An OSDU Record representing the report from which this analysis was extracted or an OSDU Record from which this analysis was reconstructed.|Changes in: Title|
|data.SamplesAnalysisCategoryTagIDs[]<br> &rarr; [SamplesAnalysisCategoryTag](../../../E-R/reference-data/SamplesAnalysisCategoryTag.1.0.0.md)|string|Samples Analysis Category Tag IDs|List of higher level grouping terms that are often used within organisations to search for analysis types in addition to the formal Family and Method properties, but which are variable across organisations and therefore do not need to be governed strictly by the OSDU Forum. For example: SCAL, Static SCAL, Dynamic SCAL, Source Rock Analysis. We suggest you use a namespace, like the operators name, like “Shell.SCAL”. BP.SCAL, Equinor.SCAL, Chevron.SCAL, Exxon.SCAL.....|Changes in: Title|
|data.SampleAnalysisTypeID<br> &rarr; [SampleAnalysisType](../../../E-R/reference-data/SampleAnalysisType.1.0.0.md)|string|Sample Analysis Type ID|The type of scientific lab analysis (such as routine core analysis, compositional analysis, differential liberation, etc.) performed on a physical specimen. Sample Analysis is characterized by an analysis family and sub family, based on criteria such as analysis method or highly relevant parameters.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)