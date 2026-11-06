<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ReservoirSegment:1.1.0`

Changes between [osdu:wks:master-data--ReservoirSegment:1.0.0](../../../E-R/master-data/ReservoirSegment.1.0.0.md) and [osdu:wks:master-data--ReservoirSegment:1.1.0](../../../E-R/master-data/ReservoirSegment.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SectorID &rarr; [PersistedCollection](../../../E-R/work-product-component/PersistedCollection.1.2.0.md)|string|Sector Identifier|Identifier of the Persisted Collection in which are referred the whole set of child segments constituting a comprehensive sector. A Persisted Collection is only used when no full-fledged earth model is available. See also ReservoirCompartmentInterpretationID with CompartmentMemberIdentifier for the earth model usage.|Changes in: Included Schema Fragment Version, Description|
|data.CompartmentInterpretationID &rarr; [ReservoirCompartmentInterpretation](../../../E-R/work-product-component/ReservoirCompartmentInterpretation.1.2.0.md)|string|Reservoir Compartment Interpretation Identifier|If a full-fledged earth model is built, this property takes the role of SectorID to refer to a ReservoirCompartmentInterpretation.|Added property|
|data.CompartmentMemberIdentifier|string|Compartment Member Identifier|If CompartmentInterpretationID is populated, this identifies the member of the data.ReservoirCompartmentUnits[]. Such a member refers to the intersecting RockFluidUnitInterpretation and StratigraphicUnitInterpretation instances.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)