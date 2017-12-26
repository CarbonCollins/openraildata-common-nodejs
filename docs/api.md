## Modules

<dl>
<dt><a href="#module_openraildata/common">openraildata/common</a></dt>
<dd><p>the openraildata/common module is used to export various data classes used within
many of the openraildata modules. This common package is used to remove duplicate copies of
each of these data classes and so that they are maintained in one place. Because of this there
is not much actual funcitonality within this module. Mixing functions are exposed which allow
other modules to mix extra functionality into the data classes in this module in order for the
classes to be identical wherever they are used.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Association">Association</a> ⇐ <code><a href="#module_openraildata/common+Association">Association</a></code></dt>
<dd><p>A class for association data and helpful functions</p>
</dd>
<dt><a href="#Location">Location</a> ⇐ <code><a href="#module_openraildata/common+Location">Location</a></code></dt>
<dd><p>A class for location information along with helpful functions</p>
</dd>
<dt><a href="#Schedule">Schedule</a> ⇐ <code><a href="#module_openraildata/common+Schedule">Schedule</a></code></dt>
<dd><p>A class for location information along with helpful functions</p>
</dd>
<dt><a href="#Station">Station</a></dt>
<dd><p>a class for storing data about a station and to supply helpful functions for manipulating the data</p>
</dd>
<dt><a href="#StationMessage">StationMessage</a></dt>
<dd><p>A class for housing station messages</p>
</dd>
<dt><a href="#TrainOrder">TrainOrder</a></dt>
<dd><p>a class for storing trainOrder message and to provide helpfull functions</p>
</dd>
<dt><a href="#TrainStatus">TrainStatus</a></dt>
<dd><p>a class for train status messages</p>
</dd>
</dl>

<a name="module_openraildata/common"></a>

## openraildata/common
the openraildata/common module is used to export various data classes used within
many of the openraildata modules. This common package is used to remove duplicate copies of
each of these data classes and so that they are maintained in one place. Because of this there
is not much actual funcitonality within this module. Mixing functions are exposed which allow
other modules to mix extra functionality into the data classes in this module in order for the
classes to be identical wherever they are used.


