<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--CementJob:1.2.0`

Changes between [osdu:wks:work-product-component--CementJob:1.1.0](../../../E-R/work-product-component/CementJob.1.1.0.md) and [osdu:wks:work-product-component--CementJob:1.2.0](../../../E-R/work-product-component/CementJob.1.2.0.md) are listed below.

CementJob:1.0.0 contained two properties, which were incorrectly defined as constants. In JSON schemas this is expressed
as `const` with a constant value. The mistake was attempted to be corrected with CementJob:1.1.0 by deprecation.
However, the indexer service is not designed to handle `const` properties without an explicit `type` declaration. From
M23 on, new schemas with `const` properties are automatically augmented with a type.

Since this is an additional element in the schema, a new minor schema version increment was necessary. No other changes
were done, which are in line with the statement below: **_No Schema Changes_**. Record upgrades can be performed
via [Storage patch](https://community.opengroup.org/osdu/platform/system/storage/-/blob/master/docs/docs/api.md#metadata-update-api).

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)