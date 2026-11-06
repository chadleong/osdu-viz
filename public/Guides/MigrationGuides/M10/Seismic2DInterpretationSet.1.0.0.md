[[_TOC_]]

# Migration to `osdu:wks:master-data--Seismic2DInterpretationSet:1.1.0`

[`osdu:wks:master-data--Seismic2DInterpretationSet:1.1.0`](../../../E-R/master-data/Seismic2DInterpretationSet.1.1.0.md) 
now includes `AbstractProjectActivity`.

## New Properties

|Cumulative Name|Value Type|Description|Migration Instructions|
|-----|-----|-----|-----|
|data.ActivityTemplateID &rarr; [ActivityTemplate](../../../E-R/master-data/ActivityTemplate.1.0.0.md)|string|The relation to the ActivityTemplate carrying expected parameter definitions and default values.| |
|data.ParentProjectID|string|The relationship to a parent project acting as a parent activity.| |
|_data.Parameters[]_|_object_|_General parameter value used in one instance of activity.  Includes reference to data objects which are inputs and outputs of the activity. Fragment Description: General parameter value used in one instance of activity. [Without inheritance, combined specializations.]_| |
|data.Parameters[].Title|string|Name of the parameter, used to identify it in the activity. It must have an equivalent in the ActivityTemplate parameters.| |
|data.Parameters[].Index|integer|When parameter is an array, used to indicate the index in the array.| |
|data.Parameters[].Selection|string|Textual description about how this parameter was selected.| |
|_data.Parameters[].Keys[]_|_object_|_A nested array describing keys used to identify a parameter value. When multiple values are provided for a given parameter, the key provides a way to identify the parameter through its association with an object, a time index or a parameter array member via ParameterKey value. Fragment Description: Abstract class describing a key used to identify a parameter value. When multiple values are provided for a given parameter, provides a way to identify the parameter through its association with an object, a time index...  [Without inheritance, combined specializations.]_| |
|data.Parameters[].Keys[].ObjectParameterKey|string|Relationship to an object ID, which acts as the parameter.| |
|data.Parameters[].Keys[].TimeIndexParameterKey|string|(No description)| |
|data.Parameters[].Keys[].ParameterKey|string|The key name, which establishes an association between parameters.| |
|data.Parameters[].DataObjectParameter|string|Parameter referencing to a top level object.| |
|data.Parameters[].DataQuantityParameter|number|Parameter containing a double value.| |
|data.Parameters[].IntegerQuantityParameter|integer|Parameter containing an integer value.| |
|data.Parameters[].StringParameter|string|Parameter containing a string value.| |
|data.Parameters[].TimeIndexParameter|string|Parameter containing a time index value.  It is assumed that all TimeIndexParameters within an Activity have the same date-time format, which is then described by the FrameOfReference mechanism.| |
|data.Parameters[].ParameterKindID &rarr; [ParameterKind](../../../E-R/reference-data/ParameterKind.1.0.0.md)|string|[Added to cover lack of inheritance]| |
|data.Parameters[].ParameterRoleID &rarr; [ParameterRole](../../../E-R/reference-data/ParameterRole.1.0.0.md)|string|Reference data describing how the parameter was used by the activity, such as input, output, control, constraint, agent, predecessor activity, successor activity.| |
|data.Parameters[].DataQuantityParameterUOMID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Identifies unit of measure for floating point value.| |

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
