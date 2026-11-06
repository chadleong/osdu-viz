<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicEnergySourceType:1.0.1`

Changes between [osdu:wks:reference-data--SeismicEnergySourceType:1.0.1](../../../E-R/reference-data/SeismicEnergySourceType.1.0.1.md) and [osdu:wks:reference-data--SeismicEnergySourceType:1.0.1](../../../E-R/reference-data/SeismicEnergySourceType.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicEnergySourceType:Airgun | Air gun | DEPRECATED: Please use Code="AirGun" with Name="Air gun" instead. Compressed air is released from a chamber towed by a ship. Originally developed by Bolt Technology. | **DEPRECATED, superseded by Code: AirGun**<br>Changes in Description |
| partition-id:reference-data--SeismicEnergySourceType:AirGun.Cage | Cage | An air gun in a perforated steel cage to reduce the bubble effect. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:AirGun.GasGun | Gas gun | A seismic energy source in which a mixture of propane or butane with oxygen or air is exploded under the water. | Changes in Name, NameAlias |
| partition-id:reference-data--SeismicEnergySourceType:AirGun.MiniShallowAirGun | Mini-shallow air gun | An air gun designed for shallow exploration. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:Dynamite | Dynamite | DEPRECATED: Please use Code="Explosion.Dynamite" with Name="Dynamite" instead. A high energy chemical explosive. | **DEPRECATED, superseded by Code: Explosion.Dynamite**<br>Changes in Description |
| partition-id:reference-data--SeismicEnergySourceType:Explosion.Cord | Cord | An explosive rope. A detonation at one end starts an explosion wave traveling down the cord, detonating other explosives that may be attached to the cord. | Changes in Name, NameAlias |
| partition-id:reference-data--SeismicEnergySourceType:Explosion.Dynamite | Dynamite | A high energy chemical explosive. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:Implosion.WaterGun | Water gun | A seismic source that propels a slug of water into the water mass, producing an implosive effect. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:PlasmaSound.Sparker | Sparker | The discharge between two electrodes in salt water generates heat to vaporize the water (to plasma) which then condenses to create an implosion. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:Vibrator.Electromagnetic | Electromagnetic | Vibrations are created by a electromagnetic linear motor. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:Vibrator.Electromechanical | Electromechanical | Vibrations are created by a electromechanical device. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:Vibrator.Vibroseis | Vibroseis | A seismic method in which a vibrator is used as an energy source to generate a controlled wave train. Developed by Conoco, but the term Vibroseis is no longer a trademark. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:Vibroseis | Vibroseis | DEPRECATED: Please use Code="Vibrator.Vibroseis" with Name="Vibroseis" instead. Uses oscillating mass coupled to Earth's surface onshore. | **DEPRECATED, superseded by Code: Vibrator.Vibroseis**<br>Changes in Description |
| partition-id:reference-data--SeismicEnergySourceType:Watergun | Water gun | DEPRECATED: Please use Code="Implosion.WaterGun" with Name="Water gun" instead. A seismic source that propels a slug of water into the water mass, producing an implosive effect. | **DEPRECATED, superseded by Code: Implosion.WaterGun**<br>Changes in Description |
| partition-id:reference-data--SeismicEnergySourceType:WeightDrop.InclinedImpactor | Inclined impactor | A vehicle-transported surface seismic source wherein an impact mass is propelled along the shooting path to strike an earth-contacting base plate at a predetermined angle. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:WeightDrop.PShooter | P shooter | A weight-drop system with additional acceleration provided by a spring and designed to work at a very fast rate. | Changes in Name |
| partition-id:reference-data--SeismicEnergySourceType:WeightDrop.Whacker | Whacker | An earth impactor used as a seismic source for shallow-penetration studies. | Changes in Name |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Seismic_Energy_Source_Type)
* &rarr; [Manifest record SeismicEnergySourceType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicEnergySourceType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)