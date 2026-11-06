<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--TrajectoryStationPropertyType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--TrajectoryStationPropertyType:1.0.0](../../../E-R/reference-data/TrajectoryStationPropertyType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--TrajectoryStationPropertyType:BuildRate | Build Rate | The build rate refers to the rate at which the inclination of the wellbore increases over a specified length, typically expressed in degrees per 100 feet (°/100 ft) or degrees per 30 meters (°/30 m). | Changes in NameAlias, AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:GravityToolFace | Gravity Tool Face | The angle of the borehole survey instrument within the wellbore measured clockwise relative to up and in the plane perpendicular to the wellbore axis. The high side is the top of the hole perpendicular to the wellbore axis, and the low side is the bottom of the hole. | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:IsOriginal | IsOriginal | DEPRECATED: Please use Code="IsEstimated" with Name="Is Estimated" instead. Boolean flag indicating a sample belonging to a measured, original trajectory station. False (0) indicates interpolated samples. | **DEPRECATED, superseded by Code: IsEstimated**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TrajectoryStationPropertyType:MagneticToolFace | Magnetic Tool Face  | The magnetic tool face is the direction, in the horizontal plane, that indicates the orientation of the drilling tool face of a deflection tool as an angular measurement from magnetic north.  | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:TrajectoryStationType | TrajectoryStationType | Trajectory station type specific to the station, it can be a notable position in the wellbore. | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:TurnRate | Turn Rate | The turn rate refers to the rate at which the direction (azimuth) of the wellbore changes horizontally, typically expressed in degrees per 100 feet (°/100 ft) or degrees per 30 meters (°/30 m). | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:VarianceEastEast | Variance East East | Covariance east east (aka Covariance XX).  | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:VarianceEastVertical | Variance East Vertical | Covariance East Vertical (aka Covariance YZ).  | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:VarianceNorthEast | Variance North East  | Crossvariance north east (aka Crossvariance YX).  | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:VarianceNorthNorth | Variance North North | Covariance north north (aka Covariance YY).  | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:VarianceNorthVertical | Variance North Vertical | Crossvariance north vertical (aka Crossvariance XZ) .  | Changes in AttributionRevision |
| partition-id:reference-data--TrajectoryStationPropertyType:VarianceVerticalVertical | Variance Vertical Vertical | Covariance vertical vertical (aka Covariance ZZ).  | Changes in AttributionRevision |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook TrajectoryStationPropertyType.1.xlsx](../../../ReferenceValues/Published/TrajectoryStationPropertyType.1.xlsx)
* &rarr; [Manifest record TrajectoryStationPropertyType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/TrajectoryStationPropertyType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)