[[_TOC_]]

# Migration to `osdu:wks:master-data--SeismicAcquisitionSurvey:1.1.0`

[`osdu:wks:master-data--SeismicProcessingProject:1.1.0`](../../../E-R/master-data/SeismicAcquisitionSurvey.1.1.0.md) 
now includes `AbstractProjectActivity`.

## Deprecated Properties, Migration

|Cumulative Name|Value Type|Description| Migration Instructions                                                                                                                                                                                                                                                                                                                                   |
|-----|-----|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|data.ShotpointIncrementDistance|number|DEPRECATED: Use SourceConfigurations[].ShotpointSpacing.  Horizontal distance between shotpoint locations.| In case `data.ShotpointIncrementDistance` is populated in the 1.0.0 version, add a SourceConfigurations structure and copy the value to `data.SourceConfigurations[].ShotpointSpacing`. Update the `meta[]` item such that the new property is subject to normalization.                                                                                 |
|data.EnergySourceTypeID &rarr; [SeismicEnergySourceType](../../../E-R/reference-data/SeismicEnergySourceType.1.0.0.md)|string|DEPRECATED: Use SourceConfigurations[].EnergySourceTypeID.Seismic Source type. E.g.: Airgun, Vibroseis, Dynamite, Watergun.| In case `data.EnergySourceTypeID` is populated in the 1.0.0 version, copy the relationship to `data.SourceConfigurations[].EnergySourceTypeID`.                                                                                                                                                                                                          |
|data.SourceArrayCount|integer|DEPRECATED: Use SourceConfigurations[].SourceArrayCount. Number of energy sources.| In case `data.SourceArrayCount` is populated in the 1.0.0 version, copy the count to `data.SourceConfigurations[].SourceArrayCount`.                                                                                                                                                                                                                     |
|data.SourceArraySeparationDistance|number|DEPRECATED: Use SourceConfigurations[].SourceArraySpacing. Distance between energy Sources.| In case `data.SourceArraySeparationDistance` is populated in the 1.0.0 version, copy the value to `data.SourceConfigurations[].SourceArraySpacing`. Update the `meta[]` item such that the new property is subject to normalization.                                                                                                                     |
|data.CableCount|integer|DEPRECATED: Use ReceiverConfigurations[].CableCount. Number of receiver arrays (lines).| In case `data.CableCount` is populated in the 1.0.0 version, copy the count to `data.ReceiverConfigurations[].CableCount`.                                                                                                                                                                                                                               |
|data.CableLength|number|DEPRECATED: Use ReceiverConfigurations[].CableLength. Total length of receiver array.| In case `data.CableLength` is populated in the 1.0.0 version, copy the value to `data.ReceiverConfigurations[].CableLength`. Update the `meta[]` item such that the new property is subject to normalization.                                                                                                                                            |
|data.CableSpacingDistance|number|DEPRECATED: Use ReceiverConfigurations[].CableSpacing. Horizontal distance between receiver arrays.| In case `data.CableSpacingDistance` is populated in the 1.0.0 version, copy the value to `data.ReceiverConfigurations[].CableSpacing`. Update the `meta[]` item such that the new property is subject to normalization.                                                                                                                                  |
|data.VesselNames[]|string|DEPRECATED: use VesselNames in SourceConfigurations and ReceiverConfigurations. List of names of the seismic acquisition (source and streamer) vessels used (marine environment only).| in case `data.VesselNames[]` is populated in the 1.0.0 version, copy the values to `data.SourceConfigurations[].VesselName` and `data.ReceiverConfigurations[].VesselName` assuming that the vessel was controlling sources and receivers. For more complicated configurations it may be required to perform separate research to recover the information. |

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
|data.AcquisitionTypeID &rarr; [SeismicAcquisitionType](../../../E-R/reference-data/SeismicAcquisitionType.1.0.0.md)|string|Acquisition approach used Conventional, Wide Azimuth, Multi Azimuth etc.| |
|_data.SourceConfigurations[]_|_object_|_The seismic source configurations used for this acquisition project. Fragment Description: Parameters characterizing the seismic source configuration._| |
|data.SourceConfigurations[].VesselName|string|Name of the source vessel (may be the same as the receiver).| |
|data.SourceConfigurations[].ShotpointSpacing|number|Horizontal distance between shotpoint locations.|In case `data.ShotpointIncrementDistance` is populated in the 1.0.0 version, add a SourceConfigurations structure and copy the value to `data.SourceConfigurations[].ShotpointSpacing`. Update the `meta[]` item such that the new property is subject to normalization.  |
|data.SourceConfigurations[].EnergySourceTypeID &rarr; [SeismicEnergySourceType](../../../E-R/reference-data/SeismicEnergySourceType.1.0.0.md)|string|Seismic Source type. E.g.: Airgun, Vibroseis, Dynamite,Watergun.|In case `data.EnergySourceTypeID` is populated in the 1.0.0 version, copy the relationship to `data.SourceConfigurations[].EnergySourceTypeID` |
|data.SourceConfigurations[].SourceArrayCount|integer|Number of energy sources.|In case `data.SourceArrayCount` is populated in the 1.0.0 version, copy the count to `data.SourceConfigurations[].SourceArrayCount`|
|data.SourceConfigurations[].SourceArraySpacing|number|Distance between energy sources.|In case `data.SourceArraySeparationDistance` is populated in the 1.0.0 version, copy the value to `data.SourceConfigurations[].SourceArraySpacing`. Update the `meta[]` item such that the new property is subject to normalization.  |
|data.SourceConfigurations[].SourceArrayDepth|number|Depth of the energy source.| If `data.SourceArraySeparationDepth` is populated in the 1.0.0 version, copy the value to `data.SourceConfigurations[].SourceArrayDepth`. Update the `meta[]` item such that the new property is subject to normalization.  |
|data.SourceConfigurations[].SourceArrayVolume|number|Volume of the energy source.| |
|data.SourceConfigurations[].SourceArraySweepFreqMin|number|Minimum frequency of the vibroseis source.| |
|data.SourceConfigurations[].SourceArraySweepFreqMax|number|Maximum frequency of the vibroseis source.| |
|data.SourceConfigurations[].SourceArraySweepLength|number|Length of the vibroseis source sweep.| |
|data.SourceConfigurations[].Remarks|string|Text remarks regarding the Seismic source configuration.| |
|_data.ReceiverConfigurations[]_|_object_|_The seismic receiver configurations used for this acquisition project. Fragment Description: Parameters characterizing the seismic receiver configuration._| |
|data.ReceiverConfigurations[].VesselName|string|Name of the receiver vessel (may be the same as the source).| If data.VesselName is populated in the 1.0.0 version, copy the name to data.ReceiverConfigurations.VesselName |
|data.ReceiverConfigurations[].CableCount|integer|Number of receiver arrays (lines).|In case `data.CableCount` is populated in the 1.0.0 version, copy the count to `data.ReceiverConfigurations[].CableCount` |
|data.ReceiverConfigurations[].CableLength|number|Total length of receiver array.| In case `data.CableLength` is populated in the 1.0.0 version, copy the value to `data.ReceiverConfigurations[].CableLength`. Update the `meta[]` item such that the new property is subject to normalization. |
|data.ReceiverConfigurations[].CableSpacing|number|Horizontal distance between receiver arrays.|In case `data.CableSpacingDistance` is populated in the 1.0.0 version, copy the value to `data.ReceiverConfigurations[].CableSpacing`. Update the `meta[]` item such that the new property is subject to normalization.|
|data.ReceiverConfigurations[].CableDepth|number|Marine seismic cable towing depth below sea surface  (Positive Down).| |
|data.ReceiverConfigurations[].ReceiverTypeID &rarr; [SeismicReceiverType](../../../E-R/reference-data/SeismicReceiverType.1.0.0.md)|string|The type of receivers, e.g. geophones, hydrophones, ocean bottom seismometers.| |
|data.ReceiverConfigurations[].ReceiverCount|integer|Number of receivers on a cable.| |
|data.ReceiverConfigurations[].ReceiverSpacingInterval|number|Distance between receivers on same cable.| |
|data.ReceiverConfigurations[].ReceiverGroupSpacing|number|Distance between receiver groups on the same cable.| |
|data.ReceiverConfigurations[].Remarks|string|Text remarks regarding the Seismic Receiver configuration.| |

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
