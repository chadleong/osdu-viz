<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.5.0`

Changes between [osdu:wks:master-data--ConnectedSourceDataJob:1.4.0](../../../E-R/master-data/ConnectedSourceDataJob.1.4.0.md) and [osdu:wks:master-data--ConnectedSourceDataJob:1.5.0](../../../E-R/master-data/ConnectedSourceDataJob.1.5.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ConnectedSourceSchemaAuthority|string|Connected Source Schema Authority|Source system schema authority.|Added property|
|data.FetchStartDateTime|string|Fetch Start Date Time|Start time of the records to be fetched from the source system.|Added property|
|data.FetchEndDateTime|string|Fetch End Date Time|End time of the records to be fetched from the source system.|Added property|
|data.ParentDataMappingDummyMasterIDs[]|string|Parent Data Mapping Dummy Master IDs|A fixed dummy master ID is set in advance and will be used if the master record is unavailable in the consumer system. Multiple master ids can be defined as array members; ids are defined without data-partition example: 'master-data--Well:DummyWell'.|Added property|
|data.IsDummyParentMappingEnabled|boolean|Is Dummy Parent Mapping Enabled|Indicates if the dummy parent data mapping should be considered or not, by default it will be false (and false if absent), if true ParentDataMappingDummyMasterIDs should be set.|Added property|
|data.EdsIngestWaitTime|number|EDS Ingest Wait Time|The wait time, in seconds, for the eds_Ingest DAG run upon completion of the Manifest Ingestion (osdu_ingest) DAG run, used to retrieve details from the XCom summary.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)