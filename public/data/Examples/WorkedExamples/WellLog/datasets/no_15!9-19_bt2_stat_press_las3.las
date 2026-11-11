~Version
VERS  .             3.0                                 : CWLS LOG ASCII STANDARD - VERSION 3.0
WRAP  .             NO                                  : One line per depth step
DLM   .             COMMA                               : Delimiter character between data columns
#Delimiting character ( SPACE TAB OR COMMA ).

~Well
#MNEM.UNIT          DATA                                DESCRIPTION
#----- ----        -----------------                   -----------
STRT  .M                3222.9000                       : FIRST INDEX VALUE
STOP  .M                4200.1000                       : LAST INDEX VALUE
STEP  .M                   0.0000                       : STEP OF INDEX
NULL  .             -999.25                             : NULL VALUE
COMP  .                                                 : COMPANY
WELL  .             NO_15/9-19_BT2                      : WELL
FLD   .                                                 : FIELD
LOC   .                                                 : LOCATION
SRVC  .                                                 : SERVICE COMPANY
CTRY  .                                                 : COUNTRY
PROV  .                                                 : PROVINCE
UWI   .                                                 : UNIQUE WELL ID
LIC   .                                                 : LICENSE NUMBER
STAT  .                                                 : STATE
CNTY  .                                                 : COUNTY
API   .                                                 : API NUMBER
DATE  .                                                 : LOG DATE
LATI  .                                                 : LATITUDE
LONG  .                                                 : LONGITUDE
GDAT  .                                                 : GEODETIC DATUM

~STAT_PRESS_PARAMETER 
#MNEM.UNIT                    VALUE                        DESCRIPTION
#--------------- ---         ------------                 -----------------
BOREHOLE_SIZE   .IN           8.5                         : Test comment - borehole
MUDTYPE         .             OBM                         : Test comment - mud type

~STAT_PRESS_DEFINITION 
#MNEM.UNIT                 LOG CODE                  CURVE DESCRIPTION
#----------- ----         ------------              -----------------
DEPTH       .M                                      :     {F}
COMMENT     .                                       : Initial comment    {S22}
DATE        .DATE                                   : Date    {DD-MMM-YYYY}
PRES_FORM   .BAR                                    : Formation pressure    {F}
PRES_HDRA   .BAR                                    : Hydrostatic pressure after    {F}
PRES_HDRB   .BAR                                    : Hydrostatic pressure before    {F}
PRES_MOBL   .MD/CP                                  : Mobility    {F}
PRES_QUAL   .UNITLESS                               : Pressure quality, Diskos code    {F}
RUN         .                                       : Run No    {S1}
TEST        .                                       : Test No    {F}
TOOL        .                                       : Tool    {S3}
TVDMSL      .M                                      : TVDMSL    {F}

