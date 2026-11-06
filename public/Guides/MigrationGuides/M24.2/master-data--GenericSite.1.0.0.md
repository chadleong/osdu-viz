<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--GenericSite:1.1.0`

Changes between [osdu:wks:master-data--GenericSite:1.0.0](../../../E-R/master-data/GenericSite.1.0.0.md) and [osdu:wks:master-data--GenericSite:1.1.0](../../../E-R/master-data/GenericSite.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.LocationUncertainty_|_object_|_AbstractLocationUncertainty_|_Uncertainty for site location Fragment Description: A simple uncertainty quantification for a point location._|Added property|
|data.LocationUncertainty.Radius3D|number|Radius3D|Position uncertainty refers to the radius around a given location that is likely to contain the true value of the measurement with a specified confidence level. The position is defined in three-dimensional space with x, y, and z coordinates. For instance, if the location uncertainty radius is 1.5 meters and the confidence level is 1 sigma (approximately 61% using Rayleigh distribution), it means that the actual location is expected to be within a sphere of 1.5 meters radius from the reported position 61% of the time.|Added property|
|data.LocationUncertainty.ConfidenceLevel|number|ConfidenceLevel|The confidence level, expressed as sigma and using Rayleigh distribution, indicates the degree of certainty that the predicted three-dimensional location is accurate. For example, if the location uncertainty radius is 1.5 meters and the confidence level is 1 sigma, it means that the actual position is expected to fall within a sphere with a radius of 1.5 meters from the reported position 61% of the time. The radius represents the extent of this sphere, defined by the location uncertainty. For a three-dimensional position given in x, y, and z coordinates, the rule of thumb for sigma levels is as follows when using Rayleigh distribution: 1 sigma corresponds to a 61% confidence level, 2 sigma corresponds to a 99% confidence level and 3 sigma corresponds to nearly a 100% confidence level. In comparison, for a one-dimensional case assuming Gaussian distribution, these sigma levels represent: 1 sigma corresponds to a 68% confidence level, 2 sigma corresponds to a 95% confidence level and 3 sigma corresponds to a 99.7% confidence level.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)