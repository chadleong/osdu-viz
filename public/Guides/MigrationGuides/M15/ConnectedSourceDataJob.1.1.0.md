<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceDataJob:1.2.0`

`ConnectedSourceDataJob:1.2.0` offers one new properties in the data block, e.g., `data.OnIngestionSchemaAuthority`. 
This property allows control over the schema authority for the schema `kind`, which is constructed for the created 
records in the target data partition. For OSDU standard well-known schemas the value is likely osdu as in
**_osdu_**:wks:master-data--ConnectedSourceDataJob:1.2.0, however, depending on the deployment pattern or usage of
non-wks schemas, this may differ from environment to environment.

It is recommended to populate the value for ConnectedSourceDataJob:1.2.0 and higher. Here all changes in summary:

| Cumulative Name                 | Value Type   | Title                                   | Description                                                                                                                                                                                                                                             | Migration/Recommendation                                                                           |
|---------------------------------|--------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| data.FailedRecords[]            | string array | Failed Record List                      | A temporary solution before these references are stored in a related, external record for scalability: The data type/schema/kind of data being retrieved form the external source. The failed records list which is retrieved from the external source. | The pattern constraint was removed. Records with these ids cannot be found in the target platform. |
| data.OnIngestionSchemaAuthority | string       | Target system schema authority          | Consumer schema authority for the incoming data will be placed in.                                                                                                                                                                                      | New property.                                                                                      |
| data.CreateTimeMax              | string       | Max Create/Update Time for Data Records | The maximum create/update time for data records (UTC).                                                                                                                                                                                                  | New property, set by the running job.                                                              |


[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
