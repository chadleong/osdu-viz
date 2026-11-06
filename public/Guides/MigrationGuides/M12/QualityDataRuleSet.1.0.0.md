[[_TOC_]]

# Migration to `osdu:wks:reference-data--QualityDataRuleSet:2.0.0`

Migrating  [`osdu:wks:reference-data--QualityDataRuleSet:1.0.0`](../../../E-R/reference-data/QualityDataRuleSet.1.0.0.md)
to [`osdu:wks:reference-data--QualityDataRuleSet:2.0.0`](../../../E-R/reference-data/QualityDataRuleSet.2.0.0.md)
means adding new properties only. No migration effort expected.

## New Properties

| Property           | Value Type | Description                                   | Migration Instructions                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------------------|------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.EvaluatedKind | string     | The kind of the data this ruleset applies to. | Version-specific and non-version-specific kind can be defined. For example, osdu:wks:master-data--Well:1 (requiring only the major version and permits any minor and patch version); osdu:wks:master-data--Wellbore:1.0.0 (this is version-specific); osdu:wks:work-product-component--WellLog (this is unspecific accepting any version). A total wildcard would have to end with a `:` like this: `osdu:wks:group-type--EntityType:`. |

## Adding back `osdu:wks:AbstractReferenceType:1.0.0` schema fragment

[`osdu:wks:AbstractReferenceType:1.0.0`](../../../E-R/abstract/AbstractReferenceType.1.0.0.md) schema fragment, which
was missing in previous [`osdu:wks:reference-data--QualityDataRuleSet:1.0.0`](../../../E-R/reference-data/QualityDataRuleSet.1.0.0.md),
is now added back.

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)