<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Wellbore:1.1.1`

This [Wellbore:1.1.1](../../../E-R/master-data/Wellbore.1.1.1.md) version change is a so-called patch. There are no
structural changes to the schema since only descriptions of properties were changed:

* `data.TrajectoryTypeID` is updated with PPDM's description: _Profile Type [Wellbore Trajectory Type] is the general
  geometry of the wellbore relative to the vertical plane. The specific criteria for Profile Type may vary by operator
  or regulator. The facet value may change if conditions encountered during drilling are not what was planned or
  permitted._
* `data.WellboreTrajectoryTypeID` is deprecated because it is the duplicate property accidentally added in version
  Wellbore:1.1.0.

## Recommended Action

Continue to use `data.TrajectoryTypeID`. If by accident `data.WellboreTrajectoryTypeID` was exclusively populated, then
move the value to `data.TrajectoryTypeID`.

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
