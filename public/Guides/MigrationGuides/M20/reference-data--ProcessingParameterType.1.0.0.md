<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ProcessingParameterType:1.0.0`

Changes between [osdu:wks:reference-data--ProcessingParameterType:1.0.0](../../../E-R/reference-data/ProcessingParameterType.1.0.0.md) and [osdu:wks:reference-data--ProcessingParameterType:1.0.0](../../../E-R/reference-data/ProcessingParameterType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ProcessingParameterType:BinSize | Bin size | The dimensions (length x width) of a subdivision of a 3-D seismic dataset. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:CMPInterval | Common midpoint interval | The distance between common midpoints. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:DatumTime | Datum time | A calculation of the time required for a seismic pulse to travel from the source to the datum plane and from the datum plane to the geophone. This value is subtracted from observed reflection times to give the arrival time as if sources and geophones had been located on the datum surface without any low or irregular velocities below the datum. (derived from SEG.org) | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:Fold | Fold | The multiplicity of common-midpoint data or the number of midpoints per bin. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:GainAppliedPoint | Gain applied point | The point in the gain window to which the gain is applied (mid point, one third from start etc.) | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:GainCorrection | Gain correction | The method or value applied to the gain. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:GainDerivationGateLength | Gain derivation gate length | The length of the gate to which gain is applied | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:GroupInterval | Group interval | The horizontal distance between the centers of adjacent geophone groups. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:MaxOffset | Maximum Offset | The maximum source-receiver offset distance. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:MaxTime | Maximum Time | The maximum recording time (milliseconds) | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:MinOffset | Minimum Offset | The minimum source-receiver offset distance. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:NMOVelocity | Normal Moveout Velocity | Velocity calculated from normal-moveout measurements and a constant-velocity model. Also called stacking velocity. | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:NumCMP | Number of Common Midpoints | The number of traces having the same distance between source and detector or gathered into one processing bin | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:SamplingInterval | Sampling interval | In digital recording, the continuous (analog) seismic signal is sampled at a fixed rate in time, called the sampling interval (or sampling rate). | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:StaticBulkTraceCorrection | Static bulk trace correction | The correction value applied to each specified trace | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:StaticMethod | Static method | The method used to determine static corrections (residual, subsurface) | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:StaticTimeVariantTraceCorrection | Static time variant trace correction | The correction value applied to each time interval on each trace | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:SubWeatheringVelocity | Datum correction velocity | The velocity in the deeper surface of the earth, typically 1500 m/s or more.  Derived from SEG.org | Changes in AttributionAuthority |
| partition-id:reference-data--ProcessingParameterType:WeatheringVelocity | Weathering velocity | The velocity in the surface of the earth, usually where air rather than water filles the pore spaces of rocks or unconsolidated earth. Weathering velocities are typically 500 to 800 m/s (although weathering velocity may be 150 m/s for the first few cm).  Derived from SEG.org | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record ProcessingParameterType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/ProcessingParameterType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)