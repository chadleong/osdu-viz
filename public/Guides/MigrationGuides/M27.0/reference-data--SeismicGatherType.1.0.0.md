<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicGatherType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--SeismicGatherType:1.0.0](../../../E-R/reference-data/SeismicGatherType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SeismicGatherType:CommonBin | Common Bin | Collection of traces  originating from  several source receivers combinations with different offsets, which have midpoints within a common BIN. | Value added. |
| partition-id:reference-data--SeismicGatherType:CommonImagePoint | Common Image Point | Collection of traces from migrated partial images at a single location.  | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:CommonIncidenceAngle | Common Incidence Angle | Migrated or moveout-corrected Common Image Point (CIP) or Common Merge Point (CMP) gathers decomposed into gathers of common incidence angle traces | Value added. |
| partition-id:reference-data--SeismicGatherType:CommonIncidenceAngleGather | Common Incidence Angle Gather | DEPRECATED: Please use Code="CommonIncidenceAngle" with Name="Common Incidence Angle" instead. Migrated or moveout-corrected Common Image Point (CIP) or Common Merge Point (CMP) gathers decomposed into gathers of common incidence angle traces | **DEPRECATED, superseded by Code: CommonIncidenceAngle**<br>Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:CommonMidPoint | Common Mid Point | Collection of traces originating from a several source and recorded by several receivers, which have a common trace midpoint | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:CommonOffset | Common Offset | Collection of traces from different pre-stack gathers belonging to a common line and with common source receiver offset. | Value added. |
| partition-id:reference-data--SeismicGatherType:CommonReceiver | Common Receiver | Collection of traces recorded at a single receiver and originating from several sources, with multiple offsets | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:CommonShot | Common Shot | Collection of traces originating from a single source and recorded by several receivers, with multiple offsets.  2D: A single shot into a single common receiver line 3D: A single shot into multiple receiver lines | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:ContinuousAcquisitionCable | Continuous Acquisition Cable | A collection of traces associated with a common cabled receiver line that all have a constant GPS acquisition time | Value added. |
| partition-id:reference-data--SeismicGatherType:ContinuousAcquisitionCableGather | Continuous Acquisition Cable Gather | DEPRECATED: Please use Code="ContinuousAcquisitionCable" with Name="Continuous Acquisition Cable" instead. A collection of traces associated with a common cabled receiver line that all have a constant GPS acquisition time | **DEPRECATED, superseded by Code: ContinuousAcquisitionCable**<br>Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:ContinuousAcquisitionNode | Continuous Acquisition Node | A collection of traces associated with a common node that have increasing GPS acquisition time | Value added. |
| partition-id:reference-data--SeismicGatherType:ContinuousAcquisitionNodeGather | Continuous Acquisition Node Gather | DEPRECATED: Please use Code="ContinuousAcquisitionNode" with Name="Continuous Acquisition Node" instead. A collection of traces associated with a common node that have increasing GPS acquisition time | **DEPRECATED, superseded by Code: ContinuousAcquisitionNode**<br>Changes in InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:CrossSpread | Cross-Spread | Collection of traces from a combination of a single common source line into a single common receiver line i.e. all shots along a common source line that are then recorded into a common receiver line. Note: associated with orthogonal source/receiver line acquisition geometries | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:OffsetVectorTilePlane | Offset Vector Tile Plane | Offset Vector Tile - An offset vector tile is a collection of traces whose common mid-point locations fall within the surface area between a pair of adjacent source and adjacent receiver lines in an orthogonal source/receiver line geometry. The subsequent OVT plane is then constructed by taking the same relative OVT from every Xspread in the survey area to create notionally a single fold volume that represents a range of common offsets azimuths (depending on the tiles position relative to the Xspread). | Changes in AttributionAuthority |
| partition-id:reference-data--SeismicGatherType:VectorImagePartition | Vector Image Partition | Collection of traces representing migrated energy partitioned into defined tiles at a single location. Tiles can be rectangular or circular. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook SeismicGatherType.1.xlsx](../../../ReferenceValues/Published/SeismicGatherType.1.xlsx)
* &rarr; [Manifest record SeismicGatherType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SeismicGatherType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)