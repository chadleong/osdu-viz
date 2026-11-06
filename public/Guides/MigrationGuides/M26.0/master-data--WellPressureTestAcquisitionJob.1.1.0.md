<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellPressureTestAcquisitionJob:1.2.0`

Changes between [osdu:wks:master-data--WellPressureTestAcquisitionJob:1.1.0](../../../E-R/master-data/WellPressureTestAcquisitionJob.1.1.0.md) and [osdu:wks:master-data--WellPressureTestAcquisitionJob:1.2.0](../../../E-R/master-data/WellPressureTestAcquisitionJob.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.PressureTestsAcquisitionRuns[].InstalledProbeTypeIDs[]<br> &rarr; [WellPressureTestProbeType](../../../E-R/reference-data/WellPressureTestProbeType.1.0.0.md)|string|Installed Presure Test Probe Type Identifier|Array describing the whole set of probes being installed (active or inactive) on the acquisition string for this run.|Changes in: Description|
|data.PressureTestsAcquisitionRuns[].InstalledGaugeTypeIDs[]<br> &rarr; [WellPressureTestGaugeType](../../../E-R/reference-data/WellPressureTestGaugeType.1.0.0.md)|string|Installed Presure Test Gauge Type Identifier|Array describing the whole set of gauges being installed (active or inactive) on the acquisition string for this run.|Changes in: Description|
|data.PressureTestsAcquisitionRuns[].ConveyanceMethodIDs[]<br> &rarr; [ConveyanceMethod](../../../E-R/reference-data/ConveyanceMethod.1.0.0.md)|string|Presure Test Conveyance MethodID|Identifiers of he conveyance method used to acquire the pressure test data - if not an acquired log leave empty/absent. Mainly a unique ID - but can be multiple in case of stuck pipe,…|Changes in: Title|
|~~data.PressureTestsAcquisitionRuns[].PressureTestCategoryID[]<br> &rarr; [WellPressureTestCategory](../../../E-R/reference-data/WellPressureTestCategory.1.0.0.md)~~|~~string~~|~~Pressure Test Category ID~~|~~DEPRECATED- Use Correct Spelling Instead:Main Category of the Presssure Test - could be Formation Test, Transient Test, Interference Transient Tests,…~~|Deprecated|
|data.PressureTestsAcquisitionRuns[].PressureTestCategoryIDs[]<br> &rarr; [WellPressureTestCategory](../../../E-R/reference-data/WellPressureTestCategory.1.0.0.md)|string|Pressure Test Category Ids|Array of Identifier from the main category(ies) of the Presssure Test - could be Formation Test, Transient Test, Interference Transient Tests,… Most of the time - might be an individual value - but available as array for broader usage|Added property|
|data.PressureTestsAcquisitionRuns[].PressureTestsAcquisitionStations[].StationIdentifier|integer|Station Identifier|Unique identifier of the station within the run (must be a sequential number,…) - it must be unique within the run|Changes in: Description|
|data.PressureTestsAcquisitionRuns[].PressureTestsAcquisitionStations[].HoleConditionTypeID<br> &rarr; [WellLogHoleType](../../../E-R/reference-data/WellLogHoleType.1.0.0.md)|string|Hole Condition Type Identifier|The status of the hole's condition while conducting test, whether cemented and cased or open hole.|Added property|
|data.PressureTestsAcquisitionRuns[].Remarks|string|Remarks|Remarks associated with the Run activity.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)