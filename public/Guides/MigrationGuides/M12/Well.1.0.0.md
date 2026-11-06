<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Well:1.1.0`

Migrating  [`osdu:wks:master-data--Well:1.0.0`](../../../E-R/master-data/Well.1.0.0.md)
to [`osdu:wks:master-data--Well:1.1.0`](../../../E-R/master-data/Well.1.1.0.md) - aligning with PPDM Well Status and
Classification Standard V3.

## New Properties for Well:1.1.0

| Property | Value Type | Description | Migration Instructions |
|----------|---------|-------------|------------------------|
|data.InterestTypeID &rarr; [WellInterestType](../../../E-R/reference-data/WellInterestType.1.0.0.md)|string|Business Interest [Well Interest Type] describes whether a company currently considers a well or its data to be a real or planned asset, and if so, the nature of and motivation for that company's interest.|[**Please follow the migration instructions for WellInterestType**](./WellInterestType.1.0.0.md).|
|data.BusinessIntentionID &rarr; [WellBusinessIntention](../../../E-R/reference-data/WellBusinessIntention.1.0.0.md)| string|Business Intention [Well Business Intention] is the general purpose for which resources are approved for drilling a new well or subsequent wellbore(s).| |
|data.RoleID &rarr; [WellRole](../../../E-R/reference-data/WellRole.1.0.0.md)|string|Role [Well Role] is the current purpose, whether planned or actual. If there are multiple Roles among a well's components, the well may be assigned the facet value with the highest significance. The value of Role may change over the Life Cycle.| |
|data.HistoricalInterests[].InterestTypeID &rarr; [WellInterestType](../../../E-R/reference-data/WellInterestType.1.0.0.md)|string|Business Interest [Well Interest Type] describes whether a company currently considers a well or its data to be a real or planned asset, and if so, the nature of and motivation for that company's interest.| |
|data.HistoricalInterests[].EffectiveDateTime|string|The date and time at which the well interest type becomes effective.| |
|data.HistoricalInterests[].TerminationDateTime|string|The date and time at which the well interest type is no longer in effect.| |
|data.WasBusinessInterestFinancialOperated|boolean|Identifies, for the purpose of current use, if the Business Interest [Well Interest Type] for this well has ever been FinancialOperated in the past.| |
|data.WasBusinessInterestFinancialNonOperated|boolean|Identifies, for the purpose of current use, if the Business Interest [Well Interest Type] for this well has ever been FinancialNonOperated in the past.| |
|data.WasBusinessInterestObligatory|boolean|Identifies, for the purpose of current use, if the Business Interest [Well Interest Type] for this well has ever been Obligatory in the past.| |
|data.WasBusinessInterestTechnical|boolean|Identifies, for the purpose of current use, if the Business Interest [Well Interest Type] for this well has ever been Technical in the past.| |
|data.ConditionID &rarr; [WellCondition](../../../E-R/reference-data/WellCondition.1.0.0.md)|string|Condition [Well Condition] is the operational state of a well component relative to the Role [Well Role].| |
|data.OutcomeID &rarr; [WellBusinessIntentionOutcome](../../../E-R/reference-data/WellBusinessIntentionOutcome.1.0.0.md)|string|Outcome [Well Drilling Outcome] is the result of attempting to accomplish the Business Intention [Well Business Intention].| |
|data.StatusSummaryID &rarr; [WellStatusSummary](../../../E-R/reference-data/WellStatusSummary.1.0.0.md)|string|Identifies the status of a well component in a way that may combine and-or summarize concepts found in other status facets. For example, a Well Status Summary of Gas Injector Shut-in, which contains commonly desired business information, combines concepts from Product Type, Fluid Direction, and Condition.| |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)