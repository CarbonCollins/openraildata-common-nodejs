<a name="StationMessage"></a>

## StationMessage
A class for housing station messages

**Kind**: global class  

* [StationMessage](#StationMessage)
    * [new StationMessage(payload)](#new_StationMessage_new)
    * [.id](#StationMessage+id) ⇒ <code>string</code> &#124; <code>null</code>
    * [.category](#StationMessage+category) ⇒ <code>string</code> &#124; <code>null</code>
    * [.message](#StationMessage+message) ⇒ <code>string</code> &#124; <code>null</code>
    * [.severity](#StationMessage+severity) ⇒ <code>number</code> &#124; <code>null</code>
    * [.severityString](#StationMessage+severityString) ⇒ <code>string</code> &#124; <code>null</code>
    * [.stations](#StationMessage+stations) ⇒ <code>Array.&lt;Location&gt;</code>

<a name="new_StationMessage_new"></a>

### new StationMessage(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |

<a name="StationMessage+id"></a>

### stationMessage.id ⇒ <code>string</code> &#124; <code>null</code>
gets the id of the station message

**Kind**: instance property of <code>[StationMessage](#StationMessage)</code>  
**Read only**: true  
<a name="StationMessage+category"></a>

### stationMessage.category ⇒ <code>string</code> &#124; <code>null</code>
gets the category of the station message

**Kind**: instance property of <code>[StationMessage](#StationMessage)</code>  
**Read only**: true  
<a name="StationMessage+message"></a>

### stationMessage.message ⇒ <code>string</code> &#124; <code>null</code>
gets the message of the station message

**Kind**: instance property of <code>[StationMessage](#StationMessage)</code>  
**Read only**: true  
<a name="StationMessage+severity"></a>

### stationMessage.severity ⇒ <code>number</code> &#124; <code>null</code>
gets the numerical severity of the station message

**Kind**: instance property of <code>[StationMessage](#StationMessage)</code>  
**Read only**: true  
<a name="StationMessage+severityString"></a>

### stationMessage.severityString ⇒ <code>string</code> &#124; <code>null</code>
gets the readable format of the severity of the station message

**Kind**: instance property of <code>[StationMessage](#StationMessage)</code>  
**Read only**: true  
<a name="StationMessage+stations"></a>

### stationMessage.stations ⇒ <code>Array.&lt;Location&gt;</code>
gets the list of stations that the station message applied too

**Kind**: instance property of <code>[StationMessage](#StationMessage)</code>  
**Read only**: true  
