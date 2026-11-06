<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SampleAcquisitionType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--SampleAcquisitionType:1.0.0](../../../E-R/reference-data/SampleAcquisitionType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SampleAcquisitionType:ConventionalCoringSampleAcquisition | Conventional Coring Rock Sample Acquisition | This references the downhole acquisition event type for a  conventional core sample acquired from a coring operation. | Changes in Name, AttributionAuthority, AttributionRevision |
| partition-id:reference-data--SampleAcquisitionType:CuttingsSampleAcquisition | Cuttings Rock Sample Acquisition | This references the downhole acquisition event type for rock cuttings acquired during drilling operations. | Changes in Name, Description, AttributionAuthority, AttributionRevision |
| partition-id:reference-data--SampleAcquisitionType:DownholeSampleAcquisition | Downhole Fluid Sample Acquisition | This references the acquisition event type for a sample acquired from a downhole location within a completed  (perforated or openhole interval) wellbore. | Changes in Name, AttributionAuthority, AttributionPublication |
| partition-id:reference-data--SampleAcquisitionType:FacilitySampleAcquisition | Facility Fluid Sample Acquisition | This references the acquisition event type for a sample acquired from a flow port or  Equipment within a Facility. | Changes in Name, AttributionAuthority, AttributionPublication |
| partition-id:reference-data--SampleAcquisitionType:FormationSampleAcquisition | Formation Testing Fluid Sample Acquisition | This references the acquisition event type for a sample acquired from a downhole location within the subsurface during a formation testing event.  | Changes in Name, AttributionAuthority, AttributionPublication |
| partition-id:reference-data--SampleAcquisitionType:MiningAcquisition | Mining Sample Acquisition | An acquisition event type involving the collection of specimens/samples from mining activities that extract minerals from the earth. | Value added. |
| partition-id:reference-data--SampleAcquisitionType:Other | Other Sample Acquisition | An acquisition event type not otherwise captured by this list. | Value added. |
| partition-id:reference-data--SampleAcquisitionType:OutcropSampleAcquisition | Outcrop Sample Acquisition | DEPRECATED: Please use Code="SurfaceAcquisition" with Name="Surface Sample Acquisition" instead. Then consider using master-data--GenericSite with SiteType "Outcrop". This references the surface acquisition event type for a sample acquired from an outcrop | **DEPRECATED, superseded by Code: SurfaceAcquisition**<br>Changes in InactiveIndicator, Description, AttributionAuthority, AttributionRevision |
| partition-id:reference-data--SampleAcquisitionType:SeparatorSampleAcquisition | Separator Fluid Sample Acquisition | This references the acquisition event type for a sample is acquired from a test Separator. | Changes in Name, AttributionAuthority, AttributionPublication |
| partition-id:reference-data--SampleAcquisitionType:SidewallCoringSampleAcquisition | Sidewall Coring Rock Sample Acquisition | This references the downhole acquisition event type for a sidewall core sample acquired from a coring operation. | Changes in Name, Description, AttributionAuthority, AttributionRevision |
| partition-id:reference-data--SampleAcquisitionType:SurfaceAcquisition | Surface Sample Acquisition | An acquisition event type involving the collection of specimens/samples of rock, sediment, or fluid from the surface of the earth - either exposed dry land (e.g., outcrop), or from the base of a water body (e.g., seabed). | Value added. |
| partition-id:reference-data--SampleAcquisitionType:SurfaceSedimentAcquisition | Surface Sediment Acquisition | DEPRECATED: Please use Code="SurfaceAcquisition" with Name="Surface Sample Acquisition" instead. Involves the collection and analysis of sediment samples from the top layer of the seabed or other water bodies to study the composition, characteristics, and environmental conditions of the sediment | **DEPRECATED, superseded by Code: SurfaceAcquisition**<br>Changes in InactiveIndicator, Description, Code, AttributionAuthority, AttributionRevision |
| partition-id:reference-data--SampleAcquisitionType:WaterBodyAcquisition | Water Body Sample Acquisition | An acquisition event type involving the collection of specimens/samples from the surface or midst of the body of water (e.g., oil slick), but not from its bottom. | Value added. |
| partition-id:reference-data--SampleAcquisitionType:WellheadSampleAcquisition | Wellhead Fluid Sample Acquisition | This references the acquisition event type for a sample acquired at the wellhead location of a completed wellbore. The sample stream could come from a single wellbore opening downhole or could be comingled with contributions from multiple wellbore openings. | Changes in Name, AttributionAuthority, AttributionPublication |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook SampleAcquisitionType.1.xlsx](../../../ReferenceValues/Published/SampleAcquisitionType.1.xlsx)
* &rarr; [Manifest record SampleAcquisitionType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SampleAcquisitionType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)