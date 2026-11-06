<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicWaveType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicWaveType:1.0.1](../../../E-R/reference-data/SeismicWaveType.1.0.1.md) and [osdu:wks:reference-data--SeismicWaveType:1.0.1](../../../E-R/reference-data/SeismicWaveType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicWaveType:HorizontalShearWave | Horizontal shear wave | An S-wave in only the horizontal plane or the horizontal component of any S-wave. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:P | P | DEPRECATED: Please use Code="PressureWave" with Name="Pressure wave" instead. Indicates that the seismic waves correspond to a mix of Pressure and Vertical Shear waves | **DEPRECATED, superseded by Code: PressureWave**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:PressureHorizontalShearWave | Pressure/horizontal shear wave | A mix of P-waves and horizontal S-waves | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:PressureVerticalShearWave | Pressure/vertical shear wave | A mix of P-waves and vertical S-waves | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:PressureWave | Pressure wave | The particle motion is in the direction of propagation. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:PSh | P-Sh | DEPRECATED: Please use Code="PressureHorizontalShearWave" with Name="Pressure/horizontal shear wave" instead. Indicates that the seismic waves correspond to Horizontal Shear waves | **DEPRECATED, superseded by Code: PressureHorizontalShearWave**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:PSv | P-Sv | DEPRECATED: Please use Code="PressureVerticalShearWave" with Name="Pressure/vertical shear wave" instead. Indicates that the seismic waves correspond to Vertical Shear waves | **DEPRECATED, superseded by Code: PressureVerticalShearWave**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:Sh | Sh | DEPRECATED: Please use Code="HorizontalShearWave" with Name="Horizontal shear wave" instead. Indicates that the seismic waves correspond to Pressure or Primary waves | **DEPRECATED, superseded by Code: HorizontalShearWave**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:ShearWave | Shear wave | The particle motion is perpendicular to the direction of propagation. | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:Sv | Sv | DEPRECATED: Please use Code="VerticalShearWave" with Name="Vertical shear wave" instead. Indicates that the seismic waves correspond to a mix of Pressure and Horizontal Shear waves | **DEPRECATED, superseded by Code: VerticalShearWave**<br>Changes in AttributionAuthority |
| partition-id:reference-data--SeismicWaveType:VerticalShearWave | Vertical shear wave | An S-wave in only the vertical plane or the vertical component of any S-wave. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SeismicWaveType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicWaveType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)