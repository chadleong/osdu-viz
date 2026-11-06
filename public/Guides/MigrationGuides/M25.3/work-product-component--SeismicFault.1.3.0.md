<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicFault:2.0.0`

Changes between [osdu:wks:work-product-component--SeismicFault:1.3.0](../../../E-R/work-product-component/SeismicFault.1.3.0.md) and [osdu:wks:work-product-component--SeismicFault:2.0.0](../../../E-R/work-product-component/SeismicFault.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Remark|string|Remark|Optional comment to capture interpreter thoughts.  Distinguished from Description which is a general explanation of the object.|**_Breaking Change: REMOVED_**|
|data.SeismicDomainTypeID<br> &rarr; [SeismicDomainType](../../../E-R/reference-data/SeismicDomainType.1.0.0.md)|string|Seismic Domain Type ID|Vertical domain of the fault.  E.g. Time, Depth|**_Breaking Change: REMOVED_**|
|data.VerticalDatumOffset|number|Vertical Datum Offset|Datum value, the elevation of zero time/depth on the vertical axis in the domain of seismicdomaintype relative to the vertical reference datum used (usually MSL). Positive is upward from zero elevation to seismic datum).|**_Breaking Change: REMOVED_**|
|data.VerticalMeasurementTypeID<br> &rarr; [VerticalMeasurementType](../../../E-R/reference-data/VerticalMeasurementType.1.0.2.md)|string|Vertical Measurement Type ID|Identifies a vertical reference datum type. E.g. mean sea level, ground level, mudline.|**_Breaking Change: REMOVED_**|
|data.ReplacementVelocity|number|Replacement Velocity|Value used to produce vertical static shifts in data.|**_Breaking Change: REMOVED_**|
|data.SeismicFaultTypeID<br> &rarr; [SeismicFaultType](../../../E-R/reference-data/SeismicFaultType.1.0.1.md)|string|Seismic Fault Type ID|Geological type of fault geometry. E.g. Thrust (thr), Reverse (rev), Normal(norm)|**_Breaking Change: REMOVED_**|
|data.SeismicFaultLength|number|Seismic Fault Length|Maximum linear dimension measured along strike of the slip surface|**_Breaking Change: REMOVED_**|
|data.SeismicFaultSurfaceArea|number|Seismic Fault Surface Area|Surface Area of the fault plane.|**_Breaking Change: REMOVED_**|
|data.VerticalFaultDipAngle|number|Vertical Fault Dip Angle|Maximum vertical angle of fault|**_Breaking Change: REMOVED_**|
|data.FaultHeaveNumber|number|Fault Heave Number|Maximum stratigraphic heave, the apparent horizontal component of the net-slip.|**_Breaking Change: REMOVED_**|
|data.FaultNetSlipNumber|number|Fault Net Slip Number|Net (average) Slip.|**_Breaking Change: REMOVED_**|
|data.StratigraphicFaultOffset|number|Stratigraphic Fault Offset|Maximum vertical offset of faulted strata.|**_Breaking Change: REMOVED_**|
|data.Role<br> &rarr; [RepresentationRole](../../../E-R/reference-data/RepresentationRole.1.0.0.md)|string|Representation Role|The RepresentationRole assigned to this SeismicFault. Examples: FaultSticks, Pick, FaultCenterLine.|**_Breaking Change: REMOVED_**|
|data.Type<br> &rarr; [RepresentationType](../../../E-R/reference-data/RepresentationType.1.0.0.md)|string|Representation Type|The Fault RepresentationType assigned to this SeismicFault. Examples: PolylineSet, TriangulatedSurface.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.InterpretationID<br> &rarr; [FaultInterpretation](../../../E-R/work-product-component/FaultInterpretation.1.3.0.md)|string|InterpretationID|The relationship to the Fault Interpretation that this representation is associated with. The Fault Interpretation record, in turn, contains the relationship to the related interpreted Feature. This named property is intended to constrain the AbstractRepresentation target property to a FaultInterpretation for simplicity and clarity.|Changes in: Relationship Targets, Included Schema Fragment Version, Title, Description, Pattern, Format|
|data.RepresentationRole<br> &rarr; [RepresentationRole](../../../E-R/reference-data/RepresentationRole.1.0.0.md)|string|Representation Role|The RepresentationRole assigned to this SeismicFault. Examples: FaultSticks, Pick, FaultCenterLine.|Added property|
|data.RepresentationType<br> &rarr; [RepresentationType](../../../E-R/reference-data/RepresentationType.1.0.0.md)|string|Representation Type|The Fault RepresentationType assigned to this SeismicFault. Examples: PolylineSet, TriangulatedSurface.|Added property|
|data.SeismicPickingTypeID<br> &rarr; [SeismicPickingType](../../../E-R/reference-data/SeismicPickingType.1.0.1.md)|string|Seismic Picking Type ID|The picking method used for the seismic fault.|Changes in: Description|
|data.DomainTypeID<br> &rarr; [DomainType](../../../E-R/reference-data/DomainType.1.0.0.md)|string|DomainTypeID|Describes the domain of the interpretation, for example, Depth, Time and Mixed domain types. The property is added here to be human friendly and support search use cases.  This information is also captured in the `Fault Interpretation` WPC. Please be mindful to keep both properties synchronised.|Added property|
|data.Interpreter|string|Interpreter|The person or team who interpreted the fault.|Changes in: Description|
|data.SubjectiveClassificationRatingIDs[]<br> &rarr; [SubjectiveClassificationRating](../../../E-R/reference-data/SubjectiveClassificationRating.1.0.0.md)|string|Subjective Classification RatingIDs|An array capturing the classification of Confidence, Quality & Strength applicable to this interpretation. This is different to data quality.|Added property|
|_data.Remarks[]_|_object_|_AbstractRemark_|_An array of remarks, typically from the interpreter, providing a comment or general explanation of the fault. Fragment Description: A remark object, pairing a remark text with a source, e.g. an author, and a date, which is typically included in an array. The RemarkSequenceNumber acts as unique key in this case._|Added property|
|data.Remarks[].RemarkSequenceNumber|integer|Remark Sequence Number|A unique identifier for each remark record. This identifier is used to uniquely identify a member in an array of remarks.|Added property|
|data.Remarks[].Remark|string|Remark|A descriptive comment for this remark.|Added property|
|data.Remarks[].RemarkSource|string|Remark Source|The person, vendor, interpreter or other provider of information.|Added property|
|data.Remarks[].RemarkDate|string|Remark Date|The date the remark was issued.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)