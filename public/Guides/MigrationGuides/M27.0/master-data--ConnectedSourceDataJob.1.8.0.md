<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.9.0`

Changes between [osdu:wks:master-data--ConnectedSourceDataJob:1.8.0](../../../E-R/master-data/ConnectedSourceDataJob.1.8.0.md) and [osdu:wks:master-data--ConnectedSourceDataJob:1.9.0](../../../E-R/master-data/ConnectedSourceDataJob.1.9.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.RetryOnFailedRecords|boolean|Retry On Failed Records|If the FailedRecords array is populated, this flag determines whether to retry ingesting those records in the next scheduled run, or skip retrying and leave the array unchanged.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)