<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SidewallCoreType:1.0.1`

**_No schema change, except entity description; all previously shipped values are deprecated._**

The content of this reference list
[`osdu:wks:reference-data--SidewallCoreType:1.0.1`](../../../E-R/reference-data/SidewallCoreType.1.0.1.md)
is now governed by PPDM. The description has been changed to _A type of sidewall core based on the method of
collection._ Both previous value codes have been shortened and deprecated, one more value has been added by PPDM.

# Schema Changes

* Changed Description
  * Old Description: _A reference value type for Sidewall Cores._
  * New Description: **_A type of sidewall core based on the method of collection._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SidewallCoreType:Percussion | Percussion | A hollow, retrievable, cylindrical bullet is shot into the borehole wall and retrieved with the rock sample inside. | Value added. |
| partition-id:reference-data--SidewallCoreType:PercussionSidewallCore | Percussion sidewall core | DEPRECATED: Please use Code="Percussion" with Name="Percussion" instead. Cylindrical sidewall core acquired using a wireline logging tool.  Cores are explosively cut and thus generally more damaged.  Cores are typically up to 4.5cm long and 2.5cm wide. | **DEPRECATED, superseded by Code: Percussion**<br>Changes in Name, NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--SidewallCoreType:Pressurized | Pressurized | A rotary sidewall core brought to surface at reservoir pressure. | Value added. |
| partition-id:reference-data--SidewallCoreType:Rotary | Rotary | A diamond-tipped drill cuts a plug from the borehole wall. The drill and sample are retracted into the body of the tool. | Value added. |
| partition-id:reference-data--SidewallCoreType:RotarySidewallCore | Rotary sidewall core | DEPRECATED: Please use Code="Rotary" with Name="Rotary" instead. Cylindrical sidewall core acquired using a wireline logging tool.  Cores are mechanically extracted and thus generally less damaged.  Cores are typically up to 5cm long and 2.5cm wide. | **DEPRECATED, superseded by Code: Rotary**<br>Changes in Name, Description, AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record SidewallCoreType.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/FIXED/SidewallCoreType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)