* [openraildata/common](#module_openraildata/common)
    * _instance_
        * [.Association](#module_openraildata/common+Association) : [<code>Association</code>](#module_openraildata/common+Association)
            * _instance_
                * [.tiploc](#module_openraildata/common+Association+tiploc) : <code>String</code>
                * [.category](#module_openraildata/common+Association+category) : <code>String</code>
                * [.mainTrain](#module_openraildata/common+Association+mainTrain) : <code>Object</code>
                * [.mainTrainId](#module_openraildata/common+Association+mainTrainId) : <code>String</code>
                * [.assocTrain](#module_openraildata/common+Association+assocTrain) : <code>Object</code>
                * [.assocTrainId](#module_openraildata/common+Association+assocTrainId) : <code>String</code>
            * _inner_
                * [~isJoin()](#module_openraildata/common+Association..isJoin) ⇒ <code>Boolean</code>
                * [~isSplit()](#module_openraildata/common+Association..isSplit) ⇒ <code>Boolean</code>
                * [~isNextTrain()](#module_openraildata/common+Association..isNextTrain) ⇒ <code>Boolean</code>
        * [.Location](#module_openraildata/common+Location) : [<code>Location</code>](#module_openraildata/common+Location)
            * _instance_
                * [.locname](#module_openraildata/common+Location+locname) : <code>String</code>
                * [.tpl](#module_openraildata/common+Location+tpl) : <code>String</code>
                * [.toc](#module_openraildata/common+Location+toc) : <code>String</code>
                * [.crs](#module_openraildata/common+Location+crs) : <code>String</code>
                * [.locationName](#module_openraildata/common+Location+locationName) : <code>String</code>
                * [.tiploc](#module_openraildata/common+Location+tiploc) : <code>String</code>
                * [.trainOperatingCompany](#module_openraildata/common+Location+trainOperatingCompany) : <code>String</code>
                * [.computerReservationSystem](#module_openraildata/common+Location+computerReservationSystem) : <code>String</code>
            * _inner_
                * [~updateLocation(location)](#module_openraildata/common+Location..updateLocation)
        * [.Schedule](#module_openraildata/common+Schedule) : [<code>Schedule</code>](#module_openraildata/common+Schedule)
            * [.rid](#module_openraildata/common+Schedule+rid) : <code>String</code>
            * [.ssd](#module_openraildata/common+Schedule+ssd) : <code>String</code>
            * [.toc](#module_openraildata/common+Schedule+toc) : <code>String</code>
            * [.trainId](#module_openraildata/common+Schedule+trainId) : <code>String</code>
            * [.uid](#module_openraildata/common+Schedule+uid) : <code>String</code>
            * [.OR](#module_openraildata/common+Schedule+OR) : [<code>Station</code>](#Station)
            * [.PP](#module_openraildata/common+Schedule+PP) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.IP](#module_openraildata/common+Schedule+IP) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.DT](#module_openraildata/common+Schedule+DT) : [<code>Station</code>](#Station)
            * [.OPIP](#module_openraildata/common+Schedule+OPIP) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.OPOR](#module_openraildata/common+Schedule+OPOR) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.OPDT](#module_openraildata/common+Schedule+OPDT) : [<code>Station</code>](#Station)
            * [.trainOperatingCompany](#module_openraildata/common+Schedule+trainOperatingCompany) : [<code>Station</code>](#Station)
            * [.serviceStartingDate](#module_openraildata/common+Schedule+serviceStartingDate) : [<code>Station</code>](#Station)
            * [.origin](#module_openraildata/common+Schedule+origin) : [<code>Station</code>](#Station)
            * [.passingPoints](#module_openraildata/common+Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.intermediatePoints](#module_openraildata/common+Schedule+intermediatePoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.operationalStops](#module_openraildata/common+Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](#Station)
            * [.destination](#module_openraildata/common+Schedule+destination) : [<code>Station</code>](#Station)
        * [.Station](#module_openraildata/common+Station) : [<code>Station</code>](#Station)
        * [.StationMessage](#module_openraildata/common+StationMessage) : [<code>StationMessage</code>](#StationMessage)
        * [.TrainOrder](#module_openraildata/common+TrainOrder) : [<code>TrainOrder</code>](#TrainOrder)
        * [.TrainStatus](#module_openraildata/common+TrainStatus) : [<code>TrainStatus</code>](#TrainStatus)
    * _inner_
        * [~associationMixer(mixin)](#module_openraildata/common..associationMixer)
        * [~locationMixer(mixin)](#module_openraildata/common..locationMixer)
        * [~scheduleMixer(mixin)](#module_openraildata/common..scheduleMixer)
        * [~stationMixer(mixin)](#module_openraildata/common..stationMixer)
        * [~stationMessageMixer(mixin)](#module_openraildata/common..stationMessageMixer)
        * [~trainOrderMixer(mixin)](#module_openraildata/common..trainOrderMixer)
        * [~trainStatusMixer(mixin)](#module_openraildata/common..trainStatusMixer)


* * *

<a name="module_openraildata/common+Association"></a>

### openraildata/common.Association : [<code>Association</code>](#module_openraildata/common+Association)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* [.Association](#module_openraildata/common+Association) : [<code>Association</code>](#module_openraildata/common+Association)
    * _instance_
        * [.tiploc](#module_openraildata/common+Association+tiploc) : <code>String</code>
        * [.category](#module_openraildata/common+Association+category) : <code>String</code>
        * [.mainTrain](#module_openraildata/common+Association+mainTrain) : <code>Object</code>
        * [.mainTrainId](#module_openraildata/common+Association+mainTrainId) : <code>String</code>
        * [.assocTrain](#module_openraildata/common+Association+assocTrain) : <code>Object</code>
        * [.assocTrainId](#module_openraildata/common+Association+assocTrainId) : <code>String</code>
    * _inner_
        * [~isJoin()](#module_openraildata/common+Association..isJoin) ⇒ <code>Boolean</code>
        * [~isSplit()](#module_openraildata/common+Association..isSplit) ⇒ <code>Boolean</code>
        * [~isNextTrain()](#module_openraildata/common+Association..isNextTrain) ⇒ <code>Boolean</code>


* * *

<a name="module_openraildata/common+Association+tiploc"></a>

#### association.tiploc : <code>String</code>
gets the association tiploc code

**Kind**: instance property of [<code>Association</code>](#module_openraildata/common+Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+category"></a>

#### association.category : <code>String</code>
gets the association category

**Kind**: instance property of [<code>Association</code>](#module_openraildata/common+Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+mainTrain"></a>

#### association.mainTrain : <code>Object</code>
gets the main train information

**Kind**: instance property of [<code>Association</code>](#module_openraildata/common+Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+mainTrainId"></a>

#### association.mainTrainId : <code>String</code>
gets the main train rid

**Kind**: instance property of [<code>Association</code>](#module_openraildata/common+Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+assocTrain"></a>

#### association.assocTrain : <code>Object</code>
gets the assoc train information

**Kind**: instance property of [<code>Association</code>](#module_openraildata/common+Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+assocTrainId"></a>

#### association.assocTrainId : <code>String</code>
gets the assoc train rid

**Kind**: instance property of [<code>Association</code>](#module_openraildata/common+Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association..isJoin"></a>

#### Association~isJoin() ⇒ <code>Boolean</code>
checks to see if the association is a train join type

**Kind**: inner method of [<code>Association</code>](#module_openraildata/common+Association)  

* * *

<a name="module_openraildata/common+Association..isSplit"></a>

#### Association~isSplit() ⇒ <code>Boolean</code>
checks to see if the association is a train split type

**Kind**: inner method of [<code>Association</code>](#module_openraildata/common+Association)  

* * *

<a name="module_openraildata/common+Association..isNextTrain"></a>

#### Association~isNextTrain() ⇒ <code>Boolean</code>
checks to see if the association is a next train type

**Kind**: inner method of [<code>Association</code>](#module_openraildata/common+Association)  

* * *

<a name="module_openraildata/common+Location"></a>

### openraildata/common.Location : [<code>Location</code>](#module_openraildata/common+Location)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* [.Location](#module_openraildata/common+Location) : [<code>Location</code>](#module_openraildata/common+Location)
    * _instance_
        * [.locname](#module_openraildata/common+Location+locname) : <code>String</code>
        * [.tpl](#module_openraildata/common+Location+tpl) : <code>String</code>
        * [.toc](#module_openraildata/common+Location+toc) : <code>String</code>
        * [.crs](#module_openraildata/common+Location+crs) : <code>String</code>
        * [.locationName](#module_openraildata/common+Location+locationName) : <code>String</code>
        * [.tiploc](#module_openraildata/common+Location+tiploc) : <code>String</code>
        * [.trainOperatingCompany](#module_openraildata/common+Location+trainOperatingCompany) : <code>String</code>
        * [.computerReservationSystem](#module_openraildata/common+Location+computerReservationSystem) : <code>String</code>
    * _inner_
        * [~updateLocation(location)](#module_openraildata/common+Location..updateLocation)


* * *

<a name="module_openraildata/common+Location+locname"></a>

#### location.locname : <code>String</code>
returns the location name

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+tpl"></a>

#### location.tpl : <code>String</code>
returns the locations tiploc code

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+toc"></a>

#### location.toc : <code>String</code>
returns the locations operating company

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+crs"></a>

#### location.crs : <code>String</code>
returns the locations crs (Computer Reservation System)

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+locationName"></a>

#### location.locationName : <code>String</code>
alias of locname

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  
**See**: locname  

* * *

<a name="module_openraildata/common+Location+tiploc"></a>

#### location.tiploc : <code>String</code>
the tiploc code

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  
**See**: [tpl](#module_openraildata/common+Location+tpl)  

* * *

<a name="module_openraildata/common+Location+trainOperatingCompany"></a>

#### location.trainOperatingCompany : <code>String</code>
the toc code

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  
**See**: [toc](#module_openraildata/common+Location+toc)  

* * *

<a name="module_openraildata/common+Location+computerReservationSystem"></a>

#### location.computerReservationSystem : <code>String</code>
alias of crs

**Kind**: instance property of [<code>Location</code>](#module_openraildata/common+Location)  
**Read only**: true  
**See**: [crs](#module_openraildata/common+Location+crs)  

* * *

<a name="module_openraildata/common+Location..updateLocation"></a>

#### Location~updateLocation(location)
Updates the location wiht a new raw data

**Kind**: inner method of [<code>Location</code>](#module_openraildata/common+Location)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | the raw location object to be parsed |


* * *

<a name="module_openraildata/common+Schedule"></a>

### openraildata/common.Schedule : [<code>Schedule</code>](#module_openraildata/common+Schedule)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* [.Schedule](#module_openraildata/common+Schedule) : [<code>Schedule</code>](#module_openraildata/common+Schedule)
    * [.rid](#module_openraildata/common+Schedule+rid) : <code>String</code>
    * [.ssd](#module_openraildata/common+Schedule+ssd) : <code>String</code>
    * [.toc](#module_openraildata/common+Schedule+toc) : <code>String</code>
    * [.trainId](#module_openraildata/common+Schedule+trainId) : <code>String</code>
    * [.uid](#module_openraildata/common+Schedule+uid) : <code>String</code>
    * [.OR](#module_openraildata/common+Schedule+OR) : [<code>Station</code>](#Station)
    * [.PP](#module_openraildata/common+Schedule+PP) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.IP](#module_openraildata/common+Schedule+IP) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.DT](#module_openraildata/common+Schedule+DT) : [<code>Station</code>](#Station)
    * [.OPIP](#module_openraildata/common+Schedule+OPIP) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.OPOR](#module_openraildata/common+Schedule+OPOR) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.OPDT](#module_openraildata/common+Schedule+OPDT) : [<code>Station</code>](#Station)
    * [.trainOperatingCompany](#module_openraildata/common+Schedule+trainOperatingCompany) : [<code>Station</code>](#Station)
    * [.serviceStartingDate](#module_openraildata/common+Schedule+serviceStartingDate) : [<code>Station</code>](#Station)
    * [.origin](#module_openraildata/common+Schedule+origin) : [<code>Station</code>](#Station)
    * [.passingPoints](#module_openraildata/common+Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.intermediatePoints](#module_openraildata/common+Schedule+intermediatePoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.operationalStops](#module_openraildata/common+Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.destination](#module_openraildata/common+Schedule+destination) : [<code>Station</code>](#Station)


* * *

<a name="module_openraildata/common+Schedule+rid"></a>

#### schedule.rid : <code>String</code>
gets the trains rid

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+ssd"></a>

#### schedule.ssd : <code>String</code>
gets the trains ssd

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+toc"></a>

#### schedule.toc : <code>String</code>
gets the trains toc

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+trainId"></a>

#### schedule.trainId : <code>String</code>
gets the trains trainId

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+uid"></a>

#### schedule.uid : <code>String</code>
gets the trains uid

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OR"></a>

#### schedule.OR : [<code>Station</code>](#Station)
gets the trains origin station

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+PP"></a>

#### schedule.PP : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains passing points

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+IP"></a>

#### schedule.IP : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains intermediate points

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+DT"></a>

#### schedule.DT : [<code>Station</code>](#Station)
gets the trains destination station

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OPIP"></a>

#### schedule.OPIP : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains operational intermediate points

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OPOR"></a>

#### schedule.OPOR : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains operational origin station

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OPDT"></a>

#### schedule.OPDT : [<code>Station</code>](#Station)
gets the trains operational destination station

**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+trainOperatingCompany"></a>

#### schedule.trainOperatingCompany : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**: [toc](#module_openraildata/common+Schedule+toc)  

* * *

<a name="module_openraildata/common+Schedule+serviceStartingDate"></a>

#### schedule.serviceStartingDate : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**: [ssd](#module_openraildata/common+Schedule+ssd)  

* * *

<a name="module_openraildata/common+Schedule+origin"></a>

#### schedule.origin : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**

- [OR](#module_openraildata/common+Schedule+OR)
- [OPOR](#module_openraildata/common+Schedule+OPOR)


* * *

<a name="module_openraildata/common+Schedule+passingPoints"></a>

#### schedule.passingPoints : [<code>Array.&lt;Station&gt;</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**: [PP](#module_openraildata/common+Schedule+PP)  

* * *

<a name="module_openraildata/common+Schedule+intermediatePoints"></a>

#### schedule.intermediatePoints : [<code>Array.&lt;Station&gt;</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**: [IP](#module_openraildata/common+Schedule+IP)  

* * *

<a name="module_openraildata/common+Schedule+operationalStops"></a>

#### schedule.operationalStops : [<code>Array.&lt;Station&gt;</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**: [OPIP](#module_openraildata/common+Schedule+OPIP)  

* * *

<a name="module_openraildata/common+Schedule+destination"></a>

#### schedule.destination : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#module_openraildata/common+Schedule)  
**Read only**: true  
**See**

- [DT](#module_openraildata/common+Schedule+DT)
- [OPDT](#module_openraildata/common+Schedule+OPDT)


* * *

<a name="module_openraildata/common+Station"></a>

### openraildata/common.Station : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* * *

<a name="module_openraildata/common+StationMessage"></a>

### openraildata/common.StationMessage : [<code>StationMessage</code>](#StationMessage)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* * *

<a name="module_openraildata/common+TrainOrder"></a>

### openraildata/common.TrainOrder : [<code>TrainOrder</code>](#TrainOrder)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* * *

<a name="module_openraildata/common+TrainStatus"></a>

### openraildata/common.TrainStatus : [<code>TrainStatus</code>](#TrainStatus)
**Kind**: instance property of [<code>openraildata/common</code>](#module_openraildata/common)  
**Read only**: true  

* * *

<a name="module_openraildata/common..associationMixer"></a>

### openraildata/common~associationMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>Association</code>](#Association)  
**See**: [Association](./association.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Association model |


* * *

<a name="module_openraildata/common..locationMixer"></a>

### openraildata/common~locationMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>Location</code>](#Location)  
**See**: [Location](./location.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Location model |


* * *

<a name="module_openraildata/common..scheduleMixer"></a>

### openraildata/common~scheduleMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>Schedule</code>](#Schedule)  
**See**: [Schedule](./schedule.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Schedule model |


* * *

<a name="module_openraildata/common..stationMixer"></a>

### openraildata/common~stationMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>Station</code>](#Station)  
**See**: [Station](./station.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the Station model |


* * *

<a name="module_openraildata/common..stationMessageMixer"></a>

### openraildata/common~stationMessageMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>StationMessage</code>](#StationMessage)  
**See**: [StationMessage](./stationMessage.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the StationMessage model |


* * *

<a name="module_openraildata/common..trainOrderMixer"></a>

### openraildata/common~trainOrderMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>TrainOrder</code>](#TrainOrder)  
**See**: [TrainOrder](./trainOrder.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the TrainOrder model |


* * *

<a name="module_openraildata/common..trainStatusMixer"></a>

### openraildata/common~trainStatusMixer(mixin)
**Kind**: inner method of [<code>openraildata/common</code>](#module_openraildata/common)  
**Mixes**: [<code>TrainStatus</code>](#TrainStatus)  
**See**: [TrainStatus](./trainStatus.md)  

| Param | Type | Description |
| --- | --- | --- |
| mixin | <code>function</code> | a mixin function to apply to the TrainStatus model |


* * *

<a name="Association"></a>

## Association ⇐ [<code>Association</code>](#module_openraildata/common+Association)
A class for association data and helpful functions

**Kind**: global class  
**Extends**: [<code>Association</code>](#module_openraildata/common+Association)  

* [Association](#Association) ⇐ [<code>Association</code>](#module_openraildata/common+Association)
    * [new Association(assoc)](#new_Association_new)
    * [.tiploc](#module_openraildata/common+Association+tiploc) : <code>String</code>
    * [.category](#module_openraildata/common+Association+category) : <code>String</code>
    * [.mainTrain](#module_openraildata/common+Association+mainTrain) : <code>Object</code>
    * [.mainTrainId](#module_openraildata/common+Association+mainTrainId) : <code>String</code>
    * [.assocTrain](#module_openraildata/common+Association+assocTrain) : <code>Object</code>
    * [.assocTrainId](#module_openraildata/common+Association+assocTrainId) : <code>String</code>


* * *

<a name="new_Association_new"></a>

### new Association(assoc)

| Param | Type | Description |
| --- | --- | --- |
| assoc | <code>Object</code> | the raw json association message object |


* * *

<a name="module_openraildata/common+Association+tiploc"></a>

### association.tiploc : <code>String</code>
gets the association tiploc code

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+category"></a>

### association.category : <code>String</code>
gets the association category

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+mainTrain"></a>

### association.mainTrain : <code>Object</code>
gets the main train information

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+mainTrainId"></a>

### association.mainTrainId : <code>String</code>
gets the main train rid

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+assocTrain"></a>

### association.assocTrain : <code>Object</code>
gets the assoc train information

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Association+assocTrainId"></a>

### association.assocTrainId : <code>String</code>
gets the assoc train rid

**Kind**: instance property of [<code>Association</code>](#Association)  
**Read only**: true  

* * *

<a name="Location"></a>

## Location ⇐ [<code>Location</code>](#module_openraildata/common+Location)
A class for location information along with helpful functions

**Kind**: global class  
**Extends**: [<code>Location</code>](#module_openraildata/common+Location)  

* [Location](#Location) ⇐ [<code>Location</code>](#module_openraildata/common+Location)
    * [new Location(loc)](#new_Location_new)
    * [.locname](#module_openraildata/common+Location+locname) : <code>String</code>
    * [.tpl](#module_openraildata/common+Location+tpl) : <code>String</code>
    * [.toc](#module_openraildata/common+Location+toc) : <code>String</code>
    * [.crs](#module_openraildata/common+Location+crs) : <code>String</code>
    * [.locationName](#module_openraildata/common+Location+locationName) : <code>String</code>
    * [.tiploc](#module_openraildata/common+Location+tiploc) : <code>String</code>
    * [.trainOperatingCompany](#module_openraildata/common+Location+trainOperatingCompany) : <code>String</code>
    * [.computerReservationSystem](#module_openraildata/common+Location+computerReservationSystem) : <code>String</code>


* * *

<a name="new_Location_new"></a>

### new Location(loc)

| Param | Type | Description |
| --- | --- | --- |
| loc | <code>Object</code> | the raw location object to be parsed |


* * *

<a name="module_openraildata/common+Location+locname"></a>

### location.locname : <code>String</code>
returns the location name

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+tpl"></a>

### location.tpl : <code>String</code>
returns the locations tiploc code

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+toc"></a>

### location.toc : <code>String</code>
returns the locations operating company

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+crs"></a>

### location.crs : <code>String</code>
returns the locations crs (Computer Reservation System)

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Location+locationName"></a>

### location.locationName : <code>String</code>
alias of locname

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
**See**: locname  

* * *

<a name="module_openraildata/common+Location+tiploc"></a>

### location.tiploc : <code>String</code>
the tiploc code

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
**See**: [tpl](#module_openraildata/common+Location+tpl)  

* * *

<a name="module_openraildata/common+Location+trainOperatingCompany"></a>

### location.trainOperatingCompany : <code>String</code>
the toc code

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
**See**: [toc](#module_openraildata/common+Location+toc)  

* * *

<a name="module_openraildata/common+Location+computerReservationSystem"></a>

### location.computerReservationSystem : <code>String</code>
alias of crs

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
**See**: [crs](#module_openraildata/common+Location+crs)  

* * *

<a name="Schedule"></a>

## Schedule ⇐ [<code>Schedule</code>](#module_openraildata/common+Schedule)
A class for location information along with helpful functions

**Kind**: global class  
**Extends**: [<code>Schedule</code>](#module_openraildata/common+Schedule)  

* [Schedule](#Schedule) ⇐ [<code>Schedule</code>](#module_openraildata/common+Schedule)
    * [new Schedule(payload)](#new_Schedule_new)
    * [.rid](#module_openraildata/common+Schedule+rid) : <code>String</code>
    * [.ssd](#module_openraildata/common+Schedule+ssd) : <code>String</code>
    * [.toc](#module_openraildata/common+Schedule+toc) : <code>String</code>
    * [.trainId](#module_openraildata/common+Schedule+trainId) : <code>String</code>
    * [.uid](#module_openraildata/common+Schedule+uid) : <code>String</code>
    * [.OR](#module_openraildata/common+Schedule+OR) : [<code>Station</code>](#Station)
    * [.PP](#module_openraildata/common+Schedule+PP) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.IP](#module_openraildata/common+Schedule+IP) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.DT](#module_openraildata/common+Schedule+DT) : [<code>Station</code>](#Station)
    * [.OPIP](#module_openraildata/common+Schedule+OPIP) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.OPOR](#module_openraildata/common+Schedule+OPOR) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.OPDT](#module_openraildata/common+Schedule+OPDT) : [<code>Station</code>](#Station)
    * [.trainOperatingCompany](#module_openraildata/common+Schedule+trainOperatingCompany) : [<code>Station</code>](#Station)
    * [.serviceStartingDate](#module_openraildata/common+Schedule+serviceStartingDate) : [<code>Station</code>](#Station)
    * [.origin](#module_openraildata/common+Schedule+origin) : [<code>Station</code>](#Station)
    * [.passingPoints](#module_openraildata/common+Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.intermediatePoints](#module_openraildata/common+Schedule+intermediatePoints) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.operationalStops](#module_openraildata/common+Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](#Station)
    * [.destination](#module_openraildata/common+Schedule+destination) : [<code>Station</code>](#Station)


* * *

<a name="new_Schedule_new"></a>

### new Schedule(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | raw schedule object to be parsed |


* * *

<a name="module_openraildata/common+Schedule+rid"></a>

### schedule.rid : <code>String</code>
gets the trains rid

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+ssd"></a>

### schedule.ssd : <code>String</code>
gets the trains ssd

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+toc"></a>

### schedule.toc : <code>String</code>
gets the trains toc

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+trainId"></a>

### schedule.trainId : <code>String</code>
gets the trains trainId

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+uid"></a>

### schedule.uid : <code>String</code>
gets the trains uid

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OR"></a>

### schedule.OR : [<code>Station</code>](#Station)
gets the trains origin station

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+PP"></a>

### schedule.PP : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains passing points

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+IP"></a>

### schedule.IP : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains intermediate points

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+DT"></a>

### schedule.DT : [<code>Station</code>](#Station)
gets the trains destination station

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OPIP"></a>

### schedule.OPIP : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains operational intermediate points

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OPOR"></a>

### schedule.OPOR : [<code>Array.&lt;Station&gt;</code>](#Station)
gets the trains operational origin station

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+OPDT"></a>

### schedule.OPDT : [<code>Station</code>](#Station)
gets the trains operational destination station

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  

* * *

<a name="module_openraildata/common+Schedule+trainOperatingCompany"></a>

### schedule.trainOperatingCompany : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**: [toc](#module_openraildata/common+Schedule+toc)  

* * *

<a name="module_openraildata/common+Schedule+serviceStartingDate"></a>

### schedule.serviceStartingDate : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**: [ssd](#module_openraildata/common+Schedule+ssd)  

* * *

<a name="module_openraildata/common+Schedule+origin"></a>

### schedule.origin : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**

- [OR](#module_openraildata/common+Schedule+OR)
- [OPOR](#module_openraildata/common+Schedule+OPOR)


* * *

<a name="module_openraildata/common+Schedule+passingPoints"></a>

### schedule.passingPoints : [<code>Array.&lt;Station&gt;</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**: [PP](#module_openraildata/common+Schedule+PP)  

* * *

<a name="module_openraildata/common+Schedule+intermediatePoints"></a>

### schedule.intermediatePoints : [<code>Array.&lt;Station&gt;</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**: [IP](#module_openraildata/common+Schedule+IP)  

* * *

<a name="module_openraildata/common+Schedule+operationalStops"></a>

### schedule.operationalStops : [<code>Array.&lt;Station&gt;</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**: [OPIP](#module_openraildata/common+Schedule+OPIP)  

* * *

<a name="module_openraildata/common+Schedule+destination"></a>

### schedule.destination : [<code>Station</code>](#Station)
**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**See**

- [DT](#module_openraildata/common+Schedule+DT)
- [OPDT](#module_openraildata/common+Schedule+OPDT)


* * *

<a name="Station"></a>

## Station
a class for storing data about a station and to supply helpful functions for manipulating the data

**Kind**: global class  

* [Station](#Station)
    * [new Station(payload, [operational])](#new_Station_new)
    * _instance_
        * [.tiploc](#Station+tiploc) ⇒ <code>String</code>
        * [.action](#Station+action) ⇒ <code>String</code>
        * [.plannedTimeOfArrival](#Station+plannedTimeOfArrival) ⇒ <code>String</code>
        * [.plannedTimeOfDeparture](#Station+plannedTimeOfDeparture) ⇒ <code>String</code>
        * [.workingTimeOfArrival](#Station+workingTimeOfArrival) ⇒ <code>String</code>
        * [.workingTimeOfDeparture](#Station+workingTimeOfDeparture) ⇒ <code>String</code>
        * [.operational](#Station+operational) ⇒ <code>Boolean</code>
        * [.platform](#Station+platform) ⇒ <code>String</code>
    * _inner_
        * [~isPlatformSuppressed()](#Station..isPlatformSuppressed) ⇒ <code>Boolean</code>


* * *

<a name="new_Station_new"></a>

### new Station(payload, [operational])

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |
| [operational] | <code>Boolean</code> | an optional boolean to specify if the station is an operational stop |


* * *

<a name="Station+tiploc"></a>

### station.tiploc ⇒ <code>String</code>
gets the TIPLOC code for this station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="Station+action"></a>

### station.action ⇒ <code>String</code>
gets the action at this station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="Station+plannedTimeOfArrival"></a>

### station.plannedTimeOfArrival ⇒ <code>String</code>
gets the planned time of arrival (public facing)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="Station+plannedTimeOfDeparture"></a>

### station.plannedTimeOfDeparture ⇒ <code>String</code>
gets the planned time of departure (public facing)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**See**: ptd  

* * *

<a name="Station+workingTimeOfArrival"></a>

### station.workingTimeOfArrival ⇒ <code>String</code>
gets the working time of arrival for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**See**: wta  

* * *

<a name="Station+workingTimeOfDeparture"></a>

### station.workingTimeOfDeparture ⇒ <code>String</code>
gets the working time of departure for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**See**: wtd  

* * *

<a name="Station+operational"></a>

### station.operational ⇒ <code>Boolean</code>
is the station an operational station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="Station+platform"></a>

### station.platform ⇒ <code>String</code>
is the platform number (if known)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  

* * *

<a name="Station..isPlatformSuppressed"></a>

### Station~isPlatformSuppressed() ⇒ <code>Boolean</code>
determines if the platform is to be suppressed form public view

**Kind**: inner method of [<code>Station</code>](#Station)  

* * *

<a name="StationMessage"></a>

## StationMessage
A class for housing station messages

**Kind**: global class  

* [StationMessage](#StationMessage)
    * [new StationMessage(payload)](#new_StationMessage_new)
    * [.id](#StationMessage+id) ⇒ <code>string</code> \| <code>null</code>
    * [.category](#StationMessage+category) ⇒ <code>string</code> \| <code>null</code>
    * [.message](#StationMessage+message) ⇒ <code>string</code> \| <code>null</code>
    * [.severity](#StationMessage+severity) ⇒ <code>number</code> \| <code>null</code>
    * [.severityString](#StationMessage+severityString) ⇒ <code>string</code> \| <code>null</code>
    * [.stations](#StationMessage+stations) ⇒ [<code>Array.&lt;Location&gt;</code>](#Location)


* * *

<a name="new_StationMessage_new"></a>

### new StationMessage(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |


* * *

<a name="StationMessage+id"></a>

### stationMessage.id ⇒ <code>string</code> \| <code>null</code>
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="StationMessage+category"></a>

### stationMessage.category ⇒ <code>string</code> \| <code>null</code>
gets the category of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="StationMessage+message"></a>

### stationMessage.message ⇒ <code>string</code> \| <code>null</code>
gets the message of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="StationMessage+severity"></a>

### stationMessage.severity ⇒ <code>number</code> \| <code>null</code>
gets the numerical severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="StationMessage+severityString"></a>

### stationMessage.severityString ⇒ <code>string</code> \| <code>null</code>
gets the readable format of the severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="StationMessage+stations"></a>

### stationMessage.stations ⇒ [<code>Array.&lt;Location&gt;</code>](#Location)
gets the list of stations that the station message applied too

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  

* * *

<a name="TrainOrder"></a>

## TrainOrder
a class for storing trainOrder message and to provide helpfull functions

**Kind**: global class  

* [TrainOrder](#TrainOrder)
    * [new TrainOrder(payload)](#new_TrainOrder_new)
    * _instance_
        * [.crs](#TrainOrder+crs) ⇒ <code>String</code> \| <code>null</code>
        * [.platform](#TrainOrder+platform) ⇒ <code>String</code> \| <code>null</code>
        * [.tiploc](#TrainOrder+tiploc) ⇒ <code>String</code> \| <code>null</code>
        * [.sets](#TrainOrder+sets) ⇒ <code>Object</code> \| <code>null</code>
        * [.clears](#TrainOrder+clears) ⇒ <code>Object</code> \| <code>null</code>
    * _inner_
        * [~isSet()](#TrainOrder..isSet) ⇒ <code>Boolean</code>
        * [~isClear()](#TrainOrder..isClear) ⇒ <code>Boolean</code>


* * *

<a name="new_TrainOrder_new"></a>

### new TrainOrder(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |


* * *

<a name="TrainOrder+crs"></a>

### trainOrder.crs ⇒ <code>String</code> \| <code>null</code>
gets the crs (computer reservation system) code

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="TrainOrder+platform"></a>

### trainOrder.platform ⇒ <code>String</code> \| <code>null</code>
gets the platform identifier

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="TrainOrder+tiploc"></a>

### trainOrder.tiploc ⇒ <code>String</code> \| <code>null</code>
gets the tiploc code

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="TrainOrder+sets"></a>

### trainOrder.sets ⇒ <code>Object</code> \| <code>null</code>
gets all of the set information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="TrainOrder+clears"></a>

### trainOrder.clears ⇒ <code>Object</code> \| <code>null</code>
gets all of the clear information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  

* * *

<a name="TrainOrder..isSet"></a>

### TrainOrder~isSet() ⇒ <code>Boolean</code>
determines if the train order is a set type

**Kind**: inner method of [<code>TrainOrder</code>](#TrainOrder)  

* * *

<a name="TrainOrder..isClear"></a>

### TrainOrder~isClear() ⇒ <code>Boolean</code>
determines if the train order is a clear type

**Kind**: inner method of [<code>TrainOrder</code>](#TrainOrder)  

* * *

<a name="TrainStatus"></a>

## TrainStatus
a class for train status messages

**Kind**: global class  

* [TrainStatus](#TrainStatus)
    * [new TrainStatus(payload)](#new_TrainStatus_new)
    * [.rid](#TrainStatus+rid) ⇒ <code>string</code>
    * [.uid](#TrainStatus+uid) ⇒ <code>string</code>
    * [.ssd](#TrainStatus+ssd) ⇒ <code>string</code>
    * [.allLocations](#TrainStatus+allLocations) ⇒ [<code>Array.&lt;Station&gt;</code>](#Station)


* * *

<a name="new_TrainStatus_new"></a>

### new TrainStatus(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | the raw train status message |


* * *

<a name="TrainStatus+rid"></a>

### trainStatus.rid ⇒ <code>string</code>
gets the rid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="TrainStatus+uid"></a>

### trainStatus.uid ⇒ <code>string</code>
gets the uid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="TrainStatus+ssd"></a>

### trainStatus.ssd ⇒ <code>string</code>
gets the ssd of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

<a name="TrainStatus+allLocations"></a>

### trainStatus.allLocations ⇒ [<code>Array.&lt;Station&gt;</code>](#Station)
gets all of the locations that this train status applies to

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  

* * *

