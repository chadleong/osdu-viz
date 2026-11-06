[[_TOC_]]

# Migration to [`osdu:wks:work-product-component--PersistedCollection:1.0.0`](../../../E-R/work-product-component/PersistedCollection.1.0.0.md)

Collection was introduced in milestone 7 as master-data group-type. This was a mistake, which has been corrected in
milestone 9.

The schema body is identical between the types `osdu:wks:master-data--Collection:1.0.0` (M7)
and [`osdu:wks:work-product-component--PersistedCollection:1.0.0`](../../../E-R/work-product-component/PersistedCollection.1.0.0.md) (
M9)

## Migration steps:

1. Search for all records referring to kind `osdu:wks:master-data--Collection:1.0.0` .
2. For each record found:
    1. read the record using Storage service's GET `/records/{id}`;
    2. change the kind to `osdu:wks:work-product-component--PersistedCollection:1.0.0`;
    3. change the id by replacing the string fragment `master-data--Collection`
       to `work-product-component--PersistedCollection`;
    4. create a new record using Storage service's PUT `/records`;
3. The current OSDU data model does not make explicit references to PersistedCollection. It is a challenge to find
   references to the deprecated type in order to perform a clean-up. If it is guaranteed that there are no references
   to `osdu:wks:master-data--Collection:1.0.0`, then these instances can be deleted using Storage service's
   POST `/records/{id}:delete` or POST `/record/delete`.

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)