<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--WellOperationsReport:2.1.0`

Changes between [osdu:wks:work-product-component--WellOperationsReport:2.0.0](../../../E-R/work-product-component/WellOperationsReport.2.0.0.md) and [osdu:wks:work-product-component--WellOperationsReport:2.1.0](../../../E-R/work-product-component/WellOperationsReport.2.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): Yes"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _A standard report of all drilling, completion or well work events conducted on a well during a given period, usually a 24-hour day, not necessarily aligned with the local time zone._
  * New Description: **_A standard report of all drilling, completion or other well work operations conducted on a well during a given reporting period, usually a 24-hour day, not necessarily aligned with the local time zone._**


**_WARNING: This schema version migration has to deal with breaking changes! Removed properties are listed in table below._**

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.BitRecord[].InitialConditionLocation|string|Initial Condition Location|Row and cone numbers for items which need location information (e.g. Cracked Cone, Lost Cone etc).|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].InitialConditionBearing|string|Initial Condition Bearing|Condition of bit bearings (integer 0-8 or E, F, N or X)).|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].InitialConditionGauge|string|Initial Condition Gauge|Condition of bit gauge in 1/16 of an inch. I = in gauge, else number of 16ths out of gauge.|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].InitialConditionOther|string|Initial Condition Other|Other comments on bit condition from IADC list (BitDullCode in standard list).|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].FinalConditionLocation|string|Final Condition Location|Row and cone numbers for items which need location information (e.g. Cracked Cone, Lost Cone etc).|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].FinalConditionBearing|string|Final Condition Bearing|Condition of bit bearings (integer 0-8 or E, F, N or X).|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].FinalConditionGauge|string|Final Condition Gauge|Condition of bit gauge in 1/16 of a inch. I = in gauge, else number of 16ths out of gauge.|**_Free text replaced by pattern-constrained. relationship._**|
|data.BitRecord[].FinalConditionOther|string|Final Condition Other|Other comments on bit condition from IADC list (BitDullCode in Standard LISTS).|**_Free text replaced by pattern-constrained. relationship._**|

[Back to TOC](#TOC)

---

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Name|string|Report Name|Name of Operations Report|Changes in: Title|
|data.WellActivityID<br> &rarr; [WellActivity](../../../E-R/master-data/WellActivity.1.2.0.md)|string|Well Activity|A link to the Well  Activity to which this report is associated.|Changes in: Description|
|data.WellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Wellbore ID|A link to the wellbore that was active at the end of this reporting period.|Changes in: Description|
|_data.BitRecord[]_|_object_|_BitRecord_|_Bit description and dull grade Fragment Description: Information on the condition of the Drill Bit as recorded during an operations report_|Changes in: Description|
|data.BitRecord[].BHARunID<br> &rarr; [BHARun](../../../E-R/master-data/BHARun.1.2.0.md)|string|BHA Run ID|BHA Run Identifier (includes ID of TubularAssembly which parents the Bit/Under-reamer Component)|Added property|
|data.BitRecord[].TubularComponentID<br> &rarr; [master-data--TubularComponent](../../../E-R/master-data/TubularComponent.2.2.0.md)<br> &rarr; [work-product-component--TubularComponent](../../../E-R/work-product-component/TubularComponent.1.3.0.md)|string|Tubular Component ID|Identifier of Bit Tubular Component|Added property|
|data.BitRecord[].Cost|number|Cost|Bit cost in local currency.|Changes in: Frame of Reference|
|data.BitRecord[].MfgCode|string|Manufacturer Code|The manufacturer's code for the bit.|Changes in: Description|
|data.BitRecord[].InitialConditionInner|number|Initial Inner Condition|As run bit IADC Dull Grade (I) Condition of Inner tooth rows (inner 2/3 of bit) (0-8).|Changes in: Description|
|data.BitRecord[].InitialConditionOuter|number|Initial Outer Condition|As run bit IADC Dull Grade (O) Condition of Outer tooth rows (outer 1/3 of bit) (0-8).|Changes in: Description|
|data.BitRecord[].InitialConditionDull<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Initial Dull Condition|As run bit IADC Dull Grade (D) Overall dull condition from IADC bit wear 2 character codes.|Changes in: Description|
|data.BitRecord[].InitialConditionLocation<br> &rarr; [BitDullLocationCode](../../../E-R/reference-data/BitDullLocationCode.1.0.0.md)|string|Initial Condition Location|As run bit IADC Dull Grade (L) Location Row and cone numbers where wear located (e.g. Cracked Cone, Lost Cone etc).|Added property|
|data.BitRecord[].InitialConditionBearing<br> &rarr; [BitDullBearingCode](../../../E-R/reference-data/BitDullBearingCode.1.0.0.md)|string|Initial Condition Bearing|As run bit IADC Dull Grade (B) Condition of bit Bearings (integer 0-8 or E, F, N or X)).|Added property|
|data.BitRecord[].InitialConditionGauge<br> &rarr; [BitDullGaugeCode](../../../E-R/reference-data/BitDullGaugeCode.1.0.0.md)|string|Initial Condition Gauge|As run bit IADC Dull Grade (G) Condition of bit Gauge in 1/16 of an inch. I = in gauge, else number of 16ths out of gauge.|Added property|
|data.BitRecord[].InitialConditionOther<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Initial Condition Other|As run bit IADC Dull Grade (O) Other comments on bit condition from IADC list (BitDullCode in standard list).|Added property|
|data.BitRecord[].InitialConditionReason<br> &rarr; [BitReasonPulledCode](../../../E-R/reference-data/BitReasonPulledCode.1.0.0.md)|string|Initial Condition Reason|As run bit IADC Dull Grade (R) Reason bit was pulled|Changes in: Relationship Targets, Description, Pattern|
|data.BitRecord[].FinalConditionInner|number|Final Condition Inner|Pulled bit IADC Dull Grade (I) Condition of Inner tooth rows (inner 2/3 of bit) (0-8).|Changes in: Description|
|data.BitRecord[].FinalConditionOuter|number|Final Condition Outer|Pulled bit IADC Dull Grade (O) Condition of Outer tooth rows (outer 1/3 of bit) (0-8).|Changes in: Description|
|data.BitRecord[].FinalConditionDull<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Final Condition Dull|Pulled bit IADC Dull Grade (D) Overall Dull condition from IADC bit wear 2 character codes.|Changes in: Description|
|data.BitRecord[].FinalConditionLocation<br> &rarr; [BitDullLocationCode](../../../E-R/reference-data/BitDullLocationCode.1.0.0.md)|string|Final Condition Location|Pulled bit IADC Dull Grade (L) Location Row and cone numbers where wear located (e.g. Cracked Cone, Lost Cone etc).|Added property|
|data.BitRecord[].FinalConditionBearing<br> &rarr; [BitDullBearingCode](../../../E-R/reference-data/BitDullBearingCode.1.0.0.md)|string|Final Condition Bearing|Pulled bit IADC Dull Grade (B) Condition of bit Bearings (integer 0-8 or E, F, N or X).|Added property|
|data.BitRecord[].FinalConditionGauge<br> &rarr; [BitDullGaugeCode](../../../E-R/reference-data/BitDullGaugeCode.1.0.0.md)|string|Final Condition Gauge|Pulled bit IADC Dull Grade (G) Condition of bit Gauge in 1/16 of a inch. I = in gauge, else number of 16ths out of gauge.|Added property|
|data.BitRecord[].FinalConditionOther<br> &rarr; [BitDullCode](../../../E-R/reference-data/BitDullCode.1.0.1.md)|string|Final Condition Other|Pulled bit IADC Dull Grade (O) Other comments on bit condition.|Added property|
|data.BitRecord[].FinalConditionReason<br> &rarr; [BitReasonPulledCode](../../../E-R/reference-data/BitReasonPulledCode.1.0.0.md)|string|Final Condition Reason|Pulled bit  IADC Dull Grade (R) Reason bit was pulled.|Changes in: Relationship Targets, Description, Pattern|
|data.BitRecord[].BitDullComments|string|Bit Dull Comments|Any other Bit Dull comments/description, older T-B-G code or full formatted dull grade e.g.  0-2-WT-N/S-X-I-LN-TD|Added property|
|data.StatusInfo[].Rig|string|Rig|Name of the Rig/Work Unit used for the reporting period|Changes in: Description|
|data.StatusInfo[].RigID<br> &rarr; [Rig](../../../E-R/master-data/Rig.1.2.0.md)|string|Rig Identifier|A pointer to the rig used.|Added property|
|data.StatusInfo[].BHARunID<br> &rarr; [BHARun](../../../E-R/master-data/BHARun.1.2.0.md)|string|BHA Run ID|A pointer to the latest BHA Run used for this reporting period|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)