<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicProcessingStageType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicProcessingStageType:1.0.1](../../../E-R/reference-data/SeismicProcessingStageType.1.0.1.md) and [osdu:wks:reference-data--SeismicProcessingStageType:1.0.1](../../../E-R/reference-data/SeismicProcessingStageType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicProcessingStageType:Deconvolution | Deconvolution | A process designed to restore a waveshape to the form it had before it underwent a linear filtering action (convolution) | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Demultiple | Demultiple | Corrections applied to seismic data to compensate for the effects of multiple reflections | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Demultiplex | Demultiplex | Corrections applied to seismic data to compensate for the effects of variations in elevation, near-surface low-velocity-layer (weathering) thickness, weathering velocity, and/or reference to a datumTo separate the individual component channels that have been multiplexed. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Field | Field | Processing performed at the time of data acquisition site. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Inversion | Inversion | Deriving from field data a model to describe the subsurface that is consistent with the data; determining the cause from observation of effects. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Migration | Migration | An inversion operation involving rearrangement of seismic information elements so that reflections and diffractions are plotted at their true locations. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:ModelingResult | Modeling result | Indicates that the Seismic processing is at the Modeling Result stage | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:PhaseRotation | Phase rotation | Phase distortion imposed on the received seismic signal by the data-acquisition system must be accounted for and corrected. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Stack | Stack | A composite record made by combining traces from different records. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:Statics | Statics | Often called statics, a bulk shift of a seismic trace in time during seismic processing. A common static correction is the weathering correction, which compensates for a layer of low seismic velocity material near the surface of the Earth. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicProcessingStageType:SyntheticModel | Synthetic model | Indicates that the Seismic processing is at the Synthetic modeling stage | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SeismicProcessingStageType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicProcessingStageType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)