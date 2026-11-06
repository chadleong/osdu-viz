<a name="TOC"></a> Previous Chapter: [6 Common Properties](06-LifecycleProperties.md)

[[_TOC_]]

# 7 History Properties

A recurring pattern in OSDU schema is an array of names with bounding dates. A good example is `NameAlias`. All
reference data types have this property structure, which provides synonyms. More than just alternative names, it also
provides Effective and Termination `DateTimes` so the names can be localized to a time when they were in use.

## 7.1 Use of Effective and Termination DateTimes

To ensure a consistent interpretation, there are rules about how to use the Effective and Termination `DateTimes`.

<details>

<summary markdown="span">These are best explained in the context of a Facility event:</summary>

<OsduImportJSON>[AbstractFacilityEvent, Full](../../Generated/abstract/AbstractFacilityEvent.1.0.0.json#only.properties)</OsduImportJSON>

```json
{
  "properties": {
    "FacilityEventTypeID": {
      "description": "The facility event type is a picklist. Examples: 'Permit', 'Spud', 'Abandon', etc.",
      "type": "string",
      "pattern": "^[\\w\\-\\.]+:reference-data\\-\\-FacilityEventType:[\\w\\-\\.\\:\\%]+:[0-9]*$",
      "x-osdu-relationship": [
        {
          "GroupType": "reference-data",
          "EntityType": "FacilityEventType"
        }
      ]
    },
    "EffectiveDateTime": {
      "description": "The date and time at which the event took place or takes effect.",
      "type": "string",
      "format": "date-time",
      "x-osdu-frame-of-reference": "DateTime"
    },
    "TerminationDateTime": {
      "description": "The date and time at which the event is no longer in effect. For point-in-time events the 'TerminationDateTime' must be set equal to 'EffectiveDateTime'. Open time intervals have an absent 'TerminationDateTime'.",
      "type": "string",
      "format": "date-time",
      "x-osdu-frame-of-reference": "DateTime"
    }
  }
}
```

</details>

A Facility event can be interpreted with two different senses of “event”. One can be thought of as an “instance”, which
is a single instant in time; the other as a “happening”, which occurs over an interval of time. In order to allow OSDU
members the freedom to use a Facility event in either sense, the following rules will help applications determine
intention:

- Both `DateTimes` are absent if no time localization is intended (probably not applicable to a Facility event, but will
  occur elsewhere)
- `EffectiveDateTime` is coincident with `TerminationDateTime` if the event is an instant
- Both `DateTimes` are populated, but with different values, if the event is an interval with known boundaries
- `EffectiveDateTime` is populated and `TerminationDateTime` is absent if the event is an interval but is ongoing in the
  present
- `TerminationDateTime` is populated and `EffectiveDateTime` is absent if the event is an interval and has ceased but
  always existed prior to that time; for example, `WellSiteAccessibleToPublic`
- Interval events that have occurred in the past but have either an unknown starting or ending `DateTime` may use the
  text “UNKNOWN”
- Instance events with unknown `DateTimes` may set both `DateTimes` to “UNKNOWN”
- `EffectiveDateTime` is always coincident with or earlier than y

## 7.2 Special Cases

Two special history properties have been added to `AbstractFacility` to cover cases when dates may not be known:

- `InitialOperatorID`
- `CurrentOperatorID`

These point to `Organisation` values used in the `FacilityOperator` array to identify which entries correspond to the
first and last operators. For legacy data, these values may be known even if actual Effective and
Termination `DateTimes` are not. In such cases, it is not possible to discern the first and last operators by ordering
the array chronologically. For consistency and to provide convenience for applications, these rules should be followed:

- `InitialOperatorID` and `CurrentOperatorID` are set even if Effective or Termination `DateTimes` are known
- Hence, when a `Facility` record is updated with a new operator, the `CurrentOperatorID` needs to be changed in
  addition to adding it to the history array

---

## Links

1. Return to the [Beginning of the Chapter](#TOC)
2. Next Chapter: [8 Geographic Entities](08-GeographicEntities.md)
3. Browse to the [Schema Usage Guide Table of Contents](../README.md)

---
