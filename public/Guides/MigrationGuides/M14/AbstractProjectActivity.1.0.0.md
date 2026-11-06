<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractProjectActivity:1.1.0`

Changes between [osdu:wks:AbstractProjectActivity:1.0.0](../../../E-R/abstract/AbstractProjectActivity.1.0.0.md) and [osdu:wks:AbstractProjectActivity:1.1.0](../../../E-R/abstract/AbstractProjectActivity.1.1.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|ParentProjectID|string|Parent Project ID|The relationship to a parent project acting as a parent activity.|Changed|
|_ActivityStates[]_|_object_|_AbstractActivityState_|_The (non-overlapping) historical activity states and effective start and termination dates. The last state is replicated in the single LastActivityState for simpler queries. Fragment Description: One step/interval in an Activity's or ProjectActivity's state._|Added property|
|ActivityStates[].EffectiveDateTime|string|Effective Date Time|The date and time at which the activity status becomes effective.|Added property|
|ActivityStates[].TerminationDateTime|string|Termination Date Time|The date and time at which the activity status is no longer in effect. For still effective activity states, the TerminationDateTime is left absent. For zero-duration intervals (events), the TerminationDateTime set to the same value as EffectiveDateTime.|Added property|
|ActivityStates[].ActivityStatusID &rarr; [ActivityStatus](../../../E-R/reference-data/ActivityStatus.1.0.0.md)|string|Activity Status ID|The ActivityStatus is a set of major activity phases that are significant to business stakeholders.|Added property|
|ActivityStates[].Remark|string|Remark|An optional remark associated with the ActivityStatus and time interval.|Added property|
|_LastActivityState_|_object_|_AbstractActivityState_|_The current or last state this activity transitioned to. It is a copy of the last element in ActivityStates[]. If there is only one state recorded, the ActivityStates[] can stay empty. Fragment Description: One step/interval in an Activity's or ProjectActivity's state._|Added property|
|LastActivityState.EffectiveDateTime|string|Effective Date Time|The date and time at which the activity status becomes effective.|Added property|
|LastActivityState.TerminationDateTime|string|Termination Date Time|The date and time at which the activity status is no longer in effect. For still effective activity states, the TerminationDateTime is left absent. For zero-duration intervals (events), the TerminationDateTime set to the same value as EffectiveDateTime.|Added property|
|LastActivityState.ActivityStatusID &rarr; [ActivityStatus](../../../E-R/reference-data/ActivityStatus.1.0.0.md)|string|Activity Status ID|The ActivityStatus is a set of major activity phases that are significant to business stakeholders.|Added property|
|LastActivityState.Remark|string|Remark|An optional remark associated with the ActivityStatus and time interval.|Added property|

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](../M17/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)