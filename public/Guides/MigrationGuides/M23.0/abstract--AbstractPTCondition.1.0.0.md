<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractPTCondition:1.1.0`

Changes between [osdu:wks:AbstractPTCondition:1.0.0](../../../E-R/abstract/AbstractPTCondition.1.0.0.md) and [osdu:wks:AbstractPTCondition:1.1.0](../../../E-R/abstract/AbstractPTCondition.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)