<a name="TOC"></a>

[[_TOC_]]

# Value Migration to `osdu:wks:reference-data--WellInterestType:1.0.0`

The schema [`osdu:wks:reference-data--WellInterestType:1.0.0`](../../../E-R/reference-data/WellInterestType.1.0.0.md)
has not changed but all the previously existing values are now deprecated. 

## Usage

This reference type id used by

1. `Well` in all versions
    1. [`osdu:wks:master-data--Well:1.0.0`](../../../E-R/master-data/Well.1.0.0.md)
    2. [`osdu:wks:master-data--Well:1.1.0`](../../../E-R/master-data/Well.1.1.0.md)
2. `Wellbore`
    1. [`osdu:wks:master-data--Wellbore:1.0.0`](../../../E-R/master-data/Wellbore.1.0.0.md)
    1. [`osdu:wks:master-data--Wellbore:1.1.0`](../../../E-R/master-data/Wellbore.1.1.0.md)

[Back to TOC](#TOC)

## Previous OSDU Value with Migration Instructions

The following values have been deprecated since they do not conform to the new PPDM Well Status and Classification
Standard V3. The migration is not trivial. Each of the deprecated values contains the migration recommendations in the
description, here presented in the column **Migration Description**.

|`id` with prefix `namespace:reference-data--WellInterestType:`|Name| Migration Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |InactiveIndicator|
|-----|----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
|Competitor|Competitor| Competitor - no longer supported. <br>Use either Yes.Obligatory (1) or Yes.Technical (2) or No (3).<br><br>(1) The Obligatory qualifier indicates that the business has reason to monitor a well entity in order to ensure that the business fulfills any obligations. Obligatory Interest well entities necessarily have Technical Interest.<br>(2) The Technical qualifier indicates that the business has an interest in monitoring a well entity and/or maintaining non-public data about a well entity.   <br>(3) A No Business Interest means that the company does not currently consider a well entity or its data to be a real or planned asset in which the company is interested.  Given that &quot;Non Operated Joint Venture&quot; was an option, &quot;Competitor&quot; may be inferred to indicate any lesser level of interest than &quot;Non Operated Joint Venture&quot;. However, since there are several potential levels of &quot;lesser interest&quot;, some extra analysis will be necessary to map Competitor to the appropriate new category. |True|
|Non%20Operated%20Joint%20Venture|Non Operated Joint Venture| Non Operated Joint Venture - no longer supported.<br><br> Use Yes.FinancialNonOperated instead. <br> The Financial - Non-operated qualifier indicates that the well entity affects the business&#x27;s income statement through revenue and/or expenses in a scenario where the business does not have the primary accountability for all activities performed on the well entity. Financial - Non-operated well entities necessarily have Obligatory and Technical Interest. <br><br>Precluding rare circumstances, &quot;Joint Venture&quot; implies financial interest. But if you are aware of rare circumstances, consider whether Yes.Obligatory or Yes.Technical are more apt.                                                                                                                                                                                                                                                                                                                                                                                  |True|
|Operated|Operated| Operated - no longer supported.<br><br> Use Yes.FinancialOperated instead. <br>The Financial - Operated qualifier indicates that the business has primary accountability for all activities performed on the well entity. Financial - Operated well entities necessarily have Obligatory and Technical Interest.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |True|

[Back to TOC](#TOC)

## New PPDM Standard Values

The new values are expected to be used after the migration to the PPDM Well Status and Classification V3 standard.

| `id` with prefix `namespace:reference-data--WellInterestType:` | Name                         | Description                                                                                                                                                                                                                                                                                                                                                              |
|----------------------------------------------------------------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| No                                                             | No                           | A No Business Interest means that the company does not currently consider a well entity or its data to be a real or planned asset in which the company is interested.                                                                                                                                                                                                    |
| Yes.FinancialNonOperated                                       | Yes.Financial - Non-Operated | The Financial - Non-operated qualifier indicates that the well entity affects the business&#x27;s income statement through revenue and/or expenses in a scenario where the business does not have the primary accountability for all activities performed on the well entity. Financial - Non-operated well entities necessarily have Obligatory and Technical Interest. |
| Yes.FinancialOperated                                          | Yes.Financial - Operated     | The Financial - Operated qualifier indicates that the business has primary accountability for all activities performed on the well entity. Financial - Operated well entities necessarily have Obligatory and Technical Interest.                                                                                                                                        |
| Yes.Obligatory                                                 | Yes.Obligatory               | The Obligatory qualifier indicates that the business has reason to monitor a well entity in order to ensure that the business fulfills any obligations. Obligatory Interest well entities necessarily have Technical Interest.                                                                                                                                           |
| Yes.Technical                                                  | Yes.Technical                | The Technical qualifier indicates that the business has an interest in monitoring a well entity and/or maintaining non-public data about a well entity.                                                                                                                                                                                                                  |
| Yes                                                            | Yes                          | A Yes Business Interest means that the company currently considers a well entity or its data to be a real or planned asset in which the company is interested.                                                                                                                                                                                                           |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)