<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--TubularComponent:2.3.0`

Changes between [osdu:wks:master-data--TubularComponent:2.2.0](../../../E-R/master-data/TubularComponent.2.2.0.md) and [osdu:wks:master-data--TubularComponent:2.3.0](../../../E-R/master-data/TubularComponent.2.3.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ParentWellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Parent Wellbore Identifier|Identifier of the wellbore the Component is installed/run into.|Changes in: Description|
|data.ParentAssemblyID<br> &rarr; [TubularAssembly](../../../E-R/master-data/TubularAssembly.2.1.0.md)|string|Parent Assembly Identifier|Identifier of the Assembly the component is part of.|Changes in: Description|
|data.TubularComponentSequence|integer|Sequence Number|The sequence within which the components entered the hole. That is, a sequence number of 1 entered first, 2 entered 2nd, etc.|Changes in: Description|
|data.TubularComponentNominalSize|number|Nominal Size|Nominal size (outer diameter 'OD') of the component, e.g. 9.625", 12.25"|Changes in: Description, Example|
|data.TubularComponentNominalSizeDescription|string|Nominal Size Description|Nominal size description e.g. 8-1/2" x 9-5/8"|Added property|
|data.InnerDiameter|number|Inner Diameter|Nominal inner diameter 'ID' of the component.|Changes in: Description|
|data.TubularComponentBoxPinConfigID<br> &rarr; [TubularComponentPinBoxType](../../../E-R/reference-data/TubularComponentPinBoxType.1.0.0.md)|string|Box/Pin Configuration Identifier|Box / Pin configuration Identifier|Changes in: Description|
|data.TubularComponentTopConnectionTypeID<br> &rarr; [TubularComponentConnectionType](../../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md)|string|Top Connection Type Identifier|Identifier of the Top Connection Type|Changes in: Description|
|data.TubularComponentBottomConnectionTypeID<br> &rarr; [TubularComponentConnectionType](../../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md)|string|Bottom Connection Type Identifier|Identifier of the Bottom Connection Type|Changes in: Description|
|data.TubularComponentTopMD|number|Component Top Measured Depth|The installed measured depth of the top of the specific component|Changes in: Description|
|data.TubularComponentBaseMD|number|Component Base Measured Depth|The installed measured depth of the base of the specific component|Changes in: Description|
|data.TubularComponentTopReportedTVD|number|Component Top True Vertical Depth|True Vertical Depth of the top of the component measured from the Wellhead|Changes in: Description|
|data.TubularComponentBaseReportedTVD|number|Component Base True Vertical Depth|True Vertical Depth of the base of the component measured from the Wellhead|Changes in: Description|
|data.JointLengthAverage|number|Average Joint Length|Average Joint Length|Added property|
|data.OutsideCouplingLength|number|Outside Coupling Length|Outside Coupling Length|Added property|
|data.IsThreadLockUsed|boolean|Is Thread Lock Used|Is thread lock used when making up the pipe?|Changes in: Description|
|data.LinearCapacity|number|Linear Capacity|Linear Capacity volume/length inside component|Changes in: Description|
|data.ClosedEndDisplacement|number|Closed End Displacement|Closed End Displacement volume/length|Changes in: Description|
|data.YoungsModulus|number|Youngs Modulus|Youngs Modulus of Elasticity|Changes in: Description|
|_data.Nozzles[]_|_object_|_Nozzle_|_Description of the Size (ID) of the Nozzle used in the Tubular Component Fragment Description: number and size of nozzles / jets in a Tubular Component_|Changes in: Description|
|data.Nozzles[].NozzleID|string|Nozzle Identifier|Unique identifier for this instance of Nozzle|Changes in: Example|
|data.Nozzles[].DiameterInside|number|Diameter Inside|Inside Diameter of the nozzle|Changes in: Example|
|data.Nozzles[].Length|number|Length|Total length of the nozzle|Changes in: Example|
|data.Nozzles[].NozzleTypeID<br> &rarr; [TubularComponentNozzleType](../../../E-R/reference-data/TubularComponentNozzleType.1.0.0.md)|string|Nozzle Type Identifier|Describes the Nozzle Type (such as extended; normal; blank)|Changes in: Example|
|data.Nozzles[].Orientation|number|Orientation|Nozzle Orientation|Changes in: Example|
|_data.Sensors[]_|_object_|_Sensor_|_Description of the type of Sensor(s) for the Tubular Components e.g. for MWD/LWD tools Fragment Description: Tubular Sensor Component Schema_|Changes in: Description|
|data.Sensors[].SensorTypeID<br> &rarr; [TubularComponentSensorType](../../../E-R/reference-data/TubularComponentSensorType.1.0.0.md)|string|Sensor Type ID|Unique identifier for this Instance of Sensor log|Changes in: Example|
|data.Sensors[].ToolClassIDs[]<br> &rarr; [WellLogToolClass](../../../E-R/reference-data/WellLogToolClass.1.0.0.md)|string|Tool Class Identifiers|An array of well log generic tool types used in this Log Run.|Changes in: Example|
|data.Sensors[].ToolCodeIDs[]<br> &rarr; [WellLogToolCode](../../../E-R/reference-data/WellLogToolCode.1.0.0.md)|string|Tool Code Identifiers|An array of PWLS tool mnemonics used in this Log Run.|Changes in: Example|
|data.Sensors[].OffsetBottom|number|Offset Bottom|Sensor offset from the bottom of the component|Changes in: Description, Example|
|data.Sensors[].Comments|string|Comments|Additional comments and remarks|Changes in: Example|
|data.Sensors[].MeasurementOffset|string|Measurement Offset|Effective offset of measurement of sensor|Changes in: Example|
|_data.Connections[]_|_object_|_Abstract Tubular Component Connection_|_Top and/or Bottom Connection information Fragment Description: Tubular Connection specific properties. Based on WITSML Tubular  Component 'Connection' ComplexType._|Added property|
|data.Connections[].CXNOuterDiameter|number|Connection Outer Diameter|Outside diameter (OD) of the body of the connection.|Added property|
|data.Connections[].CXNInnerDiameter|number|Connection Inner Diameter|Inside diameter (ID) of the connection.|Added property|
|data.Connections[].OutsideConnectionLength|number|Outside Connection Length|External length of the connection.|Added property|
|data.Connections[].InsideConnectionLength|number|Inside Connection Length|Internal length of the connection.|Added property|
|data.Connections[].ThreadTypeID<br> &rarr; [TubularComponentConnectionType](../../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md)|string|Thread Type Identifier|Thread/Connection Type|Added property|
|data.Connections[].ThreadSize|number|Thread Size|Thread size/diameter.|Added property|
|data.Connections[].YieldStress|number|Yield Stress|Tensile yield stress of the connection|Added property|
|data.Connections[].YieldTorque|number|Yield Torque|Torque limit for the connection|Added property|
|data.Connections[].PositionID<br> &rarr; [TubularComponentCXNPosition](../../../E-R/reference-data/TubularComponentCXNPosition.1.0.0.md)|string|Position Identifier|Position of connection|Added property|
|data.Connections[].CriticalCrossSectionArea|number|Critical Cross Section Area|Critical Cross Section Area (for bending stiffness ratio).|Added property|
|data.Connections[].LeakPressure|number|Leak Pressure|Leak Pressure|Added property|
|data.Connections[].MakeUpTorque|number|Make Up Torque|Make Up Torque|Added property|
|data.TotalFlowArea|number|Total Flow Area|TFA of all Nozzles|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)