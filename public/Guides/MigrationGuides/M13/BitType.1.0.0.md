<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--BitType:1.0.1`

Governance is taken over by PPDM. 
Potential reference value migration to [`osdu:wks:reference-data--BitType:1.0.1`](../../../E-R/reference-data/BitType.1.0.1.md):

PPDM introduces a set of clean definitions and Code styles. The previous OSDU values, which used lower case words and
blanks as Code, were deprecated and superseding values indicated.

* No action is required if an operator wants to carry on with the previously used OSDU codes.
* If operators want to migrate to the PPDM reference values a migration is required, which is presented in the following
  table (alphabetically ordered by deprecated code).

| Deprecated `id`                                             | Superseded by ìd`                               | Superseded Name | Description                                                                                                                                                      |
|-------------------------------------------------------------|-------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--BitType:PDC%20core             | Not endorsed by PPDM                            | -               | polycrystalline diamond compact fixed cutter bit                                                                                                                 |
| partition-id:reference-data--BitType:diamond%20core         | partition-id:reference-data--BitType:Core       | Core            | DEPRECATED: Please use Code="Core" with Name="Core" instead. Diamond core bit                                                                                    |
| partition-id:reference-data--BitType:diamond                | Not endorsed by PPDM                            | -               | Diamond bit                                                                                                                                                      |
| partition-id:reference-data--BitType:insert%20roller%20cone | partition-id:reference-data--BitType:RollerCone | Roller cone     | DEPRECATED: Please use Code="RollerCone" with Name="Roller cone" instead. Insert roller cone bit                                                                 |
| partition-id:reference-data--BitType:roller%20cone          | partition-id:reference-data--BitType:RollerCone | Roller cone     | DEPRECATED: Please use Code="RollerCone" with Name="Roller cone" instead. The bit has conical teeth, usually on 3 rollers (tricone.) Bicone is much less common. |
| partition-id:reference-data--BitType:unknown                | partition-id:reference-data--BitType:Unknown    | Unknown         | DEPRECATED: Please use Code="Unknown" with Name="Unknown" instead. The type of bit is unreported or unknown.                                                     |


[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
