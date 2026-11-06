<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ConventionalCoreType:1.0.1`

The content of this reference list 
[`osdu:wks:reference-data--ConventionalCoreType:1.0.1`](../../../E-R/reference-data/ConventionalCoreType.1.0.1.md)
is now governed by PPDM. The description has been changed to _An interval of rock core extracted from the bottom of a
wellbore._

## Recommended ConventionalCoreType Values

| `id`                                                           | Name               | Description                                                                                                                                                     | 
|----------------------------------------------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--ConventionalCoreType:Conventional | Conventional core  | Standard or routine cylindrical continuous core.                                                                                                                |-|
| partition-id:reference-data--ConventionalCoreType:FullClosure  | Full closure core  | This coring system for unconsolidated sediments has a special device to close the barrel before the assembly is lifted off the bottom of the hole.              |-|
| partition-id:reference-data--ConventionalCoreType:Piston       | Piston core        | A heavily weighted core tube is dropped into the seabed; a piston inside the tube creates a vacuum that draws the unconsolidated sediment upward into the tube. |-|
| partition-id:reference-data--ConventionalCoreType:Pressure     | Pressure core      | The coring system holds the core at the reservoir pressure, thus retaining all fluids in the core.                                                              |-|
| partition-id:reference-data--ConventionalCoreType:RubberSleeve | Rubber sleeve core | The core barrel has an inner rubber sleeve to aid in recovering unconsolidated or highly fractured rock.                                                        |-|
| partition-id:reference-data--ConventionalCoreType:Sponge       | Sponge core        | The core barrel has a sponge liner that traps the reservoir oil while allowing gas and water to escape.                                                         |-|
| partition-id:reference-data--ConventionalCoreType:Unspecified  | Unspecified        | -                                                                                                                                                               |-|

## Deprecated ConventionalCoreType Values

| Deprecated `id`                                                    | Superseded by ìd`                                              | Superseded Name | Description                                                                                                                                                                                                       |
|--------------------------------------------------------------------|----------------------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--ConventionalCoreType:ConventionalCore | partition-id:reference-data--ConventionalCoreType:Conventional | Conventional    | DEPRECATED: Please use Code="Conventional" with Name="Conventional" instead. Standard or routine cylindrical continuous core, typically cut in 2.375-5.5 inch diameters, and in 6 or 9 metre core barrel lengths. |
| partition-id:reference-data--ConventionalCoreType:DropCore         | partition-id:reference-data--ConventionalCoreType:Piston       | Piston          | DEPRECATED: Please use Code="Piston" with Name="Piston" instead. Shallow sediment cores typically collected for geo-technical reasons, for example, rig stability or rig leg penetration.                         |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
