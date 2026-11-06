<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--DrillingReasonType:1.0.0`

DrillingReasonType - as a reference-data type - will be deprecated eventually. For the time being, the schema is not
marked as deprecated, but all values are. The codes can be transferred to LaheeClass.

| Deprecated `id`                                                   | Superseded by `ìd` Note: **Different Type**               | Superseded Name   | Description                                                                                                                                                                              |
|-------------------------------------------------------------------|-----------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| partition-id:reference-data--DrillingReasonType:DeeperPoolTest    | partition-id:reference-data--LaheeClass:DeeperPoolTest    | DeeperPoolTest    | DEPRECATED: Please use Code="LaheeClass:DeeperPoolTest" with Name="DeeperPoolTest" instead. Exploratory well within known production but deeper than deepest test                        |
| partition-id:reference-data--DrillingReasonType:Development       | partition-id:reference-data--LaheeClass:Development       | Development       | DEPRECATED: Please use Code="LaheeClass:Development" with Name="Development" instead. A wellbore drilled in a zone in an area already proved productive. (POSC definition – Development) |
| partition-id:reference-data--DrillingReasonType:Extension         | partition-id:reference-data--LaheeClass:Extension         | Extension         | DEPRECATED: Please use Code="LaheeClass:Extension" with Name="Extension" instead. Well to significantly extend partly developed pool                                                     |
| partition-id:reference-data--DrillingReasonType:NewFieldWildcat   | partition-id:reference-data--LaheeClass:NewFieldWildcat   | NewFieldWildcat   | DEPRECATED: Please use Code="LaheeClass:NewFieldWildcat" with Name="NewFieldWildcat" instead. Exploratory well on untested structure                                                     |
| partition-id:reference-data--DrillingReasonType:NewPoolWildcat    | partition-id:reference-data--LaheeClass:NewFieldWildcat   | NewFieldWildcat   | DEPRECATED: Please use Code="LaheeClass:NewFieldWildcat" with Name="NewFieldWildcat" instead. Exploratory well on tested structure outside known production                              |
| partition-id:reference-data--DrillingReasonType:Service           | partition-id:reference-data--LaheeClass:Service           | Service           | DEPRECATED: Please use Code="LaheeClass:Service" with Name="Service" instead. Well to support production (injection, disposal, observation)                                              |
| partition-id:reference-data--DrillingReasonType:ShallowerPoolTest | partition-id:reference-data--LaheeClass:ShallowerPoolTest | ShallowerPoolTest | DEPRECATED: Please use Code="LaheeClass:ShallowerPoolTest" with Name="ShallowerPoolTest" instead. Exploratory well within known production but shallower than deepest test               |
| partition-id:reference-data--DrillingReasonType:StratigraphicTest | partition-id:reference-data--LaheeClass:StratigraphicTest | StratigraphicTest | DEPRECATED: Please use Code="LaheeClass:StratigraphicTest" with Name="StratigraphicTest" instead. Wellbore drilled to test geology.                                                      |


[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
