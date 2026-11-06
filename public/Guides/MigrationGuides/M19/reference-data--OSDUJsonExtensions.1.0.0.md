<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--OSDUJsonExtensions:1.0.0`

Changes between [osdu:wks:reference-data--OSDUJsonExtensions:1.0.0](../../../E-R/reference-data/OSDUJsonExtensions.1.0.0.md) and [osdu:wks:reference-data--OSDUJsonExtensions:1.0.0](../../../E-R/reference-data/OSDUJsonExtensions.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--OSDUJsonExtensions:x-osdu-natural-key | x-osdu-natural-key | This JSON tag indicates that a property can be treated as a natural key, i.e. records with the same value are treated as the same domain object. It is mostly used as a tag, however, in AbstractReferenceType both Code and Name are marked a natural keys. In this case the numeric value of the tag is used to prioritize which property is selected as natural key: 0 is first choice if populated, 1 is second choice. Scope: Property. | Changes in Description |
| partition-id:reference-data--OSDUJsonExtensions:x-osdu-supported-file-formats | x-osdu-supported-file-formats | This custom JSON tag identifies example file formats for associated datasets. This is used in conjunction with work-product-component entities. The value is a JSON string array.  Scope: Schema | Changes in Description |

# Value Spreadsheet and Manifest

* [Reference value workbook OSDUJsonExtensions.1.0.0.xlsx](../../../ReferenceValues/Published/OSDUJsonExtensions.1.xlsx)
* [Manifest record OSDUJsonExtensions.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/FIXED/OSDUJsonExtensions.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)