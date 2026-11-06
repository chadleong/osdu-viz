<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicHorizon:2.1.0`

Changes between [osdu:wks:work-product-component--SeismicHorizon:2.0.0](../../../E-R/work-product-component/SeismicHorizon.2.0.0.md) and [osdu:wks:work-product-component--SeismicHorizon:2.1.0](../../../E-R/work-product-component/SeismicHorizon.2.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.HorizonControlPointsID<br> &rarr; [HorizonControlPoints](../../../E-R/work-product-component/HorizonControlPoints.1.0.0.md)|string|HorizonControl Points ID|Reference to the HorizonControlPoints record containing the seed points used to guide automated horizon tracking. This record represents a set of sparse interpreter picks (or ML training labels) that served as input to the tracking algorithm. If control points from multiple sources or interpretation phases are used, they should be merged into a single HorizonControlPoints record before horizon generation to maintain clear lineage. This relationship enables traceability from the final tracked surface back to the original sparse control data.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)