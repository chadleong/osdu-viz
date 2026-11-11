# Manifest Example

The [Manifest.1.0.0](Manifest.1.0.0.json) manifest example demonstrate 
the capabilities of the loading manifest. 

* one Generic record example per group-type.
* use of `surrogate-key` for work-product, work-product-component and dataset
  group-type records.

The generic record examples:
* [GenericReferenceData.1.0.0](GenericReferenceData.1.0.0.json)
* [GenericMasterData.1.0.0](GenericMasterData.1.0.0.json)
* [GenericDataset.1.0.0](GenericDataset.1.0.0.json)
* [GenericWorkProductComponent.1.0.0](GenericWorkProductComponent.1.0.0.json)
* [GenericWorkProduct.1.0.0](GenericWorkProduct.1.0.0.json)

will in reality be replaced by records, which conform to a concrete group-type
schema as in the folders:
* [reference-data](../reference-data)
* [master-data](../master-data)
* [dataset](../dataset)
* [work-product-component](../work-product-component)
* [work-product](../work-product)

