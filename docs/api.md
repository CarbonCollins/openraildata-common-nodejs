## Modules

<dl>
<dt><a href="#module_openrailuk/common">openrailuk/common</a></dt>
<dd><p>the openrailuk/common module is used to export various data classes used within
many of the openrailuk modules. This common package is used to remove duplicate copies of
each of these data classes and so that they are maintained in one place. Because of this there
is not much actual funcitonality within this module. Mixing functions are exposed which allow
other modules to mix extra functionality into the data classes in this module in order for the
classes to be identical wherever they are used.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Association">Association</a> ⇐ <code><a href="#module_openrailuk/common+Association">Association</a></code></dt>
<dd><p>A class for association data and helpful functions</p>
</dd>
<dt><a href="#Location">Location</a> ⇐ <code><a href="#module_openrailuk/common+Location">Location</a></code></dt>
<dd><p>A class for location information along with helpful functions</p>
</dd>
<dt><a href="#Schedule">Schedule</a> ⇐ <code><a href="#module_openrailuk/common+Schedule">Schedule</a></code></dt>
<dd><p>A class for location information along with helpful functions</p>
</dd>
<dt><a href="#Station">Station</a> ⇐ <code><a href="#module_openrailuk/common+Station">Station</a></code></dt>
<dd><p>a class for storing data about a station and to supply helpful functions for manipulating the data</p>
</dd>
<dt><a href="#StationMessage">StationMessage</a> ⇐ <code><a href="#module_openrailuk/common+StationMessage">StationMessage</a></code></dt>
<dd><p>A class for housing station messages</p>
</dd>
<dt><a href="#TrainOrder">TrainOrder</a> ⇐ <code><a href="#module_openrailuk/common+TrainOrder">TrainOrder</a></code></dt>
<dd><p>a class for storing trainOrder message and to provide helpfull functions</p>
</dd>
<dt><a href="#TrainStatus">TrainStatus</a> ⇐ <code><a href="#module_openrailuk/common+TrainStatus">TrainStatus</a></code></dt>
<dd><p>a class for train status messages</p>
</dd>
</dl>

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

<a name="module_openrailuk/common"></a>

## openrailuk/common
the openrailuk/common module is used to export various data classes used within
many of the openrailuk modules. This common package is used to remove duplicate copies of
each of these data classes and so that they are maintained in one place. Because of this there
is not much actual funcitonality within this module. Mixing functions are exposed which allow
other modules to mix extra functionality into the data classes in this module in order for the
classes to be identical wherever they are used.


