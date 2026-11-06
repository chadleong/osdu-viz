<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellTreatmentType:1.0.1`

Changes between [osdu:wks:reference-data--WellTreatmentType:1.0.0](../../../E-R/reference-data/WellTreatmentType.1.0.0.md) and [osdu:wks:reference-data--WellTreatmentType:1.0.1](../../../E-R/reference-data/WellTreatmentType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Describes the type of treatment applied to a specific well or wellbore (such as acidizing,… )_
  * New Description: **_The activity to enhance the reservoir properties for fluid flow or to repair damage to the formation and/or the production string(s)._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellTreatmentType:AcidFracturing | Acid fracturing | A fracturing treatment using acid to etch channels in the walls of fractures and to dissolve carbonate material. | Value added. |
| partition-id:reference-data--WellTreatmentType:Acidizing | Acidizing | DEPRECATED: Please use Code="MatrixAcidizing" with Name="Matrix acidizing" instead.  | **DEPRECATED, superseded by Code: MatrixAcidizing**<br>Changes in InactiveIndicator, AttributionAuthority, Description |
| partition-id:reference-data--WellTreatmentType:AcidSqueeze | Acid squeeze | Pump pressure (below fracture pressure) forces acid into the formation near the wellbore, to enhance flow or repair damage. | Value added. |
| partition-id:reference-data--WellTreatmentType:AcidWash | Acid wash | Acid is used to clean scale, rust or debris from the wellbore equipment. | Value added. |
| partition-id:reference-data--WellTreatmentType:BinaryFoamFracturing | Binary foam fracturing | Binary foam fracturing fluids combine nitrogen (N2) and carbon dioxide (CO2) for the gaseous internal phase, mixed with water-based fluids for the liquid external phase. | Value added. |
| partition-id:reference-data--WellTreatmentType:C02Fracturing | Carbon dioxide fracturing | A hydraulic fracturing treatment using carbon dioxide instead of water as the fracturing fluid. | Value added. |
| partition-id:reference-data--WellTreatmentType:CO2AssistFracturing | CO2 assist fracturing | A reservoir fracturing treatment that adds carbon dioxide to the water phase of the fluid. | Value added. |
| partition-id:reference-data--WellTreatmentType:CO2FoamedFracturing | CO2 foam fracturing | A hydraulic fracturing treatment using carbon dioxide gas and a liquid medium mixed downhole at high pressure to form a foam. | Value added. |
| partition-id:reference-data--WellTreatmentType:HydraulicFracturing | Hydraulic fracturing | A reservoir treatment in which water or other fluid is injected at high pressure into the formation, creating fractures to enhance productivity. | Changes in Name, Description, AttributionAuthority |
| partition-id:reference-data--WellTreatmentType:MatrixAcidizing | Matrix acidizing | Acid is injected into a reservoir below fracture pressure to improve productivity by removing drilling damage or enlarging the flow paths. | Value added. |
| partition-id:reference-data--WellTreatmentType:N2AssistFracturing | N2 assist fracturing | A reservoir fracturing treatment that adds nitrogen to the water phase of the fluid. | Value added. |
| partition-id:reference-data--WellTreatmentType:N2FoamedFracturing | N2 foam fracturing | A hydraulic fracturing treatment using nitrogen gas and a liquid medium mixed downhole at high pressure to form a foam. | Value added. |
| partition-id:reference-data--WellTreatmentType:N2Fracturing | Nitrogen fracturing | A hydraulic fracturing treatment using liquid nitrogen (LN2) instead of water as the fracturing fluid. | Value added. |
| partition-id:reference-data--WellTreatmentType:NitroglycerineExplosion | Nitroglycerine explosion | An old stimulation process that involved lowering nitroglycerine canisters into a well and detonating. | Value added. |
| partition-id:reference-data--WellTreatmentType:NitroglycerinExplosives | Nitroglycerin Explosives | DEPRECATED: Please use Code="NitroglycerineExplosion" with Name="Nitroglycerine explosion" instead.  | **DEPRECATED, superseded by Code: NitroglycerineExplosion**<br>Changes in InactiveIndicator, AttributionAuthority, Description |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Well_Treatment_Method)
* &rarr; [Manifest record WellTreatmentType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellTreatmentType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)