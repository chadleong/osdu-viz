<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--DurationContext:1.0.1`

Changes between [osdu:wks:reference-data--DurationContext:1.0.0](../../../E-R/reference-data/DurationContext.1.0.0.md) and [osdu:wks:reference-data--DurationContext:1.0.1](../../../E-R/reference-data/DurationContext.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The explicit duration of activity within a nominal reporting period._
  * New Description: **_The explicit duration within a nominal reporting period._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--DurationContext:Calendar%20Days | Calendar days | DEPRECATED: Please use Code="CalendarDays" with Name="Calendar days" instead. The number of days within a specified calendar month | **DEPRECATED, superseded by Code: CalendarDays**<br>Changes in Name, InactiveIndicator, Description, AttributionAuthority |
| partition-id:reference-data--DurationContext:CalendarDays | Calendar days | The number of days in a specified calendar month. | Value added. |
| partition-id:reference-data--DurationContext:DowntimeDays | Downtime days | The amount of time in days that the entity has been unable to perform its intended function due to disruption of operations | Changes in Name, AttributionAuthority |
| partition-id:reference-data--DurationContext:DowntimeHours | Downtime hours | The amount of time in hours that the entity has been unable to perform its intended function due to disruption of operations | Changes in Name, AttributionAuthority |
| partition-id:reference-data--DurationContext:UptimeDays | Uptime days | The amount of time in days that the entity has remained in continuous operation | Changes in Name, AttributionAuthority |
| partition-id:reference-data--DurationContext:UptimeHours | Uptime hours | The amount of time in hours that the entity has remained in continuous operation | Changes in Name, AttributionAuthority |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Duration_Context_Type)
* &rarr; [Manifest record DurationContext.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/DurationContext.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)