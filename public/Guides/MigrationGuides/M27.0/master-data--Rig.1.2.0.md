<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Rig:2.0.0`

Changes between [osdu:wks:master-data--Rig:1.2.0](../../../E-R/master-data/Rig.1.2.0.md) and [osdu:wks:master-data--Rig:2.0.0](../../../E-R/master-data/Rig.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Definition of a drilling rig._
  * New Description: **_Definition the Physical Rig. These values do not or very rarely change. Use the RigSpecification schema for all configuration data for the rig._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.OwnerID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Owner ID|The identifier of the company that owns the rig.|**_Breaking Change: REMOVED_**|
|data.TypeRig<br> &rarr; [RigType](../../../E-R/reference-data/RigType.1.0.1.md)|string|Type Rig|The type of rig (e.g., semi-submersible, jack-up, etc.)|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.TypeRigID<br> &rarr; [RigType](../../../E-R/reference-data/RigType.1.0.1.md)|string|Type Rig ID|The type of rig (e.g., semi-submersible, jack-up, etc.)|Added property|
|data.ClassRig|string|Class Rig|Classification of the rig, such as Deepwater, Shallow Water, Fixed Platform, Mobile Offshore Drilling Unit (MODU). For onshore or offshore status see Facility.data.OperatingEnvironmentID|Changes in: Description, Example|
|data.Manufacturer|string|Manufacturer|The company who constructed the rig|Added property|
|data.Model|string|Model|The design model of the rig.|Added property|
|data.Generation|string|Generation|The technological sophistication and vintage of a drilling rig.|Added property|
|data.ConstructionDate|string|Construction Date|The date the date Construction of the Rig ended.|Added property|
|data.ServiceDate|string|Service Date|The date the Rig first came into service.|Added property|
|data.RetiredDate|string|Retired|The date the Rig was retired|Added property|
|data.YearEnterService|integer|Year Enter Service|The 4-digit year the rig entered service.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)