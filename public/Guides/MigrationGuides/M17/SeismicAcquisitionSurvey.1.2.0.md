<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--SeismicAcquisitionSurvey:1.3.0`

With M17 SeismicAcquisitionSurvey can model time-lapse survey sequences via the new property
`data.PrecedingTimeLapseSurveyID`. This revision also pick up the latest version of the
[AbstractProjectActivity.1.0.0](../../../E-R/abstract/AbstractProjectActivity.1.0.0.md).

Changes between [osdu:wks:master-data--SeismicAcquisitionSurvey:1.2.0](../../../E-R/master-data/SeismicAcquisitionSurvey.1.2.0.md) and [osdu:wks:master-data--SeismicAcquisitionSurvey:1.3.0](../../../E-R/master-data/SeismicAcquisitionSurvey.1.3.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ActivityTemplateID &rarr; [ActivityTemplate](../../../E-R/master-data/ActivityTemplate.1.0.0.md)|string|Activity Template ID|The relation to the ActivityTemplate carrying expected parameter definitions and default values.|Including newer AbstractProjectActivity:1.1.0|
|data.ParentProjectID|string|Parent Project ID|The relationship to a parent project acting as a parent activity.|Including newer AbstractProjectActivity:1.1.0|
|_data.Parameters[]_|_object_|_AbstractActivityParameter_|_General parameter value used in one instance of activity.  Includes reference to data objects which are inputs and outputs of the activity. Fragment Description: General parameter value used in one instance of activity. [Without inheritance, combined specializations.]_|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Title|string|Title|Name of the parameter, used to identify it in the activity. It must have an equivalent in the ActivityTemplate parameters.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Index|integer|Index|When parameter is an array, used to indicate the index in the array.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Selection|string|Selection|Textual description about how this parameter was selected.|Including newer AbstractProjectActivity:1.1.0|
|_data.Parameters[].Keys[]_|_object_|_Parameter Key_|_A nested array describing keys used to identify a parameter value. When multiple values are provided for a given parameter, the key provides a way to identify the parameter through its association with an object, a time index or a parameter array member via ParameterKey value. Fragment Description: Abstract class describing a key used to identify a parameter value. When multiple values are provided for a given parameter, provides a way to identify the parameter through its association with an object, a time index, an integer...  [Without inheritance, combined specializations.] Note: floating point numbers are not supported as key values; the numbers have to be formatted as strings for robust equality operations, which are necessary for keys._|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Keys[].ObjectParameterKey|string|Object Parameter Key|Relationship to an object ID, which acts as the parameter.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Keys[].TimeIndexParameterKey|string|Time Index Parameter Key|The time index acting as parameter key value.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Keys[].ParameterKey|string|Internal Parameter Key|The key name, which establishes an association between parameters.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Keys[].IntegerParameterKey|integer|Integer Parameter Key|Integer value from "ParameterKey" parameter, associated with this parameter. Example: {"ParameterKey": "index", "StringParameterKey: 2}.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].Keys[].StringParameterKey|string|String Parameter Key|String value from "ParameterKey" parameter, associated with this parameter. Can be used to associate with parameter values of type string or data quantity. In the later case, the string representation of the quantity value will be used. Example: {"ParameterKey": "facies", "StringParameterKey: "shale"}, {"ParameterKey":"depth", "StringParameterKey":"1545.43m"}.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].DataObjectParameter|string|Data Object Parameter|Parameter referencing to a top level object.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].DataQuantityParameter|number|Data Quantity Parameter|Parameter containing a double value.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].IntegerQuantityParameter|integer|Integer Quantity Parameter|Parameter containing an integer value.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].StringParameter|string|String Parameter|Parameter containing a string value.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].TimeIndexParameter|string|Time Index Parameter|Parameter containing a time index value.  It is assumed that all TimeIndexParameters within an Activity have the same date-time format, which is then described by the FrameOfReference mechanism.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].ParameterKindID &rarr; [ParameterKind](../../../E-R/reference-data/ParameterKind.1.0.0.md)|string|Parameter Kind Id|[Added to cover lack of inheritance]|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].ParameterRoleID &rarr; [ParameterRole](../../../E-R/reference-data/ParameterRole.1.0.0.md)|string|Parameter Role|Reference data describing how the parameter was used by the activity, such as input, output, control, constraint, agent, predecessor activity, successor activity.|Including newer AbstractProjectActivity:1.1.0|
|data.Parameters[].DataQuantityParameterUOMID &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Data Quantity Parameter UoM ID|Identifies unit of measure for floating point value.|Including newer AbstractProjectActivity:1.1.0|
|_data.ActivityStates[]_|_object_|_AbstractActivityState_|_The (non-overlapping) historical activity states and effective start and termination dates. The last state is replicated in the single LastActivityState for simpler queries. Fragment Description: One step/interval in an Activity's or ProjectActivity's state._|Added property|
|data.ActivityStates[].EffectiveDateTime|string|Effective Date Time|The date and time at which the activity status becomes effective.|Added property|
|data.ActivityStates[].TerminationDateTime|string|Termination Date Time|The date and time at which the activity status is no longer in effect. For still effective activity states, the TerminationDateTime is left absent. For zero-duration intervals (events), the TerminationDateTime set to the same value as EffectiveDateTime.|Added property|
|data.ActivityStates[].ActivityStatusID &rarr; [ActivityStatus](../../../E-R/reference-data/ActivityStatus.1.0.0.md)|string|Activity Status ID|The ActivityStatus is a set of major activity phases that are significant to business stakeholders.|Added property|
|data.ActivityStates[].Remark|string|Remark|An optional remark associated with the ActivityStatus and time interval.|Added property|
|_data.LastActivityState_|_object_|_AbstractActivityState_|_The current or last state this activity transitioned to. It is a copy of the last element in ActivityStates[]. If there is only one state recorded, the ActivityStates[] can stay empty. Fragment Description: One step/interval in an Activity's or ProjectActivity's state._|Added property|
|data.LastActivityState.EffectiveDateTime|string|Effective Date Time|The date and time at which the activity status becomes effective.|Added property|
|data.LastActivityState.TerminationDateTime|string|Termination Date Time|The date and time at which the activity status is no longer in effect. For still effective activity states, the TerminationDateTime is left absent. For zero-duration intervals (events), the TerminationDateTime set to the same value as EffectiveDateTime.|Added property|
|data.LastActivityState.ActivityStatusID &rarr; [ActivityStatus](../../../E-R/reference-data/ActivityStatus.1.0.0.md)|string|Activity Status ID|The ActivityStatus is a set of major activity phases that are significant to business stakeholders.|Added property|
|data.LastActivityState.Remark|string|Remark|An optional remark associated with the ActivityStatus and time interval.|Added property|
|data.PrecedingTimeLapseSurveyID &rarr; [SeismicAcquisitionSurvey](../../../E-R/master-data/SeismicAcquisitionSurvey.1.3.0.md)|string|Preceding Time Lapse Survey Id|If populated, this survey is part of a time-lapse survey sequence. It identifies the preceding SeismicAcquisitionSurvey. The first survey in the sequence has an empty or absent PrecedingTimeLapseSurveyID.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)