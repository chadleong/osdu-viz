<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ReportingPeriod:1.0.1`

Changes between [osdu:wks:reference-data--ReportingPeriod:1.0.0](../../../E-R/reference-data/ReportingPeriod.1.0.0.md) and [osdu:wks:reference-data--ReportingPeriod:1.0.1](../../../E-R/reference-data/ReportingPeriod.1.0.1.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The time period covered by a production value record. Examples include Day, Month, Year._
  * New Description: **_A time interval associated with a numeric value for production reporting purposes._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ReportingPeriod:CU | Cumulative | DEPRECATED: Please use Code="Cumulative" with Name="Cumulative" instead. To be used where a production value represents the total to date from the beginning of the reporting context (life to date (LTD)), or absolute total for a reporting context that has end-dated. This could be the life of the associated reporting entity, or for a planned, or unplanned downtime event. | **DEPRECATED, superseded by Code: Cumulative**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:Cumulative | Cumulative | To be used where a production value represents the total to date from the beginning of the reporting context. The  length of reported time is not declared. | Changes in NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:Day | Day | A period of 24 consecutive hours beginning at midnight and constituting a calendar day. | Changes in NameAlias, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:DY | Day | DEPRECATED: Please use Code="Day" with Name="Day" instead. A period not more than 24 hours. May include total values for a closed day, or day to date (DTD) for the current day in progress. | **DEPRECATED, superseded by Code: Day**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:FiscalQuarter | Fiscal quarter | A period of 3 consecutive months in the financial year of a business, beginning with the first day of the first, fourth, seventh or tenth calendar month in the financial year. | Changes in Name, NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:FiscalQuarterToDate | Fiscal quarter to date | A current (in progress) period of less than 3 consecutive months from the start of the current fiscal quarter. | Value added. |
| partition-id:reference-data--ReportingPeriod:FiscalYear | Fiscal year | A period of 12 consecutive months in the financial year of a business. | Changes in Name, NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:FiscalYearToDate | Fiscal year to date | A current (in progress) period of less than 12 consecutive months from the start of the current fiscal year. | Value added. |
| partition-id:reference-data--ReportingPeriod:FQ | Fiscal quarter | DEPRECATED: Please use Code="FiscalQuarter" with Name="Fiscal quarter" instead. A period of 3 month increments from the designated start of the fiscal year. May include total values for a closed fiscal quarter, or fiscal quarter to date (FQTD) for the current fiscal quarter in progress. | **DEPRECATED, superseded by Code: FiscalQuarter**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:FY | Fiscal year | DEPRECATED: Please use Code="FiscalYear" with Name="Fiscal year" instead. A period not more than 12 months from the designated start of the year for financial reporting purposes. May include total values for a closed fiscal year, or fiscal year to date (FYTD) for the current fiscal year in progress. | **DEPRECATED, superseded by Code: FiscalYear**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:Hour | Hour | A period of 60 nominal minutes. | Changes in NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:HR | Hour | DEPRECATED: Please use Code="Hour" with Name="Hour" instead. A period not more than 60 minutes. May include total values for a closed hour, or hour to date (HTD) for the current hour in progress. | **DEPRECATED, superseded by Code: Hour**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:MO | Month | DEPRECATED: Please use Code="Month" with Name="Month" instead. A full, or partial calendar month aligned to the Gregorian Calendar as the internationally accepted civil calendar. May include total values for a closed month, or month to date (MTD) for the current month in progress. | **DEPRECATED, superseded by Code: Month**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:Month | Month | A full calendar month aligned to the calendar in use. | Changes in NameAlias, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:MonthToDate | Month to date | A current (in progress) period of calendar days less than the full number of days in the current month. | Value added. |
| partition-id:reference-data--ReportingPeriod:QT | Quarter | DEPRECATED: Please use Code="Quarter" with Name="Quarter" instead. A full, or partial period of 3 month increments from the start of the (Gregorian) calendar year. May include total values for a closed quarter, or quarter to date (QTD) for the current quarter in progress. | **DEPRECATED, superseded by Code: Quarter**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:Quarter | Quarter | A period of 3 consecutive months from the start of the first, fourth, seventh or tenth month of the calendar year. | Changes in NameAlias, Description, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:QuarterToDate | Quarter to date | A current (in progress) period of less than 3 full months in the current quarter of the calendar year. | Value added. |
| partition-id:reference-data--ReportingPeriod:Week | Week | A period of 7 consecutive days. Commonly starts on Monday. | Changes in NameAlias, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:WK | Week | DEPRECATED: Please use Code="Week" with Name="Week" instead. A period not more than 7 days. May include total values for a closed week, or week to date (WTD) for the current week in progress. | **DEPRECATED, superseded by Code: Week**<br>Value added. |
| partition-id:reference-data--ReportingPeriod:Year | Year | A period of 12 months from the start of the  calendar year. | Changes in NameAlias, Description, AttributionPublication, AttributionAuthority |
| partition-id:reference-data--ReportingPeriod:YearToDate | Year to date | A current (in progress) period of less than 12 months from the  start of the current calendar year. | Value added. |
| partition-id:reference-data--ReportingPeriod:YR | Year | DEPRECATED: Please use Code="Year" with Name="Year" instead. A period not more than 12 months from the start of the (Gregorian) calendar year. May include total values for a closed year, or year to date (YTD) for the current year in progress. | **DEPRECATED, superseded by Code: Year**<br>Value added. |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Reporting_Period_Type)
* &rarr; [Manifest record ReportingPeriod.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/ReportingPeriod.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)