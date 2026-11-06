<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SchemaUpgradeSpecification:1.0.0`

Content changes (schema unchanged) [osdu:wks:reference-data--SchemaUpgradeSpecification:1.0.0](../../../E-R/reference-data/SchemaUpgradeSpecification.1.0.0.md) are listed below.

The removed schema upgrade resources for the group-type migrated types were incorrectly referring to a 1.0.0 version of
the new group-type schemas. After the initial migration definitions the new target versions were change to 2.0.0 but
the already created resources were still referring to the previous version number. This caused integrity errors for the
generated reference data.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--Sample:2.1.0 | osdu:wks:master-data--Sample:2.1.0 | Schema upgrade instructions for Storage records from kind osdu:wks:master-data--Sample:2.0.0 to osdu:wks:master-data--Sample:2.1.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularAssembly:1.0.0 | ~~osdu:wks:master-data--TubularAssembly:1.0.0~~ | ~~Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularAssembly:1.3.0 to osdu:wks:master-data--TubularAssembly:1.0.0~~ | **_Removed_** |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularAssembly:2.0.0 | osdu:wks:master-data--TubularAssembly:2.0.0 | Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularAssembly:1.3.0 to osdu:wks:master-data--TubularAssembly:2.0.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularAssembly:2.1.0 | osdu:wks:master-data--TubularAssembly:2.1.0 | Schema upgrade instructions for Storage records from kind osdu:wks:master-data--TubularAssembly:2.0.0 to osdu:wks:master-data--TubularAssembly:2.1.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularComponent:1.0.0 | ~~osdu:wks:master-data--TubularComponent:1.0.0~~ | ~~Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularComponent:1.3.0 to osdu:wks:master-data--TubularComponent:1.0.0~~ | **_Removed_** |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularComponent:2.0.0 | osdu:wks:master-data--TubularComponent:2.0.0 | Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularComponent:1.3.0 to osdu:wks:master-data--TubularComponent:2.0.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularComponent:2.1.0 | osdu:wks:master-data--TubularComponent:2.1.0 | Schema upgrade instructions for Storage records from kind osdu:wks:master-data--TubularComponent:2.0.0 to osdu:wks:master-data--TubularComponent:2.1.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularExternalComponent:1.0.0 | ~~osdu:wks:master-data--TubularExternalComponent:1.0.0~~ | ~~Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularExternalComponent:1.1.0 to osdu:wks:master-data--TubularExternalComponent:1.0.0~~ | **_Removed_** |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularExternalComponent:2.0.0 | osdu:wks:master-data--TubularExternalComponent:2.0.0 | Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularExternalComponent:1.1.0 to osdu:wks:master-data--TubularExternalComponent:2.0.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularUmbilical:1.0.0 | ~~osdu:wks:master-data--TubularUmbilical:1.0.0~~ | ~~Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularUmbilical:1.2.0 to osdu:wks:master-data--TubularUmbilical:1.0.0~~ | **_Removed_** |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--TubularUmbilical:2.0.0 | osdu:wks:master-data--TubularUmbilical:2.0.0 | Schema upgrade instructions for Storage records from kind osdu:wks:work-product-component--TubularUmbilical:1.2.0 to osdu:wks:master-data--TubularUmbilical:2.0.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:master-data--Wellbore:1.5.1 | osdu:wks:master-data--Wellbore:1.5.1 | Schema upgrade instructions for Storage records from kind osdu:wks:master-data--Wellbore:1.5.0 to osdu:wks:master-data--Wellbore:1.5.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--ColumnBasedTableType:1.1.0 | osdu:wks:reference-data--ColumnBasedTableType:1.1.0 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--ColumnBasedTableType:1.0.0 to osdu:wks:reference-data--ColumnBasedTableType:1.1.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--DataQualityRuleSet:1.0.1 | osdu:wks:reference-data--DataQualityRuleSet:1.0.1 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--DataQualityRuleSet:1.0.0 to osdu:wks:reference-data--DataQualityRuleSet:1.0.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--MudTracerType:1.0.1 | osdu:wks:reference-data--MudTracerType:1.0.1 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--MudTracerType:1.0.0 to osdu:wks:reference-data--MudTracerType:1.0.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--PermeabilityMeasurementType:1.0.1 | osdu:wks:reference-data--PermeabilityMeasurementType:1.0.1 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--PermeabilityMeasurementType:1.0.0 to osdu:wks:reference-data--PermeabilityMeasurementType:1.0.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--PorosityMeasurementType:1.0.1 | osdu:wks:reference-data--PorosityMeasurementType:1.0.1 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--PorosityMeasurementType:1.0.0 to osdu:wks:reference-data--PorosityMeasurementType:1.0.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--ProspectType:1.1.0 | osdu:wks:reference-data--ProspectType:1.1.0 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--ProspectType:1.0.0 to osdu:wks:reference-data--ProspectType:1.1.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--SampleOrientationType:1.0.1 | osdu:wks:reference-data--SampleOrientationType:1.0.1 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--SampleOrientationType:1.0.0 to osdu:wks:reference-data--SampleOrientationType:1.0.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:reference-data--VelocityType:1.0.1 | osdu:wks:reference-data--VelocityType:1.0.1 | Schema upgrade instructions for Storage records from kind osdu:wks:reference-data--VelocityType:1.0.0 to osdu:wks:reference-data--VelocityType:1.0.1 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:work-product-component--WellFluidsReport:1.0.0 | ~~osdu:wks:work-product-component--WellFluidsReport:1.0.0~~ | ~~Schema upgrade instructions for Storage records from kind osdu:wks:master-data--FluidsReport:1.2.0 to osdu:wks:work-product-component--WellFluidsReport:1.0.0~~ | **_Removed_** |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:work-product-component--WellFluidsReport:2.0.0 | osdu:wks:work-product-component--WellFluidsReport:2.0.0 | Schema upgrade instructions for Storage records from kind osdu:wks:master-data--FluidsReport:1.2.0 to osdu:wks:work-product-component--WellFluidsReport:2.0.0 | Value added. |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:work-product-component--WellOperationsReport:1.0.0 | ~~osdu:wks:work-product-component--WellOperationsReport:1.0.0~~ | ~~Schema upgrade instructions for Storage records from kind osdu:wks:master-data--OperationsReport:1.4.0 to osdu:wks:work-product-component--WellOperationsReport:1.0.0~~ | **_Removed_** |
| partition-id:reference-data--SchemaUpgradeSpecification:osdu:wks:work-product-component--WellOperationsReport:2.0.0 | osdu:wks:work-product-component--WellOperationsReport:2.0.0 | Schema upgrade instructions for Storage records from kind osdu:wks:master-data--OperationsReport:1.4.0 to osdu:wks:work-product-component--WellOperationsReport:2.0.0 | Value added. |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook SchemaUpgradeSpecification.1.0.0.xlsx](../../../ReferenceValues/Authoring/SchemaUpgradeSpecification.1.xlsx)
* &rarr; [Manifest record SchemaUpgradeSpecification.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/LOCAL/SchemaUpgradeSpecification.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)