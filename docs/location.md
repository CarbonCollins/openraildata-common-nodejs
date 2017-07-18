<a name="Location"></a>

## Location
a class for location information along with helpful functions

**Kind**: global class  

* [Location](#Location)
    * [new Location(loc)](#new_Location_new)
    * _instance_
        * [.locname](#Location+locname) ⇒ <code>String</code>
        * [.tpl](#Location+tpl) ⇒ <code>Stirng</code>
        * [.toc](#Location+toc) ⇒ <code>Stirng</code>
        * [.crs](#Location+crs) ⇒ <code>Stirng</code>
        * [.locationName](#Location+locationName) ⇒ <code>String</code>
        * [.tiploc](#Location+tiploc) ⇒ <code>Stirng</code>
        * [.trainOperatingCompany](#Location+trainOperatingCompany) ⇒ <code>Stirng</code>
        * [.computerReservationSystem](#Location+computerReservationSystem) ⇒ <code>Stirng</code>
    * _inner_
        * [~updateLocation(location)](#Location..updateLocation)

<a name="new_Location_new"></a>

### new Location(loc)

| Param | Type | Description |
| --- | --- | --- |
| loc | <code>Object</code> | the raw location object to be parsed |

<a name="Location+locname"></a>

### location.locname ⇒ <code>String</code>
returns the location name

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>String</code> - readable location name  
**Read only**: true  
<a name="Location+tpl"></a>

### location.tpl ⇒ <code>Stirng</code>
returns the locations tiploc code

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>Stirng</code> - the tiploc code  
**Read only**: true  
<a name="Location+toc"></a>

### location.toc ⇒ <code>Stirng</code>
returns the locations operating company

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>Stirng</code> - the toc code  
**Read only**: true  
<a name="Location+crs"></a>

### location.crs ⇒ <code>Stirng</code>
returns the locations crs (Computer Reservation System)

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>Stirng</code> - the crs code  
**Read only**: true  
<a name="Location+locationName"></a>

### location.locationName ⇒ <code>String</code>
alias of locname

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>String</code> - readable location name  
**Read only**: true  
**See**: locname  
<a name="Location+tiploc"></a>

### location.tiploc ⇒ <code>Stirng</code>
alias of tpl

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>Stirng</code> - the tiploc code  
**Read only**: true  
**See**: tpl  
<a name="Location+trainOperatingCompany"></a>

### location.trainOperatingCompany ⇒ <code>Stirng</code>
alias of toc

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>Stirng</code> - the toc code  
**Read only**: true  
**See**: toc  
<a name="Location+computerReservationSystem"></a>

### location.computerReservationSystem ⇒ <code>Stirng</code>
alias of crs

**Kind**: instance property of <code>[Location](#Location)</code>  
**Returns**: <code>Stirng</code> - the crs code  
**Read only**: true  
**See**: crs  
<a name="Location..updateLocation"></a>

### Location~updateLocation(location)
Updates the location wiht a new raw data

**Kind**: inner method of <code>[Location](#Location)</code>  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | the raw location object to be parsed |

