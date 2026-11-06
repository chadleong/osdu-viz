<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceRegistryEntry:1.5.0`

Changes between [osdu:wks:master-data--ConnectedSourceRegistryEntry:1.4.0](../../../E-R/master-data/ConnectedSourceRegistryEntry.1.4.0.md) and [osdu:wks:master-data--ConnectedSourceRegistryEntry:1.5.0](../../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.SmtpSchemes[].Name|string|SMTP Server Scheme Name|Unique name given to a SMTP scheme.|Changes in: Title, Example|
|data.SmtpSchemes[].SmtpUserKeyName|string|SMTP User|Secret key for the SMTP user.|Changes in: Description, Example|
|data.SmtpSchemes[].SmtpPasswordKeyName|string|SMTP Password|Secret key for the SMTP password.|Changes in: Description, Example|
|data.SmtpSchemes[].SmtpSenderMail|string|SMTP Sender Mail|Sender's email address.|Changes in: Description|
|data.SmtpSchemes[].SmtpTimeOut|integer|SMTP Timeout|The timeout logic is not being used in EDS code.|Changes in: Description|
|data.SmtpSchemes[].SmtpRetryLimit|integer|SMTP Timeout|The retry logic is not being used in EDS code.|Changes in: Description|
|data.SmtpSchemes[].SmtpHostKeyName|string|SMTP Host|Secret key for the SMTP host.|Changes in: Description, Example|
|data.SmtpSchemes[].SmtpStartTLS|boolean|SMTP StartTLS|Type of protocol connection (Explicit TLS).|Changes in: Description|
|data.SmtpSchemes[].SmtpSSL|boolean|SMTP SSL|Type of protocol for connection (Implicit SSL/TLS).|Changes in: Description|
|data.SmtpSchemes[].SmtpPort|integer|SMTP Port|SMTP port number for the connection. It differs for SSL and StartTLS.|Changes in: Description|
|data.SmtpSchemes[].SmtpReceiverMail[]|string|SMTP Receiver Mail|List of receivers' email addresses.|Changes in: Description|
|data.SmtpSchemes[].EmailTriggerFrequency|string|Email Trigger Frequency|Email trigger frequency for the EDS report, in a cron syntax expression.|Changes in: Description, Example|
|data.SmtpSchemes[].ReportEndDate|string|SMTP End Date|This property is not being used in EDS code.|Changes in: Description|
|data.SmtpSchemes[].ReportStartDate|string|SMTP Start Date|Start date from which the report is required.|Changes in: Description|
|data.SmtpSchemes[].ReportPeriod|integer|SMTP Report Period|Number of days after the report start date that defines the reporting period.|Added property|
|_data.EmailApiSchemes[]_|_object_|_Email Api Schemes_|_List of Email API schemes available for use in mailing the detailed EDS's report._|Added property|
|data.EmailApiSchemes[].Name|string|Email API Scheme Name|Unique name given to an Email API scheme.|Added property|
|data.EmailApiSchemes[].Url|string|Endpoint URL|Email API endpoint to send the POST request to.|Added property|
|data.EmailApiSchemes[].SecuritySchemeName|string|Security Scheme Name|Reference name for the security scheme in the ConnectedSourceRegistryEntry document this Email API belongs to.|Added property|
|data.EmailApiSchemes[].SenderEmail|string|Sender Email|Sender's email address.|Added property|
|data.EmailApiSchemes[].RecipientEmails[]|string|Recipient Emails|List of recipients' email addresses.|Added property|
|data.EmailApiSchemes[].PayloadTemplateID<br> &rarr; [PayloadTemplate](../../../E-R/reference-data/PayloadTemplate.1.0.0.md)|string|Payload Template Identifier|ID reference of the Payload Template to be used for the Email API's request body.|Added property|
|data.EmailApiSchemes[].EmailTriggerFrequency|string|Email Trigger Frequency|Email trigger frequency for the EDS report, in a cron syntax expression.|Added property|
|data.EmailApiSchemes[].ReportStartDate|string|Report Start Date|Start date from which the report is required, in the format of YYYY-MM-DD.|Added property|
|data.EmailApiSchemes[].ReportPeriod|integer|Report Period|Number of days after the report start date that defines the reporting period.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)