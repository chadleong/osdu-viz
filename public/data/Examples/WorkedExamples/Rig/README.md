<a name ="TOC"></a><b>Table of Contents </b></a>

[[_TOC_]]

# Rig and Rig Related 2.1 Worked Example

This document outlines the how to use the 2.1 version of the Rig object and related objects. The 2.1.0 version changes the fundamental use of the Rig and RigUtilization objects and includes the addition of a number of new rig related objects.

Several objects are available to support a rig. The following image outlines these objects how they relate to one another in the 2.1.0 version.

![Rig overview ERD](illustrations/RigOverviewERD.drawio.png)

There are three main objects that are used to define a rig:

- **Rig** - the base object that defines the physical rig
- **RigSpecification** - the configuration of the rig during a specified period of time
- **RigUtilization** - places a rig and its current configuration on site


## Rig

The **Rig** object is the base object for defining a rig, it is the object that represents the physical rig. The properties found in the **Rig** object typically do not change over time.

Note: Although the **Rig** object can include VerticalMeasurements we do not include it here. For information on best practices for defining VerticalMeasurements see [Worked Examples / VerticalReferenceUsage](https://gitlab.opengroup.org/osdu/subcommittees/data-def/work-products/schema/-/tree/master/Examples/WorkedExamples/VerticalReferenceUsage) or [3.4 Recommendations, Best Practice in the OSDU Schema Usage Guide](https://gitlab.opengroup.org/osdu/subcommittees/data-def/work-products/schema/-/blob/master/Guides/Chapters/03-VerticalMeasurements.md#34-recommendations-best-practice)

<OsduImportJSON>[Rig:2.0.0 JSON, Full](records/Rig.2.0.0.json)</OsduImportJSON>

## RigSpecifications

The **Rig Specifications** object is used to define the configuration of the rig during a specific period via <code>RigID</code>, <code>EffectiveStartDate</code>, and <code>EffectiveEndDate</code>. As the rig's configuration changes a new Rig Specifications objects can be created.

<OsduImportJSON>[RigSpecifications:1.0.0 JSON, Full](records/RigSpecifications.1.0.0.json)</OsduImportJSON>

### RigDerrick

The **RigDerrick** object defines a derrick located on the rig. This object is placed on the rig via a reference to the **Rig Specifications** object via <code>RigSpecificationID</code>. This also supports the ability to have multiple derricks.

<OsduImportJSON>[RigDerrick:1.0.0 JSON, Full](records/RigDerrick.1.0.0.json)</OsduImportJSON>

### RigCirculatingSystem

The **RigCirculatingSystem** object defines the volumes of circulating systems on the rig.  This object is placed on the rig via a reference to the **Rig Specifications** object via <code>RigSpecificationID</code>.

<OsduImportJSON>[RigCirculatingSystem:1.0.0 JSON, Full](records/RigCirculatingSystem.1.0.0.json)</OsduImportJSON>

### RigSurfaceEquipment

The **RigSurfaceEquipment** object defines the components of the rig circulation system that are located above the rotary system and are used to transport drilling fluid from the mud pumps to the drill string. This object references the **RigCirculatingSystem** object via <code>RigCirculationSystemID</code>.

> **_NOTE:_** RigSurfaceEquipment has not yet been published as a schema - the description and example `data` block
> below reflect the current design intent only. Publishing the schema (and a full worked-example record here) is
> expected to be addressed in a future release.

### EquipmentInventory

The **EquipmentInventory** object tracks an inventory of equipment located on the rig via <code>RigSpecificationID</code>, <code>EquipmentInventory[].InstallDate</code>, and <code>EquipmentInventory[].RemoveDate</code>. For rigless operations reference the Wellbore via <code>WellboreID</code> instead.

This object also tracks when the equipment is out for maintenance via <code>EquipmentInventory[].MaintenanceDate</code> and <code>EquipmentInventory[].ReturnDate</code>.

<OsduImportJSON>[EquipmentInventory:1.0.0 JSON, Full](records/EquipmentInventory.1.0.0.json)</OsduImportJSON>

The following types of equipment objects are currently available to the **EquipmentInventory** object. These objects define the properties of each equipment unit and uses the **AbstractUnitEquipment** abstract to define common properties.

- **RigAnchor** - <OsduImportJSON>[RigAnchor:1.0.0 JSON, Full](records/RigAnchor.1.0.0.json)</OsduImportJSON>
- **RigBoiler** - <OsduImportJSON>[RigBoiler:1.0.0 JSON, Full](records/RigBoiler.1.0.0.json)</OsduImportJSON>
- **RigCementUnit** - <OsduImportJSON>[RigCementUnit:1.0.0 JSON, Full](records/RigCementUnit.1.0.0.json)</OsduImportJSON>
- **RigCentrifuge** - <OsduImportJSON>[RigCentrifuge:1.0.0 JSON, Full](records/RigCentrifuge.1.0.0.json)</OsduImportJSON>
- **RigCoilTubingReel** - <OsduImportJSON>[RigCoilTubingReel:1.0.0 JSON, Full](records/RigCoilTubingReel.1.0.0.json)</OsduImportJSON>
- **RigDegasser** - <OsduImportJSON>[RigDegasser:1.0.0 JSON, Full](records/RigDegasser.1.0.0.json)</OsduImportJSON>
- **RigHydrocyclone** - <OsduImportJSON>[RigHydrocyclone:1.0.0 JSON, Full](records/RigHydrocyclone.1.0.0.json)</OsduImportJSON>
- **RigMotor** - <OsduImportJSON>[RigMotor:1.0.0 JSON, Full](records/RigMotor.1.0.0.json)</OsduImportJSON>
- **RigPit** - <OsduImportJSON>[RigPit:1.0.0 JSON, Full](records/RigPit.1.0.0.json)</OsduImportJSON>
- **RigPump** - <OsduImportJSON>[RigPump:1.0.0 JSON, Full](records/RigPump.1.0.0.json)</OsduImportJSON>
- **RigRiser** - <OsduImportJSON>[RigRiser:1.0.0 JSON, Full](records/RigRiser.1.0.0.json)</OsduImportJSON>
- **RigShaker** - <OsduImportJSON>[RigShaker:1.0.0 JSON, Full](records/RigShaker.1.0.0.json)</OsduImportJSON>

## RigUtilization

The **RigUtilization** object places the rig and the current configuration location during a specific period via <code>RigSpecificationID</code>, <code>StartDateActivity</code>, and <code>EndDateActivity</code>. The rig can be placed on location by referencing the **RigUtilization** object from the following objects:
- During execution **WellActivtiy.data.RigAssignment.RigUtilizationID**
- During planning **WellActivityProgram.data.Phase[].RigUtilizationID**

<OsduImportJSON>[RigUtilization:2.0.0 JSON, Full](records/RigUtilization.2.0.0.json)</OsduImportJSON>

# Rig Workflow and Worked Examples

A rig typically moves from site to site to perform operations on a well over it's life cycle. The following outlines workflow events involving a Rig and the resulting OSDU events that would take place. This is only an example that illustrates a linear workflow involving rig objects. It also does not include all possible rig equipment objects.

![RigWorkflow](illustrations/RigWorkflow.drawio.png)

The following examples of Rig objects created during the Events outlined in above workflow.

<details>

<summary markdown="span"><b>Rig</b> object <code>data</code> block fragment.</summary>

```json
{
  "id": "namespace:master-data--Rig:75c8e967-2bba-5a68-b435-070c0a6804f0",
  "kind": "osdu:wks:master-data--Rig:2.0.0",
  "version": 1562066009929332,
  "acl": {
    "owners": [
      "someone@company.com"
    ],
    "viewers": [
      "someone@company.com"
    ]
  },
  "legal": {
    "legaltags": [
      "Example legaltags"
    ],
    "otherRelevantDataCountries": [
      "US"
    ],
    "status": "compliant"
  },
  "tags": {
    "NameOfKey": "String value"
  },
  "createTime": "2020-12-16T11:46:20.163Z",
  "createUser": "some-user@some-company-cloud.com",
  "modifyTime": "2020-12-16T11:52:24.477Z",
  "modifyUser": "some-user@some-company-cloud.com",
  "ancestry": {
    "parents": []
  },
  "meta": [
    {
      "kind": "Unit",
      "name": "m",
      "persistableReference": "{\"abcd\":{\"a\":0.0,\"b\":1.0,\"c\":1.0,\"d\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"L\",\"type\":\"UM\"},\"type\":\"UAD\"}",
      "unitOfMeasureID": "namespace:reference-data--UnitOfMeasure:m:",
      "propertyNames": [
        "FacilitySpecifications[0].FacilitySpecificationQuantity"
      ]
    }
  ],
  "data": {
    "ResourceHomeRegionID": "namespace:reference-data--OSDURegion:AWSEastUSA:",
    "ResourceHostRegionIDs": [
      "namespace:reference-data--OSDURegion:AWSEastUSA:"
    ],
    "ResourceCurationStatus": "namespace:reference-data--ResourceCurationStatus:Created:",
    "ResourceLifecycleStatus": "namespace:reference-data--ResourceLifecycleStatus:Loading:",
    "Source": "Example Data Source",
    "ExistenceKind": "namespace:reference-data--ExistenceKind:Prototype:",
    "NameAliases": [
      {
        "AliasName": "Example AliasName",
        "AliasNameTypeID": "namespace:reference-data--AliasNameType:RegulatoryIdentifier:",
        "DefinitionOrganisationID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
        "EffectiveDateTime": "2020-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z"
      }
    ],
    "GeoContexts": [
      {
        "GeoPoliticalEntityID": "namespace:master-data--GeoPoliticalEntity:SomeUniqueGeoPoliticalEntityID:",
        "GeoTypeID": "namespace:reference-data--GeoPoliticalEntityType:Area:"
      },
      {
        "BasinID": "namespace:master-data--Basin:SomeUniqueBasinID:",
        "GeoTypeID": "namespace:reference-data--BasinType:ArcWrenchOceanContinent:"
      },
      {
        "FieldID": "namespace:master-data--Field:SomeUniqueFieldID:",
        "GeoTypeID": "Field"
      },
      {
        "PlayID": "namespace:master-data--Play:SomeUniquePlayID:",
        "GeoTypeID": "namespace:reference-data--PlayType:CarbonCaptureAndStorage:"
      },
      {
        "ProspectID": "namespace:master-data--Prospect:SomeUniqueProspectID:",
        "GeoTypeID": "namespace:reference-data--ProspectType:Structural.Anticline:"
      }
    ],
    "SpatialLocation": {
      "SpatialLocationCoordinatesDate": "2020-02-13T09:13:15.55Z",
      "QuantitativeAccuracyBandID": "namespace:reference-data--QuantitativeAccuracyBand:Length.LessThan1m:",
      "QualitativeSpatialAccuracyTypeID": "namespace:reference-data--QualitativeSpatialAccuracyType:Assumed:",
      "CoordinateQualityCheckPerformedBy": "Example CoordinateQualityCheckPerformedBy",
      "CoordinateQualityCheckDateTime": "2020-02-13T09:13:15.55Z",
      "CoordinateQualityCheckRemarks": [
        "Example CoordinateQualityCheckRemarks"
      ],
      "AsIngestedCoordinates": {
        "type": "AnyCrsFeatureCollection",
        "CoordinateReferenceSystemID": "namespace:reference-data--CoordinateReferenceSystem:BoundProjected:EPSG::32021_EPSG::15851:",
        "VerticalCoordinateReferenceSystemID": "namespace:reference-data--CoordinateReferenceSystem:Vertical:EPSG::5714:",
        "VerticalUnitID": "namespace:reference-data--UnitOfMeasure:m:",
        "persistableReferenceCrs": "{\"authCode\":{\"auth\":\"OSDU\",\"code\":\"32021079\"},\"lateBoundCRS\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"32021\"},\"name\":\"NAD_1927_StatePlane_North_Dakota_South_FIPS_3302\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"PROJCS[\\\"NAD_1927_StatePlane_North_Dakota_South_FIPS_3302\\\",GEOGCS[\\\"GCS_North_American_1927\\\",DATUM[\\\"D_North_American_1927\\\",SPHEROID[\\\"Clarke_1866\\\",6378206.4,294.9786982]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],PROJECTION[\\\"Lambert_Conformal_Conic\\\"],PARAMETER[\\\"False_Easting\\\",2000000.0],PARAMETER[\\\"False_Northing\\\",0.0],PARAMETER[\\\"Central_Meridian\\\",-100.5],PARAMETER[\\\"Standard_Parallel_1\\\",46.18333333333333],PARAMETER[\\\"Standard_Parallel_2\\\",47.48333333333333],PARAMETER[\\\"Latitude_Of_Origin\\\",45.66666666666666],UNIT[\\\"Foot_US\\\",0.3048006096012192],AUTHORITY[\\\"EPSG\\\",32021]]\"},\"name\":\"NAD27 * OGP-Usa Conus / North Dakota CS27 South zone [32021,15851]\",\"singleCT\":{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"15851\"},\"name\":\"NAD_1927_To_WGS_1984_79_CONUS\",\"type\":\"ST\",\"ver\":\"PE_10_9_1\",\"wkt\":\"GEOGTRAN[\\\"NAD_1927_To_WGS_1984_79_CONUS\\\",GEOGCS[\\\"GCS_North_American_1927\\\",DATUM[\\\"D_North_American_1927\\\",SPHEROID[\\\"Clarke_1866\\\",6378206.4,294.9786982]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],GEOGCS[\\\"GCS_WGS_1984\\\",DATUM[\\\"D_WGS_1984\\\",SPHEROID[\\\"WGS_1984\\\",6378137.0,298.257223563]],PRIMEM[\\\"Greenwich\\\",0.0],UNIT[\\\"Degree\\\",0.0174532925199433]],METHOD[\\\"NADCON\\\"],PARAMETER[\\\"Dataset_conus\\\",0.0],OPERATIONACCURACY[5.0],AUTHORITY[\\\"EPSG\\\",15851]]\"},\"type\":\"EBC\",\"ver\":\"PE_10_9_1\"}",
        "persistableReferenceVerticalCrs": "{\"authCode\":{\"auth\":\"EPSG\",\"code\":\"5714\"},\"name\":\"MSL_Height\",\"type\":\"LBC\",\"ver\":\"PE_10_9_1\",\"wkt\":\"VERTCS[\\\"MSL_Height\\\",VDATUM[\\\"Mean_Sea_Level\\\"],PARAMETER[\\\"Vertical_Shift\\\",0.0],PARAMETER[\\\"Direction\\\",1.0],UNIT[\\\"Meter\\\",1.0],AUTHORITY[\\\"EPSG\\\",5714]]\"}",
        "persistableReferenceUnitZ": "{\"scaleOffset\":{\"scale\":1.0,\"offset\":0.0},\"symbol\":\"m\",\"baseMeasurement\":{\"ancestry\":\"Length\",\"type\":\"UM\"},\"type\":\"USO\"}",
        "features": [
          {
            "type": "AnyCrsFeature",
            "properties": {},
            "geometry": {
              "type": "AnyCrsPoint",
              "coordinates": [
                12345.6,
                12345.6
              ],
              "bbox": [
                12345.6,
                12345.6,
                12345.6,
                12345.6
              ]
            },
            "bbox": [
              12345.6,
              12345.6,
              12345.6,
              12345.6
            ]
          }
        ],
        "bbox": [
          12345.6,
          12345.6,
          12345.6,
          12345.6
        ]
      },
      "Wgs84Coordinates": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                12345.6,
                12345.6
              ],
              "bbox": [
                12345.6,
                12345.6,
                12345.6,
                12345.6
              ]
            },
            "bbox": [
              12345.6,
              12345.6,
              12345.6,
              12345.6
            ]
          }
        ],
        "bbox": [
          12345.6,
          12345.6,
          12345.6,
          12345.6
        ]
      },
      "AppliedOperations": [
        "conversion from ED_1950_UTM_Zone_31N to GCS_European_1950; 1 points converted",
        "transformation GCS_European_1950 to GCS_WGS_1984 using ED_1950_To_WGS_1984_24; 1 points successfully transformed"
      ],
      "SpatialParameterTypeID": "namespace:reference-data--SpatialParameterType:Outline:",
      "SpatialGeometryTypeID": "namespace:reference-data--SpatialGeometryType:Point:"
    },
    "VersionCreationReason": "Example VersionCreationReason",
    "TechnicalAssurances": [
      {
        "TechnicalAssuranceTypeID": "namespace:reference-data--TechnicalAssuranceType:Trusted:",
        "Reviewers": [
          {
            "RoleTypeID": "namespace:reference-data--ContactRoleType:AccountOwner:",
            "DataGovernanceRoleTypeID": "namespace:reference-data--DataGovernanceRoleType:SME:",
            "WorkflowPersonaTypeID": "namespace:reference-data--WorkflowPersonaType:SeismicProcessor:",
            "OrganisationID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
            "Name": "John Smith"
          }
        ],
        "AcceptableUsage": [
          {
            "WorkflowUsageTypeID": "namespace:reference-data--WorkflowUsageType:SeismicProcessing:",
            "WorkflowPersonaTypeID": "namespace:reference-data--WorkflowPersonaType:SeismicProcessor:",
            "DataQualityRuleSetID": "namespace:reference-data--DataQualityRuleSet:SeismicProcessingQCRuleSet:",
            "DataQualityID": "namespace:work-product-component--DataQuality:6a433d16-07c8-4f4d-9ddc-5608e2ec4234:1562066077849221",
            "ValueChainStatusTypeID": "namespace:reference-data--ValueChainStatusType:Exploration:"
          }
        ],
        "UnacceptableUsage": [
          {
            "WorkflowUsageTypeID": "namespace:reference-data--WorkflowUsageType:SeismicInterpretation:",
            "WorkflowPersonaTypeID": "namespace:reference-data--WorkflowPersonaType:SeismicInterpreter:",
            "DataQualityRuleSetID": "namespace:reference-data--DataQualityRuleSet:SeismicInterpretationQCRuleSet:",
            "DataQualityID": "namespace:work-product-component--DataQuality:d79bf97c-ff7c-4b82-89b5-c88520c15017:1562066009929332",
            "ValueChainStatusTypeID": "namespace:reference-data--ValueChainStatusType:FieldDevelopment:"
          }
        ],
        "EffectiveDate": "2020-02-13",
        "Comment": "This is free form text from reviewer, e.g. restrictions on use"
      }
    ],
    "FacilityID": "Example External Facility Identifier",
    "FacilityTypeID": "namespace:reference-data--FacilityType:Well:",
    "FacilityOperators": [
      {
        "FacilityOperatorID": "Example Facility Operator ID",
        "FacilityOperatorOrganisationID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
        "EffectiveDateTime": "2020-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z",
        "Remark": "Example Remark"
      }
    ],
    "InitialOperatorID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
    "CurrentOperatorID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
    "DataSourceOrganisationID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
    "OperatingEnvironmentID": "namespace:reference-data--OperatingEnvironment:Onshore:",
    "FacilityName": "Example FacilityName",
    "FacilityDescription": "Example Facility Description",
    "FacilityStates": [
      {
        "EffectiveDateTime": "2020-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z",
        "FacilityStateTypeID": "namespace:reference-data--FacilityStateType:Closed:",
        "Remark": "Example Remark"
      }
    ],
    "FacilityEvents": [
      {
        "FacilityEventTypeID": "namespace:reference-data--FacilityEventType:Abandon:",
        "EffectiveDateTime": "2020-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z",
        "Remark": "Example Remark"
      }
    ],
    "FacilitySpecifications": [
      {
        "EffectiveDateTime": "2020-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z",
        "FacilitySpecificationQuantity": 12345.6,
        "FacilitySpecificationDateTime": "2020-02-13T09:13:15.55Z",
        "FacilitySpecificationIndicator": true,
        "FacilitySpecificationText": "Example FacilitySpecificationText",
        "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:m:",
        "ParameterTypeID": "namespace:reference-data--ParameterType:SlotName:"
      }
    ],
    "TypeRigID": "namespace:reference-data--RigType:Drill%20Ship:",
    "ClassRig": "Deepwater Rig",
    "Manufacturer": "Samsung Heavy Industries",
    "Model": "S10000E",
    "Generation": "6",
    "ConstructionDate": "2020-02-13T09:13:15.55Z",
    "ServiceDate": "2020-02-13T09:13:15.55Z",
    "RetiredDate": "2020-02-13T09:13:15.55Z",
    "YearEnterService": 2014,
    "ExtensionProperties": {}
  }
}
```
</details>

<details>

<summary markdown="span"><b>RigSpecification</b> object <code>data</code> block fragment, referencing <b>Rig</b> and where the Effective Start Date is added. </summary>

```json
{
  "RigID": "namespace:master-data--Rig:SomeUniqueRigID:",
  "EffectiveStartDate": "2020-03-13T09:13:15.55Z",
  "EffectiveEndDate": null,
  "OwnerID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
  "Length": 781.0,
  "Breadth": 138.0,
  "Depth": 62.0,
  "IMONumber": "9632557",
  "MPDCapable": true,
  "NumJackUpLegs": 3,
  "SpudCanDiameter": 18.0,
  "JackingSystem": "Electro-Hydraulic",
  "NumThrusters": 6,
  "IsThrusterAzimuth": true,
  "DPSystemClass": "Kongsberg ICMS",
  "NumCranes": 2,
  "NumGuidelines": 8,
  "NumTensioners": 8,
  "NumAnchor": 4,
  "DraftTransit": 11.0,
  "DraftOperating": 15.5,
  "DisplacementOperating": 65000.0,
  "DisplacementTransit": 78000.0,
  "HelideckRating": "74' x 74' (Sikorsky S-61N, S-92)",
  "AccommodationCapacity": 160,
  "NumLifeboats": "4 (Totally Enclosed, 50-pax)",
  "MaxWaterDepthRating": 130.0,
  "MaxDrillingDepthRating": 10500.0,
  "VariableDeckLoadRating": 7000.0,
  "VariableDeckLoadStormRating": 5000.0,
  "GantryTypeID": "namespace:reference-data--GantryType:Pipe:",
  "FlareTypeID": "namespace:reference-data--FlareType:Vertical:",
  "MooringTypeID": "namespace:reference-data--MooringType:Spread:",
  "MotionCompensationName": "Active Heave Compensation (AHC)",
  "MotionCompensationMinimum": 0.5,
  "MotionCompensationMaximum": 3.0,
  "MotionCompensationStroke": 6.0,
  "HeaveCapacity": 3.0,
  "DryMudCapacity": 3500.0,
  "LiquidMudCapacity": 5000.0,
  "DrillWaterCapacity": 4500.0,
  "PotableWaterCapacity": 1200.0,
  "BulkCementCapacity": 2500.0,
  "FuelCapacity": 6000.0,
  "EnergyStorage": "LithiumBatteryHybrid",
  "MainEngine": "Medium-Speed Diesel (Wärtsilä-class equivalent)",
  "Generator": "6 x 6.6 kV Diesel Generators",
  "AutomationPCROS": true
}
```
</details>

<details>

<summary markdown="span"><b>RigDerrick</b> object <code>data</code> block fragment, referencing <b>RigSpecification</b>.</summary>

```json
{
  "RigSpecificationsID": "namespace:master-data--RigSpecifications:SomeUniqueRigSpecificationsID:",
  "DerrickDescription": "Free-standing tower derrick, offshore-rated, four-leg welded steel construction, optimized for triple stand handling",
  "DerrickTypeID": "namespace:reference-data--DerrickType:Tower:",
  "DerrickRating": 1250000.0,
  "DerrickHeight": 210.0,
  "MaxWindCapacity": 193.0,
  "PipeHandlingName": "Pipe handling Gantry Crane (PGC)",
  "PipeStandLength": "90 ft",
  "AveragePipeStandHeight": 31.0,
  "JointsPerStand": 3,
  "RotarySystemDescription": "Rotary Table",
  "RotarySystemTorqueRating": 68.0,
  "RotarySystemMake": "NOV",
  "RotarySystemModel": "NOV Model 34",
  "RotarySystemType": "RST 495inch Rotary Support Table",
  "RotaryOpeningSize": 49.5,
  "RotarySystemPowerRating": 34.0,
  "RotarySystemWeightRating": 500.0,
  "RotaryCapacity": 1000000.0,
  "RotaryTableClearance": 22.0,
  "TopDriveMake": "NOV",
  "TopDriveModel": "NOV TDS-11SA-750",
  "TopDriveType": "Electric, 2GE-20B AC Motors",
  "TopDriveInnerDiameter": 30.625,
  "TopDriveLength": 10.0,
  "TopDriveTorqueRating": 68000.0,
  "TopDriveCapacity": 750.0,
  "SwivelModel": "Integrated with NOV TDS-11SA-750",
  "SwivelType": "Part of Top Drive",
  "SwivelRating": 356.0,
  "HookModel": "Integrated Hook - 750-ton class",
  "HookType": "Part of travelling block",
  "HookLoadRating": 2000.0,
  "RequiredHoistingCapacity": 45000.0,
  "DrawWorksModel": "SSGD-1070-5750-50-82-10,5 FMM-NE-CLAC",
  "DrawWorksType": "AC electric, single-speed gear drive",
  "DrawWorksPowerRating": 5750.0,
  "DrawWorksWeightRating": 750.0,
  "DrawWorksMotor": "Type: AC motors, GEB22A, closed loop water / air cooled, 1150 HP each",
  "BlockModel": "NOV 750-TON-TRBLK",
  "BlockWeight": 100000.0,
  "BlockRating": 400.0,
  "NumBlockLines": 14,
  "DrillLineSize": 2.0,
  "DrillLineLength": 10000.0,
  "DrillLineCapacity": 2.9,
  "BrakeDescription": "Hyd. Disk brake"
}
```
</details>

<details>

<summary markdown="span"><b>RigCirculatingSystem</b> object <code>data</code> block fragment, referencing <b>RigSpecification</b>.</summary>


```json
{
  "RigSpecificationsID": "namespace:master-data--RigSpecifications:SomeUniqueRigSpecificationsID:",
  "RequiredFlowRate": 850.0,
  "SlowCirculationRateDescription": "30 gpm (SCR1), 60 gpm (SCR2), 100 gpm (SCR3)",
  "PowerType": "Diesel-Electric",
  "BOPPressureRating": 15000.0,
  "BOPVolume": 95.0,
  "RiserVolume": 1100.0,
  "KillLineVolume": 120.0,
  "ChokeLineVolume": 135.0,
  "BoostLineVolume": 180.0,
  "KillLineHoseVolume": 18.0,
  "ChokeLineHoseVolume": 20.0,
  "BoosterLineHoseVolume": 25.0,
  "CementUnitCementManifoldVolume": 6.0,
  "CementUnitChokeManifoldVolume": 8.0,
  "CementUnitStandpipeManifoldVolume": 12.0,
  "MudStandpipeChokeManifoldVolume": 30.0,
  "StandpipeManifoldTopDriveVolume": 22.0,
  "MudPumpsStandpipeManifoldVolume": 45.0,
  "ChokeManifoldBOPKillVolume": 140.0,
  "ChokeManifoldBOPChokeVolume": 155.0,
  "MudPumpsBOPBoostVolume": 210.0,
  "WellTestStandpipeGooseneckVolume": 15.0
}
```
</details>

<details>

<summary markdown="span"><b>RigSurfaceEquipment</b> object <code>data</code> block fragment (proposed - not yet a published schema, see note above).</summary>

```json
{
  "RigCirculationSystemID": "namespace:master-data--RigCirculatingSystem:SomeUniqueRigCirculatingSystemID:",
  "TypeSurfaceEquipment": "Custom",
  "SurfaceEquipmentDescription": "Drilling, production operations with temperatures over 250ºF (121ºC)",
  "PressureRating": 7500,
  "IronHeight": 2.5,
  "IronInnerDiameter": 5.0,
  "IronLength": 120.00,
  "IsSurfaceIronUsed": 1,
  "HoseInnerDiameter": 5.0,
  "HoseLength": 75.00,
  "IsHoseUsed": 1,
  "KellyInnerDiameter": 4.25,
  "KellyLength": 40.00,
  "IsKellyUsed": 1,
  "StandpipeInnerDiameter": 5.0,
  "StandpipeLength": 85.00,
  "IsStandpipeUsed": 1,
  "RequiredStandpipePressure": 5000,
  "TopStackInsideDiameter": 4.50,
  "TopStackHeight": 15.00,
  "IsTopStackUsed": 1,
  "SwivelInsideDiameter": 3.75,
  "SwivelLength": 12.00,
  "IsSwivelUsed": 1,
  "FlangeHeight": 1.5,
  "IsInjectorStackUsed": 0,
  "IsPumpDischargeUsed": 1
}
```
</details>

<details>

<summary markdown="span"><b>EquipmentInventory</b> object <code>data</code> block fragment.</summary>



```json
{
  "RigSpecificationsID": "namespace:master-data--RigSpecifications:SomeUniqueRigSpecificationsID:",
  "EquipmentInventory": [
    {
    "EquipmentID": "namespace:master-data--RigPump:SomeUniqueRigPumpID:",
    "InstallDate": "2020-03-13T09:13:15.55Z",
    "RemoveDate": null,
    "MaintenanceDate": "2020-04-02T09:13:15.55Z",
    "ReturnDate": "2020-04-04T09:13:15.55Z",
    "Comments": "Liner Replacement"
    },
    {
    "EquipmentID": "namespace:master-data--RigDegasser:SomeUniqueRigDegasserID:",
    "InstallDate": "2020-03-13T09:13:15.55Z",
    "RemoveDate": null,
    "MaintenanceDate": null,
    "ReturnDate": null,
    "Comments": null
    }
  ]
}
```
</details>

<details>

<summary markdown="span"><b>RigDegasser</b> object <code>data</code> block fragment, including properties from <i>AbstractUnitEquipment</i>.</summary>

```json
{
  "EquipmentName": "Mud Gas Separator A",
  "EquipmentNumber": "MGS-001",
  "EquipmentManufacturer": "NOV",
  "EquipmentModel": "MGS-48-10K",
  "EquipmentTypeID": "MudGasSeparator",
  "EquipmentOwnerID": "namespace:master-data--Organisation:SomeUniqueOrganizationID",
  "EquipmentTag": "DEGASSER-A",
  "Comments": "Primary mud gas separator for well control operations.",
  "Class": "Vertical",
  "Height": 25.00,
  "Length": 8.00,
  "InnerDiameter": 48.0,
  "FlowCapacity": 2500.00,
  "FlowArea": 12.57,
  "MudSealHeight": 12.00,
  "InletInnerDiameter": 8.0,
  "VentLineInnerDiameter": 12.0,
  "VentLineLength": 100.00,
  "GasSeparatingCapacity": 500000,
  "BlowDownCapacity": 1000,
  "PressureRating": 100,
  "TemperatureRating": 250
}
```
</details>

<details>

<summary markdown="span"><b>RigPump</b> object <code>data</code> block fragment, including properties from <i>AbstractUnitEquipment</i>.</summary>

```json
{
  "EquipmentName": "Mud Pump A",
  "EquipmentNumber": "MP-001",
  "EquipmentManufacturer": "National Oilwell Varco (NOV)",
  "EquipmentModel": "14-P-220",
  "EquipmentTypeID": "Triplex",
  "EquipmentOwnerID": "namespace:master-data--Organisation:SomeUniqueOrganizationID",
  "EquipmentTag": "PUMP-A",
  "Comments": "Primary circulating pump used during drilling operations.",
  "Purpose": "Primary drilling fluid circulation",
  "MaxMechanicalPower": 2200.0,
  "WorkingPower": 1800.0,
  "MaxPumpPressure": 7500.0,
  "MaxPumpFlowrate": 1600.0,
  "NumOfCylinders": 3,
  "RodOuterDiameter": 4.5,
  "LinerInnerDiameter": 7.0,
  "Action": 2,
  "Efficiency": 0.90,
  "StrokeLength": 12.0,
  "PumpStrokeMaximum": 120.0,
  "DisplacementOutput": 0.116,
  "HydraulicPowerMaximum": 1800.0,
  "HydraulicPowerAllowed": 1500.0,
  "DampenerPressure": 900.0,
  "DampenerVolume": 80.0,
  "SuperchargerMake": "Mission",
  "SuperchargerModel": "Magnum XP"
}
```
</details>

<details>

<summary markdown="span"><b>RigUtilization</b> object <code>data</code> block fragment, referencing <b>RigSpecification</b> and where the Rig on location date is recorded.</summary>

[RigUtilzation:2.0.0 JSON, Full](records/RigUtilization.2.0.0.json)

```json
{
  "RigSpecificationsID": "namespace:master-data--RigSpecifications:SomeUniqueRigSpecificationsID:",
  "HoleSectionID": "namespace:master-data--HoleSection:SomeUniqueHoleSectionID:",
  "StartHoleDepth": 0.0,
  "EndHoleDepth": 2800.0,
  "StartDateActivity": "2020-02-13T09:13:15.55Z",
  "EndDateActivity": "2020-04-24T09:13:15.55Z",
  "AirGap": 25.0
}
  ]
}
```
</details>



