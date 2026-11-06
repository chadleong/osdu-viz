<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--FaultSystem:1.2.0`

Potential migration to 
[`osdu:wks:work-product-component--FaultSystem:1.2.0`](../../../E-R/work-product-component/FaultSystem.1.2.0.md):

Earlier versions of FaultSystem did not describe the navigation context for 2D lines. The 3D support via `BinGridID`
to [SeismicBinGrid](../../../E-R/work-product-component/SeismicBinGrid.1.0.0.md) is extended to 2D by adding
`SeismicLineGeometries` relationships. For FaultSystem based on 2D seismic data the new `SeismicLineGeometries` provides
the link between seismic traces and world coordinates. 

## Prerequisite

[SeismicLineGeometry](../../../E-R/work-product-component/SeismicLineGeometry.1.0.0.md) records.


| Cumulative Name                                                                                                           | Value Type | Description                                                                                                                                                                             | Migration                                                                                                |
|---------------------------------------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| data.SeismicLineGeometries &rarr; [SeismicLineGeometry](../../../E-R/work-product-component/SeismicLineGeometry.1.0.0.md) | string[]   | The list of seismic line geometries holding the trace to 'world' coordinate mappings for the 2D seismic lines. Only populated if the Fault System is based on 2D fault interpretations. | Only if `FaultSystem` is based on 2D seismic: Add a list of record ids to `SeismicLineGeometry` records. |
 

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
