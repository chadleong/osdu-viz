<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--PlannedCementJob:1.4.0`

Changes between [osdu:wks:master-data--PlannedCementJob:1.3.0](../../../E-R/master-data/PlannedCementJob.1.3.0.md) and [osdu:wks:master-data--PlannedCementJob:1.4.0](../../../E-R/master-data/PlannedCementJob.1.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.CementStages[].CementingFluid.CementAdditives[].AdditiveVendorID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Additive Vendor ID|Vendor/Supplier of additive|Added property|
|data.CementStages[].CementingFluid.FluidTopTrueVerticalDepth|number|Fluid Top True Vertical Depth|True Vertical Depth at top of fluid placement at the end of Stage.|Added property|
|data.CementStages[].CementingFluid.FluidBaseTrueVerticalDepth|number|Fluid BaseTrue Vertical Depth|True Vertical Depth at bottom of fluid placement at the end of Stage.|Added property|
|data.CementStages[].CementingFluid.AnnularFluidVolume|number|Annular Fluid Volume|Volume of given fluid that resides in the annulus.|Added property|
|data.CementStages[].AnnularLength|number|Annular Length|Length of the cement column|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)