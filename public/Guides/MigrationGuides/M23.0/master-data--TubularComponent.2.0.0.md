<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:master-data--TubularComponent:2.1.0`

Changes between [osdu:wks:master-data--TubularComponent:2.0.0](../../../E-R/master-data/TubularComponent.2.0.0.md) and [osdu:wks:master-data--TubularComponent:2.1.0](../../../E-R/master-data/TubularComponent.2.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.Name|string|Name|The name of this tubular component.|Changes in: Example|
|data.ParentWellboreID<br> &rarr; [Wellbore](../../../E-R/master-data/Wellbore.1.5.1.md)|string|Parent Wellbore Identifier|Identifier of the wellbore the Component is standing in.|Changes in: Title, Example|
|data.ParentAssemblyID<br> &rarr; [TubularAssembly](../../../E-R/master-data/TubularAssembly.2.1.0.md)|string|Parent Assembly Identifier|Identifier of the Assembly the component is taking part on.|Changes in: Title, Example|
|data.TubularComponentSequence|integer|Sequence Number|The sequence within which the components entered the hole. That is, a sequence number of 1 entered first, 2 entered next, etc.|Changes in: Title, Example|
|data.TubularComponentNominalSize|number|Nominal Size|Nominal size (diameter) of the component, e.g. 9.625", 12.25|Changes in: Title, Example|
|data.TubularComponentNominalWeight|number|Nominal Weight|Nominal weight of the component.|Changes in: Title, Example|
|data.TubularComponentLength|number|Length of Component(s)|Total Length of the component(s)|Changes in: Title, Description, Example|
|data.MaximumOuterDiameter|number|Outer Diameter Maximum|This is the maximum hard outer diameter of the component.|Changes in: Title, Description, Example|
|data.DriftDiameter|number|Drift Diameter|The drift diameter is the inside diameter (ID) that the pipe manufacturer guarantees per specifications. Note that the nominal inside diameter is not the same as the drift diameter but is always slightly larger. The drift diameter is used by the well planner to determine what size tools or casing strings can later be run through the casing, whereas the nominal inside diameter is used for fluid volume calculations such as mud circulating times and cement slurry placement calculations.|Changes in: Example|
|data.InnerDiameter|number|Inner Diameter|Nominal inner diameter of the component.|Changes in: Example|
|data.ManufacturerID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Manufacturer Identifier|Unique identifier for the manufacturer of this equipment.|Changes in: Title, Example|
|data.SupplierID<br> &rarr; [Organisation](../../../E-R/master-data/Organisation.1.2.0.md)|string|Supplier Identifier|Unique identifier for the supplier of this equipment.|Changes in: Title, Example|
|data.Model|string|Model Name|Name of the component Model as defined per the operating company|Changes in: Title, Example|
|data.SerialNumber|string|Serial Number|Serial Number of the component as provided by the manufacturer and/or the supplier|Changes in: Example|
|data.SectionTypeID<br> &rarr; [TubularSectionType](../../../E-R/reference-data/TubularSectionType.1.0.0.md)|string|Pipe Section Type Identifier|Identifier of the Section Type.|Changes in: Title, Example|
|data.TubularComponentTypeID<br> &rarr; [TubularComponentType](../../../E-R/reference-data/TubularComponentType.1.1.0.md)|string|Pipe Component Type Identifier|Specifies the types of components that can be used in a tubular string. These are used to specify the type of component and multiple components are used to define a tubular string (Tubular).|Changes in: Title, Example|
|data.TubularComponentMaterialTypeID<br> &rarr; [TubularMaterialType](../../../E-R/reference-data/TubularMaterialType.1.0.0.md)|string|Material Type Identifier|Specifies the material type constituting the component.|Changes in: Title, Example|
|data.TubularComponentTubingGradeID<br> &rarr; [TubularComponentGrade](../../../E-R/reference-data/TubularComponentGrade.1.0.0.md)|string|Tubular Grade Identifier|Id of tubing grade - eg. the tensile strength of the tubing material. A system of classifying the material specifications for steel alloys used in the manufacture of tubing.|Changes in: Title, Example|
|data.TubularComponentTubingGradeStrength|number|Tubular Grade Strength|The tensile strength of the tubing material. A system of classifying the material specifications for steel alloys used in the manufacture of tubing.|Changes in: Title, Example|
|data.TubularComponentTubingStrength|number|Yield Strength|The axial load required to yield the pipe.|Changes in: Title, Example|
|data.PilotHoleSize|number|Pilot Hole Size|Size/diameter of the Pilot Hole when assembly is a drillstring|Changes in: Description|
|data.TubularComponentBoxPinConfigID<br> &rarr; [TubularComponentPinBoxType](../../../E-R/reference-data/TubularComponentPinBoxType.1.0.0.md)|string|Box/Pin Configuration Identifier|ID of Reference Object for type of collar used to couple the tubular with another tubing string.|Changes in: Title, Example|
|data.TubularComponentTopConnectionTypeID<br> &rarr; [TubularComponentConnectionType](../../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md)|string|Top Connection Type Identifier|Id of the Top Connection Type|Changes in: Title, Example|
|data.TubularComponentBottomConnectionTypeID<br> &rarr; [TubularComponentConnectionType](../../../E-R/reference-data/TubularComponentConnectionType.1.0.0.md)|string|Bottom Connection Type Identifier|Id of the Bottom Connection Type|Changes in: Title, Example|
|data.TubularComponentTopMD|number|Component Top Measured Depth|The measured depth of the top from the specific component|Changes in: Title, Example|
|data.TubularComponentBaseMD|number|Component Base Measured Depth|The measured depth of the base from the specific component|Changes in: Title, Example|
|data.TubularComponentTopReportedTVD|number|Component Top True Vertical Depth|Depth of the top of the component measured from the Well-Head|Changes in: Title, Example|
|data.TubularComponentBaseReportedTVD|number|Component Base True Vertical Depth|Depth of the base of the component measured from the Well-Head|Changes in: Title, Example|
|data.PackerSetDepthTVD|number|Packer Set True Vertical Depth|The depth the packer equipment was set to seal the casing or tubing.|Changes in: Title|
|data.ShoeDepthTVD|number|Shoe True Vertical Depth|True vertical depth of the casing/tubing shoe measured from the surface.|Changes in: Title, Description|
|data.NumJoints|integer|#Joints|Number of Joints per pipe section|Added property|
|data.TopConnOD|number|Top Conn OD|Top Connection Outer Diameter|Added property|
|data.TopConnLength|number|Top Conn Length|Top Connection Outer Length|Added property|
|data.BotConnOD|number|Bottom Conn OD|Bottom Connection Outer Diameter|Added property|
|data.BotConnLength|number|Bottom Conn Length|Bottom Connection Outer Length|Added property|
|data.IsThreadLockUsed|boolean|Is Thread Lock Used|Is thread lock used when mating up the pipe?|Added property|
|data.LinearCapacity|number|Linear Capacity|Linear Capacity volume inside component|Added property|
|data.ClosedEndDisplacement|number|Closed End Displacement|Closed End Displacement volume|Added property|
|data.MakeUpTorqueMin|number|Make Up Torque Minimum|Minimum Make Up Torque|Added property|
|data.MakeUpTorqueOpt|number|Make Up Torque Optimum|Optimum Make Up Torque|Added property|
|data.MakeUpTorqueMax|number|Make Up Torque Maximum|Maximum Make Up Torque|Added property|
|data.MakeUpTorqueAct|number|Make Up Torque Actual|Actual Make Up Torque|Added property|
|data.YoungsModulus|number|Youngs Modulus|Youngs Modulus of elasticity|Added property|
|data.PoissonsRatio|number|Poissons Ratio|Poissons Ratio|Added property|
|data.Density|number|Density|Density|Added property|
|data.BurstPressure|number|Burst Pressure|Burst Pressure|Added property|
|data.CollapsePressure|number|Collapse Pressure|Collapse Pressure|Added property|
|data.InternalReference|string|Internal Reference|Internal Reference name/description|Added property|
|data.AxialLoadCapacity|number|Axial Load Capacity|Axial Load Capacity of component|Added property|
|data.IsRadioActive|boolean|Is Radioactive|Is Radioactive|Added property|
|data.PartNumber|string|Part Number|Vendor part number|Added property|
|data.VendorNumber|string|Vendor Number|Vendor number or other reference identifier|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)