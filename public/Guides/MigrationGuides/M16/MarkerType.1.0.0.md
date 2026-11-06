<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--MarkerType:1.0.1`

The content of this reference list 
[`osdu:wks:reference-data--MarkerType:1.0.1`](../../../E-R/reference-data/MarkerType.1.0.1.md)
is now governed by PPDM.

## Recommended MarkerType Values 

| `id`                                                         | Name                  | Description                                                                                                                                                                                                 |  
|--------------------------------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--MarkerType:Biostratigraphy      | Biostratigraphy       | A marker associated with a bio stratigraphic horizon. Biostratigraphy assigns relative ages of rock strata by using the fossil assemblages contained within them.                                           | 
| partition-id:reference-data--MarkerType:Chronostratigraphy   | Chronostratigraphy    | A marker associated with a chronostratigraphic horizon. Chronostratigraphic studies the ages of rock strata in relation to time.                                                                            | 
| partition-id:reference-data--MarkerType:FluidStratigraphy    | Fluid Stratigraphy    | A marker associated with seismic reflection related to a uniform fluid interface (e.g. oil-water contact).                                                                                                  | 
| partition-id:reference-data--MarkerType:Lithostratigraphy    | Lithostratigraphy     | A marker associated with a lithostratigraphic horizon. Lithostratigraphy studies rock layers on the basis of their physical composition and structure.                                                      | 
| partition-id:reference-data--MarkerType:Magnetostratigraphy  | Magnetostratigraphy   | A magneto stratigraphic marker. Magneto-stratigraphy is a geophysical correlation technique used to date sedimentary and volcanic sequences.                                                                | 
| partition-id:reference-data--MarkerType:SequenceStratigraphy | Sequence Stratigraphy | A marker in a sequence stratigraphy interpretation. Sequence stratigraphy divides sedimentary deposits into units separated by unconformity surfaces as a way to model the depositional history of a basin. | 
| partition-id:reference-data--MarkerType:Unspecified          | Unspecified           | A general kind of seismic marker having no stratigraphic interpretation.                                                                                                                                    | 

## Deprecated MarkerType Values 

| Deprecated `id`                                             | Superseded by ìd`                                            | Superseded Name      | Description                                                                                                                                                                                                                                                                                  |
|-------------------------------------------------------------|--------------------------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--MarkerType:BioStratigraphy     | partition-id:reference-data--MarkerType:Biostratigraphy      | Biostratigraphy      | DEPRECATED: Please use Code="Biostratigraphy" with Name="Biostratigraphy" instead. A bio-stratigraphic marker. Bio-stratigraphy is the branch of stratigraphy which focuses on correlating and assigning relative ages of rock strata by using the fossil assemblages contained within them. |
| partition-id:reference-data--MarkerType:ChronoStratigraphy  | partition-id:reference-data--MarkerType:Chronostratigraphy   | Chronostratigraphy   | DEPRECATED: Please use Code="Chronostratigraphy" with Name="Chronostratigraphy" instead. A chrono-stratigraphic marker. Chrono-stratigraphy is the branch of stratigraphy that studies the ages of rock strata in relation to time.                                                          |
| partition-id:reference-data--MarkerType:LithoStratigraphy   | partition-id:reference-data--MarkerType:Lithostratigraphy    | Lithostratigraphy    | DEPRECATED: Please use Code="Lithostratigraphy" with Name="Lithostratigraphy" instead. A litho-stratigraphic marker. Litho-stratigraphy is a sub-discipline of stratigraphy, the geological science associated with the study of strata or rock layers.                                      |
| partition-id:reference-data--MarkerType:MagnetoStratigraphy | partition-id:reference-data--MarkerType:Magnetostratigraphy  | Magnetostratigraphy  | DEPRECATED: Please use Code="Magnetostratigraphy" with Name="Magnetostratigraphy" instead. A magneto stratigraphic marker. Magneto-stratigraphy is a geophysical correlation technique used to date sedimentary and volcanic sequences.                                                      |
| partition-id:reference-data--MarkerType:Seismic             | partition-id:reference-data--MarkerType:SequenceStratigraphy | SequenceStratigraphy | DEPRECATED: Please use Code="SequenceStratigraphy" with Name="SequenceStratigraphy" instead. A seismic marker, typically based on an interpretation of seismic reflection data at a depth for well log correlation.                                                                          |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
