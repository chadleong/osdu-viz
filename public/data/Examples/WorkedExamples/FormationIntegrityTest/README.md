<a name="TOC"></a>

[[_TOC_]]

# Formation Integrity Tests (FIT/LOT)

Shell donation to OSDU Well Delivery Forum: June 2022

## Introduction

A Well Integrity Test is a formation strength pressure measurement made against the exposed
borehole typically performed at the start of a new hole section. Well Integrity Tests are
performed to:

* Confirm strength of formation below the shoe to meet upcoming hole section well design
  requirements (assumption is that shoe will be the weakest point in new hole section)
* Confirm the strength of the Cement Bond on the previous shoe, i.e., no flow path or leak
  outside the casing
* Collect data on formation strength and in-situ stress for wellbore stability and lost
  circulation prediction purposes

A test is performed after drilling out the previous casing shoe and a short interval drilled into
new formation, typically 10-20ft. The annulus is then sealed off at the BOP and slow pumping
commences down the drillstring to pressure up the exposed formation. Pumping proceeds until a
set pressure is reached (Limit test) or formation is fractured and pressure decreases (Leak Off
Test). Pressure response data is captured throughout the test from the surface pumping
equipment and when present downhole through PWD sensor in the drillstring.

A ‘Leak Off Test’ is performed to determine formation Fracture Gradient where the imposed
downhole hydraulic pressure exceeds formation strength, cracks are formed in the formation in
which drilling fluid flows / injected resulting in ‘leak off’ pressure drop. The Leak Off pressure
(most often expressed as a Gradient for comparison against Mud Weight) is then assumed to be
the maximum safe pressure which can be exerted on the borehole wall whilst drilling the new
hole section - it’s a limit on Mud Weight, Equivalent Circulating Density, Pipe Running Speeds
and also used as a Kick Tolerance limit for safe control of influxes into the well (don’t want
underground blowout through weakest formation).

A ‘Formation Integrity Test’ (FIT) aka ‘Limit Test’ (LT) is similar except that the pressure
exerted is limited to a pre-defined max gradient required for the well design - applied downhole
pressure does not exceed Leak Off Pressure, the pre-defined gradient meets well design
requirements and is sufficient to safely construct the new hole section. There are a variety of
other test sub-types which blend between LOT and FIT, some of which require additional data to
be captured e.g. MPD.

The captured Pressure data is used to interpret Formation Strength. Pressure is measured at
surface from the Pump performing the testing. Additionally, Bottom Hole Pressure may be
measured when PWD is available, else downhole pressure is calculated using Surface Pressure,
Mud Weight and TVD (interpolated using directional survey data from MD of the last casing
shoe).

The captured FIT/LOT data and interpreted results are used in offset well planning for planning
future wells and basin geomechanics analysis.

