<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--PlannedCementJob:1.3.0`

Changes between [osdu:wks:master-data--PlannedCementJob:1.2.0](../../../E-R/master-data/PlannedCementJob.1.2.0.md) and [osdu:wks:master-data--PlannedCementJob:1.3.0](../../../E-R/master-data/PlannedCementJob.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WorkStringID<br> &rarr; [master-data--TubularAssembly](../../../E-R/master-data/TubularAssembly.2.0.0.md)<br> &rarr; [work-product-component--TubularAssembly](../../../E-R/work-product-component/TubularAssembly.1.3.0.md)|string|Work String ID|Identifier of the TubularAssembly that describes the cement work string|Changes in: Relationship Targets, Pattern, Example|
|data.TubularAssemblyID<br> &rarr; [master-data--TubularAssembly](../../../E-R/master-data/TubularAssembly.2.0.0.md)<br> &rarr; [work-product-component--TubularAssembly](../../../E-R/work-product-component/TubularAssembly.1.3.0.md)|string|Tubular Assembly Identifier|Identifier of the tubular assembly actually installed or to be installed|Changes in: Relationship Targets, Pattern, Example|
|data.CementToolTubularComponentID<br> &rarr; [master-data--TubularComponent](../../../E-R/master-data/TubularComponent.2.0.0.md)<br> &rarr; [work-product-component--TubularComponent](../../../E-R/work-product-component/TubularComponent.1.3.0.md)|string|Cement Tool Tubular Component ID|The identifier of the TubularComponent used for Cementing the wellbore|Changes in: Relationship Targets, Required?, Pattern, Example|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)