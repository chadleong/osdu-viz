<a name="TOC">Table of Contents</a>

[[_TOC_]]

# Capabilities of DDMSs

OSDU endorsed Domain Data Management Systems are organized in the corresponding
[GitLab Project Folder](https://community.opengroup.org/osdu/platform/domain-data-mgmt-services).
DDMS APIs are linked to well-known Data Definition schemas, also known as catalog schemas. The
[content--DdmsFootprint](../../../E-R/content/DdmsFootprint.1.0.0.md) offers a content schema definition for a
DDMS inventory, which links OSDU WKS schemas with internal DDMS schemas.

The DdmsFootprint content schema can be explained in the following diagram (see also Chapter
[2.4.3 Relationships to DDMS Capabilities](../../../Guides/Chapters/02-GroupType.md#243-relationships-to-ddms-capabilities)):

| ![DdmsFootprint](../../../Guides/Chapters/Illustrations/02/DdmsFootprint.drawio.png) |
|:------------------------------------------------------------------------------------:|
|       **DdmsFootprint as contract linking 'catalog' schemas to DDMS content**        |


## DDMS Metadata

The content schema holds the content schema version and metadata about the DDMS. The example below shows the Reservoir
DDMS metadata.

<details>

<summary markdown="span">Reservoir DDMS Metadata</summary>

<OsduImportJSON>[Complete Reservoir DDMS Capabilities](./records/RdmsFootprint.json#only.SchemaKind|Name|Description|DdmsVersion)</OsduImportJSON>

```json
{
  "SchemaKind": "osdu:wks:content--DdmsFootprint:1.0.0",
  "Name": "Reservoir DDMS",
  "Description": "The data footprint declared by the Reservoir DDMS as capability.",
  "DdmsVersion": "DDMS Version 1.1"
}
```

</details>

[Back to TOC](#TOC)

## CoveredItems

The OSDU well known schemas overed by the DDMS are listed in the `CoveredItems[]` array. One member is shown in the
expandable section below:

<details>

<summary markdown="span">Reservoir DDMS Metadata, CoveredItem <code>Activity</code></summary>

<OsduImportJSON>[Complete Reservoir DDMS Capabilities](./records/RdmsFootprint.json#only.CoveredItems[0])</OsduImportJSON>

```json
{
  "CoveredItems": [
    {
      "WKS": "osdu:wks:work-product-component--Activity:1.",
      "ContentTypes": [
        "resqml20.obj_Activity",
        "eml23.Activity"
      ]
    }
  ]
}
```

</details>

The example demonstrates that multiple API versions with different object or content implementations can be handled.
Here the OSDU Activity maps to RESQML version 2.0.1 `resqml20.obj_Activity` and RESQML 2.2 `eml23.Activity`, where
Activity is part of the common model (EML2.3).

[Back to TOC](#TOC)

## AuthorityToContentTypes

This array can optionally keep links to the individual documentation for the DDMS or standard data types, or at least
indicate the schema or standard version associated with the type.

<details>

<summary markdown="span">Reservoir DDMS Metadata, AuthorityToContentTypes for <code>resqml20.obj_Activity</code></summary>

<OsduImportJSON>[Complete Reservoir DDMS Capabilities](./records/RdmsFootprint.json#only.AuthorityToContentTypes[0])</OsduImportJSON>

```json
{
  "AuthorityToContentTypes": [
    {
      "Authority": "Energistics RESQML",
      "Description": "RESQML 2.0.1",
      "AuthorityURL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-000-000-titlepage.html",
      "ContentTypeURLs": [
        {
          "ContentType": "resqml20.obj_Activity",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-292-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_ActivityTemplate",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-293-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_EarthModelInterpretation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-095-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_FaultInterpretation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-096-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_StringTableLookup",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-158-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_CategoricalProperty",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-134-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_ContinuousProperty",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-136-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_DiscreteProperty",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-137-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_Grid2dRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-255-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_PolylineRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-264-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_PolylineSetRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-266-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_PointSetRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-263-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_TriangulatedSetRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-271-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_GeobodyInterpretation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-100-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_GridConnectionSetRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-214-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_HorizonInterpretation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-103-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_IjkGridRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-217-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_GeneticBoundaryFeature",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-034-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_TectonicBoundaryFeature",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-041-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_LocalDepth3dCrs",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-012-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_LocalTime3dCrs",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-013-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_OrganizationFeature",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-038-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_StratigraphicUnitFeature",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-040-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_PropertySet",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-154-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_RepresentationSetRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-172-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_PropertyKind",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-152-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_StratigraphicColumn",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-109-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_StratigraphicColumnRankInterpretation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-110-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_StratigraphicUnitInterpretation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-112-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_SubRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-173-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_TimeSeries",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-018-0-R-sv2010.html"
        },
        {
          "ContentType": "resqml20.obj_UnstructuredGridRepresentation",
          "URL": "https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-241-0-R-sv2010.html"
        }
      ]
    }
  ]
}
```

</details>

The "Authority" for the content type is declared in the common metadata and an association with the main documentation
page for RESQML 2.0.1 in this [example](https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-000-000-titlepage.html).

The internal RESQML 2.0.1 content type `resqml20.obj_Activity` is associated with the official RESQML documentation for
[Activity](https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-500-292-0-R-sv2010.html).

[Back to TOC](#TOC)