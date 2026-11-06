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
| partition-id:reference-data--SampleOriginType:Combined | Combined | This describes samples that are created through two or more samples being combined. Which includes composite samples such as multiple rock samples likely from a core or core plugs from the same or similar facies combined (stacked on top of each other) for special core analysis measurements. These samples will be separated after analysis. It includes composites, combined, or recombined sample that could be only rocks, only fluids, or a mixture. Alias: Recombined, Composite, Mixed | Value added. |
| partition-id:reference-data--SampleOriginType:Commingled | Commingled | This describes samples which are obtained from the commingling of production streams from multiple reservoirs | Changes in AttributionAuthority |
| partition-id:reference-data--SampleOriginType:Recombined | Recombined | DEPRECATED: Please use Code="Combined" with Name="Combined" instead.This describes samples that are created through a recombination process involving 2 or more samples. | **DEPRECATED**<br>Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--SampleOriginType:Slick | Slick | This describes hydrocarbon sample that originated as a slick (unintentional spill) on any environmental surface. | Changes in AttributionAuthority |
| partition-id:reference-data--SampleOriginType:SubSampled | SubSampled | This describes samples which are obtained from sub-sampling process into child samples. | Changes in AttributionAuthority |
| partition-id:reference-data--SampleOriginType:Synthetic | Synthetic | A synthetic sample is one that is created by a recombination of fluids that are not necessary collected from production stream directly. For example if you replace a separator gas sample with a mixture of pure component gas such as C1, C2, C3 in the lab to mimic the separator gas sample, then you will end up with a synthetic fluid. In other words, if you create mixtures of pure gases and liquids in the lab to either mimic the any production streams for recombination work ,then you will end up with a synthetic sample | Changes in AttributionAuthority |

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