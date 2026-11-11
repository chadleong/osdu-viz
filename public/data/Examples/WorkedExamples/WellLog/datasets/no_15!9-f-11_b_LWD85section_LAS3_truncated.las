~Version
VERS  .             3.0                                 : CWLS LOG ASCII STANDARD - VERSION 3.0
WRAP  .             NO                                  : One line per depth step
DLM   .             COMMA                               : Delimiter character between data columns
#Delimiting character ( SPACE TAB OR COMMA ).

~Well
#MNEM.UNIT          DATA                                DESCRIPTION
#----- ----        -----------------                   -----------
STRT  .M                  3146.10                       : FIRST INDEX VALUE
STOP  .M                  4770.60                       : LAST INDEX VALUE
STEP  .M                     0.10                       : STEP OF INDEX
NULL  .             -999.25                             : NULL VALUE
COMP  .             Statoil                             : COMPANY
WELL  .             15/9-F-11 B                         : WELL
FLD   .             VOLVE                               : FIELD
LOC   .             Maersk Inspirer                     : LOCATION
SRVC  .             STATOIL                             : SERVICE COMPANY
CTRY  .             NO                                  : COUNTRY
PROV  .                                                 : PROVINCE
UWI   .             NO 15/9-F-11 B                      : UNIQUE WELL ID
LIC   .                                                 : LICENSE NUMBER
STAT  .                                                 : STATE
CNTY  .             MAERSK INSPIRER                     : COUNTY
API   .             F-11 B                              : API NUMBER
DATE  .                                                 : LOG DATE
X     .             435049.095                          : X OR EAST-WEST COORDINATE
Y     .             6478568.172                         : Y OR NORTH-SOUTH COORDINATE
HZCS  .                                                 : HORIZONTAL CO-ORDINATE SYSTEM
LATI  .             58 26' 29.9566" N                   : LATITUDE
LONG  .             01 53' 14.8667" E                   : LONGITUDE
GDAT  .                                                 : GEODETIC DATUM
DATUM_ELEVATION.             MSL                                 : Datum_elevation
DEPTH_BOTTOM.M            4771                                : Downhole depth
DIRECTIONAL_SET.             DEV_SURV                            : Preferred directional survey set
DRILLED_DEPTH.M            4770                                : Total Depth - Driller
DRILL_MEAS_REF.             DF                                  :
ELEV_MEAS_REF.M            54.9                                : Elevation of Measurement Reference
ELEV_PERM_DATUM.M            0                                   :
FAULTS_SET.                                                 : Preferred faults set
LOGGED_DEPTH.M            4770                                : Total Depth - Logger
MEASUREMENT_REF.             KB                                  : Measurement Reference
PERMANENT_DATUM.             MSL                                 : Permanent Datum
SURFACE_ELEV.M            -91                                 : Elevation of Ground Level
SYMBOL.             BALL                                : Symbol
TVD_BOTTOM.M            3258.099408611                      : True Vertical Depth at well bottom
TVD_MIN_REPEAT.M            -                                   : TVD repeat section tolerance
XOFFSET_BOTTOM.M            1503.006022038                      : Amount of E/W distance from KB at TD
YOFFSET_BOTTOM.M            -168.2041758403                     : Amount of N/S distance from KB at TD

~PARAMETER
#MNEM.UNIT                    VALUE                        DESCRIPTION
#--------------- ---         ------------                 -----------------
ABSE_FVAL       .             -999.25                     : Absent Value - Floating Point Data
BS              .IN           8.5                         : Bitsize
CN              .             Statoil                     : Company Name
COUN            .             Unused                      : County
FL              .             M�rsk Inspirer              : Field Location
FN              .             VOLVE                       : Field Name
ID              .             00001_TEMP                  :
RM              .OHMM         10                          : Mud resistivity (assumed)
SEQUENCE_NUMBER .             1                           :
SRC_FILE        .             temp.xtf                    : Input Source File Name
SRC_NAME        .             temp.xtf                    : Original Source File Name
SRC_UNIT        .             meters                      : Input Source Index Units
TAPE_NAME       .             WL_RAW_BHPR-CAL-DEN-GR-MECH-NEU-REMP_MWD_1.DLIS:
WN              .             15/9-F-11 B                 : Well Name

