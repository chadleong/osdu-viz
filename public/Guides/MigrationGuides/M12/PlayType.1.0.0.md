# Governance Change to OPEN for `osdu:wks:reference-data--PlayType:1.0.0`

The schema [`osdu:wks:reference-data--PlayType:1.0.0`](../../../E-R/reference-data/PlayType.1.0.0.md)
has not changed but the governance changes to OPEN, meaning: _Custom values should not conflict with Forum values. This
level of governance is used for reference data types that will benefit from some amount of interoperability but also are
uncontrolled enough that companies can add their own values._

This list has, until now, been governed as LOCAL. No existing value has been removed only one value, 
`CarbonCaptureStorage`, has been deprecated; instead, `CarbonCaptureAndStorage` has been created with the same meaning 
but better readability.

Operators should validate whether any of the new values collide with existing extensions or overlap with the new values.

| New Values                | Comment                            |
|---------------------------|------------------------------------|
| `OilSands.InSitu`         |                                    |
| `OilSands.Mineable`       |                                    |
| `Shale.ShaleGas`          |                                    |
| `Shale.ShaleOil`          |                                    |
| `CarbonCaptureAndStorage` | Superseding `CarbonCaptureStorage` |

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)