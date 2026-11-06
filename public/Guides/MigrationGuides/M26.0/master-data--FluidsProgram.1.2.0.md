<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--FluidsProgram:1.3.0`

Changes between [osdu:wks:master-data--FluidsProgram:1.2.0](../../../E-R/master-data/FluidsProgram.1.2.0.md) and [osdu:wks:master-data--FluidsProgram:1.3.0](../../../E-R/master-data/FluidsProgram.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.FluidIntervals[].FluidIntervalIdentifier|string|Fluid Interval Identifier|An identifier of a specific Fluid Interval that can be used by another object to reference the interval For example may be used by BHARun  to reference the fluid interval(s) planned to be used during a drilling run.|Added property|
|data.FluidIntervals[].MudClassID<br> &rarr; [MudClass](../../../E-R/reference-data/MudClass.1.0.0.md)|string|Mud Class|A list of reference values defining the status of the fluid, e.g., water based, oil based, etc.)|Added property|
|data.FluidIntervals[].FluidsSystem.RheologicalModelID<br> &rarr; [FluidRheologicalModelType](../../../E-R/reference-data/FluidRheologicalModelType.1.0.1.md)|string|Rheological Model|Identifies the Rheological model used for calculating pressure losses.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)