[[_TOC_]]

# Migration to `osdu:wks:master-data--OperationsReport:1.1.0`

For owners and consumers of Operations Report data, please find below the migration instructions based on changes
from [OperationsReport.1.0.0](../../../E-R/master-data/OperationsReport.1.0.0.md) 
to [OperationsReport.1.1.0](../../../E-R/master-data/OperationsReport.1.1.0.md)

Operations Report v.1.0.0 initially covered only Drilling Report.  In v.1.1.0, it is expanded to include more Operations Report details.  We will continue to do enhancements as needed.

## Deprecated Properties

| Deprecated                                                  | Superseded                                                    | Superseded Name          | Description                                                                                                                                                                                                                                                     |
|-------------------------------------------------------------|---------------------------------------------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data.CustomerId  (relationship to Organisation)             | via &rarr; data.WellActivityID set data.Customer              | Customer                 | DEPRECATED: Reference to the Organisation that represents the Customer. With 1.1.0 or higher, please obtain the Organisation's data.Name and set it as data.Customer value in the Well Activity record (via data.WellActivityID).                               |             |
| data.Customer (string)                                      | via &rarr; data.WellActivityID set data.Customer              | Customer                 | DEPRECATED: Individual, company, or corporate division that work is being executed on behalf of. With 1.1.0 or higher, please move this value to the associated Well Activity record (data.WellActivityID), i.e. data.Customer.                                 | 
| data.StewardingCompanyID (relationship to Organisation)     | via &rarr; data.WellActivityID set data.StewardingCompany     | Stewarding Company       | DEPRECATED: Reference to the Organisation that represents the StewardingCompany. With 1.1.0 or higher, please obtain the Organisation's data.Name and set it as data.StewardingCompany value in the Well Activity record.                                       |
| data.StewardingCompany (string)                             | via &rarr; data.WellActivityID set data.StewardingCompany     | Stewarding Company       | DEPRECATED: Company or corporate division that is responsible for executing the work. With 1.1.0 or higher, please move this value to the associated Well Activity record (data.WellActivityID), i.e. data.StewardingCompany.                                   | 
| data.StewardingCompanyTeamID (relationship to Organisation) | via &rarr; data.WellActivityID set data.StewardingCompanyTeam | Stewarding Company Team  | DEPRECATED: Reference to the Organisation that represents the StewardingCompanyTeam. With 1.1.0 or higher, please obtain the Organisation's data.Name and set it as data.StewardingCompanyTeam value in the Well Activity record.                               | 
| data.StewardingCompanyTeam (string)                         | via &rarr; data.WellActivityID set data.StewardingCompanyTeam | Stewarding Company Team  | DEPRECATED: Team within a company or corporate division that is responsible for executing the work. With 1.1.0 or higher, please move this value to the associated Well Activity record (data.WellActivityID), i.e. data.StewardingCompanyTeam.                                                                                                              | 
| data.DrillActivity[]                                        | data.OperationsActivity[]                                     | Operations Activity      | DEPRECATED: DrillActivity nested object array was renamed OperationsActivity in OperationsReport.1.1.0. Copy all the object properties into data.OperationsActivity[] for all array members. Special handling is required for data.DrillActivity[].Duration and | 
| data.DrillActivity[].Duration                               | data.OperationsActivity[].ActualDuration                      | Actual Duration          | DEPRECATED: Duration of type string was replaced with ActualDuration of type UOM:Time in OperationsReport.1.1.0. Migrate and use OperationsReport:1.1.0:OperationsActivity.ActualDuration for this property.                                                    | 
| data.Forecast24Hr                                           | data.StatusInfo[].Forecast24Hr                                | Forecast 24Hr            | DEPRECATED: Forecast of activities for the next 24 hrs. This is a redundant property given the data.StatusInfo[].Forecast24Hr. Consolidate in StatusInfo.                                                                                                       | 


## Application Update

Applications should migrate to Operations Report v.1.1.0 and Well Activity v.1.0.0 to take advantage of additional data being captured in the data model.  

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
