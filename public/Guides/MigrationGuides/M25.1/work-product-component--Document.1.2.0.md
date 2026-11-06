<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--Document:1.3.0`

Changes between [osdu:wks:work-product-component--Document:1.2.0](../../../E-R/work-product-component/Document.1.2.0.md) and [osdu:wks:work-product-component--Document:1.3.0](../../../E-R/work-product-component/Document.1.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|~~data.DocumentTypeID<br> &rarr; [DocumentType](../../../E-R/reference-data/DocumentType.1.0.1.md)~~|~~string~~|~~Document Type Id~~|~~DEPRECATED: Use the DocumentTaxonomyID. The kind of document--from a business standpoint, e.g., seismic processing report, etc.~~|Deprecated|
|data.DocumentTaxonomyID<br> &rarr; [DocumentTaxonomy](../../../E-R/reference-data/DocumentTaxonomy.1.0.0.md)|string|Document Taxonomy  ID|The Document Taxonomy provides a structured taxonomy for categorising document types. This taxonomy adheres to a consistent naming convention of a DISCIPLINE followed by a relevant DocumentType. In the practical implementation it uses a dot-based nomenclature e.g., <DISCIPLINE>.<DocumentType>, allowing for a two level hierarchy of the document type to support classification and search. This a recommended property.|Added property|
|data.DateReviewDue|string|Date Review Due|Date when a next review/revision of the document is due.|Added property|
|data.DateIssued|string|Date Issued|Formal sign-off / approval date (may be different from DatePublished)|Added property|
|data.RetentionPeriod|number|Retention Period|Number of years the document needs to be retained after the last modification (see data.DataModified property).|Added property|
|data.Summary|string|Summary|Summary of document contents|Added property|
|data.TableOfContents|string|Table Of Contents|Table of contents of the document|Added property|
|data.Keywords[]|string|Keywords|Array of key words describing the document|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)