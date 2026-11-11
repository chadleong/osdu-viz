[[_TOC_]]

# Reservoir data workflow ingestion

## Ingestion use case

The use case is the following: after creating a structural model, structural model inputs (horizon data points, fault sticks) and outputs (set of triangulated surfaces for fault network and horizon sets) are exported into a RESQMLTM file (FirstStructuralModel.epc and FirstStructuralModel.hdf5).


The file will be uploaded and OSDU ingestion will be started (and data will be registered in Reservoir DDMS)

## Ingestion steps

1.	A RESQMLTM 2.0.1 file is uploaded to the cloud (FirstStructuralModel.epc and FirstStructuralModel.hdf5)
2.	RESQML Workflow ingestion is launched through AirFlow DAG, generating a Manifest. The Manifest contains different part:
- Datasets to represent .hdf5 + .epc
- MasterData for high-level reservoir description
- WP: one work product
- WPCs: one work product component per .xml file in the .epc file (might be up to 100 based on the number of faults and horizons in the model)




3.	The manifest is validated and sent to DocumentDB. The ingestion service receives the request, including manifest payload.
 1. Validate the payload contents,
      1. Validate the manifest against the
         [manifest schema](../../../Generated/manifest/Manifest.1.0.0.json).

<details>

<summary markdown="span">manifest schema</summary>

<OsduImportJSON>[manifest schema](../../../Generated/manifest/Manifest.1.0.0.json)</OsduImportJSON>

```json
{
  "x-osdu-license": "Copyright 2021, The Open Group \\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.",
  "$id": "https://schema.osdu.opengroup.org/json/manifest/Manifest.1.0.0.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "x-osdu-schema-source": "osdu:wks:Manifest:1.0.0",
  "title": "Load Manifest Schema",
  "description": "Load manifest applicable for all types defined as 'kind', i.e. registered as schemas with the Schema Service. It supports loading of individual 'records' of any group-type or combinations. The load sequence follows a well-defined sequence. The 'ReferenceData' array is processed first (if populated). The 'MasterData' array is processed second (if populated) second. The 'Data' structure is processed last (if populated). Inside the 'Data' property the 'Datasets' array is processed first, followed by the 'WorkProductComponents' array, the 'WorkProduct' is processed last. Any arrays are ordered. should there be interdependencies, the dependent items must be placed behind their relationship targets, e.g. a master-data Well record must placed in the 'MasterData' array before its Wellbores.",
  "type": "object",
  "properties": {
    "kind": {
      "description": "The schema identification for the manifest record following the pattern {Namespace}:{Source}:{Type}:{VersionMajor}.{VersionMinor}.{VersionPatch}. The versioning scheme follows the semantic versioning, https://semver.org/.",
      "title": "Manifest  Kind",
      "type": "string",
      "pattern": "^[\\w\\-\\.]+:[\\w\\-\\.]+:[\\w\\-\\.]+:[0-9]+.[0-9]+.[0-9]+$",
      "example": "osdu:wks:Manifest:1.0.0"
    },
    "ReferenceData": {
      "description": "Reference-data are submitted as an array of records.",
      "type": "array",
      "items": {
        "$ref": "GenericReferenceData.1.0.0.json"
      }
    },
    "MasterData": {
      "description": "Master-data are submitted as an array of records.",
      "type": "array",
      "items": {
        "$ref": "GenericMasterData.1.0.0.json"
      }
    },
    "Data": {
      "description": "Manifest schema for work-product, work-product-component, dataset ensembles. The items in 'Datasets' are processed first since they are referenced by 'WorkProductComponents' ('data.DatasetIDs[]' and 'data.Artefacts[].ResourceID'). The WorkProduct is processed last collecting the WorkProductComponents.",
      "type": "object",
      "properties": {
        "WorkProduct": {
          "description": "The work-product component capturing the work-product-component records belonging to this loading/ingestion transaction.",
          "$ref": "GenericWorkProduct.1.0.0.json"
        },
        "WorkProductComponents": {
          "description": "The list of work-product-components records. The record ids are internal surrogate keys enabling the association of work-product-component records with the work-product records.",
          "type": "array",
          "items": {
            "$ref": "GenericWorkProductComponent.1.0.0.json"
          }
        },
        "Datasets": {
          "description": "The list of 'Datasets' or data containers holding the actual data. The record ids are usually internal surrogate keys enabling the association of dataset records with work-product-component records, namely via 'DatasetIDs' and 'Artefacts.ResourceID' (both referring to 'dataset' group-type entity types).",
          "type": "array",
          "items": {
            "$ref": "GenericDataset.1.0.0.json"
          }
        }
      }
    }
  },
  "x-osdu-inheriting-from-kind": []
}
```
</details>

5. Iterate over the items in the manifest, for each item
   1. Resolve the item `kind` with the Schema Service to obtain the item schema.
   1. Validate the item against the item resolved schema.
6. Iterate over the items in the manifest, for each item
   1. Determine whether a specific workflow has been registered with
      the `kind`.
      * if yes, invoke the workflow with the item in context
      * else, invoke a default workflow, which simply sends the item to the Storage Service.

7. In parallel of RESQML workflow ingestion, data (.hdf5 + .epc) is sent to ReservoirDDMS
   1. ETP API is used for communication to the Reservoir DDMS
   2. xml documents (zipped in .epc file) and binary data arrays are sent and stored to ReservoirDDMS tables