<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SampleAnalysisType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--SampleAnalysisType:1.0.0](../../../E-R/reference-data/SampleAnalysisType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SampleAnalysisType:ElementalComposition.EDS%252DMapping | Elemental Composition, EDS-Mapping | DEPRECATED: Please use Code="ElementalComposition.EDSMapping" with Name="Elemental Composition, EDS Mapping" instead. Elemental Dispersive Spectroscopy technique applied to the surface of a thin section. | **DEPRECATED, superseded by Code: ElementalComposition.EDSMapping**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--SampleAnalysisType:ElementalComposition.EDSMapping | Elemental Composition, EDS Mapping | Elemental Dispersive Spectroscopy technique applied to the surface of a thin section. | Value added. |
| partition-id:reference-data--SampleAnalysisType:Isotope.Non%252DGas | Isotope, Non-Gas | DEPRECATED: Please use Code="Isotope.NonGas" with Name="Isotope, Non Gas" instead. Isotope analysis (for example, d13C, dD, d34S) of a bulk sample, which might be a whole oil, saturate fraction, water, rock, etc. | **DEPRECATED, superseded by Code: Isotope.NonGas**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--SampleAnalysisType:Isotope.NonGas | Isotope, Non Gas | Isotope analysis (for example, d13C, dD, d34S) of a bulk sample, which might be a whole oil, saturate fraction, water, rock, etc. | Value added. |
| partition-id:reference-data--SampleAnalysisType:Wettability.Amott%252DHarvey | Wettability, Amott-Harvey | DEPRECATED: Please use Code="Wettability.AmottHarvey" with Name="Wettability, Amott Harvey" instead. Experiment which measures the interaction between two fluids and the rock sample surface by comparing the spontaneous imbibition of the two fluids. | **DEPRECATED, superseded by Code: Wettability.AmottHarvey**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--SampleAnalysisType:Wettability.Amott%252DUSBM | Wettability, Amott-USBM | DEPRECATED: Please use Code="Wettability.AmottUSBM" with Name="Wettability, Amott USBM" instead. Experiment which measures the interaction between two fluids and the rock sample surface by utilising the ratio of drainage to imbibition capillary pressure curves.  | **DEPRECATED, superseded by Code: Wettability.AmottUSBM**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--SampleAnalysisType:Wettability.AmottHarvey | Wettability, Amott Harvey | Experiment which measures the interaction between two fluids and the rock sample surface by comparing the spontaneous imbibition of the two fluids. | Value added. |
| partition-id:reference-data--SampleAnalysisType:Wettability.AmottUSBM | Wettability, Amott USBM | Experiment which measures the interaction between two fluids and the rock sample surface by utilising the ratio of drainage to imbibition capillary pressure curves.  | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook SampleAnalysisType.1.xlsx](../../../ReferenceValues/Published/SampleAnalysisType.1.xlsx)
* &rarr; [Manifest record SampleAnalysisType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SampleAnalysisType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)