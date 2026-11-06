<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:work-product-component--GeoReferencedImage:1.1.0`

[`osdu:wks:work-product-component--GeoReferencedImage:1.1.0`](../../../E-R/work-product-component/GeoReferencedImage.1.1.0.md).  

GeoReferencedImage:1.1.0 includes `AbstractBinGrid:1.1.0`, which has its own [migration page](AbstractBinGrid.1.0.0.md).

# Recommendation

> Encode the inline/crossline number to coordinate association within
> a [GeoJSON](../../../E-R/abstract/AbstractFeatureCollection.1.0.0.md)
> /[AnyCrsGeoJSON](../../../E-R/abstract/AbstractAnyCrsFeatureCollection.1.1.0.md) structure. 
> * `type` holds the feature type (from {AnyCrs}Point to {AnyCrs}MultiPolygon)
> * `geometry` holds the coordinates (2D or 3D) describing the feature `type`
> * `properties` holds the [AbstractGeoJson.PropertiesBinGridCorners](../../../E-R/abstract/AbstractGeoJson.PropertiesBinGridCorners.1.0.0.md) fragment(s)

[Back to TOC](#TOC)

---

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)
