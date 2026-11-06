<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--TestSubType:1.0.1`

Changes between [osdu:wks:reference-data--TestSubType:1.0.0](../../../E-R/reference-data/TestSubType.1.0.0.md) and [osdu:wks:reference-data--TestSubType:1.0.1](../../../E-R/reference-data/TestSubType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Well Barrier Element test sub-types for the barrier component being tested such as Subsea BOP interval test, Surface BOP test, Surface PCE test, Wireline PCE Test_
  * New Description: **_Well Barrier Element test sub-types for the barrier component being tested such as Abandoned Test, Plug Test, Manifold Test, etc._**

* Changed Governance
  * Old Governance: _FIXED_
  * New Governance: **_OPEN_**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--TestSubType:Abandoned%20Test | Abandoned Test | DEPRECATED: Please use Code="AbandonedTest" with Name "Abandoned Test" instead. Abandoned Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:AbandonedTest | Abandoned Test | Test to ensure an abandoned well is properly sealed and poses no environmental or safety risks. | Value added. |
| partition-id:reference-data--TestSubType:BlowoutPreventerConnectorTest | Blowout Preventer Connector Test | Test to verify the integrity of a blowout preventer connector. | Value added. |
| partition-id:reference-data--TestSubType:BlowoutPreventerTest | Blowout Preventer Test | Test to ensure the integrity and functionality of a blowout preventer system. | Value added. |
| partition-id:reference-data--TestSubType:BoostLineTest | Boost Line Test | Test to ensure the integrity of a boost line.  | Value added. |
| partition-id:reference-data--TestSubType:BOP%20Connector%20Test | BOP Connector Test | DEPRECATED: Please use Code="BlowoutPreventerConnectorTest" with Name "Blowout Preventer Connector Test" instead. BOP Connector Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Break%20Test | Break Test | DEPRECATED: Please use Code="BreakTest" with Name "Break Test" instead. Break Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:BreakTest | Break Test | Test to assess the strength and integrity of a well’s components, particularly the casing and cement. | Value added. |
| partition-id:reference-data--TestSubType:Casing%20%2F%20BOP%20Test | Casing / BOP Test | DEPRECATED: This has been broken up into separate test subtypes. Please use Code "CasingTest" or "BlowoutPreventerTest" with Name "Casing Test" or "Blowout Preventer Test" with Name "Casing Test" instead. Casing / BOP Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Casing%20%2F%20Liner%20Test | Casing / Liner Test | DEPRECATED: This has been broken up into separate test subtypes. Please use Code "CasingTest" or "LinerTest" with Name "Casing Test" or "Liner Test" instead . Casing / Liner Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Casing%20Seal%20Assembly%20Test | Casing Seal Assembly Test | DEPRECATED: Please use Code="CasingSealAssemblyTest" with Name "Casing Seal Assembly Test" instead. Casing Seal Assembly Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:CasingSealAssemblyTest | Casing Seal Assembly Test | Test to ensure the integrity of a casing seal assembly.  | Value added. |
| partition-id:reference-data--TestSubType:CasingTest | Casing Test | Test to ensure the integrity of a well casing, ensuring there are no significant leaks or weaknesses that could compromise well safety. | Value added. |
| partition-id:reference-data--TestSubType:Cement%20Unit%20Test | Cement Unit Test | DEPRECATED: Please use Code="CementUnitTest" with Name "Cement Unit Test" instead. Cement Unit Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:CementUnitTest | Cement Unit Test | Test to ensure that the cementing equipment and processes are functioning correctly and can meet the demands of well operations. | Value added. |
| partition-id:reference-data--TestSubType:Coiled%20Tubing%20BOP%20Test | Coiled Tubing BOP Test | DEPRECATED: Please use Code="CoiledTubingBlowoutPreventerTest" with Name "Coiled Tubing Blowout Preventer Test" instead. Coiled Tubing BOP Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:CoiledTubingBlowoutPreventerTest | Coiled Tubing Blowout Preventer Test | Test to ensure the integrity and functionality of a blowout preventer system during coiled tubing operations. | Value added. |
| partition-id:reference-data--TestSubType:CompletionWorkOverRiserTest | Completion Work Over Riser Test | Test to ensure the integrity of a riser system used during well completion and workover operations. | Value added. |
| partition-id:reference-data--TestSubType:Crown%20Plugs%20Test | Crown Plugs Test | DEPRECATED: Please use Code="CrownPlugsTest" with Name "Crown Plugs Test" instead. Crown Plugs Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:CrownPlugsTest | Crown Plugs Test | Test to verify the integrity and functionality of crown plugs used in well operations. | Value added. |
| partition-id:reference-data--TestSubType:Deck%20Test | Deck Test | DEPRECATED: Please use Code="DeckTest" with Name "Deck Test" instead.  Deck Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:DeckTest | Deck Test | Test conducted on the deck of an offshore platform to ensure safety and integrity.  | Value added. |
| partition-id:reference-data--TestSubType:Diverter%20Test | Diverter Test | DEPRECATED: Please use Code="DiverterTest" with Name "Diverter Test" instead. Diverter Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:DiverterTest | Diverter Test | Test used on a diverter to ensure the diverter system is ready to perform its critical function of directing unwanted flow to a safe location, thereby protecting the rig and personnel. | Value added. |
| partition-id:reference-data--TestSubType:Emergency%20System%20Test | Emergency System Test | DEPRECATED: Please use Code="EmergencySystemTest" with Name "Emergency System Test" instead. Emergency System Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:EmergencySystemTest | Emergency System Test | Test to ensure all safety and control systems are functioning correctly and can respond effectively in case of an emergency. | Value added. |
| partition-id:reference-data--TestSubType:FIT%20%2F%20LOT | FIT / LOT | DEPRECATED: These test types are associated with "FormationIntegrityTestType" and are not needed in this list. FIT / LOT | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:FullOpeningSafetyValveTest | Full Opening Safety Valve Test | Test to ensure that the full opening safety valve, also known as a T.I.W valve, can effectively seal and hold pressure from both directions. | Value added. |
| partition-id:reference-data--TestSubType:Function%20Test | Function Test | DEPRECATED: Please use Code="FunctionTest" with Name "Function Test" instead. Function Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:FunctionTest | Function Test | Test to ensure components of a well are operating correctly and safely.  | Value added. |
| partition-id:reference-data--TestSubType:Injection%20Test | Injection Test | DEPRECATED: Please use Code="InjectionTest" with Name "Injection Test" instead. Injection Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:InjectionTest | Injection Test | Test to ensure that the well can safely and effectively handle the injection of fluids without compromising its structural integrity or the surrounding environment. | Value added. |
| partition-id:reference-data--TestSubType:InsideBlowoutPreventerTest | Inside Blowout Preventer Test | Test to ensure that the inside blowout preventer can effectively prevent backflow and control well pressure during drilling operations. | Value added. |
| partition-id:reference-data--TestSubType:InterventionRiserSystemTest | Intervention Riser System Test | Test to ensure the integrity of a riser system used in subsea well interventions. | Value added. |
| partition-id:reference-data--TestSubType:IRS%20%2F%20CWOR%20%2F%20WCP%20Test | IRS / CWOR / WCP Test | DEPRECATED: This has been broken up into separate test subtypes. Please use Code "InterventionRiserSystemTest", "CompletionWorkOverRiserTest", or "WellControlPackageTest" and Name "Intervention Riser System Test", "Completion Work Over Riser Test", or "Well Control Package Test" instead. IRS / CWOR / WCP Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:KellyHoseTest | Kelly Hose Test | Test to ensure that the kelly hose can withstand the high pressures and harsh conditions encountered during drilling operations. | Value added. |
| partition-id:reference-data--TestSubType:Line%20Test | Line Test | DEPRECATED: Please use Code="LineTest" with Name "Line Test" instead. Line Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:LinerTest | Liner Test | Test to ensure the integrity of a liner, ensuring there are no significant leaks or weaknesses that could compromise well safety. | Value added. |
| partition-id:reference-data--TestSubType:LineTest | Line Test | Test to ensure the integrity of the lines (pipes, tubing, etc.) used in the well. This test ensures that there are no leaks and that the lines can handle the expected pressures. | Value added. |
| partition-id:reference-data--TestSubType:Lower%20Completions%20Test | Lower Completions Test | DEPRECATED: Please use Code="LowerCompletionsTest" with Name "Lower Completions Test" instead. Lower Completions Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:LowerCompletionsTest | Lower Completions Test | Test to ensure the integrity of lower completion components. | Value added. |
| partition-id:reference-data--TestSubType:Lubricator%20Test | Lubricator Test | DEPRECATED: Please use Code="LubricatorTest" with Name "Lubricator Test" instead. Lubricator Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:LubricatorTest | Lubricator Test | Test to ensure the integrity of the lubricator system used in well operations, particularly during wireline or coiled tubing interventions. | Value added. |
| partition-id:reference-data--TestSubType:ManagedPressureDrillingManifoldTest | Managed Pressure Drilling Manifold Test | Test to ensure the integrity of the manifold system used to control the annular pressure profile during drilling operations. | Value added. |
| partition-id:reference-data--TestSubType:Manifold%20Test | Manifold Test | DEPRECATED: Please use Code="ManifoldTest" with Name "Manifold Test" instead. Manifold Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:ManifoldTest | Manifold Test | Test to ensure the integrity of the manifold system, which is used to control the flow of fluids from multiple wells or to distribute injected fluids. | Value added. |
| partition-id:reference-data--TestSubType:Miscellaneous%20Test | Miscellaneous Test | DEPRECATED: Please use Code="MiscellaneousTest" with Name "Miscellaneous Test" instead. Miscellaneous Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:MiscellaneousTest | Miscellaneous Test | Miscellaneous test used to ensure well integrity.  | Value added. |
| partition-id:reference-data--TestSubType:MPD%20Manifold%20Test | MPD Manifold Test | DEPRECATED: Please use Code="ManagedPressureDrillingManifoldTest" with Name "Managed Pressure Drilling Manifold Test" instead. MPD Manifold Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Negative%20%2F%20Inflow%20Test | Negative / Inflow Test | DEPRECATED: Please use Code="NegativeInflowTest" with Name "Negative Inflow Test" instead. Negative / Inflow Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:NegativeInflowTest | Negative Inflow Test | Test that checks for leaks in the well’s barriers by creating an underbalanced condition, where the pressure inside the well is lower than the formation pressure. | Value added. |
| partition-id:reference-data--TestSubType:Operator%20Test | Operator Test | DEPRECATED: Please use Code="OperatorTest" with Name "Operator Test" instead. Operator Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:OperatorTest | Operator Test | Well integrity test conducted by an operator.  | Value added. |
| partition-id:reference-data--TestSubType:Packer%20%2F%20Hanger%20Test | Packer / Hanger Test | DEPRECATED: Please use Code="PackerHangerTest" with Name "Packer Hanger Test" instead. Packer / Hanger Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:PackerHangerTest | Packer Hanger Test | Test to ensure that a packer with a hanger is correctly set and can maintain a seal under expected well conditions. | Value added. |
| partition-id:reference-data--TestSubType:Pilot%20Test | Pilot Test | DEPRECATED: Please use Code="PilotTest" with Name "Pilot Test" instead. Pilot Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:PilotTest | Pilot Test | Preliminary test conducted to evaluate the effectiveness of well integrity measures before full-scale implementation. | Value added. |
| partition-id:reference-data--TestSubType:Plug%20Test | Plug Test | DEPRECATED: Please use Code="PlugTest" with Name "Plug Test" instead. Plug Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:PlugTest | Plug Test | Test to verify that a plug can effectively seal the wellbore and prevent fluid migration. | Value added. |
| partition-id:reference-data--TestSubType:Quick%20Test%20Sub | Quick Test Sub | DEPRECATED: Please use Code="QuickTestSub" with Name "Quick Test Sub" instead. Quick Test Sub | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:QuickTestSub | Quick Test Sub | Quick test perfomed using a quick test sub.This test is particulary useful in saving time and eliminating the need to re-test the entire pressure control stack.  | Value added. |
| partition-id:reference-data--TestSubType:Recommission%20BOP%20Component | Recommission BOP Component | DEPRECATED: Please use Code="RecommissionBlowoutPreventerComponentTest" with Name "Recommission Blowout Preventer Component Test" instead. Recommission BOP Component | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:RecommissionBlowoutPreventerComponentTest | Recommission Blowout Preventer Component Test | Test conducted on a recommissioned blowout preventer component, or a part of the blowout preventer system that has undergone inspection, maintenance, and testing to ensure it is fully functional and safe for use after a period of inactivity or following repairs.  | Value added. |
| partition-id:reference-data--TestSubType:RemotelyOperatedVehicleVerificationTest | Remotely Operated Vehicle Verification Test | Test conducted to verify well integrity with a remotely operated vehicle.  | Value added. |
| partition-id:reference-data--TestSubType:Rigid%20Conduit%20%2F%20Boost%20Line%20Test | Rigid Conduit / Boost Line Test | DEPRECATED: This has been broken up into separate test subtypes. Please use Code "RigidConduitTest" or "BoostLineTest" with Name "Rigid Conduit Test" or "Boost Line Test" instead. Rigid Conduit / Boost Line Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:RigidConduitTest | Rigid Conduit Test | Test to verify that the rigid conduit can maintain its structural integrity and provide reliable protection for well components under operational conditions.  | Value added. |
| partition-id:reference-data--TestSubType:Riser%20Test | Riser Test | DEPRECATED: Please use Code="RiserTest" with Name "Riser Test" instead. Riser Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:RiserTest | Riser Test | Test to ensure the integrity of a riser.  | Value added. |
| partition-id:reference-data--TestSubType:ROV%20Verification%20Test | ROV Verification Test | DEPRECATED: Please use Code="RemotelyOperatedVehicleVerificationTest" with Name "Remotely Operated Vehicle Verification Test " instead. ROV Verification Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:SCSSV%20Test | SCSSV Test | DEPRECATED: Please use Code="SurfaceControlledSubsurfaceSafetyValveTest" with Name "Surface ControlledSubsurface Safety Valve Test" instead. SCSSV Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Shear%20Rams%20Test | Shear Rams Test | DEPRECATED: Please use Code="ShearRamsTest" with Name "Shear Rams Test" instead. Shear Rams Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:ShearRamsTest | Shear Rams Test | Test to ensure that the shear rams can effectively cut through the drill pipe and create a seal to prevent blowouts. | Value added. |
| partition-id:reference-data--TestSubType:Shop%20Test | Shop Test | DEPRECATED: Please use Code="ShopTest" with Name "Shop Test" instead. Shop Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:ShopTest | Shop Test | Test to verify that components of a well are functioning correctly and can maintain integrity under operational conditions.  | Value added. |
| partition-id:reference-data--TestSubType:Stump%20BOP%20Test | Stump BOP Test | DEPRECATED: Please use Code="StumpBlowoutPreventerTest" with Name "Stump Blowout Preventer Test" instead. Stump BOP Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:StumpBlowoutPreventerTest | Stump Blowout Preventer Test | Test to verify the functionality and integrity of the blowout preventer system in a controlled environment, ensuring it can effectively seal the wellbore and control well pressure. Conducted on surface before a blowout preventer is deployed subsea. | Value added. |
| partition-id:reference-data--TestSubType:Subsea%20BOP%20Interval%20Test | Subsea BOP Interval Test | DEPRECATED: Please use Code="SubseaBlowoutPreventerIntervalTest" with Name "Subsea Blowout Preventer interval Test" instead. Subsea BOP Interval Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Subsea%20BOP%20Latch-up%20Test | Subsea BOP Latch-up Test | DEPRECATED: Please use Code="SubseaBlowoutPreventerLatchUpTest" with Name "Subsea Blowout Preventer Latch-up Test" instead. Subsea BOP Latch-up Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Subsea%20Tree%20Test | Subsea Tree Test | DEPRECATED: Please use Code="SubseaTreeTest" with Name "Subsea Tree Test" instead. Subsea Tree Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:SubseaBlowoutPreventerIntervalTest | Subsea Blowout Preventer Interval Test | Test to ensure integrity of a subsea blowout preventer conducted at a specified interval.  | Value added. |
| partition-id:reference-data--TestSubType:SubseaBlowoutPreventerLatchUpTest | Subsea Blowout Preventer Latch-up Test | Test to ensure that as subsea blowout preventer stack is correctly latched onto the wellhead, ensuring a secure and pressure-tight connection. | Value added. |
| partition-id:reference-data--TestSubType:SubseaTreeTest | Subsea Tree Test | Test to ensure the integrity of a subsea tree. | Value added. |
| partition-id:reference-data--TestSubType:Surface%20BOP%20Latch-up%20Test | Surface BOP Latch-up Test | DEPRECATED: Please use Code="SurfaceBlowoutPreventerLatchUpTest" with Name "Surface Blowout Preventer Latch-up Test" instead. Surface BOP Latch-up Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Surface%20BOP%20Test | Surface BOP Test | DEPRECATED: Please use Code="SurfaceBlowoutPreventerTest" with Name "Surface Blowout Preventer Test" instead. Surface BOP Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Surface%20PCE%20Test | Surface PCE Test | DEPRECATED: Please use Code="Surface Pressure Control Equipment Test" with Name "SurfacePressureControlEquipmentTest" instead. Surface PCE Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Surface%20Tree%20Test | Surface Tree Test | DEPRECATED: Please use Code="SurfaceTreeTest" with Name "Surface Tree Test" instead. Surface Tree Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:SurfaceBlowoutPreventerLatchUpTest | Surface Blowout Preventer Latch-up Test | Test to ensure that as surface blowout preventer stack is correctly latched onto the wellhead, ensuring a secure and pressure-tight connection. | Value added. |
| partition-id:reference-data--TestSubType:SurfaceBlowoutPreventerTest | Surface Blowout Preventer Test | Test to ensure the integrity of a surface blowout preventer.  | Value added. |
| partition-id:reference-data--TestSubType:SurfaceControlledSubsurfaceSafetyValveTest | Surface Controlled Subsurface Safety Valve Test | Test  to ensure the integrity of a surface controlled safety valve.  | Value added. |
| partition-id:reference-data--TestSubType:SurfacePressureControlEquipmentTest | Surface Pressure Control Equipment Test | Test to verify that surface pressure control equipment, such as blowout preventers (BOPs), valves, and manifolds, can handle the pressures they will encounter during operation. | Value added. |
| partition-id:reference-data--TestSubType:SurfaceTreeTest | Surface Tree Test | Test to ensure the integrity of a surface tree. | Value added. |
| partition-id:reference-data--TestSubType:Termination%20Test | Termination Test | DEPRECATED: Please use Code="TerminationTest" with Name "Termination Test" instead. Termination Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:TerminationTest | Termination Test | Test to verify  that the well is properly sealed and that all potential pathways for fluid migration are effectively blocked. Often referred to as well abandonment or decommissioning test. | Value added. |
| partition-id:reference-data--TestSubType:Top%20Drive%20Test%20-%20TIWs%2C%20IBOPs%20%26%20Kelly%20Hose | Top Drive Test - TIWs, IBOPs & Kelly Hose  | DEPRECATED: This has been broken up into separate test subtypes. Please use Code "FullOpeningSafetyValveTest", "InsideBlowoutPreventer", or "KellyHoseTest" with Name "Full Opening Safety Valve Test", "Inside Blowout Preventer", or "Kelly Hose Test" instead. Top Drive Test - TIWs, IBOPs & Kelly Hose | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:Tubing%20%2F%20Tubing%20Hanger%20Test | Tubing / Tubing Hanger Test | DEPRECATED: This has been broken up into separate test subtypes. Please use Code "Tubing" or "Tubing Hanger" with  Name "Tubing" or "Tubing Hanger" instead. Tubing / Tubing Hanger Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:TubingHangerTest | Tubing Hanger Test | Test to ensure the integrity of a tubing hanger, ensuring it can support the weight of the tubing string and maintain a proper seal to prevent fluid migration.  | Value added. |
| partition-id:reference-data--TestSubType:TubingTest | Tubing Test | Test to ensure the integrity of tubing. | Value added. |
| partition-id:reference-data--TestSubType:Upper%20Completions%20Test | Upper Completions Test | DEPRECATED: Please use Code="UpperCompletionsTest" with Name "Upper Completions Test" instead. Upper Completions Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:UpperCompletionsTest | Upper Completions Test | Test to verify that upper completion components, such as tubing, packers, and safety valves, are correctly installed and can maintain well integrity under operational conditions. | Value added. |
| partition-id:reference-data--TestSubType:WellControlPackageTest | Well Control Package Test | Test to ensure the integrity of well control equipment. | Value added. |
| partition-id:reference-data--TestSubType:Wireline%20PCE%20Test | Wireline PCE Test | DEPRECATED: Please use Code="WirelinePressureControlEquipmentTest " with Name "Wireline Pressure Control Equipment Test" instead. Wireline PCE Test | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestSubType:WirelinePressureControlEquipmentTest | Wireline Pressure Control Equipment Test | Test to verify that the pressure control equipment can handle the pressures encountered during wireline operations, preventing blowouts and ensuring well control. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook TestSubType.1.xlsx](../../../ReferenceValues/Published/TestSubType.1.xlsx)
* &rarr; [Manifest record TestSubType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/TestSubType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)