~STAT_PRESS_DATA | STAT_PRESS_DEFINITION
     3222.9000,Very good test        ,16-Jan-1998,      225.0640,      341.7700,      342.4700,       40.2000,3.00,1,2.00,FMT,     2446.2400
     3241.0000,Very good test        ,16-Jan-1998,      226.5760,      343.2900,      343.3100,       44.0000,3.00,1,3.00,FMT,     2461.6499
     3267.0000,Very good test        ,16-Jan-1998,      228.6390,      346.5000,      346.3800,      219.7000,4.00,1,4.00,FMT,     2483.7400
     3304.1000,Very good test        ,16-Jan-1998,      231.6400,      350.6900,      350.5800,      350.9000,4.00,1,5.00,FMT,     2515.3401
     3330.1000,Very good test        ,16-Jan-1998,      233.9370,      354.1200,      353.9900,      123.0000,4.00,1,6.00,FMT,     2537.7100
     3362.3000,Very good test        ,16-Jan-1998,      236.6670,      358.7900,      358.4300,        6.7000,2.00,1,7.00,FMT,     2565.7300
     3653.2000,"Tight, aborted"      ,16-Jan-1998,     -999.2500,      396.0700,      396.3800,     -999.2500,1.00,1,8.00,FMT,     2808.4800
     4005.4000,"Tight, aborted"      ,16-Jan-1998,     -999.2500,      444.6200,      444.7400,     -999.2500,1.00,1,9.00,FMT,     3121.3999
     4037.3000,Very good test        ,16-Jan-1998,      339.9800,      449.0400,      448.9800,      102.2000,4.00,1,10.00,FMT,     3150.2800
     4043.3000,Good test             ,16-Jan-1998,      340.6500,      449.8500,      450.0000,        3.4000,2.00,1,11.00,FMT,     3155.7100
     4055.0000,Very good test        ,16-Jan-1998,      341.6930,      451.4400,      451.5500,       31.4000,3.00,1,12.00,FMT,     3166.2500
     4060.2000,Very good test        ,16-Jan-1998,      342.2500,      452.6500,      452.5400,       23.5000,3.00,1,13.00,FMT,     3170.9299
     4068.0000,Good test             ,16-Jan-1998,      343.0900,      453.5400,      453.5200,        3.6000,2.00,1,14.00,FMT,     3177.9500
     4074.1000,Very good test        ,16-Jan-1998,      343.4900,      454.5700,      454.7600,       57.0000,3.00,1,15.00,FMT,     3183.4299
     4091.3000,Very good test        ,16-Jan-1998,      345.2070,      457.3100,      457.2100,        4.8000,2.00,1,16.00,FMT,     3198.7200
     4097.5000,Good test             ,16-Jan-1998,      345.9710,      459.2200,      458.8600,        1.7000,2.00,1,17.00,FMT,     3204.2400
     4102.2000,Good test             ,16-Jan-1998,      346.3600,      459.8700,      459.2700,        1.9000,2.00,1,18.00,FMT,     3208.4099
     4106.2000,Very good test        ,16-Jan-1998,      346.5000,      459.8300,      459.8400,      169.0000,4.00,1,19.00,FMT,     3211.9099
     4106.3000,No seal               ,16-Jan-1998,     -999.2500,      462.0400,      463.4500,     -999.2500,0.00,1,31.00,FMT,     3212.0000
     4109.0000,No seal               ,16-Jan-1998,     -999.2500,      462.3500,      463.6000,     -999.2500,0.00,1,30.00,FMT,     3214.3601
     4109.2000,No seal               ,16-Jan-1998,     -999.2500,      462.4300,      462.8200,     -999.2500,0.00,1,29.00,FMT,     3214.5300
     4115.6000,Very good test        ,16-Jan-1998,      347.4000,      461.3300,      461.3100,      162.0000,4.00,1,20.00,FMT,     3220.1299
     4115.6000,No seal               ,16-Jan-1998,     -999.2500,      459.6100,      462.7200,     -999.2500,0.00,1,32.00,FMT,     3220.1299
     4125.2000,Very good test        ,16-Jan-1998,      348.2300,      462.6600,      462.5100,      194.3000,4.00,1,21.00,FMT,     3228.5200
     4134.0000,Very good test        ,16-Jan-1998,      349.0400,      463.6600,      463.8300,       80.6000,3.00,1,22.00,FMT,     3236.2100
     4152.1000,Very good test        ,16-Jan-1998,      350.7500,      466.6300,      466.6200,       24.1000,3.00,1,23.00,FMT,     3251.8899
     4160.1000,Very good test        ,16-Jan-1998,      351.4300,      467.6800,      467.8300,       15.9000,3.00,1,24.00,FMT,     3258.7800
     4162.7000,No seal               ,16-Jan-1998,     -999.2500,      467.6800,      467.9200,     -999.2500,0.00,1,25.00,FMT,     3261.0200
     4170.2000,Very good test        ,16-Jan-1998,      352.4900,      468.9200,      468.8400,       14.3000,3.00,1,26.00,FMT,     3267.4900
     4173.1000,Very good test        ,16-Jan-1998,      352.6670,      469.5600,      469.9500,       30.0000,3.00,1,27.00,FMT,     3269.9700
     4200.1000,No seal               ,16-Jan-1998,     -999.2500,      473.4300,      473.4200,     -999.2500,0.00,1,28.00,FMT,     3293.1001
