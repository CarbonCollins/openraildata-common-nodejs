## Typedefs

<dl>
<dt><a href="#tpl">tpl</a> : <code>String</code></dt>
<dd><p>A TIPLOC code used to identify a station or line parting.
For a comprehensive list of TIPLOC codes there is a currently (26/12/2017) activly maintained
db found at the provided link</p>
</dd>
<dt><a href="#act">act</a> : <code>String</code></dt>
<dd><p>An action code is used to determine what kind of action an operation is
performing. The value is pretty much always &#39;A&#39;, however, under rare circmstances it could be
a &#39;C&#39; or a &#39;D&#39; this should not happen though.</p>
</dd>
<dt><a href="#pta">pta</a> : <code>String</code></dt>
<dd><p>Normaly in the format of HH:MM which represents the Planned Time of Arrival. This
value is used on timetables as it is when trains are meant to arrive at that position on the
network.</p>
</dd>
<dt><a href="#ptd">ptd</a> : <code>String</code></dt>
<dd><p>Normaly in the format of HH:MM which represents the Planned Time of Departure. This
value is used on timetables as it is when trains are meant to depart from that position on the
network.</p>
</dd>
<dt><a href="#wta">wta</a> : <code>String</code></dt>
<dd><p>Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
This value is shows the time in which the train actualy arrived at that point on the network.</p>
</dd>
<dt><a href="#wtd">wtd</a> : <code>String</code></dt>
<dd><p>Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
This value is shows the time in which the train actualy arrived at that point on the network.</p>
</dd>
<dt><a href="#plat">plat</a> : <code>String</code></dt>
<dd><p>The identifier of a platform, this can be a number formatted as a string, a letter
or a combination of both e.g. <code>1</code>, <code>2A</code>, <code>C</code>.</p>
</dd>
<dt><a href="#platsup">platsup</a> : <code>Boolean</code></dt>
<dd><p>A boolean to determine if the platform identifier should be suppressed from public
view. This is used on the arrival displays as it is used to allow staff to perform train duties
before allowing the public to know which train to board. If this is set as true then the
platform identifier should not be displayed to the public.</p>
</dd>
<dt><a href="#category">category</a> : <code>String</code></dt>
<dd><p>details the type of association between two trains. This value can be either:
<code>JJ</code> for join, <code>VV</code> for devide, or <code>NP</code> for next.</p>
</dd>
<dt><a href="#uid">uid</a> : <code>String</code></dt>
<dd><p>a unique identifier for a train. Each train will have its own uid which can be used
to identify it on most data from the open rail data servers e.g. getting a schedule for a train.</p>
</dd>
<dt><a href="#rid">rid</a> : <code>String</code></dt>
<dd><p>an RTTI Train ID. Note that since this is an RID, the service must already exist
within Darwin. RTTI meaning Real Time Train Information</p>
</dd>
<dt><a href="#toc">toc</a> : <code>string</code></dt>
<dd><p>a Train Operating Company tring itendifier. These are normaly a 2 letter code used
to identify the company e.g. virgin trains <code>VT</code> or calledonian sleeper <code>CS</code>.</p>
</dd>
<dt><a href="#crs">crs</a> : <code>String</code></dt>
<dd><p>the Computer Reservation System code is a 3 letter alpha numeric code used to
identify a station on the network. It was previously known as nrs (National Reservation System)
An example would be Euston station which has a crs of <code>EUS</code>.</p>
</dd>
<dt><a href="#ssd">ssd</a> : <code>String</code></dt>
<dd><p>the Service Starting Date details which day the train service will be operating on.
this is in the format of YYYY-MM-DD</p>
</dd>
<dt><a href="#stationCategory">stationCategory</a> : <code>String</code></dt>
<dd><p>a catergory for station messages, this can be any of the following: <code>Train</code>,
<code>Station</code>, <code>Connections</code>, <code>System</code>, <code>Misc</code>, <code>PriorTrains</code>, or <code>PriorOthers</code>.</p>
</dd>
<dt><a href="#severity">severity</a> : <code>Number</code></dt>
<dd><p>a severity rating to detail how severe a message is. This value can be:
0 for normal, 1 for minor, 2 for major, and 3 for severe</p>
</dd>
</dl>

