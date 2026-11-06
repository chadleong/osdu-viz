<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.7.0`

Changes between [osdu:wks:master-data--ConnectedSourceDataJob:1.6.0](../../../E-R/master-data/ConnectedSourceDataJob.1.6.0.md) and [osdu:wks:master-data--ConnectedSourceDataJob:1.7.0](../../../E-R/master-data/ConnectedSourceDataJob.1.7.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.ExternalProcesses[]_|_object_|_External Process_|_A list of external processes configuration to be executed by EDS Fragment Description: A workflow configuration in the context of a scheduled job._|Added property|
|data.ExternalProcesses[].SecuritySchemaName|string|Security Schema Name|Reference name for the security scheme in the ConnectedSourceRegistryEntry document this external process belongs to.|Added property|
|data.ExternalProcesses[].Url|string|Endpoint Url|External Process endpoint|Added property|
|data.ExternalProcesses[].EdsExternalProcessTypeID<br> &rarr; [EdsExternalProcessType](../../../E-R/reference-data/EdsExternalProcessType.1.0.0.md)|string|EDS External Process Type Identifier|ID reference of the External Process Type|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)