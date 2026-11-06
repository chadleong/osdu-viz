<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--BHARun:2.1.0`

Changes between [osdu:wks:master-data--BHARun:2.0.0](../../../E-R/master-data/BHARun.2.0.0.md) and [osdu:wks:master-data--BHARun:2.1.0](../../../E-R/master-data/BHARun.2.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.FluidsProgramReference_|_object_|_Fluids Program Reference_|_Used to reference the FluidsProgram object containing a list of fluid intervals for the Wellbore._|Added property|
|data.FluidsProgramReference.FluidsProgramID<br> &rarr; [FluidsProgram](../../../E-R/master-data/FluidsProgram.1.3.0.md)|string|Fluids Program ID|An optional relationship to a FluidsProgram object containing the Fluid Intervals. This is required to support the reference to specific FluidIntervals.|Added property|
|data.FluidsProgramReference.FluidIntervalIdentifiers[]|string|Fluid Interval Identifiers|A set of reference to the Fluid intervals  used durning this run. This optional relationship requires that the FluidsProgram object is referenced AND that the FluidsIntervals contained within the FluidsProgram have their FluidIntervalIdentifier populated. (See the FluidsProgram schema for more information on FluidIntervalIdentifiers ).|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)