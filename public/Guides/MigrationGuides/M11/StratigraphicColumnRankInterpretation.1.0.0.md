[[_TOC_]]

# Migration to `osdu:wks:work-product-component--StratigraphicColumnRankInterpretation:1.1.0`

Migrating  [`osdu:wks:work-product-component--StratigraphicColumnRankInterpretation:1.0.0`](../../../E-R/work-product-component/StratigraphicColumnRankInterpretation.1.0.0.md)
to [`osdu:wks:work-product-component--StratigraphicColumnRankInterpretation:1.1.0`](../../../E-R/work-product-component/StratigraphicColumnRankInterpretation.1.1.0.md)
means adding new properties only. No migration is required unless the extension of stratigraphic columns to include
chrono-stratigraphic references is required/desired.

## New Properties

| Property                                                                                                          | Value Type | Description                                                                                                                                                                                                                                                                                                             | Migration Instructions                                                          |
|-------------------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| data.ChronoStratigraphySet[] &rarr; [ChronoStratigraphy](../../../E-R/reference-data/ChronoStratigraphy.1.0.0.md) | string     | A set of references to ChronoStratigraphy reference data, which belong to the same StratigraphicColumnRankUnitType, e.g. "namespace:reference-data--StratigraphicColumnRankUnitType:Chronostratigraphic.System:" Only one of ChronoStratigraphySet or StratigraphicUnitInterpretationSet must be populated, never both. | New property allowing the reference to Chrono-Stratigraphy. No action required. |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)