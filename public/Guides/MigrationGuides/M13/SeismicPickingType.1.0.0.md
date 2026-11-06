<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicPickingType:1.0.1`

Governance is taken over by PPDM. 
Potential reference value migration to [`osdu:wks:reference-data--SeismicPickingType:1.0.1`](../../../E-R/reference-data/SeismicPickingType.1.0.1.md):

# SeismicPickingType

PPDM introduces a set of clean definitions and Code styles. The previous OSDU values, which used lower case words and
blanks as Code, were deprecated and superseding values indicated.

* No action is required if an operator wants to carry on with the previously used OSDU codes.
* If operators want to migrate to the PPDM reference values a migration is required, which is presented in the following
  table (alphabetically ordered by deprecated code).

| Deprecated `id`                                                  | Superseded by ìd`                                         | Superseded Name | Description                                                                                                                |
|------------------------------------------------------------------|-----------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--SeismicPickingType:Autotracked      | partition-id:reference-data--SeismicPickingType:Automatic | Automatic       | DEPRECATED: Please use Code="Automatic" with Name="Automatic" instead. Seismic picking performed using autotracking method |
| partition-id:reference-data--SeismicPickingType:InterpolatedSeed | partition-id:reference-data--SeismicPickingType:Mixed     | Mixed           | DEPRECATED: Please use Code="Mixed" with Name="Mixed" instead. Interpolated Seed used as Seismic picking method            |
| partition-id:reference-data--SeismicPickingType:PrimarySeed      | partition-id:reference-data--SeismicPickingType:Automatic | Automatic       | DEPRECATED: Please use Code="Automatic" with Name="Automatic" instead. Primary Seed used as Seismic picking method         |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
