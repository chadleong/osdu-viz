<a name="TOC"></a>

[[_TOC_]]

# Milestone 15 Migration

## PPDM reference-data Updates

The following schemas have been patched with changed descriptions triggering an incremented patch version 1.0.**1**.
The schema changes are of decorative nature. The values are now sourced from PPDM. PPDM introduces a set of clean 
definitions and Code styles. The previous OSDU values, which often used inconsistent Code style, were deprecated and 
superseding values indicated. If operators want to migrate to the PPDM reference values a migration is required, which 
is presented in the individual migration pages:

1. [BitType:1.0.1 Migration](BitType.1.0.1.md)
2. [DrillingReasonType:1.0.0](DrillingReasonType.1.0.0.md) (deprecation)
2. [SeismicEnergySourceType:1.0.1 Migration](SeismicEnergySourceType.1.0.0.md)
3. [VerticalMeasurementPath:1.0.1 Migration](VerticalMeasurementPath.1.0.0.md)

## Changes to Facility

1. [Wellbore:1.2.0 migration](Wellbore.1.1.1.md), with 
   1. new LaheeClassID and [DrillingReasonType](DrillingReasonType.1.0.0.md) deprecations;
   2. inclusion of AbstractFacility:1.1.0
2. [Well:1.2.0 using AbstractFacility:1.1.0](Well.1.1.0.md) (no action required)
3. [Rig:1.1.0 using AbstractFacility:1.1.0](Rig.1.0.0.md) (no action required)
4. [StorageFacility:1.1.0 using AbstractFacility:1.1.0](StorageFacility.1.0.0.md) (no action required)

[Back to TOC](#TOC)

---

## External data Sources

* One new property in `osdu:wks:master-data--ConnectedSourceDataJob:1.2.0`, details in 
  [this page](ConnectedSourceDataJob.1.1.0.md).

## Well Delivery

* Value type corrections for [`OperationsReport:1.2.0`](OperationsReport.1.1.0.md), combined with a number of title and
  description improvements.
* Additional `data.VerticalMeasurement` for [`HoleSection:1.1.0`](HoleSection.1.0.0.md) to provide a firm zero-depth
  point.

# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
