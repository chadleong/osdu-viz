# Usage of `work-product-component--IjkGridRepresentation:1.0.0`

An IJK Grid where some K layers are at least partly pinched in K direction in order to most of time represent an erosion.

# Eroded IJK Grid 
Uses the **HasCollocatedNodeInKDirection** metadata.
			
![Eroded IJK Grid](./Illustrations/IJK_Eroded_withStrati.png)

```json
  {
    ...
    "IndexableElementCount": [
      {
        "Count": 12210,
        "IndexableElementID": "namespace:reference-data--IndexableElement:cells:"
      }
    ],
    "ActiveCellCount": 8226,
    "HasNaNGeometry": false,
    "StratigraphicUnits": {
      "StratigraphicUnitsIndices": [
        [1], [1], [1], [1], [1],
        [2], [2], [2], [2], [2],
        [3], [3], [3], [3], [3]
      ],
      "StratigraphicOrganizationInterpretationID": "namespace:work-product-component--StratigraphicColumnRankInterpretation:85348741-3433-406B-9189-22B298C3E2D2:"
    },
    "HasFiniteElementSubnodes": false,
    "HasNoGeometry": false,
    "Nk": 15,
    "KDirectionID": "namespace:reference-data--KDirectionType:down:",
    "HasCollocatedNodeInKDirection": true,
    "PillarShapeID": "namespace:reference-data--PillarShapeType:vertical:",
    "HasLateralGaps": false,
    "HasKGaps": false,
    "HasParametricGeometry": false,
    "HasSplitNode": false,
    "HasTruncations": false,
    "Ni": 37,
    "Nj": 22,
    "IsRightHanded": false,
    "IsRadial": false,
    ...
  }
```