* [openrailuk/common](#module_openrailuk/common)
    * _instance_
        * [.Association](#module_openrailuk/common+Association) : [<code>Association</code>](#module_openrailuk/common+Association)
            * _instance_
                * [.tiploc](#module_openrailuk/common+Association+tiploc) : [<code>tpl</code>](#tpl)
                * [.category](#module_openrailuk/common+Association+category) : [<code>category</code>](#category)
                * [.mainTrain](#module_openrailuk/common+Association+mainTrain) : <code>Object</code>
                * [.mainTrainId](#module_openrailuk/common+Association+mainTrainId) : [<code>rid</code>](#rid)
                * [.associatedTrain](#module_openrailuk/common+Association+associatedTrain) : <code>Object</code>
                * [.associatedTrainId](#module_openrailuk/common+Association+associatedTrainId) : [<code>rid</code>](#rid)
            * _inner_
                * [~isJoin()](#module_openrailuk/common+Association..isJoin) ⇒ <code>Boolean</code>
                * [~isSplit()](#module_openrailuk/common+Association..isSplit) ⇒ <code>Boolean</code>
                * [~isNextTrain()](#module_openrailuk/common+Association..isNextTrain) ⇒ <code>Boolean</code>
        * [.Location](#module_openrailuk/common+Location) : [<code>Location</code>](#module_openrailuk/common+Location)
            * _instance_
                * [.tiploc](#module_openrailuk/common+Location+tiploc) : [<code>tpl</code>](#tpl)
                * [.trainOperatingCompany](#module_openrailuk/common+Location+trainOperatingCompany) : [<code>toc</code>](#toc)
                * [.computerReservationSystem](#module_openrailuk/common+Location+computerReservationSystem) : [<code>crs</code>](#crs)
                * [.locationName](#module_openrailuk/common+Location+locationName) : <code>String</code>
            * _inner_
                * [~updateLocation(location)](#module_openrailuk/common+Location..updateLocation)
        * [.Schedule](#module_openrailuk/common+Schedule) : [<code>Schedule</code>](#module_openrailuk/common+Schedule)
            * [.rid](#module_openrailuk/common+Schedule+rid) : <code>String</code>
            * [.serviceStartingDate](#module_openrailuk/common+Schedule+serviceStartingDate) : [<code>ssd</code>](#ssd)
            * [.trainOperatingCompany](#module_openrailuk/common+Schedule+trainOperatingCompany) : [<code>toc</code>](#toc)
            * [.trainId](#module_openrailuk/common+Schedule+trainId) : <code>String</code>
            * [.uniqueID](#module_openrailuk/common+Schedule+uniqueID) : [<code>uid</code>](#uid)
            * [.origin](#module_openrailuk/common+Schedule+origin) : [<code>Station</code>](#Station)
            * [.passingPoints](#module_openrailuk/common+Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.intermediatePoints](#module_openrailuk/common+Schedule+intermediatePoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.operationalStops](#module_openrailuk/common+Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.destination](#module_openrailuk/common+Schedule+destination) : [<code>Station</code>](#Station)
        * [.Station](#module_openrailuk/common+Station) : [<code>Station</code>](#Station)
            * _instance_
                * [.tiploc](#module_openrailuk/common+Station+tiploc) : [<code>tpl</code>](#tpl)
                * [.action](#module_openrailuk/common+Station+action) : [<code>act</code>](#act)
                * [.plannedTimeOfArrival](#module_openrailuk/common+Station+plannedTimeOfArrival) : [<code>pta</code>](#pta)
                * [.plannedTimeOfDeparture](#module_openrailuk/common+Station+plannedTimeOfDeparture) : [<code>ptd</code>](#ptd)
                * [.workingTimeOfArrival](#module_openrailuk/common+Station+workingTimeOfArrival) : [<code>wta</code>](#wta)
                * [.workingTimeOfDeparture](#module_openrailuk/common+Station+workingTimeOfDeparture) : [<code>wtd</code>](#wtd)
                * [.operational](#module_openrailuk/common+Station+operational) : <code>Boolean</code>
                * [.platform](#module_openrailuk/common+Station+platform) : [<code>plat</code>](#plat)
            * _inner_
                * [~isPlatformSuppressed()](#module_openrailuk/common+Station..isPlatformSuppressed) ⇒ <code>Boolean</code>
        * [.StationMessage](#module_openrailuk/common+StationMessage) : [<code>StationMessage</code>](#StationMessage)
            * [.id](#module_openrailuk/common+StationMessage+id) : <code>String</code>
            * [.category](#module_openrailuk/common+StationMessage+category) : [<code>stationCategory</code>](#stationCategory)
            * [.message](#module_openrailuk/common+StationMessage+message) : <code>String</code>
            * [.severity](#module_openrailuk/common+StationMessage+severity) : <code>Number</code>
            * [.severityString](#module_openrailuk/common+StationMessage+severityString) : <code>String</code>
            * [.stations](#module_openrailuk/common+StationMessage+stations) : [<code>Array.&lt;Location&gt;</code>](#Location)
        * [.TrainOrder](#module_openrailuk/common+TrainOrder) : [<code>TrainOrder</code>](#TrainOrder)
            * _instance_
                * [.computerReservationSystem](#module_openrailuk/common+TrainOrder+computerReservationSystem) : [<code>crs</code>](#crs)
                * [.platform](#module_openrailuk/common+TrainOrder+platform) : [<code>plat</code>](#plat)
                * [.tiploc](#module_openrailuk/common+TrainOrder+tiploc) : [<code>tpl</code>](#tpl)
                * [.set](#module_openrailuk/common+TrainOrder+set) : <code>Object</code>
                * [.first](#module_openrailuk/common+TrainOrder+first) : <code>Object</code>
                * [.second](#module_openrailuk/common+TrainOrder+second) : <code>Object</code>
                * [.third](#module_openrailuk/common+TrainOrder+third) : <code>Object</code>
                * [.clear](#module_openrailuk/common+TrainOrder+clear) : <code>Object</code>
            * _inner_
                * [~isSet()](#module_openrailuk/common+TrainOrder..isSet) ⇒ <code>Boolean</code>
                * [~isClear()](#module_openrailuk/common+TrainOrder..isClear) ⇒ <code>Boolean</code>
        * [.TrainStatus](#module_openrailuk/common+TrainStatus) : [<code>TrainStatus</code>](#TrainStatus)
            * [.rid](#module_openrailuk/common+TrainStatus+rid) : [<code>rid</code>](#rid)
            * [.uniqueID](#module_openrailuk/common+TrainStatus+uniqueID) : [<code>uid</code>](#uid)
            * [.serviceStartingDate](#module_openrailuk/common+TrainStatus+serviceStartingDate) : [<code>ssd</code>](#ssd)
            * [.allLocations](#module_openrailuk/common+TrainStatus+allLocations) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * _inner_
        * [~associationMixer(mixin)](#module_openrailuk/common..associationMixer)
        * [~locationMixer(mixin)](#module_openrailuk/common..locationMixer)
        * [~scheduleMixer(mixin)](#module_openrailuk/common..scheduleMixer)
        * [~stationMixer(mixin)](#module_openrailuk/common..stationMixer)
        * [~stationMessageMixer(mixin)](#module_openrailuk/common..stationMessageMixer)
        * [~trainOrderMixer(mixin)](#module_openrailuk/common..trainOrderMixer)
        * [~trainStatusMixer(mixin)](#module_openrailuk/common..trainStatusMixer)


* * *

<a name="module_openrailuk/common+Association"></a>

### openrailuk/common.Association : [<code>Association</code>](#module_openrailuk/common+Association)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.Association](#module_openrailuk/common+Association) : [<code>Association</code>](#module_openrailuk/common+Association)
    * _instance_
        * [.tiploc](#module_openrailuk/common+Association+tiploc) : [<code>tpl</code>](#tpl)
        * [.category](#module_openrailuk/common+Association+category) : [<code>category</code>](#category)
        * [.mainTrain](#module_openrailuk/common+Association+mainTrain) : <code>Object</code>
        * [.mainTrainId](#module_openrailuk/common+Association+mainTrainId) : [<code>rid</code>](#rid)
        * [.associatedTrain](#module_openrailuk/common+Association+associatedTrain) : <code>Object</code>
        * [.associatedTrainId](#module_openrailuk/common+Association+associatedTrainId) : [<code>rid</code>](#rid)
    * _inner_
        * [~isJoin()](#module_openrailuk/common+Association..isJoin) ⇒ <code>Boolean</code>
        * [~isSplit()](#module_openrailuk/common+Association..isSplit) ⇒ <code>Boolean</code>
        * [~isNextTrain()](#module_openrailuk/common+Association..isNextTrain) ⇒ <code>Boolean</code>


* * *

<a name="module_openrailuk/common+Association+tiploc"></a>

#### association.tiploc : [<code>tpl</code>](#tpl)
gets the association tiploc code

**Kind**: instance property of [<code>Association</code>](#module_openrailuk/common+Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+category"></a>

#### association.category : [<code>category</code>](#category)
gets the association category

**Kind**: instance property of [<code>Association</code>](#module_openrailuk/common+Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+mainTrain"></a>

#### association.mainTrain : <code>Object</code>
gets the main train information

**Kind**: instance property of [<code>Association</code>](#module_openrailuk/common+Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+mainTrainId"></a>

#### association.mainTrainId : [<code>rid</code>](#rid)
gets the main train rid

**Kind**: instance property of [<code>Association</code>](#module_openrailuk/common+Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+associatedTrain"></a>

#### association.associatedTrain : <code>Object</code>
gets the assoc train information

**Kind**: instance property of [<code>Association</code>](#module_openrailuk/common+Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+associatedTrainId"></a>

#### association.associatedTrainId : [<code>rid</code>](#rid)
gets the assoc train rid

**Kind**: instance property of [<code>Association</code>](#module_openrailuk/common+Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association..isJoin"></a>

#### Association~isJoin() ⇒ <code>Boolean</code>
checks to see if the association is a train join type

**Kind**: inner method of [<code>Association</code>](#module_openrailuk/common+Association)  
**See**: category  

* * *

<a name="module_openrailuk/common+Association..isSplit"></a>

#### Association~isSplit() ⇒ <code>Boolean</code>
checks to see if the association is a train split type

**Kind**: inner method of [<code>Association</code>](#module_openrailuk/common+Association)  
**See**: category  

* * *

<a name="module_openrailuk/common+Association..isNextTrain"></a>

#### Association~isNextTrain() ⇒ <code>Boolean</code>
checks to see if the association is a next train type

**Kind**: inner method of [<code>Association</code>](#module_openrailuk/common+Association)  
**See**: category  

* * *

<a name="module_openrailuk/common+Location"></a>

### openrailuk/common.Location : [<code>Location</code>](#module_openrailuk/common+Location)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.Location](#module_openrailuk/common+Location) : [<code>Location</code>](#module_openrailuk/common+Location)
    * _instance_
        * [.tiploc](#module_openrailuk/common+Location+tiploc) : [<code>tpl</code>](#tpl)
        * [.trainOperatingCompany](#module_openrailuk/common+Location+trainOperatingCompany) : [<code>toc</code>](#toc)
        * [.computerReservationSystem](#module_openrailuk/common+Location+computerReservationSystem) : [<code>crs</code>](#crs)
        * [.locationName](#module_openrailuk/common+Location+locationName) : <code>String</code>
    * _inner_
        * [~updateLocation(location)](#module_openrailuk/common+Location..updateLocation)


* * *

<a name="module_openrailuk/common+Location+tiploc"></a>

#### location.tiploc : [<code>tpl</code>](#tpl)
returns the locations tiploc code

**Kind**: instance property of [<code>Location</code>](#module_openrailuk/common+Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location+trainOperatingCompany"></a>

#### location.trainOperatingCompany : [<code>toc</code>](#toc)
returns the locations operating company

**Kind**: instance property of [<code>Location</code>](#module_openrailuk/common+Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location+computerReservationSystem"></a>

#### location.computerReservationSystem : [<code>crs</code>](#crs)
returns the locations crs (Computer Reservation System)

**Kind**: instance property of [<code>Location</code>](#module_openrailuk/common+Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location+locationName"></a>

#### location.locationName : <code>String</code>
the name of the location in a human readable format e.g. `Euston`

**Kind**: instance property of [<code>Location</code>](#module_openrailuk/common+Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location..updateLocation"></a>

#### Location~updateLocation(location)
Updates the location wiht a new raw data

**Kind**: inner method of [<code>Location</code>](#module_openrailuk/common+Location)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | the raw location object to be parsed |


* * *

<a name="module_openrailuk/common+Schedule"></a>

### openrailuk/common.Schedule : [<code>Schedule</code>](#module_openrailuk/common+Schedule)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.Schedule](#module_openrailuk/common+Schedule) : [<code>Schedule</code>](#module_openrailuk/common+Schedule)
    * [.rid](#module_openrailuk/common+Schedule+rid) : <code>String</code>
    * [.serviceStartingDate](#module_openrailuk/common+Schedule+serviceStartingDate) : [<code>ssd</code>](#ssd)
    * [.trainOperatingCompany](#module_openrailuk/common+Schedule+trainOperatingCompany) : [<code>toc</code>](#toc)
    * [.trainId](#module_openrailuk/common+Schedule+trainId) : <code>String</code>
    * [.uniqueID](#module_openrailuk/common+Schedule+uniqueID) : [<code>uid</code>](#uid)
    * [.origin](#module_openrailuk/common+Schedule+origin) : [<code>Station</code>](#Station)
    * [.passingPoints](#module_openrailuk/common+Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.intermediatePoints](#module_openrailuk/common+Schedule+intermediatePoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.operationalStops](#module_openrailuk/common+Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.destination](#module_openrailuk/common+Schedule+destination) : [<code>Station</code>](#Station)


* * *

<a name="module_openrailuk/common+Schedule+rid"></a>

#### schedule.rid : <code>String</code>
gets the trains rid

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+serviceStartingDate"></a>

#### schedule.serviceStartingDate : [<code>ssd</code>](#ssd)
gets the trains ssd

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+trainOperatingCompany"></a>

#### schedule.trainOperatingCompany : [<code>toc</code>](#toc)
gets the trains toc

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+trainId"></a>

#### schedule.trainId : <code>String</code>
gets the trains trainId

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+uniqueID"></a>

#### schedule.uniqueID : [<code>uid</code>](#uid)
gets the schedule train uid

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+origin"></a>

#### schedule.origin : [<code>Station</code>](#Station)
returns the origin or the operational origin

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+passingPoints"></a>

#### schedule.passingPoints : [<code>Array.&lt;Station&gt;</code>](#Station)
returns all of the passing points in which the train passes

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+intermediatePoints"></a>

#### schedule.intermediatePoints : [<code>Array.&lt;Station&gt;</code>](#Station)
returns all intermediate passenger stops

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+operationalStops"></a>

#### schedule.operationalStops : [<code>Array.&lt;Station&gt;</code>](#Station)
returns all operational intermediate stops

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+destination"></a>

#### schedule.destination : [<code>Station</code>](#Station)
returns the destination or operational destination

**Kind**: instance property of [<code>Schedule</code>](#module_openrailuk/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station"></a>

### openrailuk/common.Station : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.Station](#module_openrailuk/common+Station) : [<code>Station</code>](#Station)
    * _instance_
        * [.tiploc](#module_openrailuk/common+Station+tiploc) : [<code>tpl</code>](#tpl)
        * [.action](#module_openrailuk/common+Station+action) : [<code>act</code>](#act)
        * [.plannedTimeOfArrival](#module_openrailuk/common+Station+plannedTimeOfArrival) : [<code>pta</code>](#pta)
        * [.plannedTimeOfDeparture](#module_openrailuk/common+Station+plannedTimeOfDeparture) : [<code>ptd</code>](#ptd)
        * [.workingTimeOfArrival](#module_openrailuk/common+Station+workingTimeOfArrival) : [<code>wta</code>](#wta)
        * [.workingTimeOfDeparture](#module_openrailuk/common+Station+workingTimeOfDeparture) : [<code>wtd</code>](#wtd)
        * [.operational](#module_openrailuk/common+Station+operational) : <code>Boolean</code>
        * [.platform](#module_openrailuk/common+Station+platform) : [<code>plat</code>](#plat)
    * _inner_
        * [~isPlatformSuppressed()](#module_openrailuk/common+Station..isPlatformSuppressed) ⇒ <code>Boolean</code>


* * *

<a name="module_openrailuk/common+Station+tiploc"></a>

#### station.tiploc : [<code>tpl</code>](#tpl)
gets the TIPLOC code for this station

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+action"></a>

#### station.action : [<code>act</code>](#act)
gets the action at this station

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+plannedTimeOfArrival"></a>

#### station.plannedTimeOfArrival : [<code>pta</code>](#pta)
gets the planned time of arrival (public facing)

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+plannedTimeOfDeparture"></a>

#### station.plannedTimeOfDeparture : [<code>ptd</code>](#ptd)
gets the planned time of departure (public facing)

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+workingTimeOfArrival"></a>

#### station.workingTimeOfArrival : [<code>wta</code>](#wta)
gets the working time of arrival for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+workingTimeOfDeparture"></a>

#### station.workingTimeOfDeparture : [<code>wtd</code>](#wtd)
gets the working time of departure for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+operational"></a>

#### station.operational : <code>Boolean</code>
is the station an operational station

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+platform"></a>

#### station.platform : [<code>plat</code>](#plat)
is the platform number (if known)

**Kind**: instance property of [<code>Station</code>](#module_openrailuk/common+Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station..isPlatformSuppressed"></a>

#### Station~isPlatformSuppressed() ⇒ <code>Boolean</code>
determines if the platform is to be suppressed form public view

**Kind**: inner method of [<code>Station</code>](#module_openrailuk/common+Station)  

* * *

<a name="module_openrailuk/common+StationMessage"></a>

### openrailuk/common.StationMessage : [<code>StationMessage</code>](#StationMessage)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.StationMessage](#module_openrailuk/common+StationMessage) : [<code>StationMessage</code>](#StationMessage)
    * [.id](#module_openrailuk/common+StationMessage+id) : <code>String</code>
    * [.category](#module_openrailuk/common+StationMessage+category) : [<code>stationCategory</code>](#stationCategory)
    * [.message](#module_openrailuk/common+StationMessage+message) : <code>String</code>
    * [.severity](#module_openrailuk/common+StationMessage+severity) : <code>Number</code>
    * [.severityString](#module_openrailuk/common+StationMessage+severityString) : <code>String</code>
    * [.stations](#module_openrailuk/common+StationMessage+stations) : [<code>Array.&lt;Location&gt;</code>](#Location)


* * *

<a name="module_openrailuk/common+StationMessage+id"></a>

#### stationMessage.id : <code>String</code>
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+category"></a>

#### stationMessage.category : [<code>stationCategory</code>](#stationCategory)
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+message"></a>

#### stationMessage.message : <code>String</code>
gets the message of the station message

**Kind**: instance property of [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+severity"></a>

#### stationMessage.severity : <code>Number</code>
gets the numerical severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+severityString"></a>

#### stationMessage.severityString : <code>String</code>
get the readable format of the severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  
**Read only**: true  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities)  

* * *

<a name="module_openrailuk/common+StationMessage+stations"></a>

#### stationMessage.stations : [<code>Array.&lt;Location&gt;</code>](#Location)
gets the list of stations that the station message applied too

**Kind**: instance property of [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder"></a>

### openrailuk/common.TrainOrder : [<code>TrainOrder</code>](#TrainOrder)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.TrainOrder](#module_openrailuk/common+TrainOrder) : [<code>TrainOrder</code>](#TrainOrder)
    * _instance_
        * [.computerReservationSystem](#module_openrailuk/common+TrainOrder+computerReservationSystem) : [<code>crs</code>](#crs)
        * [.platform](#module_openrailuk/common+TrainOrder+platform) : [<code>plat</code>](#plat)
        * [.tiploc](#module_openrailuk/common+TrainOrder+tiploc) : [<code>tpl</code>](#tpl)
        * [.set](#module_openrailuk/common+TrainOrder+set) : <code>Object</code>
        * [.first](#module_openrailuk/common+TrainOrder+first) : <code>Object</code>
        * [.second](#module_openrailuk/common+TrainOrder+second) : <code>Object</code>
        * [.third](#module_openrailuk/common+TrainOrder+third) : <code>Object</code>
        * [.clear](#module_openrailuk/common+TrainOrder+clear) : <code>Object</code>
    * _inner_
        * [~isSet()](#module_openrailuk/common+TrainOrder..isSet) ⇒ <code>Boolean</code>
        * [~isClear()](#module_openrailuk/common+TrainOrder..isClear) ⇒ <code>Boolean</code>


* * *

<a name="module_openrailuk/common+TrainOrder+computerReservationSystem"></a>

#### trainOrder.computerReservationSystem : [<code>crs</code>](#crs)
gets the crs (computer reservation system) code

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+platform"></a>

#### trainOrder.platform : [<code>plat</code>](#plat)
gets the platform identifier

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+tiploc"></a>

#### trainOrder.tiploc : [<code>tpl</code>](#tpl)
gets the tiploc code

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+set"></a>

#### trainOrder.set : <code>Object</code>
gets all of the set information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+first"></a>

#### trainOrder.first : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+second"></a>

#### trainOrder.second : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+third"></a>

#### trainOrder.third : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+clear"></a>

#### trainOrder.clear : <code>Object</code>
gets all of the clear information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder..isSet"></a>

#### TrainOrder~isSet() ⇒ <code>Boolean</code>
determines if the train order is a set type

**Kind**: inner method of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder..isClear"></a>

#### TrainOrder~isClear() ⇒ <code>Boolean</code>
determines if the train order is a clear type

**Kind**: inner method of [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus"></a>

### openrailuk/common.TrainStatus : [<code>TrainStatus</code>](#TrainStatus)
**Kind**: instance property of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Read only**: true  

* [.TrainStatus](#module_openrailuk/common+TrainStatus) : [<code>TrainStatus</code>](#TrainStatus)
    * [.rid](#module_openrailuk/common+TrainStatus+rid) : [<code>rid</code>](#rid)
    * [.uniqueID](#module_openrailuk/common+TrainStatus+uniqueID) : [<code>uid</code>](#uid)
    * [.serviceStartingDate](#module_openrailuk/common+TrainStatus+serviceStartingDate) : [<code>ssd</code>](#ssd)
    * [.allLocations](#module_openrailuk/common+TrainStatus+allLocations) : [<code>Array.&lt;Station&gt;</code>](#Station)


* * *

<a name="module_openrailuk/common+TrainStatus+rid"></a>

#### trainStatus.rid : [<code>rid</code>](#rid)
gets the rid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus+uniqueID"></a>

#### trainStatus.uniqueID : [<code>uid</code>](#uid)
gets the schedule uid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus+serviceStartingDate"></a>

#### trainStatus.serviceStartingDate : [<code>ssd</code>](#ssd)
gets the ssd of the train

**Kind**: instance property of [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus+allLocations"></a>

#### trainStatus.allLocations : [<code>Array.&lt;Station&gt;</code>](#Station)
gets all of the locations that this train status applies to

**Kind**: instance property of [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common..associationMixer"></a>

### openrailuk/common~associationMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>Association</code>](#Association)  
**See**: [Association](./association.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Association model |


* * *

<a name="module_openrailuk/common..locationMixer"></a>

### openrailuk/common~locationMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>Location</code>](#Location)  
**See**: [Location](./location.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Location model |


* * *

<a name="module_openrailuk/common..scheduleMixer"></a>

### openrailuk/common~scheduleMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>Schedule</code>](#Schedule)  
**See**: [Schedule](./schedule.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Schedule model |


* * *

<a name="module_openrailuk/common..stationMixer"></a>

### openrailuk/common~stationMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>Station</code>](#Station)  
**See**: [Station](./station.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Station model |


* * *

<a name="module_openrailuk/common..stationMessageMixer"></a>

### openrailuk/common~stationMessageMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>StationMessage</code>](#StationMessage)  
**See**: [StationMessage](./stationMessage.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the StationMessage model |


* * *

<a name="module_openrailuk/common..trainOrderMixer"></a>

### openrailuk/common~trainOrderMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>TrainOrder</code>](#TrainOrder)  
**See**: [TrainOrder](./trainOrder.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the TrainOrder model |


* * *

<a name="module_openrailuk/common..trainStatusMixer"></a>

### openrailuk/common~trainStatusMixer(mixin)
**Kind**: inner method of [<code>openrailuk/common</code>](#module_openrailuk/common)  
**Mixes**: [<code>TrainStatus</code>](#TrainStatus)  
**See**: [TrainStatus](./trainStatus.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the TrainStatus model |


* * *

<a name="Association"></a>

## Association ⇐ [<code>Association</code>](#module_openrailuk/common+Association)
A class for association data and helpful functions

**Kind**: global class  
**Extends**: [<code>Association</code>](#module_openrailuk/common+Association)  

* [Association](#Association) ⇐ [<code>Association</code>](#module_openrailuk/common+Association)
    * [new Association(payload)](#new_Association_new)
    * [.tiploc](#module_openrailuk/common+Association+tiploc) : [<code>tpl</code>](#tpl)
    * [.category](#module_openrailuk/common+Association+category) : [<code>category</code>](#category)
    * [.mainTrain](#module_openrailuk/common+Association+mainTrain) : <code>Object</code>
    * [.mainTrainId](#module_openrailuk/common+Association+mainTrainId) : [<code>rid</code>](#rid)
    * [.associatedTrain](#module_openrailuk/common+Association+associatedTrain) : <code>Object</code>
    * [.associatedTrainId](#module_openrailuk/common+Association+associatedTrainId) : [<code>rid</code>](#rid)


* * *

<a name="new_Association_new"></a>

### new Association(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | the raw json association message object |


* * *

<a name="module_openrailuk/common+Association+tiploc"></a>

### association.tiploc : [<code>tpl</code>](#tpl)
gets the association tiploc code

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+category"></a>

### association.category : [<code>category</code>](#category)
gets the association category

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+mainTrain"></a>

### association.mainTrain : <code>Object</code>
gets the main train information

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+mainTrainId"></a>

### association.mainTrainId : [<code>rid</code>](#rid)
gets the main train rid

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+associatedTrain"></a>

### association.associatedTrain : <code>Object</code>
gets the assoc train information

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Association+associatedTrainId"></a>

### association.associatedTrainId : [<code>rid</code>](#rid)
gets the assoc train rid

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="Location"></a>

## Location ⇐ [<code>Location</code>](#module_openrailuk/common+Location)
A class for location information along with helpful functions

**Kind**: global class  
**Extends**: [<code>Location</code>](#module_openrailuk/common+Location)  

* [Location](#Location) ⇐ [<code>Location</code>](#module_openrailuk/common+Location)
    * [new Location(loc)](#new_Location_new)
    * [.tiploc](#module_openrailuk/common+Location+tiploc) : [<code>tpl</code>](#tpl)
    * [.trainOperatingCompany](#module_openrailuk/common+Location+trainOperatingCompany) : [<code>toc</code>](#toc)
    * [.computerReservationSystem](#module_openrailuk/common+Location+computerReservationSystem) : [<code>crs</code>](#crs)
    * [.locationName](#module_openrailuk/common+Location+locationName) : <code>String</code>


* * *

<a name="new_Location_new"></a>

### new Location(loc)

| Param | Type | Description |
| --- | --- | --- |
| loc | <code>Object</code> | the raw location object to be parsed |


* * *

<a name="module_openrailuk/common+Location+tiploc"></a>

### location.tiploc : [<code>tpl</code>](#tpl)
returns the locations tiploc code

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location+trainOperatingCompany"></a>

### location.trainOperatingCompany : [<code>toc</code>](#toc)
returns the locations operating company

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location+computerReservationSystem"></a>

### location.computerReservationSystem : [<code>crs</code>](#crs)
returns the locations crs (Computer Reservation System)

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Location+locationName"></a>

### location.locationName : <code>String</code>
the name of the location in a human readable format e.g. `Euston`

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="Schedule"></a>

## Schedule ⇐ [<code>Schedule</code>](#module_openrailuk/common+Schedule)
A class for location information along with helpful functions

**Kind**: global class  
**Extends**: [<code>Schedule</code>](#module_openrailuk/common+Schedule)  

* [Schedule](#Schedule) ⇐ [<code>Schedule</code>](#module_openrailuk/common+Schedule)
    * [new Schedule(payload)](#new_Schedule_new)
    * [.rid](#module_openrailuk/common+Schedule+rid) : <code>String</code>
    * [.serviceStartingDate](#module_openrailuk/common+Schedule+serviceStartingDate) : [<code>ssd</code>](#ssd)
    * [.trainOperatingCompany](#module_openrailuk/common+Schedule+trainOperatingCompany) : [<code>toc</code>](#toc)
    * [.trainId](#module_openrailuk/common+Schedule+trainId) : <code>String</code>
    * [.uniqueID](#module_openrailuk/common+Schedule+uniqueID) : [<code>uid</code>](#uid)
    * [.origin](#module_openrailuk/common+Schedule+origin) : [<code>Station</code>](#Station)
    * [.passingPoints](#module_openrailuk/common+Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.intermediatePoints](#module_openrailuk/common+Schedule+intermediatePoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.operationalStops](#module_openrailuk/common+Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.destination](#module_openrailuk/common+Schedule+destination) : [<code>Station</code>](#Station)


* * *

<a name="new_Schedule_new"></a>

### new Schedule(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | raw schedule object to be parsed |


* * *

<a name="module_openrailuk/common+Schedule+rid"></a>

### schedule.rid : <code>String</code>
gets the trains rid

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+serviceStartingDate"></a>

### schedule.serviceStartingDate : [<code>ssd</code>](#ssd)
gets the trains ssd

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+trainOperatingCompany"></a>

### schedule.trainOperatingCompany : [<code>toc</code>](#toc)
gets the trains toc

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+trainId"></a>

### schedule.trainId : <code>String</code>
gets the trains trainId

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+uniqueID"></a>

### schedule.uniqueID : [<code>uid</code>](#uid)
gets the schedule train uid

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+origin"></a>

### schedule.origin : [<code>Station</code>](#Station)
returns the origin or the operational origin

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+passingPoints"></a>

### schedule.passingPoints : [<code>Array.&lt;Station&gt;</code>](#Station)
returns all of the passing points in which the train passes

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+intermediatePoints"></a>

### schedule.intermediatePoints : [<code>Array.&lt;Station&gt;</code>](#Station)
returns all intermediate passenger stops

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+operationalStops"></a>

### schedule.operationalStops : [<code>Array.&lt;Station&gt;</code>](#Station)
returns all operational intermediate stops

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Schedule+destination"></a>

### schedule.destination : [<code>Station</code>](#Station)
returns the destination or operational destination

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="Station"></a>

## Station ⇐ [<code>Station</code>](#module_openrailuk/common+Station)
a class for storing data about a station and to supply helpful functions for manipulating the data

**Kind**: global class  
**Extends**: [<code>Station</code>](#module_openrailuk/common+Station)  

* [Station](#Station) ⇐ [<code>Station</code>](#module_openrailuk/common+Station)
    * [new Station(payload, [operational])](#new_Station_new)
    * [.tiploc](#module_openrailuk/common+Station+tiploc) : [<code>tpl</code>](#tpl)
    * [.action](#module_openrailuk/common+Station+action) : [<code>act</code>](#act)
    * [.plannedTimeOfArrival](#module_openrailuk/common+Station+plannedTimeOfArrival) : [<code>pta</code>](#pta)
    * [.plannedTimeOfDeparture](#module_openrailuk/common+Station+plannedTimeOfDeparture) : [<code>ptd</code>](#ptd)
    * [.workingTimeOfArrival](#module_openrailuk/common+Station+workingTimeOfArrival) : [<code>wta</code>](#wta)
    * [.workingTimeOfDeparture](#module_openrailuk/common+Station+workingTimeOfDeparture) : [<code>wtd</code>](#wtd)
    * [.operational](#module_openrailuk/common+Station+operational) : <code>Boolean</code>
    * [.platform](#module_openrailuk/common+Station+platform) : [<code>plat</code>](#plat)


* * *

<a name="new_Station_new"></a>

### new Station(payload, [operational])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| payload | <code>Object</code> |  | a raw object containing the station information |
| [operational] | <code>Boolean</code> | <code>false</code> | an optional boolean to specify if the station is an operational stop |


* * *

<a name="module_openrailuk/common+Station+tiploc"></a>

### station.tiploc : [<code>tpl</code>](#tpl)
gets the TIPLOC code for this station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+action"></a>

### station.action : [<code>act</code>](#act)
gets the action at this station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+plannedTimeOfArrival"></a>

### station.plannedTimeOfArrival : [<code>pta</code>](#pta)
gets the planned time of arrival (public facing)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+plannedTimeOfDeparture"></a>

### station.plannedTimeOfDeparture : [<code>ptd</code>](#ptd)
gets the planned time of departure (public facing)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+workingTimeOfArrival"></a>

### station.workingTimeOfArrival : [<code>wta</code>](#wta)
gets the working time of arrival for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+workingTimeOfDeparture"></a>

### station.workingTimeOfDeparture : [<code>wtd</code>](#wtd)
gets the working time of departure for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+operational"></a>

### station.operational : <code>Boolean</code>
is the station an operational station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+Station+platform"></a>

### station.platform : [<code>plat</code>](#plat)
is the platform number (if known)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="StationMessage"></a>

## StationMessage ⇐ [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)
A class for housing station messages

**Kind**: global class  
**Extends**: [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)  

* [StationMessage](#StationMessage) ⇐ [<code>StationMessage</code>](#module_openrailuk/common+StationMessage)
    * [new StationMessage(payload)](#new_StationMessage_new)
    * [.id](#module_openrailuk/common+StationMessage+id) : <code>String</code>
    * [.category](#module_openrailuk/common+StationMessage+category) : [<code>stationCategory</code>](#stationCategory)
    * [.message](#module_openrailuk/common+StationMessage+message) : <code>String</code>
    * [.severity](#module_openrailuk/common+StationMessage+severity) : <code>Number</code>
    * [.severityString](#module_openrailuk/common+StationMessage+severityString) : <code>String</code>
    * [.stations](#module_openrailuk/common+StationMessage+stations) : [<code>Array.&lt;Location&gt;</code>](#Location)


* * *

<a name="new_StationMessage_new"></a>

### new StationMessage(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |


* * *

<a name="module_openrailuk/common+StationMessage+id"></a>

### stationMessage.id : <code>String</code>
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+category"></a>

### stationMessage.category : [<code>stationCategory</code>](#stationCategory)
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+message"></a>

### stationMessage.message : <code>String</code>
gets the message of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+severity"></a>

### stationMessage.severity : <code>Number</code>
gets the numerical severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+StationMessage+severityString"></a>

### stationMessage.severityString : <code>String</code>
get the readable format of the severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities)  

* * *

<a name="module_openrailuk/common+StationMessage+stations"></a>

### stationMessage.stations : [<code>Array.&lt;Location&gt;</code>](#Location)
gets the list of stations that the station message applied too

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="TrainOrder"></a>

## TrainOrder ⇐ [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)
a class for storing trainOrder message and to provide helpfull functions

**Kind**: global class  
**Extends**: [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)  

* [TrainOrder](#TrainOrder) ⇐ [<code>TrainOrder</code>](#module_openrailuk/common+TrainOrder)
    * [new TrainOrder(payload)](#new_TrainOrder_new)
    * [.computerReservationSystem](#module_openrailuk/common+TrainOrder+computerReservationSystem) : [<code>crs</code>](#crs)
    * [.platform](#module_openrailuk/common+TrainOrder+platform) : [<code>plat</code>](#plat)
    * [.tiploc](#module_openrailuk/common+TrainOrder+tiploc) : [<code>tpl</code>](#tpl)
    * [.set](#module_openrailuk/common+TrainOrder+set) : <code>Object</code>
    * [.first](#module_openrailuk/common+TrainOrder+first) : <code>Object</code>
    * [.second](#module_openrailuk/common+TrainOrder+second) : <code>Object</code>
    * [.third](#module_openrailuk/common+TrainOrder+third) : <code>Object</code>
    * [.clear](#module_openrailuk/common+TrainOrder+clear) : <code>Object</code>


* * *

<a name="new_TrainOrder_new"></a>

### new TrainOrder(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |


* * *

<a name="module_openrailuk/common+TrainOrder+computerReservationSystem"></a>

### trainOrder.computerReservationSystem : [<code>crs</code>](#crs)
gets the crs (computer reservation system) code

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+platform"></a>

### trainOrder.platform : [<code>plat</code>](#plat)
gets the platform identifier

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+tiploc"></a>

### trainOrder.tiploc : [<code>tpl</code>](#tpl)
gets the tiploc code

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+set"></a>

### trainOrder.set : <code>Object</code>
gets all of the set information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+first"></a>

### trainOrder.first : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+second"></a>

### trainOrder.second : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+third"></a>

### trainOrder.third : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainOrder+clear"></a>

### trainOrder.clear : <code>Object</code>
gets all of the clear information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="TrainStatus"></a>

## TrainStatus ⇐ [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)
a class for train status messages

**Kind**: global class  
**Extends**: [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)  

* [TrainStatus](#TrainStatus) ⇐ [<code>TrainStatus</code>](#module_openrailuk/common+TrainStatus)
    * [new TrainStatus(payload)](#new_TrainStatus_new)
    * [.rid](#module_openrailuk/common+TrainStatus+rid) : [<code>rid</code>](#rid)
    * [.uniqueID](#module_openrailuk/common+TrainStatus+uniqueID) : [<code>uid</code>](#uid)
    * [.serviceStartingDate](#module_openrailuk/common+TrainStatus+serviceStartingDate) : [<code>ssd</code>](#ssd)
    * [.allLocations](#module_openrailuk/common+TrainStatus+allLocations) : [<code>Array.&lt;Station&gt;</code>](#Station)


* * *

<a name="new_TrainStatus_new"></a>

### new TrainStatus(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | the raw train status message |


* * *

<a name="module_openrailuk/common+TrainStatus+rid"></a>

### trainStatus.rid : [<code>rid</code>](#rid)
gets the rid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus+uniqueID"></a>

### trainStatus.uniqueID : [<code>uid</code>](#uid)
gets the schedule uid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus+serviceStartingDate"></a>

### trainStatus.serviceStartingDate : [<code>ssd</code>](#ssd)
gets the ssd of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="module_openrailuk/common+TrainStatus+allLocations"></a>

### trainStatus.allLocations : [<code>Array.&lt;Station&gt;</code>](#Station)
gets all of the locations that this train status applies to

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="tpl"></a>

## tpl : <code>String</code>
A TIPLOC code used to identify a station or line parting.
For a comprehensive list of TIPLOC codes there is a currently (26/12/2017) activly maintained
db found at the provided link

**Kind**: global typedef  
**See**: [http://www.railwaycodes.org.uk/crs/CRS0.shtm](http://www.railwaycodes.org.uk/crs/CRS0.shtm)  

* * *

<a name="act"></a>

## act : <code>String</code>
An action code is used to determine what kind of action an operation is
performing. The value is pretty much always 'A', however, under rare circmstances it could be
a 'C' or a 'D' this should not happen though.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Train_Planning_Data_Structure](http://nrodwiki.rockshore.net/index.php/Train_Planning_Data_Structure)  

* * *

<a name="pta"></a>

## pta : <code>String</code>
Normaly in the format of HH:MM which represents the Planned Time of Arrival. This
value is used on timetables as it is when trains are meant to arrive at that position on the
network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  

* * *

<a name="ptd"></a>

## ptd : <code>String</code>
Normaly in the format of HH:MM which represents the Planned Time of Departure. This
value is used on timetables as it is when trains are meant to depart from that position on the
network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  

* * *

<a name="wta"></a>

## wta : <code>String</code>
Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
This value is shows the time in which the train actualy arrived at that point on the network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  

* * *

<a name="wtd"></a>

## wtd : <code>String</code>
Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
This value is shows the time in which the train actualy arrived at that point on the network.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times)  

* * *

<a name="plat"></a>

## plat : <code>String</code>
The identifier of a platform, this can be a number formatted as a string, a letter
or a combination of both e.g. `1`, `2A`, `C`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers)  

* * *

<a name="platsup"></a>

## platsup : <code>Boolean</code>
A boolean to determine if the platform identifier should be suppressed from public
view. This is used on the arrival displays as it is used to allow staff to perform train duties
before allowing the public to know which train to board. If this is set as true then the
platform identifier should not be displayed to the public.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers)  

* * *

<a name="category"></a>

## category : <code>String</code>
details the type of association between two trains. This value can be either:
`JJ` for join, `VV` for devide, or `NP` for next.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Association_Records#Association_Record_Fields](http://nrodwiki.rockshore.net/index.php/Association_Records#Association_Record_Fields)  

* * *

<a name="uid"></a>

## uid : <code>String</code>
a unique identifier for a train. Each train will have its own uid which can be used
to identify it on most data from the open rail data servers e.g. getting a schedule for a train.

**Kind**: global typedef  

* * *

<a name="rid"></a>

## rid : <code>String</code>
an RTTI Train ID. Note that since this is an RID, the service must already exist
within Darwin. RTTI meaning Real Time Train Information

**Kind**: global typedef  

* * *

<a name="toc"></a>

## toc : <code>string</code>
a Train Operating Company tring itendifier. These are normaly a 2 letter code used
to identify the company e.g. virgin trains `VT` or calledonian sleeper `CS`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/TOC_Codes](http://nrodwiki.rockshore.net/index.php/TOC_Codes)  

* * *

<a name="crs"></a>

## crs : <code>String</code>
the Computer Reservation System code is a 3 letter alpha numeric code used to
identify a station on the network. It was previously known as nrs (National Reservation System)
An example would be Euston station which has a crs of `EUS`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/CRS](http://nrodwiki.rockshore.net/index.php/CRS)  

* * *

<a name="ssd"></a>

## ssd : <code>String</code>
the Service Starting Date details which day the train service will be operating on.
this is in the format of YYYY-MM-DD

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Schedule_Element](http://nrodwiki.rockshore.net/index.php/Darwin:Schedule_Element)  

* * *

<a name="stationCategory"></a>

## stationCategory : <code>String</code>
a catergory for station messages, this can be any of the following: `Train`,
`Station`, `Connections`, `System`, `Misc`, `PriorTrains`, or `PriorOthers`.

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Categories](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Categories)  

* * *

<a name="severity"></a>

## severity : <code>Number</code>
a severity rating to detail how severe a message is. This value can be:
0 for normal, 1 for minor, 2 for major, and 3 for severe

**Kind**: global typedef  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities)  

* * *