~CURVE
#MNEM.UNIT                 LOG CODE                  CURVE DESCRIPTION
#----------- ----         ------------              -----------------
DEPTH       .M                                      : 0.100000 m frame 0 depth    {F}
ABDC01M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 01    {F}
ABDC02M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 02    {F}
ABDC03M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 03    {F}
ABDC04M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 04    {F}
ABDC05M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 05    {F}
ABDC06M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 06    {F}
ABDC07M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 07    {F}
ABDC08M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 08    {F}
ABDC09M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 09    {F}
ABDC10M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 10    {F}
ABDC11M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 11    {F}
ABDC12M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 12    {F}
ABDC13M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 13    {F}
ABDC14M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 14    {F}
ABDC15M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 15    {F}
ABDC16M     .G/CM3                                  : Azimuthal Bulk Density - Compensated - Sector 16    {F}
ABDCQF01    .G/CM3                                  : Azimuthal Bulk Density - Compensated - Quadrant 1    {F}
ABDCQF02    .G/CM3                                  : Azimuthal Bulk Density - Compensated - Quadrant 2    {F}
ABDCQF03    .G/CM3                                  : Azimuthal Bulk Density - Compensated - Quadrant 3    {F}
ABDCQF04    .G/CM3                                  : Azimuthal Bulk Density - Compensated - Quadrant 4    {F}
ACTECDM     .SG                                     : Actual ECD    {F}
APRA01M     .                                       :     {F}
APRA02M     .                                       :     {F}
APRA03M     .                                       :     {F}
APRA04M     .                                       :     {F}
APRA05M     .                                       :     {F}
APRA06M     .                                       :     {F}
APRA07M     .                                       :     {F}
APRA08M     .                                       :     {F}
APRA09M     .                                       :     {F}
APRA10M     .                                       :     {F}
APRA11M     .                                       :     {F}
APRA12M     .                                       :     {F}
APRA13M     .                                       :     {F}
APRA14M     .                                       :     {F}
APRA15M     .                                       :     {F}
APRA16M     .                                       :     {F}
APRESM      .BAR                                    : Annular Pressure    {F}
AT2GTFM     .DEG                                    :     {F}
AZRIT1T2    .                                       :     {F}
AZRTBM      .                                       :     {F}
BDCFM       .G/CM3                                  : Bulk Density Filtered    {F}
BDSIM       .                                       : Bulk Density Sliding Indicator    {F}
BITSIZE     .IN                                     : Bitsize    {F}
BPRESM      .BAR                                    : Bore Pressure    {F}
CALCM       .IN                                     : Acoustic Caliper - Corrected    {F}
DLAFM       .G/CM3                                  : Density Long Spaced Apparent Filtered    {F}
DPEFM       .B/E                                    : Density PE Filtered    {F}
DRHFM       .G/CM3                                  : Density Delta Rho Filtered    {F}
DSAFM       .G/CM3                                  : Density Short Spaced Apparent Filtered    {F}
FLOWIN      .L/MIN                                  : Mud Flow In    {F}
GR1CFM      .GAPI                                   : Gamma Ray sensor #1 , borehole corrected    {F}
GR2CFM      .GAPI                                   : Gamma Ray sensor # 2, borehole corrected    {F}
GRCDFM      .GAPI                                   : Azimuthal Gamma Ray Down Quadrant Corrected    {F}
GRCFM       .GAPI                                   : Gamma Ray - Corrected Filtered    {F}
GRCLFM      .GAPI                                   : Azimuthal Gamma Ray Left Quadrant Corrected    {F}
GRCRFM      .GAPI                                   : Azimuthal Gamma Ray Right Quadrant Corrected    {F}
GRCS01M     .GAPI                                   :     {F}
GRCS02M     .GAPI                                   :     {F}
GRCS03M     .GAPI                                   :     {F}
GRCS04M     .GAPI                                   :     {F}
GRCS05M     .GAPI                                   :     {F}
GRCS06M     .GAPI                                   :     {F}
GRCS07M     .GAPI                                   :     {F}
GRCS08M     .GAPI                                   :     {F}
GRCUFM      .GAPI                                   : Azimuthal Gamma Ray Up Quadrant Corrected    {F}
GRSIM       .                                       : Gamma Ray Sliding Indicator    {F}
INNM        .DEG                                    : Inclination - Non-Rotating    {F}
NFBFM       .1/S                                    : Neutron Far Base Filtered    {F}
NNBFM       .1/S                                    : Neutron Near Base Filtered    {F}
NPCKLFM     .                                       : Neutron Porosity Caliper Potassium Filtered    {F}
NPCKSFM     .                                       : Neutron Porosity Sandstone Matrix,salinity and caliper corrected    {F}
NPCLFM      .                                       : Neutron Porosity Caliper Filtered    {F}
NPKLFM      .                                       : Neutron Porosity Potassium Filtered    {F}
NPLFM       .                                       : Neutron Porosity Limestone Filtered    {F}
NPSFM       .                                       : Neutron Porosity Sandstone Matrix    {F}
PUMPAVG     .BAR                                    :     {F}
RAAEHM      .OHMM                                   : Resistivity Attenuation - Apparent - CRIM - 2MHz    {F}
RAAELM      .OHMM                                   : Resistivity Attenuation - Apparent - CRIM - 400kHz    {F}
RAAESHM     .OHMM                                   : Resistivity Attenuation Short Spaced - Apparent - CRIM - 2HMz    {F}
RAAESLM     .OHMM                                   : Resistivity Attenuation Short Spaced - Apparent - CRIM - 400kHz    {F}
RACEHM      .OHMM                                   : Resistivity Attenuation - Corrected - CRIM - 2MHz    {F}
RACELM      .OHMM                                   : Resistivity Attenuation - Corrected - CRIM - 400kHz    {F}
RACESHM     .OHMM                                   : Resistivity Attenuation Short Spaced - Corrected - CRIM - 2MHz    {F}
RACESLM     .OHMM                                   : Resistivity Attenuation Short Spaced - Corrected - CRIM - 400kHz    {F}
ROPAVG      .M/HR                                   : Rate of Penetration    {F}
RPAEHM      .OHMM                                   : Resistivity Phase - Apparent - CRIM - 2MHz    {F}
RPAELM      .OHMM                                   : Resistivity Phase - Apparent - CRIM - 400kHz    {F}
RPAESHM     .OHMM                                   : Resistivity Phase Short Spaced - Apparent - CRIM - 2MHz    {F}
RPAESLM     .OHMM                                   : Resistivity Phase Short Spaced - Apparent - CRIM - 400kHz    {F}
RPCEHM      .OHMM                                   : Resistivity Phase - Corrected - CRIM - 2MHz    {F}
RPCELM      .OHMM                                   : Resistivity Phase - Corrected - CRIM - 400kHz    {F}
RPCESHM     .OHMM                                   : Resistivity Phase Short Spaced - Corrected - CRIM - 2MHz    {F}
RPCESLM     .OHMM                                   : Resistivity Phase Short Spaced - Corrected - CRIM - 400kHz    {F}
RPTHM       .M                                      : Resistivity Time Since Drilled    {F}
SSRPMAVM    .RPM                                    : Stick Slip RPM Average    {F}
SSRPMAXM    .RPM                                    : Stick Slip RPM Maximum    {F}
SSRPMINM    .RPM                                    : Stick Slip RPM Minimum    {F}
SURFRPM     .RPM                                    :     {F}
TCDM        .DEGC                                   : Downhole Temperature    {F}
TORQUEAV    .KN.M                                   :     {F}
TVD         .M                                      : True Vertical Depth    {F}
V2AVGXYM    .                                       : Valid2 Average Lateral Vibration - RMS    {F}
V2AVGZM2    .                                       :     {F}
V2MAXXYM    .                                       : Valid2 Maximum Lateral Vibration - RMS    {F}
V2MAXZM2    .                                       :     {F}
V2MINXYM    .                                       : Valid2 Minimum Lateral Vibration - RMS    {F}
V2MINZM2    .                                       :     {F}
V2SEVXYM    .                                       : Valid2 Lateral Vibration Severity Level    {F}
V2SEVZM     .                                       : Valid2 Axial Vibration Severity Level    {F}
WOBAVG      .T                                      :     {F}

