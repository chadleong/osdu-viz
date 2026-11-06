<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.1.0`

Version 1.1.0 introduces a temporary storage for FailedRecords. No migration rewuired.

| Cumulative Name                        | Value Type        | Description                                                                                                                                         | Migration Instructions            |
|----------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| data.FailedRecords[]                   | string            |A temporary solution before these references are stored in a related, external record for scalability: The data type/schema/kind of data being retrieved form the external source. The returned value should validate against the corresponding registered schema in the OSDU schema service.| New optional list of record ids.  |


[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
