<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicAcquisitionDocuments:2.0.0`

Changes between [osdu:wks:work-product-component--SeismicAcquisitionDocuments:1.1.0](../../../E-R/work-product-component/SeismicAcquisitionDocuments.1.1.0.md) and [osdu:wks:work-product-component--SeismicAcquisitionDocuments:2.0.0](../../../E-R/work-product-component/SeismicAcquisitionDocuments.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ObserverLogIDs[]|string|ObserverLogIDs|Documents produced during acquisition, containing reports on acquisition activities and progress. The array consists of record IDs, which identify a OSDU file or dataset resource.|**_Breaking Change: REMOVED_**|
|data.LineLogIDs[]|string|Line Log IDs|Documents produced at end of each line, including information on shotpoint ranges, tapes, and files. The array consists of record IDs, which identify a OSDU file or dataset resource.|**_Breaking Change: REMOVED_**|
|data.ReceiverLogIDs[]|string|Receiver Log IDs|Documents produced during acquisition, including parameters , along with recording QC for each shot. The array consists of record IDs, which identify a OSDU file or dataset resource.|**_Breaking Change: REMOVED_**|
|data.ReceiverInformationTableIDs[]|string|Receiver Information Table IDs|Document collected during acquisition which includes a format description and attribute properties.  Typically rows are collected for each line and shotpoint, with information on receivers. The array consists of record IDs, which identify a OSDU file or dataset resource.|**_Breaking Change: REMOVED_**|
|data.SourceInformationTableIDs[]|string|Source Information Table IDs|Document collected during acquisition which includes a format description and attribute properties.  Typically rows are collected for each line and shotpoint, with information on sources, like volume, depth, and timing errors. The array consists of record IDs, which identify a OSDU file or dataset resource.|**_Breaking Change: REMOVED_**|
|data.SeismicAcquisitionReport|string|Seismic Acquisition Report|Reference to a dataset containing the seismic acquisition report.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ObserverLogIDs[]<br> &rarr; [Document](../../../E-R/work-product-component/Document.1.3.0.md)|string|ObserverLogIDs|Documents produced during acquisition, containing reports on acquisition activities and progress. The array contains IDs referencing Document work product component records that hold the actual documents, which should be of the corresponding document type.|Added property|
|data.LineLogIDs[]<br> &rarr; [Document](../../../E-R/work-product-component/Document.1.3.0.md)|string|Line Log IDs|Documents produced at end of each line, including information on shotpoint ranges, tapes, and files. The array contains IDs referencing Document work product component records that hold the actual documents, which should be of the corresponding document type.|Added property|
|data.ReceiverLogIDs[]<br> &rarr; [Document](../../../E-R/work-product-component/Document.1.3.0.md)|string|Receiver Log IDs|Documents produced during acquisition, including parameters , along with recording QC for each shot. The array contains IDs referencing Document work product component records that hold the actual documents, which should be of the corresponding document type.|Added property|
|data.ReceiverInformationTableIDs[]<br> &rarr; [Document](../../../E-R/work-product-component/Document.1.3.0.md)|string|Receiver Information Table IDs|Document collected during acquisition which includes a format description and attribute properties.  Typically rows are collected for each line and shotpoint, with information on receivers. The array contains IDs referencing Document work product component records that hold the actual documents, which should be of the corresponding document type.|Added property|
|data.ReceiverSignatureIDs[]|string|Receiver Signature IDs|Receiver response collected during acquisition.  May include response to differing receiver group orientations. The array contains IDs referencing Document work product component records that hold the actual documents, which should be of the corresponding document type.|Changes in: Description|
|data.SourceInformationTableIDs[]<br> &rarr; [Document](../../../E-R/work-product-component/Document.1.3.0.md)|string|Source Information Table IDs|Document collected during acquisition which includes a format description and attribute properties.  Typically rows are collected for each line and shotpoint, with information on sources, like volume, depth, and timing errors. The array contains IDs referencing Document work product component records that hold the actual documents, which should be of the corresponding document type.|Added property|
|data.SeismicAcquisitionReport<br> &rarr; [Document](../../../E-R/work-product-component/Document.1.3.0.md)|string|Seismic Acquisition Report|Reference to a dataset containing the seismic acquisition report. This property contains an ID referencing a Document work product component record that holds the actual document report, which should be of the corresponding document type.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)