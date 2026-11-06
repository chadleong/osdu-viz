<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--SiteType:1.1.0`

Changes between [osdu:wks:reference-data--SiteType:1.0.0](../../../E-R/reference-data/SiteType.1.0.0.md) and [osdu:wks:reference-data--SiteType:1.1.0](../../../E-R/reference-data/SiteType.1.1.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

* Changed Description
  * Old Description: _The reference value list containing site classification._
  * New Description: **_Identifies the type of non-facility location (e.g. beach, oil seep, outcrop, sinkhole) that can be used for energy industry related activities, such as the collection of a rock or fluid sample. Being different from a facility, a generic site is usually a natural location, not a man-made structure or a grouping of equipment._**

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--SiteType:Adit | Adit | A horizontal or nearly horizontal entrance to an underground mine | Changes in ID |
| partition-id:reference-data--SiteType:ArtificialExposure | Artificial exposure | An artificially exposed surface like a road cut | Changes in ID |
| partition-id:reference-data--SiteType:Beach | Beach | A pebbly or sandy shore, especially by the sea between high- and low-water marks | Changes in ID |
| partition-id:reference-data--SiteType:Biomass | Biomass | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Biomass power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Canal | Canal | A canal is an artificial waterway across a drainage divide that connects two drainage basins. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Cement | Cement | DEPRECATED: Please use Code="FacilityType:Factory" with Name="Factory" instead. Cement industrial factory | **DEPRECATED, superseded by Code: FacilityType:Factory**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Coal | Coal | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Coal power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Cogeneration | Cogeneration | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Cogeneration power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Deposit | Deposit | A deposit refers to a naturally occurring accumulation of minerals, organic materials, or geological substances (e.g., tar sands) concentrated in the Earth's crust, often formed through long-term geological processes like sedimentation, chemical precipitation, or biological activity.  | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:DredgeSite | Dredge site | A dredge site is a specific location, typically in a body of water such as a river, seabed, or harbor, where material (e.g., sediment, minerals, or debris) is excavated or removed using dredging equipment to deepen channels, extract resources, or clean and maintain waterways. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Drillhole | Drillhole | DEPRECATED: Please use Code="FacilityType:Wellbore" with Name="Wellbore" instead. Capture this relationship from master-data--Wellbore rather than master-data--GenericFacility. A hole drilled for the purpose of mineral exploration, mineral resource delineation or resource expansion | **DEPRECATED, superseded by Code: FacilityType:Wellbore**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Fen | Fen | A type of peat-accumulating wetland fed by mineral-rich ground or surface water | Changes in ID |
| partition-id:reference-data--SiteType:Field | Field | DEPRECATED: Please use master-data--Field or SiteType "Deposit" instead, as appropriate. Mineral deposit that has been exploited for commercial purposes | **DEPRECATED**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Fumarole | Fumarole | A vent that emits hot gases to the atmosphere, usually associated with past or current magmatic activity below | Changes in ID |
| partition-id:reference-data--SiteType:Geothermal | Geothermal | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Geothermal power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Geyser | Geyser | A hot spring that intermittently erupts a spray of steam and hot water. Caused by the heating of groundwater within a confined opening in hot rock. | Changes in ID |
| partition-id:reference-data--SiteType:Hydro | Hydro | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Hydro power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:IndustrialPlant | Industrial Plant | DEPRECATED: Please use Code="FacilityType:Factory" with Name="Factory" instead. Industrial factories including steel and cement | **DEPRECATED, superseded by Code: FacilityType:Factory**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:InjectionSystem | Injection System | DEPRECATED: Please use Code="FacilityType:InjectionSystem" with Name="Injection System" instead. An injection system or station from which fluids are injected through well(s) into a producing reservoir | **DEPRECATED, superseded by Code: FacilityType:InjectionSystem**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Lake | Lake | A lake is a large, inland body of water, surrounded by land, and typically formed through geological or hydrological processes such as glacial activity, tectonic movements, or river flow. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Marsh | Marsh | A marsh is a type of wetland characterized by waterlogged, nutrient-rich soil and dominated by herbaceous plants like grasses, reeds, and sedges. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Mine | Mine | A mine is an excavation or site where minerals, ores, or other valuable geological materials are extracted from the earth. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:MineDump | Mine dump | A stockpile of mined overburden or ore that was not processed | Changes in ID |
| partition-id:reference-data--SiteType:MineTailing | Mine tailing | A pond, dam or dump in which mine tailings (waste materials from mining, such as rock, chemicals, and water), are stored | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:MineTunnel | Mine tunnel | A mine tunnel is a horizontal or nearly horizontal passageway in an underground mine. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Miscellaneous | Miscellaneous | DEPRECATED: Please use an appropriate SiteType or FacilityType instead. Various Oil sites (Refinery, Terminal, Tanks, raw crudes, Drill mud, Landfill) | **DEPRECATED**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:MudPool | Mud Pool | Mudpot, or mud pool, is a sort of acidic hot spring, or fumarole, with limited water | Changes in ID |
| partition-id:reference-data--SiteType:Nuclear | Nuclear | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Nuclear power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:OpenPitMine | Open pit mine | An open pit mine is a mine in which the ore is exposed to the surface, generally being excavated from a pit. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:OpenSea | Open Sea | Open sea is a location in an ocean or sea, far away from land, which is not further differentiated. | Value added. |
| partition-id:reference-data--SiteType:Outcrop | Outcrop | An outcrop is bedrock or another type of rock formation visibly exposed on the surface of the earth. | Changes in ID, Description |
| partition-id:reference-data--SiteType:Petcoke | Petcoke | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Petcoke power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Pit | Pit | Shallow surface pit or trench | Changes in ID |
| partition-id:reference-data--SiteType:PlayaLake | Playa lake | A playa lake is a dry or ephemeral lake, usually in interior desert basins or adjacent to the coast in arid or semiarid regions. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Pond | Pond | An artificial or natural pond, smaller than a lake | Changes in ID |
| partition-id:reference-data--SiteType:Pool | Pool | A geothermal pool or hot lake | Changes in ID |
| partition-id:reference-data--SiteType:Port | Port | DEPRECATED: Please use Code="FacilityType:ShippingPort" with Name="Shipping Port" instead. Shipping ports | **DEPRECATED, superseded by Code: FacilityType:ShippingPort**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:PowerPlant | Power Plant | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:River | River | A river is a natural flowing body of freshwater that moves along a defined channel, typically from higher to lower elevation, eventually emptying into a sea, lake, or another river. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:SaltFlat | Salt flat | Flat expanses of ground covered with salt and other minerals | Changes in ID |
| partition-id:reference-data--SiteType:Seabed | Seabed | A location at the seafloor or ocean floor | Changes in ID |
| partition-id:reference-data--SiteType:Seep | Seep | A seep is a natural, slow release of liquid hydrocarbons, water, or gas from underground reservoirs to the Earth's surface | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Shaft | Shaft | A vertical or steeply inclined passageway in an underground mine | Changes in ID |
| partition-id:reference-data--SiteType:ShallowSurfaceCores | Shallow Surface Cores | Var shallow surf cores, incl. piston-, vibra-, dart-, soft sed-, box-, but excl. drop- (SGC) | Changes in ID, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Sinkhole | Sinkhole | A depression in the ground created by erosion and the drainage of water, that has no natural external surface drainage | Changes in ID |
| partition-id:reference-data--SiteType:Slick | Slick | A slick is a layer or film of hydrocarbon oil floating on the surface of a natural body of water, such as an ocean, river, or lake, often as a result of an oil spill or natural seep.  | Value added. |
| partition-id:reference-data--SiteType:Solar | Solar | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Solar power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Spring | Spring | A natural spring of water, of any temperature. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Steel | Steel | DEPRECATED: Please use Code="FacilityType:Factory" with Name="Factory" instead. Steel industrial factory | **DEPRECATED, superseded by Code: FacilityType:Factory**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Storage | Storage | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Storage power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Stream | Stream | A geomorphological stream is a naturally flowing watercourse shaped by geological and climatic processes, which contributes to the erosion, transportation, and deposition of sediments, thereby influencing the landforms and overall physical landscape in its drainage basin. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:UndergroundMine | Underground mine | An underground mine is a mine in which ore is not exposed to the surface and is accessed by shafts, adits, declines or ramps. | Changes in ID, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Vented | Vented | Vented Site | Changes in ID, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Waste | Waste | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Waste power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:WaveAndTidal | Wave and Tidal | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Wave and Tidal power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Wellbore | Wellbore | DEPRECATED: Please use Code="FacilityType:Wellbore" with Name="Wellbore" instead. Capture this relationship from master-data--Wellbore rather than master-data--GenericFacility. A type of borehole, which is a narrow shaft that is drilled into the ground | **DEPRECATED, superseded by Code: FacilityType:Wellbore**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |
| partition-id:reference-data--SiteType:Wind | Wind | DEPRECATED: Please use Code="FacilityType:PowerPlant" with Name="Power Plant" instead. Wind power generation plant | **DEPRECATED, superseded by Code: FacilityType:PowerPlant**<br>Changes in ID, InactiveIndicator, Description, (COMPANY: insert comment) |

# Value Spreadsheet and Manifest

* &rarr; [Reference value workbook SiteType.1.xlsx](../../../ReferenceValues/Published/SiteType.1.xlsx)
* &rarr; [Manifest record SiteType.1.json](../../../ReferenceValues/Manifests/reference-data/OPEN/SiteType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)