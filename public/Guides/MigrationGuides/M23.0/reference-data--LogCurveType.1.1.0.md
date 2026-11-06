<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--LogCurveType:1.1.0`

Content changes (schema unchanged) [osdu:wks:reference-data--LogCurveType:1.1.0](../../../E-R/reference-data/LogCurveType.1.1.0.md) are listed below.

It has been found that records with trailing dots in the record id alias on Azure with the same id without trailing dot,
see [Storage issue #213](https://community.opengroup.org/osdu/platform/system/storage/-/issues/213). LogCurveType
contains one such case: `BakerHughesInteq:OVAL.` aliasing with `BakerHughesInteq:OVAL`. Fortunately the properties for
both are identical except for the description, but this is also as good as synonymous: "Ovalisation" vs. "Ovality".

No upgrade resources are provided.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--LogCurveType:BakerHughesInteq:OVAL. | ~~BakerHughesInteq:OVAL.~~ | ~~Ovality; Company: Baker Hughes Inteq (15); PropertyTypeName: length; UnitQuantity: length~~ | **_Removed_** |
| partition-id:reference-data--LogCurveType:Schlumberger:DOC | Schlumberger:DOC | Depth of Cut per Revolution; Company: Schlumberger (440); PropertyTypeName: penetration per rotation; UnitQuantity: pwls:length per plane angle | Changes in PropertyType, UnitQuantityID |
| partition-id:reference-data--LogCurveType:Schlumberger:EAG | Schlumberger:EAG | Attenuation Gain; Company: Schlumberger (440); PropertyTypeName: attenuation gain; UnitQuantity: potential difference per power drop | Changes in PropertyType |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook LogCurveType.1.1.0.xlsx](../../../ReferenceValues/Published/LogCurveType.1.xlsx)
* &rarr; [Manifest record LogCurveType.1.1.0.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/LogCurveType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)