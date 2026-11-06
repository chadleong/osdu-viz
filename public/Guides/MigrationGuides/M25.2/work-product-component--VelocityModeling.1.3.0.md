<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--VelocityModeling:1.4.0`

Changes between [osdu:wks:work-product-component--VelocityModeling:1.3.0](../../../E-R/work-product-component/VelocityModeling.1.3.0.md) and [osdu:wks:work-product-component--VelocityModeling:1.4.0](../../../E-R/work-product-component/VelocityModeling.1.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.PropertyFieldRepresentationType<br> &rarr; [PropertyFieldRepresentationType](../../../E-R/reference-data/PropertyFieldRepresentationType.1.0.0.md)|string|Property Field Representation Type|Is the velocity field represented as a grid, mesh or profile.|Changes in: Description|
|data.BinGridID<br> &rarr; [SeismicBinGrid](../../../E-R/work-product-component/SeismicBinGrid.1.3.0.md)|string|Bin Grid Id|the Bin Grid of the coordinates are specified in seismic bin inline/crossline. Only required when it is a Grid `PropertyFieldRepresentationType`.|Changes in: Description|
|data.SeismicLineGeometries[]<br> &rarr; [SeismicLineGeometry](../../../E-R/work-product-component/SeismicLineGeometry.1.2.0.md)|string|Seismic Line Geometries|The list of seismic line geometries holding the trace to 'world' coordinate mappings for the 2D seismic lines. Only populated if the Velocity Modeling is based on 2D interpretations. The `PropertyFieldRepresentationType` should be either a Mesh or Profile.|Changes in: Description|
|data.SeismicAcquisitionSurveyID<br> &rarr; [SeismicAcquisitionSurvey](../../../E-R/master-data/SeismicAcquisitionSurvey.1.4.0.md)|string|Seismic Acquisition Survey ID|The relationship to the SeismicAcquisitionSurvey relevant to this velocity modeling activity.|Added property|
|data.SeismicProcessingProjectID<br> &rarr; [SeismicProcessingProject](../../../E-R/master-data/SeismicProcessingProject.1.3.0.md)|string|Seismic Processing Project ID|The relationship to the SeismicProcessingProject relevant to this velocity modeling activity.|Added property|
|data.Seismic2DInterpretationSetID<br> &rarr; [Seismic2DInterpretationSet](../../../E-R/master-data/Seismic2DInterpretationSet.1.2.0.md)|string|Seismic 2D Interpretation Set ID|The relationship to the Seismic2DInterpretationSet relevant to this velocity modeling activity.|Added property|
|data.Seismic3DInterpretationSetID<br> &rarr; [Seismic3DInterpretationSet](../../../E-R/master-data/Seismic3DInterpretationSet.1.2.0.md)|string|Seismic 3D Interpretation Set ID|The relationship to the Seismic3DInterpretationSet relevant to this velocity modeling activity.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)