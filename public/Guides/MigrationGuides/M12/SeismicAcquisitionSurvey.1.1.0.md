[[_TOC_]]

# Migration to `osdu:wks:master-data--SeismicAcquisitionSurvey:1.2.0`

[`osdu:wks:master-data--SeismicProcessingProject:1.2.0`](../../../E-R/master-data/SeismicAcquisitionSurvey.1.2.0.md) 
add support for Vertical Seismic Profiling (VSP).

## New Properties

| Cumulative Name                                                                                            | Value Type | Description                                                                                                     | Migration Instructions                                       |
|------------------------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| data.SourceConfigurations[].SourceWellboreID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.0.0.md) | string     | The relationship to the wellbore, in which the source or sources are located.                                   | New property, only relevant to VSP previously not supported. |
| data.SourceConfigurations[].SourceArrayMinDepth                                                            | number     | Minimum depth of Sources in a wellbore. Used in conjunction with VSP acquisition.                               | New property, only relevant to VSP previously not supported. |
| data.SourceConfigurations[].SourceArrayMaxDepth                                                            | number     | Maximum depth of receivers in a wellbore. Used in conjunction with VSP acquisition.                             | New property, only relevant to VSP previously not supported. |
| data.ReceiverConfigurations[].WellboreID &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.0.0.md)     | string     | The relationship to the wellbore, in which the receivers are located. Used in conjunction with VSP acquisition. | New property, only relevant to VSP previously not supported. |
| data.ReceiverConfigurations[].WellboreReceiverMinDepth                                                     | number     | Minimum depth of receivers in a wellbore. Used in conjunction with VSP acquisition.                             | New property, only relevant to VSP previously not supported. |
| data.ReceiverConfigurations[].WellboreReceiverMaxDepth                                                     | number     | Maximum depth of receivers in a wellbore. Used in conjunction with VSP acquisition.                             | New property, only relevant to VSP previously not supported. |


# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
