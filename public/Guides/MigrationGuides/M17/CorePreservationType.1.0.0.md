<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--CorePreservationType:1.0.1`

Changes between [osdu:wks:reference-data--CorePreservationType:1.0.0](../../../E-R/reference-data/CorePreservationType.1.0.0.md) and [osdu:wks:reference-data--CorePreservationType:1.1.0](../../../E-R/reference-data/CorePreservationType.1.0.1.md) are listed below.

The content of this reference list is now governed by PPDM. The description has been changed to _The technique to
preserve or stabilize the core sample on removal from the core barrel or at the time of sample extraction._ A number of
codes have been deprecated, see table below.

# Schema Changes

* Changed Description
  * Old Description: _The core preservation classification type, such as Wax-sealed, Resin-coated, Cling-wrap, etc._
  * New Description: **_The technique to preserve or stabilize the core sample on removal from the core barrel or at the time of sample extraction._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--CorePreservationType:ClingWrap | Cling-wrap | Core wrapped in plastic or cling wrap | Changes in AttributionAuthority |
| partition-id:reference-data--CorePreservationType:ClingWrapAndWaxSeal | Cling wrap and wax seal | Combination of cling-wrap and wax-sealed. Will be cling-wrapped first such as plastic cling-wrap. | Value added. |
| partition-id:reference-data--CorePreservationType:ClingWrapWaxSealed | Cling-wrap and Wax-sealed | DEPRECATED: Please use Code="ClingWrapAndWaxSeal" with Name="ClingWrapAndWaxSeal" instead. Combination of cling-wrap and wax-sealed. Will be cling-wrapped first such as plastic cling-wrap. | **DEPRECATED, superseded by Code: ClingWrapAndWaxSeal**<br>Changes in Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:Cryogenic | Cryogenic | Core is maintained at a freezing condition typically for saturated fluids. | Changes in AttributionAuthority |
| partition-id:reference-data--CorePreservationType:FiberglassSleeve | Fiberglass sleeve | The core is wrapped in glass-reinforced plastic. | Value added. |
| partition-id:reference-data--CorePreservationType:FoamInjected | Foam-injected | DEPRECATED: Please use Code="FoamInjection" with Name="FoamInjection" instead. Core injected with foam | **DEPRECATED, superseded by Code: FoamInjection**<br>Changes in Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:FoamInjection | Foam injection | Core injected with foam | Value added. |
| partition-id:reference-data--CorePreservationType:FoilWrapAndWaxSeal | Foil wrap and wax seal | Combination of foil-wrap and wax-sealed. Will be foil-wrapped first such as aluminum foil. | Value added. |
| partition-id:reference-data--CorePreservationType:FoilWrapWaxSealed | Foil-wrap and Wax-sealed | DEPRECATED: Please use Code="FoilWrapAndWaxSeal" with Name="FoilWrapAndWaxSeal" instead. Combination of foil-wrap and wax-sealed. Will be foil-wrapped first such as aluminum foil. | **DEPRECATED, superseded by Code: FoilWrapAndWaxSeal**<br>Changes in Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:Gypsum | Gypsum | Core injected with Gypsum. | Changes in AttributionAuthority |
| partition-id:reference-data--CorePreservationType:MineralOil | Mineral Oil | DEPRECATED: Please use Code="MineralOilCoat" with Name="MineralOilCoat" instead. Preserved in mineral oil typically for shale samples reserved for rock mechanics | **DEPRECATED, superseded by Code: MineralOilCoat**<br>Changes in Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:MineralOilCoat | Mineral oil coat | Preserved in mineral oil typically for shale samples reserved for rock mechanics | Value added. |
| partition-id:reference-data--CorePreservationType:NoPreservation | No preservation | Non-preserved, standard core. | Value added. |
| partition-id:reference-data--CorePreservationType:ResinCoat | Resin coat | Core coated in resin | Value added. |
| partition-id:reference-data--CorePreservationType:ResinCoated | Resin-coated | DEPRECATED: Please use Code="ResinCoat" with Name="ResinCoat" instead. Core coated in resin | **DEPRECATED, superseded by Code: ResinCoat**<br>Changes in Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:Standard | Standard | DEPRECATED: Please use Code="NoPreservation" with Name="NoPreservation" instead. Non-preserved, standard core. | **DEPRECATED, superseded by Code: NoPreservation**<br>Changes in Name, Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:TeflonEncapsulation | Teflon encapsulation | Sample is wrapped in a teflon sleeve with a screen on one or both ends. | Changes in Name, Description, AttributionAuthority |
| partition-id:reference-data--CorePreservationType:WaxSeal | Wax seal | Core sealed in wax, either with or without inner barrel. | Value added. |
| partition-id:reference-data--CorePreservationType:WaxSealed | Wax-sealed | DEPRECATED: Please use Code="WaxSeal" with Name="WaxSeal" instead. Core sealed in wax, either with or without inner barrel. | **DEPRECATED, superseded by Code: WaxSeal**<br>Changes in Description, AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record CorePreservationType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/CorePreservationType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)