<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Well:1.5.0`

Changes between [osdu:wks:master-data--Well:1.4.0](../../../E-R/master-data/Well.1.4.0.md) and [osdu:wks:master-data--Well:1.5.0](../../../E-R/master-data/Well.1.5.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.WellReferencePoint_|_object_|_Well Reference Point (WRP)_|_A permanent, recoverable, fixed point of deepest horizontal constraint. This point is often used as the tie-in point for the first survey and plan on the well. It is typically the well's position at seabed or ground level._|Added property|
|data.WellReferencePoint.WellReferencePointType|string|Well Reference Point Type|The type of Well Reference Point (WRP) that determines the values used to define the point. For example, Vertical, Slant Rig and Curved Conductor.|Added property|
|data.WellReferencePoint.WellReferencePointTVD|number|Well Reference Point TVD|Vertical distance of the point from the well's DefaultVerticalMeasurementID.|Added property|
|data.WellReferencePoint.WellReferencePointMD|number|Well Reference Point MD|If the wellbore is non-vertical at the WRP then the along hole distance from rig datum to WRP is longer than the vertical distance. In this case, enter the additional measured depth, which is usually less than 1m for curved conductors. This additional distance will not change if the rig elevation change.|Added property|
|data.WellReferencePoint.WellReferencePointInclination|number|Well Reference Point Inclination|Inclination at the Well Reference Point.|Added property|
|data.WellReferencePoint.WellReferencePointAzimuth|number|Well Reference Point Azimuth|Azimuth at Well Reference Point.|Added property|
|data.WellReferencePoint.WellReferencePointOffsetEast|number|Well Reference Point Offset East|The offset distance east from the well position to the Well Reference Point.  Also known as Local easting.|Added property|
|data.WellReferencePoint.WellReferencePointOffsetNorth|number|Well Reference Point Offset North|The offset distance north from the well position to the Well Reference Point. Also known as the Local northing.|Added property|
|data.WellReferencePoint.WellReferencePointNorthing|number|Well Reference Point Northing|The coordinate value representing the distance north (positive) or south (negative) from an east–west reference axis within a defined coordinate reference system.|Added property|
|data.WellReferencePoint.WellReferencePointEasting|number|Well Reference Point Easting|The coordinate value representing the distance east (positive) or west (negative) from an north–south reference axis within a defined coordinate reference system.|Added property|
|data.WellReferencePoint.WellReferencePointCRSTVD|number|Well Reference Point CRS TVD|Distance of the Well Reference Point from the well's DefaultVerticalCRSID downward along a line that is perpendicular to that surface. A depth above the vertical reference surface will have a negative value.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)