<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--PressureMeasurementType:1.0.1`

Changes between [osdu:wks:reference-data--PressureMeasurementType:1.0.0](../../../E-R/reference-data/PressureMeasurementType.1.0.0.md) and [osdu:wks:reference-data--PressureMeasurementType:1.0.1](../../../E-R/reference-data/PressureMeasurementType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The enumeration for PressureMeasurement types like Ambient or Overburden._
  * New Description: **_The actual or theoretical pressure conditions applied to a rock or fluid sample during an experiment._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--PressureMeasurementType:Ambient | Ambient | Ambient Conditions at standard temperature and pressure | Changes in NameAlias, AttributionAuthority |
| partition-id:reference-data--PressureMeasurementType:NetConfiningStress | Net confining stress | Assumed stress conditions that represent overburden effects minus the effects of assumed pore pressures | Value added. |
| partition-id:reference-data--PressureMeasurementType:Overburden | Overburden | Calculated overburden conditions that represent assumed reservoir temperature/pressure | Changes in NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--PressureMeasurementType:Reservoir | Reservoir | The pressure that represents assumed or measured reservoir temperature/pressure conditions. | Value added. |
| partition-id:reference-data--PressureMeasurementType:Saturation | Saturation | The pressure at which the first bubble of gas appears at a specific temperature (assume reservoir temp if not specified.) | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Sample_Pressure_Measurement_Type)
* &rarr; [Manifest record PressureMeasurementType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/PressureMeasurementType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)