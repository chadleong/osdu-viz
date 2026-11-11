<a name="TOC"></a>

[[_TOC_]]

# Well Status and Classification 

## Well:1.1.0

The records below have been stripped of all irrelevant properties for this exercise.

### Option 1 Flat

This option was selected in Core Concepts 2022-03-29 - justified by the fact that some properties are already present at
root data level and that a nested structure therefore would be incomplete.

<details>

<summary markdown="span">Well:1.1.0 record with flat status properties (Option 1)</summary>

<OsduImportJSON>[Well:1.1.0 Option 1, flat, full record](master-data/Well.1.1.0-Option1.json#only.data)</OsduImportJSON>

```json
{
  "data": {
    "VersionCreationReason": "Demonstrate Option 1, flat well status and classification properties under data.",
    "FacilityTypeID": "namespace:reference-data--FacilityType:Well:",
    "OperatingEnvironmentID": "namespace:reference-data--OperatingEnvironment:Onshore:",
    "FacilityStates": [
      {
        "EffectiveDateTime": "2020-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z",
        "FacilityStateTypeID": "namespace:reference-data--FacilityStateType:Closed:"
      }
    ],
    "BusinessIntentionID": "namespace:reference-data--WellBusinessIntention:Appraise:",
    "RoleID": "namespace:reference-data--WellRole:Inject.MultipleProducts:",
    "InterestTypeID": "namespace:reference-data--WellInterestType:Yes:",
    "HistoricalInterests": [
      {
        "InterestTypeID": "namespace:reference-data--WellInterestType:Yes:",
        "EffectiveDateTime": "2015-02-13T09:13:15.55Z",
        "TerminationDateTime": "2020-02-13T09:13:15.55Z"
      }
    ],
    "WasBusinessInterestFinancialOperated": true,
    "WasBusinessInterestFinancialNonOperated": true,
    "WasBusinessInterestObligatory": true,
    "WasBusinessInterestTechnical": true,
    "ConditionID": "namespace:reference-data--WellCondition:Active:",
    "OutcomeID": "namespace:reference-data--WellBusinessIntentionOutcome:Achieved:",
    "StatusSummaryID": "namespace:reference-data--WellStatusSummary:OilProducing:",
    "ExtensionProperties": {}
  }
}
```

</details>

### Option 2 Nested

Option 2 was rejected during Core Concepts 2022-03-29. 

## Wellbore:1.1.0

The nested option was not developed for Wellbore. Also, a shared set of (AbstractXxx) properties was rejected for the
reason that some properties were already present in the current schema.
