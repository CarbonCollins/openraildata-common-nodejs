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

<a name="new_Station_new"></a>

### new Station(payload, [operational])

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |
| [operational] | <code>Boolean</code> | an optional boolean to specify if the station is an operational stop |

<a name="Station+tiploc"></a>

### station.tiploc ⇒ <code>String</code>
gets the TIPLOC code for this station

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+action"></a>

### station.action ⇒ <code>String</code>
gets the action at this station

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+plannedTimeOfArrival"></a>

### station.plannedTimeOfArrival ⇒ <code>String</code>
gets the planned time of arrival (public facing)

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+plannedTimeOfDeparture"></a>

### station.plannedTimeOfDeparture ⇒ <code>String</code>
gets the planned time of departure (public facing)

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: ptd  
<a name="Station+workingTimeOfArrival"></a>

### station.workingTimeOfArrival ⇒ <code>String</code>
gets the working time of arrival for the train (hidden form pulic view)

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: wta  
<a name="Station+workingTimeOfDeparture"></a>

### station.workingTimeOfDeparture ⇒ <code>String</code>
gets the working time of departure for the train (hidden form pulic view)

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: wtd  
<a name="Station+operational"></a>

### station.operational ⇒ <code>Boolean</code>
is the station an operational station

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+platform"></a>

### station.platform ⇒ <code>String</code>
is the platform number (if known)

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station..isPlatformSuppressed"></a>

### Station~isPlatformSuppressed() ⇒ <code>Boolean</code>
determines if the platform is to be suppressed form public view

**Kind**: inner method of <code>[Station](#Station)</code>  
