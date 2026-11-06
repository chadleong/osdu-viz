<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--WellActivity:1.1.0`

[`WellActivity:1.1.0`](../../../E-R/master-data/WellActivity.1.1.0.md) is now able to carry rig assignments. No
migration is required (new property).

An example is given in the [WellExecution](../../../Examples/WorkedExamples/WellExecution/README.md) context:

<details>

<summary markdown="span"><code>data.RigAssignments</code> Example</summary>

<OsduImportJSON>[WellActivity JSON, Full](../../../Examples/WorkedExamples/WellExecution/master-data/WellActivity.1.0.0.json#only.data.RigAssignments)</OsduImportJSON>

```json
{
  "data": {
    "RigAssignments": [
      {
        "RigID": "partition-id:master-data--Rig:R-5394485a-a20b-49ae-bfe1-4220c5b694aa:",
        "StartDateTime": "2022-01-19T06:00:00.00Z",
        "EndDateTime": "2020-02-15T15:00:00.00Z",
        "Remark": "Tubing repair rig deployment"
      }
    ]
  }
}
```
</details>


| Cumulative Name                                                                 | Value Type         | Title           | Description                                                                                                                                  | Migration/Recommendation |
|---------------------------------------------------------------------------------|--------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| _data.RigAssignments[]_                                                         | _array of objects_ | _RigAssignment_ | _List of Rigs or Work Units performing the Well Activity Fragment Description: Association of a rig to a particular well and well activity._ | New                      |
| data.RigAssignments[].RigID &rarr; [Rig](../../../E-R/master-data/Rig.1.1.0.md) | string             | Rig ID          | A link to the Rig                                                                                                                            | New                      |
| data.RigAssignments[].StartDateTime                                             | string             | Start Date Time | The start time for this rig assignment to the well activity                                                                                  | New                      |
| data.RigAssignments[].EndDateTime                                               | string             | End Date Time   | The end time for this rig assignment to the well activity                                                                                    | New                      |
| data.RigAssignments[].Remark                                                    | string             | Remark          | Remarks related to this rig assignment                                                                                                       | New                      |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
