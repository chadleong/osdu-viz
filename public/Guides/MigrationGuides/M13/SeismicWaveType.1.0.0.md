<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicWaveType:1.0.1`

Governance is taken over by PPDM. 
Potential reference value migration to [`osdu:wks:reference-data--SeismicWaveType:1.0.1`](../../../E-R/reference-data/SeismicWaveType.1.0.1.md):

# SeismicWaveType

PPDM introduces a set of clean definitions and Code styles. The previous OSDU values, which used abbreviations as Code, 
were deprecated and superseding values indicated.

* No action is required if an operator wants to carry on with the previously used OSDU codes.
* If operators want to migrate to the PPDM reference values a migration is required, which is presented in the following
  table (alphabetically ordered by deprecated code).

| Deprecated `id`                                  | Superseded by ìd`                                                        | Superseded Name                | Description                                                                                                                                                                          |
|--------------------------------------------------|--------------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--SeismicWaveType:PSh | partition-id:reference-data--SeismicWaveType:PressureHorizontalShearWave | Pressure/horizontal shear wave | DEPRECATED: Please use Code="PressureHorizontalShearWave" with Name="Pressure/horizontal shear wave" instead. Indicates that the seismic waves correspond to Horizontal Shear waves  |
| partition-id:reference-data--SeismicWaveType:PSv | partition-id:reference-data--SeismicWaveType:PressureVerticalShearWave   | Pressure/vertical shear wave   | DEPRECATED: Please use Code="PressureVertical ShearWave" with Name="Pressure/vertical shear wave" instead. Indicates that the seismic waves correspond to Vertical Shear waves       |
| partition-id:reference-data--SeismicWaveType:P   | partition-id:reference-data--SeismicWaveType:PressureWave                | Pressure wave                  | DEPRECATED: Please use Code="PressureWave" with Name="Pressure wave" instead. Indicates that the seismic waves correspond to a mix of Pressure and Vertical Shear waves              |
| partition-id:reference-data--SeismicWaveType:Sh  | partition-id:reference-data--SeismicWaveType:HorizontalShearWave         | Horizontal shear wave          | DEPRECATED: Please use Code="HorizontalShearWave" with Name="Horizontal shear wave" instead. Indicates that the seismic waves correspond to Pressure or Primary waves                |
| partition-id:reference-data--SeismicWaveType:Sv  | partition-id:reference-data--SeismicWaveType:VerticalShearWave           | Vertical shear wave            | DEPRECATED: Please use Code="VerticalShearWave" with Name="Vertical shear wave" instead. Indicates that the seismic waves correspond to a mix of Pressure and Horizontal Shear waves |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
