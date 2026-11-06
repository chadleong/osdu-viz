[[_TOC_]]

# Technical Assurance

The M10 milestone adds a new property `TechnicalAssuranceID` to
[`osdu:wks:AbstractCommonResources:1.0.0`](../../../E-R/abstract/AbstractCommonResources.1.0.0.md). This impacts
theoretically all records with kinds `osdu:wks:*:*.*.*`, which include `AbstractCommonResources`. **No migration is
required** though since - by definition - absent values are equivalent with having a relationship
to `"partition-id:reference-data--TechnicalAssuranceType:Unevaluated:"`