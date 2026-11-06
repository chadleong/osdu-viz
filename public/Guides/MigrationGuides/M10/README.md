# Milestone 10 Migration

## Indexing Hint Changes:

5 schema fragments, which contain arrays of objects that have previously indexed as `flattened` have been changed
to `nested` for betters scoped search responses. Practically this requires indexing all `osdu:wks:*:*` kinds, except the
ones under the group-type `dataset`.

1. [`osdu:wks:AbstractFacility:1.0.0`](AbstractFacility.1.0.0.md)
2. [`osdu:wks:AbstractMaster:1.0.0`](AbstractMaster.1.0.0.md)
3. [`osdu:wks:AbstractProject:1.0.0`](AbstractProject.1.0.0.md)
4. [`osdu:wks:AbstractReferenceType:1.0.0`](AbstractReferenceType.1.0.0.md)
5. [`osdu:wks:AbstractWorkProductComponent:1.0.0`](AbstractWorkProductComponent.1.0.0.md)

Search queries will have to be adapted from flattened
([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#flattened-query))
to nested syntax ([see tutorial](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/ArrayOfObjects.md#nested-query)),
e.g., like:

```json
{
    "kind": "osdu:wks:master-data--Well:1.0.0",
    "query": "nested(data.NameAliases, (AliasName:\"L10-14\" AND AliasNameTypeID:\"osdu:reference-data--AliasNameType:UniqueIdentifier:\"))",
    "limit":100,
    "aggregateBy":"kind"
}
```

## LogCurveType:1.0.0, LogCurveFamily:1.0.0

* LogCurveFamily:1.0.0 to [osdu:wks:reference-data--LogCurveFamily:1.1.0](LogCurveFamily.1.0.0.md)
* LogCurveType:1.0.0 to [osdu:wks:reference-data--LogCurveType:1.1.0](LogCurveType.1.0.0.md)

## TechnicalAssurance

A new property TechnicalAssuranceID got added, see [`osdu:wks:AbstractCommonResources:1.0.0`](AbstractCommonResources.1.0.0.md)

## Seismic Activity and Pre-Stack Support

Pre-stack support is added via additional properties. Generally this should not require any migration, except for
SeismicAcquisitionSurvey:1.0.0 &rarr; SeismicAcquisitionSurvey:1.1.0 due to some deprecations and new, more robust
source and receiver configuration structures.

1. Seismic2DInterpretationSet:1.0.0 [`osdu:wks:master-data--Seismic2InterpretationSet:1.1.0`](Seismic2DInterpretationSet.1.0.0.md)
2. Seismic3DInterpretationSet:1.0.0 [`osdu:wks:master-data--Seismic3InterpretationSet:1.1.0`](Seismic3DInterpretationSet.1.0.0.md)
3. SeismicAcquisitionSurvey:1.0.0 [`osdu:wks:master-data--SeismicAcquisitionSurvey:1.1.0`](SeismicAcquisitionSurvey.1.0.0.md)
   **Migration required**
4. SeismicProcessingProject:1.0.0 [`osdu:wks:master-data--SeismicProcessingProject:1.1.0`](SeismicProcessingProject.1.0.0.md)
5. SeismicTraceData:1.0.0 [`osdu:wks:work-product-component--SeismicTraceData:1.1.0`](SeismicTraceData.1.0.0.md)


# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)