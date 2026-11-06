<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--TubularComponent:1.1.0`

Migrating  [`osdu:wks:work-product-component--TubularComponent:1.0.0`](../../../E-R/work-product-component/TubularComponent.1.0.0.md)
to [`osdu:wks:work-product-component--TubularComponent:1.1.0`](../../../E-R/work-product-component/TubularComponent.1.1.0.md)
requires changing the relationship `data.TubularComponentMaterialTypeID` from `MaterialType` to `TubularMaterialType`.

## Prerequisite

The `MaterialType` reference values were under OPEN governance, which means that additional reference values could have
been added. If the following conditions are present, extra work is required:

1. If `MaterialType` values have been added, and
2. the additional values fall into the tubular material category, then:

* For each `MaterialType` record meeting the requirements 1. and 2. above, read the `MaterialType` record and create the
  record by updating
    * `kind` to `osdu:wks:reference-data--TubularMaterialType:1.0.0`,
    * `id` to `<partition-id>:reference-data--TubularMaterialType:Value` where Value is the previous unique record
      identifier, typically `data.Code`.

## TubularComponent update

### Extract from kind TubularComponent:1.0.0 record

| Property                                                                                                     | Value Type | Description                                             | Migration Instructions                                                                                                              |
|--------------------------------------------------------------------------------------------------------------|------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| data.TubularComponentMaterialTypeID &rarr; [MaterialType](../../../E-R/reference-data/MaterialType.1.0.0.md) | string     | Specifies the material type constituting the component. | Extract the value referring to `MaterialType`, which is a value like `"partition-id:reference-data--MaterialType:Super13Cr5Ni1Mo:"` |

### Process

Change the type in the relationship `partition-id:reference-data--<type>:unique-reference-value-identifier` as in
this example:

> _from_ <br>
> "partition-id:reference-data--**MaterialType**:Super13Cr5Ni1Mo:" <br>
> _to_ <br> 
> "partition-id:reference-data--**TubularMaterialType**:Super13Cr5Ni1Mo:"

### New TubularComponent:1.1.0

| Property                                                                                                                   | Value Type | Description                                               | Migration Instructions                                                |
|----------------------------------------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------|-----------------------------------------------------------------------|
| kind                                                                                                                       | string     | The schema identification for the OSDU resource object... | Update to `osdu:wks:work-product-component--TubularComponent:1.1.0`   |
| data.TubularComponentMaterialTypeID &rarr; [TubularMaterialType](../../../E-R/reference-data/TubularMaterialType.1.0.0.md) | string     | Specifies the material type constituting the component.   | Assign the processed string to `data.TubularComponentMaterialTypeID`. |

Send the record to the Storage service with `PUT /records`.

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)