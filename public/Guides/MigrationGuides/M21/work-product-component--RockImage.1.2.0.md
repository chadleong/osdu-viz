<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--RockImage:1.3.0`

Adding the data structure allowing to define
1. the zero depth for the `data.TopDepthMeasuredDepth` and `data.BaseDepthMeasuredDepth`
2. the VerticalMeasurementSource to indicate the source of `data.TopDepthMeasuredDepth` and `data.BaseDepthMeasuredDepth`

Changes between [osdu:wks:work-product-component--RockImage:1.2.0](../../../E-R/work-product-component/RockImage.1.2.0.md) and [osdu:wks:work-product-component--RockImage:1.3.0](../../../E-R/work-product-component/RockImage.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.VerticalMeasurement_|_object_|_AbstractFacilityVerticalMeasurement_|_The data structure defining the zero depth point for the measured depths as well as the VerticalMeasurementSource (driller's depth or logger's depth), so that it becomes clear whether or not a depth correction is required and if so, in which direction the correction has to be performed (driller's depth to logger's depth or vice versa). Fragment Description: A location along a wellbore, _usually_ associated with some aspect of the drilling of the wellbore, but not with any intersecting _subsurface_ natural surfaces._|Added property|
|data.VerticalMeasurement.EffectiveDateTime|string|Effective Date Time|The date and time at which a vertical measurement instance becomes effective.|Added property|
|data.VerticalMeasurement.VerticalMeasurement|number|Vertical Measurement|The value of the elevation or depth. Depth is positive downwards from a vertical reference or geodetic datum along a path, which can be vertical; elevation is positive upwards from a geodetic datum along a vertical path. Either can be negative.|Added property|
|data.VerticalMeasurement.TerminationDateTime|string|Termination Date Time|The date and time at which a vertical measurement instance is no longer in effect.|Added property|
|data.VerticalMeasurement.VerticalMeasurementTypeID &rarr; [VerticalMeasurementType](../../../E-R/reference-data/VerticalMeasurementType.1.0.2.md)|string|Vertical Measurement Type Id|Specifies the type of vertical measurement (TD, Plugback, Kickoff, Drill Floor, Rotary Table...).|Added property|
|data.VerticalMeasurement.VerticalMeasurementPathID &rarr; [VerticalMeasurementPath](../../../E-R/reference-data/VerticalMeasurementPath.1.0.1.md)|string|Vertical Measurement Path Id|Specifies Measured Depth, True Vertical Depth, or Elevation.|Added property|
|data.VerticalMeasurement.VerticalMeasurementSourceID &rarr; [VerticalMeasurementSource](../../../E-R/reference-data/VerticalMeasurementSource.1.0.0.md)|string|Vertical Measurement Source Id|Specifies Driller vs Logger.|Added property|
|data.VerticalMeasurement.WellboreTVDTrajectoryID &rarr; [WellboreTrajectory](../../../E-R/work-product-component/WellboreTrajectory.1.3.0.md)|string|Wellbore Tvd Trajectory Id|Specifies what directional survey or wellpath was used to calculate the TVD.|Added property|
|data.VerticalMeasurement.VerticalMeasurementUnitOfMeasureID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Vertical Measurement Unit Of Measure Id|The unit of measure for the vertical measurement. If a unit of measure and a vertical CRS are provided, the unit of measure provided is taken over the unit of measure from the CRS.|Added property|
|data.VerticalMeasurement.VerticalCRSID &rarr; [CoordinateReferenceSystem](../../../E-R/reference-data/CoordinateReferenceSystem.1.1.0.md)|string|Vertical Crsid|A vertical coordinate reference system defines the origin for height or depth values. It is expected that either VerticalCRSID or VerticalReferenceID reference is provided in a given vertical measurement array object, but not both.|Added property|
|data.VerticalMeasurement.VerticalReferenceID|string|Vertical Reference Id|The reference point from which the relative vertical measurement is made. This is only populated if the measurement has no VerticalCRSID specified. The value entered must match the VerticalMeasurementID for another vertical measurement array element in Wellbore or Well or in a related parent facility. The relationship should be  declared explicitly in VerticalReferenceEntityID. Any chain of measurements must ultimately resolve to a Vertical CRS. It is expected that a VerticalCRSID or a VerticalReferenceID is provided in a given vertical measurement array object, but not both.|Added property|
|data.VerticalMeasurement.VerticalReferenceEntityID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.0.md) &rarr; [Well](../../../E-R/master-data/Well.1.3.0.md) &rarr; [Rig](../../../E-R/master-data/Rig.1.2.0.md)|string|Vertical Reference Entity Id|This relationship identifies the entity (aka record) in which the VerticalReferenceID is found; It could be a different OSDU entity or a self-reference. For example, a Wellbore VerticalMeasurement may reference a member of a VerticalMeasurements[] array in its parent Well record. Alternatively, VerticalReferenceEntityID may be populated with the ID of its own Wellbore record to make explicit that VerticalReferenceID is intended to be found in this record, not another.|Added property|
|data.VerticalMeasurement.VerticalMeasurementDescription|string|Vertical Measurement Description|Text which describes a vertical measurement in detail.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)