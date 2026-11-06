<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicHorizonType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicHorizonType:1.0.1](../../../E-R/reference-data/SeismicHorizonType.1.0.1.md) and [osdu:wks:reference-data--SeismicHorizonType:1.0.1](../../../E-R/reference-data/SeismicHorizonType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicHorizonType:Env | Envelope | DEPRECATED: Please use Code="Envelope" with Name="Envelope" instead. Picked on peak of energy envelope. | **DEPRECATED, superseded by Code: Envelope**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicHorizonType:Envelope | Envelope | Picked on peak of energy envelope. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicHorizonType:Peak | Peak | Picked on local maximum. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicHorizonType:Trough | Trough | Picked on local minimum. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicHorizonType:ZeroDown | Minus to Plus Zero Crossing | Picked on zero crossing, low to high. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicHorizonType:ZeroUp | Plus to Minus Zero Crossing | Picked on zero crossing, high to low. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SeismicHorizonType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicHorizonType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)