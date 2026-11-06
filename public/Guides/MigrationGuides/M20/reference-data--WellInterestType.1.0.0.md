<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellInterestType:1.0.0`

Changes between [osdu:wks:reference-data--WellInterestType:1.0.0](../../../E-R/reference-data/WellInterestType.1.0.0.md) and [osdu:wks:reference-data--WellInterestType:1.0.0](../../../E-R/reference-data/WellInterestType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellInterestType:Competitor | Competitor | Competitor - no longer supported. Use either Yes.Obligatory (1) or Yes.Technical (2) or No (3).  (1) The Obligatory qualifier indicates that the business has reason to monitor a well entity in order to ensure that the business fulfills any obligations. Obligatory Interest well entities necessarily have Technical Interest.  (2) The Technical qualifier indicates that the business has an interest in monitoring a well entity and/or maintaining non-public data about a well entity.  (3) A No Business Interest means that the company does not currently consider a well entity or its data to be a real or planned asset in which the company is interested.  Given that "Non Operated Joint Venture" was an option, "Competitor" may be inferred to indicate any lesser level of interest than "Non Operated Joint Venture". However, since there are several potential levels of "lesser interest", some extra analysis will be necessary to map Competitor to the appropriate new category. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:No | No | A No Business Interest means that the company does not currently consider a well entity or its data to be a real or planned asset in which the company is interested. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Non%20Operated%20Joint%20Venture | Non Operated Joint Venture | Non Operated Joint Venture - no longer supported. Use Yes.FinancialNonOperated instead.  The Financial - Non-operated qualifier indicates that the well entity affects the business's income statement through revenue and/or expenses in a scenario where the business does not have the primary accountability for all activities performed on the well entity. Financial - Non-operated well entities necessarily have Obligatory and Technical Interest. Precluding rare circumstances, "Joint Venture" implies financial interest. But if you are aware of rare circumstances, consider whether Yes.Obligatory or Yes.Technical are more apt. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Operated | Operated | Operated - no longer supported. Use Yes.FinancialOperated instead. The Financial - Operated qualifier indicates that the business has primary accountability for all activities performed on the well entity. Financial - Operated well entities necessarily have Obligatory and Technical Interest. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Yes | Yes | A Yes Business Interest means that the company currently considers a well entity or its data to be a real or planned asset in which the company is interested. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Yes.FinancialNonOperated | Yes.Financial - Non-Operated | The Financial - Non-operated qualifier indicates that the well entity affects the business's income statement through revenue and/or expenses in a scenario where the business does not have the primary accountability for all activities performed on the well entity. Financial - Non-operated well entities necessarily have Obligatory and Technical Interest. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Yes.FinancialOperated | Yes.Financial - Operated | The Financial - Operated qualifier indicates that the business has primary accountability for all activities performed on the well entity. Financial - Operated well entities necessarily have Obligatory and Technical Interest. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Yes.Obligatory | Yes.Obligatory | The Obligatory qualifier indicates that the business has reason to monitor a well entity in order to ensure that the business fulfills any obligations. Obligatory Interest well entities necessarily have Technical Interest. | Changes in AttributionAuthority |
| partition-id:reference-data--WellInterestType:Yes.Technical | Yes.Technical | The Technical qualifier indicates that the business has an interest in monitoring a well entity and/or maintaining non-public data about a well entity. | Changes in AttributionAuthority |

# Value Spreadsheet and Manifest

* [Manifest record WellInterestType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellInterestType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)