<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--SeismicProcessingProject:1.2.0`

Potential migration to [`osdu:wks:master-data--SeismicProcessingProject:1.2.0`](../../../E-R/master-data/SeismicProcessingProject.1.2.0.md):
The Seismic Processing Project is extended by an explicit relationship to a (processing) bin grid. It is only populated for 3D projects.

This additional property supports a simple query use case:

> Find all seismic trace data `work-product-component--SeismicTraceData:1.*.*`, which match the processing bin grid,
    i.e.
>   * `data.BinGridID` == SeismicProcessingProject's `data.BinGridID` **AND**
>   * `data.ProcessingProjectID` == SeismicProcessingProject's record `id` (suffixed by a :).

**New Property:**

| Cumulative Name                                                                                     | Value Type | Description                                                                                                                                                                     | Migration                                                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.BinGirdID &rarr; [SeismicBinGrid](../../../E-R/work-product-component/SeismicBinGrid.1.0.0.md) | string     | For 3D projects, BinGridID relates to the primary bin grid geometry for the processing; for 3D merge projects, it relates to the final (re-)projection and re-binning geometry. | If such a relationship is available, e.g., if this was previously captured in `data.Parameters[]` the relationship can be copied to the simple `data.BinGridID` for increased usability. | 

 

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