~ASCII | CURVE
       3146.10,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,    -999.25000,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,       87.6585,     1363.5287,      0.323300,      0.371000,      0.329700,      0.337800,      0.345400,      0.392800,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,   -999.250000,     -999.2500,   -999.250000,     -999.2500,  -999.2500000,     -999.2500,     -999.2500,     -999.2500
       3146.20,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,    -999.25000,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,       87.4289,     1363.3319,      0.324600,      0.372300,      0.331100,      0.339100,      0.346800,      0.394200,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,   -999.250000,     -999.2500,   -999.250000,     -999.2500,  -999.2500000,     -999.2500,     -999.2500,     -999.2500
       3146.30,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,    -999.25000,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,       87.1994,     1363.1351,      0.325900,      0.373600,      0.332500,      0.340400,      0.348100,      0.395500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,   -999.250000,     -999.2500,   -999.250000,     -999.2500,  -999.2500000,     -999.2500,     -999.2500,     -999.2500
       3146.40,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,    -999.25000,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,       86.9019,     1362.8802,      0.327700,      0.375300,      0.334200,      0.342100,      0.349900,      0.397200,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,   -999.250000,     -999.2500,   -999.250000,     -999.2500,  -999.2500000,     -999.2500,     -999.2500,     -999.2500
       4770.60,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,        1.5578,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,      495.5188,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,        8.5000,        0.0000,     -999.2500,     -999.2500,     -999.2500,    -999.25000,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,   -999.250000,   -999.250000,   -999.250000,   -999.250000,   -999.250000,   -999.250000,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,     -999.2500,      159.3359,      163.1702,      155.8163,     -999.2500,      115.2496,     -999.2500,     -999.2500,        1.1681,      0.039801,        1.2406,      0.043101,        1.1093,     0.0348005,        2.0000,        0.0000,     -999.2500
