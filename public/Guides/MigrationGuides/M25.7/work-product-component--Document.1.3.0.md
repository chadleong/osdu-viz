<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--Document:2.0.0`

Changes between [osdu:wks:work-product-component--Document:1.3.0](../../../E-R/work-product-component/Document.1.3.0.md) and [osdu:wks:work-product-component--Document:2.0.0](../../../E-R/work-product-component/Document.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|~~data.DocumentTypeID<br> &rarr; [DocumentType](../../../E-R/reference-data/DocumentType.1.0.1.md)~~|~~string~~|~~Document Type Id~~|~~DEPRECATED: Use the DocumentTaxonomyID. The kind of document--from a business standpoint, e.g., seismic processing report, etc.~~|**_Breaking Change: REMOVED_**|
|data.DocumentTaxonomyID<br> &rarr; [DocumentTaxonomy](../../../E-R/reference-data/DocumentTaxonomy.1.0.0.md)|string|Document Taxonomy  ID|The Document Taxonomy provides a structured taxonomy for categorising document types. This taxonomy adheres to a consistent naming convention of a DISCIPLINE followed by a relevant DocumentType. In the practical implementation it uses a dot-based nomenclature e.g., <DISCIPLINE>.<DocumentType>, allowing for a two level hierarchy of the document type to support classification and search. This a recommended property.|**_Breaking Change: REMOVED_**|
|data.DocumentSubject|string|Document Subject|A description text or an array of subjects covered by the document. If present this information must compliment the Tag and SubTitle|**_Breaking Change: REMOVED_**|
|data.DocumentLanguage|string|Document Language|Document language as listed in the ISO 639-3 https://en.wikipedia.org/wiki/ISO_639, https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.TaxonomyIDs[]<br> &rarr; [DocumentTaxonomy](../../../E-R/reference-data/DocumentTaxonomy.1.0.0.md)|string|Taxonomy IDs|The Document Taxonomy provides a structured taxonomy for categorising document types. This taxonomy adheres to a consistent naming convention of a DISCIPLINE followed by a document type, using a dot-based nomenclature e.g., <DISCIPLINE>.<Document Type>. This creates a two level hierarchy of the document type to support classification and search. This a recommended property. A Document may have one or more document types (for example, End of Well Reports may contain a wide range of information).|Added property|
|data.Subject|string|Subject|A description text or an array of subjects covered by the document. If present this information must complement the Tag and SubTitle|Added property|
|data.Languages[]|string|Languages|The language(s) in which the document is written, provided as one or more three letter language codes as listed in ISO 639-3. https://en.wikipedia.org/wiki/ISO_639, https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes|Added property|
|data.ProducedByOrganisationID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Produced By Organisation ID|The organisation or institution that produced this document|Added property|
|data.ProducedForOrganisationID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Produced For Organisation ID|The organisation or institution that this document was produced this for|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)