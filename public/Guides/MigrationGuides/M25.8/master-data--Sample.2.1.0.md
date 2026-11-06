<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Sample:3.0.0`

Changes between [osdu:wks:master-data--Sample:2.1.0](../../../E-R/master-data/Sample.2.1.0.md) and [osdu:wks:master-data--Sample:3.0.0](../../../E-R/master-data/Sample.3.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _This object captures attributes of a sample/ specimen (rock or fluid) acquired either through an original acquisition event, sub-sampling event, generated from recombination of other samples /specimens or derived through the application of some laboratory process on the parent sample._
  * New Description: **_This object captures attributes of a sample/ specimen (rocks, fluids, or other materials) acquired either through an original acquisition event, sub-sampling event, generated from recombination of other samples /specimens or derived through the application of some laboratory process on the parent sample._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SampleTypeID<br> &rarr; [SampleType](../../../E-R/reference-data/SampleType.1.1.0.md)<br> &rarr; [WellFluidType](../../../E-R/reference-data/WellFluidType.1.0.0.md)<br> &rarr; [StimJobFluidType](../../../E-R/reference-data/StimJobFluidType.1.0.0.md)|string|Sample Type ID|The classification of the type of specimen/sample (e.g. whole core, cuttings, rock chip, oil extract, headspace gas), which is identified for the purpose of analysing the specimen or a subsample of it. In partnership with other reference data, the sample type may indicate the general substance type, size, shape, general source, and in certain cases, the retrieval method. In rare cases, the special purpose of a specimen might contribute to its sample type classification.|Changes in: Relationship Targets, Description, Pattern, Example|
|data.SampleAcquisition.SampleAcquisitionDetail.SiteID<br> &rarr; [GenericFacility](../../../E-R/master-data/GenericFacility.1.0.1.md)<br> &rarr; [GenericSite](../../../E-R/master-data/GenericSite.1.1.1.md)|string|Site ID|Identifies the type of non-facility location (e.g. beach, oil seep, outcrop, sinkhole) that can be where the acquisition event occurred to collect a rock or fluid sample. Being different from a facility (which includes wells), a generic site is usually a natural location, not a man-made structure or a grouping of equipment.|Changes in: Description|
|data.SampleAcquisition.SampleAcquisitionDetail.MudBaseTypeID<br> &rarr; [MudBaseType](../../../E-R/reference-data/MudBaseType.1.0.0.md)|string|Mud Base Type ID|Identifies the type of fluid in the wellbore annulus used during the acquisition event or present in the sample required.|Changes in: Description|
|data.SampleAcquisition.SampleAcquisitionDetail.MudTracerTypeID<br> &rarr; [MudTracerType](../../../E-R/reference-data/MudTracerType.1.0.1.md)|string|Mud Tracer Type ID|Identifies the type of tracer used during the sample acquisition event.|Changes in: Description|
|data.SampleAcquisition.SampleAcquisitionDetail.AcquisitionToolFamilyID<br> &rarr; [SampleAcquisitionToolFamily](../../../E-R/reference-data/SampleAcquisitionToolFamily.1.0.0.md)|string|Acquisition Tool Family Id|Identifies the category of the tool type used to acquire the sample/specimen, such as rotary or percussive sidewall tooling, or the inner barrel type for conventional coring. Note that other relevant facets of tool identification are captured by other reference lists, such as core catcher type, inner sleeve material type, drill bit, and sample container.|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.ConventionalCoreInnerSleeveMaterialID<br> &rarr; [ConventionalCoreInnerSleeveMaterial](../../../E-R/reference-data/ConventionalCoreInnerSleeveMaterial.1.0.0.md)|string|Conventional Core Inner Sleeve Material Id|Identifies the category of material of the cylindrical sleeve that lines the inside of the inner core barrel during coring operations.|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.ConventionalCoreCatcherTypeID<br> &rarr; [ConventionalCoreCatcherType](../../../E-R/reference-data/ConventionalCoreCatcherType.1.0.0.md)|string|Conventional Core Catcher Type Id|Identifies the category of the core catcher used in core acquisition. A core catcher is a device located in the core barrel of drilling tools that securely retains the core sample during its extraction from the subsurface.|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.WasCryogenicallyAcquired|boolean|Was Cryogenically Acquired|Indicates whether the rock was cryogenically frozen when it was acquired. In this process, the drilling fluid is pushed aside from the coring zone, liquid nitrogen or similar cryogenic agent is injected through a specialized cryogenic coring tool, and then a core barrel retrieves the stabilized core sample.|Added property|
|data.SampleAcquisition.SampleAcquisitionDetail.IsCommingledProductionFluid|boolean|Is Commingled Production Fluid|Indicates whether the fluid sample consists of fluids from multiple reservoir zones and/or wellbore openings mixed into one production flow stream before being collected.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)