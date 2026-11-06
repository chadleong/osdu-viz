<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--HoleSection:1.1.0`

Potential migration to [`osdu:wks:master-data--HoleSection:1.1.0`](../../../E-R/master-data/HoleSection.1.1.0.md):

Previously HoleSection was used in the context of well planning, where the vertical reference point was given centrally
with the planned Wellbore's DefaultVerticalMeasurement as zero-depth point (ZDP). For actual wellbores it is convenient
to align the usage with e.g. WellLog, RockSample and other types, which carry a VerticalMeasurement property including
an [AbstractFacilityVerticalMeasurement](../../../E-R/abstract/AbstractFacilityVerticalMeasurement.1.0.0.md) schema
fragment.

M15 adds the `VerticalMeasurement` property:

| Cumulative Name                                                                                                                             | Value Type | Description                                                                                     | Migration                                                                                                                                                                                                                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _data.VerticalMeasurement_ &rarr; [AbstractFacilityVerticalMeasurement](../../../E-R/abstract/AbstractFacilityVerticalMeasurement.1.0.0.md) | object     | References an entry in the VerticalMeasurements array for the Wellbore identified by WellboreID, or a standalone vertical reference which defines the vertical reference datum for all measured depths of the HoleSection record. If this is not populated, the VerticalMeasurement is derived from the Wellbore.| It is good practice to define the vertical reference (zero-depth point for measured depths) explicitly. Recommendations and best practices in the [Schema Usage Guide](../../Chapters/03-VerticalMeasurements.md#34-recommendations-best-practice). |


[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](../M13/README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
