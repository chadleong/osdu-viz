[[_TOC_]]

# Indexing Hint Changes

M10 changes the indexing hints for [`osdu:wks:AbstractMaster:1.0.0`](../../../E-R/abstract/AbstractMaster.1.0.0.md):

* `data.NameAliases[]` changes from `flattened` to `nested` for better scoped search responses.
* `data.GeoContexts[]` changes from `flattened` to `nested` for better scoped search responses.

# Migration

In order to become effective, the records including the `AbstractMaster` fragment must be re-indexed.

## Entities to be Re-indexed

|Usage Kind|Target Entity|Target Property|Cardinality|Note|
|-----|-----|-----|-----|-----|
| Included by | [ActivityTemplate.1.0.0](../../../E-R/master-data/ActivityTemplate.1.0.0.md) | allOf | one |  |
| Included by | [ActivityTemplateArc.1.0.0](../../../E-R/master-data/ActivityTemplateArc.1.0.0.md) | allOf | one |  |
| Included by | [Agreement.1.0.0](../../../E-R/master-data/Agreement.1.0.0.md) | allOf | one |  |
| Included by | [Basin.1.0.0](../../../E-R/master-data/Basin.1.0.0.md) | allOf | one |  |
| Included by | [Field.1.0.0](../../../E-R/master-data/Field.1.0.0.md) | allOf | one |  |
| Included by | [GeoPoliticalEntity.1.0.0](../../../E-R/master-data/GeoPoliticalEntity.1.0.0.md) | allOf | one |  |
| Included by | [Organisation.1.0.0](../../../E-R/master-data/Organisation.1.0.0.md) | allOf | one |  |
| Included by | [Play.1.0.0](../../../E-R/master-data/Play.1.0.0.md) | allOf | one |  |
| Included by | [Prospect.1.0.0](../../../E-R/master-data/Prospect.1.0.0.md) | allOf | one |  |
| Included by | [Seismic2DInterpretationSet.1.0.0](../../../E-R/master-data/Seismic2DInterpretationSet.1.0.0.md) | allOf | one |  |
| Included by | [Seismic3DInterpretationSet.1.0.0](../../../E-R/master-data/Seismic3DInterpretationSet.1.0.0.md) | allOf | one |  |
| Included by | [SeismicAcquisitionSurvey.1.0.0](../../../E-R/master-data/SeismicAcquisitionSurvey.1.0.0.md) | allOf | one |  |
| Included by | [SeismicProcessingProject.1.0.0](../../../E-R/master-data/SeismicProcessingProject.1.0.0.md) | allOf | one |  |
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