<a name="TOC">Table of Contents</a>

[[_TOC_]]

# Reference Value Mappings (Ingestion)

Data loaders commonly face the challenge of mapping incoming data to OSDU platform reference values. OSDU schemas
require them to be expressed as relationships to reference-data records. Incoming values rarely match exactly reference
value codes.

The [`ExternalReferenceValueMapping`](../../../E-R/reference-data/ExternalReferenceValueMapping.1.0.0.md)
is intended to capture the mappings and offer them to intelligent ingestions or data synchronisations
(connected data sources, see
[`ConnectedSourceRegistryEntry`](../../../E-R/master-data/ConnectedSourceRegistryEntry.1.5.0.md)).

The complexity of the problem is varying. It can reach from a global 1:1 mapping to complex mappings potentially
affecting a number of properties in the target object to be created/modified. An automated mapping usage will aim at
exact matches without ambiguities.

[Back to TOC](#TOC)

## Simple Mapping

### Simplest Mapping

The simplest query and matching is achieved by registering each external code as an individual mapping. For the external
codes `"OFFSHORE"` and `"OFF"` in the same namespace, two ExternalReferenceValueMapping records need to be created, one
for each external code.

<details>

<summary markdown="span">Example OpsEnvironment <code>"OFFSHORE"</code> mapping.</summary>

<OsduImportJSON>[OpsEnvironment Offshore Mapping, full records](./records/MappingSimplestOFFSHORE.json#only.data.Code|NamespaceID|HasGlobalScope|Scope|SimpleMap)</OsduImportJSON>

```json
{
  "data": {
    "Code": "EDS.Global.OFFSHORE",
    "NamespaceID": "partition-id:reference-data--ExternalCatalogNamespace:EDS:",
    "HasGlobalScope": true,
    "Scope": "Global",
    "SimpleMap": {
      "ReferenceValueID": "partition-id:reference-data--OperatingEnvironment:Offshore:"
    }
  }
}
```

</details>

<details>

<summary markdown="span">Example OpsEnvironment <code>"OFF"</code> mapping.</summary>

<OsduImportJSON>[OpsEnvironment Offshore Mapping, full records](./records/MappingSimplestOFF.json#only.data.Code|NamespaceID|HasGlobalScope|Scope|SimpleMap)</OsduImportJSON>

```json
{
  "data": {
    "Code": "EDS.Global.OFF",
    "NamespaceID": "partition-id:reference-data--ExternalCatalogNamespace:EDS:",
    "HasGlobalScope": true,
    "Scope": "Global",
    "SimpleMap": {
      "ReferenceValueID": "partition-id:reference-data--OperatingEnvironment:Offshore:"
    }
  }
}
```

</details>

Both records result in a unique records given the following query - by constructing the `Code` by convention:

> `{ExternalCatalogNamespace}.{Scope}.EXTERNAL_CODE` &rarr; `EDS.Global.OFF`

```json
{
  "kind": "osdu:wks:reference-data--ExternalReferenceValueMapping:1.*.*",
  "query": "data.Code:\"EDS.Global.OFF\""
}
```
Two queries for `EDS.Global.OFF` and `EDS.Global.OFFSHORE` result in the same `data.SimpleMap.ReferenceValueID`:
`"partition-id:reference-data--OperatingEnvironment:Offshore:"`

[Back to TOC](#TOC)

---

### Mappings with `NameAlias`

A more compact mapping definition can be achieved by using the built-in `data.AliasName[]` standard aliasing. It
requires, however, that the Scope is defines accordingly to avoid ambiguities. In the example the Global scope is
narrowed to Global.OpsEnvironment - the choice is local to the namespace and should reflect the naming of the external
source. Let us assume, the name to refer to the operational environment is called `OpsEnvironment`.

<details>

<summary markdown="span">Example OpsEnvironment mapping for a number of aliased external codes.</summary>

<OsduImportJSON>[OpsEnvironment Offshore Mapping, full record](./records/MappingWithAlias.json#only.data.Code|NamespaceID|HasGlobalScope|Scope|SimpleMap|NameAlias)</OsduImportJSON>

```json
{
  "data": {
    "Code": "EDS.Global.OpsEnvironment.Offshore",
    "NamespaceID": "partition-id:reference-data--ExternalCatalogNamespace:EDS:",
    "HasGlobalScope": true,
    "Scope": "Global.OpsEnvironment",
    "SimpleMap": {
      "ReferenceValueID": "partition-id:reference-data--OperatingEnvironment:Offshore:"
    },
    "NameAlias": [
      {
        "AliasName": "OFF"
      },
      {
        "AliasName": "off"
      },
      {
        "AliasName": "Off"
      },
      {
        "AliasName": "OFFSHORE"
      },
      {
        "AliasName": "offshore"
      },
      {
        "AliasName": "Offshore"
      }
    ]
  }
}
```

</details>

A (unique) record should be found by the following query replacing `CODE` with the external reference value code, for
example `OFF`:

```json
{
  "kind": "osdu:wks:reference-data--ExternalReferenceValueMapping:1.*.*",
  "query": "data.Scope:\"Global.OpsEnvironment\" AND nested(data.NameAlias, (AliasName:\"CODE\"))"
}
```

Independent of the record id, the result is given in `data.SimpleMap.ReferenceValueID`. It is safe to take the external
code `"OFF"` and map it to `"partition-id:reference-data--OperatingEnvironment:Offshore:"`

[Back to TOC](#TOC)

---

## Complex Mappings

Sometimes a single external reference value needs to be transformed into a set of reference values assigned to
different properties in one of more associated `kind`s. A typical example is the well or wellbore status, which comes in
various simplifications bundling multiple OSDU (or PPDM) concepts together.

In the following example an assumed status code `GAS-IDLE`, perhaps a well symbol rather than a status, is mapped to a
number of reference values to be assigned to different properties.

With a simple query using the `Code` convention:

```json
{
  "kind": "osdu:wks:reference-data--ExternalReferenceValueMapping:1.*.*",
  "query": "data.Code:\"EDS:Wellbore.Status.GAS-IDLE\""
}
```

the following record should be found:

<details>

<summary markdown="span">Example complex mapping well status mapping given <code>GAS-IDLE</code>.</summary>

<OsduImportJSON>[GAS-IDLE Mapping, full record](./records/MappingComplex.json#only.data.Code|NamespaceID|HasGlobalScope|Scope|ComplexMappings)</OsduImportJSON>

```json
{
  "data": {
    "Code": "EDS.Wellbore.Status.GAS-IDLE",
    "NamespaceID": "partition-id:reference-data--ExternalCatalogNamespace:EDS:",
    "HasGlobalScope": {},
    "Scope": "Wellbore.Status",
    "ComplexMappings": [
      {
        "PropertyName": "data.ConditionID",
        "ReferenceValueID": "partition-id:reference-data--WellCondition:Inactive.Idle:",
        "TargetKind": "osdu:wks:master-data--Wellbore:1.1."
      },
      {
        "PropertyName": "data.LifecyclePhaseID",
        "ReferenceValueID": "partition-id:reference-data--FacilityStateType:Operating:",
        "TargetKind": "osdu:wks:master-data--Wellbore:1.1."
      },
      {
        "PropertyName": "data.FluidDirectionID",
        "ReferenceValueID": "partition-id:reference-data--WellFluidDirection:Outflow:",
        "TargetKind": "osdu:wks:master-data--Wellbore:1.1."
      },
      {
        "PropertyName": "data.PrimaryProductTypeID",
        "ReferenceValueID": "partition-id:reference-data--WellProductType:Gas:",
        "TargetKind": "osdu:wks:master-data--Wellbore:1.1."
      },
      {
        "PropertyName": "data.RoleID",
        "ReferenceValueID": "partition-id:reference-data--WellRole:Produce:",
        "TargetKind": "osdu:wks:master-data--Wellbore:1.1."
      }
    ]
  }
}
```

</details>

The `TargetKind` is always set to Wellbore - notice the lack of a complete semantic schema version number implying
that the assignment can only succeed in version `osdu:wks:master-data--Wellbore:1.1.0` and higher.

For `osdu:wks:master-data--Wellbore:1.1.0` and higher the following values are populated to represent the original
meaning of the external code `GAS-IDLE`:

1. `data.ConditionID` &rarr; `"partition-id:reference-data--WellCondition:Inactive.Idle:"`
2. `data.LifecyclePhaseID` &rarr; `"partition-id:reference-data--FacilityStateType:Operating:"`
3. `data.FluidDirectionID` &rarr; `"partition-id:reference-data--WellFluidDirection:Outflow:"`
4. `data.PrimaryProductTypeID` &rarr; `"partition-id:reference-data--WellProductType:Gas:"`
5. `data.RoleID` &rarr; `"partition-id:reference-data--WellRole:Produce:"`

It is not required to always populate all properties — the result depends on the actual well status and classification
and how much of the status is clearly described/implied in the external system.

---

[Back to TOC](#TOC)