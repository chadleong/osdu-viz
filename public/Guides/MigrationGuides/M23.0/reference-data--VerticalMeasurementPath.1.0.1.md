<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--VerticalMeasurementPath:1.0.1`

Changes between [osdu:wks:reference-data--VerticalMeasurementPath:1.0.1](../../../E-R/reference-data/VerticalMeasurementPath.1.0.1.md) and [osdu:wks:reference-data--VerticalMeasurementPath:1.0.1](../../../E-R/reference-data/VerticalMeasurementPath.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--VerticalMeasurementPath:ELEV | Elevation | DEPRECATED: Please use Code="TrueVerticalHeight" with Name="True vertical height" instead. Measurement is in the positive vertical direction and therefore represents an elevation | **DEPRECATED, superseded by Code: TrueVerticalHeight**<br>Changes in Description |
| partition-id:reference-data--VerticalMeasurementPath:MD | Measured depth | DEPRECATED: Please use Code="MeasuredDepth" with Name="Measured depth" instead. Measured depth is the measured distance along a wellbore path from the reference point. Unless the wellbore is perfectly aligned to the vertical plane, measured depth is not strictly a vertical measurement. | **DEPRECATED, superseded by Code: MeasuredDepth**<br>Changes in Name, Description |
| partition-id:reference-data--VerticalMeasurementPath:MeasuredDepth | Measured depth | Measured depth is the measured distance along a wellbore path from the reference point. Unless the wellbore is perfectly aligned to the vertical plane, measured depth is not strictly a vertical measurement. | Changes in Name |
| partition-id:reference-data--VerticalMeasurementPath:TrueVerticalDepth | True vertical depth | True vertical depth is the distance in the vertical plane from the horizontal plane of the reference datum to a point within a wellbore. TVD is not reported for wells that are deemed to be vertical and/or have no wellbore directional survey. | Changes in Name |
| partition-id:reference-data--VerticalMeasurementPath:TrueVerticalHeight | True vertical height | True vertical height is the distance (upwards positive) in the vertical plane above the horizontal plane of the reference datum. | Changes in Name |
| partition-id:reference-data--VerticalMeasurementPath:TVD | True vertical depth | DEPRECATED: Please use Code="TrueVerticalDepth" with Name="True vertical depth" instead. True vertical depth is the distance in the vertical plane from the horizontal plane of the reference datum to a point within a wellbore. TVD is not reported for wells that are deemed to be vertical and/or have no wellbore directional survey. | **DEPRECATED, superseded by Code: TrueVerticalDepth**<br>Changes in Name, Description |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Well_Depth_Measurement_Type)
* &rarr; [Manifest record VerticalMeasurementPath.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/VerticalMeasurementPath.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)