# Migration and Adoption of `osdu:wks:AbstractMaster:1.1.0`

[`AbstractMaster:1.0.0`](../../../E-R/abstract/AbstractMaster.1.0.0.md) upgrades to
[`AbstractMaster:1.1.0`](../../../E-R/abstract/AbstractMaster.1.1.0.md)

## `VerticalUnitID`

It includes [`AbstractSpatialLocation:1.1.0`](../../../E-R/abstract/AbstractSpatialLocation.1.1.0.md) and
includes [`AbstractAnyCrsFeatureCollection:1.1.0`](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md),
which got extended by one property `VerticalUnitID`. This triggers an update chain, please see
details in [Migration Guide for `AbstractAnyCrsFeatureCollection:1.1.0`](AbstractAnyCrsFeatureCollection.1.0.0.md)

## `TechnicalAssuranceID` &rarr; `TechnicalAssuranceTypeID`

The replacement for the deprecated `TechnicalAssuranceID` for master-data group-type records
is `TechnicalAssuranceTypeID`. When migrating records from M11 (or earlier) to M12, the values should be assigned to the
new keyword `TechnicalAssuranceTypeID`. 

This should be done for all master-data group-type records to keep the records up-to-date, irrespective of whether their
schemas (=kind) include AbstractMaster:1.0.0 or AbstractMaster:1.1.0.

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

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
