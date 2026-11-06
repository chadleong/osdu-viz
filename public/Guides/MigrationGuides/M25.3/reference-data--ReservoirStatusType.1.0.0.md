<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ReservoirStatusType:1.0.1`

Changes between [osdu:wks:reference-data--ReservoirStatusType:1.0.0](../../../E-R/reference-data/ReservoirStatusType.1.0.0.md) and [osdu:wks:reference-data--ReservoirStatusType:1.0.1](../../../E-R/reference-data/ReservoirStatusType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _List of reservoir status values, describing past and current state of the reservoir entity (Active / Abandoned / First Production / Discovery / First Injection)._
  * New Description: **_DEPRECATED: Use ReservoirLifeCycleStatus and IsActiveCondition property instead; List of reservoir status values, describing past and current state of the reservoir entity (Active / Abandoned / First Production / Discovery / First Injection)._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ReservoirStatusType:Abandoned | Abandoned | DEPRECATED: Please use Code="ReservoirLifeCycleStatus:Abandoned" with Name="Abandoned" instead. The Reservoir has been abandoned | **DEPRECATED, superseded by Code: ReservoirLifeCycleStatus:Abandoned**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ReservoirStatusType:Active | Active | DEPRECATED: Please use AbstractGenericReservoirUnit.data.IsActiveCondition boolean property instead; The Reservoir is Active | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ReservoirStatusType:Discovery | Discovery | DEPRECATED: Please use Code="ReservoirLifeCycleStatus:Appraising" with Name="Appraising" instead. The Reservoir has been discovered | **DEPRECATED, superseded by Code: ReservoirLifeCycleStatus:Appraising**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ReservoirStatusType:FirstInjection | FirstInjection | DEPRECATED: Please use Code="ReservoirLifeCycleStatus:Developing.Producing" with Name="Producing" instead. Use in combination with the property AbstractGenericReservoirUnit.data.FirstCO2StorageInjectionDate property instead; The First Injection has happened | **DEPRECATED, superseded by Code: ReservoirLifeCycleStatus:Developing.Producing**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ReservoirStatusType:FirstProduction | FirstProduction | DEPRECATED: Please use Code="ReservoirLifeCycleStatus:Developing.Producing" with Name="Producing" instead. Use in combination with the property AbstractGenericReservoirUnit.data.FirstProductionDate; The First Production has happened | **DEPRECATED, superseded by Code: ReservoirLifeCycleStatus:Developing.Producing**<br>Changes in InactiveIndicator, Description |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook ReservoirStatusType.1.xlsx](../../../ReferenceValues/Published/ReservoirStatusType.1.xlsx)
* &rarr; [Manifest record ReservoirStatusType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/ReservoirStatusType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)