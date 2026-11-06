<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellBarrierElementTest:1.3.0`

Changes between [osdu:wks:master-data--WellBarrierElementTest:1.2.0](../../../E-R/master-data/WellBarrierElementTest.1.2.0.md) and [osdu:wks:master-data--WellBarrierElementTest:1.3.0](../../../E-R/master-data/WellBarrierElementTest.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Describes a complete sequence to test for the Well Integrity_
  * New Description: **_Describes a complete sequence tested or planned to be tested for Well Integrity._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.RigUtilizationID<br> &rarr; [RigUtilization](../../../E-R/master-data/RigUtilization.1.1.0.md)|string|Rig Utilization ID|The ID of the Rig associated with the test.|Changes in: Description, Example|
|data.WellboreID<br> &rarr; [WellPlanningWellbore](../../../E-R/master-data/WellPlanningWellbore.1.3.0.md)<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Wellbore ID|The ID of the Wellbore on which the test was or will be performed. This ID can be used to relate to either the Wellbore or WellPlanningWellbore object, depending on the scenario.|Changes in: Relationship Targets, Description, Pattern|
|data.WellActivityID<br> &rarr; [WellActivity](../../../E-R/master-data/WellActivity.1.2.0.md)|string|Well Activity ID|The ID of the Well Activity associated with the test.|Added property|
|data.WellActivityProgramID<br> &rarr; [WellActivityProgram](../../../E-R/master-data/WellActivityProgram.1.1.0.md)|string|Well Activity Program ID|The ID of the Well Activity Program that holds the Phase description.|Changes in: Description|
|data.WellOperationsReportID<br> &rarr; [WellOperationsReport](../../../E-R/work-product-component/WellOperationsReport.2.1.0.md)|string|Well Operations Report ID|The ID of the Well Operations Report where the barrier element test operation is described.|Added property|
|data.WellboreArchitectureID<br> &rarr; [WellboreArchitecture](../../../E-R/master-data/WellboreArchitecture.1.2.0.md)|string|Wellbore Architecture ID|The ID of the Wellbore Architecture applicable at the time of the test.|Changes in: Description|
|data.WBETestPlanName|string|Well Barrier Element Test Plan Name|The name of the Well Barrier Element Test Plan.|Changes in: Description|
|data.TestTypeID<br> &rarr; [TestType](../../../E-R/reference-data/TestType.1.0.1.md)|string|Test Type ID|References an Open reference list for the Well Barrier Element Test Type. Different test types will have different templated pass/fail or acceptance criteria. The list is Reference data has governance open to allow for addition of different test types (e.g. BSEE BOP test and A. N. Other BOP Test).|Changes in: Description, Example|
|data.TestSubTypeID<br> &rarr; [TestSubType](../../../E-R/reference-data/TestSubType.1.0.1.md)|string|Test Sub Type ID|The Well Barrier Element Test Sub-Type - typically the barrier component being tested. For example, a test of a PackerHanger. Free text or Open list (perhaps local).|Changes in: Description, Example|
|data.OperationalProcedureDescription|string|Operational Procedure Description|Textual description of the operational procedure and decision points.|Changes in: Description|
|_data.TestSteps[]_|_object_|_W.B.E. Test Step_|_One or more test steps, their parameters and their criteria. Fragment Description: Description of an individual step of the overall Well Barrier Element Test_|Changes in: Description|
|_data.TestSteps[].ExpectedVolumesPumped[]_|_object_|_Expected Volume_|_A list of pressures and the expected volume pumped at the given pressure. Fragment Description: Individual description, for a given pressure, of the expected volume pumped for a single step of the test._|Changes in: Description|
|data.TestSteps[].ExpectedVolumesPumped[].Pressure|number|Pressure|Value for planned pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesPumped[].MinimumVolume|number|Minimum Cumulative Volume Pumped|Minimum expected  volume pumped at specified pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesPumped[].Volume|number|Expected Cumulative Volume Pumped|Expected volume pumped at specified pressure|Changes in: Example|
|data.TestSteps[].ExpectedVolumesPumped[].MaximumVolume|number|Maximum Cumulative Volume Pumped|Maximum expected volume pumped at specified pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesPumped[].PumpingRate|number|Pumping Rate|The pumping rate for the expected volume pumped at a specified pressure.|Added property|
|_data.TestSteps[].ExpectedVolumesBledBack[]_|_object_|_Expected Volume_|_A list of pressures and the expected volume bled back at the given pressure. Fragment Description: Individual description, for a given pressure, of the expected bled back volume for a single step of the test._|Changes in: Description|
|data.TestSteps[].ExpectedVolumesBledBack[].Pressure|number|Pressure|Value for planned pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesBledBack[].MinimumVolume|number|Minimum Cumulative Volume Pumped|Minimum expected  volume pumped at specified pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesBledBack[].Volume|number|Expected Cumulative Volume Pumped|Expected volume pumped at specified pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesBledBack[].MaximumVolume|number|Maximum Cumulative Volume Pumped|Maximum expected volume pumped at specified pressure.|Changes in: Description, Example|
|data.TestSteps[].ExpectedVolumesBledBack[].PumpingRate|number|Pumping Rate|The pumping rate for the expected volume pumped at a specified pressure.|Added property|
|data.TestSteps[].TestFluids[].TestFluidTypeID<br> &rarr; [WellFluidType](../../../E-R/reference-data/WellFluidType.1.0.0.md)<br> &rarr; [FluidType](../../../E-R/reference-data/FluidType.1.0.2.md)|string|Test Fluid Type ID|Same type reference list as used in Fluids Program|Changes in: Example|
|data.TestSteps[].TestFluids[].FluidDensityTest|number|Test Fluid Density|Density value for the test fluid|Changes in: Example|
|data.TestSteps[].TestFluids[].FluidDensitySystem|number|System Fluid Density|Density value for the system fluid|Changes in: Example|
|_data.TestSteps[].ActualVolumesPumped[]_|_object_|_Actual Volume_|_A list of pressures and the actual volume pumped at the given pressure. Fragment Description: Individual description, for a given pressure, of the actual volume pumped for a single step of the test._|Added property|
|data.TestSteps[].ActualVolumesPumped[].Pressure|number|Pressure|Value for actual pressure.|Added property|
|data.TestSteps[].ActualVolumesPumped[].MinimumVolume|number|Minimum Cumulative Volume Pumped|Minimum actual volume pumped at specified pressure.|Added property|
|data.TestSteps[].ActualVolumesPumped[].Volume|number|Actual Cumulative Volume Pumped|Actual volume pumped at specified pressure|Added property|
|data.TestSteps[].ActualVolumesPumped[].MaximumVolume|number|Maximum Cumulative Volume Pumped|Maximum actual volume pumped at specified pressure.|Added property|
|data.TestSteps[].ActualVolumesPumped[].PumpingRate|number|Pumping Rate|The pumping rate for the actual volume pumped at a specified pressure.|Added property|
|_data.TestSteps[].ActualVolumesBledBack[]_|_object_|_Actual Volume_|_A list of pressures and the actual volume bled back at the given pressure. Fragment Description: Individual description, for a given pressure, of the actual bled back volume for a single step of the test._|Added property|
|data.TestSteps[].ActualVolumesBledBack[].Pressure|number|Pressure|Value for actual pressure|Added property|
|data.TestSteps[].ActualVolumesBledBack[].MinimumVolume|number|Minimum Cumulative Volume Pumped|Minimum actual  volume pumped at specified pressure.|Added property|
|data.TestSteps[].ActualVolumesBledBack[].Volume|number|Expected Cumulative Volume Pumped|Actual volume pumped at specified pressure.|Added property|
|data.TestSteps[].ActualVolumesBledBack[].MaximumVolume|number|Maximum Cumulative Volume Pumped|Maximum actual  volume pumped at specified pressure.|Added property|
|data.TestSteps[].ActualVolumesBledBack[].PumpingRate|number|Pumping Rate|The pumping rate for the actual volume pumped at a specified pressure.|Added property|
|data.TestSteps[].StepDescription|string|Step Description|A description of the individual test step.|Added property|
|data.TubularAssemblyID<br> &rarr; [TubularAssembly](../../../E-R/master-data/TubularAssembly.2.1.0.md)|string|Tubular Assembly ID|The ID of the Tubular Assembly associated with the test.|Added property|
|data.HoleSectionID<br> &rarr; [HoleSection](../../../E-R/master-data/HoleSection.1.4.0.md)|string|Hole Section ID|The ID of the Hole Section in which the test was performed.|Added property|
|data.BlowOutPreventerID|string|Blow Out Preventer ID|The ID of the Blowout Preventer associated with the test.|Added property|
|data.TestDateTime|string|Test Date/time|Date/time well integrity test was performed.|Added property|
|data.TestLoadCase|string|Test Load Case|The load case associated with the test.|Added property|
|data.TestGuidance|string|Test Guidance|The guidance associated with the test.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)