[[_TOC_]]

# Migration to `osdu:wks:master-data--Organisation:1.1.0`

Previously it was impossible to express multi-level hierarchical organisations. This is now possible in Organisation:
1.1.0 by populating the `data.ParentOrganisationID` relationship to the next higher level Organisation.

## New Property

| Property                                                                                        |Value Type|Description|Migration Instructions|
|-------------------------------------------------------------------------------------------------|----------|-----------|----------------------|
| data.ParentOrganisationID &rarr; [Organisation](../../../E-R/master-data/Organisation.1.1.0.md) | string|If populated, the current Organisation is a sub-organisation or a department in an organisation.|No migration required unless the hierarchy was handled via `ExtensionProperties`.|



# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)