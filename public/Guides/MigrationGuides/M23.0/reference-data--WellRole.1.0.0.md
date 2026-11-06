<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellRole:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--WellRole:1.0.0](../../../E-R/reference-data/WellRole.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellRole:Inject.MultipleProducts | Multiple Products | In a Multiple Products injector, the injection alternates between products. | Changes in Name |
| partition-id:reference-data--WellRole:Inject.SingleProduct | Single Product | In a Single Product injector, the injection does not alternate between products. | Changes in Name |
| partition-id:reference-data--WellRole:ProduceInject.Cyclic | Cyclic | Cyclic allows a well to alternate between the roles of Produce and Inject. A well with a qualifier of cyclic does not require regulatory approvals to change between producing and injecting. | Changes in Name |
| partition-id:reference-data--WellRole:ProduceInject.Simultaneous | Simultaneous | Simultaneous may be used when a well or a wellbore is simultaneously producing and injecting to and from the subsurface. This may be by a dual string installation, or by an annulus and production string combination. | Changes in Name |
| partition-id:reference-data--WellRole:Service.Disposal | Disposal | Disposal is for the purpose of permanent injection of a waste fluid into a reservoir. | Changes in Name |
| partition-id:reference-data--WellRole:Service.Observation | Observation | Observation is for the purpose of monitoring subsurface conditions. | Changes in Name |
| partition-id:reference-data--WellRole:Service.Relief | Relief | Relief is for the purpose of intersecting another well where control has been or may be lost (e.g. blowout). | Changes in Name |
| partition-id:reference-data--WellRole:Service.Storage | Storage | Storage is for the purpose of injection and subsequent recovery of a fluid into / out of a reservoir. | Changes in Name |
| partition-id:reference-data--WellRole:Service.Supply | Supply | Supply is for the purpose of obtaining fluids for operations. | Changes in Name |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Well_Role)
* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://ppdm.org/ppdm/PPDM/IPDS/Well_Status_Classification/PPDM/Well_Status_Classification.aspx)
* &rarr; [Manifest record WellRole.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellRole.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)