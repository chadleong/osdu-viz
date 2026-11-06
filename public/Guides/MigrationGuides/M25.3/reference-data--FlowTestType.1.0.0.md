<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--FlowTestType:1.0.1`

Changes between [osdu:wks:reference-data--FlowTestType:1.0.0](../../../E-R/reference-data/FlowTestType.1.0.0.md) and [osdu:wks:reference-data--FlowTestType:1.0.1](../../../E-R/reference-data/FlowTestType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The method used to produce an instance of a flow test record_
  * New Description: **_A test of flow rate, pressure and fluids to determine the capability of a well._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--FlowTestType:BankersTest | Bankers test | A productivity test to demonstrate to investors there is adequate economic potential. | Value added. |
| partition-id:reference-data--FlowTestType:BuildupTest | Buildup test | The well is produced at a constant flow rate until pressure is stabilized, then shut in and record the buildup in pressure over time. | Value added. |
| partition-id:reference-data--FlowTestType:DrawdownTest | Drawdown test | During production the flow rate is held approximately constant while the well pressure is measured. | Value added. |
| partition-id:reference-data--FlowTestType:DrillStemTest | Drill stem test | A flow test performed after drilling an exploration well or prior to a completion decision, using a special test assembly and the drill string as the fluid pathway. | Value added. |
| partition-id:reference-data--FlowTestType:FlowTest | Flow test | General classification of flow test not covered by any of the specified test types. | Changes in Name, NameAlias, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--FlowTestType:FormationTest | Formation test | Gathering data on a formation to measure its projected and expected productivity, usually before installing casing. | Value added. |
| partition-id:reference-data--FlowTestType:InitialPotentialTest | Initial Potential test | A flow test to determine the maximum rate at which a well can produce or inject fluids when it is first completed. | Value added. |
| partition-id:reference-data--FlowTestType:Injection%20flow%20test | ~~Injection flow test~~ | ~~Measures the mobility of fluids based on rate and pressure~~ | **_Removed_** |
| partition-id:reference-data--FlowTestType:InjectionFlowTest | Injection flow test | Measures the mobility of injected fluids based on rate and pressure. | Value added. |
| partition-id:reference-data--FlowTestType:InterferenceTest | Interference test | A flow test involving a primary well and observation wells in a reservoir to improve estimates of directional permeability and reservoir storativity. | Value added. |
| partition-id:reference-data--FlowTestType:Multirate%20Test | ~~Multirate Test~~ | ~~A flow test performed at varying flow rates.~~ | **_Removed_** |
| partition-id:reference-data--FlowTestType:MultirateTest | Multirate test | A flow test performed at varying flow rates, by adjusting choke sizes to determine gas well deliverability and absolute open flow potential (AOF) | Value added. |
| partition-id:reference-data--FlowTestType:Production%20test | ~~Production test~~ | ~~A form of drawdown test whereby the target is shut-in until pressure reaches a static level, then allowed to flow at a constant rate.~~ | **_Removed_** |
| partition-id:reference-data--FlowTestType:ProductionTest | Production test | A flow test at any time during the life of a producing well to monitor reservoir performance and identify any potential problems. | Value added. |
| partition-id:reference-data--FlowTestType:SwabTest | Swab test | Fluid flow into the wellbore is induced by a temporary drop in pressure at the wellbore interval using a special wellbore tool. | Value added. |
| partition-id:reference-data--FlowTestType:WirelineFormationTest | Wireline formation test | A test for pressure equilibrium conducted by a wireline device. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Flow_Test_Type)
* &rarr; [Manifest record FlowTestType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/FlowTestType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)