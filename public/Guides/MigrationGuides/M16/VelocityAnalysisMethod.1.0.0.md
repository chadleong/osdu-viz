<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--VelocityAnalysisMethod:1.0.1`

The content of this reference list 
[`osdu:wks:reference-data--VelocityAnalysisMethod:1.0.1`](../../../E-R/reference-data/VelocityAnalysisMethod.1.0.1.md)
is now governed by PPDM. The reference list's description has been patched 
to: _The process of selecting the optimal wave speed (velocity) to stack or migrate seismic traces._

## Recommended VelocityAnalysisMethod Values

| `id`                                                                       | Name                    | Description                                                                                                                                                                                                                                                                                                                                            | 
|----------------------------------------------------------------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--VelocityAnalysisMethod:DiffractionTomography  | Diffraction tomography  | Velocity obtained by calculations assuming least-time travel paths according to Fermat’s principle rather than Snell’s law bending at cell boundaries.                                                                                                                                                                                                 | -           |
| partition-id:reference-data--VelocityAnalysisMethod:FullWaveformInversion  | Full waveform inversion | Method involves iteratively minimising the difference between data that was acquired in a seismic survey and synthetic data that is generated from a wave simulator with an estimated (velocity) model of the subsurface.                                                                                                                              | -           |
| partition-id:reference-data--VelocityAnalysisMethod:LayerBasedTomography   | Layer-based tomography  | Method divides the earth into layers, allowing for lateral variation of velocity within the layers, instead of subdivision into cells. Tomographic methods include the algebraic reconstruction technique (ART), the simultaneous reconstruction technique (SIRT), and Gauss Seidel methods (q.v.). See Ivansson (1986) and Lo and Inderwiesen (1994). | -           |
| partition-id:reference-data--VelocityAnalysisMethod:NormalMoveout          | Normal moveout          | A method to adjust reflection arrival times to correct for the geophone-source distance (offset) using a NMO (Normal Moveout) constant velocity.                                                                                                                                                                                                       | -           |
| partition-id:reference-data--VelocityAnalysisMethod:ReflectionTomography   | Reflection tomography   | A method for finding the velocity and/or reflectivity distribution from observations of reflection events at various locations and source-receiver offsets.                                                                                                                                                                                            | -           |
| partition-id:reference-data--VelocityAnalysisMethod:Refraction             | Refraction              | Method using seismic refraction in order to obtain velocities of layers                                                                                                                                                                                                                                                                                | -           |
| partition-id:reference-data--VelocityAnalysisMethod:Tomography             | Tomography              | The velocity distribution model divides the space into cells and then computes line integrals along ray paths through the cells.                                                                                                                                                                                                                       | -           |
| partition-id:reference-data--VelocityAnalysisMethod:TransmissionTomography | Transmission tomography | Velocity obtained via borehole-to-borehole, surface-to-borehole, or surface-to-surface observations                                                                                                                                                                                                                                                    | -           |


## Deprecated VelocityAnalysisMethod Value

| Deprecated `id`                                         | Superseded by ìd`                                                 | Superseded Name | Description                                                                                                                                          |
|---------------------------------------------------------|-------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--VelocityAnalysisMethod:NMO | partition-id:reference-data--VelocityAnalysisMethod:NormalMoveout | NormalMoveout   | DEPRECATED: Please use Code="NormalMoveout" with Name="NormalMoveout" instead. Indicates that the velocity analysis method uses NMO (Normal Moveout) |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
