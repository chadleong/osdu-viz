<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--TestType:1.0.1`

Changes between [osdu:wks:reference-data--TestType:1.0.0](../../../E-R/reference-data/TestType.1.0.0.md) and [osdu:wks:reference-data--TestType:1.0.1](../../../E-R/reference-data/TestType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Well Barrier Element test types_
  * New Description: **_Well Barrier Element test types._**

* Changed Governance
  * Old Governance: _FIXED_
  * New Governance: **_OPEN_**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--TestType:Annulus | Annulus | DEPRECATED: Please use Code="AnnulusTest" with Name "Annulus Test" instead. Annulus | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:Annulus%20Access%20Valve | Annulus Access Valve | DEPRECATED: Please use Code="AnnulusAccessValveTest" with Name "Annulus Access Valve Test" instead. Annulus Access Valve | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:AnnulusAccessValveTest | Annulus Access Valve Test | Test to verify that the annulus access valve can effectively seal and control pressure within the annulus, preventing fluid migration and maintaining well integrity.  | Value added. |
| partition-id:reference-data--TestType:AnnulusTest | Annulus Test | Test that checks annular space between different casing strings to detect any leaks or pressure anomalies that could compromise the well’s structural integrity. The primary goal is to ensure that the well’s barriers are intact and there is no communication between different zones that could lead to uncontrolled fluid migration. | Value added. |
| partition-id:reference-data--TestType:BlowoutPreventerStumpTest | Blowout Preventer Stump Test | Test to verify the functionality and integrity of the blowout preventer system in a controlled environment, ensuring it can effectively seal the wellbore and control well pressure. Conducted on surface before a blowout preventer is deployed subsea. | Value added. |
| partition-id:reference-data--TestType:BlowoutPreventerSubSeaTest | Blowout Preventer SubSea Test | Test to verify a subsea blowout preventer can effectively seal the wellbore and control well pressure under operational conditions after it is installed on the sea floor.  | Value added. |
| partition-id:reference-data--TestType:BOP%20-%20Stump | BOP - Stump | DEPRECATED: Please use Code="BlowoutPreventerStumpTest" with Name "Blowout Preventer Stump Test" instead. BOP (Stump) | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:BOP%20-%20SubSea | BOP - SubSea | DEPRECATED: Please use Code="BlowoutPreventerSubSeaTest" with Name "Blowout Preventer SubSea Test" instead. BOP (SubSea) | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:Casing | Casing | DEPRECATED: Please use Code="CasingTest" with Name "Casing Test" instead. Casing | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:CasingTest | Casing Test | Test to ensure the integrity of a well casing, ensuring there are no significant leaks or weaknesses that could compromise well safety. | Value added. |
| partition-id:reference-data--TestType:CavityTest | Cavity Test | Test conducted to verify integrity of well components in areas where fluids can accumulate and be pressurized. | Value added. |
| partition-id:reference-data--TestType:Coil%20Tubing | Coil Tubing | DEPRECATED: Please use Code="CoilTubingTest" with Name "Coil Tubing Test" instead. Coil Tubing | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:CoilTubingTest | Coil Tubing Test | Test to verify that coiled tubing can with stand the pressures and mechanical stresses it will encounter during operations.  | Value added. |
| partition-id:reference-data--TestType:Completion | Completion | DEPRECATED: Please use Code="CompletionTest" with Name "Completion Test" instead. Completion | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:CompletionTest | Completion Test | Test to ensure the integrity of a well completion.  | Value added. |
| partition-id:reference-data--TestType:Control%20Line | Control Line | DEPRECATED: Please use Code="ControlLineTest" with Name "Control Line Test" instead. Control Line | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:ControlLineTest | Control Line Test | Test to verify that the control lines can withstand operational pressures and maintain their integrity without leaks. | Value added. |
| partition-id:reference-data--TestType:Deck | Deck | DEPRECATED: Please use Code="DeckTest" with Name "Deck Test" instead. Deck | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:DeckTest | Deck Test | Test conducted on the deck of an offshore platform to ensure safety and integrity.  | Value added. |
| partition-id:reference-data--TestType:Fluid%20Isolation%20Valve | Fluid Isolation Valve | DEPRECATED: Please use Code="FluidIsolationValveTest" with Name "Fluid Isolation Valve Test" instead. Fluid Isolation Valve | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:FluidIsolationValveTest | Fluid Isolation Valve Test | Test to verify that the fluid isolation valve can effectively seal and control the flow of fluids, preventing leaks and maintaining system integrity. | Value added. |
| partition-id:reference-data--TestType:Function | Function | DEPRECATED: Please use Code="FunctionTest" with Name "Function Test" instead. Function | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:FunctionTest | Function Test | Test to verify components of a well are operating correctly and safely.  | Value added. |
| partition-id:reference-data--TestType:Inflow | Inflow | DEPRECATED: Please use Code="InflowTest" with Name "Inflow Test" instead. Inflow | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:InflowTest | Inflow Test | Test to check for any leaks or communication between the wellbore and the formation. This helps ensure that the well’s barriers, such as casing, cement, and plugs, are intact and can prevent unwanted fluid migration. | Value added. |
| partition-id:reference-data--TestType:Liner%20Top | Liner Top | DEPRECATED: Please use Code="LinerTopTest" with Name "Liner Top Test" instead. Liner Top | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:LinerTopTest | Liner Top Test | Test to ensure that the liner top is properly sealed and can withstand the pressures and mechanical stresses it will encounter during well operations. | Value added. |
| partition-id:reference-data--TestType:Lower%20Completions%20Packer | Lower Completions Packer | DEPRECATED: Please use Code="LowerCompletionsPackerTest" with Name "Lower Completions PackerTest" instead. Lower Completions Packer | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:LowerCompletionsPackerTest | Lower Completions Packer Test | Test to verify that a lower packer can effectively isolate different zones within the wellbore, maintaining well integrity and preventing fluid migration. | Value added. |
| partition-id:reference-data--TestType:Pressure%20Record | Pressure Record | DEPRECATED: Please use Code="PressureRecordTest" with Name "Pressure Record Test" instead. Pressure Record | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:PressureRecordTest | Pressure Record Test | Test to ensure that the well can withstand the pressures it will encounter during its lifecycle. The primary goal is to verify the integrity of the well’s barriers, such as casing and cement, to prevent any leaks or uncontrolled fluid flow. | Value added. |
| partition-id:reference-data--TestType:Production%20Tubing | Production Tubing | DEPRECATED: Please use Code="ProductionTubingTest" with Name "Production Tubing Test" instead. Production Tubing | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:ProductionTubingTest | Production Tubing Test | Test to verity the integrity of production tubing, ensuring it can safely transport fluids from the reservoir to the surface without leaks or failures. | Value added. |
| partition-id:reference-data--TestType:Tubing%20Hanger | Tubing Hanger | DEPRECATED: Please use Code="TubingHangerTest" with Name "Tubing Hanger Test" instead. Tubing Hanger | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:TubingHangerTest | Tubing Hanger Test | Test to verify a tubing hanger can support the weight of the tubing string and maintain a proper seal to prevent fluid migration.  | Value added. |
| partition-id:reference-data--TestType:Upper%20Completions%20Packer | Upper Completions Packer | DEPRECATED: Please use Code="UpperCompletionsPackerTest" with Name "Upper Completions Packer Test" instead. Upper Completions Packer | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:UpperCompletionsPackerTest | Upper Completions Packer Test | Test to verify that an upper packer can effectively isolate different zones within the wellbore, maintaining well integrity and preventing fluid migration. | Value added. |
| partition-id:reference-data--TestType:UserDefinedTest | User Defined Test | A user defined test.  | Value added. |
| partition-id:reference-data--TestType:VoidTest | Void Test | Test to identify and assess voids or gaps in the cement or other barriers. | Value added. |
| partition-id:reference-data--TestType:Wellbore%20Component | Wellbore Component | DEPRECATED: Please use Code="WellboreComponentTest" with Name "Wellbore Component Test" instead.Wellbore Component | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--TestType:WellboreComponentTest | Wellbore Component Test | Test to verify that wellbore components, such as casing, tubing, and wellhead equipment, can withstand operational pressures and mechanical stresses. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook TestType.1.xlsx](../../../ReferenceValues/Published/TestType.1.xlsx)
* &rarr; [Manifest record TestType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/TestType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)