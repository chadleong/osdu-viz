<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--Wellbore:1.2.0`

[`osdu:wks:master-data--Wellbore:1.2.0`](../../../E-R/master-data/Wellbore.1.2.0.md).  

1. PPDM has deprecated all values in the reference value list [DrillingReasonType](DrillingReasonType.1.0.0.md). 
2. A new property `data.DrillingReasons[].LaheeClassID` has been added to the DrillingReasons[]. The old relationships
   to reference-data--DrillingReasonType should be replaced by relationships to reference-data--LaheeClass,
   see [migration instructions](DrillingReasonType.1.0.0.md).
3. Wellbore:1.2.0 includes `AbstractFacility:1.1.0` including `AbstractFacilityEvent:1.1.0`, 
   `AbstractFacilityOperator:1.1.0` and `AbstractFacilityState:1.1.0`. No migration effort expected (new properties).

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
