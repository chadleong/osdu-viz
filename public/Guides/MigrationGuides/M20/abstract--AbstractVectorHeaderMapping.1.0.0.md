<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:AbstractVectorHeaderMapping:1.1.0`

Changes between [osdu:wks:AbstractVectorHeaderMapping:1.0.0](../../../E-R/abstract/AbstractVectorHeaderMapping.1.0.0.md) and [osdu:wks:AbstractVectorHeaderMapping:1.1.0](../../../E-R/abstract/AbstractVectorHeaderMapping.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|_VectorHeaderMapping[]_|_object_|_VectorHeaderMapping_|_Array of objects which define the meaning and format of a tabular structure used in a binary file as a header.  The initial use case is the trace headers of a SEG-Y file.  Note that some of this information may be repeated in the SEG-Y EBCDIC header._|Changes in: Title|
|_TraceHeaderOverrides[]_|_object_|_TraceHeaderOverride_|_Trace header override definitions. Fragment Description: An object defining an override condition  for a vector header value, e.g. SEG-Y trace header value._|Added property|
|TraceHeaderOverrides[].KeyName &rarr; [HeaderKeyName](../../../E-R/reference-data/HeaderKeyName.1.0.0.md)|string|Key Name|Relationship to a reference value for a name of a property header such as INLINE, CDPX.|Added property|
|TraceHeaderOverrides[].OverrideByConstant|number|Override by Constant|The constant value to be assigned to the position. If populated, the OverrideByExpressions must be empty.|Added property|
|_TraceHeaderOverrides[].OverrideByExpressions[]_|_object_|_Expression_|_The value to be overridden is computed by evaluating the sequence of expressions. If populated, the OverrideByConstant must be empty. Fragment Description: An expression, potentially in a sequence, allowing the computation of a value or intermediate value._|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Input &rarr; [HeaderKeyName](../../../E-R/reference-data/HeaderKeyName.1.0.0.md)|string|Input|The input variable given by the HeaderKeyName.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Operator1|enum string|Operator 1|The operator 1, an enumeration with permitted values of Plus, Minus, DivideBy, DivideByInteger, MultiplyBy,  Modulo, Equals.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Operand1Constant|number|Operand 1 Constant|The constant operand 1 value.  If populated, Operand1Variable must be absent.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Operand1Variable &rarr; [HeaderKeyName](../../../E-R/reference-data/HeaderKeyName.1.0.0.md)|string|Operand 1 Variable|The operand 1 variable given by the HeaderKeyName, where to obtain the value. If populated, Operand1Constant must be absent.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Operator2|enum string|Operator 2|The operator 2, an enumeration with permitted values of Plus, Minus, DivideBy, DivideByInteger, MultiplyBy,  Modulo, Equals.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Operand2Constant|number|Operand 2 Constant|The constant operand 2 value. If populated, Operand2Variable must be absent.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Operand2Variable &rarr; [HeaderKeyName](../../../E-R/reference-data/HeaderKeyName.1.0.0.md)|string|Operand 2 Variable|The operand 2 variable given by the HeaderKeyName, where to obtain the value. If populated, Operand2Constant must be absent.|Added property|
|TraceHeaderOverrides[].OverrideByExpressions[].Remark|string|Remark|An optional remark explaining the intention or purpose of this expression.|Added property|
|_BinaryHeaderOverrides[]_|_object_|_BinaryHeaderOverride_|_Binary header override definitions. Fragment Description: An object defining an override condition  for a vector header value, e.g. SEG-Y binary header value._|Added property|
|BinaryHeaderOverrides[].KeyName &rarr; [HeaderKeyName](../../../E-R/reference-data/HeaderKeyName.1.0.0.md)|string|Key Name|Relationship to a reference value for a name of a property header such as LineNumber.|Added property|
|BinaryHeaderOverrides[].OverrideByConstant|integer|Override by Constant|The constant value to be assigned to the position.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)