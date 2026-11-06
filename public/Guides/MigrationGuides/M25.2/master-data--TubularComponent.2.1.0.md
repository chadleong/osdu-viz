<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--TubularComponent:2.2.0`

Changes between [osdu:wks:master-data--TubularComponent:2.1.0](../../../E-R/master-data/TubularComponent.2.1.0.md) and [osdu:wks:master-data--TubularComponent:2.2.0](../../../E-R/master-data/TubularComponent.2.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Nozzles[]_|_object_|_Nozzle_|_Description of the ID of the Nozzle used in the Tubular Component Fragment Description: number and size of nozzles / jets in a Tubular Component_|Added property|
|data.Nozzles[].NozzleID|string|Nozzle Identifier|Unique identifier for this instance of Nozzle|Added property|
|data.Nozzles[].DiameterInside|number|Diameter Inside|Inside Diameter of the nozzle|Added property|
|data.Nozzles[].Length|number|Length|Total length of the nozzle|Added property|
|data.Nozzles[].NozzleTypeID<br> &rarr; [TubularComponentNozzleType](../../../E-R/reference-data/TubularComponentNozzleType.1.0.0.md)|string|Nozzle Type Identifier|Describes the Nozzle Type (such as extended; normal; blank)|Added property|
|data.Nozzles[].Orientation|number|Orientation|Nozzle Orientation|Added property|
|data.Nozzles[].NozzleCount|integer|Nozzle Count|Number of Nozzles installed in component|Added property|
|_data.Sensors[]_|_object_|_Sensor_|_Description of the type of Sensor for the Tubular Components Fragment Description: Tubular Sensor Component Schema_|Added property|
|data.Sensors[].SensorTypeID<br> &rarr; [TubularComponentSensorType](../../../E-R/reference-data/TubularComponentSensorType.1.0.0.md)|string|Sensor Type ID|Unique identifier for this Instance of Sensor log|Added property|
|data.Sensors[].ToolClassIDs[]<br> &rarr; [WellLogToolClass](../../../E-R/reference-data/WellLogToolClass.1.0.0.md)|string|Tool Class Identifiers|An array of well log generic tool types used in this Log Run.|Added property|
|data.Sensors[].ToolCodeIDs[]<br> &rarr; [WellLogToolCode](../../../E-R/reference-data/WellLogToolCode.1.0.0.md)|string|Tool Code Identifiers|An array of PWLS tool mnemonics used in this Log Run.|Added property|
|data.Sensors[].SensorMeasurementType|string|Sensor Measurement Type|Specifies the type of sensor in a tubular string.|Added property|
|data.Sensors[].OffsetBottom|number|Offset Bottom|Offset from the bottom of the component|Added property|
|data.Sensors[].Comments|string|Comments|Additional comments and remarks|Added property|
|data.Sensors[].MeasurementOffset|string|Measurement Offset|Effective offset of measurement of sensor|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)