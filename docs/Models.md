## Classes

<dl>
<dt><a href="#Association">Association</a></dt>
<dd><p>A data model for train association data. This stores various train id&#39;s in order to
be used with associating different trains and rolling stock.</p>
</dd>
<dt><a href="#Location">Location</a></dt>
<dd><p>A class for location information along with helpful functions</p>
</dd>
<dt><a href="#Schedule">Schedule</a></dt>
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
<dt><a href="#Via">Via</a></dt>
<dd><p>model for via messages</p>
</dd>
</dl>

<a name="Association"></a>

## Association
A data model for train association data. This stores various train id's in order to
be used with associating different trains and rolling stock.

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [Association](#Association)
    * [new exports.Association([payload])](#new_Association_new)
    * [.tiploc](#Association+tiploc) : <code>tpl</code>
    * [.category](#Association+category) : <code>category</code>
    * [.mainTrain](#Association+mainTrain) : <code>Object</code>
    * [.mainTrainId](#Association+mainTrainId) : <code>rid</code>
    * [.associatedTrain](#Association+associatedTrain) : <code>Object</code>
    * [.associatedTrainId](#Association+associatedTrainId) : <code>rid</code>
    * [.isJoin()](#Association+isJoin) ⇒ <code>boolean</code>
    * [.isSplit()](#Association+isSplit) ⇒ <code>boolean</code>
    * [.isNextTrain()](#Association+isNextTrain) ⇒ <code>boolean</code>

<a name="new_Association_new"></a>

### new exports.Association([payload])
Creates an instance of Association.


| Param | Type | Default |
| --- | --- | --- |
| [payload] | [<code>Association</code>](#Association) \| <code>Object</code> | <code>{}</code> | 

<a name="Association+tiploc"></a>

### association.tiploc : <code>tpl</code>
gets the association tiploc code

**Kind**: instance property of [<code>Association</code>](#Association)  
**Access**: public  
**Read only**: true  
<a name="Association+category"></a>

### association.category : <code>category</code>
gets the association category

**Kind**: instance property of [<code>Association</code>](#Association)  
**Access**: public  
**Read only**: true  
<a name="Association+mainTrain"></a>

### association.mainTrain : <code>Object</code>
gets the main train information

**Kind**: instance property of [<code>Association</code>](#Association)  
**Access**: public  
**Read only**: true  
<a name="Association+mainTrainId"></a>

### association.mainTrainId : <code>rid</code>
gets the main train rid

**Kind**: instance property of [<code>Association</code>](#Association)  
**Access**: public  
**Read only**: true  
<a name="Association+associatedTrain"></a>

### association.associatedTrain : <code>Object</code>
an object containing all of the assoc trains information or null

**Kind**: instance property of [<code>Association</code>](#Association)  
**Access**: public  
**Read only**: true  
<a name="Association+associatedTrainId"></a>

### association.associatedTrainId : <code>rid</code>
the associated train rid

**Kind**: instance property of [<code>Association</code>](#Association)  
**Access**: public  
**Read only**: true  
<a name="Association+isJoin"></a>

### association.isJoin() ⇒ <code>boolean</code>
checks to see if the association is a train join type using the `category` value

**Kind**: instance method of [<code>Association</code>](#Association)  
**Returns**: <code>boolean</code> - returns true if `category` is join type  
**See**: [Association.category](category)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Association+isSplit"></a>

### association.isSplit() ⇒ <code>boolean</code>
checks to see if the association is a train split type using the `category` value

**Kind**: instance method of [<code>Association</code>](#Association)  
**Returns**: <code>boolean</code> - returns true if `category` is split type  
**See**: [Association.category](category)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Association+isNextTrain"></a>

### association.isNextTrain() ⇒ <code>boolean</code>
checks to see if the association is of next train type using the `category` value

**Kind**: instance method of [<code>Association</code>](#Association)  
**Returns**: <code>boolean</code> - returns true if `category` is split type  
**See**: [Association.category](category)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Location"></a>

## Location
A class for location information along with helpful functions

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [Location](#Location)
    * [new exports.Location(loc)](#new_Location_new)
    * [.tiploc](#Location+tiploc) : <code>tpl</code>
    * [.trainOperatingCompany](#Location+trainOperatingCompany) : <code>toc</code>
    * [.computerReservationSystem](#Location+computerReservationSystem) : <code>crs</code>
    * [.locationName](#Location+locationName) : <code>String</code>
    * [.location](#Location+location) : <code>String</code>

<a name="new_Location_new"></a>

### new exports.Location(loc)

| Param | Type | Description |
| --- | --- | --- |
| loc | <code>Object</code> | the raw location object to be parsed |

<a name="Location+tiploc"></a>

### location.tiploc : <code>tpl</code>
returns the locations tiploc code

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
<a name="Location+trainOperatingCompany"></a>

### location.trainOperatingCompany : <code>toc</code>
returns the locations operating company

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
<a name="Location+computerReservationSystem"></a>

### location.computerReservationSystem : <code>crs</code>
returns the locations crs (Computer Reservation System)

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
<a name="Location+locationName"></a>

### location.locationName : <code>String</code>
the name of the location in a human readable format e.g. `Euston`

**Kind**: instance property of [<code>Location</code>](#Location)  
**Read only**: true  
<a name="Location+location"></a>

### location.location : <code>String</code>
Updates the location with a new raw data

**Kind**: instance property of [<code>Location</code>](#Location)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | the raw location object to be parsed |

<a name="Schedule"></a>

## Schedule
A class for location information along with helpful functions

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [Schedule](#Schedule)
    * [new exports.Schedule(payload)](#new_Schedule_new)
    * [.rid](#Schedule+rid) : <code>String</code>
    * [.serviceStartingDate](#Schedule+serviceStartingDate) : <code>ssd</code>
    * [.trainOperatingCompany](#Schedule+trainOperatingCompany) : <code>toc</code>
    * [.trainId](#Schedule+trainId) : <code>String</code>
    * [.uniqueId](#Schedule+uniqueId) : <code>uid</code>
    * [.origin](#Schedule+origin) : [<code>Station</code>](https://openrail.gitlab.io/docs/uk/common/Station)
    * [.passingPoints](#Schedule+passingPoints) : [<code>Array.&lt;Station&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Station)
    * [.intermediatePoints](#Schedule+intermediatePoints) : <code>Array.&lt;external:tation&gt;</code>
    * [.qTrain](#Schedule+qTrain)
    * [.category](#Schedule+category)
    * [.passengerService](#Schedule+passengerService)
    * [.operationalStops](#Schedule+operationalStops) : [<code>Array.&lt;Station&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Station)
    * [.destination](#Schedule+destination) : [<code>Station</code>](https://openrail.gitlab.io/docs/uk/common/Station)
    * [.isQTrain()](#Schedule+isQTrain) ⇒ <code>boolean</code>
    * [.isPassengerService()](#Schedule+isPassengerService) ⇒ <code>boolean</code>

<a name="new_Schedule_new"></a>

### new exports.Schedule(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | raw schedule object to be parsed |

<a name="Schedule+rid"></a>

### schedule.rid : <code>String</code>
gets the trains rid

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+serviceStartingDate"></a>

### schedule.serviceStartingDate : <code>ssd</code>
gets the trains ssd

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+trainOperatingCompany"></a>

### schedule.trainOperatingCompany : <code>toc</code>
gets the trains toc

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+trainId"></a>

### schedule.trainId : <code>String</code>
gets the trains trainId

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+uniqueId"></a>

### schedule.uniqueId : <code>uid</code>
gets the schedule train uid

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+origin"></a>

### schedule.origin : [<code>Station</code>](https://openrail.gitlab.io/docs/uk/common/Station)
returns the origin or the operational origin

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+passingPoints"></a>

### schedule.passingPoints : [<code>Array.&lt;Station&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Station)
returns all of the passing points in which the train passes

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+intermediatePoints"></a>

### schedule.intermediatePoints : <code>Array.&lt;external:tation&gt;</code>
returns all intermediate passenger stops

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+qTrain"></a>

### schedule.qTrain
True if this is a Q Train (runs as required) that has not yet been activated.
Note that a Q Train that has been activated before the XML Timetable file has been built will
not have this attribute set true.

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+category"></a>

### schedule.category
type of service

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+passengerService"></a>

### schedule.passengerService
determins if this chedule is a passenger service or not

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+operationalStops"></a>

### schedule.operationalStops : [<code>Array.&lt;Station&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Station)
returns all operational intermediate stops

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+destination"></a>

### schedule.destination : [<code>Station</code>](https://openrail.gitlab.io/docs/uk/common/Station)
returns the destination or operational destination

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+isQTrain"></a>

### schedule.isQTrain() ⇒ <code>boolean</code>
determins if the train is of q type

**Kind**: instance method of [<code>Schedule</code>](#Schedule)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Schedule+isPassengerService"></a>

### schedule.isPassengerService() ⇒ <code>boolean</code>
determins if this service is a passenger servic or not. General rule of thumb is
if the category is 'OL', 'OO', 'OW', 'XC', 'XD', 'XI', 'XR', 'XX' or 'XZ' then it will be a
passenger service

**Kind**: instance method of [<code>Schedule</code>](#Schedule)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station"></a>

## Station
a class for storing data about a station and to supply helpful functions for manipulating the data

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [Station](#Station)
    * [new exports.Station(payload, [operational])](#new_Station_new)
    * [.tiploc](#Station+tiploc) : <code>tpl</code>
    * [.action](#Station+action) : <code>act</code>
    * [.plannedTimeOfArrival](#Station+plannedTimeOfArrival) : <code>pta</code>
    * [.plannedTimeOfDeparture](#Station+plannedTimeOfDeparture) : <code>ptd</code>
    * [.workingTimeOfArrival](#Station+workingTimeOfArrival) : <code>wta</code>
    * [.workingTimeOfDeparture](#Station+workingTimeOfDeparture) : <code>wtd</code>
    * [.operational](#Station+operational) : <code>Boolean</code>
    * [.platform](#Station+platform) : <code>plat</code>
    * [.isPlatformSuppressed()](#Station+isPlatformSuppressed) ⇒ <code>Boolean</code>

<a name="new_Station_new"></a>

### new exports.Station(payload, [operational])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| payload | <code>Object</code> |  | a raw object containing the station information |
| [operational] | <code>Boolean</code> | <code>false</code> | an optional boolean to specify if the station is an operational stop |

<a name="Station+tiploc"></a>

### station.tiploc : <code>tpl</code>
gets the TIPLOC code for this station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+action"></a>

### station.action : <code>act</code>
gets the action at this station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+plannedTimeOfArrival"></a>

### station.plannedTimeOfArrival : <code>pta</code>
gets the planned time of arrival (public facing)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+plannedTimeOfDeparture"></a>

### station.plannedTimeOfDeparture : <code>ptd</code>
gets the planned time of departure (public facing)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+workingTimeOfArrival"></a>

### station.workingTimeOfArrival : <code>wta</code>
gets the working time of arrival for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+workingTimeOfDeparture"></a>

### station.workingTimeOfDeparture : <code>wtd</code>
gets the working time of departure for the train (hidden form pulic view)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+operational"></a>

### station.operational : <code>Boolean</code>
is the station an operational station

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+platform"></a>

### station.platform : <code>plat</code>
is the platform number (if known)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Station+isPlatformSuppressed"></a>

### station.isPlatformSuppressed() ⇒ <code>Boolean</code>
determines if the platform is to be suppressed form public view

**Kind**: instance method of [<code>Station</code>](#Station)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="StationMessage"></a>

## StationMessage
A class for housing station messages

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [StationMessage](#StationMessage)
    * [new exports.StationMessage(payload)](#new_StationMessage_new)
    * [.id](#StationMessage+id) : <code>String</code>
    * [.category](#StationMessage+category) : <code>stationCategory</code>
    * [.message](#StationMessage+message) : <code>String</code>
    * [.severity](#StationMessage+severity) : <code>Number</code>
    * [.severityString](#StationMessage+severityString) : <code>String</code>
    * [.locations](#StationMessage+locations) : [<code>Array.&lt;Location&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Location)

<a name="new_StationMessage_new"></a>

### new exports.StationMessage(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |

<a name="StationMessage+id"></a>

### stationMessage.id : <code>String</code>
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="StationMessage+category"></a>

### stationMessage.category : <code>stationCategory</code>
gets the id of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="StationMessage+message"></a>

### stationMessage.message : <code>String</code>
gets the message of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="StationMessage+severity"></a>

### stationMessage.severity : <code>Number</code>
gets the numerical severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="StationMessage+severityString"></a>

### stationMessage.severityString : <code>String</code>
get the readable format of the severity of the station message

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**See**: [http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities)  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="StationMessage+locations"></a>

### stationMessage.locations : [<code>Array.&lt;Location&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Location)
gets the list of station locations that the station message applied too

**Kind**: instance property of [<code>StationMessage</code>](#StationMessage)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder"></a>

## TrainOrder
a class for storing trainOrder message and to provide helpfull functions

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [TrainOrder](#TrainOrder)
    * [new exports.TrainOrder(payload)](#new_TrainOrder_new)
    * [.computerReservationSystem](#TrainOrder+computerReservationSystem) : <code>crs</code>
    * [.platform](#TrainOrder+platform) : <code>plat</code>
    * [.tiploc](#TrainOrder+tiploc) : <code>tpl</code>
    * [.set](#TrainOrder+set) : <code>Object</code>
    * [.first](#TrainOrder+first) : <code>Object</code>
    * [.second](#TrainOrder+second) : <code>Object</code>
    * [.third](#TrainOrder+third) : <code>Object</code>
    * [.clear](#TrainOrder+clear) : <code>Object</code>
    * [.isSet()](#TrainOrder+isSet) ⇒ <code>Boolean</code>
    * [.isClear()](#TrainOrder+isClear) ⇒ <code>Boolean</code>

<a name="new_TrainOrder_new"></a>

### new exports.TrainOrder(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |

<a name="TrainOrder+computerReservationSystem"></a>

### trainOrder.computerReservationSystem : <code>crs</code>
gets the crs (computer reservation system) code

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+platform"></a>

### trainOrder.platform : <code>plat</code>
gets the platform identifier

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+tiploc"></a>

### trainOrder.tiploc : <code>tpl</code>
gets the tiploc code

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+set"></a>

### trainOrder.set : <code>Object</code>
gets all of the set information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+first"></a>

### trainOrder.first : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+second"></a>

### trainOrder.second : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+third"></a>

### trainOrder.third : <code>Object</code>
gets the first train in the set object

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+clear"></a>

### trainOrder.clear : <code>Object</code>
gets all of the clear information for the train order

**Kind**: instance property of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+isSet"></a>

### trainOrder.isSet() ⇒ <code>Boolean</code>
determines if the train order is a set type

**Kind**: instance method of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainOrder+isClear"></a>

### trainOrder.isClear() ⇒ <code>Boolean</code>
determines if the train order is a clear type

**Kind**: instance method of [<code>TrainOrder</code>](#TrainOrder)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainStatus"></a>

## TrainStatus
a class for train status messages

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [TrainStatus](#TrainStatus)
    * [new exports.TrainStatus(payload)](#new_TrainStatus_new)
    * [.rid](#TrainStatus+rid) : <code>rid</code>
    * [.uniqueId](#TrainStatus+uniqueId) : <code>uid</code>
    * [.serviceStartingDate](#TrainStatus+serviceStartingDate) : <code>ssd</code>
    * [.stations](#TrainStatus+stations) : [<code>Array.&lt;Station&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Station)

<a name="new_TrainStatus_new"></a>

### new exports.TrainStatus(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | the raw train status message |

<a name="TrainStatus+rid"></a>

### trainStatus.rid : <code>rid</code>
gets the rid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainStatus+uniqueId"></a>

### trainStatus.uniqueId : <code>uid</code>
gets the schedule uid of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainStatus+serviceStartingDate"></a>

### trainStatus.serviceStartingDate : <code>ssd</code>
gets the ssd of the train

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="TrainStatus+stations"></a>

### trainStatus.stations : [<code>Array.&lt;Station&gt;</code>](https://openrail.gitlab.io/docs/uk/common/Station)
gets all of the stations that this train status applies to

**Kind**: instance property of [<code>TrainStatus</code>](#TrainStatus)  
**Read only**: true  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Via"></a>

## Via
model for via messages

**Kind**: global class  
**Author**: Steven Collins <steven@carboncollins.uk>  

* [Via](#Via)
    * [new exports.Via(payload, locations)](#new_Via_new)
    * [.at](#Via+at) : <code>String</code>
    * [.destination](#Via+destination) : <code>String</code>
    * [.location1](#Via+location1) : <code>String</code>
    * [.location2](#Via+location2) : <code>String</code>
    * [.text](#Via+text) : <code>String</code>

<a name="new_Via_new"></a>

### new exports.Via(payload, locations)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | the raw json object from the ftp containing the toc information |
| locations | <code>Array.&lt;Object&gt;</code> | an array of locations in which to map into the via class |

<a name="Via+at"></a>

### via.at : <code>String</code>
at which point this via is in effect

**Kind**: instance property of [<code>Via</code>](#Via)  
**Access**: public  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Via+destination"></a>

### via.destination : <code>String</code>
at which point this via is no longer in effect

**Kind**: instance property of [<code>Via</code>](#Via)  
**Access**: public  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Via+location1"></a>

### via.location1 : <code>String</code>
the location for the via text

**Kind**: instance property of [<code>Via</code>](#Via)  
**Access**: public  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Via+location2"></a>

### via.location2 : <code>String</code>
a secondary location for the via text

**Kind**: instance property of [<code>Via</code>](#Via)  
**Access**: public  
**Author**: Steven Collins <steven@carboncollins.uk>  
<a name="Via+text"></a>

### via.text : <code>String</code>
a human readable via text to be displayed

**Kind**: instance property of [<code>Via</code>](#Via)  
**Access**: public  
**Author**: Steven Collins <steven@carboncollins.uk>  
