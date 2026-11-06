<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--RockImageType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--RockImageType:1.0.0](../../../E-R/reference-data/RockImageType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--RockImageType:CT | Computed Tomography | An image created using X-ray computed tomography, which captures multiple X-ray images from different angles to reconstruct detailed 3D models or cross-sectional slices of a sample. Commonly used for visualising internal structures in geological samples, CT provides high-resolution insights into a sample's internal features. | Changes in Description |
| partition-id:reference-data--RockImageType:Electron | Electron | An image created using an electron beam | Value added. |
| partition-id:reference-data--RockImageType:Electron.AugerElectron | Auger Electron | A scanning electron microscope image created using detected auger electrons | Value added. |
| partition-id:reference-data--RockImageType:Electron.BackscatteredElectron | Backscattered Electron | A scanning electron microscope image created using detected backscattered electrons | Value added. |
| partition-id:reference-data--RockImageType:Electron.Cathodoluminescence | Cathodoluminescence | A scanning electron microscope image created using cathodoluminescence | Value added. |
| partition-id:reference-data--RockImageType:Electron.CharacteristicXRay | Characteristic X-ray | A scanning electron microscope image created using detected characteristic x-rays | Value added. |
| partition-id:reference-data--RockImageType:Electron.ContinuousXRay | Continuous X-ray | A scanning electron microscope image created using detected continuous x-rays | Value added. |
| partition-id:reference-data--RockImageType:Electron.SecondaryElectron | Secondary Electron | A scanning electron microscope image created using detected secondary electrons | Value added. |
| partition-id:reference-data--RockImageType:Image | General | A general image. Use only when a more descriptive image type does not yet exist  | Changes in AttributionAuthority |
| partition-id:reference-data--RockImageType:Micro.Standard | Photomicrograph.Standard | DEPRECATED: Please use Code="OpticalPhotomicrograph" with Name="Optical Photomicrograph" instead. a microscope and a microscopy camera | **DEPRECATED, superseded by Code: OpticalPhotomicrograph**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--RockImageType:OpticalPhotograph | Optical Photograph | An image created using a camera | Value added. |
| partition-id:reference-data--RockImageType:OpticalPhotomicrograph | Optical Photomicrograph | An image created through a microscope and a microscopy camera | Value added. |
| partition-id:reference-data--RockImageType:Photo | Photograph | DEPRECATED: Please use Code="OpticalPhotograph" with Name="Optical Photograph" instead. An image created using a camera | **DEPRECATED, superseded by Code: OpticalPhotograph**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--RockImageType:SEM.BackScattered | ScanningElectronMicroscope.BackScattered | DEPRECATED: Please use Code="Electron.BackscatteredElectron" with Name="Backscattered Electron" instead. An image created using a Back-scattered Light Scanning electron Microscope | **DEPRECATED, superseded by Code: Electron.BackscatteredElectron**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--RockImageType:SEM.FocussedIonBeam | ScanningElectronMicroscope.FocussedIonBeam | DEPRECATED: Please use Code="Electron" with Name="Electron" instead. An image created using a Focussed Ion Beam Scanning Electron Microscope | **DEPRECATED, superseded by Code: Electron**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--RockImageType:XrayImaging | X-ray Imaging | An image produced using X-ray radiation, including techniques like radiography, phase-contrast imaging, and spectroscopic imaging. This category encompasses both Characteristic X-ray Imaging (for elemental mapping) and Continuous X-ray Imaging (for general radiography). Applications include inspecting materials for internal flaws, elemental analysis in sciences, and studying crystallography or microstructures. | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook RockImageType.1.xlsx](../../../ReferenceValues/Published/RockImageType.1.xlsx)
* &rarr; [Manifest record RockImageType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/RockImageType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)