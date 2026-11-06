<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellboreTrajectory:1.4.0`

Changes between [osdu:wks:work-product-component--WellboreTrajectory:1.3.0](../../../E-R/work-product-component/WellboreTrajectory.1.3.0.md) and [osdu:wks:work-product-component--WellboreTrajectory:1.4.0](../../../E-R/work-product-component/WellboreTrajectory.1.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Work Product Component describing an individual instance of a wellbore trajectory data object. Also called a deviation survey, wellbore trajectory is data that is used to calculate the position and spatial uncertainty of a planned or actual wellbore in 2-dimensional and 3-dimensional space._
  * New Description: **_Work Product Component describing an individual instance of a wellbore trajectory data object. Also called a directional or deviation survey, wellbore trajectory is data that is used to calculate the position and spatial uncertainty of a planned or actual wellbore in 2-dimensional and 3-dimensional space._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ServiceCompanyID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Service Company|Name of the Survey Company.|Changes in: Example|
|data.WellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Wellbore|A unique name, code or number designated to the Wellbore.|Changes in: Example|
|data.TopDepthMeasuredDepth|number|Survey Top Measured Depth|Measured depth in the wellbore where the directional survey starts. This should equal the minimum station measured depth for this directional survey, regardless of whether the surveyed station represents an actual surveyed MD or not.|Changes in: Description, Example|
|data.AzimuthReferenceType<br> &rarr; [AzimuthReferenceType](../../../E-R/reference-data/AzimuthReferenceType.1.0.0.md)|string|Azimuth Reference Type|The North reference of the trajectory used to define the azimuth angular measurement values. For example, True North, Grid North, Magnetic North.|Changes in: Example|
|data.CalculationMethodType<br> &rarr; [CalculationMethodType](../../../E-R/reference-data/CalculationMethodType.1.0.0.md)|string|Calculation Method Type|Calculation Method used to calculate the Wellpath Trajectory from the directional survey data including TVD, X OFFSET, Y OFFSET and DOG LEG SEVERITY. Examples include Minimum Curvature, Radius of Curvature, Balanced Tangential, etc.|Changes in: Description, Example|
|data.SurveyType|string|Directional Survey Type|The type of this directional survey.  For example a "Directional Survey" where MD, Inclination and Azimuth are all measured or a "Position Log" where Inclination and Azimuth are both null and only MD, TVD and X/Y Offsets are available) - or "Full Survey" where everything is fully filled-up, depth-inclination-azimuth.|Changes in: Example|
|data.SurveyReferenceIdentifier|string|Survey Reference Identifier|Unique or Distinctive Survey Reference Number, Job Number, File Number, Identifier, Label, Name, etc. as indicated on a directional survey report, file, etc.  Use this attribute to allow correlation of the data in this Directional Survey back to the original source document, file, etc.|Changes in: Example|
|data.SurveyToolTypeID<br> &rarr; [SurveyToolType](../../../E-R/reference-data/SurveyToolType.1.0.0.md)|string|Type of the Survey Tool|The type of tool or equipment used to acquire this Directional Survey.  For example, gyroscopic, magnetic, MWD, TOTCO, acid bottle, etc. Follow OWSG reference data and support the ISCWSA survey tool definitions.|Changes in: Example|
|data.ExtrapolatedMeasuredDepth|number|Extrapolated Measured Depth|The measured depth to which the survey segment was extrapolated.|Changes in: Example|
|data.BaseDepthMeasuredDepth|number|Survey Base Measured Depth|Measured depth within the wellbore of the LAST surveyed station with recorded data.  If a stored survey has been extrapolated to a deeper depth than the last surveyed station then that is the extrapolated measured depth and not the survey base depth.|Changes in: Example|
|data.TieMeasuredDepth|number|Tie Measured Depth|Tie-point depth measured along the wellbore from the measurement reference datum to the survey station - where tie point is the place on the originating survey where the current survey intersect it.|Changes in: Example|
|data.TieTrueVerticalDepth|number|Tie True Vertical Depth|True Vertical Depth of the TieMeasuredDepth|Changes in: Example|
|data.AppliedOperations[]|string|Applied Operations|The audit trail of operations applied to the station coordinates from the original state to the current state. The list may contain operations applied prior to ingestion as well as the operations applied to produce the Wgs84Coordinates. The text elements refer to ESRI style CRS and Transformation names, which may have to be translated to EPSG standard names.|Changes in: Example|
|data.CompanyID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Company ID|The relationship to company who engaged the service company (ServiceCompanyID) to perform the surveying.|Changes in: Example|
|data.VerticalSectionAzimuth|number|Vertical Section Azimuth|Azimuth angle used for vertical section projection/computations of the survey stations.|Added property|
|data.GeoMagneticModelID<br> &rarr; [GeoMagneticModel](../../../E-R/reference-data/GeoMagneticModel.1.0.0.md)|string|Geomagnetic Model ID|Geomagnetic Model Name including the applicable year used to calculate Geomagnetic field for a given date, coordinate and measured depth (when calculated down the wellbore).|Added property|
|data.MagneticFieldCalculationDate|string|MagneticFieldCalculationDate|Date against Geomagnetic field calculated|Added property|
|data.MagneticDeclinationUsed|number|Magnetic Declination Used|Calculated magnetic declination used to correct a Magnetic North referenced azimuth to a True North azimuth. Magnetic declination angles are measured positive clockwise from True North to Magnetic North (or negative in the anti-clockwise direction). To convert a Magnetic azimuth to a True North azimuth, the magnetic declination should be added. Starting value if stations have individual values.|Added property|
|data.MagneticDeclinationUncertainty|number|Magnetic Declination Uncertainty|Survey tool declination uncertainty.|Added property|
|data.MagneticDipAngleReference|number|Magnetic Dip Angle Reference|Calculated magnetic dip angle theoretical / reference value.|Added property|
|data.MagneticDipAngleUncertainty|number|Magnetic Dip Angle Uncertainty|Survey tool dip angle uncertainty.|Added property|
|data.TotalMagneticFieldStrength|number|Total Magnetic Field Strength|Calculated geomagnetic field theoretical/reference value.|Added property|
|data.TotalMagneticFieldStrengthUncertainty|number|Total Magnetic Field Strength Uncertainty|Survey tool magnetic uncertainty.|Added property|
|data.GravityModelID<br> &rarr; [GravityModel](../../../E-R/reference-data/GravityModel.1.0.0.md)|string|Gravity Model ID|Identifier of the Gravity Model in use for the survey.|Added property|
|data.TotalGravityFieldStrength|number|Total Gravity Field Strength|Calculated total gravity field.|Added property|
|data.TotalGravityFieldStrengthUncertainty|number|Total Gravity Field Strength Uncertainty|Survey tool gravity uncertainty.|Added property|
|data.VerticalSectionOriginNS|number|Vertical Section Origin N/-S|Vertical Section Origin North / -South relative to the Well SHL Projected CRS 0, 0 origin. 0 where Vertical Section Projection originates from the wellhead.|Added property|
|data.VerticalSectionOriginEW|number|Vertical Section Origin E/-W|Vertical Section Origin East / -West relative to the Well SHL Projected CRS 0, 0 origin. 0 where Vertical Section Projection originates from the wellhead.|Added property|
|data.IsDefinitive|boolean|Definitive|True indicates that this trajectory is definitive for this wellbore as provided by the survey contractor. False or not given indicates otherwise. There can only be one trajectory per wellbore with definitive=true and it must define the geometry of the whole wellbore (surface to TD). The definitive trajectory may represent a composite of survey data from one or more other trajectories.|Added property|
|data.IsMemory|boolean|Memory|Is trajectory a result of a memory dump from a tool?|Added property|
|data.IsFinal|boolean|Final|From the survey contractors perspective providing the survey to the Operator is the trajectory final (true) or intermediate/preliminary (false)? Does not mean that the trajectory cannot be worked on further by the Operator.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)