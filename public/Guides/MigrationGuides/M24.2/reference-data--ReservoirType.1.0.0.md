<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ReservoirType:1.0.1`

Changes between [osdu:wks:reference-data--ReservoirType:1.0.0](../../../E-R/reference-data/ReservoirType.1.0.0.md) and [osdu:wks:reference-data--ReservoirType:1.0.1](../../../E-R/reference-data/ReservoirType.1.0.1.md) are listed below.

**_Please note_** that one of the deprecated values, `OilSandsDeposit`, cannot be upgraded automatically as the replacement requires contextual knowledge; the old value can be replaced by one of the following codes: `Conventional`, `Unconventional` or `Mineable`.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The type of hydrocarbon reservoir described (Could be conventional or oil sands deposit - Could also refers to the reason: administrative reasons or for geologic definitions._
  * New Description: **_A general kind of reservoir based on the business or technical requirement._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ReservoirType:Administrative | Administrative | A reservoir delineated by administrative criteria such as lease or royalty conditions. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--ReservoirType:CarbonStorage | Carbon Storage | A subsurface geological formation suitable for the injection and long-term storage of captured Carbon dioxide. | Value added. |
| partition-id:reference-data--ReservoirType:Conventional | Conventional | A reservoir that can be exploited without complex treatments or production technologies. A reservoir of natural permeability with hydrocarbons constrained by an impermeable caprock. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--ReservoirType:Geologic | Geologic | DEPRECATED: Please use Code="Unassessed" with Name="Unassessed" instead. Reservoir defined per Geological Definition Objective | **DEPRECATED, superseded by Code: Unassessed**<br>Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--ReservoirType:Mineable | Mineable | A reservoir amenable to surface extraction. | Value added. |
| partition-id:reference-data--ReservoirType:OilSandsDeposit | Oil Sands Deposit | Reject this - could be conventional, unconv or mineable. | Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--ReservoirType:Unassessed | Unassessed | A reservoir that has not yet been delineated by geological or technical analysis | Value added. |
| partition-id:reference-data--ReservoirType:Unconventional | Unconventional | A reservoir with flow characteristics requiring non-traditional exploitation technologies. The criteria for unconventional evolve over time as technologies and economics change. Unconventional reservoirs typically have extremely low permeability and basin-scale extent. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Reservoir_Type)
* &rarr; [Manifest record ReservoirType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/ReservoirType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)