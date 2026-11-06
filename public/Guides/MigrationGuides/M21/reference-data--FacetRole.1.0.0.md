<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--FacetRole:1.1.0`

Changes between [osdu:wks:reference-data--FacetRole:1.0.0](../../../E-R/reference-data/FacetRole.1.0.0.md) and [osdu:wks:reference-data--FacetRole:1.1.0](../../../E-R/reference-data/FacetRole.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.FacetTypeID &rarr; [FacetType](../../../E-R/reference-data/FacetType.1.0.0.md)|string|Facet Type ID|The FacetType, to which this FacetRole belongs to. When used in AbstractFacet, the FacetRoleID's data.FacetTypeID must match the AbstractFacet's FacetTypeID (business rule).|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--FacetRole:average | average | Linked to FacetType statistics: Indicates that property value defines a average (i.e. average property)  | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:condensate | condensate | Linked to FacetType what: Indicates that condensate is the element a measure is based on.  | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:cumulative | cumulative | Linked to FacetType statistics: Indicates that the associated values are cumulated. Example : "Cumulative" for a property kind "Volume" indicates that the measured volume have been cumulated. | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:gas | gas | Linked to FacetType what: Indicates that the gas is the element a measure is based on. Example "gas" for a property kind "saturation" indicates that the quantity is a "saturation" of "gas". | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:gross | gross | Linked to FacetType netgross: Indicates that the property is of kind gross,for instance indicates that the spatial support of a property is averaged over the gross rock  | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:I | I | Linked to FacetType direction: Indicates that the property is aligned with the I axis. For instance permeability in the I direction. | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:I%2B | I+ | Linked to FacetType direction: Indicates that the property is directional along I direction for a reservoir grid (along increasing I values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:I- | I- | Linked to FacetType direction: Indicates that the property is directional along I direction for a reservoir grid (along decreasing I values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:J | J | Linked to FacetType direction: Indicates that the property property is aligned with the J axis. For instance permeability in the J direction. | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:J%2B | J+ | Linked to FacetType direction: Indicates that the property is directional along J direction for a reservoir grid (along increasing J values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:J- | J- | Linked to FacetType direction: Indicates that the property is directional along J direction for a reservoir grid (along decreasing J values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:K | K | Linked to FacetType direction: Indicates that the  property is aligned with the K axis. For instance vertical permeability (along K). | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:K%2B | K+ | Linked to FacetType direction: Indicates that the property is directional along K direction for a reservoir grid (along increasing K values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:K- | K- | Linked to FacetType direction: Indicates that the property is directional along K direction for a reservoir grid (along decreasing K values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:maximum | maximum | Linked to FacetType statistics: Indicates that property value defines a maximum  | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:maximum%20threshold | maximum threshold | Linked to FacetType statistics: Indicates that property value defines a maximum threshold | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:minimum | minimum | Linked to FacetType statistics: Indicates that property value defines a minimum  | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:minimum%20threshold | minimum threshold | Linked to FacetType statistics: Indicates that property value defines a minimum threshold | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:minus | minus | Linked to FacetType direction: Indicates on which side of a surface the property applies, in this case it indicates a minus side | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:net | net | Linked to FacetType netgross: Indicates that the property is of kind net, for instance indicates that the spatial support of a property is averaged only over the net rock | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:oil | oil | Linked to FacetType what: Indicates that the oil is the element a measure is based on. Example "oil" for a property kind "saturation" indicates that the quantity is a "saturation" of "oil". | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:plus | plus | Linked to FacetType direction: Indicates on which side of a surface the property applies, in this case it indicates a plus side | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:reservoir%20condition | reservoir condition | Linked to FacetType conditions: Indicates condition of how the property was acquired, e.g.,  reservoir conditions. | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:surface%20condition | surface condition | Linked to FacetType conditions: Indicates condition of how the property was acquired, e.g., surface conditions | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:water | water | Linked to FacetType what: Indicates that the water is the element a measure is based on. Example "water" for a property kind "saturation" indicates that the quantity is a "saturation" of "water". | Changes in Description, FacetTypeID |
| partition-id:reference-data--FacetRole:X | X | Linked to FacetType direction: Indicates that the property is defined along X direction.  | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:X%2B | X+ | Linked to FacetType direction: Indicates that the property is directional along X direction for vectorial properties (along increasing X values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:X- | X- | Linked to FacetType direction: Indicates that the property is directional along X direction for vectorial properties (along decreasing X values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:Y | Y | Linked to FacetType direction: Indicates that the property is defined along Y direction.  | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:Y%2B | Y+ | Linked to FacetType direction: Indicates that the property is directional along Y direction for vectorial properties (along increasing Y values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:Y- | Y- | Linked to FacetType direction: Indicates that the property is directional along Y direction for vectorial properties (along decreasing Y values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:Z | Z | Linked to FacetType direction: Indicates that the property  is defined along Z direction.  | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:Z%2B | Z+ | Linked to FacetType direction: Indicates that the property is directional along Z direction for vectorial properties (along increasing Z values) | Changes in FacetTypeID |
| partition-id:reference-data--FacetRole:Z- | Z- | Linked to FacetType direction: Indicates that the property is directional along Z direction for vectorial properties (along decreasing Z values) | Changes in FacetTypeID |

# Value Spreadsheet and Manifest

* [Reference value workbook FacetRole.1.1.0.xlsx](../../../ReferenceValues/Published/FacetRole.1.xlsx)
* [Manifest record FacetRole.1.1.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/FacetRole.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)