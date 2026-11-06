<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--RigPump:1.1.0`

Changes between [osdu:wks:master-data--RigPump:1.0.0](../../../E-R/master-data/RigPump.1.0.0.md) and [osdu:wks:master-data--RigPump:1.1.0](../../../E-R/master-data/RigPump.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.EquipmentName|string|Equipment Name|Human-recognizable name for the equipment.|Added property|
|data.EquipmentNumber|integer|Equipment Number|A number assigned to the Equipment to differentiate it from other identical equipment on the rigsite.|Added property|
|data.EquipmentManufacturer|string|Equipment Make|The Make or Manufacturer of the equipment/unit|Added property|
|data.EquipmentModel|string|Equipment Model|The Model of the equipment/unit.|Added property|
|data.EquipmentTypeID|string|Equipment Type ID|A description of the "type" of equipment being defined. For example, a mud pump may have the "type" Triplex, Duplex, Mixing, etc. or a derrick type may be conventional, portable mast, box, etc.|Added property|
|data.EquipmentOwnerID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Equipment Owner ID|The owner of the equipment or unit|Added property|
|data.EquipmentTag|string|Equipment Tag|An identification tag for the equipment/unit. A serial number is a type of identification tag; however, some tags contain many pieces of information. This element only identifies the tag and does not describe the contents.|Added property|
|data.Comments|string|Comments|Free text remarks about the equipment/unit.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)