<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--AmendReason:1.0.1`

Changes between [osdu:wks:reference-data--AmendReason:1.0.0](../../../E-R/reference-data/AmendReason.1.0.0.md) and [osdu:wks:reference-data--AmendReason:1.0.1](../../../E-R/reference-data/AmendReason.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The reason why a production amendment was posted, such as instrument calibration, calculation error or volume balancing._
  * New Description: **_The reason for amending a production value that was reported to a regulator or partner._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--AmendReason:CalculationError | Calculation error | Amended because an algorithm or process in computing the reported data was corrected. | Value added. |
| partition-id:reference-data--AmendReason:InputError | Input error | Correction of a data input error or omission. | Changes in Name, Code, Description, AttributionAuthority |
| partition-id:reference-data--AmendReason:InstrumentationAdjustment | Instrumentation adjustment | Amended because the instrument used to collect or process the data was recalibrated or replaced. | Value added. |
| partition-id:reference-data--AmendReason:InventoryAdjustment | Inventory adjustment | Amended to report gains and losses that cannot be identified by a specific activity and/or production month. | Value added. |
| partition-id:reference-data--AmendReason:MeterAdjustment | Meter adjustment | DEPRECATED: Please use Code="InstrumentationAdjustment" with Name="Instrumentation adjustment" instead. A meter adjustment amendment reason is the explanation for changing a record or measurement due to the calibration, malfunction, replacement, or correction of a metering system that was used to collect data. | **DEPRECATED, superseded by Code: InstrumentationAdjustment**<br>Changes in Name, Code, InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--AmendReason:ProductAnalysis | Product analysis | DEPRECATED: Please use Code="RevisedProductAnalysis" with Name="Revised product analysis" instead.  | **DEPRECATED, superseded by Code: RevisedProductAnalysis**<br>Changes in Name, Code, InactiveIndicator, AttributionAuthority, Description |
| partition-id:reference-data--AmendReason:RegulatoryCorrection | Regulatory correction | Amended to comply with laws, regulations, or governing body expectations. | Changes in Name, Code, Description, AttributionAuthority |
| partition-id:reference-data--AmendReason:RevisedProductAnalysis | Revised product analysis | Amended to incorporate revised product analysis, such as oil composition. | Value added. |
| partition-id:reference-data--AmendReason:VolumeBalancing | Volume balancing | The record or measurement was changed due to inconsistency or inaccuracy of reported volumes. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Production_Amendment_Reason)
* &rarr; [Manifest record AmendReason.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/AmendReason.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)