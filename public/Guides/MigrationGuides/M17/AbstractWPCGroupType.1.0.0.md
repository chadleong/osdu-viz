<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractWPCGroupType:1.1.0`

Changes between [osdu:wks:AbstractWPCGroupType:1.0.0](../../../E-R/abstract/AbstractWPCGroupType.1.0.0.md) and [osdu:wks:AbstractWPCGroupType:1.1.0](../../../E-R/abstract/AbstractWPCGroupType.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|DDMSDatasets[]|string|DDMS Datasets|An array of references to content in Domain Data Management Services represented by this work-product-component. The references are formed as URI following https://www.rfc-editor.org/rfc/rfc3986#page-16. DDMSs are obliged to find the relevant references by inspecting the URI values, if the work-product-component is represented in more than one DDMS.|Added property|
|_NameAliases[]_|_object_|_AbstractAliasNames_|_Alternative names, including historical, by which this work-product-component is/has been known (it should include all the identifiers). Fragment Description: A list of alternative names for an object.  The preferred name is in a separate, scalar property.  It may or may not be repeated in the alias list, though a best practice is to include it if the list is present, but to omit the list if there are no other names.  Note that the abstract entity is an array so the $ref to it is a simple property reference._|Added property|
|NameAliases[].AliasName|string|Alias Name|Alternative Name value of defined name type for an object.|Added property|
|NameAliases[].AliasNameTypeID &rarr; [AliasNameType](../../../E-R/reference-data/AliasNameType.1.0.0.md)|string|Alias Name Type Id|A classification of alias names such as by role played or type of source, such as regulatory name, regulatory code, company code, international standard name, etc.|Added property|
|NameAliases[].DefinitionOrganisationID &rarr; [StandardsOrganisation](../../../E-R/reference-data/StandardsOrganisation.1.0.0.md) &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md)|string|Definition Organisation Id|The StandardsOrganisation (reference-data) or Organisation (master-data) that provided the name (the source).|Added property|
|NameAliases[].EffectiveDateTime|string|Effective Date Time|The date and time when an alias name becomes effective.|Added property|
|NameAliases[].TerminationDateTime|string|Termination Date Time|The data and time when an alias name is no longer in effect.|Added property|

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)