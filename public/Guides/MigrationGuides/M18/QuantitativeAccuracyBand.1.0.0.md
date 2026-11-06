<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--QuantitativeAccuracyBand:1.0.0`

Changes between [osdu:wks:reference-data--QuantitativeAccuracyBand:1.0.0](../../../E-R/reference-data/QuantitativeAccuracyBand.1.0.0.md) and [osdu:wks:reference-data--QuantitativeAccuracyBand:1.0.0](../../../E-R/reference-data/QuantitativeAccuracyBand.1.0.0.md) are listed below.

[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.100m | length.100 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.10m | length.10 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.150m | length.150 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.1m | length.1 m | The true length is not known exactly but is believed to be (statistically) within 1 meter of the reported value. | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.200m | length.200 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.20m | length.20 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.2m | length.2 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.3m | length.3 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.4m | length.4 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.50m | length.50 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.5m | length.5 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.GreaterThan200m | length.Greater than 200 m | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.GreaterThan500m | ~~Greater than 500 m~~ | ~~Applicable to coordinates of which accuracy and quality cannot be verified.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan100m | ~~Less than 100 m~~ | ~~Legacy well surveyed with e.g. offshore radio positioning for an exploration well in 1970. Well locations digitized from a map scale 1:200,000.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan10m | ~~Less than 10 m~~ | ~~Unambiguous CRS, with inhomogeneous geodetic control network, but uncertainty of applied transformation. Or for example a GPS surface tie of the rig, but wellhead coordinates on seabed have a lower accuracy. Or for example USBL (ultra-short baseline) at 2000 m water depth (~ 0.5% of depth).~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan1m | length.Less than 1 m | The true length is not known exactly but is believed to be (statistically) within less than 1 meter of the reported value. | Changes in Name, NameAlias, Description |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan250m | ~~Less than 250 m~~ | ~~Well survey with less accurate methods, e.g., offshore radio positioning for an exploration well early 1970s (e.g. Decca Main Chain). Ambiguity in CRS.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan25m | ~~Less than 25 m~~ | ~~Unambiguous CRS, but uncertainty of applied transformation. Well locations digitized from a map scale 1:50,000.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan2m | ~~Less than 2 m~~ | ~~Accurate offshore wells.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan500m | ~~Less than 500 m~~ | ~~Ambiguity in CRSs, e.g. typical assigned to IHS data if not further confirmed.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan50m | ~~Less than 50 m~~ | ~~Well survey e.g. in past with less accurate methods, e.g., offshore radio positioning for an exploration well in 1970.Well locations digitized from a map scale 1:100,000.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Length.LessThan5m | ~~Less than 5 m~~ | ~~Modern onshore wells, positioned with GPS; traditional, inhomogeneous geodetic control network. Deepwater wells.~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.10g | mass.10 g | No Description | Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.10gr | ~~10 Grams~~ | ~~Quantitative accuracy for mass~~ | **_Removed_** |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.10grams | Mass.10 g | DEPRECATED: Please use Code="Mass.10g" with Name="Mass.10g" instead.  | **DEPRECATED, superseded by Code: Mass.10g**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.1g | mass.1 g | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.1gram | Mass.1 g | DEPRECATED: Please use Code="Mass.1g" with Name="Mass.1g" instead.  | **DEPRECATED, superseded by Code: Mass.1g**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.1kg | mass.1 kg | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Mass.1kilogram | Mass.1 kg | DEPRECATED: Please use Code="Mass.1kg" with Name="Mass.1kg" instead.  | **DEPRECATED, superseded by Code: Mass.1kg**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.10millisecond | Time.10 ms | DEPRECATED: Please use Code="Time.10ms" with Name="Time.10ms" instead.  | **DEPRECATED, superseded by Code: Time.10ms**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.10ms | time.10 ms | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.10s | time.10 s | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.10second | Time.10 s | DEPRECATED: Please use Code="Time.10s" with Name="Time.10s" instead.  | **DEPRECATED, superseded by Code: Time.10s**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.1millisecond | Time.1 ms | DEPRECATED: Please use Code="Time.1ms" with Name="Time.1ms" instead.  | **DEPRECATED, superseded by Code: Time.1ms**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.1min | time.1 min | The true time duration is not known exactly but is believed to be (statistically) within 1 minute of the reported value. | Changes in Name, NameAlias, Description |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.1minute | Time.1 min | DEPRECATED: Please use Code="Time.1min" with Name="Time.1min" instead.  | **DEPRECATED, superseded by Code: Time.1min**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.1ms | time.1 ms | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.1s | time.1 s | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.1second | Time.1 s | DEPRECATED: Please use Code="Time.1s" with Name="Time.1s" instead.  | **DEPRECATED, superseded by Code: Time.1s**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.2millisecond | Time.2 ms | DEPRECATED: Please use Code="Time.2ms" with Name="Time.2ms" instead.  | **DEPRECATED, superseded by Code: Time.2ms**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.2ms | time.2 ms | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.2s | time.2 s | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.2second | Time.2 s | DEPRECATED: Please use Code="Time.2s" with Name="Time.2s" instead.  | **DEPRECATED, superseded by Code: Time.2s**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.LessThan1min | time.Less than 1 min | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.LessThan1Minute | Time.< 1 min | DEPRECATED: Please use Code="Time.LessThan1min" with Name="Time.LessThan1min" instead.  | **DEPRECATED, superseded by Code: Time.LessThan1min**<br>Value added. |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.LessThan1s | time.Less than 1 s | No Description | Changes in Name, NameAlias |
| partition-id:reference-data--QuantitativeAccuracyBand:Time.LessThan1Second | Time.< 1 s | DEPRECATED: Please use Code="Time.LessThan1s" with Name="Time.LessThan1s" instead.  | **DEPRECATED, superseded by Code: Time.LessThan1s**<br>Value added. |

# Value Spreadsheet and Manifest

* [Manifest record QuantitativeAccuracyBand.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/QuantitativeAccuracyBand.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)