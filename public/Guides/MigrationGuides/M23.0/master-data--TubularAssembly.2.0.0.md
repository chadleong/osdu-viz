<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--TubularAssembly:2.1.0`

Changes between [osdu:wks:master-data--TubularAssembly:2.0.0](../../../E-R/master-data/TubularAssembly.2.0.0.md) and [osdu:wks:master-data--TubularAssembly:2.1.0](../../../E-R/master-data/TubularAssembly.2.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Well Tubular data contains information on the tubular assemblies and their components for the well, wellbore, or wellbore completion (as appropriate). The tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well in the context of drilling, which is then pulled back out._
  * New Description: **_Well Tubular data contains information on the tubular assemblies and their components for the well, wellbore, or wellbore completion (as appropriate). Tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well in the context of drilling, which is then pulled back out e.g. a drillstring or workstring._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ParentWellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Parent Wellbore ID|Identifier of the Wellbore the Assembly is installed into or run in. Note: it may not be same wellbore that current assembly is installed into.|Changes in: Description|
|data.ParentAssemblyID<br> &rarr; [TubularAssembly](../../../E-R/master-data/TubularAssembly.2.1.0.md)|string|Parent Assembly ID|Optional - Identifier of the parent assembly (in case of side-track, multi-nesting,…) - The Concentric Tubular model is used to identify the Assembly that an Assembly sits inside e.g. Surface Casing set inside Conductor, Tubing set inside Production Casing, a Bumper Spring set inside a Production Tubing Profile Nipple, Liner set inside Casing, etc. This is needed to enable a Digital Well Sketch application to understand relationships between Assemblies including those in parent Wellbores.|Changes in: Description|
|_data.TubularAssemblyStates[]_|_object_|_TubularAssemblyStatus_|_The full record of historical and current states of the Assembly. The current active state is recorded in TubularAssemblyStatus. Fragment Description: Reflects the current status of the Assembly - as 'installed', 'pulled', 'planned',... - Applicable to tubing/completions as opposed to drillstrings. Historical states are recorded in TubularAssemblyStates._|Changes in: Description|
|data.TubularAssemblyNumber|integer|Tubular Assembly Number|Sequence of the TubularAssembly (Typically BHA sequence or simply BHA #)|Changes in: Description|
|data.LinerTypeID<br> &rarr; [LinerType](../../../E-R/reference-data/LinerType.1.0.0.md)|string|Liner Type ID|This reference table describes the type of liner used in the borehole where applicable. For example, slotted, gravel packed or pre-perforated etc.|Changes in: Example|
|data.TubularAssemblyTotalLength|number|Tubular Assembly Total Length|Total Length of the whole assembly.|Changes in: Example|
|data.AssemblyTopMD|number|Assembly Top MD|The measured depth at the top of the Tubular Assembly|Changes in: Example|
|data.AssemblyBaseMD|number|Assembly Base MD|The measured depth at the base (bottom) of the Tubular Assembly|Changes in: Example|
|data.AssemblyTopReportedTVD|number|Assembly Top Reported TVD|True Vertical Depth of the top of the Assembly|Changes in: Example|
|data.AssemblyBaseReportedTVD|number|Assembly Base Reported TVD|True Vertical Depth of the base of the Assembly|Changes in: Example|
|data.CirculatedHours|number|CirculatedHours|Hours Circulated before running Assembly|Added property|
|data.ContractorID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Contractor|Tubular Running Contractor|Added property|
|data.FluidBehindDensity|number|Fluid Behind Density|Density of Fluid Behind Assembly|Added property|
|data.FluidBehindTypeID<br> &rarr; [WellFluidType](../../../E-R/reference-data/WellFluidType.1.0.0.md)|string|Fluid Behind Type|Type of fluid behind (outside) assembly|Added property|
|data.FluidLostVolume|number|Fluid Lost Volume|Fluid Lost Volume when running assembly in hole|Added property|
|data.InSlipsWeight|number|Weight in Slips|Weight of Assembly in Slips|Added property|
|data.IsFluidLost|boolean|Fluid Lost|Is Fluid Lost|Added property|
|data.IsParallel|boolean|Parallel|Is Parallel/Dual Assembly|Added property|
|data.HoleAngleMax|number|Max Hole Angle|Maximum Hole Angle|Added property|
|data.InHoleDate|string|Date In Hole|Date/time Assembly started to be run in hole|Added property|
|data.LandedDate|string|Date Landed|Date/time assembly was set/landed|Added property|
|data.LandedDepthAdjustment|number|Landed Depth Adjustment|Depth Adjustment for use in Landed Depth calculation. Set MD = Top MD + Assembly Length + Depth Adjustment. Note that Depth Adjustment can be positive or negative length.|Added property|
|data.LandedWeight|number|Landed Weight|Weight of Assembly when Landed|Added property|
|data.TaggedMD|number|Tagged Measured Depth|Tagged Measured Depth comparison to estimated Landed Depth|Added property|
|data.OpenHoleDiameter|number|Open Hole Diameter|Open Hole Size/Diameter behind Assembly|Added property|
|data.EstimatedWeightBelowJar|number|Estimated Weight Below Jar|Estimated Weight Below Jar|Added property|
|data.MaximumOuterDiameter|number|Maximum Outer Diameter|Maximum Outer Diameter|Added property|
|data.MaximumOuterDiameterMD|number|Maximum OD Measured Depth|Maximum Outer Diameter Measured Depth|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)