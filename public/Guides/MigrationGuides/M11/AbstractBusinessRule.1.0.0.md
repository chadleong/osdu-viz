[[_TOC_]]

# Indexing Hint Changes

M11 changes the indexing hints for [`osdu:wks:AbstractBusinessRule:1.0.0`](../../../E-R/abstract/AbstractBusinessRule.1.0.0.md):

* `data.BusinessRules.DataRuleSets[]` changes from `object` to `nested` for queries with logical operations.
* `data.BusinessRules.DataRules[]` changes from `object` to `nested` for queries with logical operations.

# Migration to `osdu:wks:AbstractBusinessRule:1.0.0`

In order to become effective, the records including the `AbstractBusinessRule` fragment must be re-indexed.

## Entities to be Re-indexed

| Usage Kind  | Target Entity                                                                 | Target Property | Cardinality | Note |
|-------------|-------------------------------------------------------------------------------|-----------------|-------------|------|
| Included by | [DataQuality.1.0.0](../../../E-R/work-product-component/DataQuality.1.0.0.md) | BusinessRules   | one         |      |

## Queries

For detailed query syntax, see
([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#nested-query)).

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)