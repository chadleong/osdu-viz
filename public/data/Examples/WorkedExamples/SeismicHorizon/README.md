<a name="TOC"></a>

\[\[*TOC*]]

# Seismic Horizon

## Introduction

* "Horizon" is one of many Seismic domain data types ex. Trace data, Bin grid, Fault and likely some more.  Some of these are derived, from Seismic Interpretation.
* For handling data types such as this, learning curve is steep.

  * Start with learning what is covered by Geophysics Data Definition ([SeismicHorizon](https://community.opengroup.org/osdu/data/data-definitions/-/blob/master/E-R/work-product-component/SeismicHorizon.2.1.0.md))
  * Then understand Reservoir Data Definition ([HorizonInterpretation](https://community.opengroup.org/osdu/data/data-definitions/-/blob/master/E-R/work-product-component/HorizonInterpretation.1.2.0.md))
  * Also understand [RESQML Data Model](https://docs.energistics.org/#RESQML/RESQML_TOPICS/RESQML-000-220-0-C-sv2010.html)
  * Beyond REST API (which is common for OSDU DP), understand [ETP1.2](http://docs.energistics.org/EO_Resources/ETP_Specification_v1.2_Doc_v1.1.pdf) and set up your own ETP client (may even be local ETP server)
* Primary handling of "Horizon" data is offered from Reservoir DDMS. However there is one possibility of ["Manifest generation"](https://community.opengroup.org/osdu/platform/domain-data-mgmt-services/reservoir/home/-/blob/main/openApi.json?ref_type=heads) that can leave footprint in Core OSDU DP by way of creating suitable catalog records.
* While there isn't a common Industry standard exchange format for "Seismic Horizon" data, there are several prevalent ones such as CPS3, Charisma, EarthVision, GeoQuest/IESX and others. When building your own converter, consider using [fesapi](https://github.com/F2I-Consulting/fesapi)/[fetpapi](https://github.com/F2I-Consulting/fetpapi) from F2I-Consulting – which has been used by TotalEnergies, DGI and other member companies.

  * Unlike SegY-to-oVDS converter, there is no ready loader of Horizon data from CSV format. The users will benefit even if initially only one known format (ex: CPS3) is considered for building such solution.
* Need to consider three types of information:

  * Business Meta Data
  * Meta data to describe data
  * Data Values
  * For "shared Entities between DDMS (eg: Seismic Horizon, Well logs) Business meta data should be delivered in the Catalog, MetaData to describe data in the catalog and DataValues in "Core datasets" or "DDMS Datasets".
* At point of ingestion, there should be a functionality to generate an ingestion manifest to index individual horizon files.
* Once loaded, the Seismic horizon(s) needs to be **discoverable** by OSDU-aware 3rd party app(s) **via a catalogue search**

# System of Record (SOR)

* ETP client can be used for both read and write. This is more common in Reservoir community.
* Free library ([fesapi](https://github.com/F2I-Consulting/fesapi)/[fetpapi](https://github.com/F2I-Consulting/fetpapi)) from F2I-Consulting can be used from programs, if desired, as an alternative.
* Reservoir DDMS now offers Domain (REST) API - Json approach for write and read of input - can be considered as an alternative, only for light weight data (typically for small in-field coverage and not for wider basin scale coverage). "Read" option is easy. "Write" option requires good understanding of RESQML data model and is not trivial.
* Shell workflow example – used own RESQML builder (python code) to convert Horizon data from ASCII into Json structure, then Jupyter Notebook (Python code) to ingest data into Reservoir DDMS, later use Jupyter Notebook (Python code) to retrieve Horizon data. For both steps, Reservoir DDMS Domain (REST) API was used.
* TotalEnergies workflow example – used ETP client for both write and read with RDDMS (SOE) then use Manifest generation and ingestion to publish RDDMS data into the catalog.
* Geosiris workflow example – Use demo data (Volve dataset), then created catalog records (SeismicHorizon, ColumnBasedTable, Dataset tabular) using python code. Then used (a) Core services to discover data from catalog and actual data file and/or (b) use Python code to convert Horizon data into RESQML V2.2 entities in Json, then optionally ingest into Reservoir DDMS using Domain ETP API. Finally read from Reservoir DDMS using Geosiris GitHub code.

# Typical workflow (SOR)

See diagram. Steps have prefix of "R" (for Reservoir DDMS).

!\[Illustrations/Horizon-slide01.png](Illustrations/Horizon-slide01.png)

# Linking an existing bin grid to a RDDMS seismic horizon

When you create a seismic horizon on a bin grid in the RDDMS, it is possible to link this bin grid to an existing one in the OSDU catalog. In order to perform that, just give the OSDU Seismic Bin Grid identifier as an alias of the corresponding RESQML bin grid.

For instance, consider this existing OSDU Seismic bin grid with

```json
...
"id": "opendes:work-product-component--SeismicBinGrid:398541-583448"
...
```

Then, the corresponding RESQML bin grid should include the corresponding alias

```xml
<resqml2:Grid2dRepresentation uuid="a0c3c7a3-7ef9-40ca-b3f3-47be928c0df8">
  ...
  <eml20:Aliases authority="osdu">
    <eml20:Identifier>398541-583448</eml20:Identifier>
  </eml20:Aliases>
  ...
</resqml2:Grid2dRepresentation>
```

Finally you can link this RESQML bin grid to your RESQML horizon by means of UUID

```xml
<resqml2:Grid2dRepresentation uuid="4dd14a2a-6e25-4a81-a96c-0272e9df7050">
  ...
  <resqml20:Grid2dPatch>
    ...
    <resqml20:Geometry xsi:type="resqml20:PointGeometry">
      ...
      <resqml20:Points xsi:type="resqml20:Point3dZValueArray">
        ...
        <resqml20:SupportingGeometry xsi:type="resqml20:Point3dFromRepresentationLatticeArray">
          ...
          <resqml20:SupportingRepresentation>application/x-resqml+xml;version=2.0;type=obj\_Grid2dRepresentation</eml20:ContentType>
            <eml20:Title>my bin grid</eml20:Title>
            <eml20:UUID>a0c3c7a3-7ef9-40ca-b3f3-47be928c0df8</eml20:UUID>
          </resqml20:SupportingRepresentation>
  ...
</resqml2:Grid2dRepresentation>
```

# Data Models (OSDU and RESQML)

Enclosed here is a high level overview of how Horizon (and related data types) are stored in OSDU and RESQML Data Models. This should help reader understand schema/entities in two Data Models. With such context, one can follow how OSDU records are created by "Manifest Generation" process of Reservoir DDMS (Step - R6 in SOR workflow, described earlier in this document).

!\[Illustrations/Horizon-Bingrid-in-OSDU-and-in-RESQML.png](Illustrations/Horizon-Bingrid-in-OSDU-and-in-RESQML.png)

# Discussions in "Capability Portfolio" group

* It is important to find out from "Seismic Interpretation" SMEs as to how they envisage **passing the Horizon information** to OSDU Data Platform?

  * Files \*.dat Formats ( CPS3, others)
  * RESQML V2.0.1 XML.Epc+Hdf5
  * RESQML V2.0.1 AND V2.2  JSON Format
  * Inside OpenVDS or OpenZgy files
* How do applications **ingest Horizon data** into OSDU Data Platform?

  * Common usage pattern - Reservoir DDMS approach - transfer of RESQML V2.\* objects (using ETP API or HTTP REST API) and then create Catalog objects by use of "Manifest generation" step.
  * Alternatively, by using specific service to read file.Dat Format (or OpenVDS/OpenZgy file) and create Catalog records in OSDU DP.
* How do the Geomodeling applications intend to **retrieve actual Horizon information** from OSDU DP?

  * First search using Catalog objects. Then retrieval of detailed Horizon data will depend on how it was ingested and persisted into OSDU DP.

    * If Reservoir DDMS was used, then use ETP API or HTTP REST API.
    * If OpenVDS or OpenZgy was used, then use suitable library.
    * If ColumnBasedTable and Tabular Dataset were used, then use own program to retrieve data from \*.dat files.

!\[Illustrations/Horizon-from-CP.png](Illustrations/Horizon-from-CP.png)

---

[Back to TOC](#TOC)

# Horizon Control Points (Seed Points)

## Overview

Horizon control points (also known as seed points or pick points) are the sparse spatial coordinates used by interpreters to guide automated horizon tracking algorithms. These points represent the foundation of seismic horizon interpretation workflows, capturing the X, Y coordinates (or the inline and crossline locations) along with the Z value (depth or time) where geophysicists have manually identified a specific reflector on seismic data.

The [work-product-component--HorizonControlPoints](../../../E-R/work-product-component/HorizonControlPoints.1.0.0.md) schema provides a standardized way to capture and exchange these interpretation seed points within the OSDU Data Platform, supporting both inline JSON storage and external file references.

## High Level Schema Relationship Model (Abridged)

!\[SeismicHorizonControlPoints.png](./Illustrations/HorizonControlPoints.png)<BR>
***NOTE:*** <i>Only selected properties shown</i>

**Key Relationships:**

* **HorizonControlPoints.1.0.0** (yellow) extends `AbstractWPCGroupType` and `AbstractRepresentation`, and contains `AbstractColumnBasedTable` for storing control point coordinates and metadata
* **SeismicHorizon.2.1.0** (yellow) - Sibling work product component, also a specialization of AbstractRepresentation. When a SeismicHorizon is generated from control points, it references the source via `HorizonControlPointsID` (singular). Both SeismicHorizon (continuous surface) and HorizonControlPoints (sparse seed points) are Representations of the same horizon interpretation in RESQML/OSDU terminology, providing different representation or deliverable views. Control points serve as input seeds that guide automated tracking to generate the continuous SeismicHorizon surface.
* **WellboreMarkerSet** (yellow) - Optional reference to formation tops at well locations for well-tie validation. When control points are picked at well locations, they reference the well position directly using either grid coordinates (inline/crossline) or spatial coordinates (X, Y, Z) - **no wellbore trajectory calculation or interpolation is performed**.
* **File.TabularData** (blue) provides external file storage option for large control point datasets
* **ColumnBasedTableTypeID** (turquoise) references standard column definitions for spatial coordinates

---

## Use Cases and Workflows

### When to Use SeismicHorizonControlPoints

**Primary Use Cases:**

1. **Interpretation Seed Points** - Manual picks used to initialize automated horizon tracking
2. **Quality Control Points** - Sparse validation locations for checking automated interpretation results
3. **Well Tie Control** - Horizon picks at well locations for time-depth calibration
4. **Cross-Section Picks** - Control points along 2D interpretation lines or arbitrary cross-sections

**Workflow Position:**

* **Input to:** Automated horizon tracking, surface interpolation algorithms
* **Output from:** Manual seismic interpretation, well-to-seismic tie processes
* **Hand-offs:** Geophysics → Reservoir Modeling (provides structural framework control)

### Inline vs External Storage Patterns Options

**1. Inline Storage** (`HorizonControlPoints.ColumnValues`):

* Use for: Small datasets (approximately < 100 points), prototypes, self-contained records
* Advantages: Single-file portability, no external dependencies
* Example: [NWShelf-TopMungaroo-SeedPoints-InlineDataset.json](./records/HorizonControlPoints.1.0.0--NWShelf-TopMungaroo-SeedPoints-InlineDataset.json)

**External File Storage** (`Datasets` array):

* Use for: Large datasets (approximately > 100 points), version-controlled files, system integration
* Advantages: Handles massive point clouds, separates data from metadata
* **Supported formats:**

  * `File.TabularData` - Structured CSV/TSV with column definitions (recommended for interoperability)
  * `File.Generic` - ASCII-based formats (e.g., CPS-3, interpretation software exports) characterized via EncodingFormatTypeID
  * Application-specific formats - Must include proper SchemaFormatTypeID for consumer interpretation
* Example: [Gorgon-TopDupuy-SeedPoints-2024-ExternalDataset.json](./records/...)

---

## Example Data Sets

### 1\. Inline Data Example

Small dataset with control points stored directly in the JSON structure.

<details>
<summary markdown="span">Inline JSON Data, <code>work-product-component--HorizonControlPoints</code> example</summary>

<OsduImportJSON>[HorizonControlPoints Inline, Full record](./records/HorizonControlPoints.1.0.0--NWShelf-TopMungaroo-SeedPoints-InlineDataset.json#only.data)</OsduImportJSON>

```json
{
  "data": {
    "ResourceHomeRegionID": "partition-id:reference-data--OSDURegion:AUWest:",
    "ResourceHostRegionIDs": [
      "partition-id:reference-data--OSDURegion:AUWest:"
    ],
    "ResourceCurationStatus": "namespace:reference-data--ResourceCurationStatus:Created:",
    "ResourceLifecycleStatus": "namespace:reference-data--ResourceLifecycleStatus:Loading:",
    "Source": "Seismic Interpretation Project - NW Shelf 2024",
    "ExistenceKind": "partition-id:reference-data--ExistenceKind:Actual:",
    "Datasets": [],
    "DDMSDatasets": [],
    "Artefacts": [],
    "IsExtendedLoad": false,
    "IsDiscoverable": true,
    "TechnicalAssurances": [
      {
        "TechnicalAssuranceTypeID": "partition-id:reference-data--TechnicalAssuranceType:Approved:",
        "Reviewers": [
          {
            "RoleTypeID": "partition-id:reference-data--ContactRoleType:Reviewer:",
            "DataGovernanceRoleTypeID": "partition-id:reference-data--DataGovernanceRoleType:SME:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:SeismicInterpreter:",
            "OrganisationID": "partition-id:master-data--Organisation:OperatorAustralia:",
            "Name": "Chris Hough"
          }
        ],
        "AcceptableUsage": [
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:SeismicInterpretation:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:SeismicInterpreter:",
            "ValueChainStatusTypeID": "partition-id:reference-data--ValueChainStatusType:Exploration:"
          },
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:ReservoirModeling:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:ReservoirEngineer:",
            "ValueChainStatusTypeID": "partition-id:reference-data--ValueChainStatusType:Appraisal:"
          }
        ],
        "EffectiveDate": "2024-01-15",
        "Comment": "Approved for exploration drilling and reservoir modeling. Control points validated against well ties at Wheatstone-3, Angel-1, and Julimar-2."
      }
    ],
    "NameAliases": [
      {
        "AliasName": "Mungaroo-Seeds-v1",
        "AliasNameTypeID": "partition-id:reference-data--AliasNameType:ShortName:",
        "DefinitionOrganisationID": "partition-id:master-data--Organisation:OperatorAustralia:",
        "EffectiveDateTime": "2024-01-15T08:30:00.000Z"
      }
    ],
    "Name": "Top Mungaroo Formation - Seismic Horizon Control Points",
    "Description": "Sparse seed points for Top Mungaroo Formation horizon picked on NW Shelf 3D MAZ seismic survey (2023). Five control points selected at structural highs and well tie locations to guide automated horizon tracking. Validated against well markers at Wheatstone-3, Angel-1, and Julimar-2.",
    "CreationDateTime": "2024-01-15T08:30:00.000Z",
    "Tags": [
      "Top Mungaroo",
      "Jurassic",
      "Reservoir Horizon",
      "Well Tie Validated"
    ],
    "SpatialArea": {
      "SpatialLocationCoordinatesDate": "2024-01-15T08:30:00.000Z",
      "QuantitativeAccuracyBandID": "partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan10m:",
      "QualitativeSpatialAccuracyTypeID": "partition-id:reference-data--QualitativeSpatialAccuracyType:Surveyed:",
      "CoordinateQualityCheckPerformedBy": "Chris Hough - Senior Seismic Interpreter",
      "CoordinateQualityCheckDateTime": "2024-01-15T14:00:00.000Z",
      "CoordinateQualityCheckRemarks": [
        "Control points validated against survey bin grid",
        "Spatial extent covers main structural closure"
      ],
      "AsIngestedCoordinates": {
        "type": "AnyCrsFeatureCollection",
        "CoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:Projected:EPSG::28350:",
        "VerticalCoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5715:",
        "VerticalUnitID": "partition-id:reference-data--UnitOfMeasure:m:",
        "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"28350\"},\"name\":\"GDA94 / MGA zone 50\",\"type\":\"LBC\"}",
        "persistableReferenceVerticalCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"5715\"},\"name\":\"MSL depth\",\"type\":\"LBC\"}",
        "persistableReferenceUnitZ": "{\"scaleOffset\":{\"scale\":1.0,\"offset\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "description": "Spatial extent of horizon control points"
            },
            "geometry": {
              "type": "AnyCrsPolygon",
              "coordinates": [
                [
                  [
                    327450.0,
                    7819300.0
                  ],
                  [
                    332800.0,
                    7819300.0
                  ],
                  [
                    332800.0,
                    7814500.0
                  ],
                  [
                    327450.0,
                    7814500.0
                  ],
                  [
                    327450.0,
                    7819300.0
                  ]
                ]
              ]
            }
          }
        ],
        "bbox": [
          327450.0,
          7814500.0,
          332800.0,
          7819300.0
        ]
      },
      "Wgs84Coordinates": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "description": "Spatial extent of horizon control points (WGS84)"
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    115.234,
                    -20.485
                  ],
                  [
                    115.286,
                    -20.485
                  ],
                  [
                    115.286,
                    -20.528
                  ],
                  [
                    115.234,
                    -20.528
                  ],
                  [
                    115.234,
                    -20.485
                  ]
                ]
              ]
            }
          }
        ],
        "bbox": [
          115.234,
          -20.528,
          115.286,
          -20.485
        ]
      },
      "AppliedOperations": [
        "Coordinates ingested in GDA94 / MGA zone 50 (EPSG:28350)",
        "Transformation to WGS84 (EPSG:4326) applied for global compatibility"
      ],
      "SpatialParameterTypeID": "partition-id:reference-data--SpatialParameterType:Boundary:",
      "SpatialGeometryTypeID": "partition-id:reference-data--SpatialGeometryType:Polygon:"
    },
    "GeoContexts": [
      {
        "GeoPoliticalEntityID": "partition-id:master-data--GeoPoliticalEntity:Australia.WA:",
        "GeoTypeID": "partition-id:reference-data--GeoPoliticalEntityType:State:"
      },
      {
        "BasinID": "partition-id:master-data--Basin:CarnavonBasin:",
        "GeoTypeID": "partition-id:reference-data--BasinType:PassiveMargin:"
      },
      {
        "FieldID": "partition-id:master-data--Field:NWShelfProspect_Alpha:",
        "GeoTypeID": "Field"
      }
    ],
    "SubmitterName": "Chris Hough",
    "BusinessActivities": [
      "Exploration",
      "Appraisal"
    ],
    "AuthorIDs": [
      "Chris Hough",
      "Operator Australia Geoscience Team"
    ],
    "LineageAssertions": [
      {
        "ID": "partition-id:work-product-component--SeismicTraceData:NWShelf3D_MAZ_2023_PostStack:",
        "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:Direct:"
      },
      {
        "ID": "partition-id:master-data--Seismic3DInterpretationSet:NWShelf_Interpretation_2024:",
        "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:Direct:"
      }
    ],
    "InterpretationID": "partition-id:work-product-component--HorizonInterpretation:TopMungaroo:",
    "InterpretationName": "Top Mungaroo Seeds Points",
    "RepresentationRole": "partition-id:reference-data--RepresentationRole:Pick:",
    "RepresentationType": "partition-id:reference-data--RepresentationType:PointSet:",
    "SeismicTraceDataIDs": [
      "partition-id:work-product-component--SeismicTraceData:NWShelf3D_MAZ_2023_PostStack:"
    ],
    "BinGridID": "partition-id:work-product-component--SeismicBinGrid:NWShelf3D_MAZ_2023_BinGrid:",
    "SeismicLineGeometryIDs": [],
    "Seismic3DInterpretationSetID": "partition-id:master-data--Seismic3DInterpretationSet:NWShelf_Interpretation_2024:",
    "DomainTypeID": "partition-id:reference-data--DomainType:Depth:",
    "HorizontalCRSID": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::28350_EPSG::1150:",
    "VerticalDatum": {
      "VerticalMeasurement": 0.0,
      "VerticalMeasurementUnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
      "VerticalCRSID": "partition-id:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5715:",
      "VerticalMeasurementDescription": "Depth datum is Mean Sea Level (MSL depth EPSG:5715). All Z values in HorizonControlPoints are True Vertical Depth Sub-Sea (TVDSS)."
    },
    "WellboreMarkerSetIDs": [
      "partition-id:work-product-component--WellboreMarkerSet:Wheatstone-3-Markers-2023:",
      "partition-id:work-product-component--WellboreMarkerSet:Angel-1-Markers-2022:",
      "partition-id:work-product-component--WellboreMarkerSet:Julimar-2-Markers-2024:"
    ],
    "HorizonControlPoints": {
      "KeyColumns": [],
      "Columns": [
        {
          "ValueType": "number",
          "ValueCount": 5,
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:620cec71-5ce3-4ea5-9120-833756b427d7:",
            "Name": "x coordinate"
          },
          "ColumnName": "X"
        },
        {
          "ValueType": "number",
          "ValueCount": 5,
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:cfcfdb04-02c1-4262-b66b-459b0aab3e8e:",
            "Name": "y coordinate"
          },
          "ColumnName": "Y"
        },
        {
          "ValueType": "number",
          "ValueCount": 5,
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:8f4fbd79-87c9-4232-8934-f663e2fbf538:",
            "Name": "subsea vertical depth"
          },
          "ColumnName": "Z"
        }
      ],
      "ColumnSize": 5,
      "ColumnValues": [
        {
          "NumberColumn": [
            327450.0,
            329875.5,
            331200.0,
            330100.0,
            332800.0
          ]
        },
        {
          "NumberColumn": [
            7819300.0,
            7817850.0,
            7816500.0,
            7815200.0,
            7814500.0
          ]
        },
        {
          "NumberColumn": [
            3124.5,
            3087.2,
            3156.8,
            3201.0,
            3178.5
          ]
        }
      ],
      "ColumnBasedTableType": "partition-id:reference-data--ColumnBasedTableType:SpatialControlPoints:",
      "ColumnBasedTableTemplateID": "partition-id:master-data--ColumnBasedTableTemplate:SomeUniqueColumnBasedTableTemplateID:"
    },
    "ExtensionProperties": {}
  }
}
```

</details>

**Key Features:**

* 5 control points stored inline in `ColumnValues` array
* Depth domain (TVDSS) with MSL vertical datum (EPSG:5715)
* GDA94 MGA Zone 50 horizontal CRS (EPSG:28350)
* Links to 3 wellbore marker sets for validation
* Three coordinate columns: X (easting), Y (northing), Z (depth TVDSS)

### 2\. External File Example

Large dataset referencing external CSV file through the `File.TabularData` dataset type object.

<details>
<summary markdown="span">External File Reference, <code>work-product-component--HorizonControlPoints</code> example (focused on .data block)</summary>

<OsduImportJSON>[HorizonControlPoints External, Full record](./records/HorizonControlPoints.1.0.0--Gorgon-TopDupuy-SeedPoints-2024-ExternalDataset.json#only.data)</OsduImportJSON>

```json
{
  "data": {
    "ResourceHomeRegionID": "partition-id:reference-data--OSDURegion:AUWest:",
    "ResourceHostRegionIDs": [
      "partition-id:reference-data--OSDURegion:AUWest:"
    ],
    "ResourceCurationStatus": "namespace:reference-data--ResourceCurationStatus:Created:",
    "ResourceLifecycleStatus": "namespace:reference-data--ResourceLifecycleStatus:Loading:",
    "Source": "Seismic Interpretation Project - Gorgon 2024",
    "ExistenceKind": "partition-id:reference-data--ExistenceKind:Actual:",
    "Datasets": [
      "partition-id:dataset--File.TabularData:Gorgon-TopDupuy-ControlPoints-2024:"
    ],
    "IsExtendedLoad": false,
    "IsDiscoverable": true,
    "TechnicalAssurances": [
      {
        "TechnicalAssuranceTypeID": "partition-id:reference-data--TechnicalAssuranceType:Approved:",
        "Reviewers": [
          {
            "RoleTypeID": "partition-id:reference-data--ContactRoleType:Reviewer:",
            "DataGovernanceRoleTypeID": "partition-id:reference-data--DataGovernanceRoleType:SME:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:SeismicInterpreter:",
            "OrganisationID": "partition-id:master-data--Organisation:OperatorAustralia:",
            "Name": "Chris Hough"
          }
        ],
        "AcceptableUsage": [
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:SeismicInterpretation:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:SeismicInterpreter:",
            "ValueChainStatusTypeID": "partition-id:reference-data--ValueChainStatusType:FieldDevelopment:"
          },
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:ReservoirModeling:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:ReservoirEngineer:",
            "ValueChainStatusTypeID": "partition-id:reference-data--ValueChainStatusType:Production:"
          }
        ],
        "EffectiveDate": "2024-02-28",
        "Comment": "Approved for field development planning and reservoir simulation. Control points validated against well ties at Gorgon-2, Gorgon-5, and Chrysaor-1. High-confidence picks exported from interpretation project."
      }
    ],
    "NameAliases": [
      {
        "AliasName": "Dupuy-Seeds-2024Q1",
        "AliasNameTypeID": "partition-id:reference-data--AliasNameType:ShortName:",
        "DefinitionOrganisationID": "partition-id:master-data--Organisation:OperatorAustralia:",
        "EffectiveDateTime": "2024-02-28T09:15:00.000Z"
      }
    ],
    "Name": "Top Dupuy Formation - Seismic Horizon Control Points",
    "Description": "Sparse seed points for Top Dupuy Formation horizon picked on Gorgon 3D reprocessed seismic survey (2024). Control points selected at structural features and validated well tie locations, stored in external CSV file. Validated against well markers at Gorgon-2, Gorgon-5, and Chrysaor-1.",
    "CreationDateTime": "2024-02-28T09:15:00.000Z",
    "Tags": [
      "Top Dupuy",
      "Cretaceous",
      "Regional Seal",
      "Well Tie Validated",
      "External File"
    ],
    "SpatialArea": {
      "SpatialLocationCoordinatesDate": "2024-02-28T09:15:00.000Z",
      "QuantitativeAccuracyBandID": "partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan10m:",
      "QualitativeSpatialAccuracyTypeID": "partition-id:reference-data--QualitativeSpatialAccuracyType:Surveyed:",
      "CoordinateQualityCheckPerformedBy": "Chris Hough - Senior Seismic Interpreter",
      "CoordinateQualityCheckDateTime": "2024-02-28T15:00:00.000Z",
      "CoordinateQualityCheckRemarks": [
        "Control points validated against survey bin grid",
        "Spatial extent covers Gorgon gas field development area"
      ],
      "AsIngestedCoordinates": {
        "type": "AnyCrsFeatureCollection",
        "CoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:Projected:EPSG::28350:",
        "VerticalCoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5715:",
        "VerticalUnitID": "partition-id:reference-data--UnitOfMeasure:m:",
        "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"28350\"},\"name\":\"GDA94 / MGA zone 50\",\"type\":\"LBC\"}",
        "persistableReferenceVerticalCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"5715\"},\"name\":\"MSL depth\",\"type\":\"LBC\"}",
        "persistableReferenceUnitZ": "{\"scaleOffset\":{\"scale\":1.0,\"offset\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "description": "Spatial extent of horizon control points"
            },
            "geometry": {
              "type": "AnyCrsPolygon",
              "coordinates": [
                [
                  [
                    315200.0,
                    7785400.0
                  ],
                  [
                    322500.0,
                    7785400.0
                  ],
                  [
                    322500.0,
                    7778600.0
                  ],
                  [
                    315200.0,
                    7778600.0
                  ],
                  [
                    315200.0,
                    7785400.0
                  ]
                ]
              ]
            }
          }
        ],
        "bbox": [
          315200.0,
          7778600.0,
          322500.0,
          7785400.0
        ]
      },
      "Wgs84Coordinates": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "description": "Spatial extent of horizon control points (WGS84)"
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    115.112,
                    -20.546
                  ],
                  [
                    115.178,
                    -20.546
                  ],
                  [
                    115.178,
                    -20.607
                  ],
                  [
                    115.112,
                    -20.607
                  ],
                  [
                    115.112,
                    -20.546
                  ]
                ]
              ]
            }
          }
        ],
        "bbox": [
          115.112,
          -20.607,
          115.178,
          -20.546
        ]
      },
      "AppliedOperations": [
        "Coordinates ingested in GDA94 / MGA zone 50 (EPSG:28350)",
        "Transformation to WGS84 (EPSG:4326) applied for global compatibility"
      ],
      "SpatialParameterTypeID": "partition-id:reference-data--SpatialParameterType:Boundary:",
      "SpatialGeometryTypeID": "partition-id:reference-data--SpatialGeometryType:Polygon:"
    },
    "GeoContexts": [
      {
        "GeoPoliticalEntityID": "partition-id:master-data--GeoPoliticalEntity:Australia.WA:",
        "GeoTypeID": "partition-id:reference-data--GeoPoliticalEntityType:State:"
      },
      {
        "BasinID": "partition-id:master-data--Basin:CarnavonBasin:",
        "GeoTypeID": "partition-id:reference-data--BasinType:PassiveMargin:"
      },
      {
        "FieldID": "partition-id:master-data--Field:GorgonGasField:",
        "GeoTypeID": "Field"
      }
    ],
    "SubmitterName": "Chris Hough",
    "BusinessActivities": [
      "Field Development",
      "Production"
    ],
    "AuthorIDs": [
      "Chris Hough",
      "Operator Australia Geoscience Team"
    ],
    "LineageAssertions": [
      {
        "ID": "partition-id:work-product-component--SeismicTraceData:Gorgon3D_Reprocessed_2024_PSTM:",
        "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:Direct:"
      },
      {
        "ID": "partition-id:master-data--Seismic3DInterpretationSet:Gorgon_Interpretation_2024:",
        "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:Direct:"
      }
    ],
    "InterpretationID": "partition-id:work-product-component--HorizonInterpretation:TopDupuy:",
    "InterpretationName": "Top Dupuy Seeds Points",
    "RepresentationRole": "partition-id:reference-data--RepresentationRole:Pick:",
    "RepresentationType": "partition-id:reference-data--RepresentationType:PointSet:",
    "SeismicTraceDataIDs": [
      "partition-id:work-product-component--SeismicTraceData:Gorgon3D_Reprocessed_2024_PSTM:"
    ],
    "BinGridID": "partition-id:work-product-component--SeismicBinGrid:Gorgon3D_2024_BinGrid:",
    "Seismic3DInterpretationSetID": "partition-id:master-data--Seismic3DInterpretationSet:Gorgon_Interpretation_2024:",
    "DomainTypeID": "partition-id:reference-data--DomainType:Depth:",
    "HorizontalCRSID": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::28350_EPSG::1150:",
    "VerticalDatum": {
      "VerticalMeasurement": 0.0,
      "VerticalMeasurementUnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
      "VerticalCRSID": "partition-id:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5715:",
      "VerticalMeasurementDescription": "Depth datum is Mean Sea Level (MSL depth EPSG:5715). All Z values in external tabular file are True Vertical Depth Sub-Sea (TVDSS)."
    },
    "WellboreMarkerSetIDs": [
      "partition-id:work-product-component--WellboreMarkerSet:Gorgon-2-Markers-2022:",
      "partition-id:work-product-component--WellboreMarkerSet:Gorgon-5-Markers-2023:",
      "partition-id:work-product-component--WellboreMarkerSet:Chrysaor-1-Markers-2021:"
    ],
    "HorizonControlPoints": {
      "KeyColumns": [],
      "Columns": [
        {
          "ValueType": "number",
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:620cec71-5ce3-4ea5-9120-833756b427d7:",
            "Name": "x coordinate"
          },
          "ColumnName": "X"
        },
        {
          "ValueType": "number",
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:cfcfdb04-02c1-4262-b66b-459b0aab3e8e:",
            "Name": "y coordinate"
          },
          "ColumnName": "Y"
        },
        {
          "ValueType": "number",
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:8f4fbd79-87c9-4232-8934-f663e2fbf538:",
            "Name": "subsea vertical depth"
          },
          "ColumnName": "Z"
        }
      ],
      "ColumnBasedTableType": "partition-id:reference-data--ColumnBasedTableType:SpatialControlPoints:"
    },
    "ExtensionProperties": {}
  }
}
```

</details>

**Key Features:**

* References external CSV through Abstract WPCGrouptype `Datasets` array
* Column definitions match File.TabularData structure
* No inline `ColumnValues` (data stored externally)
* 30 example control points in external CSV file

### 2.1 External Tabular Data File

The `File.TabularData` dataset record provides metadata for the external CSV file.

<details>
<summary markdown="span">External CSV Metadata, <code>dataset--File.TabularData</code> example (focused on .data block)</summary>

<OsduImportJSON>[File.TabularData, Full record](./dataset/TabularData.1.0.0--Gorgon-TopDupuy-ControlPoints-2024.json#only.data)</OsduImportJSON>

```json
{
  "data": {
    "ResourceHomeRegionID": "partition-id:reference-data--OSDURegion:AUWest:",
    "ResourceHostRegionIDs": [
      "partition-id:reference-data--OSDURegion:AUWest:"
    ],
    "ResourceCurationStatus": "namespace:reference-data--ResourceCurationStatus:Created:",
    "ResourceLifecycleStatus": "namespace:reference-data--ResourceLifecycleStatus:Loading:",
    "Source": "Seismic Interpretation Project - Gorgon 2024",
    "ExistenceKind": "partition-id:reference-data--ExistenceKind:Actual:",
    "Name": "Top Dupuy Formation - Control Points CSV",
    "Description": "CSV file containing sparse seed point coordinates (X, Y, Z) for Top Dupuy Formation horizon. Exported from Petrel interpretation project. Columns: X (Easting in meters, GDA94 MGA Zone 50), Y (Northing in meters), Z (TVDSS in meters below MSL). Total 30 control points covering Gorgon field development area.",
    "TotalSize": "875",
    "EncodingFormatTypeID": "partition-id:reference-data--EncodingFormatType:text%2Fcsv:",
    "SchemaFormatTypeID": "partition-id:reference-data--SchemaFormatType:CSV:",
    "Endian": "LITTLE",
    "DatasetProperties": {
      "FileSourceInfo": {
        "FileSource": "s3://partition-id-seismic-data/interpretation/gorgon-2024/horizons/TopDupuy_ControlPoints.csv",
        "PreloadFilePath": "s3://partition-id-staging/seismic-interpretation/gorgon/TopDupuy_seeds_2024-02-28.csv",
        "PreloadFileCreateUser": "chris.hough@operator.com.au",
        "PreloadFileCreateDate": "2024-02-28T09:15:00.000Z",
        "PreloadFileModifyUser": "chris.hough@operator.com.au",
        "PreloadFileModifyDate": "2024-02-28T16:30:00.000Z",
        "Name": "TopDupuy_ControlPoints.csv",
        "FileSize": "875",
        "EncodingFormatTypeID": "partition-id:reference-data--EncodingFormatType:text%2Fcsv:",
        "Checksum": "a7f8c9d4e3b2a1f6d5c4b3a2e1f0d9c8",
        "ChecksumAlgorithm": "SHA-256"
      }
    },
    "Checksum": "a7f8c9d4e3b2a1f6d5c4b3a2e1f0d9c8",
    "ColumnBasedTableTypeID": "partition-id:reference-data--ColumnBasedTableType:SpatialControlPoints:",
    "KeyColumns": [],
    "Columns": [
      {
        "ValueType": "number",
        "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
        "PropertyType": {
          "PropertyTypeID": "partition-id:reference-data--PropertyType:620cec71-5ce3-4ea5-9120-833756b427d7:",
          "Name": "x coordinate"
        },
        "ColumnName": "X"
      },
      {
        "ValueType": "number",
        "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
        "PropertyType": {
          "PropertyTypeID": "partition-id:reference-data--PropertyType:cfcfdb04-02c1-4262-b66b-459b0aab3e8e:",
          "Name": "y coordinate"
        },
        "ColumnName": "Y"
      },
      {
        "ValueType": "number",
        "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
        "PropertyType": {
          "PropertyTypeID": "partition-id:reference-data--PropertyType:8f4fbd79-87c9-4232-8934-f663e2fbf538:",
          "Name": "subsea vertical depth"
        },
        "ColumnName": "Z"
      }
    ],
    "ColumnNamesInFirstRow": true,
    "ColumnSeparator": ",",
    "NumberOfRowsToSkip": 0,
    "CommentIndicator": "#",
    "ExtensionProperties": {}
  }
}
```

</details>

**Column Definition Patterns:**

The File.TabularData schema supports two approaches for defining column structure:

1. **Inline definition** (shown in this example): Column metadata defined directly in `Columns` array within the File.TabularData record. Provides complete self-containment and clarity for worked examples.
2. **Template delegation**: Reference a reusable `ColumnBasedTableTemplateID` (master-data) for standardized column patterns shared across multiple datasets. Reduces duplication and ensures consistency for organizations with established data exchange formats.

This example uses inline definition for portability and self-documentation. Production implementations may prefer template delegation when the same column structure is used across many datasets.

**Key Features:**

* CSV encoding with column separator `,`
* Header row present (`ColumnNamesInFirstRow: true`)
* Column definitions match parent SeismicHorizonControlPoints
* 30 data rows with 3 coordinate columns

### 2.2 CSV Content Sample

The actual tabular data file referenced by `File.TabularData` dataset schema.

<details>

<summary markdown="span">CSV Data File, <code>TopDupuy\_ControlPoints.csv</code> sample (first 10 rows)</summary>

[TopDupuy\_ControlPoints.csv, Full file](./content/TopDupuy_ControlPoints.csv)

```csv
X,Y,Z
318520.5,7815025.3,2847.2
319875.2,7816420.8,2839.5
321450.8,7817950.2,2855.8
323100.5,7819500.7,2868.3
324825.3,7821075.5,2881.9
326500.8,7822650.2,2895.4
328225.7,7824300.8,2909.8
329950.5,7825975.3,2924.5
331700.2,7827625.8,2938.7
333425.8,7829300.5,2952.3
```

**Full CSV file:** [TopDupuy\_ControlPoints.csv](./content/TopDupuy_ControlPoints.csv)

</details>

**Full CSV file:** [TopDupuy\_ControlPoints.csv](./content/TopDupuy_ControlPoints.csv)

**Key Features:**

* Standard CSV format with header row
* Three columns: X (Easting), Y (Northing), Z (Depth TVDSS)
* Coordinates in meters (MGA Zone 50, EPSG:32750)
* Depths in meters TVD subsea (MSL datum, EPSG:5715)

### 3\. ML Training Dataset Example

Enhanced control points with ML-specific metadata for supervised learning workflows. This example demonstrates how to extend the basic X, Y, Z coordinate structure with additional columns that support machine learning model training, validation, and quality assessment.

<details>
<summary markdown="span">Machine Learning, <code>work-product-component--HorizonControlPoints</code> example (focused on .data block)</summary>

<OsduImportJSON>[HorizonControlPoints External, Full record](./records/HorizonControlPoints.1.0.0--Scarborough-TopGearle-MLTraining-2024.json#only.data)</OsduImportJSON>

```json
{
  "data": {
    "ResourceHomeRegionID": "partition-id:reference-data--OSDURegion:AUWest:",
    "ResourceHostRegionIDs": [
      "partition-id:reference-data--OSDURegion:AUWest:"
    ],
    "ResourceCurationStatus": "namespace:reference-data--ResourceCurationStatus:Created:",
    "ResourceLifecycleStatus": "namespace:reference-data--ResourceLifecycleStatus:Loading:",
    "Source": "Seismic Interpretation Project - Scarborough ML Training Dataset 2024",
    "ExistenceKind": "partition-id:reference-data--ExistenceKind:Actual:",
    "Datasets": [],
    "IsExtendedLoad": false,
    "IsDiscoverable": true,
    "TechnicalAssurances": [
      {
        "TechnicalAssuranceTypeID": "partition-id:reference-data--TechnicalAssuranceType:Approved:",
        "Reviewers": [
          {
            "RoleTypeID": "partition-id:reference-data--ContactRoleType:Reviewer:",
            "DataGovernanceRoleTypeID": "partition-id:reference-data--DataGovernanceRoleType:SME:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:DataScientist:",
            "OrganisationID": "partition-id:master-data--Organisation:OperatorAustralia:",
            "Name": "Chris Hough"
          }
        ],
        "AcceptableUsage": [
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:MachineLearningTraining:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:DataScientist:",
            "ValueChainStatusTypeID": "partition-id:reference-data--ValueChainStatusType:Exploration:"
          },
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:SeismicInterpretation:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:SeismicInterpreter:",
            "ValueChainStatusTypeID": "partition-id:reference-data--ValueChainStatusType:Appraisal:"
          }
        ],
        "EffectiveDate": "2024-03-02",
        "Comment": "Approved for ML model training and validation. Curated training dataset with quality-controlled interpreter picks, confidence scores, and seismic attributes. Training/validation split: 70/30. Validated against well ties at Scarborough-2, Scarborough-4, and Jupiter-1."
      }
    ],
    "NameAliases": [
      {
        "AliasName": "Gearle-ML-Training-v1",
        "AliasNameTypeID": "partition-id:reference-data--AliasNameType:ShortName:",
        "DefinitionOrganisationID": "partition-id:master-data--Organisation:OperatorAustralia:",
        "EffectiveDateTime": "2024-03-02T10:30:00.000Z"
      }
    ],
    "Name": "Top Gearle Formation - ML Training Control Points",
    "Description": "Curated control points for Top Gearle Formation horizon, prepared for machine learning model training. Dataset includes spatial coordinates (X, Y, Z), interpreter confidence scores, pick quality labels, training/validation split flags, and seismic amplitude values at pick locations. Ten high-quality picks selected from multi-interpreter consensus across structural features and well tie locations. Suitable for supervised learning approaches to automated horizon tracking and prediction.",
    "CreationDateTime": "2024-03-02T10:30:00.000Z",
    "Tags": [
      "Top Gearle",
      "Triassic",
      "Seal Horizon",
      "ML Training Dataset",
      "Quality Controlled"
    ],
    "SpatialArea": {
      "SpatialLocationCoordinatesDate": "2024-03-02T10:30:00.000Z",
      "QuantitativeAccuracyBandID": "partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan10m:",
      "QualitativeSpatialAccuracyTypeID": "partition-id:reference-data--QualitativeSpatialAccuracyType:Surveyed:",
      "CoordinateQualityCheckPerformedBy": "Chris Hough - Senior Seismic Interpreter",
      "CoordinateQualityCheckDateTime": "2024-03-02T16:00:00.000Z",
      "CoordinateQualityCheckRemarks": [
        "Control points validated against survey bin grid",
        "Spatial extent covers Scarborough gas field development area",
        "ML training dataset quality-controlled for consistency"
      ],
      "AsIngestedCoordinates": {
        "type": "AnyCrsFeatureCollection",
        "CoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:Projected:EPSG::28350:",
        "VerticalCoordinateReferenceSystemID": "partition-id:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5715:",
        "VerticalUnitID": "partition-id:reference-data--UnitOfMeasure:m:",
        "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"28350\"},\"name\":\"GDA94 / MGA zone 50\",\"type\":\"LBC\"}",
        "persistableReferenceVerticalCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"5715\"},\"name\":\"MSL depth\",\"type\":\"LBC\"}",
        "persistableReferenceUnitZ": "{\"scaleOffset\":{\"scale\":1.0,\"offset\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {
              "description": "Spatial extent of ML training control points"
            },
            "geometry": {
              "type": "AnyCrsPolygon",
              "coordinates": [
                [
                  [
                    308500.0,
                    7762200.0
                  ],
                  [
                    315800.0,
                    7762200.0
                  ],
                  [
                    315800.0,
                    7756400.0
                  ],
                  [
                    308500.0,
                    7756400.0
                  ],
                  [
                    308500.0,
                    7762200.0
                  ]
                ]
              ]
            }
          }
        ],
        "bbox": [
          308500.0,
          7756400.0,
          315800.0,
          7762200.0
        ]
      },
      "Wgs84Coordinates": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "description": "Spatial extent of ML training control points (WGS84)"
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    115.042,
                    -20.598
                  ],
                  [
                    115.112,
                    -20.598
                  ],
                  [
                    115.112,
                    -20.65
                  ],
                  [
                    115.042,
                    -20.65
                  ],
                  [
                    115.042,
                    -20.598
                  ]
                ]
              ]
            }
          }
        ],
        "bbox": [
          115.042,
          -20.65,
          115.112,
          -20.598
        ]
      },
      "AppliedOperations": [
        "Coordinates ingested in GDA94 / MGA zone 50 (EPSG:28350)",
        "Transformation to WGS84 (EPSG:4326) applied for global compatibility"
      ],
      "SpatialParameterTypeID": "partition-id:reference-data--SpatialParameterType:Boundary:",
      "SpatialGeometryTypeID": "partition-id:reference-data--SpatialGeometryType:Polygon:"
    },
    "GeoContexts": [
      {
        "GeoPoliticalEntityID": "partition-id:master-data--GeoPoliticalEntity:Australia.WA:",
        "GeoTypeID": "partition-id:reference-data--GeoPoliticalEntityType:State:"
      },
      {
        "BasinID": "partition-id:master-data--Basin:CarnavonBasin:",
        "GeoTypeID": "partition-id:reference-data--BasinType:PassiveMargin:"
      },
      {
        "FieldID": "partition-id:master-data--Field:ScarboroughGasField:",
        "GeoTypeID": "Field"
      }
    ],
    "SubmitterName": "Chris Hough",
    "BusinessActivities": [
      "Exploration",
      "Machine Learning Development"
    ],
    "AuthorIDs": [
      "Chris Hough",
      "Operator Australia Geoscience Team",
      "Operator Australia Data Science Team"
    ],
    "LineageAssertions": [
      {
        "ID": "partition-id:work-product-component--SeismicTraceData:Scarborough3D_2024_FullStack:",
        "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:Direct:"
      },
      {
        "ID": "partition-id:master-data--Seismic3DInterpretationSet:Scarborough_Interpretation_2024:",
        "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:Direct:"
      }
    ],
    "InterpretationID": "partition-id:work-product-component--HorizonInterpretation:TopGearle:",
    "InterpretationName": "Top Gearle Seeds Points",
    "RepresentationRole": "partition-id:reference-data--RepresentationRole:Pick:",
    "RepresentationType": "partition-id:reference-data--RepresentationType:PointSet:",
    "SeismicTraceDataIDs": [
      "partition-id:work-product-component--SeismicTraceData:Scarborough3D_2024_FullStack:"
    ],
    "BinGridID": "partition-id:work-product-component--SeismicBinGrid:Scarborough3D_2024_BinGrid:",
    "Seismic3DInterpretationSetID": "partition-id:master-data--Seismic3DInterpretationSet:Scarborough_Interpretation_2024:",
    "DomainTypeID": "partition-id:reference-data--DomainType:Depth:",
    "HorizontalCRSID": "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::28350_EPSG::1150:",
    "VerticalDatum": {
      "VerticalMeasurement": 0.0,
      "VerticalMeasurementUnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
      "VerticalCRSID": "partition-id:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5715:",
      "VerticalMeasurementDescription": "Depth datum is Mean Sea Level (MSL depth EPSG:5715). All Z values in HorizonControlPoints are True Vertical Depth Sub-Sea (TVDSS)."
    },
    "WellboreMarkerSetIDs": [
      "partition-id:work-product-component--WellboreMarkerSet:Scarborough-2-Markers-2023:",
      "partition-id:work-product-component--WellboreMarkerSet:Scarborough-4-Markers-2024:",
      "partition-id:work-product-component--WellboreMarkerSet:Jupiter-1-Markers-2022:"
    ],
    "HorizonControlPoints": {
      "KeyColumns": [],
      "Columns": [
        {
          "ValueType": "number",
          "ValueCount": 10,
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:620cec71-5ce3-4ea5-9120-833756b427d7:",
            "Name": "x coordinate"
          },
          "ColumnName": "X"
        },
        {
          "ValueType": "number",
          "ValueCount": 10,
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:cfcfdb04-02c1-4262-b66b-459b0aab3e8e:",
            "Name": "y coordinate"
          },
          "ColumnName": "Y"
        },
        {
          "ValueType": "number",
          "ValueCount": 10,
          "UnitOfMeasureID": "partition-id:reference-data--UnitOfMeasure:m:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:8f4fbd79-87c9-4232-8934-f663e2fbf538:",
            "Name": "subsea vertical depth"
          },
          "ColumnName": "Z"
        },
        {
          "ValueType": "number",
          "ValueCount": 10,
          "ColumnName": "Confidence",
          "UnitQuantityID": "partition-id:reference-data--UnitQuantity:dimensionless:"
        },
        {
          "ValueType": "string",
          "ValueCount": 10,
          "ColumnName": "Quality"
        },
        {
          "ValueType": "boolean",
          "ValueCount": 10,
          "ColumnName": "IsTraining"
        },
        {
          "ValueType": "number",
          "ValueCount": 10,
          "UnitQuantityID": "partition-id:reference-data--UnitQuantity:dimensionless:",
          "PropertyType": {
            "PropertyTypeID": "partition-id:reference-data--PropertyType:43d4382c-4414-4ff1-b68e-754ac5904ca7:",
            "Name": "amplitude"
          },
          "ColumnName": "Amplitude"
        },
        {
          "ValueType": "string",
          "ValueCount": 10,
          "ColumnName": "InterpreterID"
        }
      ],
      "ColumnSize": 10,
      "ColumnValues": [
        {
          "NumberColumn": [
            308500.0,
            310250.0,
            311800.0,
            313400.0,
            309650.0,
            312100.0,
            314500.0,
            315800.0,
            311200.0,
            313900.0
          ]
        },
        {
          "NumberColumn": [
            7762200.0,
            7761400.0,
            7760100.0,
            7758800.0,
            7759500.0,
            7757600.0,
            7759200.0,
            7760800.0,
            7756400.0,
            7761900.0
          ]
        },
        {
          "NumberColumn": [
            2456.8,
            2423.5,
            2478.2,
            2501.6,
            2467.3,
            2512.9,
            2489.4,
            2445.1,
            2534.7,
            2461.2
          ]
        },
        {
          "NumberColumn": [
            0.95,
            0.88,
            0.92,
            0.78,
            0.91,
            0.85,
            0.73,
            0.96,
            0.82,
            0.94
          ]
        },
        {
          "StringColumn": [
            "high",
            "high",
            "high",
            "medium",
            "high",
            "high",
            "medium",
            "high",
            "medium",
            "high"
          ]
        },
        {
          "BooleanColumn": [
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "NumberColumn": [
            -1247.5,
            -1189.2,
            -1305.8,
            -1156.4,
            -1278.9,
            -1198.6,
            -1145.3,
            -1312.1,
            -1167.8,
            -1289.4
          ]
        },
        {
          "StringColumn": [
            "CHough",
            "CHough",
            "CHough",
            "SMitchell",
            "CHough",
            "CHough",
            "SMitchell",
            "CHough",
            "SMitchell",
            "CHough"
          ]
        }
      ],
      "ColumnBasedTableType": "partition-id:reference-data--ColumnBasedTableType:SpatialControlPoints:"
    },
    "ExtensionProperties": {}
  }
}
```

</details>

**ML-Specific Columns (beyond standard coordinates):**

* **Confidence** (0.0-1.0 dimensionless): Interpreter certainty - enables weighted loss functions during training
* **Quality** (high/medium/low string): Qualitative assessment - supports data filtering and stratified sampling
* **IsTraining** (boolean): Training/validation split flag - clearly separates datasets for model evaluation
* **Amplitude** (dimensionless): Seismic attribute at pick location - provides feature enrichment for prediction models
* **InterpreterID** (string): Pick provenance - tracks multi-interpreter consensus and identifies systematic biases

---

## Data Model Structure

### Essential Properties

The schema uses `AbstractColumnBasedTable` and `AbstractReferencePropertyType` to store and describe control point data with rich semantic metadata. Each column is defined through PropertyType (semantic meaning), UnitQuantity (measurement type), UnitOfMeasure (specific units), and optional Facets (additional context like fluid type or phase). This powerful combination enables:

* **Semantic clarity**: PropertyType explicitly defines what each column represents (e.g., "x coordinate" vs "subsea vertical depth")
* **Unit flexibility**: Same PropertyType can use different units (meters, feet) via UnitOfMeasure
* **Contextual metadata**: Facets provide domain-specific qualifiers without creating duplicate PropertyTypes
* **Interoperability**: Standardized PropertyType IDs enable interoperability of data

**Suggested Metadata:**

* `SeismicTraceDataIDs` - Link to seismic trace data the control points are based on
* `BinGridID` or `SeismicLineGeometryIDs` - The geometry of the seismic survey
* `DomainTypeID` - Time or Depth domain specification
* `VerticalDatum` - Vertical reference (TVDSS, TVDKB, MSL, etc.)
* `CRSID` - Horizontal coordinate reference system (if coordinates are outside the seismic geometry)

**Representation Properties** (from AbstractRepresentation):

* `InterpretationID` - Link to the HorizonInterpretation these control points represent
* `RepresentationRole` - Typically "Pick" for manual interpreter picks
* `RepresentationType` - Typically "PointSet" for sparse spatial coordinates

**Column Structure:**
Three coordinate columns for **CRS-based points** following PropertyType standard definitions:

* **X Column**: `x coordinate` (PropertyTypeID: 620cec71-5ce3-4ea5-9120-833756b427d7)
* **Y Column**: `y coordinate` (PropertyTypeID: cfcfdb04-02c1-4262-b66b-459b0aab3e8e)
* **Z Column**: Domain-specific (e.g., `subsea vertical depth` for depth domain: PropertyTypeID: 8f4fbd79-87c9-4232-8934-f663e2fbf538)

**OR** three coordinate columns for **grid-based points** (bin grid reference):

* **Inline Column**: `inline` (PropertyTypeID: \[NEED TO FIND])
* **Crossline Column**: `crossline` (PropertyTypeID: \[NEED TO FIND])
* **Z Column**: Domain-specific (e.g., `subsea vertical depth` or `two way time`)

---

## Implementation \& Usage Guidance

### Reference PropertyTypes for X, Y, Z Control Points

**Example PropertyTypes for X, Y, Z Control Points:**

* **X:** `x coordinate` (PropertyTypeID: 620cec71-5ce3-4ea5-9120-833756b427d7)
* **Y:** `y coordinate` (PropertyTypeID: cfcfdb04-02c1-4262-b66b-459b0aab3e8e)
* **Z:** Domain-specific selection based on interpretation domain (see below)

### Domain-Specific Z Column Selection

The Z column PropertyType must align with the `DomainTypeID` specified in the schema:

**Depth Domain:**

* **PropertyType:** `subsea vertical depth` (PropertyTypeID: 8f4fbd79-87c9-4232-8934-f663e2fbf538)
* **Explicitly conveys:** TVDSS measurement, MSL datum, positive-down convention
* **Use when:** `DomainTypeID` is `partition-id:reference-data--DomainType:Depth:`

**Time Domain:**

* **PropertyType:** `two way time` (PropertyTypeID: 4e6ed722-eb26-4175-b743-c15b80e92b46)
* **Definition:** The time required for an acoustic wave to travel from its source to a reflector and return to a receiver
* **Unit Quantity:** time (typically milliseconds)
* **Use when:** `DomainTypeID` is `partition-id:reference-data--DomainType:Time:`

**Generic Z Coordinate:**

* **PropertyType:** `z coordinate` (PropertyTypeID: 0bb1762f-e8d7-42e7-afb1-d24297bf4171)
* **Use when:** Domain is ambiguous or mixed-domain datasets

### ColumnBasedTableType Usage

**SpatialControlPoints Reference Value:**

* Defines standard X, Y column structure
* Leaves Z column flexible for domain-specific implementation
* Code: `SpatialControlPoints`
* Authority: OSDU Data Definitions subcommittee

**When to Override:**

* Instance-specific Z column property (depth vs time)
* Additional columns beyond X, Y, Z (confidence, quality, marker ID)
* Custom column naming conventions

### Data Volume Considerations

**Inline Storage:**

* Use for small datasets where portability and self-containment are priorities
* Practical considerations: API payload limits, application memory, etc
* General guidance: inline storage works well for dozens of points; external storage scales to millions
* Choose based on your specific workflow requirements

**External File Storage:**

* Use for large datasets where performance and scalability matter
* Enables version control of interpretation iterations separately from metadata
* Reduces JSON payload size for catalog operations
* Supports parallel processing and streaming access patterns

### Coordinate System Consistency

**Critical Validation Rules:**

1. **CRSID** must match actual coordinate values in X, Y columns
2. **VerticalCoordinateReferenceSystemID** must match Z column datum
3. **DomainTypeID** must align with Z PropertyType selection
4. All control points must use same CRS (no mixed-datum points)

### Machine Learning and AI-Assisted Interpretation

Seismic horizon control points serve as **training data** for machine learning models used in automated seismic interpretation workflows.

**ML/AI Use Cases:**

1. **Supervised Learning:** Control points labeled by expert interpreters train neural networks to recognize similar seismic facies patterns across larger survey areas
2. **Transfer Learning:** Seed points from mature fields fine-tune pre-trained models for exploration prospects with limited well control
3. **Quality Control:** Human-validated control points provide ground truth for assessing automated interpretation accuracy
4. **Active Learning:** Models identify uncertain regions where additional human control points provide maximum value

**Typical ML Workflow:**

```
Expert Picks Control Points → Label Training Data → Train/Fine-Tune Model →
Automated Horizon Tracking → QC/Validation → Additional Control Points (if needed)
```

**Suggested Data Requirements for ML training:**

* **Minimum dataset:** 50-100 control points per horizon for basic supervised learning
* **Optimal dataset:** 500+ control points spanning geological variability and well-tie locations
* **Feature enrichment:** Control points often augmented with seismic attributes (amplitude, coherence, curvature) extracted at pick locations
* **Uncertainty quantification:** Confidence scores at control points improve model training through weighted loss functions
**See** [**ML Training Dataset Example**](./records/HorizonControlPoints.1.0.0--Scarborough-TopGearle-MLTraining-2024.json) **in the Examples section above for a complete worked example demonstrating these ML-specific columns.**

### Integration with OSDU Data Platform and Patterns

The standardized `SeismicHorizonControlPoints` schema enables:

* Consistent training data format across ML platforms
* Lineage tracking from training data to model predictions
* Reproducibility through versioned control point datasets
* Cross-project model transfer using standardized coordinate systems

---

## Seismic Surface Generation (Gridding Workflow)

**Overview**

The introduction of the SeismicSurfaceGeneration Activity formalises surface generation as a first-class, traceable process within the OSDU Data Platform.

Seismic horizon control points and propagated horizon picks represent discrete interpretation observations. To convert these into a usable structural surface, a continuous gridded representation must be generated.

In the OSDU data model, this transformation is captured explicitly through a

SeismicSurfaceGeneration Activity, which formalises the interpolation (gridding) step as part of the data lineage.

This approach separates:

•	Input representations (control points, propagated picks),

•	Processing logic (gridding algorithm and parameters),

•	Output representations (gridded seismic horizon surface).

This enables reproducibility, auditability, and interoperability across applications.

---

**Workflow Position**

The following workflow extends the interpretation lifecycle described earlier:

HorizonControlPoints (seed picks)

↓

SeismicHorizon (propagated picks / dense interpretation)

↓

SeismicSurfaceGeneration (Activity)

↓

SeismicHorizon (Grid2dRepresentation – continuous surface)

↓

HorizonInterpretation / LocalBoundaryFeature / StructureMap

\---

**Role of SeismicSurfaceGeneration Activity**

The SeismicSurfaceGeneration Activity captures the parameters used to generate a gridded surface from discrete input data.

**Key Responsibilities**

•	Defines the interpolation method used

•	Captures the grid geometry (cell size and CRS)

•	Records constraints applied during gridding

•	Provides lineage tracking linking input data to output surface

---

**Gridding Algorithm Selection**

The interpolation method is specified using:

GriddingAlgorithmID → reference-data--SeismicSurfaceGriddingAlgorithm



This references a controlled list of mathematical algorithms, ensuring consistent interpretation across systems.

---

**Typical Algorithms**

•	MinimumCurvature

•	Kriging (Ordinary / Universal)

•	InverseDistanceWeighting

•	NaturalNeighbour

•	DiscreteSmoothInterpolation

•	MultiResolutionBSplineApproximation

This design supports:

•	Standardisation across platforms

•	Flexibility through extensible reference values

•	Clear documentation of how surfaces were generated

---

**Example Activity Record**

The following example illustrates a SeismicSurfaceGeneration Activity used to generate a gridded surface for the Top Mungaroo horizon.

{

&#x20; "kind": "osdu:wks:activity--SeismicSurfaceGeneration:1.0.0",

&#x20; "id": "partition-id:activity--SeismicSurfaceGeneration:TopMungaroo-Gridding-2024:",

&#x20; "data": {



&#x20;   "Name": "Top Mungaroo Surface Generation",

&#x20;   "Description": "Gridding of propagated horizon picks using Minimum Curvature interpolation.",



&#x20;   "SeismicHorizonInputID":

&#x20;     "partition-id:work-product-component--SeismicHorizon:TopMungaroo-PropagatedPicks:",



&#x20;   "HorizonControlPointsIDs": \[

&#x20;     "partition-id:work-product-component--HorizonControlPoints:NWShelf-TopMungaroo-Seeds:"

&#x20;   ],



&#x20;   "Seismic3DInterpretationSetID":

&#x20;     "partition-id:master-data--Seismic3DInterpretationSet:NWShelf\_Interpretation\_2024:",



&#x20;   "GriddingAlgorithmID":

&#x20;     "partition-id:reference-data--SeismicSurfaceGriddingAlgorithm:MinimumCurvature:",



&#x20;   "CellSizeX": 25.0,

&#x20;   "CellSizeY": 25.0,



&#x20;   "HorizontalCRSID":

&#x20;     "partition-id:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::28350\_EPSG::1150:",



&#x20;   "HonourFaults": true,



&#x20;   "PropagationSoftware": "Petrel 2023.1",



&#x20;   "Outputs": {

&#x20;     "SeismicHorizonID":

&#x20;       "partition-id:work-product-component--SeismicHorizon:TopMungaroo-DepthGrid:"

&#x20;   }

&#x20; }

}

\---

**Update to SeismicHorizon Lineage**

The resulting SeismicHorizon must include lineage to the Activity that generated it.

---

**Example Lineage Assertion**

"LineageAssertions": \[

&#x20; {

&#x20;   "ID": "partition-id:activity--SeismicSurfaceGeneration:TopMungaroo-Gridding-2024:",

&#x20;   "LineageRelationshipType": "partition-id:reference-data--LineageRelationshipType:DerivedFrom:"

&#x20; }

]

This enables:

•	Reproducibility of the surface

•	Traceability of algorithms and parameters

•	Clear linkage between interpretation and computation

---

**Key Design Principles**

**Explicit Separation of Data and Process**

•	SeismicHorizon represents the surface

•	SeismicSurfaceGeneration represents the process used to generate it

---

**Standardised Algorithm Reference**

•	Algorithms are selected from a controlled reference list

•	Supports interoperability across applications

---

**Full Lineage Tracking**

•	Every gridded surface is linked to:

•	Input data

•	Processing Activity

•	Algorithm and parameters

---

**Extensibility**

•	New algorithms can be added to the reference list

•	Does not break existing implementations

---

**Derived Outputs**

The gridded SeismicHorizon serves as input to downstream workflows:

**Horizon Interpretation**

Defines geological meaning (e.g., formation top)

**LocalBoundaryFeature**

Represents the horizon as a structural boundary

**StructureMap**

Provides gridded surface for mapping and modelling



---


## Relationship to Depth Structure Maps

Seismic horizon control points serve as critical input data to depth structure map generation workflows. These sparse spatial coordinates guide interpolation algorithms that create continuous depth surfaces used throughout reservoir characterization and development planning.

Introduction of the SeismicSurfaceGeneration Activity ensures that:

•	Surface creation is no longer implicit

•	Algorithms and parameters are transparently recorded

•	Seismic horizons can be reproduced across systems

These outputs enable integration between Geophysics and Reservoir / Earth Modelling workflows and a key step towards standardised, interoperable seismic interpretation workflows.


---

## Links to Full Example Records

**Complete JSON Records:**

* [SeismicHorizonControlPoints (Inline Dataset)](./records/HorizonControlPoints.1.0.0--NWShelf-TopMungaroo-SeedPoints-InlineDataset.json)
* [SeismicHorizonControlPoints (External Dataset)](./records/HorizonControlPoints.1.0.0--Gorgon-TopDupuy-SeedPoints-2024-ExternalDataset.json)
* [SeismicHorizonControlPoints (ML Training Dataset)](./records/HorizonControlPoints.1.0.0--Scarborough-TopGearle-MLTraining-2024.json)
* [File.TabularData (CSV Metadata)](./dataset/TabularData.1.0.0--Gorgon-TopDupuy-ControlPoints-2024.json)
* [TopDupuy\_ControlPoints.csv (Actual Data)](./content/TopDupuy_ControlPoints.csv)

**Schema Relationship Diagram:**

* [SeismicHorizonControlPoints Entity-Relationship Diagram](./Illustrations/HorizonControlPoints.png)

---

[Back to TOC](#TOC)