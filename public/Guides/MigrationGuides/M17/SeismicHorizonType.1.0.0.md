<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicHorizonType:1.0.1`

**_No schema change_**

The content of this reference list
[`osdu:wks:reference-data--SeismicHorizonType:1.0.1`](../../../E-R/reference-data/SeismicHorizonType.1.0.1.md)
is now governed by PPDM. The description has been changed to _The position on a seismic waveform where a reflection horizon is picked._ One value was deprecated and superseded.

# Schema Changes

* Changed Description
  * Old Description: _Position on waveform where horizon is picked such as Peak (pk), Trough (tr), Plus to Minus Zero Crossing, Minus to Plus Zero Crossing, Envelope (env)._
  * New Description: **_The position on a seismic waveform where a reflection horizon is picked._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicHorizonType:Env | Envelope | DEPRECATED: Please use Code="Envelope" with Name="Envelope" instead. Picked on peak of energy envelope. | **DEPRECATED, superseded by Code: Envelope**<br>Changes in Description |
| partition-id:reference-data--SeismicHorizonType:Envelope | Envelope | Picked on peak of energy envelope. | Value added. |
| partition-id:reference-data--SeismicHorizonType:ZeroDown | Minus to Plus Zero Crossing | Picked on zero crossing, low to high. | Changes in Name, Description |
| partition-id:reference-data--SeismicHorizonType:ZeroUp | Plus to Minus Zero Crossing | Picked on zero crossing, high to low. | Changes in Name, Description |

# Value Spreadsheet and Manifest

* [Manifest record SeismicHorizonType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicHorizonType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)