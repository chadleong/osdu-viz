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
| partition-id:reference-data--DocumentTaxonomy:GENERIC.AuthorityForExpenditure | GENERIC.AuthorityForExpenditure | Authority for expenditure associated with, for example, drilling a well bore, shooting  a geophysical survey, or any other activity for which such authority is required. May include partner consents. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOMATICS.RigPositioningReport | GEOMATICS.RigPositioningReport | Documents the actual mobilisation and siting of the drilling rig. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.GeophysicalGeneral | GEOPHYSICS.GeophysicalGeneral | Catch-all category for Geophysics discipline | Changes in Description |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicChainingReport | GEOPHYSICS.SeismicChainingReport | A report detailing seismic line chaining operations for a landward seismic survey - the process of setting out markers for geophone positions along a seismic line, and then recording their positions, along with any relevant terrain features (slopes, river crossings, etc.). | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicNavigationLog | GEOPHYSICS.SeismicNavigationLog | A detailed record of positioning data collected during seismic surveys. It documents the precise geographic coordinates of all source points, receiver locations, and (for marine surveys) vessel positions throughout the seismic acquisition process. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicSection | GEOPHYSICS.SeismicSection | A graphical representation of seismic data along a seismic line. May be time or depth-based. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.SeismicSourceLog | GEOPHYSICS.SeismicSourceLog | A record of the parameters and performance of the energy source used during seismic data acquisition | Value added. |
| partition-id:reference-data--DocumentTaxonomy:GEOPHYSICS.TapeInventory | GEOPHYSICS.TapeInventory | A listing of the tapes that comprise a geophysical survey | Value added. |
| partition-id:reference-data--DocumentTaxonomy:MULTIDISCIPLINARY.WellFunctionalSpecification | MULTIDISCIPLINARY.WellFunctionalSpecification | Specification detailing the technical reasons behind the construction of a well, and the purpose of that well in relation to Field Development. For example might contain reasons behind why a well is a water injector or a oil producer | Value added. |
| partition-id:reference-data--DocumentTaxonomy:PETROPHYSICS.PetrophysicalGeneral | PETROPHYSICS.PetrophysicalGeneral | Catch-all category for Petrophysics discipline | Changes in Description |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.AbandonmentLog | WELL_ENGINEERING.AbandonmentLog | Well log images generated during well abandonment operations | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.CasingReport | WELL_ENGINEERING.CasingReport | Details of casing operations during drilling. See also: `WELL_ENGINEERING.CementingReport` | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.CementingReport | WELL_ENGINEERING.CementingReport | Details of cementing operations during drilling. See also: `WELL_ENGINEERING.CasingReport` | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.DirectionalSurveyReport | WELL_ENGINEERING.DirectionalSurveyReport | Vendor or Operator generated Directional Survey report. May be planned, interim or final. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.PerforationReport | WELL_ENGINEERING.PerforationReport | Reports on perforating and perforated or re-perforated intervals. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.SeabedClearanceCertificate | WELL_ENGINEERING.SeabedClearanceCertificate | Seabed clearance reports and certificates, issued once the wellhead is removed and the well site has been trawl swept. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.WellExaminerReport | WELL_ENGINEERING.WellExaminerReport | Reports and certificates issued by the independent Well Examiner. | Value added. |
| partition-id:reference-data--DocumentTaxonomy:WELL_ENGINEERING.WellFunctionalSpecifications | WELL_ENGINEERING.WellFunctionalSpecifications | DEPRECATED: Please use Code="MULTIDISCIPLINARY.WellFunctionalSpecification" with Name="MULTIDISCIPLINARY.WellFunctionalSpecification" instead. Specification detailing the technical reasons behind the construction of a well, and the purpose of that well in relation to Field Development. For example might contain reasons behind why a well is a water injector or a oil producer | **DEPRECATED, superseded by Code: MULTIDISCIPLINARY.WellFunctionalSpecification**<br>Changes in Description |

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