<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicFault:1.3.0`

Changes between [osdu:wks:work-product-component--SeismicFault:1.2.0](../../../E-R/work-product-component/SeismicFault.1.2.0.md) and [osdu:wks:work-product-component--SeismicFault:1.3.0](../../../E-R/work-product-component/SeismicFault.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SeismicPickingTypeID<br> &rarr; [SeismicPickingType](../../../E-R/reference-data/SeismicPickingType.1.0.1.md)|string|Seismic Picking Type ID|Method used to pick faults. E.g.Autotracked, Grid, Manual Picked.|Changes in: Description|
|data.SeismicTraceDataIDs[]<br> &rarr; [SeismicTraceData](../../../E-R/work-product-component/SeismicTraceData.1.5.1.md)|string|Seismic Trace Data IDs|The seismic volumes/sections on which the fault was picked.|Changes in: Description|
|data.SeismicDomainTypeID<br> &rarr; [SeismicDomainType](../../../E-R/reference-data/SeismicDomainType.1.0.0.md)|string|Seismic Domain Type ID|Vertical domain of the fault.  E.g. Time, Depth|Changes in: Description|
|data.BinGridID<br> &rarr; [SeismicBinGrid](../../../E-R/work-product-component/SeismicBinGrid.1.3.0.md)|string|Bin Grid ID|The Bin Grid of the fault when coordinates are specified in seismic bin inline/crossline. When populated this bin grid geometry override the geometry defined by the parent Seismic3DInterpretationSet. If empty and Seismic3DInterpretationSetID is populated, the Seismic3DInterpretationSet.SeismicBinGridID applies.|Changes in: Description|
|data.SeismicFaultSurfaceArea|number|Seismic Fault Surface Area|Surface Area of the fault plane.|Changes in: Description|
|data.Type<br> &rarr; [RepresentationType](../../../E-R/reference-data/RepresentationType.1.0.0.md)|string|Representation Type|The Fault RepresentationType assigned to this SeismicFault. Examples: PolylineSet, TriangulatedSurface.|Changes in: Description|
|data.Seismic3DInterpretationSetID<br> &rarr; [Seismic3DInterpretationSet](../../../E-R/master-data/Seismic3DInterpretationSet.1.2.0.md)|string|Seismic3D Interpretation Set Id|For picks on 3D datasets, reference to the 3D interpretation set (not the application project nor an acquisition survey) that supported this interpretation.  The seismic geometry (bin grid) needed to interpret the location references is inferred through the interpretation survey and no longer explicitly through this object.  The WPC SpatialArea may reflect the survey area that has the horizon picked on it for shallow search purposes.  Only one of Seismic2DInterpretationSetID or Seismic3DInterpretationSetID may be used, but not both.|Added property|
|data.Seismic2DInterpretationSetID<br> &rarr; [Seismic2DInterpretationSet](../../../E-R/master-data/Seismic2DInterpretationSet.1.2.0.md)|string|Seismic2D Interpretation Set Id|For picks on 2D datasets, reference to the 2D interpretation set (not the application project nor an acquisition survey) that supported this interpretation.  The seismic geometries (seismic line geometries) needed to interpret the location references are inferred through the interpretation survey.  The WPC SpatialArea may reflect the lines that have the horizon picked on it for shallow search purposes.  Only one of Seismic2DInterpretationSetID or Seismic3DInterpretationSetID may be used, but not both.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)