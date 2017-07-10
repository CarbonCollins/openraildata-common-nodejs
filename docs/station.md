## Classes

<dl>
<dt><a href="#Station">Station</a></dt>
<dd><p>a class for storing data about a station and to supply helpful functions for manipulating the data</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_refData">refData</a></dt>
<dd><p>an optional package for accessing the reference data to allow some extra functionality in this package
if the package is not present then the extra functions will only return null</p>
</dd>
</dl>

<a name="Station"></a>

## Station
a class for storing data about a station and to supply helpful functions for manipulating the data

**Kind**: global class  

* [Station](#Station)
    * [new Station(payload, [operational])](#new_Station_new)
    * [.tpl](#Station+tpl) ⇒ <code>String</code>
    * [.act](#Station+act) ⇒ <code>String</code>
    * [.pta](#Station+pta) ⇒ <code>String</code>
    * [.ptd](#Station+ptd) ⇒ <code>String</code>
    * [.wta](#Station+wta) ⇒ <code>String</code>
    * [.wtd](#Station+wtd) ⇒ <code>String</code>
    * [.tiploc](#Station+tiploc) ⇒ <code>String</code>
    * [.action](#Station+action) ⇒ <code>String</code>
    * [.plannedTimeOfArrival](#Station+plannedTimeOfArrival) ⇒ <code>String</code>
    * [.plannedTimeOfDeparture](#Station+plannedTimeOfDeparture) ⇒ <code>String</code>
    * [.workingTimeOfArrival](#Station+workingTimeOfArrival) ⇒ <code>String</code>
    * [.workingTimeOfDeparture](#Station+workingTimeOfDeparture) ⇒ <code>String</code>
    * [.operational](#Station+operational) ⇒ <code>Boolean</code>
    * [.name](#Station+name) ⇒ <code>String</code>

<a name="new_Station_new"></a>

### new Station(payload, [operational])

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |
| [operational] | <code>Boolean</code> | an optional boolean to specify if the station is an operational stop |

<a name="Station+tpl"></a>

### station.tpl ⇒ <code>String</code>
get the stations tiploc code

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+act"></a>

### station.act ⇒ <code>String</code>
get the stations action

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+pta"></a>

### station.pta ⇒ <code>String</code>
get the stations planned time of arival code

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+ptd"></a>

### station.ptd ⇒ <code>String</code>
get the stations planned time of departure code

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+wta"></a>

### station.wta ⇒ <code>String</code>
get the stations working time of arrival code

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+wtd"></a>

### station.wtd ⇒ <code>String</code>
get the stations working time of departure code

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+tiploc"></a>

### station.tiploc ⇒ <code>String</code>
alias of tpl

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: tpl  
<a name="Station+action"></a>

### station.action ⇒ <code>String</code>
alias of act

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: act  
<a name="Station+plannedTimeOfArrival"></a>

### station.plannedTimeOfArrival ⇒ <code>String</code>
alias of pta

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: pta  
<a name="Station+plannedTimeOfDeparture"></a>

### station.plannedTimeOfDeparture ⇒ <code>String</code>
alias of ptd

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: ptd  
<a name="Station+workingTimeOfArrival"></a>

### station.workingTimeOfArrival ⇒ <code>String</code>
alias of wta

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: wta  
<a name="Station+workingTimeOfDeparture"></a>

### station.workingTimeOfDeparture ⇒ <code>String</code>
alias of wtd

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
**See**: wtd  
<a name="Station+operational"></a>

### station.operational ⇒ <code>Boolean</code>
is the station an operational station

**Kind**: instance property of <code>[Station](#Station)</code>  
**Read only**: true  
<a name="Station+name"></a>

### station.name ⇒ <code>String</code>
gets the stations name from the reference data

**Kind**: instance property of <code>[Station](#Station)</code>  
**Returns**: <code>String</code> - the location name  
**Read only**: true  
<a name="external_refData"></a>

## refData
an optional package for accessing the reference data to allow some extra functionality in this package
if the package is not present then the extra functions will only return null

**Kind**: global external  
