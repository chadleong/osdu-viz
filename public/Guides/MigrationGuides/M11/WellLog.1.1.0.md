[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellLog:1.2.0`

Migrating  [`osdu:wks:work-product-component--WellLog:1.1.0`](../../../E-R/work-product-component/WellLog.1.1.0.md)
to [`osdu:wks:work-product-component--WellLog:1.2.0`](../../../E-R/work-product-component/WellLog.1.2.0.md)
means adding new properties only. No migration effort expected.

## New Properties

| Property                                                                                        |Value Type|Description|Migration Instructions|
|-------------------------------------------------------------------------------------------------|----------|-----------|----------------------|
| data.Curves[].CurveSampleTypeID &rarr; [CurveSampleType](../../../E-R/reference-data/CurveSampleType.1.0.0.md) | string | The value type to be expected as curve sample values. | This property is new and optional, and for the existing records, this will be unspecified. No default value. When writing the values, the data format needs to be specified so that the values can be appropriately parsed during the read. For example, date and time numeric values can be parsed as `datetime` format by the consumers. For boolean, data values can be written as literals (`'true'` or `'false'`) or numeric values (0 or 1) in the DDMS. Having the type/format hint information in this property will help consumers to appropriately parse the curve data values. |
| data.Curves[].CurveDescription | string | Mnemonic-level curve description is used during parsing or reading and ingesting LAS or DLIS files, to explain the type of measurement being looked at, specifically for that moment. Curve description is specific to that single (log) mnemonic and for the entire log (acquisition run) interval. In essence, curve description defines the internal factors such as what the "curve" or measurement ideally is representing, how is it calculated, what are the assumptions and the "constants". | This property opens integration opportunities. No migration effort required. |
| data.LogRemark | string | Log remark provides contextual information during the actual log object acquisition. Explains how the measurement in the wellbore is taken on a point in time or depth. Additional information may be included such as bad weather, tool failure, etc. Usually a part of the log header, log remark contains info specific for an acquisition run, specific for a given logging tool (multiple measurements) and/or a specific interval. In essence, log remark represents the external factors and operational environment, directly or indirectly affecting the measurement quality/uncertainty (dynamically over time/depth) - adding both noise and bias to the measurements. | This property opens integration opportunities. No migration effort required. |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)