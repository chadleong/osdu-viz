<a name="TOC">Table of Contents</a>

[[_TOC_]]

# Minimum Data Requirements

Minimum Data requirements can be expressed as [DataQualityRule](../../../../E-R/reference-data/DataQualityRule.1.1.0.md)
and grouped or reused in [DataQualityRuleSet](../../../../E-R/reference-data/DataQualityRuleSet.1.0.1.md).

ExxonMobil donated a set of Minimum Data Requirements as a
[spreadsheet](./Donations/XOM%20OSDU%20-%20SeismicMDR_v2.xlsx), which has been used to derive some example rules and
rule sets.

Related to SeismicBinGrid, two examples have been selected:

<details>

<summary markdown="span">Requirement for P6BinGridOriginI</summary>

<OsduImportJSON>[DataQualityRule Manifest, full record](../../../../ReferenceValues/Manifests/reference-data/LOCAL/DataQualityRule.1.json#only.ReferenceData[32].data)</OsduImportJSON>

```json
{
  "ReferenceData": {
    "data": {
      "Name": "P6BinGridOriginI",
      "Description": "P6BinGridOriginI must be populated and  must not be absent or null.",
      "Code": "OperatorNamespace.MDR.SeismicBinGrid.P6BinGridOriginI",
      "AttributionAuthority": "XOM",
      "AttributionPublication": "Example via Slack Proposal",
      "DataRuleDimensionTypeID": "{{NAMESPACE}}:reference-data--DataRuleDimensionType:Completeness:",
      "DataRuleStatement": "P6BinGridOriginI != null",
      "Source": "Workbook ReferenceValues/Published/DataQualityRule.1.xlsx; commit SHA 0a3f4e2c.",
      "CommitDate": "2024-03-26T08:10:58+00:00"
    }
  }
}
```

</details>

<details>

<summary markdown="span">Requirement for P6BinGridOriginJ</summary>

<OsduImportJSON>[DataQualityRule Manifest, full record](../../../../ReferenceValues/Manifests/reference-data/LOCAL/DataQualityRule.1.json#only.ReferenceData[33].data)</OsduImportJSON>

```json
{
  "ReferenceData": {
    "data": {
      "Name": "P6BinGridOriginJ",
      "Description": "P6BinGridOriginJ must be populated and  must not be absent or null.",
      "Code": "OperatorNamespace.MDR.SeismicBinGrid.P6BinGridOriginJ",
      "AttributionAuthority": "XOM",
      "AttributionPublication": "Example via Slack Proposal",
      "DataRuleDimensionTypeID": "{{NAMESPACE}}:reference-data--DataRuleDimensionType:Completeness:",
      "DataRuleStatement": "P6BinGridOriginJ != null",
      "Source": "Workbook ReferenceValues/Published/DataQualityRule.1.xlsx; commit SHA 0a3f4e2c.",
      "CommitDate": "2024-03-26T08:10:58+00:00"
    }
  }
}
```

</details>

Individual rules are aggregated into dataQualityRuleSet, as shown in this example:

<details>

<summary markdown="span">SeismicBinGrid MDR DataQualityRuleSet</summary>

<OsduImportJSON>[DataQualityRuleSet Manifest, full record](../../../../ReferenceValues/Manifests/reference-data/LOCAL/DataQualityRuleSet.1.json#only.ReferenceData[1].data)</OsduImportJSON>

```json
{
  "ReferenceData": {
    "data": {
      "Name": "SeismicBinGrid MDR",
      "Description": "Minimum data requirement for SeismicBinGrid.",
      "Code": "OperatorNamespace.MDR.SeismicBinGrid",
      "AttributionAuthority": "XOM",
      "AttributionPublication": "Example via Slack Proposal",
      "DataRules": [
        {
          "DataRuleID": "{{NAMESPACE}}:reference-data--DataQualityRule:OperatorNamespace.MDR.SeismicBinGrid.P6BinGridOriginI:",
          "DataRulePurposeTypeID": "{{NAMESPACE}}:reference-data--DataRulePurposeType:Warning:",
          "Weight": "0.5"
        },
        {
          "DataRuleID": "{{NAMESPACE}}:reference-data--DataQualityRule:OperatorNamespace.MDR.SeismicBinGrid.P6BinGridOriginJ:",
          "DataRulePurposeTypeID": "{{NAMESPACE}}:reference-data--DataRulePurposeType:Warning:",
          "Weight": "0.5"
        }
      ],
      "Source": "Workbook ReferenceValues/Published/DataQualityRuleSet.1.xlsx; commit SHA 0a3f4e2c.",
      "CommitDate": "2024-03-26T08:10:58+00:00"
    }
  }
}
```

</details>

# Building your own Rules

OSDU ships a workbook listing all OSDU entities (latest incremental schema version) with all properties and property
cumulative property path: [AllEntitiesProperties.xlsx](../../../../E-R/AllEntitiesProperties.xlsx). This can be used to
create the rules for the minimum requirements directly based on OSDU schemas.