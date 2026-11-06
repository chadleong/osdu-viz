<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicEnergySourceType:1.0.1`

The content of this reference list 
[`osdu:wks:reference-data--SeismicEnergySourceType:1.0.1`](../../../E-R/reference-data/SeismicEnergySourceType.1.0.1.md)
is now governed by PPDM. The schema is patched to carry PPDM's definition of this
reference value type. The major difference is a hierarchical organization of sources and the addition of many more
specialized types. All previous 4 values are deprecated, 19 new values are added. Due to the enhanced completeness the 
governance is now changed to OPEN.

Deprecations are listed below:

| Deprecated `id`                                                | Superseded by ìd`                                                       | Superseded Name    | Description                                                                                                                                                                                |
|----------------------------------------------------------------|-------------------------------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--SeismicEnergySourceType:Airgun    | partition-id:reference-data--SeismicEnergySourceType:AirGun             | AirGun             | DEPRECATED: Please use Code="AirGun" with Name="AirGun" instead. Compressed air is released from a chamber towed by a ship. Originally developed by Bolt Technology.                       |
| partition-id:reference-data--SeismicEnergySourceType:Dynamite  | partition-id:reference-data--SeismicEnergySourceType:Explosion.Dynamite | Explosion.Dynamite | DEPRECATED: Please use Code="Explosion.Dynamite" with Name="Explosion.Dynamite" instead. A high energy chemical explosive.                                                                 |
| partition-id:reference-data--SeismicEnergySourceType:Vibroseis | partition-id:reference-data--SeismicEnergySourceType:Vibrator.Vibroseis | Vibrator.Vibroseis | DEPRECATED: Please use Code="Vibrator.Vibroseis" with Name="Vibrator.Vibroseis" instead. Uses oscillating mass coupled to Earth's surface onshore.                                         |
| partition-id:reference-data--SeismicEnergySourceType:Watergun  | partition-id:reference-data--SeismicEnergySourceType:Implosion.WaterGun | Implosion.WaterGun | DEPRECATED: Please use Code="Implosion.WaterGun" with Name="Implosion.WaterGun" instead. A seismic source that propels a slug of water into the water mass, producing an implosive effect. |


[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
