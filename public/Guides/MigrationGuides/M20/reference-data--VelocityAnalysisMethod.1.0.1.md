<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--VelocityAnalysisMethod:1.0.1`

Changes between [osdu:wks:reference-data--VelocityAnalysisMethod:1.0.1](../../../E-R/reference-data/VelocityAnalysisMethod.1.0.1.md) and [osdu:wks:reference-data--VelocityAnalysisMethod:1.0.1](../../../E-R/reference-data/VelocityAnalysisMethod.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--VelocityAnalysisMethod:DiffractionTomography | Diffraction tomography | Velocity obtained by calculations assuming least-time travel paths according to Fermat’s principle rather than Snell’s law bending at cell boundaries. | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:FullWaveformInversion | Full waveform inversion | Method involves iteratively minimising the difference between data that was acquired in a seismic survey and synthetic data that is generated from a wave simulator with an estimated (velocity) model of the subsurface. | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:LayerBasedTomography | Layer-based tomography | Method divides the earth into layers, allowing for lateral variation of velocity within the layers, instead of subdivision into cells. Tomographic methods include the algebraic reconstruction technique (ART), the simultaneous reconstruction technique (SIRT), and Gauss Seidel methods (q.v.). See Ivansson (1986) and Lo and Inderwiesen (1994). | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:NMO | NMO | DEPRECATED: Please use Code="NormalMoveout" with Name="NormalMoveout" instead. Indicates that the velocity analysis method uses NMO (Normal Moveout) | **DEPRECATED, superseded by Code: NormalMoveout**<br>Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:NormalMoveout | Normal moveout | A method to adjust reflection arrival times to correct for the geophone-source distance (offset) using a NMO (Normal Moveout) constant velocity. | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:ReflectionTomography | Reflection tomography | A method for finding the velocity and/or reflectivity distribution from observations of reflection events at various locations and source-receiver offsets. | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:Refraction | Refraction | Method using seismic refraction in order to obtain velocities of layers | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:Tomography | Tomography | The velocity distribution model divides the space into cells and then computes line integrals along ray paths through the cells. | Changes in AttributionAuthority |
| partition-id:reference-data--VelocityAnalysisMethod:TransmissionTomography | Transmission tomography | Velocity obtained via borehole-to-borehole, surface-to-borehole, or surface-to-surface observations | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record VelocityAnalysisMethod.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/VelocityAnalysisMethod.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)