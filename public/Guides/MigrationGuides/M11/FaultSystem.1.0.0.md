[[_TOC_]]

# Migration to `osdu:wks:work-product-component--FaultSystem:1.1.0`

Migrating  [`osdu:wks:work-product-component--FaultSystem:1.0.0`](../../../E-R/work-product-component/FaultSystem.1.0.0.md)
to [`osdu:wks:work-product-component--FaultSystem:1.1.0`](../../../E-R/work-product-component/FaultSystem.1.1.0.md)
means adding new properties only. No migration effort expected.

## New Properties on Faults[] Members

| Property                                                                                                                           | Value Type | Description                                                                                     | Migration Instructions                                                       |
|------------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| data.Faults[].FaultInterpretationID &rarr; [FaultInterpretation](../../../E-R/work-product-component/FaultInterpretation.1.0.0.md) | string     | The related FaultInterpretation for collaborating with Earth Modeling.                          | This property opens integration opportunities. No migration effort required. |                                                                                                                                                           |
| data.Faults[].Role &rarr; [RepresentationRole](../../../E-R/reference-data/RepresentationRole.1.0.0.md)                            | string     | RepresentationRole for this Fault element if more than one role is in use for this FaultSystem. | This property opens integration opportunities. No migration effort required. |
| data.Faults[].Type &rarr; [RepresentationType](../../../E-R/reference-data/RepresentationType.1.0.0.md)                            | string     | RepresentationType for this Fault element if more than one type is in use for this FaultSystem. | This property opens integration opportunities. No migration effort required. |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)