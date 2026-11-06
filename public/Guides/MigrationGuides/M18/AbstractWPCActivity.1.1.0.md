<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractWPCActivity:1.2.0`

Changes between [osdu:wks:AbstractWPCActivity:1.1.0](../../../E-R/abstract/AbstractWPCActivity.1.1.0.md) and [osdu:wks:AbstractWPCActivity:1.2.0](../../../E-R/abstract/AbstractWPCActivity.1.2.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_Parameters[]_|_object_|_AbstractActivityParameter_|_General parameter value used in one instance of activity.  Includes reference to data objects which are inputs and outputs of the activity. Fragment Description: General parameter value used in one instance of activity. [Without inheritance, combined specializations.]_|Changed|
|Parameters[].Title|string|Title|Name of the parameter, used to identify it in the activity. It must have an equivalent in the ActivityTemplate parameters.|Changed|
|Parameters[].Index|integer|Index|When parameter is an array, used to indicate the index in the array.|Changed|
|Parameters[].Selection|string|Selection|Textual description about how this parameter was selected.|Changed|
|_Parameters[].Keys[]_|_object_|_Parameter Key_|_A nested array describing keys used to identify a parameter value. When multiple values are provided for a given parameter, the key provides a way to identify the parameter through its association with an object, a time index or a parameter array member via ParameterKey value. Fragment Description: Abstract class describing a key used to identify a parameter value. When multiple values are provided for a given parameter, provides a way to identify the parameter through its association with an object, a time index, an integer...  [Without inheritance, combined specializations.] Note: floating point numbers are not supported as key values; the numbers have to be formatted as strings for robust equality operations, which are necessary for keys._|Changed|
|Parameters[].Keys[].ObjectParameterKey|string|Object Parameter Key|Relationship to an object ID, which acts as the parameter.|Changed|
|Parameters[].Keys[].TimeIndexParameterKey|string|Time Index Parameter Key|The time index acting as parameter key value.|Changed|
|Parameters[].Keys[].ParameterKey|string|Internal Parameter Key|The key name, which establishes an association between parameters.|Changed|
|Parameters[].Keys[].IntegerParameterKey|integer|Integer Parameter Key|Integer value from "ParameterKey" parameter, associated with this parameter. Example: {"ParameterKey": "index", "StringParameterKey: 2}.|Changed|
|Parameters[].Keys[].StringParameterKey|string|String Parameter Key|String value from "ParameterKey" parameter, associated with this parameter. Can be used to associate with parameter values of type string or data quantity. In the later case, the string representation of the quantity value will be used. Example: {"ParameterKey": "facies", "StringParameterKey: "shale"}, {"ParameterKey":"depth", "StringParameterKey":"1545.43m"}.|Changed|
|Parameters[].DataObjectParameter|string|Data Object Parameter|Parameter referencing to a top level object.|Changed|
|Parameters[].DataQuantityParameter|number|Data Quantity Parameter|Parameter containing a double value.|Changed|
|Parameters[].IntegerQuantityParameter|integer|Integer Quantity Parameter|Parameter containing an integer value.|Changed|
|Parameters[].StringParameter|string|String Parameter|Parameter containing a string value.|Changed|
|Parameters[].TimeIndexParameter|string|Time Index Parameter|Parameter containing a time index value.  It is assumed that all TimeIndexParameters within an Activity have the same date-time format, which is then described by the FrameOfReference mechanism.|Changed|
|Parameters[].BooleanParameter|boolean|Boolean Parameter|The boolean parameter value, if ParameterKindID refers to the Boolean type.|Added property|
|Parameters[].ParameterKindID &rarr; [ParameterKind](../../../E-R/reference-data/ParameterKind.1.0.0.md)|string|Parameter Kind Id|[Added to cover lack of inheritance]|Changed|
|Parameters[].ParameterRoleID &rarr; [ParameterRole](../../../E-R/reference-data/ParameterRole.1.0.0.md)|string|Parameter Role|Reference data describing how the parameter was used by the activity, such as input, output, control, constraint, agent, predecessor activity, successor activity.|Changed|
|Parameters[].DataQuantityParameterUOMID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Data Quantity Parameter UoM ID|Identifies unit of measure for floating point value.|Changed|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)