<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--GeobodyInterpretation:1.3.0`

Changes between [osdu:wks:work-product-component--GeobodyInterpretation:1.2.0](../../../E-R/work-product-component/GeobodyInterpretation.1.2.0.md) and [osdu:wks:work-product-component--GeobodyInterpretation:1.3.0](../../../E-R/work-product-component/GeobodyInterpretation.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.LithologyTypeID<br> &rarr; [LithologyType](../../../E-R/reference-data/LithologyType.1.1.0.md)|string|Lithology Type ID|The relationship to a LithologyType, corresponding to Energistics GeologicUnitComposition.|Changes in: Included Schema Fragment Version, Example|
|data.LithologyQualifierIDs[]<br> &rarr; [LithologyQualifier](../../../E-R/reference-data/LithologyQualifier.1.0.0.md)|string|Lithology Qualifier IDs|Optionally, one ore more LithologyQualifiers further detailing the LithologyType via LithologyTypeID.|Added property|
|data.DepositionalEnvironmentID<br> &rarr; [DepositionalEnvironment](../../../E-R/reference-data/DepositionalEnvironment.1.0.0.md)|string|Depositional Environment ID|The relationship to the DepositionalEnvironment reference-data record.|Added property|
|data.DepositionalSubEnvironmentID<br> &rarr; [DepositionalSubEnvironment](../../../E-R/reference-data/DepositionalSubEnvironment.1.0.0.md)|string|Depositional Sub Environment ID|In addition to DepositionalEnvironmentID, this relation to a DepositionalSubEnvironment reference-data record further specifies the overall depositional environment.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)