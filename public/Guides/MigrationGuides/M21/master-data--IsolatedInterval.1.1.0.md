<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--IsolatedInterval:1.2.0`

Changes between [osdu:wks:master-data--IsolatedInterval:1.1.0](../../../E-R/master-data/IsolatedInterval.1.1.0.md) and [osdu:wks:master-data--IsolatedInterval:1.2.0](../../../E-R/master-data/IsolatedInterval.1.2.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.WellboreID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.0.md)|string|WellboreID|The record id  of the upper most isolation point within the wellbore object, to which this record belongs|Changes in: Example|
|data.Description|string|Description|A remark, comment or generic description.|Changes in: Example|
|data.IsolatedIntervalID &rarr; [IsolatedInterval](../../../E-R/master-data/IsolatedInterval.1.2.0.md)|string|IsolatedIntervalID|The 'parent' Isolated Interval ID, if there is a hierarchy of IsolatedIntervals.|Changes in: Example|
|data.IsolatedIntervalTypeID &rarr; [IsolatedIntervalType](../../../E-R/reference-data/IsolatedIntervalType.1.0.0.md)|string|IsolatedIntervalTypeID|Denotes the category or type of the Isolated Interval. Reference Values: "Open hole"  or "Cased Hole"|Changes in: Example|
|data.MeasuredDepthTop|number|Measured Depth Top|Top measured depth of the interval relative to the VerticalMeasurement vertical reference.|Changes in: Example|
|data.IsolatedIntervalBases[].WellboreID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.0.md)|string|WellboreID|The record id  of the wellbore object, to which this IsolatedIntervalBase element belongs|Changes in: Example|
|data.IsolatedIntervalBases[].MeasuredDepthBase|number|Measured Depth Base|Bottom Measured depth of the interval|Changes in: Example|
|data.IsCommingled|boolean|Is Commingled|Does the Isolated Interval include commingled production?|Added property|
|data.ClassificationID &rarr; [IsolatedIntervalClassification](../../../E-R/reference-data/IsolatedIntervalClassification.1.0.0.md)|string|Classification|Isolated Interval Classification|Added property|
|data.TubularAssemblyTypeID &rarr; [TubularAssemblyType](../../../E-R/reference-data/TubularAssemblyType.1.0.0.md)|string|Tubular String Type|What type of completion assembly is used for the mechanical completion.|Added property|
|data.CementOptionID &rarr; [IsolatedIntervalCementOption](../../../E-R/reference-data/IsolatedIntervalCementOption.1.0.0.md)|string|Cement Option|What type of cement option used for the isolated interval|Added property|
|data.ZoneAccessMechanismID &rarr; [IsolatedIntervalZoneAccessMechanism](../../../E-R/reference-data/IsolatedIntervalZoneAccessMechanism.1.0.0.md)|string|Zone Access Mechanism|Zone access mechanism used to create a flow path between the formation/reservoir and the production annulus|Added property|
|data.IsolationMechanismID &rarr; [IsolatedIntervalIsolationMechanism](../../../E-R/reference-data/IsolatedIntervalIsolationMechanism.1.0.0.md)|string|Isolation Mechanism|Mechanism used to achieve pressure/hydraulic isolation within the interval|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](../M20/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)