<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--PerforationInterval:1.2.0`

Changes between [osdu:wks:master-data--PerforationInterval:1.1.0](../../../E-R/master-data/PerforationInterval.1.1.0.md) and [osdu:wks:master-data--PerforationInterval:1.2.0](../../../E-R/master-data/PerforationInterval.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _A Perforation Interval is associated to a Perforation Job. An interval is the Top & Base depth range that a specific Perforating Gun suite was fired in unison to produce Openings. An interval should be created for each Gun suite fired. A interval should also be created for a specific Tubing Punch firing also._
  * New Description: **_A Perforation Interval is associated to a Perforation Job. An interval is the Top & Base depth range that a specific Perforating Gun suite was fired in unison to produce Openings. An interval should be created for each Gun suite fired. A interval should also be created for a specific Tubing Punch firing events also._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Wellbore|Business natural key or code of the parent Wellbore to which this record belongs|Changes in: Example|
|data.PerforationJobID<br> &rarr; [PerforationJob](../../../E-R/master-data/PerforationJob.1.2.0.md)|string|Perforation Job ID|SRN to Job performed to construct the Perf Intervals|Changes in: Example|
|data.SequenceNumber|integer|Sequence Number|Sequence Number (guns fired sequence)|Changes in: Example|
|data.ClusterRefNo|number|Cluster Reference #|Cluster reference number|Changes in: Example|
|data.IntervalDateTime|string|Perforation Interval Date/Time|Perforation interval date/time|Changes in: Example|
|data.IntervalTypeID<br> &rarr; [PerforationIntervalType](../../../E-R/reference-data/PerforationIntervalType.1.0.0.md)|string|Perforation Interval Type|Perforated interval type|Changes in: Example|
|data.IntervalTopMD|number|Perforation Interval Top MD|MD at top of perfed interval|Changes in: Example|
|data.IntervalBaseMD|number|Perforation Interval Base MD|MD at base of perfed interval|Changes in: Example|
|data.IntervalLength|number|Interval Length|Distance between MD top and base of interval (net distance) aka 'Top Shot to Bottom Shot' Interval.|Changes in: Example|
|data.WirelineDiameterTypeID<br> &rarr; [PerforationIntervalWLSize](../../../E-R/reference-data/PerforationIntervalWLSize.1.0.0.md)|string|Wireline Diameter|Wireline diameter|Changes in: Example|
|data.IntervalReasonTypeID<br> &rarr; [PerforationIntervalReason](../../../E-R/reference-data/PerforationIntervalReason.1.0.0.md)|string|Reason|Interval Reason|Changes in: Example|
|data.GunDiameter|number|Gun Diameter|Gun diameter|Changes in: Example|
|data.GunCarrierManufacturerID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Gun Carrier Manufacturer|Gun Carrier Manufacturer|Changes in: Example|
|data.GunCarrierTypeID<br> &rarr; [PerforationGunCarrierType](../../../E-R/reference-data/PerforationGunCarrierType.1.0.0.md)|string|Gun Carrier Type|Gun Carrier Type|Changes in: Example|
|data.GunCarrierModelID<br> &rarr; [PerforationGunCarrierModel](../../../E-R/reference-data/PerforationGunCarrierModel.1.0.0.md)|string|Gun Carrier Model|Gun Carrier Model|Changes in: Example|
|data.GunCarrierCategoryTypeID<br> &rarr; [PerforationGunCarrierCategory](../../../E-R/reference-data/PerforationGunCarrierCategory.1.0.0.md)|string|Gun Carrier Category|Gun Carrier Category|Changes in: Example|
|data.GunCarrierPhasing<br> &rarr; [PerforationGunPhasingType](../../../E-R/reference-data/PerforationGunPhasingType.1.0.1.md)|string|Gun Carrier Phasing|Gun Carrier Phasing (angle between perfs). Implemented via a reference list in order to standardize the values.|Changes in: Example|
|data.GunCarrierDescription|string|Gun Carrier Description|Gun Carrier Description|Added property|
|data.GunFiringHeadTypeID<br> &rarr; [PerforationGunFiringHeadType](../../../E-R/reference-data/PerforationGunFiringHeadType.1.0.0.md)|string|Gun Firing Head Type|Gun Firing Head Type|Changes in: Example|
|data.GunMetallurgyTypeID<br> &rarr; [PerforationGunMetallurgyType](../../../E-R/reference-data/PerforationGunMetallurgyType.1.0.0.md)|string|Gun Metallurgy Type|Metallurgy of the gun|Changes in: Example|
|data.ChargeManufacturerID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Charge Manufacturer|Charge Make/Manufacturer|Changes in: Example|
|data.ChargeTypeID<br> &rarr; [PerforationGunChargeType](../../../E-R/reference-data/PerforationGunChargeType.1.0.0.md)|string|Charge Type|Charge Type|Changes in: Example|
|data.ChargeShapeID<br> &rarr; [PerforationGunChargeShape](../../../E-R/reference-data/PerforationGunChargeShape.1.0.0.md)|string|Charge Shape|Charge Shape|Changes in: Example|
|data.ChargeSize<br> &rarr; [PerforationGunChargeSize](../../../E-R/reference-data/PerforationGunChargeSize.1.0.0.md)|string|Charge Size|Charge Size|Changes in: Example|
|data.ChargeDescription|string|Charge Description|Charge Description|Added property|
|data.GunSwellDiameter|number|Gun Swell Diameter|Gun Swell Diameter|Changes in: Example|
|data.ShotDensity|number|Shot Density|Gun Shot Density (shots per foot)|Changes in: Example|
|data.EntranceHoleDiameter|number|Perforation Entrance Hole Diameter|Perforation Entrance Hole Diameter|Changes in: Example|
|data.PenetrationDepth|number|Perforation Penetration Depth|Estimated perforation penetration distance|Changes in: Example|
|data.IsAdditionalShot|boolean|Additional Shot|Additional shot Y/N (+1 to Tot Shots calc)|Changes in: Example|
|data.Misfires|integer|Misfires|Total number of gun / charge misfires|Changes in: Example|
|data.ReservoirTemperature|number|Reservoir Temperature|Reservoir Temperature|Changes in: Example|
|data.CasingCollarLocatorMD|number|Casing Collar Locator MD|Measured Depth of the Casing Collar Locator used to align perforating guns on depth|Changes in: Example|
|data.CCLTopShotDistance|number|CCL Top Shot Distance|Distance from CCL to Interval Top|Changes in: Example|
|data.FluidBeforeMD|number|Fluid Depth Before Shot|Static fluid level before perforating|Changes in: Example|
|data.FluidAfterMD|number|Fluid Depth After Shot|Static fluid level after perforating|Changes in: Example|
|data.GaugeMD|number|Gauge Measured Depth|Depth of gauge(s) run while perforating.|Changes in: Example|
|data.BHPressureTypeID<br> &rarr; [BottomHolePressureType](../../../E-R/reference-data/BottomHolePressureType.1.0.0.md)|string|BH Pressure Type|How was the bottom hole pressure determined?  Measured, estimated, etc.|Changes in: Example|
|data.DuringPerfGaugePressure|number|Gauge Pressure During Perforation|Pressure during perforation|Changes in: Example|
|data.InitialSurfPressure|number|Initial Surface Pressure|Initial surface pressure|Changes in: Example|
|data.FinalSurfPressure|number|Final Surface Pressure|Final surface pressure|Changes in: Example|
|data.MPPPressure|number|MPP Pressure|Mid point perf pressure|Changes in: Example|
|data.FluidLossBeforeRate|number|Fluid Rate Before Shot|Fluid loss rate  before perforating|Changes in: Example|
|data.FluidLossAfterRate|number|Fluid Rate After Shot|Fluid lossrate after perforating|Changes in: Example|
|data.CrushZoneDiameter|number|Crush Zone Diameter|Crush Zone Diameter|Changes in: Example|
|data.TechnicalResult|string|Technical Result|Technical Result|Changes in: Example|
|data.IntervalComments|string|Interval Comments|Interval Comments|Changes in: Example|
|data.Name|string|Name|The name under which this perforation interval is known.|Changes in: Description, Example|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)