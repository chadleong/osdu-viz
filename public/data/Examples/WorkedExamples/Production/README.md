<a name="TOC"></a>

**Table of Contents**

[[_TOC_]]

# Production Reporting

A worked example for production data

## Dataset Description

- This Dataset is an extract from a Public Data - Accessible from the UK North Sea authorities (NSTA) - from the field
  Singleton.
- This has been prepared from HCL.
- The content is shared on the [_HCL-load-prod-data.xlsx_ file](HCL-load-prod-data.xlsx) - we focused on 13 series - for 5 measurements
    * Date-Time [Column N]
    * Oil Production Mass [Column O]
    * Oil Production Volume [Column P]
    * Oil Production Rate [Column Q]
    * Oil Production Density [Column R]
    * Associated Gas Production Mass [Column S]
    * Associated Gas Production Volume in KiloStandardCubicMeter [Column T]
    * Associated Gas Production Rate [Column U]
    * Associated Gas Production Density [Column V]
    * Injection Water Volume [Column AM]
    * Injection Water Rate [Column AN]
    * Production Water Volume [Column AO]
    * Production Water Rate [Column AP]

---

[Back to TOC](#TOC)

## Production Data Characterization
The ProductionValues 2.0.0 Work Product Component introduces enhancements aimed at improving the reliability and characterization of production datasets. Three examples are included to demonstrate how production data are populated in accordance with this schema.

-	Example 1: Population of measured hydrocarbon products. This Dataset is an extract from a Public Data - Accessible from the UK North Sea authorities (NSTA) - from the field Singleton.
- Example 2: Population of daily well production allocation
- Example 3: Population of monthly field measured gas production

## Data Mapping and Population
### Example 1
This example is the original scenario used in the worked examples to illustrate the population of ProductionValues 1.1.1. With the introduction of the new structure, populating this dataset under the ProductionValues 2.0.0 schema now requires two schema instances – one for production products and another for injection products.
<details>
<summary markdown="span"> ProductionValues 2.0.0 Schema Instance - Production Products </summary>

```json
{
"Remarks" : "Monthly production / injection for the Singleton field",
"ProductionMetricValues" :
[ {
"UnitQuantityID" : "namespace:reference-data--UnitQuantity:mass:",
"UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:t:",
"PropertyID" : "namespace:reference-data--ProductionPropertyType:Mass:",
"ProductID" : "namespace:reference-data--ProductKind:Oil:",
"ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
"DatasetID" : "HCL-load-prod-data",
"DDMSDatasetID" : "null",
"DatasetColumn" : "OILPRODMAS"
  }, {
      "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume:",
      "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:m3:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Volume:",
       "ProductID" : "namespace:reference-data--ProductKind:Oil:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "OILPRODM3"
  }, {
      "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume%20per%20time:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:1E6%20bbl%2Fd:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Rate:",
       "ProductID" : "namespace:reference-data--ProductKind:Oil:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "OILPRODMBD"
  }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:mass%20per%20volume:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:kg%2Fm3:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Density:",
       "ProductID" : "namespace:reference-data--ProductKind:Oil:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "OILPRDDENS"
   }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:mass:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:t:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Mass:",
       "ProductID" : "namespace:reference-data--ProductKind:AssociatedGas:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "AGASPRODMA"
  }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:m3:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Volume:",
       "ProductID" : "namespace:reference-data--ProductKind:AssociatedGas:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "AGASPROKSM"
  }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume%20per%20time:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:1E6%20ft3%2Fd:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Rate:",
       "ProductID" : "namespace:reference-data--ProductKind:AssociatedGas:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "AGASPROMMS"
  }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:mass%20per%20volume:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:kg%2Fm3:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Density:",
       "ProductID" : "namespace:reference-data--ProductKind:AssociatedGas:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "AGASPRODEN"
  }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:m3:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Volume:",
       "ProductID" : "namespace:reference-data--ProductKind:Water:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "WATPRODVOL"
   }, {
       "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume%20per%20time:",
       "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:1E6%20bbl%2Fd:",
       "PropertyID" : "namespace:reference-data--ProductionPropertyType:Rate:",
       "ProductID" : "namespace:reference-data--ProductKind:Water:",
       "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
       "DatasetID" : "HCL-load-prod-data",
       "DDMSDatasetID" : "null",
       "DatasetColumn" : "WATPRODMBD"
  } ]
}
```
</details>

<details>
<summary markdown="span"> ProductionValues 2.0.0 Schema Instance - Injection Products </summary>

```json
{
"Remarks" : "Monthly production / injection for the Singleton field",
"ProductionMetricValues" :
[ {
        "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume:",
        "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:m3:",
        "PropertyID" : "namespace:reference-data--ProductionPropertyType:Volume:",
        "ProductID" : "namespace:reference-data--ProductKind:Water:",
        "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
        "DatasetID" : "HCL-load-prod-data",
        "DDMSDatasetID" : "null",
        "DatasetColumn" : "INJWATVOL"
    }, {
        "UnitQuantityID" : "namespace:reference-data--UnitQuantity:volume%20per%20time:",
        "UnitOfMeasureID" : "namespace:reference-data--UnitOfMeasure:1E6%20bbl%2Fd:",
        "PropertyID" : "namespace:reference-data--ProductionPropertyType:Rate:",
        "ProductID" : "namespace:reference-data--ProductKind:Water:",
        "ParameterKindID" : "namespace:reference-data--ParameterKind:Double:",
        "DatasetID" : "HCL-load-prod-data",
        "DDMSDatasetID" : "null",
        "DatasetColumn" : "INJWATMBD"
    } ]
}
```
</details>

### Example 2
This example illustrates a real oil and gas use case, which is the daily allocated production for well.
<details>
<summary markdown="span"> ProductionValues 2.0.0 Schema Instance – Daily allocated production for well </summary>

```json
{
    "Remarks": "Daily allocated production well ZXXE-A001-TS",
    "ReportingEntityID": "namespace:master-data--Well:ZXXE-A001-TS:",
    "StartDateTime": "2022-05-17",
    "EndDateTime": "2022-05-22",
    "NominalPeriodID": "namespace:reference-data--ReportingPeriod:Day:",
    "QuantityMethodID": "namespace:reference-data--QuantityMethod:Allocated:",
    "DurationContextID": "namespace:reference-data--DurationContext:UptimeHours:",
    "VolumeFlowMeasurementTypeID": "namespace:reference-data--VolumeFlowMeasurementType:Production:",
    "ValueContext": {
      "DowntimeEventID": null,
      "ContextType": null
    },
    "ReservoirModelScenarioID": null,
    "AmendReasonID": null,
    "MeasurementConditions": {
      "Pressure": 1.0,
      "Temperature": 15.0,
      "IsStandardConditions": true,
      "NonStandardConditionsReference": null
    },
    "ProductionMetricValues": [
      {
        "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
        "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume%20per%20time:",
        "ProductID": "namespace:reference-data--ProductKind:Gas:",
        "DispositionID": "namespace:reference-data--DispositionType:Sold:",
        "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
        "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:1000%20m3%2Fd:",
        "DatasetID": "Well_Production_Allocation_Day_0001",
        "DDMSDatasetID": Null,
        "DatasetColumn": "ALLOCATEDGASVOLUME"
      },
      {
        "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
        "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume%20per%20time:",
        "ProductID": "namespace:reference-data--ProductKind:Oil:",
        "DispositionID": "namespace:reference-data--DispositionType:Sold:",
        "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
        "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:bbl%2Fd:",
        "DatasetID": "Well_Production_Allocation_Day_0001",
        "DDMSDatasetID": Null,
        "DatasetColumn": " ALLOCATEDNETOILVOL"
      },
      {
        "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
        "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume%20per%20time:",
        "ProductID": "namespace:reference-data--ProductKind:Condensate:",
        "DispositionID": "namespace:reference-data--DispositionType:Sold:",
        "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
        "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:bbl%2Fd:",
        "DatasetID": "Well_Production_Allocation_Day_0001",
        "DDMSDatasetID": Null,
        "DatasetColumn": " ALLOCATEDCONDYVOL"
      }
    ]
}
```
</details>

### Example 3
This example illustrates another real oil and gas use case, which is the monthly measured production for field.
<details>
<summary markdown="span"> ProductionValues 2.0.0 Schema Instance – Monthly measured production for field </summary>

```json
{
  "Remarks": "Monthly measured gas production for Field BXX",
  "ReportingEntityID": "osdu:master-data--Field:FieldBXX:",
  "StartDateTime": "2019-04-01",
  "EndDateTime": "2019-04-01",
  "NominalPeriodID": "osdu:reference-data--ReportingPeriod:Month:",
  "QuantityMethodID": "osdu:reference-data--QuantityMethod:Measured:",
  "DurationContextID": "osdu:reference-data--DurationContext:UptimeHours:",
  "VolumeFlowMeasurementTypeID": "osdu:reference-data--VolumeFlowMeasurementType:Production:",
  "ValueContext": "",
  "ReservoirModelScenarioID": "",
  "AmendReasonID": "",
  "MeasurementConditions": {
  "Pressure": 1.0,
  "Temperature": 15.0,
  "IsStandardConditions": true,
  "NonStandardConditionsReference": "NA"
  },
  "ProductionMetricValues": [
    {
      "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
      "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume%20per%20time:",
      "ProductID": "namespace:reference-data--ProductKind:Gas:",
      "DispositionID": "namespace:reference-data--DispositionType:Sold:",
      "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
      "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:1000%20m3%2Fd:",
      "DatasetID": "Field_Production_Measured_Month_0001",
      "DatasetColumn": "GROSSVOLGASMEASURED",
      "DDMSDatasetID": null
    },
    {
      "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
      "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume%20per%20time:",
      "ProductID": "namespace:reference-data--ProductKind:Gas:",
      "DispositionID": "namespace:reference-data--DispositionType:Produced:",
      "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
      "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:1000%20m3%2Fd:",
      "DatasetID": "Field_Production_Measured_Month_0001",
      "DatasetColumn": "GROSSVOLGASMEASURED",
      "DDMSDatasetID": null
    },
    {
      "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
      "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume%20per%20time:",
      "ProductID": "namespace:reference-data--ProductKind:Gas:",
      "DispositionID": "namespace:reference-data--DispositionType:Flared:",
      "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
      "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:1000%20m3%2Fd:",
      "DatasetID": "Field_Production_Measured_Month_0001",
      "DatasetColumn": "GROSSVOLGASMEASURED",
      "DDMSDatasetID": null
    }
  ]
}
```
</details>

## Population DDMS datasets
In addition to representing raw data stored in tabular form (ex, CSV), ProductionValues 2.0.0 allows reference to bulk data in Production DDMS. In this case, the DDMSDatasets[..] collection should contain a URN (Uniform Resource Name) that PDDMS resolves as a set of production data streams or timeseries. The result will be a batch of all the time-series data streams from ProductionMetricValues[..]. URN (Uniform Resource Name) is used for pointing to the Production DDMS bulk data associated with the ProductionValues record.

Example: GET /api/pddms/v1/production-values/0e5335eb-c591-456f-a97b-4625c76f189a/timeseries
DDMSDatasetID can be used to retrieve a specific time series from the collection. It is the identifier of the specific property data stream (time-series) in Production PDDMS.

Example: GET /api/pddms/v1/production-values/0e5335eb-c591-456f-a97b-4625c76f189a/timeseries/ bb090fac-d486-491e-9978-4f81deabdca8
The examples above show only basic scenarios. To view the full API capabilities, please refer to the PDDMS documentation.

Note 1: DDMSDatasetID must be unique within the given ProductionValues record. Each time-series could be uniquely identified by a combination of ProductionValues ID and DDMSDatasetID.

Note 2: Storing bulk data in CSV doesn’t prevent you from storing it in PDDMS and vice versa.

<details>
<summary markdown="span"> Production DDMS Population</summary>

```json
{
  "id": "namespace:work-product-component--ProductionValues:FieldWaddockCross-MonProdHCL",
  "kind": "osdu:wks:work-product-component--ProductionValues:2.0.0",
  "version": "1562860069992332",
  "data": {
    "Datasets": [
      {
        "namespace:dataset--AnyDataset:Well_Production_Allocation_Day_0001": ""
      }
    ],
    "DDMSDatasets": [
      {
        "urn:":"pddms://production-values/namespace:work-product-component--ProductionValues:FieldWaddockCross-MonProdHCL"
      }
    ],
    "ProductionMetricValues": [
      {
        "PropertyID": "namespace:reference-data--ProductionPropertyType:Mass:",
        "UnitQuantityID": "namespace:reference-data--UnitQuantity:mass:",
        "ProductID": "namespace:reference-data--ProductKind:Oil:",
        "DispositionID": "namespace:reference-data--DispositionType:Transferred:",
        "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
        "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:t:",
        "DatasetID": "HCL-load-prod-data",
        "DatasetColumn": "OILTOPRODAS",
        "DDMSDatasetID": "bb09fac4-d486-491e-9978-4f81deadbcA8"
      },
      {
        "PropertyID": "namespace:reference-data--ProductionPropertyType:Volume:",
        "UnitQuantityID": "namespace:reference-data--UnitQuantity:volume:",
        "ProductID": "namespace:reference-data--ProductKind:Oil:",
        "DispositionID": "namespace:reference-data--DispositionType:Transferred:",
        "ParameterKindID": "namespace:reference-data--ParameterKind:Double:",
        "UnitOfMeasureID": "namespace:reference-data--UnitOfMeasure:m3:",
        "DatasetID": "HCL-load-prod-data",
        "DatasetColumn": "OILTOPROD3",
        "DDMSDatasetID": "e4c0b182-920c-4d5b-8253-169166899d1d"
      }
    ],
    "ExtensionProperties": {}
  }
}
```
</details>

[Back to TOC](#TOC)