<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicTraceData:1.3.0`

Potential migration to [`osdu:wks:work-product-component--SeismicTraceData:1.3.0`](../../../E-R/work-product-component/SeismicTraceData.1.3.0.md):

Version 1.3.0 improves interoperability by introducing reference-value list controlled properties for `SeismicPhaseID`
and `SeismicPolarityID`. The "free text" properties `Phase` and `Polarity` are deprecated in favour of the fixed
governance reference values:

1. [osdu:wks:reference-data--SeismicPhase:1.0.0](../../../E-R/reference-data/SeismicPhase.1.0.0.md)
2. [osdu:wks:reference-data--SeismicPolarity:1.0.0](../../../E-R/reference-data/SeismicPolarity.1.0.0.md)

## Deprecated Properties

| Cumulative Name | Value Type | Description                                                                                                                                                                   | Example | Migration                                                                   |
|-----------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| data.Phase      | string     | DEPRECATED: Please use SeismicPhaseID for better interoperability. Amount of phase rotation applied to data                                                                   | Zero    | Try to translate to reference values and populate `data.SeismicPhaseID`.    |
| data.Polarity   | string     | DEPRECATED: Please use SeismicPolarityID for better interoperability. Reflection polarity of embedded wavelet.  Normal, Reverse, Plus 90, Minus 90 according to SEG standard. | Normal  | Try to translate to reference values and populate `data.SeismicPolarityID`. |

## New Reference Value Relationships

| Cumulative Name                                                                                    | Value Type | Description                                                   | Example                                                   | Migration                                                                                                                       |
|----------------------------------------------------------------------------------------------------|------------|---------------------------------------------------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| data.SeismicPhaseID &rarr; [SeismicPhase](../../../E-R/reference-data/SeismicPhase.1.0.0.md)       | string     | The relationship to a SeismicPhase reference value record.    | partition-id:reference-data--SeismicPhase:ZeroPhase:      | Recommended for better interoperability. An automated migration is only possible if the `Phase` string usage was deterministic. |
| data.SeismicPolarityID &rarr; [SeismicPhase](../../../E-R/reference-data/SeismicPolarity.1.0.0.md) | string     | The relationship to a SeismicPolarity reference value record. | partition-id:reference-data--SeismicPolarity:PositiveSEG: |                                                                                                                                 |
 

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
