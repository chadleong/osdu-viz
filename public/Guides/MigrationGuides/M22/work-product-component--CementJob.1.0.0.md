<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--CementJob:1.1.0`

Changes between [osdu:wks:work-product-component--CementJob:1.0.0](../../../E-R/work-product-component/CementJob.1.0.0.md) and [osdu:wks:work-product-component--CementJob:1.1.0](../../../E-R/work-product-component/CementJob.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WellboreTubularID<br> &rarr; [master-data--TubularAssembly](../../../E-R/master-data/TubularAssembly.2.0.0.md)<br> &rarr; [work-product-component--TubularAssembly](../../../E-R/work-product-component/TubularAssembly.1.3.0.md)|string|Cemented Tubular Assembly|Installed Casing/Liner or other Tubular Assembly on which the Cement Job is performed. Not entered for Plug jobs in open hole.|Changes in: Relationship Targets, Pattern, Example|
|data.WorkStringID<br> &rarr; [master-data--TubularAssembly](../../../E-R/master-data/TubularAssembly.2.0.0.md)<br> &rarr; [work-product-component--TubularAssembly](../../../E-R/work-product-component/TubularAssembly.1.3.0.md)|string|Work String ID|Identifier of the TubularAssembly that describes the cement work string|Changes in: Relationship Targets, Pattern, Example|
|data.CementToolTubularComponentID<br> &rarr; [master-data--TubularComponent](../../../E-R/master-data/TubularComponent.2.0.0.md)<br> &rarr; [work-product-component--TubularComponent](../../../E-R/work-product-component/TubularComponent.1.3.0.md)|string|Cement Tool Tubular Component ID|The identifier of the TubularComponent within the Cemented String TubularAssembly used for Cementing the wellbore|Changes in: Relationship Targets, Pattern, Example|
|data.PipePulledRateAvg|number|Pipe Pulled Rate|Average rate pulled from cementing operation depth to surface|Added property|
|~~data.PipePulledRate~~|~~const string~~|~~Pipe Pulled Rate~~|~~DEPRECATED: Use the new PipePulledRateAvg instead as this constant string property is malformed for the purpose.  Rate pulled from cementing operation depth to surface~~|Deprecated|
|data.PackerStingerMeasureDepth|number|Packer Stinger Measured Depth|Packer or Stinger Measured Depth|Added property|
|~~data.PackerStingerMeasuredDepth~~|~~const string~~|~~Packer Stinger Measured Depth~~|~~DEPRECATED: Please use PackerStingerMeasureDepth instead as this string constant string property is malformed for the purpose. Packer or Stinger Measured Depth.~~|Deprecated|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)