<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Wellbore:1.3.0`

Once more, new properties are added to the Wellbore. This means that generally no action is required, except updating
the version in the record `kind` to enable indexing of the new properties.

* data.WellboreReasonID - reason why the Wellbore was drilled (not same as previous Drilling Reason now Lahee Class
  type) e.g. Main Wellbore (Original Hole), Sidetrack due to New Geologic Target, Sidetrack/Bypass due to Fish, New
  Lateral Leg (multi-lateral well).
* data.FormationNameAtTotalDepth - Formation/Geologic Interval Name (text string), no association to WellboreMarker,
  Reservoir, etc.
* data.WellboreCosts[] array – simple ActivityTypeID & summed Cost to enable Drilling cost, Completion cost, Abandonment
  cost, etc., to be stored against a Wellbore. There is no association/integration to a Well Cost Transparency or
  Financial schema for these cost amounts. ActivityTypeID is supported by the WellActivityPhaseType Reference list.


| Cumulative Name                                                                                                                | Value Type | Title                         | Description                                                                                                                                      | Migration/Recommendation |
|--------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| data.WellboreReasonID &rarr; [WellboreReason](../../../E-R/reference-data/WellboreReason.1.0.0.md)                             | string     | Wellbore Reason Id            | The relationship to a reference-data record explaining the reason why this wellbore was drilled.                                                 | New                      |
| data.FormationNameAtTotalDepth                                                                                                 | string     | Formation Name At Total Depth | The name of the formation encountered at total depth. The value is not controlled by any reference value list.                                   | New                      |
| _data.WellboreCosts[]_                                                                                                         | _object_   | _WellboreCost_                | _The array of WellActivityPhaseType and associated Cost values. Fragment Description: A cost value associated to a WellActivityPhaseType value._ | New                      |
| data.WellboreCosts[].ActivityTypeID &rarr; [WellActivityPhaseType](../../../E-R/reference-data/WellActivityPhaseType.1.0.0.md) | string     | Well Activity Phase Type ID   | The activity phase to which the Cost property is attributed to.                                                                                  | New                      |
| data.WellboreCosts[].Cost                                                                                                      | number     | Cost                          | The cost value associated with the WellActivityPhaseType.                                                                                        | New                      |



[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
