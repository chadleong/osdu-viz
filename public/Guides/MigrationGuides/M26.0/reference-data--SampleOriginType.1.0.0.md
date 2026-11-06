<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SampleOriginType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--SampleOriginType:1.0.0](../../../E-R/reference-data/SampleOriginType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SampleOriginType:Combined | Combined | A combined sample is one created by combining two or more acquired samples. For example, acquired separator liquids and gases are recombined to mimic the original reservoir conditions. Or for example, multiple rock samples from the same or similar facies are combined (stacked on top of each other) for core analysis measurements. | Changes in NameAlias, Description, AttributionRevision |
| partition-id:reference-data--SampleOriginType:Commingled | Commingled | DEPRECATED: Please use the attribute "IsCommingledProductionFluid" on master-data--Sample instead.  This describes samples which are obtained from the commingling of production streams from multiple reservoirs | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--SampleOriginType:Derived | Derived | A derived sample/specimen is one that results from a process applied to a parent sample that causes chemical change, where the output is chemically different from the input, such as "flashing" gas or oil. (Contrast with "SubSampled" and "Combined".) | Value added. |
| partition-id:reference-data--SampleOriginType:OriginalAsAcquired | Original As-Acquired | Indicates that the sample/specimen is in the form in which it was first acquired from a wellbore, site, or other facility, before any subsampling, derivation, or combination processes produced samples from this one. For example, this indicator would distinguish the sample of full-length whole core as-acquired (usually 9 metres long), from three 1-metre samples, which are sections of whole core that got subsampled from that full-length whole core. | Value added. |
| partition-id:reference-data--SampleOriginType:Slick | Slick | DEPRECATED: Please use Code="SiteType:Slick" with Name="Slick" instead. This describes hydrocarbon sample that originated as a slick (unintentional spill) on any environmental surface. | **DEPRECATED, superseded by Code: SiteType:Slick**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--SampleOriginType:SubSampled | SubSampled | Indicates that a sample is a smaller portion of a larger parent sample, extracted from the parent through a sub-sampling process that does not involve chemical change. (Contrast with "Derived".) For rock, examples include a core puck cut from a whole core, or an oil sample extracted from a core plug, even if the subsample does not have the same representative composition or lithology as the parent. For fluids, the subsample would exactly represent the parent (i.e., an aliquot). | Changes in Description, AttributionRevision |
| partition-id:reference-data--SampleOriginType:Synthetic | Synthetic | A synthetic fluid sample is artificially created in a laboratory by mixing known individual components (such as C1, C2, and C3 gases) to mimic a reservoir fluid's composition and properties. In contrast to a "combined"/"re-combined" fluid sample, a synthetic fluid sample does not require components to have physically originated from the relevant reservoir. | Changes in Description, AttributionRevision |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook SampleOriginType.1.xlsx](../../../ReferenceValues/Published/SampleOriginType.1.xlsx)
* &rarr; [Manifest record SampleOriginType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SampleOriginType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)