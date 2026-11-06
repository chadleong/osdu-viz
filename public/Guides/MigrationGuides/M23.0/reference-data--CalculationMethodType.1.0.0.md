<a name="TOC"></a>

[[_TOC_]]

# Migration to `osdu:wks:reference-data--CalculationMethodType:1.0.0`

Changes between [osdu:wks:reference-data--CalculationMethodType:1.0.0](../../../E-R/reference-data/CalculationMethodType.1.0.0.md) and [osdu:wks:reference-data--CalculationMethodType:1.0.0](../../../E-R/reference-data/CalculationMethodType.1.0.0.md) are listed below.

[//]: # "The Schema property change table contains manual comments, which must be protected? (Yes/No): No"
[//]: # "Please do not add any comments below this line. The following lines are auto-generated."

# Schema Changes

**_No Schema Changes._**

[//]: # "End of section Schema Changes"

# Reference Data Changes

| `id` | Name | Description | Change Notes |
| ----- | ----- | ----- | ----- |
| partition-id:reference-data--CalculationMethodType:AverageAngle | Average angle | Uses the average of the inclinations and azimuths measured at the upper and lower survey stations. The average of the two sets of angles is assumed to be the inclination and the azimuth over the incremental measured depth. The wellbore path is then calculated using simple trigonometric functions. | Changes in Name, NameAlias |
| partition-id:reference-data--CalculationMethodType:BackwardStation | Backward station | Refer to Tangential Method | Changes in Name |
| partition-id:reference-data--CalculationMethodType:BalancedTangential | Balanced tangential | Uses the inclination and direction angles at the top and bottom of the course length in a manner so as to tangentially balance the two sets of measured angles over the course length. Results obtained are the same as the "Acceleration" "Trapezoidal" and "Vector Averaging" Methods.  The balanced tangential method is rarely used but is the basis for the minimum curvature method. | Changes in Name |
| partition-id:reference-data--CalculationMethodType:CircularArc | Circular arc | Uses both sets of measured angles associated with each course length to recreate the wellbore path as a sequence of circular arcs constrained by the measured angles to pass through the end points with inclination and direction angles as measured. | Changes in Name |
| partition-id:reference-data--CalculationMethodType:CompensatedAcceleration | Compensated acceleration | Refer to "Mercury" Method. | Changes in Name |
| partition-id:reference-data--CalculationMethodType:ConstantCurvature | Constant curvature | The constant-curvature method developed is based on drilling tendencies of the bottom hole assembly and the technical advancement in directional drilling. It yields a trajectory with less maximum dogleg severity, less drag, and less torque in the drill string compared to the conventional radius-of-curvature and constant-turn-rate methods. The equations for the constant-curvature method can easily be used during directional drilling and are especially useful for horizontal drilling where a constant build rate is desired. | Changes in Name |
| partition-id:reference-data--CalculationMethodType:CurvatureRadius | Curvature radius | DEPRECATED: Please use Code="RadiusOfCurvature" with Name="Radius of curvature" instead. Uses the inclination and azimuth measured at the upper and lower ends of the course length to generate a circular arc when viewed in both the vertical and horizontal planes. This method assumes that the well path lies on a cylinder whose axis is vertical, and has a radius equal to the radius of curvature in the horizontal plane. It determines the length of the arc between the upper and lower ends of the course length in the horizontal plane. The cylinder can then be “unwrapped” to calculate the length of the circular arc along the cylinder surface. Consequently the incremental TVD is unaffected by changes in azimuth. | **DEPRECATED, superseded by Code: RadiusOfCurvature**<br>Changes in Name, Description |
| partition-id:reference-data--CalculationMethodType:GreatCircle | Great circle | Refer to "Minimum Curvature" Method | Changes in Name |
| partition-id:reference-data--CalculationMethodType:MinimumCurvature | Minimum curvature | Uses the sets of angles measured at the top and bottom of the course length to establish coordinate velocities through which a space curve (which represents the calculated path of the wellbore) passes in a manner that minimizes its total curvature.  This model takes the space vectors defined by inclination and direction measurements and smooths them onto the wellbore curve (Figure 13). This method is really a modification of the balanced tangential method. Instead of approximating the wellbore path with two straight lines, the minimum curvature replaces these lines with a circular arc. This arc is calculated by using a dogleg scale factor based on the amount of angular change over the course length. | Changes in Name, NameAlias |
| partition-id:reference-data--CalculationMethodType:Radiusofcurvature | Radius of curvature | DEPRECATED: Please use Code="RadiusOfCurvature" with Name="Radius of curvature" instead. Uses the inclination and azimuth measured at the upper and lower ends of the course length to generate a circular arc when viewed in both the vertical and horizontal planes. This method assumes that the well path lies on a cylinder whose axis is vertical, and has a radius equal to the radius of curvature in the horizontal plane. It determines the length of the arc between the upper and lower ends of the course length in the horizontal plane. The cylinder can then be “unwrapped” to calculate the length of the circular arc along the cylinder surface. Consequently the incremental TVD is unaffected by changes in azimuth. | **DEPRECATED, superseded by Code: RadiusOfCurvature**<br>Changes in Description |
| partition-id:reference-data--CalculationMethodType:SimpsonsRule | Simpsons rule | Uses as many measured angle values as are available (a minimum of three sets) to recreate the wellbore path through Simpson's rule for numeric integration which approximates by passing a parabola through three points. | Changes in Name |
| partition-id:reference-data--CalculationMethodType:TenChordMethod | Ten chord method | The spiral distance between stations is computed in ten equal intervals. For example, a 200 foot ten-chord spiral would be computed at a 20 foot interval. | Changes in Name |
| partition-id:reference-data--CalculationMethodType:TerminalAngle | Terminal angle | Refer to Tangential method | Changes in Name |
| partition-id:reference-data--CalculationMethodType:ThreeDimensionalRadiusOfCurvature | Three-dimensional radius of curvature | Refer to Minimum Curvature method | Changes in Name |
| partition-id:reference-data--CalculationMethodType:VectorAveraging | Vector averaging | Uses inclination and direction measurements at both ends of the measured course to establish vector space directions. It is then assumed that each of these two vectors is projected for one-half the course length in creating the wellbore path.  Each "half-course length" segment can be treated tangentially. Results obtained are essentially the same as the "Acceleration", "Balanced Tangential" and "Trapezoidal" Methods. | Changes in Name |

# Value Spreadsheet and Manifest

* &rarr; [PPDM Association URL<br>_(Requires a PPDM member or guest account)_](https://refval.ppdm.org/dist/ReferenceList.php?searchListname=Directional_Survey_Compute_Method)
* &rarr; [Manifest record CalculationMethodType.1.0.0.json](../../../ReferenceValues/Manifests/reference-data/OPEN/CalculationMethodType.1.json)

[Back to TOC](#TOC)

---

[//]: # "End of section Reference Data Changes"

# Links

* [Back to Milestone](README.md)
* [Back to Migration Guides](../README.md)
* [Back to Guides](../../README.md)