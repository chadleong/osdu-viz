<a name="TOC"></a> Previous Chapter: [Appendix D OSDU Schemas](93-OSDU-Schemas.md)

[[_TOC_]]

# Appendix E Known Issues

## Appendix E.1 Schema Issues

### Appendix E.1.1 Absent Values, `null`

In JSON records single absent values can be represented as `null` or by omitting the name-value pair, if the property is
declared as optional (OSDU default).

> * **_Issue_**: The schema must permit the `null` explicitly. Generally OSDU does not permit `null` as value.
    Records with null values will fail schema validation.<br>
> * **_Pitfall/Potential Confusion_**: [Search service responses](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/api.md)
    never conform to OSDU Storage record schemas: absent values come
    as `null` value. Property names are typically concatenated with `.` as separator like `RootName.NestedName`.

Consequently:

> * **_Recommendation_**: Omit single properties in the record.

### Appendix E.1.2 `date-time` Validation

OSDU tags properties representing date and/or date time with the following metadata:

```json
{
  "SomeDateTimeProperty": {
    "type": "string",
    "format": "date-time",
    "x-osdu-frame-of-reference": "DateTime"
  }
}
```

> * **_Issue_**:
    The [JSON schema documentation](https://json-schema.org/understanding-json-schema/reference/string#dates-and-times)
    implies [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) - but in the OSDU context, it only means that the
    normalised form is expected to be ISO 8601.

* The OSDU principle to keep data in their original state, as described
  in [4.2 Challenge](04-FrameOfReference.md#42-challenge), breaks with the assumed ISO 8601 standard.
* The additional, OSDU-specific `"x-osdu-frame-of-reference": "DateTime"` tag/value pair indicates that the `meta[]`
  block is expected to provide the exact format definition if the value is not ISO 8601. For details, please refer to
  [4.3.2.3 DateTime as meta Element](04-FrameOfReference.md#4323-datetime-as-meta-element).

> * **_Recommendation for Developers_** Try to avoid running the schema validation in 'strict' mode, as some validators
    permit. See also the Attention in section [4 Frame of Reference](04-FrameOfReference.md#4-frame-of-reference)
> * **_Recommendation for Data Loaders/Data Creators/Application Developers_**: Make sure, the `meta[]` block contains
    an element of `"kind": "DateTime"` with the correct format definition and a reference to the property name
    in `"propertyNames": []` as described
    in [4.3.2.3 DateTime as meta Element](04-FrameOfReference.md#4323-datetime-as-meta-element)

### Appendix E.1.3 GeoContexts

[AbstractMaster](../../E-R/abstract/AbstractMaster.1.2.0.md)
and [AbstractWorkProductComponent](../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md) both include an array
of [AbstractGeoContext](../../E-R/abstract/AbstractGeoContext.1.0.0.md). This standardised structure captures the
'geographical' context of the master-data or work-product-component records and allows to relate to master-data of type
GeoPoliticalEntity, Basin, Field, Play or Prospect.

> * **_Issue_**: Schema validation is easy to fail if the elements are too sparsely populated, which is permitted
    (properties of the `oneOf` schema fragment members are all optional and the fragments themselves are by default
    extensible).

The schema fragments
*  [AbstractGeoPoliticalContext](../../E-R/abstract/AbstractGeoPoliticalContext.1.0.0.md)
*  [AbstractGeoBasinContext](../../E-R/abstract/AbstractGeoBasinContext.1.0.0.md)
*  [AbstractGeoFieldContext](../../E-R/abstract/AbstractGeoFieldContext.1.0.0.md) (with constant `"GeoTypeID": "Field"`)
*  [AbstractGeoPlayContext](../../E-R/abstract/AbstractGeoPlayContext.1.0.0.md)
*  [AbstractGeoProspectContext](../../E-R/abstract/AbstractGeoProspectContext.1.0.0.md)

_**should**_ all have the two defined properties declared as required - but haven't.

> * **_Recommendation_**: Treat the schema fragment properties **_as if_** they were defined as **_required_**.<br>
    In particular, do not omit the constant string value `"GeoTypeID": "Field"` in AbstractGeoFieldContext, even if
    the value is seemingly redundant due to the `master-data--Field` string fragment in the related `FieldID` value.

If the two declared properties are not populated schema validators will report that the incomplete fragment is valid for
more than one of the fragments allowed in the `oneOf`
in [AbstractGeoContext](../../E-R/abstract/AbstractGeoContext.1.0.0.md).

`GeoContexts[]` was designed to support geographical search use cases, for which searches by the kind od `GeoTypeID`
and/or the specific relationship to, e.g. a given country, are desired. For successful searches it is therefore a
**_good idea_** to treat `GeoTypeID` and the master-data relationships to either `GeoPoliticalEntityID`, `BasinID`,
`FieldID`, `PlayID` or `ProspectID`.

### Appendix E.1.4 Stale Fragment References and Validation Gaps

> **Status (May 2026): Partially resolved — the most widespread instance
> (`AbstractCommonResources`) is slated for review and acceptance as a workgroup deviation;
> remaining minor-bump findings are tracked and currently being addressed. The broader
> validation-gap concern (Draft-07 `additionalProperties` limitation) remains open for review.**

OSDU Well-Known Schemas compose Abstract fragments via JSON `$ref` links in `allOf` blocks and individual properties. When the [preferred version](../../ReferenceValues/Manifests/reference-data/LOCAL/PreferredSchemaVersion.1.json) of a schema—typically the most current—references an older version of an Abstract fragment, validation is performed against the *older* rules. Consequently, new properties, tightened constraints, or corrected patterns introduced in the newer fragment are **silently absent**.

This is compounded by a **JSON Schema Draft-07 limitation**: `additionalProperties: false` does not inspect properties declared inside `$ref` or `allOf` sub-schemas (see [Wright et al., 2018, §6.5.6](https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5.6)). Abstract fragments carry no `additionalProperties` constraint themselves, so undeclared properties added to the `data` block of a record can pass validation undetected. This behavior was the primary driver for the introduction of `unevaluatedProperties` in later versions like [Draft 2020-12](https://json-schema.org/draft/2020-12/release-notes), which allows constraints to "see through" composed sub-schemas.

The [Schema Data Quality Checkers](../../_doc/SchemaDataQualityCheckers.md) Python scripts identify which preferred schemas carry stale fragment references. The reporting distinguishes between:

*   **Minor version bumps** (e.g., `AbstractPTCondition.1.0.0 → 1.1.0`): The fragment's behavior or definition has changed; affected schemas should be updated.
*   **Patch version bumps** (e.g., `AbstractReferencePropertyType.1.2.1 → 1.2.2`): Typically involves description or format corrections; these are lower priority but remain tracked.
*   **Cross-major upgrades** (e.g., `AbstractGenericReservoirUnit.1.1.0` where `2.0.0` exists): These are **not reported as stale**. A schema cannot adopt a fragment at a higher major version without a breaking change to its own versioning. These are instead surfaced in a **Breaking Changes Awareness** section to ensure architectural divergence is monitored. Resolving these requires a planned major version bump of the consuming schema.

Schemas that are deprecated, or for which the Data Definitions Workgroup has accepted a technical deviation, can be listed in [_doc/SchemaDataQuality/exceptions.json](../../_doc/SchemaDataQuality/exceptions.json) to suppress them from the report. Two exception types are supported:

*   **`Fragment`**: Suppresses validation findings for a specific fragment across all consuming schemas.
*   **`Schema`**: Suppresses findings for one specific schema, ensuring other consumers of the same fragment remain subject to checks.

### Appendix E.1.5 `AbstractCommonResources.1.0.0 → 1.0.1` — Review Pending (2026)

The most widespread patch-bump finding is currently pending review for acceptance as a Workgroup-approved deviation.

`AbstractCommonResources` is programmatically injected by the schema generation script rather than being referenced directly by authoring schemas. The `1.0.0 → 1.0.1` update was documentation-only, involving the deprecation of the optional `ResourceSecurityClassification` field (a cosmetic R1 legacy attribute). A bulk update across all consuming schemas was deemed disproportionate for a documentation-only patch. This deviation is slated for formal review and potential acceptance by the Data Definitions Workgroup during the 2026 cycle.

The broader question of whether Abstract fragments should enforce `additionalProperties: false`and the subsequent impact given the Draft-07 limitation—remains open for review.

> **Recommendation**: Keep preferred schemas up to date with the latest Abstract fragment versions within the same major version. Use the staleness checker report to track and prioritize upgrades, focusing on minor version bumps first. Monitor the Breaking Changes Awareness section to plan future major version work.

### Appendix E.1.6 `const`

The JSON schema keyword `const`, which enables the definition of constant values in schemas, is ignored by the
[indexer](https://community.opengroup.org/osdu/platform/system/indexer-service/-/blob/master/docs/docs/api.md).
`const` properties in OSDU **_must_** be accompanied by a `type` declaration. If this is not provided the Indexer will
fail and not index anything for that particular kind. Examples for such failures are CementJob:1.0.0 and
CementJob:1.1.0.

---

Return to the [Beginning of the Chapter](#TOC)

## Appendix E.2 Relationships

Relationships in OSDU are defined as string properties. The values are constrained by a `pattern`. OSDU relationships
support

* versioned target records, and
* target records implicitly referring to the _latest_ record version (generally recommended default)

The value is composed of the two components [6.1.1 Record `id`](06-LifecycleProperties.md#611-record-id) (system property
`id`) and record [6.1.3 Record `version`](06-LifecycleProperties.md#613-record-version) (system property `version`), joined by a
colon `:` symbol, i.e.:

```json
{"RelatedObjectID": "{{record-id}}:{{record-version}}"}
```

> * **_Pitfall_**: The colon `:` separator is also permitted as part of the record `id`. In addition, the colon `:` is
    used as separators in the record-id itself, that is between the data-partition-id and the entity type identifier and
    the unique object identifier.
> * **_Issue_**: When navigating relationships, the value must be split by the last colon `:` to extract
    the `{{record-id}}` for Search queries or Storage GET records requests. If a version is specified, a retrieval of
    that record version requires a different Storage Service endpoint,
    see [Storage Tutorial](https://community.opengroup.org/osdu/platform/system/storage/-/blob/master/docs/docs/api.md#get-record-version)

Consequently:

> * **_Recommendation 1_**: Never use a trailing colon `:` in the record `id`.
> * **_Recommendation 2_**: Never use a record-id, which ends with an integer number that may alias with a record
    version number, i.e., a UNIX microsecond timestamp.

Examples for versioned and un-versioned relationships in OSDU records:

```json
{
  "UnVersionedRelatedObjectID": "partition-id:group-type--EntityTypeName:78577d30-dda7-4ad3-a5ca-5cb1c1c56354:",
  "VersionedRelatedObjectID":   "partition-id:group-type--EntityTypeName:78577d30-dda7-4ad3-a5ca-5cb1c1c56354:1704779151123456"
}
```
---

Return to the [Beginning of the Chapter](#TOC)

## Appendix E.3 Impacts due to Core Service Issues

This section lists known issues or limitations impacting the use of OSDU datastructures.

### Appendix E.3.1 Record id Constraints

OSDU record `id`s must follow a particular pattern, see the section about
[6.1.1 Record `id`](06-LifecycleProperties.md#611-record-id). In addition, it has been found in
[Storage issue #213](https://community.opengroup.org/osdu/platform/system/storage/-/issues/213) that trailing `.` in
record `id`s can cause data corruption under certain conditions.

> **_Recommendation_**
>
> * It is therefore stringly recommended to avoid creating record `id`s with a trailing `.` (dot or period). For
    example, avoid `"id": "partition-id:master-data--Well:FullStop."`.

From M23 on OSDU Data Definition do no longer distribute reference value record manifests with record `id`s containing
trailing `.`.

### Appendix E.3.2 Normalization

1. **Coordinates**<br>
   The Storage service performs normalization of data records, e.g., while indexing. Details are described in
   [4.3.2 FoR in Records](04-FrameOfReference.md#432-for-in-records).
   <br>
   <br>AsIngestedCoordinates carry both
   <br>
   1. `CoordinateReferenceSystemID` (historically optional, but intended to be prioritized/preferred over 2.)
   2. `persistableReferenceCrs` (historically mandatory)
   <br><br>
      Platform deployments prior to M23, however, still require the `persistableReferenceCrs` fully populated for
      successful normalizations.
2. **Numerical Values**<br>
   Multi-level, nested arrays of objects,
   e.g., `CementStages[].CementingFluid[].ThickeningTimeTest[].ThickeningTestElapsedTime`
   in [CementJob](../../E-R/work-product-component/CementJob.1.3.0.md) are **_not_** normalized.

## Appendix E.4 Search Queries do not work...

There are four services playing a role,
1. [Schema Service](https://community.opengroup.org/osdu/platform/system/schema-service/-/tree/master/docs/docs)
   where the contributions by OSDU Data Definitions are bootstrapped and custom schemas can be added. Schemas are
   identified by their `kind`.
2. [Storage Service](https://community.opengroup.org/osdu/platform/system/schema-service/-/tree/master/docs/docs),
   which receives the PUT requests for records, where `kind` is mandatory.
3. [Indexer Service](https://community.opengroup.org/osdu/platform/system/indexer-service/-/blob/master/docs/docs/api.md),
   which responds to Storage change events. It transforms the records into searchable index records and performs
   potentially dynamic index extensions, see [Appendix D.6.2 Index Extensibility](./93-OSDU-Schemas.md#appendix-d62-index-extensibility).
4. [Search](https://community.opengroup.org/osdu/platform/system/search-service/-/blob/master/docs/docs/api.md),
   finally, uses the index to respond to queries.

* Search only returns what has been indexed.
* The Indexer requires a schema and optionally a [reference-data--IndexPropertyPathConfiguration](../../E-R/reference-data/IndexPropertyPathConfiguration.1.0.0.md) to create the index data.
  This can fail
  * if the value is not matching the definition in the schema,
  * or if the value belongs to a property, which is not declared in the schema;
  * if the schema is malformed or not understood by the indexer, indexing may fail.
* `data.ExtensionProperties` is intended as container for non-OSDU content, however, the OSDU schema is
  `"type": "object"` which doesn't provide the indexer with any useful information. All content in
  `data.ExtensionProperties` remains invisible to Search.

---

## Links

1. Return to the [Beginning of the Chapter](#TOC)
2. Next Chapter: [Appendix F Activity Templates](95-ActivityTemplates.md)
3. Browse to the [Schema Usage Guide Table of Contents](../README.md)