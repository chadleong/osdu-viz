<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.8.0`

Changes between [osdu:wks:master-data--ConnectedSourceDataJob:1.7.0](../../../E-R/master-data/ConnectedSourceDataJob.1.7.0.md) and [osdu:wks:master-data--ConnectedSourceDataJob:1.8.0](../../../E-R/master-data/ConnectedSourceDataJob.1.8.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.PreserveOnUpdate[]|string|Preserve On Update|A list of attribute paths to be preserved during updates.|Added property|
|data.EdsNotificationPolicyID<br> &rarr; [EdsNotificationPolicy](../../../E-R/reference-data/EdsNotificationPolicy.1.0.0.md)|string|EDS Notification Policy ID|ID of the notification policy containing the email preference|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)