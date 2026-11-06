# Migration of `osdu:wks:AbstractWPCGroupType:1.0.0`

[`AbstractWPCGroupType:1.0.0`](../../../E-R/abstract/AbstractWPCGroupType.1.0.0.md) is extended by an array of schema
fragments containing the detailed context for technical assurance. The new property is called 
`data.TechnicalAssurances[]`.

Technical assurance was previously captures in the AbstractCommonResources `TechnicalAssuranceID` property. This moves 
from a single value to an array.

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

to the new array of `data.TechnicalAssurances[]`:

<details>

<summary markdown="span"><code>WellLog</code> with migrated TechnicalAssurances</summary>

<OsduImportJSON>[Complete, auto-generated record](../../../Examples/work-product-component/WellLog.1.2.0.json#only.data.TechnicalAssurances[0].TechnicalAssuranceTypeID)</OsduImportJSON>

```json
{
  "data": {
    "TechnicalAssurances": {
      "TechnicalAssuranceTypeID": "namespace:reference-data--TechnicalAssuranceType:Trusted:"
    }
  }
}
```
</details>

Of course, the opportunity can be used to fully populate the structure as in this auto-generated record:

<details>

<summary markdown="span"><code>WellLog</code> with TechnicalAssurances</summary>

<OsduImportJSON>[Complete, auto-generated record](../../../Examples/work-product-component/WellLog.1.2.0.json#only.data.TechnicalAssurances)</OsduImportJSON>

```json
{
  "data": {
    "TechnicalAssurances": [
      {
        "TechnicalAssuranceTypeID": "namespace:reference-data--TechnicalAssuranceType:Trusted:",
        "Reviewers": [
          {
            "RoleTypeID": "namespace:reference-data--ContactRoleType:AccountOwner:",
            "OrganisationID": "namespace:master-data--Organisation:SomeUniqueOrganisationID:",
            "Name": "Example Name"
          }
        ],
        "AcceptableUsage": [
          {
            "WorkflowUsage": "namespace:reference-data--WorkflowUsageType:SeismicProcessing:",
            "WorkflowPersona": "namespace:reference-data--WorkflowPersonaType:SeismicProcessor:"
          }
        ],
        "UnacceptableUsage": [
          {
            "WorkflowUsage": "namespace:reference-data--WorkflowUsageType:SeismicInterpretation:",
            "WorkflowPersona": "namespace:reference-data--WorkflowPersonaType:SeismicInterpreter:"
          }
        ],
        "EffectiveDate": "2020-02-13",
        "Comment": "This is free form text from reviewer, e.g. restrictions on use"
      }
    ]
  }
}
```
</details>

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
