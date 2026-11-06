[[_TOC_]]

# Migration to `osdu:wks:work-product-component--UnsealedSurfaceFramework:1.1.0`

Migrating  [`osdu:wks:work-product-component--UnsealedSurfaceFramework:1.0.0`](../../../E-R/work-product-component/UnsealedSurfaceFramework.1.0.0.md)
to [`osdu:wks:work-product-component--UnsealedSurfaceFramework:1.1.0`](../../../E-R/work-product-component/UnsealedSurfaceFramework.1.1.0.md)
means adding new properties only. No migration effort expected.

## New Properties

| Property                                                                                                | Value Type      | Description                                                                                                                                                                                                                                                        | Migration Instructions                                                       |
|---------------------------------------------------------------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| data.SeismicFaultIDs[] &rarr; [SeismicFault](../../../E-R/work-product-component/SeismicFault.1.0.0.md) | array of string | List of individual SeismicFault representations contributing to this structural model. Alternatively FaultSystem can be used as single coherent set of fault representation. Only one property is expected to be populated, either SeismicFaultIDs or FaultSystem. | This property opens integration opportunities. No migration effort required. |
| data.FaultSystemID &rarr; [FaultSystem](../../../E-R/work-product-component/FaultSystem.1.1.0.md)       | string          | An alternative, coherent set of fault representations under one work-product-component. Only one property is expected to be populated, either FaultSystem or SeismicFaultIDs.                                                                                      | This property opens integration opportunities. No migration effort required. |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)