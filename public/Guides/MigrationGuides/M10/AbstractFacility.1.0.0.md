[[_TOC_]]

# Indexing Hint Changes

M10 changes the indexing hints for [`osdu:wks:AbstractFacility:1.0.0`](../../../E-R/abstract/AbstractFacility.1.0.0.md):

* `data.FacilityStates[]` changes from `flattened` to `nested` for better scoped search responses.
* `data.FacilityEvents[]` changes from `flattened` to `nested` for better scoped search responses.

# Migration to `osdu:wks:AbstractFacility:1.0.0`

In order to become effective, the records including the `AbstractFacility` fragment must be re-indexed.

## Entities to be Re-indexed

|Usage Kind|Target Entity|Target Property|Cardinality|Note|
|-----|-----|-----|-----|-----|
| Included by | [Well.1.0.0](../../../E-R/master-data/Well.1.0.0.md) | allOf | one |  |
| Included by | [Wellbore.1.0.0](../../../E-R/master-data/Wellbore.1.0.0.md) | allOf | one |  |

## Adjust Queries

Search queries will have to be adapted from flattened
([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#flattened-query))
to nested syntax ([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#nested-query)).

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)