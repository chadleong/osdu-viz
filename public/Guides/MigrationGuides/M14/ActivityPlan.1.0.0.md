[[_TOC_]]

# Migration to `osdu:wks:master-data--ActivityPlan:1.1.0`

For owners and consumers of Activity Plan data, please find below the migration instructions based on changes
from [ActivityPlan.1.0.0](../../../E-R/master-data/ActivityPlan.1.0.0.md)
to [ActivityPlan.1.1.0](../../../E-R/master-data/ActivityPlan.1.1.0.md)

## Deprecated/Changed Properties

| Deprecated                                    | Superseded                                                                                  | Superseded Name              | Description                                                                                                                                                                                                                                                                |
|-----------------------------------------------|---------------------------------------------------------------------------------------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.WellPlanningActivities[].PlannedDuration | data.WellPlanningActivities[].EstimatedDuration                                             | Estimated Duration           | DEPRECATED: PlannedDuration property of type string was replaced with EstimatedDuration property of type number UOM:time in ActivityPlan:1.1.0.  Migrate (change value type) and use ActivityPlan:1.1.0 data.WellPlanningActivities[].EstimatedDuration for this property. |
| —                                             | data.WellPlanningActivities[].ProductiveTimeDuration                                        | Productive Time Duration     | ProductiveTimeDuration (unchanged property value type) got tagged with frame-of-reference UOM:time in ActivityPlan:1.1.0.  Make sure the `meta[]` declares the correct unit (days, hours,...) for correct normalization.                                                   |
| —                                             | data.WellPlanningActivities[].NonProductiveTimeDuration | Non Productive Time Duration | NonProductiveTimeDuration (unchanged property value type) got tagged with frame-of-reference UOM:time in ActivityPlan:1.1.0.  Make sure the `meta[]` declares the correct unit (days, hours,...) for correct normalization.                                                |


## Application Update

Applications should migrate to Activity Plan v1.1.0 when possible. Pay attention to the unit definitions in the `meta[]`
block.

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
