<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractReferencePropertyType:1.2.2`

Changes between [osdu:wks:AbstractReferencePropertyType:1.2.1](../../../E-R/abstract/AbstractReferencePropertyType.1.2.1.md) and [osdu:wks:AbstractReferencePropertyType:1.2.2](../../../E-R/abstract/AbstractReferencePropertyType.1.2.2.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|UnitOfMeasureID<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Unit of Measure ID|Only populated if the ValueType is "number". It holds the UnitOfMeasure associated with this reference property type. It is a relationship to a UnitOfMeasure record. If the UnitQuantityID and/or PropertyType.PropertyTypeID are populated in addition to UnitOfMeasureID, the referenced records must finally share the same dimension code. See Schema Usage Guide 'Unit of Measure Foundation'.|Changes in: Description|
|UnitQuantityID<br> &rarr; [UnitQuantity](../../../E-R/reference-data/UnitQuantity.1.0.0.md)|string|Unit Quantity ID|Only populated if the ValueType is "number". It holds the UnitQuantity associated with this reference property type. It is a relationship to UnitQuantity record. If `UnitQuantityID` is provided, `PropertyType` is expected to be omitted.|Changes in: Description|
|_PropertyType_|_object_|_AbstractPropertyType_|_It holds the PropertyType associated with this reference property type, further defining the semantics of the value. It contains a relationship to PropertyType record and its (de-normalized) name. String or number values can represent e.g. A date or a time by referring to the respective PropertyType record id. If `PropertyType` is provided, `UnitQuantityID` is expected to be omitted. Fragment Description: A nested object holding the relationship to a PropertyType by id (uuid) and a derived, human-readable name._|Changes in: Description|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)