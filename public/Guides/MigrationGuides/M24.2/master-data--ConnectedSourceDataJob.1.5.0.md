<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.6.0`

Changes between [osdu:wks:master-data--ConnectedSourceDataJob:1.5.0](../../../E-R/master-data/ConnectedSourceDataJob.1.5.0.md) and [osdu:wks:master-data--ConnectedSourceDataJob:1.6.0](../../../E-R/master-data/ConnectedSourceDataJob.1.6.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.TriggerNaturalizationDAG|boolean|Trigger Naturalization DAG|TriggerNaturalizationDAG (default false) triggers, if true, a naturalization DAG (directed acyclic graph) that will add the data file (SEG-Y, LAS, etc.) to the target OSDU Platform from the source system and convert the WPC's child dataset from "external" to "internal".|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)