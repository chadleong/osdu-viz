<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractWPCActivity:1.2.1`

Changes between [osdu:wks:AbstractWPCActivity:1.2.0](../../../E-R/abstract/AbstractWPCActivity.1.2.0.md) and [osdu:wks:AbstractWPCActivity:1.2.1](../../../E-R/abstract/AbstractWPCActivity.1.2.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The activity abstraction included by projects (master-data) and work-product-component group-type specialisations._
  * New Description: **_The activity abstraction included by work-product-component group-type entities, which want to expose generic 'Activity' behaviour._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_Parameters[]_|_object_|_AbstractActivityParameter_|_An array of parameter values used in one instance of activity.  It may include references to data objects which are inputs and/or outputs of the activity. The array is mandatory but can be empty. Fragment Description: General parameter value used in one instance of activity. [Without inheritance, combined specializations.]_|Changes in: Description|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)