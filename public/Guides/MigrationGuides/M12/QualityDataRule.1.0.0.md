[[_TOC_]]

# Migration to `osdu:wks:reference-data--QualityDataRule:1.1.0`

Migrating  [`osdu:wks:reference-data--QualityDataRule:1.0.0`](../../../E-R/reference-data/QualityDataRule.1.0.0.md)
to [`osdu:wks:reference-data--QualityDataRule:1.1.0`](../../../E-R/reference-data/QualityDataRule.1.1.0.md)
means adding new properties only. No migration effort expected.

## New Properties

| Property                                                                                                                | Value Type | Description                                                                        | Migration Instructions                                                                                                                                                                    |
|-------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.DataRuleDimensionTypeID &rarr; [DataRuleDimensionType](../../../E-R/reference-data/DataRuleDimensionType.1.0.0.md) | string     | Dimension of the Rule indicating the rule purpose like completeness, validity etc. | This property is new and optional, and for the existing records, this will be unspecified. No default value. This property opens integration opportunities. No migration effort required. |

<ins>Note</ins>:
OSDU [`osdu:wks:reference-data--DataRuleDimensionType:1.0.0`](../../../E-R/reference-data/DataRuleDimensionType.1.0.0.md)
with its Governance Model defined as **Open** adopts the published reference values list from
PPDM [Quality_Data_Rule_Set_PPDM_20220328](https://og.enterprise.slack.com/files/U027UFFRUUA/F038SGPGDRU/quality_data_rule_set_ppdm_20220328.xlsx), which list follows Quality dimensions defined in ISO/IEC 25012.

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)