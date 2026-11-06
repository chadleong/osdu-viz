<a name="TOC"></a>

[[_TOC_]]

# Governance Change to OPEN for `osdu:wks:reference-data--WellboreTrajectoryType:1.0.0`

The schema [`osdu:wks:reference-data--WellboreTrajectoryType:1.0.0`](../../../E-R/reference-data/WellboreTrajectoryType.1.0.0.md)
has not changed but the governance changes to OPEN, meaning: _Custom values should not conflict with Forum values. This
level of governance is used for reference data types that will benefit from some amount of interoperability but also are
uncontrolled enough that companies can add their own values._

## Previous (LOCAL) Version

This list has, until now, been governed as LOCAL. Only three values were deployed by OSDU, `Directional`, `Horizontal`
and `Vertical`. `Directional`, has been deprecated; instead, `Inclined` has been created with the same meaning.

## New (OPEN) Values

Operators should validate whether any of the new values collide with existing extensions or overlap with the new values.
Below the new values sourced from PPDM:

| New Values             | Comment                 |
|------------------------|-------------------------|
| Inclined               | Superseding Directional |
 | Inclined.BuildAndHold  |                         |
 | Inclined.DeepInclined  |                         |
| Inclined.DoubleKickOff |                         |
 | Inclined.SlantHole     |                         |
| Inclined.SType         |                         |
| Horizontal.Level       |                         |
 | Horizontal.ToeDown     |                         |
 | Horizontal.ToeUp       |                         |
| Horizontal.Undulating  |                         |
 
[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)