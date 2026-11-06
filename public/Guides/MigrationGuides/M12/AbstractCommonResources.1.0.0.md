[[_TOC_]]

# Technical Assurance, Revised

In M10 milestone adds a new property `TechnicalAssuranceID` was added to
[`osdu:wks:AbstractCommonResources:1.0.0`](../../../E-R/abstract/AbstractCommonResources.1.0.0.md). This impacts
theoretically all records with kinds `osdu:wks:*:*.*.*`, which include `AbstractCommonResources`. Originally, the
migration instructions were given in [here](../M10/AbstractCommonResources.1.0.0.md).

The property `TechnicalAssuranceID` is deprecated from M12 on. Instead, the technical assurance classification is done in different granularity for different group-types:

# Migration to `osdu:wks:AbstractCommonResources:1.0.0`

## `master-data`

For master-data it is assumed that the data are generally accepted for usage and classified
via `data.TechnicalAssuranceTypeID` (almost as before, but with a changed name from
previously `data.TechnicalAssuranceID`)

To preserve the technical assurance declarations prior to M12, move the 

<details>

<summary markdown="span">Deprecated <code>TechnicalAssurancesID</code></summary>

```json
{
  "data": {
    "TechnicalAssuranceID": "namespace:reference-data--TechnicalAssuranceType:Trusted:"
  }
}
```

</details>

to the new `data.TechnicalAssuranceTypeID`:

<details>

<summary markdown="span"><code>Well</code> with migrated TechnicalAssuranceTypeID</summary>

<OsduImportJSON>[Complete, auto-generated record](../../../Examples/master-data/Well.1.1.0.json#only.data.TechnicalAssuranceTypeID)</OsduImportJSON>

```json
{
  "data": {
    "TechnicalAssuranceTypeID": "namespace:reference-data--TechnicalAssuranceType:Certified:"
  }
}
```
</details>


## `work-product-component`

Records of group-type work-product-component include the 
[AbstractWPCGroupType](../../../E-R/abstract/AbstractWPCGroupType.1.0.0.md) fragment, which has been extended, see
[AbstractTechnicalAssurance](../../../E-R/abstract/AbstractTechnicalAssurance.1.0.0.md).

The migration instructions are presented in [AbstractWPCGroupType:1.0.0](AbstractWPCGroupType.1.0.0.md) page.


---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
