<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--ResourceSecurityClassification:1.0.0`

Changes between [osdu:wks:reference-data--ResourceSecurityClassification:1.0.0](../../../E-R/reference-data/ResourceSecurityClassification.1.0.0.md) and [osdu:wks:reference-data--ResourceSecurityClassification:1.0.0](../../../E-R/reference-data/ResourceSecurityClassification.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _Used to describe the resource security classifications._
  * New Description: **_DEPRECATED: This security classification is merely decorative; the security classification associated to the legal.legaltags[] is evaluated by platform services instead. Please refer to the platform Security and Compliance Legal service which maintains the securityClassification property on legal tags. Previously:  Used to describe the resource security classifications._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--ResourceSecurityClassification:CLASSIFIED | CLASSIFIED | DEPRECATED: Original SDU classification label 'classified'. | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:Confidential | Confidential | DEPRECATED: The value is not recognized by platform services. Please refer to the platform Security and Compliance Legal service managing the so-called legal tags, which contain a securityClassification property. Applies to information which, if disclosed, would be prejudicial to the interests of the company or would cause serious damage to the interest of the company or its employees. A security incident involving unauthorized access to Confidential information will have a severity level of Major or Catastrophic, depending on the financial or time-to-recover impact, but never less than Major. | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:CONFIDENTIAL | CONFIDENTIAL | DEPRECATED: Please use Code="Confidential" with Name="Confidential" instead. Original SDU classification label 'confidential'. | **DEPRECATED, superseded by Code: Confidential**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:MOST-CONFIDENTIAL | MOST-CONFIDENTIAL | DEPRECATED: Please use Code="Secret" with Name="Secret" instead. Original SDU classification label 'most-confidential'. | **DEPRECATED, superseded by Code: Secret**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:Private | Private | DEPRECATED: The value is not recognized by platform services. Please refer to the platform Security and Compliance Legal service managing the so-called legal tags, which contain a securityClassification property. Applies to information available to employees and authorized third parties (e.g. contractors, interns) as part of routine business. A security incident involving unauthorized access to private information will have a severity level of Serious or Major, depending on the financial or time-to-recover impact, but never less than Serious. Unlabeled Information Assets are considered private by default. | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:Public | Public | DEPRECATED: The value is not recognized by platform services. Please refer to the platform Security and Compliance Legal service managing the so-called legal tags, which contain a securityClassification property. Applies to information which the company or individual routinely makes available to customers and third parties.  | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:RESTRICTED | RESTRICTED | DEPRECATED: Original SDU classification label 'restricted'. | **DEPRECATED**<br>Changes in InactiveIndicator, Description |
| partition-id:reference-data--ResourceSecurityClassification:Secret | Secret | DEPRECATED: The value is not recognized by platform services. Please refer to the platform Security and Compliance Legal service managing the so-called legal tags, which contain a securityClassification property. Information is classified as Secret when it provides the company with a significant competitive edge, or shows specific business strategies and organizational directions, or is essential to the technical or financial success of a specific product or service. Unauthorized disclosure would cause serious damage to the interests of the company. The severity of an information security incident involving unauthorized access to Secret information will be reported as Catastrophic or Multi-Catastrophic, depending on the financial or time-to-recover impact, but never less than Catastrophic.  | **DEPRECATED**<br>Changes in InactiveIndicator, Description |

# Value Spreadsheet and Manifest

* [Reference value workbook ResourceSecurityClassification.1.0.1.xlsx](../../../ReferenceValues/Published/ResourceSecurityClassification.1.xlsx)
* [Manifest record ResourceSecurityClassification.1.0.1.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/ResourceSecurityClassification.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)