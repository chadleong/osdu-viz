<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--AzimuthReferenceType:1.0.0`

Changes between [osdu:wks:reference-data--AzimuthReferenceType:1.0.0](../../../E-R/reference-data/AzimuthReferenceType.1.0.0.md) and [osdu:wks:reference-data--AzimuthReferenceType:1.0.0](../../../E-R/reference-data/AzimuthReferenceType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--AzimuthReferenceType:AssumedGridNorth | Assumed grid north | North reference is not explicitly stated but is assumed as Grid north based on dates, historical trends, or other criteria. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:AssumedMagneticNorth | Assumed magnetic north | North reference is not explicitly stated but is assumed as Magnetic north based on dates, historical trends, or other criteria. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:AssumedTrueNorth | Assumed true north | North reference is not explicitly stated but is assumed as True north based on dates, historical trends, or other criteria. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:AstronomicNorth | Astronomic north | The direction toward the north celestial pole, derived from astronomic observations. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:CompassNorth | Compass north | A raw reading of the north-seeking end of a needle or other magnetic component of a compass. This differs from magnetic north because of the influence of iron and other magnetic materials which disturb the Earth's magnetic field close to the compass instrument. There may be a correction applied to compass north to realize a magnetic north reading. This kind of north is encountered in older oil & gas data. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:GridNorth | Grid north | The direction of the north lines on a map projection. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:InferredGridNorth | Inferred grid north | North reference is not explicitly stated but can be confidently determined as Grid north based on other information data on the survey. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:InferredMagneticNorth | Inferred magnetic north | North reference is not explicitly stated but can be confidently determined as Magnetic north based on other information data on the survey. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:InferredTrueNorth | Inferred true north | North reference is not explicitly stated but can be confidently determined as True north based on other information data on the survey. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:MagneticNorth | Magnetic north | The direction to the Earth's magnetic north pole. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:PlantNorth | Plant north | A direction in a local engineering coordinate reference system which is normally oriented more or less north. This is used in industrial facilities (like gas plants or offshore platforms) and for smaller areas like drilling pads. Distances and directions in this local system are easier to handle without need for a professional land surveyor because the need for accuracy is less and the distances involved are limited. In this case a surveyor might determine the location of a corner of the facility and the angle between true north and the apparent north of the facility. | Changes in AttributionAuthority |
| partition-id:reference-data--AzimuthReferenceType:TrueNorth | Geodetic north | The direction towards the true North Pole. Formally, it is the positive direction of that line parallel to the Earth's axis of rotation and perpendicularly to the left of an observer facing in the direction of the Earth's rotation. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record AzimuthReferenceType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/AzimuthReferenceType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)