<a name="tpl"></a>

## tpl : <code>String</code>
A TIPLOC code used to identify a station or line parting.
For a comprehensive list of TIPLOC codes there is a currently (26/12/2017) activly maintained
db found at the provided link

**Kind**: global typedef  
**See**: [http://www.railwaycodes.org.uk/crs/CRS0.shtm](http://www.railwaycodes.org.uk/crs/CRS0.shtm)  
<a name="act"></a>

## act : <code>String</code>
An action code is used to determine what kind of action an operation is
performing. The value is pretty much always 'A', however, under rare circmstances it could be
a 'C' or a 'D' this should not happen though.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Train_Planning_Data_Structure](http://nrodwiki.rockshore.net/index.php/Train_Planning_Data_Structure)  
<a name="pta"></a>

## pta : <code>String</code>
Normaly in the format of HH:MM which represents the Planned Time of Arrival. This
value is used on timetables as it is when trains are meant to arrive at that position on the
network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  
<a name="ptd"></a>

## ptd : <code>String</code>
Normaly in the format of HH:MM which represents the Planned Time of Departure. This
value is used on timetables as it is when trains are meant to depart from that position on the
network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  
<a name="wta"></a>

## wta : <code>String</code>
Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
This value is shows the time in which the train actualy arrived at that point on the network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  
<a name="wtd"></a>

## wtd : <code>String</code>
Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
This value is shows the time in which the train actualy arrived at that point on the network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  
<a name="plat"></a>

## plat : <code>String</code>
The identifier of a platform, this can be a number formatted as a string, a letter
or a combination of both e.g. `1`, `2A`, `C`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers)  
<a name="platsup"></a>

## platsup : <code>Boolean</code>
A boolean to determine if the platform identifier should be suppressed from public
view. This is used on the arrival displays as it is used to allow staff to perform train duties
before allowing the public to know which train to board. If this is set as true then the
platform identifier should not be displayed to the public.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers)  
<a name="category"></a>

## category : <code>String</code>
details the type of association between two trains. This value can be either:
`JJ` for join, `VV` for devide, or `NP` for next.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Association_Records#Association_Record_Fields](http://nrodwiki.rockshore.net/index.php/Association_Records#Association_Record_Fields)  
<a name="uid"></a>

## uid : <code>String</code>
a unique identifier for a train. Each train will have its own uid which can be used
to identify it on most data from the open rail data servers e.g. getting a schedule for a train.

**Kind**: global typedef  
<a name="rid"></a>

## rid : <code>String</code>
an RTTI Train ID. Note that since this is an RID, the service must already exist
within Darwin. RTTI meaning Real Time Train Information

**Kind**: global typedef  
<a name="toc"></a>

## toc : <code>string</code>
a Train Operating Company tring itendifier. These are normaly a 2 letter code used
to identify the company e.g. virgin trains `VT` or calledonian sleeper `CS`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/TOC_Codes](http://nrodwiki.rockshore.net/index.php/TOC_Codes)  
<a name="crs"></a>

## crs : <code>String</code>
the Computer Reservation System code is a 3 letter alpha numeric code used to
identify a station on the network. It was previously known as nrs (National Reservation System)
An example would be Euston station which has a crs of `EUS`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/CRS](http://nrodwiki.rockshore.net/index.php/CRS)  
<a name="ssd"></a>

## ssd : <code>String</code>
the Service Starting Date details which day the train service will be operating on.
this is in the format of YYYY-MM-DD

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Schedule_Element](http://nrodwiki.rockshore.net/index.php/Darwin:Schedule_Element)  
<a name="stationCategory"></a>

## stationCategory : <code>String</code>
a catergory for station messages, this can be any of the following: `Train`,
`Station`, `Connections`, `System`, `Misc`, `PriorTrains`, or `PriorOthers`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Categories](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Categories)  
<a name="severity"></a>

## severity : <code>Number</code>
a severity rating to detail how severe a message is. This value can be:
0 for normal, 1 for minor, 2 for major, and 3 for severe

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities)  
