<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--CementJob:1.3.0`

Changes between [osdu:wks:work-product-component--CementJob:1.2.0](../../../E-R/work-product-component/CementJob.1.2.0.md) and [osdu:wks:work-product-component--CementJob:1.3.0](../../../E-R/work-product-component/CementJob.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveNameID<br> &rarr; [FluidAdditiveName](../../../E-R/reference-data/FluidAdditiveName.1.0.0.md)|string|Additive Name ID|Relationship to a FluidAdditiveName reference-data record.|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveVendorID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Additive Vendor ID|Vendor/Supplier of additive|Added property|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveCode|string|Additive Code|Additive Code|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveTypeID<br> &rarr; [AdditiveType](../../../E-R/reference-data/AdditiveType.1.0.1.md)|string|Additive Type ID|The liquid, solid or gaseous substance used to manipulate the function or properties of a fluid.|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveRoleID<br> &rarr; [AdditiveRole](../../../E-R/reference-data/AdditiveRole.1.0.0.md)|string|Additive Role ID|The chief purpose or reason for adding a substance to a fluid used in a downhole operation.|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveFormulationID<br> &rarr; [FluidAdditiveFormulationType](../../../E-R/reference-data/FluidAdditiveFormulationType.1.0.0.md)|string|Additive Formulation|Additive Formulation - Wet or Dry.|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveDensity|number|Additive Density|Additive density|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveAmountUoM<br> &rarr; [FluidAdditiveUnitOfMeasure](../../../E-R/reference-data/FluidAdditiveUnitOfMeasure.1.0.0.md)|string|Additive Amount Unit|Additive Amount Unit|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveTypeConcentrationID<br> &rarr; [FluidAdditiveConcentrationType](../../../E-R/reference-data/FluidAdditiveConcentrationType.1.0.0.md)|string|Type Conc|ConcentrationType: %BWOC (%By weight of Cement), %BWOB (%By weight of blend), %BWOW (%By weight of water), %BWOBF (%By weight of base fluid)|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveConcentrationAmount|number|Concentration Amount|Concentration Amount: unit type depends on typeConc.|Changes in: Description, Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveConcentrationUnitOfMeasureID<br> &rarr; [FluidAdditiveConcUnitOfMeasure](../../../E-R/reference-data/FluidAdditiveConcUnitOfMeasure.1.0.0.md)|string|Additive Concentration Unit Of Measure ID|Additive Concentration Unit Of Measure|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveSackMass|number|Mass of Sack|Mass of Sack|Changes in: Example|
|data.CementStages[].CementingFluid[].CementAdditives[].AdditiveLiquidVolume|number|Volume of container|Volume of container|Changes in: Example|
|data.CementStages[].CementingFluid[].FluidTopTrueVerticalDepth|number|Fluid Top True Vertical Depth|True Vertical Depth at top of fluid placement at the end of Stage.|Added property|
|data.CementStages[].CementingFluid[].FluidBaseTrueVerticalDepth|number|Fluid BaseTrue Vertical Depth|True Vertical Depth at bottom of fluid placement at the end of Stage.|Added property|
|data.CementStages[].CementingFluid[].AnnularFluidVolume|number|Annular Fluid Volume|Volume of given fluid that resides in the annulus.|Added property|
|data.CementStages[].AnnularLength|number|Annular Length|Length of the cement column|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)