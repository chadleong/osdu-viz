<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--QuantityMethod:1.0.1`

Changes between [osdu:wks:reference-data--QuantityMethod:1.0.0](../../../E-R/reference-data/QuantityMethod.1.0.0.md) and [osdu:wks:reference-data--QuantityMethod:1.0.1](../../../E-R/reference-data/QuantityMethod.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The context as to how a production metric value was captured or created and the appropriateness of its use for analytics and reporting._
  * New Description: **_The method to measure or derive a production volume or related property suitable for accounting, reporting and analytics._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--QuantityMethod:Allocated | Allocated | The product characteristics are based on a calculation to assign a portion of an aggregate quantity to an entity from another entity further along the value chain. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Allowed | Allowed | The product characteristics are based on what is permissible by some governing authority  (company or regulatory for example) or contract obligation. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Budgeted | Budgeted | The product characteristics are based on a predetermined quantity in tandem with financial planning. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Constrained | Constrained | The product characteristics are limited by system architecture or extenuating circumstances | Changes in Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Estimated | Estimated | The product characteristics are based on calculated performance equivalents often derived from flow test or comparable model-based methods including virtual flow meters, phase behavior models, process models, etc. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Forecasted | Forecasted | The product characteristics are based on calculated values projected into the future. | Changes in NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Measured | Measured | The product characteristics are based on direct measurement using meters or other equipment. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--QuantityMethod:Simulated | Simulated | The product characteristics are based on a reservoir simulation model. | Value added. |
| partition-id:reference-data--QuantityMethod:Targeted | Targeted | The product characteristics are based on a desired value in order to meet a business or other organisational objective. | Changes in Description, AttributionAuthority |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Quantification_Method)
* &rarr; [Manifest record QuantityMethod.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/QuantityMethod.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)