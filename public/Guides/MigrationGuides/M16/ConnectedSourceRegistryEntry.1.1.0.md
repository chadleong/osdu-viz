<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--ConnectedSourceRegistryEntry:1.2.0`

`ConnectedSourceRegistryEntry:1.2.0` is extended to become an activity by including 
[AbstractProjectActivity:1.1.0](../../../E-R/abstract/AbstractProjectActivity.1.1.0.md). This change keeps the symmetry 
of ConnectedSourceDataJob and ConnectedSourceRegistryEntry — both become dynamically extensible with 
`data.Parameters[]`, optionally governed by an ActivityTemplate.

The usage is explained in the Worked Example for External Data Services 
[for ConnectedSourceDataJob](../../../Examples/WorkedExamples/ExternalDataServices/README.md#connectedsourcedatajob-as-activity)
and [for ConnectedSourceRegistryEntry](../../../Examples/WorkedExamples/ExternalDataServices/README.md#connectedsourcedatajob-as-activity).

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
