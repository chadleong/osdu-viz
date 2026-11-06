<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--WellInterestType:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--WellInterestType:1.0.0](../../../E-R/reference-data/WellInterestType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--WellInterestType:Yes.FinancialNonOperated | Financial - Non-Operated | The Financial - Non-operated qualifier indicates that the well entity affects the business's income statement through revenue and/or expenses in a scenario where the business does not have the primary accountability for all activities performed on the well entity. Financial - Non-operated well entities necessarily have Obligatory and Technical Interest. | Changes in Name |
| partition-id:reference-data--WellInterestType:Yes.FinancialOperated | Financial - Operated | The Financial - Operated qualifier indicates that the business has primary accountability for all activities performed on the well entity. Financial - Operated well entities necessarily have Obligatory and Technical Interest. | Changes in Name |
| partition-id:reference-data--WellInterestType:Yes.Obligatory | Obligatory | The Obligatory qualifier indicates that the business has reason to monitor a well entity in order to ensure that the business fulfills any obligations. Obligatory Interest well entities necessarily have Technical Interest. | Changes in Name |
| partition-id:reference-data--WellInterestType:Yes.Technical | Technical | The Technical qualifier indicates that the business has an interest in monitoring a well entity and/or maintaining non-public data about a well entity. | Changes in Name |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Well_Business_Interest)
* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://ppdm.org/ppdm/PPDM/IPDS/Well_Status_Classification/PPDM/Well_Status_Classification.aspx)
* &rarr; [Manifest record WellInterestType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/WellInterestType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)