<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicProcessingStageType:1.0.1`

Governance is taken over by PPDM. 
Potential reference value migration to [`osdu:wks:reference-data--SeismicProcessingStageType:1.0.1`](../../../E-R/reference-data/SeismicProcessingStageType.1.0.1.md):

This reference value list is now taken over by PPDM. As a consequence, three new values were added and two value were
deprecated because PPDM thought they belonged to a different activity rather than a stage.

|Deprecated `id` | Superseded by ìd` | Superseded Name | Description |
|---|---|---|---|
|partition-id:reference-data--SeismicProcessingStageType:ModelingResult|Not endorsed by PPDM|-|Indicates that the Seismic processing is at the Modeling Result stage|
|partition-id:reference-data--SeismicProcessingStageType:SyntheticModel|Not endorsed by PPDM|-|Indicates that the Seismic processing is at the Synthetic modeling stage|

**_New Values_**

| `id`                                                                  | Description                                                                                                                                                                                                                                                                    |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | partition_id:reference-data--SeismicProcessingStageType:Deconvolution | A process designed to restore a waveshape to the form it had before it underwent a linear filtering action (convolution)                                                                                                                                                       |
| partition_id:reference-data--SeismicProcessingStageType:Demultiple    | Corrections applied to seismic data to compensate for the effects of multiple reflections                                                                                                                                                                                      |
| partition_id:reference-data--SeismicProcessingStageType:Demultiplex   | Corrections applied to seismic data to compensate for the effects ofvariations in elevation, near-surface low-velocity-layer (weathering) thickness, weathering velocity, and/or reference to a datumTo separate the individual component channels that have been multiplexed. |
| partition_id:reference-data--SeismicProcessingStageType:Statics       | Often called statics, a bulk shift of a seismic trace in time during seismic processing. A common static correction is the weathering correction, which compensates for a layer of low seismic velocity material near the surface of the Earth.                                |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
