<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellRole:1.0.0`

Changes between [osdu:wks:reference-data--WellRole:1.0.0](../../../E-R/reference-data/WellRole.1.0.0.md) and [osdu:wks:reference-data--WellRole:1.0.0](../../../E-R/reference-data/WellRole.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellRole:Inject | Inject | A Role of Inject is to force fluids into the reservoir to enhance recovery of hydrocarbons. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Inject.MultipleProducts | Inject.Multiple Products | In a Multiple Products injector, the injection alternates between products. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Inject.SingleProduct | Inject.Single Product | In a Single Product injector, the injection does not alternate between products. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:NoRole | No role | A facet value of No Role indicates the well or component does not have a current configuration that would accomplish any specific purpose. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Produce | Produce | A Role of Produce is to extract products for commercial purposes. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:ProduceInject | Produce/Inject | A Role of Produce/Inject can both produce and inject, either cyclically or simultaneously. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:ProduceInject.Cyclic | Produce/Inject.Cyclic | Cyclic allows a well to alternate between the roles of Produce and Inject. A well with a qualifier of cyclic does not require regulatory approvals to change between producing and injecting. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:ProduceInject.Simultaneous | Produce/Inject.Simultaneous | Simultaneous may be used when a well or a wellbore is simultaneously producing and injecting to and from the subsurface. This may be by a dual string installation, or by an annulus and production string combination. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Research | Research | A Role of Research describes a well drilled primarily with the intention of gathering data. The information may include stratigraphy, temperature gradient, or evaluation of new technologies. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Service | Service | A Role of Service provides maintenance and monitoring; for example, fluid monitoring, blowout relief, borehole re-acquisition. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Service.Disposal | Service.Disposal | Disposal is for the purpose of permanent injection of a waste fluid into a reservoir. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Service.Observation | Service.Observation | Observation is for the purpose of monitoring subsurface conditions. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Service.Relief | Service.Relief | Relief is for the purpose of intersecting another well where control has been or may be lost (e.g. blowout). | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Service.Storage | Service.Storage | Storage is for the purpose of injection and subsequent recovery of a fluid into / out of a reservoir. | Changes in AttributionAuthority |
| partition-id:reference-data--WellRole:Service.Supply | Service.Supply | Supply is for the purpose of obtaining fluids for operations. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record WellRole.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellRole.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)