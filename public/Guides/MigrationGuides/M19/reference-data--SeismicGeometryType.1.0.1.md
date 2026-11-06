<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicGeometryType:1.0.2`

Changes between [osdu:wks:reference-data--SeismicGeometryType:1.0.1](../../../E-R/reference-data/SeismicGeometryType.1.0.1.md) and [osdu:wks:reference-data--SeismicGeometryType:1.0.2](../../../E-R/reference-data/SeismicGeometryType.1.0.2.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Standard values for the general geometrical layout of the seismic acquisition survey.  This can be a hierarchical value (via data.ParentID).  The top value is like 2D, 3D, Borehole, Passive.  More specific values are constructed like 3D.NarrowAzimuth, 3D.WideAzimuth._
  * New Description: **_The general geometrical layout of sources and receivers in a seismic acquisition survey._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicGeometryType:2D | 2D | Receivers and energy sources roughly colinear in single line near Earth's surface. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGeometryType:3D | 3D | In three-dimensional (3D) reflection seismic surveying the sound detectors (numbering up to a thousand or more) are spread out over an area and the sound source is moved from location to location through the area. 3D seismic programs are generally a uniform and evenly spaced grid of lines. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--SeismicGeometryType:3D.MultiAzimuth | 3D.Multi azimuth | 3D acquisition with a design involving at least 3 narrow azimuth surveys that cover the same survey area. The data is then combined during processing. | Changes in Name |
| partition-id:reference-data--SeismicGeometryType:3D.NarrowAzimuth | 3D.Narrow azimuth | 3D acquisition where one ship tows streamers and deploys airguns. | Changes in Name |
| partition-id:reference-data--SeismicGeometryType:3D.ParallelGeometry | 3D.Parallel geometry | 3D acquisition where the ship sails a series of parallel lines. | Changes in Name |
| partition-id:reference-data--SeismicGeometryType:3D.WideAzimuth | 3D.Wide azimuth | 3D acquisition with at least two source ships and one receiver ship are used, where one will tow streamers and one deploys the airguns. The goal is to increase the range of offsets for each source-receiver pair. This technique is commonly used for sub-salt imaging. | Changes in Name |
| partition-id:reference-data--SeismicGeometryType:4D | 4D | Recorded intentionally with time lapse. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--SeismicGeometryType:Borehole | Borehole | Receivers and/or energy sources in wellbore(s). | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SeismicGeometryType.1.0.2.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicGeometryType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)