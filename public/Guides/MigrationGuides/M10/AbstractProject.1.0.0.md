[[_TOC_]]

# Indexing Hint Changes

M10 changes the indexing hints for [`osdu:wks:AbstractProject:1.0.0`](../../../E-R/abstract/AbstractProject.1.0.0.md):

* `data.Contractors[]` changes from `flattened` to `nested` for better scoped search responses.

# Migration to `osdu:wks:AbstractProject:1.0.0`

In order to become effective, the records including the `AbstractProject` fragment must be re-indexed.

## Entities to be Re-indexed

|Usage Kind|Target Entity|Target Property|Cardinality|Note|
|-----|-----|-----|-----|-----|
| Included by | [Seismic2DInterpretationSet.1.0.0](../../../E-R/master-data/Seismic2DInterpretationSet.1.0.0.md) | allOf | one |  |
| Included by | [Seismic3DInterpretationSet.1.0.0](../../../E-R/master-data/Seismic3DInterpretationSet.1.0.0.md) | allOf | one |  |
| Included by | [SeismicAcquisitionSurvey.1.0.0](../../../E-R/master-data/SeismicAcquisitionSurvey.1.0.0.md) | allOf | one |  |
| Included by | [SeismicProcessingProject.1.0.0](../../../E-R/master-data/SeismicProcessingProject.1.0.0.md) | allOf | one |  |

## Adjust Queries

Search queries will have to be adapted from flattened
([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#flattened-query))
to nested syntax ([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#nested-query)).

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)