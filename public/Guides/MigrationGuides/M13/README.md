# Milestone 13 Migration

## PPDM reference-data Updates

The following schemas have been patched with changed descriptions triggering an incremented patch version 1.0.**1**.
The schema changes are of decorative nature. The values are now sourced from PPDM. PPDM introduces a set of clean 
definitions and Code styles. The previous OSDU values, which often used inconsistent Code style, were deprecated and 
superseding values indicated. If operators want to migrate to the PPDM reference values a migration is required, which 
is presented in the individual migration pages:


1. [BitType:1.0.1 Migration](BitType.1.0.0.md)
2. [SeismicMigrationType:1.0.1 Migration](SeismicMigrationType.1.0.0.md)
3. [SeismicPickingType:1.0.1 Migration](SeismicPickingType.1.0.0.md)
4. [SeismicWaveType:1.0.1 Migration](SeismicWaveType.1.0.0.md)
5. [VerticalMeasurementType:1.0.1 Migration](VerticalMeasurementType.1.0.0.md)

---

## FaultSystem:1.2.0

Earlier versions of FaultSystem did not describe the navigation context for 2D lines. The 3D support via `BinGridID` is
extended to 2D by adding `SeismicLineGeometries`. Details in the [individual migration page](FaultSystem.1.1.0.md).

---

## SeismicProcessingProject:1.2.0

A new property `data.BinGridID` was added to indicate the bin grid geometry for the processed seismic data. More details
in the [individual migration page](SeismicProcessingProject.1.1.0.md)

---

## SeismicTraceData:1.2.0

In case existing SeismicTraceData belong to a time-lapse sequence, the records can be improved to be assigned to a
TimeSeries object. Details in the [individual migration page](SeismicTraceData.1.1.0.md).

---

## VelocityModeling:1.1.0

The previous version of `VelocityModeling` did not describe the navigation context for 2D lines. The 3D support
via `BinGridID` is extended to 2D by adding `SeismicLineGeometries`. Details in
the [individual migration page](VelocityModeling.1.0.0.md).

---

# Links

* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
