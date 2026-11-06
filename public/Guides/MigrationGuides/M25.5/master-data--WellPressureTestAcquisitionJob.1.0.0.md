<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellPressureTestAcquisitionJob:1.1.0`

Changes between [osdu:wks:master-data--WellPressureTestAcquisitionJob:1.0.0](../../../E-R/master-data/WellPressureTestAcquisitionJob.1.0.0.md) and [osdu:wks:master-data--WellPressureTestAcquisitionJob:1.1.0](../../../E-R/master-data/WellPressureTestAcquisitionJob.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.AcquisitionProgramExternalID|string|Acquisition Program External Identifier|The Identifier (from any external system) of the Acquisition Program, this specific acquisition job is derived from|Added property|
|data.PressureTestsAcquisitionRuns[].RunStartDate|string|Run Start Date|Date and Time of the start of this specific run|Changes in: Format|
|data.PressureTestsAcquisitionRuns[].RunEndDate|string|Run End Date|Date and Time of the end of this specific run|Changes in: Format|
|data.PressureTestsAcquisitionRuns[].WellboreFluidTypeID<br> &rarr; [WellboreFluidType](../../../E-R/reference-data/WellboreFluidType.1.0.0.md)|string|Wellbore Fluid Type ID|The type of fluid in the wellbore at time of logging  e.g. oil based mud, water based mud, water.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)