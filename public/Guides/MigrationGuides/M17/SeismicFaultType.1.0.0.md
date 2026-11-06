<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicFaultType:1.0.1`

**_No schema change_**

The content of this reference list
[`osdu:wks:reference-data--SeismicFaultType:1.0.1`](../../../E-R/reference-data/SeismicFaultType.1.0.1.md)
is now governed by PPDM. The description has been changed to _The geological type of fault that creates a seismic reflection._ One value got deprecated and superseded.

# Schema Changes

* Changed Description
  * Old Description: _Geological type of fault geometry, such as Thrust (thr), Reverse (rev), Normal(norm), Strike-slip._
  * New Description: **_The geological type of fault that creates a seismic reflection._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicFaultType:Oblique | Oblique | A fault with significant motion in strike and dip directions. | Value added. |
| partition-id:reference-data--SeismicFaultType:StrikeSlip | Strike-slip | Fault with lateral slip. | Value added. |
| partition-id:reference-data--SeismicFaultType:Strikeslip | Strike-slip | DEPRECATED: Please use Code="StrikeSlip" with Name="StrikeSlip" instead. Fault with lateral slip. | **DEPRECATED, superseded by Code: StrikeSlip**<br>Changes in Description |

# Value Spreadsheet and Manifest

* [Manifest record SeismicFaultType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicFaultType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)