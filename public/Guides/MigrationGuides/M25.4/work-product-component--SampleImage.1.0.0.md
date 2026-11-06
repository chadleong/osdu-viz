<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--SampleImage:1.1.0`

Changes between [osdu:wks:work-product-component--SampleImage:1.0.0](../../../E-R/work-product-component/SampleImage.1.0.0.md) and [osdu:wks:work-product-component--SampleImage:1.1.0](../../../E-R/work-product-component/SampleImage.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

|Cumulative Name|Value Type|Title|Description|Migration/Recommendation|
|-----|-----|-----|-----|-----|
|data.ImageTypeID<br> &rarr; [RockImageType](../../../E-R/reference-data/RockImageType.1.0.0.md)|string|Image Type ID|The type of image, for examples, Optical Photography, Computed Tomography (CT) and Hyperspectral.|Changes in: Description|
|~~data.Remark~~|~~string~~|~~Remark~~|~~DEPRECATED: Use the Remarks array object instead. Remarks regarding the image acquisition and or processing environment or parameters.~~|Deprecated|
|~~data.LightingConditionID<br> &rarr; [ImageLightingCondition](../../../E-R/reference-data/ImageLightingCondition.1.0.1.md)~~|~~string~~|~~Lighting Condition ID~~|~~DEPRECATED Use the `ImageParameters[].LightingConditionTypeID` property instead. The type of lighting conditions used when capturing the image. Examples include Ultraviolet, White, Natural, etc~~|Deprecated|
|~~data.Magnification~~|~~number~~|~~Magnification~~|~~DEPRECATED Use the `ImageParameters[].ImageParameterType` property along with the `Magnification` reference value and the `ImageParameterNumericValue` instead. Magnification of the image~~|Deprecated|
|_data.ImageParameters[]_|_object_|_Image Parameters_|_The type of parameters under which the image was acquired_|Added property|
|data.ImageParameters[].ImageParameterTypeID<br> &rarr; [SampleImageParameters](../../../E-R/reference-data/SampleImageParameters.1.0.0.md)|string|Image Parameter Type ID|The type of parameter under which the image was acquired. In the array of data.ImageParameters[] objects, a particular ImageParameterTypeID value should appear at most once.|Added property|
|data.ImageParameters[].NumericParameterValue|number|Numeric Parameter Value|The image parameter value of type "Numeric" under which the image was acquired.|Added property|
|data.ImageParameters[].BooleanParameterValue|boolean|Boolean Parameter Value|The image parameter value of type "Boolean" under which the image was acquired.|Added property|
|data.ImageParameters[].StringParameterValue|string|String Parameter Value|The image parameter value of type "String" under which the image was acquired.|Added property|
|_data.ImageReferenceParameters_|_object_|_Image Reference Parameters_|_Similar to ImageParameters, but reference-data relationships describing reference-value list controlled image properties._|Added property|
|data.ImageReferenceParameters.ResolutionSourceTypeID<br> &rarr; [SampleImageResolutionSource](../../../E-R/reference-data/SampleImageResolutionSource.1.0.0.md)|string|Resolution Source TypeID|The source of the pixel resolution for this sample image, for example, it may be inferred from a scale bar or a known reference.|Added property|
|data.ImageReferenceParameters.ColourSpaceTypeID<br> &rarr; [SampleImageColourSpace](../../../E-R/reference-data/SampleImageColourSpace.1.0.0.md)|string|Colour Space Type ID|The colour space for this sample image, for example, could be RGB, Monochrome, or CMYK.|Added property|
|data.ImageReferenceParameters.OpticalLightPathTypeID<br> &rarr; [SampleImageOpticalLightPath](../../../E-R/reference-data/SampleImageOpticalLightPath.1.0.0.md)|string|Optical Light Path Type ID|The light path for this sample image, for example, incident or transmitted.|Added property|
|data.ImageReferenceParameters.LightingConditionTypeID<br> &rarr; [SampleImageLightingCondition](../../../E-R/reference-data/SampleImageLightingCondition.1.0.0.md)|string|Image Lighting Condition Type ID|The mode of lighting for this sample image, for example, Natural, White and Ultraviolet.|Added property|
|data.ImageReferenceParameters.OpticalLightFilterTypeID<br> &rarr; [SampleImageOpticalLightFilter](../../../E-R/reference-data/SampleImageOpticalLightFilter.1.0.0.md)|string|Optical Light Filter Type ID|The type of filter applied to the light source of this sample image, for example, Cross Polarised, Brightfield and Darkfield.|Added property|
|data.ImageReferenceParameters.BeamTypeID<br> &rarr; [SampleImageBeamType](../../../E-R/reference-data/SampleImageBeamType.1.0.0.md)|string|BeamTypeID|The type of beam in the electron microscope for this sample image, for example, electron or ion beam.|Added property|
|data.ImageReferenceParameters.XRayDetectorTypeID<br> &rarr; [SampleImageXRayDetector](../../../E-R/reference-data/SampleImageXRayDetector.1.0.0.md)|string|XRayDetectorTypeID|The type of X Ray detector used for this sample image, for example, Wavelength Dispersive Detector WDS/WDX) and Energy Dispersive Detector (EDS/EDX).|Added property|
|_data.Remarks[]_|_object_|_AbstractRemark_|_Remarks regarding the image acquisition and or processing environment or parameters.  One or many remarks can be captured. Fragment Description: A remark object, pairing a remark text with a source, e.g. an author, and a date, which is typically included in an array. The RemarkSequenceNumber acts as unique key in this case._|Added property|
|data.Remarks[].RemarkSequenceNumber|integer|Remark Sequence Number|A unique identifier for each remark record. This identifier is used to uniquely identify a member in an array of remarks.|Added property|
|data.Remarks[].Remark|string|Remark|A descriptive comment for this remark.|Added property|
|data.Remarks[].RemarkSource|string|Remark Source|The person, vendor, interpreter or other provider of information.|Added property|
|data.Remarks[].RemarkDate|string|Remark Date|The date the remark was issued.|Added property|

[Back to TOC](#TOC)

---


[//]: # "End of section Schema Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)