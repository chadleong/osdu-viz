<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellPressureTestValidityStatus:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--WellPressureTestValidityStatus:1.0.0](../../../E-R/reference-data/WellPressureTestValidityStatus.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellPressureTestValidityStatus:Dry | Dry | Flag a test which does not give valid formation pressure. Test with large drawdown and slow build up.  | Value added. |
| partition-id:reference-data--WellPressureTestValidityStatus:Failed | Failed | Used to flag a failed test - not to be used for processing and interpretation. Can result from many causes - such as unsuccessful, non-complete, non-cohesive joint between the acquisition string and the borehole or completion | Changes in ID |
| partition-id:reference-data--WellPressureTestValidityStatus:LostSeal | Lost seal | Flag a test which does not give valid formation pressure. Packer seal fails – pressure builds back to hydrostatic | Value added. |
| partition-id:reference-data--WellPressureTestValidityStatus:ProbePlugging | Probe Plugging | Probe OR Flow-Line plugging. Flag a test which does not give valid formation pressure. By fine grain material from the mud solids or from the formation being sampled. | Value added. |
| partition-id:reference-data--WellPressureTestValidityStatus:Supercharged | Supercharged | Flag a test which does not give valid formation pressure. When the overbalance of mud pressure into the formation has not dissipated from the region sampled by the formation pressure test by the time that the formation pressure test takes its pressure. | Value added. |
| partition-id:reference-data--WellPressureTestValidityStatus:Tight | Tight | Flag a test which does not give valid formation pressure. Big drawdown, little or no build up (extreme version of the Dry Test). | Value added. |
| partition-id:reference-data--WellPressureTestValidityStatus:Valid | Valid | Flag a valid test - usable for processing, interpretation. | Changes in ID |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook WellPressureTestValidityStatus.1.xlsx](../../../ReferenceValues/Authoring/WellPressureTestValidityStatus.1.xlsx)
* &rarr; [Manifest record WellPressureTestValidityStatus.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellPressureTestValidityStatus.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)