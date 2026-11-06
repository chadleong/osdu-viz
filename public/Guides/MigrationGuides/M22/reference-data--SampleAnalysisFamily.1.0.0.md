<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SampleAnalysisFamily:1.0.0`

Changes between [osdu:wks:reference-data--SampleAnalysisFamily:1.0.0](../../../E-R/reference-data/SampleAnalysisFamily.1.0.0.md) and [osdu:wks:reference-data--SampleAnalysisFamily:1.0.0](../../../E-R/reference-data/SampleAnalysisFamily.1.0.0.md) are listed below.

The published M21 catalog was patched for the change FlowAssuranceProperties &rarr; FlowAssurance.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SampleAnalysisFamily:BrinePermeability | Brine Permeability | Permeability of a rock sample to brine (salt water similar to formation water or injection water); These experiments are typically carried out at several flow rates using simulated formation water.  | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:ElementalComposition | Elemental Composition | The goal of elemental composition analysis is understand the chemical make-up of a sample. Typically measured on either rock or fluid samples. Since WaterAnalysis is separate, note here that Water Analysis and composition is handled separately.   | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:FlowAssurance | Flow Assurance | Properties related to the prevention of scales, hydrates, asphaltene and paraffin deposits and other problems that could stop flow of fluid from the subsurface, wellhead or pipeline. | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:FlowAssuranceProperties | ~~Flow Assurance Properties~~ | ~~Properties related to the prevention of scales, hydrates, asphaltene and paraffin deposits and other problems that could stop flow of fluid from the subsurface, wellhead or pipeline.~~ | **_Removed_** |
| partition-id:reference-data--SampleAnalysisFamily:Fractionation | Fractionation | Fractionation is the separation of the component parts, or fractions, of petroleum according to boiling point (distillation), polarity (SARA), molecular size (mole sieve) or other differentiating properties. | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:GasChromatography | Gas Chromatography | Gas chromatography (GC) is the process of separating compounds in a mixture by injecting a gaseous or liquid sample into a mobile phase, typically called the carrier gas, and passing the gas through a stationary phase. The mobile phase is usually an inert gas or unreactive gas such as helium, argon, nitrogen or hydrogen. The stationary phase is contained inside of a separation column. Today, most GC columns are fused silica capillaries with an inner diameter of 100-320 μm and a length of 5-60 m. The GC column is located inside an oven where the temperature of the gas can be controlled and the effluent coming off the column is monitored by a suitable detector as a function of retention time. | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:GasChromatographyMassSpectroscopy | Gas Chromatography Mass Spectroscopy | GasChromatographyMassSpectroscopy (GCMS) is composed of two major building blocks: the gas chromatograph (GC) and the mass spectrometer (MS). The GC separates molecules in a mixture based on their relative affinity for the stationary phase of the column. Each GC peak elutes (comes off) from the column at different times (called the retention time), this allows the mass spectrometer downstream to capture, ionize, accelerate, deflect, and detect the ionized molecules separately. These two components, used together, allow a much finer degree of substance identification than than gas chromatography or mass spectrometry alone.  | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:GasChromatographyMassSpectroscopyMassSpectroscopy | Gas Chromatography Mass Spectroscopy Mass Spectroscopy | Gas Chromatography–Tandem Mass spectrometry (GC-MS-MS) couples a Gas Chromatograph (GC) with two Mass Spectrometers which increases detail in molecular structure analysis. This Family includes QQQ and MRM (Multiple-reaction Monitoring).  | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:Geomechanics | Geomechanics | Geomechanics core analysis measures the mechanical properties of rocks and fractures - elasticity, strength, and physical properties related to deformation such as thermal expansion and fracture conductivity.  | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:GrainSizeAnalysis | Grain Size Analysis | Grain Size Analysis is used to determine the percentage of each size of a grain that is in the sample.  | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:Mineralogy | Mineralogy | Mineralogy incorporates all aspects of minerals within rocks, including physical properties, chemical composition, internal crystal structures using analysis like XRD, FTIR, PointCounting, etc… | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:NMR | NMR | Also known as Nuclear Magnetic Resonance. NMR measures the relaxation of hydrogen protons using low field electromagnetic waves. This can be conducted on brine-saturated or desaturated samples.   NMR can include porosity, bound fluid, clay volume, bound water, T1/T2 maps, T2D, total water saturation, capillary bound water, SWIRR (irreducible water saturation), interpreted perm, and pore size distribution.  NMR in the Sample Analysis refers to lab NMR. When NMR is measured on a physical sample retrieved from the wellbore, it is lab NMR and is captured under Sample Analysis. When NMR is measured in the borehole, it is log NMR, and is captured as a Well Log in OSDU. | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:Petrography | Petrography | Organic petrography is the microscopic study of organic constituents found in coal, carbon, shales, and other geological samples.  | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:Pyrolysis | Pyrolysis | Pyrolysis is the thermal decomposition of materials at elevated temperatures, often in an inert atmosphere. In petroleum analysis, pyrolysis is the heating of an organic material, such as an oil or organic rich rock, in the absence of oxygen. Note that in practice, pyrolysis is sometimes used in combination with some other method to separate compounds. In OSDU, Pyrolysis (Py)-GC or PyGCMS are handled under the GC and GCMS analysis types. Bulk pyrolysis (e.g., RockEval) and kinetics measurements are grouped in this analysis type. | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:RelativePermeability | Relative Permeability | Relative permeability is the ratio of a secondary phase (gas, oil, or water) to a reference permeability (usually absolute permeability). This experiment can be conducted at varying saturations of the secondary fluid phase or at a single irreducible saturation of the second phase. | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:Stratigraphy | Stratigraphy | Subdivision of rock strata to provide ages and order of lithological sequences | Value added. |
| partition-id:reference-data--SampleAnalysisFamily:Wettability | Wettability | Wettability is the ability of one fluid to spread on or adhere to (that is, maintain contact with) a solid surface in the presence of other immiscible fluids. Typically, this is measured as water/oil interaction with a rock sample. | Value added. |

# Value Spreadsheet and Manifest

* [Reference value workbook SampleAnalysisFamily.1.0.0.xlsx](../../../ReferenceValues/Published/SampleAnalysisFamily.1.xlsx)
* [Manifest record SampleAnalysisFamily.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SampleAnalysisFamily.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)