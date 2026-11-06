<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SeismicHorizon:2.0.0`

Changes between [osdu:wks:work-product-component--SeismicHorizon:1.3.0](../../../E-R/work-product-component/SeismicHorizon.1.3.0.md) and [osdu:wks:work-product-component--SeismicHorizon:2.0.0](../../../E-R/work-product-component/SeismicHorizon.2.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _A set of picks related to seismic processing geometry which define a surface.  The geometry used is referenced by the Interpretation Project._
  * New Description: **_A set of picks related to seismic processing geometry which define a surface.  The geometry used is referenced by the Interpretation Project. This is specialisation of GenericRepresentation._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SeismicDomainTypeID<br> &rarr; [SeismicDomainType](../../../E-R/reference-data/SeismicDomainType.1.0.0.md)|string|Seismic Domain Type Id|Vertical domain of faults.  E.g. Time, Depth|**_Breaking Change: REMOVED_**|
|data.SeismicDomainUOM<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Seismic Domain Uom|Unit of measurement for vertical domain|**_Breaking Change: REMOVED_**|
|data.VerticalDatumOffset|number|Vertical Datum Offset|Vertical reference datum points are stored in.|**_Breaking Change: REMOVED_**|
|data.VerticalMeasurementTypeID<br> &rarr; [VerticalMeasurementType](../../../E-R/reference-data/VerticalMeasurementType.1.0.2.md)|string|Vertical Measurement Type Id|Identifies a vertical reference datum type. E.g. mean sea level, ground level, mudline.|**_Breaking Change: REMOVED_**|
|data.ReplacementVelocity|number|Replacement Velocity|Value used to produce vertical static shifts in data|**_Breaking Change: REMOVED_**|
|data.GeologicalUnitAgeYear|string|Geological Unit Age Year|Age of Geologic unit (geochronological).  Number expected but is a string type to be consistent with wellbore marker.|**_Breaking Change: REMOVED_**|
|data.GeologicalUnitAgePeriod|string|Geological Unit Age Period|Age period of geologic unit (geochronological name of stage, etc.)|**_Breaking Change: REMOVED_**|
|data.SeismicVelocityModelID<br> &rarr; [VelocityModeling](../../../E-R/work-product-component/VelocityModeling.1.3.0.md)|string|Seismic Velocity Model Id|Velocity model used in depth conversion|**_Breaking Change: REMOVED_**|
|_data.SeismicAttributes[]_|_object_|_SeismicAttributes_|_Summary of measurements included with horizon in addition to depth attribute._|**_Breaking Change: REMOVED_**|
|data.SeismicAttributes[].SeismicAttributeTypeID<br> &rarr; [SeismicAttributeType](../../../E-R/reference-data/SeismicAttributeType.1.0.0.md)|string|Seismic Attribute Type Id|The type of attribute value captured|**_Breaking Change: REMOVED_**|
|data.SeismicAttributes[].SeismicAttributeUOM<br> &rarr; [UnitOfMeasure](../../../E-R/reference-data/UnitOfMeasure.1.0.0.md)|string|Seismic Attribute Uom|Unit of Measurement for attribute|**_Breaking Change: REMOVED_**|
|data.SeismicAttributes[].SeismicAttributeMaxNumber|number|Seismic Attribute Max Number|Max value of attribute|**_Breaking Change: REMOVED_**|
|data.SeismicAttributes[].SeismicAttributeMinNumber|number|Seismic Attribute Min Number|Min value of attribute|**_Breaking Change: REMOVED_**|
|data.SeismicAttributes[].SeismicAttributeMeanNumber|number|Seismic Attribute Mean Number|Mean value of attribute|**_Breaking Change: REMOVED_**|
|data.BinGridCoveragePercent|number|Bin Grid Coverage Percent|Portion of bin grid covered by picked surface expressed in percent.|**_Breaking Change: REMOVED_**|
|data.Remark|string|Remark|Optional comment providing thoughts from the interpreter.  Description is to provide a general explanation of the horizon.|**_Breaking Change: REMOVED_**|
|data.SeismicTraceDataID[]<br> &rarr; [SeismicTraceData](../../../E-R/work-product-component/SeismicTraceData.1.5.1.md)|string|Seismic Trace Data Id|Seismic Volumes picked against.  Only applies to 3D.|**_Breaking Change: REMOVED_**|
|data.Role<br> &rarr; [RepresentationRole](../../../E-R/reference-data/RepresentationRole.1.0.0.md)|string|Representation Role|The RepresentationRole assigned to this SeismicHorizon. Examples: Pick, Map.|**_Breaking Change: REMOVED_**|
|data.Type<br> &rarr; [RepresentationType](../../../E-R/reference-data/RepresentationType.1.0.0.md)|string|Representation Type|The RepresentationType for this SeismicHorizon. Examples: PointSet, PolylineSet, Regular2DGrid, Irregular2DGrid, TriangulatedSurface.|**_Breaking Change: REMOVED_**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.InterpretationID<br> &rarr; [HorizonInterpretation](../../../E-R/work-product-component/HorizonInterpretation.1.2.0.md)|string|InterpretationID|The relationship to the HorizonInterpretation that this SeismicHorizon representation is related to. This named property is intended to limit the AbstractRepresentation target property to a `HorizonInterpretation` for simplicity and clarity.|Changes in: Relationship Targets, Included Schema Fragment Version, Title, Description, Pattern, Format|
|data.RepresentationRole<br> &rarr; [RepresentationRole](../../../E-R/reference-data/RepresentationRole.1.0.0.md)|string|Representation Role|The RepresentationRole assigned to this SeismicHorizon. Examples: Pick, Map.|Added property|
|data.RepresentationType<br> &rarr; [RepresentationType](../../../E-R/reference-data/RepresentationType.1.0.0.md)|string|Representation Type|The RepresentationType for this representation. For a SeismicHorizon this is typically a Regular2DGrid or Polyline Sets. However, this can also be a set of points such as Inline, Crossline, X, Y, Z values extracted from an Irregular2DGrid.|Added property|
|data.SeismicTraceDataIDs[]<br> &rarr; [SeismicTraceData](../../../E-R/work-product-component/SeismicTraceData.1.5.1.md)|string|SeismicTraceDataIDs|The 2D or 3D seismic trace data sets that the horizon has been picked on. This can be one or many SeismicTraceDataIDs.|Added property|
|data.Seismic3DInterpretationSetID<br> &rarr; [Seismic3DInterpretationSet](../../../E-R/master-data/Seismic3DInterpretationSet.1.2.0.md)|string|Seismic3DInterpretationSetID|For picks on 3D datasets, reference to the 3D interpretation set (not the application project nor an acquisition survey) that supported this interpretation.  The seismic geometry (bin grid) needed to interpret the location references is inferred through the interpretation survey and no longer explicitly through this object.  The WPC SpatialArea may reflect the survey area that has the horizon picked on it for shallow search purposes.  Only this or Seismic2DInterpretationSetID may be used, but not both.|Changes in: Title|
|data.Seismic2DInterpretationSetID<br> &rarr; [Seismic2DInterpretationSet](../../../E-R/master-data/Seismic2DInterpretationSet.1.2.0.md)|string|Seismic2DInterpretationSetID|For picks on 2D datasets, reference to the 2D interpretation set (not the application project nor an acquisition survey) that supported this interpretation.  The seismic geometries (seismic line geometries) needed to interpret the location references are inferred through the interpretation survey.  The WPC SpatialArea may reflect the lines that have the horizon picked on it for shallow search purposes.  Only this or Seismic3DInterpretationSetID may be used, but not both.|Changes in: Title|
|data.DomainTypeID<br> &rarr; [DomainType](../../../E-R/reference-data/DomainType.1.0.0.md)|string|DomainTypeID|Describes the domain of the interpretation, for example, Depth, Time and Mixed domain types. The property is added here to be human friendly and support search use cases.  This information is also captured in the `Horizon Interpretation` and abstract Interpretation fragment. Please be mindful to keep both properties synchronised|Added property|
|data.SeismicPickingTypeID<br> &rarr; [SeismicPickingType](../../../E-R/reference-data/SeismicPickingType.1.0.1.md)|string|SeismicPickingTypeID|The picking method used for the seismic horizon, for example, Primary seed pick, Interpolated seed pick, Auto tracked seed pick, Mixed, etc.|Changes in: Title, Description|
|data.SeismicHorizonTypeID<br> &rarr; [SeismicHorizonType](../../../E-R/reference-data/SeismicHorizonType.1.0.1.md)|string|SeismicHorizonTypeID|The type of seismic attribute that characterizes the horizon, such as a peak, trough, plus-to-minus zero crossing, minus-to-plus zero crossing, or envelope|Changes in: Title, Description|
|data.GeologicalUnitName|string|GeologicalUnitName|Geological Unit (formation, bioevent, etc.) Name|Changes in: Title|
|data.PetroleumSystemElementTypeID<br> &rarr; [PetroleumSystemElementType](../../../E-R/reference-data/PetroleumSystemElementType.1.0.0.md)|string|PetroleumSystemElementTypeID|A petroleum system element such as Reservoir, Source, Seal, etc.|Changes in: Title|
|data.InlineMin|number|InlineMin|Smallest inline picked in surface.|Changes in: Title|
|data.InlineMax|number|InlineMax|Largest inline picked in surface.|Changes in: Title|
|data.CrosslineMin|number|CrosslineMin|Smallest crossline picked in surface.|Changes in: Title|
|data.CrosslineMax|number|CrosslineMax|Largest crossline picked in surface.|Changes in: Title|
|data.Interpreter|string|Interpreter|The person or team who interpreted the horizon.|Changes in: Description|
|data.SubjectiveClassificationRatingIDs[]<br> &rarr; [SubjectiveClassificationRating](../../../E-R/reference-data/SubjectiveClassificationRating.1.0.0.md)|string|Subjective Classification RatingIDs|An array capturing the classification of Confidence, Quality & Strength applicable to this interpretation. This is different to data quality|Added property|
|_data.Remark[]_|_object_|_AbstractRemark_|_An array of remarks, typically from the interpreter,  providing a comment or general explanation of the horizon. Fragment Description: A remark object, pairing a remark text with a source, e.g. an author, and a date, which is typically included in an array. The RemarkSequenceNumber acts as unique key in this case._|Added property|
|data.Remark[].RemarkSequenceNumber|integer|Remark Sequence Number|A unique identifier for each remark record. This identifier is used to uniquely identify a member in an array of remarks.|Added property|
|data.Remark[].Remark|string|Remark|A descriptive comment for this remark.|Added property|
|data.Remark[].RemarkSource|string|Remark Source|The person, vendor, interpreter or other provider of information.|Added property|
|data.Remark[].RemarkDate|string|Remark Date|The date the remark was issued.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)