<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Sample:3.1.0`

Changes between [osdu:wks:master-data--Sample:3.0.0](../../../E-R/master-data/Sample.3.0.0.md) and [osdu:wks:master-data--Sample:3.1.0](../../../E-R/master-data/Sample.3.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _This object captures attributes of a sample/ specimen (rocks, fluids, or other materials) acquired either through an original acquisition event, sub-sampling event, generated from recombination of other samples /specimens or derived through the application of some laboratory process on the parent sample._
  * New Description: **_This object captures attributes of a sample or specimen (rocks, fluids, or other materials) acquired either through an original acquisition event, sub-sampling event, generated from recombination of other samples or specimens or derived through the application of some laboratory process on the parent sample._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SampleAcquisition.SampleAcquisitionDetail.WellheadOperatingCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.WellheadOperatingCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.SeparatorOperatingCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.SeparatorOperatingCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.FacilityEquipmentOperatingCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.FacilityEquipmentOperatingCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|data.SamplePreparation[].SamplePreparationCondition.IsStandardConditions|boolean|Is Standard Conditions|To capture when Measurement have been made at Standard Conditions (25°C / 100 kPa) Mutually Exclusive with Pressure/Temperature. Capture|Added property|
|data.SamplePreparation[].SamplePreparationCondition.NonStandardConditionsReference|string|Non Standard Conditions Reference|Open Text Box to capture the P & T Reference when measurements are made at non standard conditions (such as "Reservoir", "Tank",…)|Added property|
|_data.DepthMeasurements[]_|_object_|_AbstractFacilityVerticalMeasurement_|_All depths and elevations pertaining to the target sample or sub-sample, e.g., top and base measured depths, top and base true vertical depths, measured depth elevation. Fragment Description: A location along a wellbore, _usually_ associated with some aspect of the drilling of the wellbore, but not with any intersecting _subsurface_ natural surfaces._|Added property|
|data.DepthMeasurements[].EffectiveDateTime|string|Effective Date Time|The date and time at which a vertical measurement instance becomes effective.|Added property|
|data.DepthMeasurements[].VerticalMeasurement|number|Vertical Measurement|The value of the elevation or depth. Depth is positive downwards from a vertical reference or geodetic datum along a path, which can be vertical; elevation is positive upwards from a geodetic datum along a vertical path. Either can be negative.|Added property|
|data.DepthMeasurements[].TerminationDateTime|string|Termination Date Time|The date and time at which a vertical measurement instance is no longer in effect.|Added property|
|data.DepthMeasurements[].VerticalMeasurementTypeID<br> &rarr; [VerticalMeasurementType](../../../E-R/reference-data/VerticalMeasurementType.1.0.3.md)|string|Vertical Measurement Type Id|Specifies the type of vertical measurement (TD, Plugback, Kickoff, Drill Floor, Rotary Table...).|Added property|
|data.DepthMeasurements[].VerticalMeasurementPathID<br> &rarr; [VerticalMeasurementPath](../../../E-R/reference-data/VerticalMeasurementPath.1.0.1.md)|string|Vertical Measurement Path Id|Specifies Measured Depth, True Vertical Depth, or Elevation.|Added property|
|data.DepthMeasurements[].VerticalMeasurementSourceID<br> &rarr; [VerticalMeasurementSource](../../../E-R/reference-data/VerticalMeasurementSource.1.0.0.md)|string|Vertical Measurement Source Id|Specifies Driller vs Logger.|Added property|
|data.DepthMeasurements[].WellboreTVDTrajectoryID<br> &rarr; [WellboreTrajectory](../../../E-R/work-product-component/WellboreTrajectory.1.4.0.md)|string|Wellbore Tvd Trajectory Id|Specifies what directional survey or wellpath was used to calculate the TVD.|Added property|
|data.DepthMeasurements[].VerticalMeasurementUnitOfMeasureID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Vertical Measurement Unit Of Measure Id|The unit of measure for the vertical measurement. If a unit of measure and a vertical CRS are provided, the unit of measure provided is taken over the unit of measure from the CRS.|Added property|
|data.DepthMeasurements[].VerticalCRSID<br> &rarr; [CoordinateReferenceSystem](../../../E-R/reference-data/CoordinateReferenceSystem.1.2.0.md)|string|Vertical Crsid|A vertical coordinate reference system defines the origin for height or depth values. It is expected that either VerticalCRSID or VerticalReferenceID reference is provided in a given vertical measurement array object, but not both.|Added property|
|data.DepthMeasurements[].VerticalReferenceID|string|Vertical Reference Id|The reference point from which the relative vertical measurement is made. This is only populated if the measurement has no VerticalCRSID specified. The value entered must match the VerticalMeasurementID for another vertical measurement array element in Wellbore or Well or in a related parent facility. The relationship should be  declared explicitly in VerticalReferenceEntityID. Any chain of measurements must ultimately resolve to a Vertical CRS. It is expected that a VerticalCRSID or a VerticalReferenceID is provided in a given vertical measurement array object, but not both.|Added property|
|data.DepthMeasurements[].VerticalReferenceEntityID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)<br> &rarr; [Well](../../../E-R/master-data/Well.1.4.0.md)<br> &rarr; [Rig](../../../E-R/master-data/Rig.2.0.0.md)|string|Vertical Reference Entity Id|This relationship identifies the entity (aka record) in which the VerticalReferenceID is found; It could be a different OSDU entity or a self-reference. For example, a Wellbore VerticalMeasurement may reference a member of a VerticalMeasurements[] array in its parent Well record. Alternatively, VerticalReferenceEntityID may be populated with the ID of its own Wellbore record to make explicit that VerticalReferenceID is intended to be found in this record, not another.|Added property|
|data.DepthMeasurements[].VerticalMeasurementDescription|string|Vertical Measurement Description|Text which describes a vertical measurement in detail.|Added property|
|_data.DefinitiveDepthShift_|_object_|_Abstract Definitive Depth Shift_|_Specification of the depth shift for this sample that is considered definitive by the organization, business unit, or owner. Fragment Description: Schema fragment which enables the embedding of a definitive depth shift within OSDU schemas._|Added property|
|data.DefinitiveDepthShift.DefinitiveDepthShiftSourceID<br> &rarr; [WellLog](../../../E-R/work-product-component/WellLog.1.5.0.md)|string|Definitive Depth Shift Source ID|Identifies the well log that was used to create this depth shift. Usually this identifies a log record with a wireline gamma ray curve.|Added property|
|data.DefinitiveDepthShift.DefinitiveDepthShiftID<br> &rarr; [DepthShift](../../../E-R/work-product-component/DepthShift.1.0.0.md)|string|Definitive Depth Shift ID|Identifies the definitive depth shift record applied to the object.|Added property|
|_data.DefinitiveDepthShift.DepthShiftedAttributes[]_|_object_|_Depth Shifted Attribute_|_Identifies the attributes impacted by the depth shift and their persisted depth-shifted values. Fragment Description: Identifies an attribute impacted by the depth shift and its persisted depth-shifted values._|Added property|
|data.DefinitiveDepthShift.DepthShiftedAttributes[].DepthShiftAttributeName|string|Depth Shift Attribute Name|Identifies the attribute name in this data record that is impacted by the depth shift.|Added property|
|data.DefinitiveDepthShift.DepthShiftedAttributes[].DepthShiftedAmount|number|Depth Shifted Amount|Defines the amount of depth shifted from the original, as-received, depths for this data attribute. Positive values represent depth-shifting downhole in depth, while negative values represent depth shifting uphole.|Added property|
|data.DefinitiveDepthShift.DepthShiftedAttributes[].DepthShiftedVerticalMeasurementValue|number|Depth Shifted Vertical Measurement Value|Persisted depth-shifted vertical measurement value, for the identified attribute.|Added property|
|data.DefinitiveDepthShift.DepthShiftedAttributes[].DepthShiftUnitOfMeasureID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Depth Shift Unit of Measure ID|Defines the unit of measure for DepthShiftedAmount and DepthShiftedVerticalMeasurementValue.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)