[Back to TOC](#TOC)

---


## Worked Example Record

An example record for a [FormationIntegrityTest is provided](work-product-component/FormationIntegrityTest.json).

<details>

<summary markdown="span">FormationIntegrityTest example <code>data</code> block.</summary>

<OsduImportJSON>[FormationIntegrityTest, full record](./work-product-component/FormationIntegrityTest.json#only.data)</OsduImportJSON>

```json
{
  "data": {
    "ResourceHomeRegionID": "partition-id:reference-data--OSDURegion:AWSEastUSA:",
    "ResourceHostRegionIDs": [
      "namespace:reference-data--OSDURegion:AWSEastUSA:"
    ],
    "ResourceCurationStatus": "partition-id:reference-data--ResourceCurationStatus:CREATED:",
    "ResourceLifecycleStatus": "partition-id:reference-data--ResourceLifecycleStatus:LOADING:",
    "Source": "Example Data Source",
    "ExistenceKind": "partition-id:reference-data--ExistenceKind:Actual:",
    "Datasets": [
      "namespace:dataset--AnyDataset:SomeUniqueAnyDatasetID:"
    ],
    "Artefacts": [
      {
        "RoleID": "partition-id:reference-data--ArtefactRole:AdaptedContent:",
        "ResourceKind": "partition-id:source_name:group_type--IndividualType:0.0.0",
        "ResourceID": "partition-id:dataset--AnyDataset:SomeUniqueAnyDatasetID:"
      }
    ],
    "IsExtendedLoad": true,
    "IsDiscoverable": true,
    "TechnicalAssurances": [
      {
        "TechnicalAssuranceTypeID": "partition-id:reference-data--TechnicalAssuranceType:Trusted:",
        "Reviewers": [
          {
            "RoleTypeID": "partition-id:reference-data--ContactRoleType:GeomechanicsSpecialist:",
            "OrganisationID": "partition-id:master-data--Organisation:SomeUniqueOrganisationID:",
            "Name": "Joe Bloggs"
          }
        ],
        "AcceptableUsage": [
          {
            "WorkflowUsageTypeID": "partition-id:reference-data--WorkflowUsageType:Geomechanics:",
            "WorkflowPersonaTypeID": "partition-id:reference-data--WorkflowPersonaType:Petrophysicist:"
          }
        ],
        "EffectiveDate": "2023-01-25",
        "Comment": "Interpretation completed. LOT achieved injection with 12.28ppg EMW"
      }
    ],
    "Name": "MC807 Well A FIT/LOT 23/1/2023",
    "Description": "FIT/LOT 18\" Hole Section 23/1/2023",
    "CreationDateTime": "2023-01-24T00:00:00.000Z",
    "Tags": [
      "Example Tags"
    ],
    "GeoContexts": [
      {
        "GeoPoliticalEntityID": "osdu:master-data--GeoPoliticalEntity:US:",
        "GeoTypeID": "osdu:reference-data--GeoPoliticalEntityType:Country:"
      },
      {
        "GeoPoliticalEntityID": "osdu:master-data--GeoPoliticalEntity:MC807:",
        "GeoTypeID": "osdu:reference-data--GeoPoliticalEntityType:LicenceBlock:"
      }
    ],
    "SubmitterName": "Joe Bloggs",
    "BusinessActivities": [
      "Example BusinessActivities"
    ],
    "AuthorIDs": [
      "JoeBloggs"
    ],
    "WellboreID": "partition-id:master-data--Wellbore:11000091175501:",
    "HoleSectionID": "partition-id:master-data--HoleSection:11000091175501HS04:",
    "OperationsReportID": "partition-id:master-data--OperationsReport:11000091175501DDR23:",
    "VerticalMeasurement": {
      "VerticalMeasurementUnitOfMeasureID": "osdu:reference-data--UnitOfMeasure:ft:",
      "VerticalCRSID": "osdu:reference-data--CoordinateReferenceSystem:Vertical:EPSG::8050:",
      "VerticalMeasurementSourceID": "osdu:reference-data--VerticalMeasurementSource:DRL:",
      "VerticalMeasurementPathID": "osdu:reference-data--VerticalMeasurementPath:TrueVerticalHeight:",
      "EffectiveDateTime": "2023-01-01T00:00:00.000Z",
      "VerticalMeasurement": 85.5,
      "VerticalMeasurementTypeID": "osdu:reference-data--VerticalMeasurementType:DrillFloor:",
      "VerticalMeasurementDescription": "DFE DW Pontus"
    },
    "TestDateTime": "2023-01-23T15:00:00.000Z",
    "TestType": "partition-id:reference-data--FormationIntegrityTestType:LOT:",
    "ShoeDiameter": 18.0,
    "ShoeMeasuredDepth": 7357.45,
    "ShoeTrueVerticalDepth": 7350,
    "BottomHoleMeasuredDepth": -7490,
    "BottomHoleTrueVerticalDepth": 7478,
    "HoleDiameter": 16.5,
    "IsRiserless": false,
    "IsMPD": false,
    "MudBaseType": "partition-id:reference-data--MudBaseType:Synthetic:",
    "SurfaceMudWeight": 11.3,
    "MudPlasticViscosity": 32,
    "MudYieldPoint": 26,
    "IsStaticMWMeasured": true,
    "IsPermeableFormationInOH": false,
    "StaticDownholeMudWeight": 11.53,
    "StaticDownholeMudWeightSource": "PWD",
    "SurfaceInitialOffsetPressure": 20.65,
    "PWDCementOffsetPressure": 0.0,
    "SurfaceInflectionPointTime": 244,
    "SurfaceInflectionPointVolume": 3.072,
    "SurfaceInflectionPointPressure": 284.66,
    "SurfaceCalculatedInflectionPointDHPressure": 4687,
    "SurfaceCalculatedInflectionPointDHEMW": 12.28,
    "SurfacePressureMax": 323.14,
    "SurfacePressureMaxTime": 322,
    "SurfacePressureMaximumVolume": 4.045,
    "SurfaceCalculatedDHPressureMax": 4725.5,
    "SurfaceCalculatedDHEMWMax": 12.38,
    "Surface5MinShutInTime": 629,
    "Surface5MinShutInPressure": 239.81,
    "SurfaceCalculated5MinDHShutInPressure": 4642.17,
    "SurfaceCalculated5MinDHShutInEMW": 12.16,
    "PWDSensorMeasuredDepth": 7300,
    "PWDSensorTrueVerticalDepth": 7294,
    "IsPWDInflectionPoint": true,
    "PWDInflectionPointTime": 248,
    "PWDInflectionPointVolume": 3.122,
    "PWDInflectionPointPressure": 4575.19,
    "PWDInflectionPointEMW": 12.07,
    "PWDMaxPressure": 4615.4,
    "PWDMaxPressureEMW": 12.18,
    "PWDMaxPressureTime": 322,
    "PWDMaxPressureVolume": 4.045,
    "PWD5MinShutInPressure": 4571.7,
    "PWD5MinShutInEMW": 12.06,
    "PWD5MinShutInTime": 629,
    "PWDAdjustedSurfaceMaxEMW": 12.18,
    "WellboreMarkerID": "partition-id:work-product-component--WellboreMarkerSet:WellboreMarkerSet-911bb71f-06ab-4deb-8e68-b8c9229dc76b:",
    "LithologyTypeID": "partition-id:reference-data--LithologyType:SHA:",
    "IsExtendedHole": true,
    "OpenHoleLength": 143,
    "IsLCMUsedInTest": false,
    "PumpRateAverage": 0.75,
    "IsTestContinuous": true,
    "HoleInclination": 14.78,
    "HoleAzimuth": 304.22,
    "PumpsOffTime": 329,
    "PumpedVolume": 4,
    "ReturnedVolume": 3,
    "InjectedVolume": 1,
    "ExpectedTestGradient": 12.3,
    "IsInterpreterReviewed": true,
    "Interpreter": "Joe Bloggs",
    "InterpretationDate": "2023-01-027T00:00:00",
    "TestResult": "partition-id:reference-data--FormationIntegrityTestResult:Injection:",
    "TestDataQualityIndicator": true,
    "InterpretedSurfaceInflectionPointPressure": 239.81,
    "SmoothingWindowSurface": 20,
    "SmoothingWindowPWD": 20,
    "SmoothingWindowPWDShiftTime": -527,
    "DailyOperationsTestRemarks": "Example Daily Operations Report Test Remarks",
    "InterpretersRemarks": "Example Interpreters Remarks",
    "CementInflectionPointDownholePressure": 4613,
    "CementInflectionPointDownholeEMW": 12.07,
    "CementMaxPointDownholePressure": 4655,
    "CementMaxPointDownholeEMW": 12.18,
    "Cement5MinShutInPointDownholePressure": 4571,
    "Cement5MinShutInPointDownholeEMW": 11.96,
    "CementUnitPumpsOffTime": 329,
    "VolumePressureResponses": [
      {
        "PressureDataSource": "partition-id:reference-data--FormationIntegrityPressureDataSource:Surface:",
        "SequenceNumber": 1,
        "ElapsedTime": 0,
        "PumpRate": 0,
        "PumpedVolume": 0,
        "SurfacePressure": 20.65,
        "SurfacePressureSource": "partition-id:reference-data--FormationIntegritySurfacePressureDataSource:CementGauge:",
        "PWDElapsedTime": 0,
        "PWDPressure": 4367.53,
        "FlowInRate": 0,
        "FlowOutRate": 0
      }
    ],
    "ExtensionProperties": {}
  }
}
```
</details>


<details>

<summary markdown="span">FormationIntegrityTest VolumePressureResponses <code>data.VolumePressureResponses[]</code> block.</summary>

<OsduImportJSON>[FormationIntegrityTest, full record](./work-product-component/FormationIntegrityTest.json#only.data.VolumePressureResponses)</OsduImportJSON>

```json
{
  "data": {
    "VolumePressureResponses": [
      {
        "PressureDataSource": "partition-id:reference-data--FormationIntegrityPressureDataSource:Surface:",
        "SequenceNumber": 1,
        "ElapsedTime": 0,
        "PumpRate": 0,
        "PumpedVolume": 0,
        "SurfacePressure": 20.65,
        "SurfacePressureSource": "partition-id:reference-data--FormationIntegritySurfacePressureDataSource:CementGauge:",
        "PWDElapsedTime": 0,
        "PWDPressure": 4367.53,
        "FlowInRate": 0,
        "FlowOutRate": 0
      }
    ]
  }
}
```
</details>

[Back to TOC](#TOC)

---