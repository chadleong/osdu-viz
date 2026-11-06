<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--TubularAssembly:1.2.0`

Changes between [osdu:wks:work-product-component--TubularAssembly:1.1.0](../../../E-R/work-product-component/TubularAssembly.1.1.0.md) and [osdu:wks:work-product-component--TubularAssembly:1.2.0](../../../E-R/work-product-component/TubularAssembly.1.2.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.TubularAssemblyStatus_|_object_|_TubularAssemblyStatus_|_Reflects the current status of the Assembly - as 'installed', 'pulled', 'planned',... - Applicable to tubing/completions as opposed to drillstrings. Historical states are recorded in TubularAssemblyStates._|Changed|
|_data.TubularAssemblyStates[]_|_object_|_TubularAssemblyStatus_|_The full record of historical and current states of the Assembly. The current active state is recorded in TubularAssemblyStatus. Fragment Description: Record that reflects the status of the Assembly - as 'installed', 'pulled', 'planned',... - Applicable to tubing/completions as opposed to drillstrings_|Added property|
|data.TubularAssemblyStates[].StatusTypeID &rarr; [TubularAssemblyStatusType](../../../E-R/reference-data/TubularAssemblyStatusType.1.0.0.md)|string|Status Type Id|SRN of a reference value status type|Added property|
|data.TubularAssemblyStates[].Description|string|Description|Used to describe the reason of Activity - such as cut/pull, pulling,|Added property|
|data.TubularAssemblyStates[].Date|string|Date|Date the status has been established|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)