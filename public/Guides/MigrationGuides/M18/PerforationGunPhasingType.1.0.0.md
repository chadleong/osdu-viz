<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--PerforationGunPhasingType:1.0.1`

Changes between [osdu:wks:reference-data--PerforationGunPhasingType:1.0.0](../../../E-R/reference-data/PerforationGunPhasingType.1.0.0.md) and [osdu:wks:reference-data--PerforationGunPhasingType:1.0.1](../../../E-R/reference-data/PerforationGunPhasingType.1.0.1.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The Perforating Gun Phasing (the angle between perforations), always measured in degrees of arc._
  * New Description: **_The angle between shots of a well perforation tool._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--PerforationGunPhasingType:0-deg | ~~0~~ | ~~0 deg~~ | **_Removed_** |
| partition-id:reference-data--PerforationGunPhasingType:0Degrees | 0 degrees | Successive shots have zero offset, i.e. all shots are aligned on one side of the casing. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:120-deg | ~~120~~ | ~~120 deg~~ | **_Removed_** |
| partition-id:reference-data--PerforationGunPhasingType:120Degrees | 120 degrees | Successive shots are offset by 120 degrees, i.e. 4 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:180-deg | ~~180~~ | ~~180 deg~~ | **_Removed_** |
| partition-id:reference-data--PerforationGunPhasingType:180Degrees | 180 degrees | Successive shots are offset by 180 degrees, i.e. 2 shots on opposite sides of the wellbore. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:20-deg | 20° | DEPRECATED: Please use Code="20Degrees" with Name="20Degrees" instead. Successive shots are offset by 20 degrees, i.e. 6 shots in sequence before repeating. | **DEPRECATED, superseded by Code: 20Degrees**<br>Changes in Name, Description |
| partition-id:reference-data--PerforationGunPhasingType:20Degrees | 20 degrees | Successive shots are offset by 20 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:30-deg | 30° | DEPRECATED: Please use Code="30Degrees" with Name="30Degrees" instead. Successive shots are offset by 30 degrees, i.e. 6 shots in sequence before repeating. | **DEPRECATED, superseded by Code: 30Degrees**<br>Changes in Name, Description |
| partition-id:reference-data--PerforationGunPhasingType:30Degrees | 30 degrees | Successive shots are offset by 30 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:45-deg | 45° | DEPRECATED: Please use Code="45Degrees" with Name="45Degrees" instead. Successive shots are offset by 45 degrees, i.e. 6 shots in sequence before repeating. | **DEPRECATED, superseded by Code: 45Degrees**<br>Changes in Name, Description |
| partition-id:reference-data--PerforationGunPhasingType:45Degrees | 45 degrees | Successive shots are offset by 45 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:5-deg | 5° | DEPRECATED: Please use Code="5Degrees" with Name="5Degrees" instead. Successive shots are offset by 5 degrees, i.e. 6 shots in sequence before repeating. | **DEPRECATED, superseded by Code: 5Degrees**<br>Changes in Name, Description |
| partition-id:reference-data--PerforationGunPhasingType:50Degrees | 50 degrees | Successive shots are offset by 50 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:5Degrees | 5 degrees | Successive shots are offset by 5 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:60-deg | ~~60~~ | ~~60 deg~~ | **_Removed_** |
| partition-id:reference-data--PerforationGunPhasingType:60Degrees | 60 degrees | Successive shots are offset by 60 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:72-deg | 72° | DEPRECATED: Please use Code="72Degrees" with Name="72Degrees" instead. Successive shots are offset by 72 degrees, i.e. 6 shots in sequence before repeating. | **DEPRECATED, superseded by Code: 72Degrees**<br>Changes in Name, Description |
| partition-id:reference-data--PerforationGunPhasingType:72Degrees | 72 degrees | Successive shots are offset by 72 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:8-deg | 8° | DEPRECATED: Please use Code="8Degrees" with Name="8Degrees" instead. Successive shots are offset by 8 degrees, i.e. 6 shots in sequence before repeating. | **DEPRECATED, superseded by Code: 8Degrees**<br>Changes in Name, Description |
| partition-id:reference-data--PerforationGunPhasingType:8Degrees | 8 degrees | Successive shots are offset by 8 degrees, i.e. 6 shots in sequence before repeating. | Value added. |
| partition-id:reference-data--PerforationGunPhasingType:90-deg | ~~90~~ | ~~90 deg~~ | **_Removed_** |
| partition-id:reference-data--PerforationGunPhasingType:90Degrees | 90 degrees | Successive shots are offset by 90 degrees, i.e. 3 shots in sequence before repeating. | Value added. |

# Value Spreadsheet and Manifest

* [Manifest record PerforationGunPhasingType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/PerforationGunPhasingType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)