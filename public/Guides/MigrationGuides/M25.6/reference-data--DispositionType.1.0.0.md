<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--DispositionType:1.0.1`

Changes between [osdu:wks:reference-data--DispositionType:1.0.0](../../../E-R/reference-data/DispositionType.1.0.0.md) and [osdu:wks:reference-data--DispositionType:1.0.1](../../../E-R/reference-data/DispositionType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Describes the interim or final stages of movement, or use, of product within the value stream._
  * New Description: **_The result of a stage of movement, or use, of a product within the value stream of a well or facility._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--DispositionType:Buyback | Buyback | The product was purchased or transferred from an external facility for use in lease or well operations. | Changes in Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--DispositionType:Deferred | Deferred | Production values are associated to a planned or unplanned downtime event | Changes in Description, AttributionAuthority |
| partition-id:reference-data--DispositionType:Disposal | Disposal | DEPRECATED: Please use Code="Disposed" with Name="Disposed" instead. The product was disposed by an unspecific method or transaction. | **DEPRECATED, superseded by Code: Disposed**<br>Changes in InactiveIndicator, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--DispositionType:Disposed | Disposed | The product was disposed by an unspecific method or transaction. | Value added. |
| partition-id:reference-data--DispositionType:Flared | Flared | The product was burned at the lease or well. | Changes in Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--DispositionType:Flowback | Flowback | The product was used in a downhole operation, especially hydraulic fracturing, and subsequently recovered at the surface during clean up of the well for production. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--DispositionType:Fuel | Fuel | The product was consumed as fuel at the lease or well. | Changes in NameAlias, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--DispositionType:Gas%20Lift | Gas Lift | DEPRECATED: Please use Code="GasLift" with Name="Gas lift" instead.  | **DEPRECATED, superseded by Code: GasLift**<br>Changes in InactiveIndicator, AttributionPublication, AttributionAuthority, Description |
| partition-id:reference-data--DispositionType:GasLift | Gas lift | The product was injected into a producing well for artificial lift. | Value added. |
| partition-id:reference-data--DispositionType:LineFill | Line fill | The product was used to fill a pipeline. | Value added. |
| partition-id:reference-data--DispositionType:Lost%20or%20Stolen | Lost or Stolen | DEPRECATED: Please use Code="LostOrStolen" with Name="Lost or stolen" instead.  | **DEPRECATED, superseded by Code: LostOrStolen**<br>Changes in InactiveIndicator, AttributionPublication, AttributionAuthority, Description |
| partition-id:reference-data--DispositionType:LostOrStolen | Lost or stolen | The product was lost or stolen. | Value added. |
| partition-id:reference-data--DispositionType:Reinjected | Reinjected | The product was subsequently injected into the same or another well for storage, disposal, or enhanced recovery. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--DispositionType:Sold | Sold | The product was sold and transported to the buyer. | Changes in Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--DispositionType:Transferred | Transferred | The product was moved, but not sold, from one physical location to another. | Changes in Description, AttributionAuthority |
| partition-id:reference-data--DispositionType:Used-on-site | Used-on-site | DEPRECATED: Please use Code="Fuel" with Name="Fuel" instead. The product was consumed for an operational purpose at the lease or well. | **DEPRECATED, superseded by Code: Fuel**<br>Changes in InactiveIndicator, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--DispositionType:Vented | Vented | The product was released into the atmosphere. | Changes in Description, AttributionPublication, AttributionAuthority |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Disposition_Type)
* &rarr; [Manifest record DispositionType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/DispositionType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)