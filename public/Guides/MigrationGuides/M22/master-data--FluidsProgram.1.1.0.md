<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--FluidsProgram:1.2.0`

Changes between [osdu:wks:master-data--FluidsProgram:1.1.0](../../../E-R/master-data/FluidsProgram.1.1.0.md) and [osdu:wks:master-data--FluidsProgram:1.2.0](../../../E-R/master-data/FluidsProgram.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.FluidIntervals[].InstalledTubularAssemblyID<br> &rarr; [master-data--TubularAssembly](../../../E-R/master-data/TubularAssembly.2.0.0.md)<br> &rarr; [work-product-component--TubularAssembly](../../../E-R/work-product-component/TubularAssembly.1.3.0.md)|string|Installed Tubular Assembly ID|The identifier of the tubular to be installed.|Changes in: Relationship Targets, Pattern, Example|
|data.FluidIntervals[].FluidTypeID<br> &rarr; [WellFluidType](../../../E-R/reference-data/WellFluidType.1.0.0.md)<br> &rarr; [FluidType](../../../E-R/reference-data/FluidType.1.0.2.md)|string|Fluid Type ID|A fixed list of reference values describing the high level type of the drilling fluid|Changes in: Relationship Targets, Pattern|
|data.FluidIntervals[].FluidsSystem.FluidPurposeID<br> &rarr; [WellFluidRole](../../../E-R/reference-data/WellFluidRole.1.0.0.md)<br> &rarr; [FluidRole](../../../E-R/reference-data/FluidRole.1.0.1.md)|string|Fluid Purpose ID|The purpose the mud will play in this hole section (can be Sweep, Displacement Mud).|Changes in: Relationship Targets, Pattern|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)