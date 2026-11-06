<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--DocumentTaxonomy:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--DocumentTaxonomy:1.0.0](../../../E-R/reference-data/DocumentTaxonomy.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicLineLog | GEOPHYSICS.SeismicLineLog | Documents produced at the end of each seismic line during acquisition, including information on shotpoint ranges, tapes, and files. Refer to the `SeismicAcquisitionDocuments` schema and the `data.LineLogIDs` property | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicObserverLog | GEOPHYSICS.SeismicObserverLog | Documents produced during acquisition containing reports on acquisition activities and progress. Refer to the `SeismicAcquisitionDocuments` schema and the `data.ObserverLogIDs` property | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicReceiverInformationTable | GEOPHYSICS.SeismicReceiverInformationTable | Documents collected during acquisition which include a format description and attribute properties. Typically rows are collected for each line and shotpoint with information on receivers. Refer to the `SeismicAcquisitionDocuments` schema and the `data.ReceiverInformationTableIDs` property | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicReceiverLog | GEOPHYSICS.SeismicReceiverLog | Documents produced during acquisition, including parameters, along with recording QC for each shot. Refer to the `SeismicAcquisitionDocuments` and the `data.ReceiverLogIDs` property | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicSourceInformationTable | GEOPHYSICS.SeismicSourceInformationTable | Documents collected during acquisition which include a format description and attribute properties. Typically rows are collected for each line and shotpoint with information on sources, like volume, depth, and timing errors. Refer to the `SeismicAcquisitionDocuments` schema and the `data.SourceInformationTableIDs` property | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicSurveyAcquisitionReport | GEOPHYSICS.SeismicSurveyAcquisitionReport | Report detailing the acquisition process for a seismic survey. Refer to the `SeismicAcquisitionDocuments` schema and the `data.SeismicAcquisitionReport` property | Changes in Description |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook DocumentTaxonomy.1.xlsx](../../../ReferenceValues/Published/DocumentTaxonomy.1.xlsx)
* &rarr; [Manifest record DocumentTaxonomy.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/DocumentTaxonomy.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)