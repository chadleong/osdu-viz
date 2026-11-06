<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractReferencePropertyType:1.1.0`

Changes between [osdu:wks:AbstractReferencePropertyType:1.0.0](../../../E-R/abstract/AbstractReferencePropertyType.1.0.0.md) and [osdu:wks:AbstractReferencePropertyType:1.1.0](../../../E-R/abstract/AbstractReferencePropertyType.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_FacetIDs[]_|_object_|_AbstractFacet_|_Ordered array with: FacetType, FacetRole, both calling specific references  FacetType: Enumerations of the type of additional context about the nature of a property type (it may include conditions, direction, qualifiers, or statistics).   FacetRole: Additional context about the nature of a property type. The purpose of such attribute is to minimize the need to create specialized property types by mutualizing some well known qualifiers such as "maximum", "minimum" which apply to a lot of different property types. Fragment Description: A tuple FacetType, FacetRole, both calling specific references  FacetType: Enumeration of the type of additional context about the nature of a property type (it may include conditions, direction, qualifiers, or statistics).   FacetRole: Additional context about the nature of a property type. The purpose of such attribute is to minimize the need to create specialized property types by mutualizing some well known qualifiers such as "maximum", "minimum" which apply to a lot of different property types._|Added property|
|FacetIDs[].FacetTypeID &rarr; [FacetType](../../../E-R/reference-data/FacetType.1.0.0.md)|string|Facet Type ID|FacetType: An 'enumeration' of the type of additional context about the nature of a property type (it may include conditions, direction, qualifiers, or statistics).|Added property|
|FacetIDs[].FacetRoleID &rarr; [FacetRole](../../../E-R/reference-data/FacetRole.1.0.0.md)|string|Facet Role ID|Additional context about the nature of a property type. The purpose of such attribute is to minimize the need to create specialized property types by mutualizing some well known qualifiers such as "maximum", "minimum" which apply to a lot of different property types.|Added property|

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](../M17/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)