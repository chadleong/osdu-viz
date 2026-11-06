<a name="TOC"></a> Previous Chapter: [7 History Properties](07-HistoryProperties.md)

[[_TOC_]]

# 8 Geographic Entities

Named geographic areas are ubiquitous in petro-technical documents and datasets. The OSDU Data Platform provides a
flexible structure to ensure that all uses can be handled in a consistent way. It involves a set of master data objects
to name the areas, a `GeoContext` array to hold the references to them, and reference data types to categorize them.

## 8.1 Geographic Master Data

The geographic objects of principal interest are

* Geo-political
  entities [`master-data--GeoPoliticalEntity`](../../E-R/master-data/GeoPoliticalEntity.1.1.0.md)
* Basin [`master-data--Basin`](../../E-R/master-data/Basin.1.2.0.md)
* Field [`master-data--Field`](../../E-R/master-data/Field.1.1.0.md)
* Play [`master-data--Play`](../../E-R/master-data/Play.1.1.0.md)
* Prospect [`master-data--Prospect`](../../E-R/master-data/Prospect.1.1.0.md)

Basin, field, play, and prospect are used in the traditional way and are not discussed here in detail. The reader is
referred to the current version of the OSDU schema for definitions and properties;
see [1.5 Available Resources](01-Introduction.md#15-available-resources). Note, however, that all of these entities are master data,
and not reference data. Although some of them have properties very similar to reference data, the fact remains that
these are business objects used in workflows and may have properties affected by business processes.

`GeoPoliticalEntity` may be more familiarly known as an administrative area. It comprises the gamut of government
administration areas from “country” to “concession”. A parent property allows the implementer to establish a hierarchy
of “contained in” objects, such as France > Île-de-France (region) > Paris (department) > Paris (city). An alias
property allows alternative names, spellings, and languages to be retained, which can be an aid to term-matching when
ingesting data.

At the time of writing, a set of universal properties for master data was under consideration, which would allow any of
these objects to have a geographic polygon for mapping.

## 8.2 Geographic Reference Data

Many of the geographic entities have a property type to categorize them.
The [`reference-data--GeoPoliticalEntityType`](../../E-R/reference-data/GeoPoliticalEntityType.1.0.0.md#reference-values-for-geopoliticalentitytype)
offers a number of codes. The governance is OPEN, meaning that operators can extend the list.

## 8.3 GeoContexts

When an area name is referenced by an object, it will usually be through the `data.GeoContexts[]` array. Each entry
references an object in one of the geographic master data entities. A wellbore, for instance, may be identified as
located in a certain prospect, concession, play, basin, country, county, and so on. No rules have been established about
what this list should include, though most would agree that it should minimally include a country.

[AbstractMaster](../../E-R/abstract/AbstractMaster.1.2.0.md)
and [AbstractWorkProductComponent](../../E-R/abstract/AbstractWorkProductComponent.1.1.0.md) both include an array
of [AbstractGeoContext](../../E-R/abstract/AbstractGeoContext.1.0.0.md), which means that alle master-data and
work-product-component group-type records can be associated with geographic contexts.

Some pitfalls, described in [Appendix E 1.3 GeoContexts](94-KnownIssues.md#appendix-e13-geocontexts), are present. The
recommendation to treat the discriminator property `GeoTypeID` and one of
the `GeoPoliticalEntityID`, `BasinID`, `FieldID`, `PlayID` or `ProspectID` as mandatory properties can avoid schema
validation errors and enable the expected search use cases by specific `GeoTypeID` values and/or geographic master-data
like, e.g., a country.


---

## Links

1. Return to the [Beginning of the Chapter](#TOC)
2. Next Chapter: [9 Seismic Projects and Related Data](09-SeismicProjectsAndRelatedData.md)
3. Browse to the [Schema Usage Guide Table of Contents](../README.md)

---