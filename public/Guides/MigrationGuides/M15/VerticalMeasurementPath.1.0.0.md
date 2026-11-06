<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--VerticalMeasurementPath:1.0.1`

PPDM revised the description, which requires a patch version increment to 
[`osdu:wks:reference-data--VerticalMeasurementPath:1.0.1`](../../../E-R/reference-data/VerticalMeasurementPath.1.0.1.md).  

Deprecations are listed below:

| Deprecated `id`                                           | Superseded by ìd`                                                       | Superseded Name    | Description                                                                                                                                                                                                                                                                                                                              |
|-----------------------------------------------------------|-------------------------------------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--VerticalMeasurementPath:ELEV | partition-id:reference-data--VerticalMeasurementPath:TrueVerticalHeight | TrueVerticalHeight | DEPRECATED: Please use Code="TrueVerticalHeight" with Name="TrueVerticalHeight" instead. Measurement is in the positive vertical direction and therefore represents an elevation                                                                                                                                                         |
| partition-id:reference-data--VerticalMeasurementPath:MD   | partition-id:reference-data--VerticalMeasurementPath:MeasuredDepth      | MeasuredDepth      | DEPRECATED: Please use Code="MeasuredDepth" with Name="MeasuredDepth" instead. Measured depth is the measured distance along a wellbore path from the reference point. Unless the wellbore is perfectly aligned to the vertical plane, measured depth is not strictly a vertical measurement.                                            |
| partition-id:reference-data--VerticalMeasurementPath:TVD  | partition-id:reference-data--VerticalMeasurementPath:TrueVerticalDepth  | TrueVerticalDepth  | DEPRECATED: Please use Code="TrueVerticalDepth" with Name="TrueVerticalDepth" instead. True vertical depth is the distance in the vertical plane from the horizontal plane of the reference datum to a point within a wellbore. TVD is not reported for wells that are deemed to be vertical and/or have no wellbore directional survey. |



[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
