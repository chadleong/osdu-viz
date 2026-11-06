<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SeismicMigrationType:1.0.1`

Governance is taken over by PPDM. 
Potential reference value migration to [`osdu:wks:reference-data--SeismicMigrationType:1.0.1`](../../../E-R/reference-data/SeismicMigrationType.1.0.1.md):

# SeismicMigrationType

PPDM introduces a set of clean definitions and Code styles. The previous OSDU values, which used abbreviated words as
Code, were deprecated and superseding values indicated.

* No action is required if an operator wants to carry on with the previously used OSDU codes.
* If operators want to migrate to the PPDM reference values a migration is required, which is presented in the following
  table (alphabetically ordered by deprecated code).

| Deprecated `id`                                                  | Superseded by ìd`                                                         | Superseded Name             | Description                                                                                                                                                                                               |
|------------------------------------------------------------------|---------------------------------------------------------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--SeismicMigrationType:DepthMig-Kirch | partition-id:reference-data--SeismicMigrationType:PoststackDepthKirchhoff | Poststack depth - Kirchhoff | DEPRECATED: Please use Code="PoststackDepthKirchhoff" with Name="Poststack depth - Kirchhoff" instead. Imaging with lateral velocity gradients applied to stacked traces using Kirchhoff algorithm        |
| partition-id:reference-data--SeismicMigrationType:DepthMig       | partition-id:reference-data--SeismicMigrationType:PoststackDepth          | Poststack depth             | DEPRECATED: Please use Code="PoststackDepth" with Name="Poststack depth" instead. Imaging with lateral velocity gradients applied to stacked traces                                                       |
| partition-id:reference-data--SeismicMigrationType:PSDM-Kirch     | partition-id:reference-data--SeismicMigrationType:PrestackDepthKirchhoff  | Prestack depth - Kirchhoff  | DEPRECATED: Please use Code="PrestackDepthKirchhoff" with Name="Prestack depth - Kirchhoff" instead. Imaging with lateral velocity gradients applied to gathers  using Kirchhoff algorithm                |
| partition-id:reference-data--SeismicMigrationType:PSDM           | partition-id:reference-data--SeismicMigrationType:PrestackDepth           | Prestack depth              | DEPRECATED: Please use Code="PrestackDepth" with Name="Prestack depth" instead. Imaging with lateral velocity gradients applied to gathers                                                                |
| partition-id:reference-data--SeismicMigrationType:PSTM-Kirch     | partition-id:reference-data--SeismicMigrationType:PrestackTimeKirchhoff   | Prestack time - Kirchhoff   | DEPRECATED: Please use Code="PrestackTimeKirchhoff" with Name="Prestack time - Kirchhoff" instead. Imaging with approximately flat earth assumption applied to gathers using Kirchhoff algorithm          |
| partition-id:reference-data--SeismicMigrationType:PSTM           | partition-id:reference-data--SeismicMigrationType:PrestackTime            | Prestack time               | DEPRECATED: Please use Code="PrestackTime" with Name="Prestack time" instead. Imaging with approximately flat earth assumption applied to gathers                                                         |
| partition-id:reference-data--SeismicMigrationType:TimeMig-Kirch  | partition-id:reference-data--SeismicMigrationType:PoststackTimeKirchhoff  | Poststack time - Kirchhoff  | DEPRECATED: Please use Code="PoststackTimeKirchhoff" with Name="Poststack time - Kirchhoff" instead. Imaging with approximately flat earth assumption applied to stacked traces using Kirchhoff algorithm |
| partition-id:reference-data--SeismicMigrationType:TimeMig        | partition-id:reference-data--SeismicMigrationType:PoststackTime           | Poststack time              | DEPRECATED: Please use Code="PoststackTime" with Name="Poststack time" instead. Imaging with approximately flat earth assumption applied to stacked traces                                                |

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
