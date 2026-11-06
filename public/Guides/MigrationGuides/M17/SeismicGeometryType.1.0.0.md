<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicGeometryType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicGeometryType:1.0.0](../../../E-R/reference-data/SeismicGeometryType.1.0.0.md) and [osdu:wks:reference-data--SeismicGeometryType:1.0.1](../../../E-R/reference-data/SeismicGeometryType.1.0.1.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Standard values for the general geometrical layout of the seismic acquisition survey.  This is an hierarchical value.  The top value is like 2D, 3D, 4D, Borehole, Passive.  The second value is like NATS, WATS, Brick, Crosswell._
  * New Description: **_Standard values for the general geometrical layout of the seismic acquisition survey.  This can be a hierarchical value (via data.ParentID).  The top value is like 2D, 3D, Borehole, Passive.  More specific values are constructed like 3D.NarrowAzimuth, 3D.WideAzimuth._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicGeometryType:3D.MultiAzimuth | 3D Multi-Azimuth | 3D acquisition with a design involving at least 3 narrow azimuth surveys that cover the same survey area. The data is then combined during processing. | Value added. |
| partition-id:reference-data--SeismicGeometryType:3D.NarrowAzimuth | 3D Narrow Azimuth | 3D acquisition where one ship tows streamers and deploys airguns. | Value added. |
| partition-id:reference-data--SeismicGeometryType:3D.ParallelGeometry | 3D Parallel Geometry | 3D acquisition where the ship sails a series of parallel lines. | Value added. |
| partition-id:reference-data--SeismicGeometryType:3D.WideAzimuth | 3D Wide-Azimuth | 3D acquisition with at least two source ships and one receiver ship are used, where one will tow streamers and one deploys the airguns. The goal is to increase the range of offsets for each source-receiver pair. This technique is commonly used for sub-salt imaging. | Value added. |
| partition-id:reference-data--SeismicGeometryType:4D | 4D | DEPRECATED: Do not use this value, instead please use the specific geometry types for the survey. Express the time-lapse context via the SeismicAcquisitionSurvey's data.PrecedingTimeLapseSurveyID relationship. Previously: 'Recorded intentionally with time lapse.' | **DEPRECATED**<br>Changes in Description |

# Value Spreadsheet and Manifest

Superseded yet again by M19 changes

* [Manifest record SeismicGeometryType.1.0.2.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicGeometryType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)