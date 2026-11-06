<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--TubularComponent:2.4.0`

Changes between [osdu:wks:master-data--TubularComponent:2.3.0](../../../E-R/master-data/TubularComponent.2.3.0.md) and [osdu:wks:master-data--TubularComponent:2.4.0](../../../E-R/master-data/TubularComponent.2.4.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Well Tubular data contains information on the tubular assemblies and their components for the well, wellbore, or wellbore completion (as appropriate). The tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well in the context of drilling, which is then pulled back out._
  * New Description: **_Well Tubular data contains information on the tubular assemblies installed into the well, wellbore, or wellbore completion (as appropriate). Tubulars can be tubing, casing or liners or other related equipment which is installed into the well. Tubulars can also be equipment which is lowered into the well e.g. a drillstring, which is then pulled back out._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_data.Nozzles[]_|_object_|_Nozzle_|_Description of the Size (ID) of the Nozzle (Jet) used in the Tubular Component Fragment Description: number and size of nozzles / jets in a Tubular Component_|Changes in: Description|
|_data.Bend_|_object_|_Abstract Tubular Component Bend_|_Bend specific information Fragment Description: Tubular Component Bend specific properties. Based on WITSML Tubular  Component 'Bend' ComplexType._|Added property|
|data.Bend.BendAngle|number|Bend Angle|Bend Angle|Added property|
|data.Bend.BendOffset|number|Bend Offset|Offset distance from the bottom connection to the bend|Added property|
|_data.BitRecord_|_object_|_Abstract Tubular Component Bit Record_|_Bit Record specific information Fragment Description: Tubular Component Bit Record specific properties. Based on WITSML Tubular  Component 'BitRecord' ComplexType._|Added property|
|data.BitRecord.NumBit|string|Identifier|Bit number and rerun number e.g. "4.1" for the first rerun of bit 4.|Added property|
|data.BitRecord.DiameterBit|number|Bit Diameter|Diameter of drilled hole.|Added property|
|data.BitRecord.DiameterPassThrough|number|Pass Through Diameter|Minimum hole or tubing which bit will pass through (for bi-centre bits).|Added property|
|data.BitRecord.DiameterPilot|number|Pilot Diameter|Diameter of pilot bit (for bi-centre bits).|Added property|
|data.BitRecord.TypeBitID<br> &rarr; [BitType](../../../E-R/reference-data/BitType.1.0.2.md)|string|Bit Type Identifier|Type of bit.|Added property|
|data.BitRecord.Cost|number|Cost|Bit cost in local currency.|Added property|
|data.BitRecord.MfgCode|string|Manufacturer Code|The manufacturer's code for the bit e.g. model number|Added property|
|data.BitRecord.IADCCode|string|IADC code|IADC bit code for PDC/Roller Cone Bits|Added property|
|data.BitRecord.InitialConditionInnerID<br> &rarr; [BitDullInnerOuter](../../../E-R/reference-data/BitDullInnerOuter.1.0.0.md)|string|Initial Inner Condition Identifier|As run bit IADC Dull Grade (I) Condition of Inner tooth rows (inner 2/3 of bit) (0-8).|Added property|
|data.BitRecord.InitialConditionOuterID<br> &rarr; [BitDullInnerOuter](../../../E-R/reference-data/BitDullInnerOuter.1.0.0.md)|string|Initial Outer Condition Identifier|As run bit IADC Dull Grade (O) Condition of Outer tooth rows (outer 1/3 of bit) (0-8).|Added property|
|data.BitRecord.InitialConditionDullID<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Initial Dull Condition Identifier|As run bit IADC Dull Grade (D) Overall dull condition from IADC bit wear 2 character codes.|Added property|
|data.BitRecord.InitialConditionLocationID<br> &rarr; [BitDullLocationCode](../../../E-R/reference-data/BitDullLocationCode.1.0.0.md)|string|Initial Condition Location Identifier|As run bit IADC Dull Grade (L) Location Row and cone numbers where wear located (e.g. Cracked Cone, Lost Cone etc).|Added property|
|data.BitRecord.InitialConditionBearingID<br> &rarr; [BitDullBearingCode](../../../E-R/reference-data/BitDullBearingCode.1.0.0.md)|string|Initial Condition Bearing Identifier|As run bit IADC Dull Grade (B) Condition of bit Bearings (integer 0-8 or E, F, N or X)).|Added property|
|data.BitRecord.InitialConditionGaugeID<br> &rarr; [BitDullGaugeCode](../../../E-R/reference-data/BitDullGaugeCode.1.0.0.md)|string|Initial Condition Gauge Identifier|As run bit IADC Dull Grade (G) Condition of bit Gauge in 1/16 of an inch. I = in gauge, else number of 16ths out of gauge.|Added property|
|data.BitRecord.InitialConditionOtherID<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Initial Condition Other Identifier|As run bit IADC Dull Grade (O) Other comments on bit condition from IADC list (BitDullCode in standard list).|Added property|
|data.BitRecord.InitialConditionReasonID<br> &rarr; [BitReasonPulledCode](../../../E-R/reference-data/BitReasonPulledCode.1.0.0.md)|string|Initial Condition Reason Identifier|As run bit IADC Dull Grade (R) Reason bit was pulled|Added property|
|data.BitRecord.FinalConditionInnerID<br> &rarr; [BitDullInnerOuter](../../../E-R/reference-data/BitDullInnerOuter.1.0.0.md)|string|Final Condition Inner Identifier|Pulled bit IADC Dull Grade (I) Condition of Inner tooth rows (inner 2/3 of bit) (0-8).|Added property|
|data.BitRecord.FinalConditionOuterID<br> &rarr; [BitDullInnerOuter](../../../E-R/reference-data/BitDullInnerOuter.1.0.0.md)|string|Final Condition Outer Identifier|Pulled bit IADC Dull Grade (O) Condition of Outer tooth rows (outer 1/3 of bit) (0-8).|Added property|
|data.BitRecord.FinalConditionDullID<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Final Condition Dull Identifier|Pulled bit IADC Dull Grade (D) Overall Dull condition from IADC bit wear 2 character codes.|Added property|
|data.BitRecord.FinalConditionLocationID<br> &rarr; [BitDullLocationCode](../../../E-R/reference-data/BitDullLocationCode.1.0.0.md)|string|Final Condition Location Identifier|Pulled bit IADC Dull Grade (L) Location Row and cone numbers where wear located (e.g. Cracked Cone, Lost Cone etc).|Added property|
|data.BitRecord.FinalConditionBearingID<br> &rarr; [BitDullBearingCode](../../../E-R/reference-data/BitDullBearingCode.1.0.0.md)|string|Final Condition Bearing Identifier|Pulled bit IADC Dull Grade (B) Condition of bit Bearings (integer 0-8 or E, F, N or X).|Added property|
|data.BitRecord.FinalConditionGaugeID<br> &rarr; [BitDullGaugeCode](../../../E-R/reference-data/BitDullGaugeCode.1.0.0.md)|string|Final Condition Gauge Identifier|Pulled bit IADC Dull Grade (G) Condition of bit Gauge in 1/16 of a inch. I = in gauge, else number of 16ths out of gauge.|Added property|
|data.BitRecord.FinalConditionOtherID<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Final Condition Other Identifier|Pulled bit IADC Dull Grade (O) Other comments on bit condition.|Added property|
|data.BitRecord.FinalConditionReasonID<br> &rarr; [BitReasonPulledCode](../../../E-R/reference-data/BitReasonPulledCode.1.0.0.md)|string|Final Condition Reason Identifier|Pulled bit  IADC Dull Grade (R) Reason bit was pulled.|Added property|
|data.BitRecord.BitDullComments|string|Bit Dull Comments|Any other Bit Dull comments/description, older T-B-G code or full formatted dull grade e.g.  0-2-WT-N/S-X-I-LN-TD|Added property|
|data.BitRecord.DriveType|string|Drive Type|Bit drive type (Motor, rotary table etc).|Added property|
|data.BitRecord.BitClass|string|Bit Class|N = new, U = used.|Added property|
|data.BitRecord.ReRunBitNumber|string|Re-run Bit Number|Re-run Bit Number to describe bit number when previously run|Added property|
|data.BitRecord.HardAbrasiveFormationID<br> &rarr; [BitFormationType](../../../E-R/reference-data/BitFormationType.1.0.0.md)|string|Hard/Abrasive Formation Identifier|Hard/Abrasive Formation|Added property|
|data.BitRecord.HoursOnBit|number|Hours On Bit|Cumulative Hours on Bit|Added property|
|data.BitRecord.Remarks|string|Remarks|Remarks|Added property|
|_data.HoleOpener_|_object_|_Abstract Tubular Component Hole Opener_|_Hole Opener specific information Fragment Description: Hole Opener Component Schema. Describes the hole-opener tool (often called a ‘reamer’) used on the tubular string. Based on the WITSML Tubular 'HoleOpener' ComplexType_|Added property|
|data.HoleOpener.HoleOpenerTypeID<br> &rarr; [HoleOpenerType](../../../E-R/reference-data/HoleOpenerType.1.0.0.md)|string|Hole Opener Type Identifier|Type of hole opener - Under reamer or fixed blade.|Added property|
|data.HoleOpener.NumCutters|integer|Number of Cutters|Number of cutters on the tool.|Added property|
|data.HoleOpener.HoleOpenerDiameter|number|Hole Opener Diameter|Diameter of the reamer.|Added property|
|data.HoleOpener.HoleOpenerDiameterMaximum|number|Hole Opener Diameter Maximum|Maximum extended size of the hole opener when the arms are extended.|Added property|
|data.HoleOpener.FishneckLength|number|Fishneck Length|Fishneck length of the hole opener. Dimension supplied by manufacturer. This dimension is used with the retrieval tool in case item is lost in hole.|Added property|
|data.HoleOpener.FlowRatePercent|number|Flow Rate Percent|Flow rate percent across the tool|Added property|
|data.HoleOpener.TotalFlowArea|number|Total Flow Area|Total Flow Area across the nozzles (jets)|Added property|
|data.HoleOpener.PluggedPercent|number|Plugged Percent|% of the Hole Opener Nozzles plugged on retrieval of the tool|Added property|
|_data.Jar_|_object_|_Abstract Tubular Component Jar_|_Drilling Jar specific information Fragment Description: Captures information about drilling jars, which are mechanical or hydraulic devices used in the drill stem to deliver an impact load to another component of the drill stem, especially when that component is stuck._|Added property|
|data.Jar.UpSetForce|number|Up Set Force|Specifies the force required to set the springs inside a mechanical jar into a position to trip the jar in an upward direction.|Added property|
|data.Jar.DownSetForce|number|Down Set Force|Specifies the force required to set the springs inside a mechanical jar into a position to trip the jar in a downward direction.|Added property|
|data.Jar.UpTripForce|number|Up Trip Force|Specifies the force required to trip the jar upwards.|Added property|
|data.Jar.DownTripForce|number|Down Trip Force|Specifies the force required to trip the jar downward.|Added property|
|data.Jar.PumpOpenForce|number|Pump Open Force|Specifies the force present when jarring while circulating, and if pressure is trapped below the bit.|Added property|
|data.Jar.SealFrictionForce|number|Seal Friction Force|Specifies the force required to move a hydraulic jar from the tripped position to the reset position so it can be tripped again. .|Added property|
|data.Jar.JarTypeID<br> &rarr; [JarType](../../../E-R/reference-data/JarType.1.0.0.md)|string|Jar Type ID|Specifies the type of jar.|Added property|
|data.Jar.JarActionTypeID<br> &rarr; [JarActionType](../../../E-R/reference-data/JarActionType.1.0.0.md)|string|Jar Action Type ID|Specifies the type of jar action.|Added property|
|_data.Motor_|_object_|_Abstract Tubular Component Motor_|_Mud Motor specific information Fragment Description: Mud Motor Tubular Component specific properties. Based on WITSML Tubular  Component 'Motor' ComplexType._|Added property|
|data.Motor.ToolOffset|number|Tool Offset|Tool offset distance from bottom of Tubular Assembly.|Added property|
|data.Motor.PressureLossFactor|number|Pressure Loss Factor|Pressure drop across the tool.|Added property|
|data.Motor.FlowRateMinimum|number|Flow Rate Minimum|Minimum flow rate for tool operation.|Added property|
|data.Motor.FlowRateMaximum|number|Flow Rate Maximum|Maximum flow rate for tool operation.|Added property|
|data.Motor.RotorNozzleDiameter|number|Rotor Nozzle Diameter|Diameter of the rotor at the nozzle.|Added property|
|data.Motor.BearingBoxClearance|number|Bearing Box Clearance|Clearance inside the bearing box.|Added property|
|data.Motor.NumberRotorLobes|integer|Number of Rotor Lobes|Number of Rotor Lobes|Added property|
|data.Motor.NumberStatorLobes|integer|Number of Stator Lobes|Number of Stator Lobes|Added property|
|data.Motor.BearingTypeID<br> &rarr; [MudMotorBearingType](../../../E-R/reference-data/MudMotorBearingType.1.0.0.md)|string|Bearing Type ID|Bearing Type Identifier|Added property|
|data.Motor.OperatingTemperatureMaximum|number|Operating Temperature Maximum|Maximum operating temperature for the mud motor|Added property|
|data.Motor.IsRotorCatcherPresent|boolean|Is Rotor Catcher Present|Is Rotor Catcher Present|Added property|
|data.Motor.IsDumpValvePresent|boolean|Is Dump Valve Present|Is Dump Valve Present|Added property|
|data.Motor.NozzleDiameter|number|Nozzle Diameter|Nozzle Diameter|Added property|
|data.Motor.IsMotorRotatable|boolean|Is Motor Rotatable|Is Motor Rotatable|Added property|
|data.Motor.BendSettingAngleMinimum|number|Bend Setting Angle Minimum|Minimum bend angle setting|Added property|
|data.Motor.BendSettingAngleMaximum|number|Bend Setting Angle Maximum|Maximum bend angle setting|Added property|
|_data.Motor.PressureLossCurve[]_|_object_|_Abstract Tubular Component Pressure Loss_|_Array of one or more flow rate versus measured pressure loss points used to interpolate pressure loss across the MWD/LWD tool for a given flowrate Fragment Description: Tubular Component Measured Pressure Losses - Flow rate versus Pressure_|Added property|
|data.Motor.PressureLossCurve[].FlowRate|number|Flow Rate|Flow rate when pressure loss measured.|Added property|
|data.Motor.PressureLossCurve[].PressureLoss|number|Pressure Loss|Measured pressure loss for corresponding flow rate.|Added property|
|_data.MWDTool_|_object_|_Abstract Tubular Component Jar_|_MWD Tool specific information Fragment Description: Captures information about drilling jars, which are mechanical or hydraulic devices used in the drill stem to deliver an impact load to another component of the drill stem, especially when that component is stuck._|Added property|
|data.MWDTool.UpSetForce|number|Up Set Force|Specifies the force required to set the springs inside a mechanical jar into a position to trip the jar in an upward direction.|Added property|
|data.MWDTool.DownSetForce|number|Down Set Force|Specifies the force required to set the springs inside a mechanical jar into a position to trip the jar in a downward direction.|Added property|
|data.MWDTool.UpTripForce|number|Up Trip Force|Specifies the force required to trip the jar upwards.|Added property|
|data.MWDTool.DownTripForce|number|Down Trip Force|Specifies the force required to trip the jar downward.|Added property|
|data.MWDTool.PumpOpenForce|number|Pump Open Force|Specifies the force present when jarring while circulating, and if pressure is trapped below the bit.|Added property|
|data.MWDTool.SealFrictionForce|number|Seal Friction Force|Specifies the force required to move a hydraulic jar from the tripped position to the reset position so it can be tripped again. .|Added property|
|data.MWDTool.JarTypeID<br> &rarr; [JarType](../../../E-R/reference-data/JarType.1.0.0.md)|string|Jar Type ID|Specifies the type of jar.|Added property|
|data.MWDTool.JarActionTypeID<br> &rarr; [JarActionType](../../../E-R/reference-data/JarActionType.1.0.0.md)|string|Jar Action Type ID|Specifies the type of jar action.|Added property|
|_data.PressureLoss_|_object_|_Abstract Tubular Component Pressure Loss_|_Pressure v flow rate curve data for Hydraulics Pressure Loss calculations Fragment Description: Tubular Component Measured Pressure Losses - Flow rate versus Pressure_|Added property|
|data.PressureLoss.FlowRate|number|Flow Rate|Flow rate when pressure loss measured.|Added property|
|data.PressureLoss.PressureLoss|number|Pressure Loss|Measured pressure loss for corresponding flow rate.|Added property|
|_data.RotarySteerableSystem_|_object_|_Abstract Tubular Component RSS_|_Rotary Steerable System (RSS) tool specific information Fragment Description: Rotary Steerable Tool Tubular Component specific properties. Based on WITSML Tubular  Component 'RotarySteerableTool' ComplexType._|Added property|
|data.RotarySteerableSystem.BendAngle|number|Bend Angle|Bend Angle.|Added property|
|data.RotarySteerableSystem.BendOffset|number|Bend Offset|Offset distance from the bottom connection to the bend,|Added property|
|data.RotarySteerableSystem.DeflectionMethodID<br> &rarr; [RotarySteerableDeflectionMethod](../../../E-R/reference-data/RotarySteerableDeflectionMethod.1.0.0.md)|string|Deflection Method ID|Method used to direct the deviation of the trajectory: point bit or push bit|Added property|
|data.RotarySteerableSystem.DownlinkFlowrateMinimum|number|Downlink Flowrate Minimum|Minimum flow rate for programming the tool.|Added property|
|data.RotarySteerableSystem.DownlinkFlowrateMaximum|number|Downlink Flowrate Maximum|Maximum flow rate for programming the tool.|Added property|
|data.RotarySteerableSystem.FlowRateMinimum|number|Flow Rate Minimum|Minimum flow rate for tool operation.|Added property|
|data.RotarySteerableSystem.FlowRateMaximum|number|Flow Rate Maximum|Maximum flow rate for tool operation.|Added property|
|data.RotarySteerableSystem.HoleSizeMininum|number|Hole Size Mininum|Minimum size of the hole in which the tool can operate.|Added property|
|data.RotarySteerableSystem.HoleSizeMaximum|number|Hole Size Maximum|Maximum size of the hole in which the tool can operate.|Added property|
|data.RotarySteerableSystem.OperatingSpeed|number|Operating Speed|Suggested operating speed.|Added property|
|data.RotarySteerableSystem.PressureLossFactor|number|Pressure Loss Factor|Pressure drop across the tool.|Added property|
|data.RotarySteerableSystem.SpeedMaximum|number|Speed Maximum|Maximum rotation speed.|Added property|
|data.RotarySteerableSystem.WobMaximum|number|WOB Maximum|Maximum weight on the bit.|Added property|
|data.RotarySteerableSystem.PadCount|integer|Pad Count|The number of contact pads.|Added property|
|data.RotarySteerableSystem.PadLength|number|Pad Length|Length of the contact pad.|Added property|
|data.RotarySteerableSystem.PadWidth|number|Pad Width|Width of the contact pad.|Added property|
|data.RotarySteerableSystem.PadOffset|number|Pad Offset|Offset distance from the bottom of the pad to the bottom connector.|Added property|
|data.RotarySteerableSystem.OpenPadOuterDiameter|number|Open Pad Outer Diameter|Outside diameter of the tool when the pads are activated.|Added property|
|data.RotarySteerableSystem.ClosePadOuterDiameter|number|Close Pad Outer Diameter|Outside diameter of the tool when the pads are closed.|Added property|
|_data.RotarySteerableSystem.PressureLossCurve[]_|_object_|_Abstract Tubular Component Pressure Loss_|_Array of one or more pressure loss versus flowrate points used to interpolate pressure loss across the MWD/LWD tool. Fragment Description: Tubular Component Measured Pressure Losses - Flow rate versus Pressure_|Added property|
|data.RotarySteerableSystem.PressureLossCurve[].FlowRate|number|Flow Rate|Flow rate when pressure loss measured.|Added property|
|data.RotarySteerableSystem.PressureLossCurve[].PressureLoss|number|Pressure Loss|Measured pressure loss for corresponding flow rate.|Added property|
|_data.Stabiliser_|_object_|_Abstract Tubular Component Stabiliser_|_Stabiliser specific information Fragment Description: Stabiliser Tubular Component specific properties. Based on the WITSML Tubular schema 'Stabiliser' ComplexType._|Added property|
|data.Stabiliser.StabiliserTypeID<br> &rarr; [StabiliserType](../../../E-R/reference-data/StabiliserType.1.0.0.md)|string|Stabiliser Type ID|Stabiliser design classification.|Added property|
|data.Stabiliser.StabiliserBladeDesignTypeID<br> &rarr; [StabiliserBladeDesignType](../../../E-R/reference-data/StabiliserBladeDesignType.1.0.0.md)|string|Stabiliser Blade Design Type ID|Blade type classification.|Added property|
|data.Stabiliser.StabiliserOperatingDesignID<br> &rarr; [StabiliserOperatingDesign](../../../E-R/reference-data/StabiliserOperatingDesign.1.0.0.md)|string|Stabiliser Operating Design ID|Stabiliser operating design classification.|Added property|
|data.Stabiliser.BladeOuterDiameterMinimum|number|Minimum Blade OD|Minimum Outer Diameter of the Blades.|Added property|
|data.Stabiliser.BladeOuterDiameterMaximum|number|Maximum Blade OD|Maximum Outer Diameter of the Blades.|Added property|
|data.Stabiliser.NumberBlades|integer|Number of Blades|Number of blades on the Stabiliser.|Added property|
|data.Stabiliser.LengthBlade|number|Blade Length|Length of the blade.|Added property|
|data.Stabiliser.LengthBladeGauge|number|Length Blade Gauge|Gauge Length of the blade. That is, the length of the blade measured at the OD Blade Max.|Added property|
|data.Stabiliser.BladePadDiameter|number|Blade Pad Diameter|Width of the blade at the contact interval of the pad.|Added property|
|data.Stabiliser.FictionFactor|number|Friction Factor|Coefficient of Friction 0 - 1.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)