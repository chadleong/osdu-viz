# Milestone 14 Migration

## PPDM reference-data Updates

The following schemas have been patched with changed descriptions triggering an incremented patch version 1.0.**1**.
The schema changes are of decorative nature. The values are now sourced from PPDM. PPDM introduces a set of clean 
definitions and Code styles. The previous OSDU values, which often used inconsistent Code style, were deprecated and 
superseding values indicated. If operators want to migrate to the PPDM reference values a migration is required, which 
is presented in the individual migration pages:

1. [SeismicProcessingStageType:1.0.1 Migration](SeismicProcessingStageType.1.0.0.md)
2. [VerticalMeasurementType:1.0.2](VerticalMeasurementType.1.0.1.md) (Schema description changed, no value changes)

## Activity:1.1.0

[AbstractProjectActivity](../../../E-R/abstract/AbstractProjectActivity.1.1.0.md) and
[AbstractWPCActivity](../../../E-R/abstract/AbstractWPCActivity.1.1.0.md) are extended by new `ActivityStates[]` and
`LastActiityState` ([AbstractActivityState](../../../E-R/abstract/AbstractActivityState.1.0.0.md) properties. 
The fragment contains an effective time interval and a reference to 
[reference-data--ActivityStatus](../../../E-R/reference-data/ActivityStatus.1.0.0.md), the activity lifecycle status. 
The reference values are documented with (`OPEN` governance). the
concrete, generic [Activity](../../../E-R/work-product-component/Activity.1.1.0.md) is upgraded to version 1.1.0 to
include the revised AbstractWPCActivity. The update of the current AbstractProjectActivity consumers is deferred until
changes to Coring, SeismicAcquisitionSurvey, SeismicProcessingProject, Seismic2DInterpretationSet and
Seismic3DInterpretationSet are required.

Detailed information in the [individual migration page](Activity.1.0.0.md).

## ConnectedSource/External Data Sources (EDS)

### ConnectedSourceRegistryEntry:1.1.0

ConnectedSourceRegistryEntry:1.1.0 introduces `data.SmtpSchemes[]` for a "_List of SMTP Server schemes available for use
in mailing the detailed eds's report_" and a `data.AirflowStableAPIUrl` specification. The `ClientID` is deprecated in favor
of `ClientIDKeyName`. The temporary storage `ReferenceValueMappings` is added as object without search support. Details
are listed in [the individual migration page](ConnectedSourceRegistryEntry.1.0.0.md).

### ConnectedSourceDataJob:1.1.0

[ConnectedSourceDataJob:1.1.0](ConnectedSourceDataJob.1.0.0.md) only introduces optional new properties; no migration required.

## SeismicTraceData:1.3.0

The free text properties `data.Phase` and `data.Polarity` have been deprecated in favour of reference value lists. More details in the [individual migration page](SeismicTraceData.1.2.0.md).

## RockSampleAnalysis:1.1.0

[RockSampleAnalysis:1.1.0](../../../E-R/work-product-component/RockSampleAnalysis.1.0.0.md) supports additional support for GrainSizeAnalysis in addition to the previously supported RoutineCoreAnalysis. In order to filter search results by analysis type, the migration should consider setting defaults for `data.AnalysisTypeIDs[]`. Details in the migration page [migration page](RockSampleAnalysis.1.0.0.md)

## Well Planning and Execution

### ActivityPlan Corrections 

Some duration properties were incorrectly defined as strings or not properly associate to a frame-of-reference
context. [Detailed migration instructions](./ActivityPlan.1.0.0.md).

### OperationsReport Corrections 

Some properties migrate to the new [WellActivity](../../../E-R/master-data/WellActivity.1.0.0.md). Similar to
ActivityPlan, some duration properties were incorrectly defined as strings or not properly associate to a
frame-of-reference context. [Detailed migration instructions](./OperationsReport.1.0.0.md)

## Patches in the Well Domain

### Wellbore:1.1.1

Version Wellbore:1.1.0 contained a duplicate property. This is deprecated in version Wellbore:1.1.1. See details in
the [following page](Wellbore.1.1.0.md).

### WellboreMarkerSet:1.2.1

A missing description for a property was added to the schema, which does not change the schema
structure. [No action required](WellboreMarkerSet.1.2.0.md).

---

# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
