<a name="TrainOrder"></a>

## TrainOrder
a class for storing trainOrder message and to provide helpfull functions

**Kind**: global class  

* [TrainOrder](#TrainOrder)
    * [new TrainOrder(payload)](#new_TrainOrder_new)
    * _instance_
        * [.crs](#TrainOrder+crs) ⇒ <code>String</code> &#124; <code>null</code>
        * [.platform](#TrainOrder+platform) ⇒ <code>String</code> &#124; <code>null</code>
        * [.tiploc](#TrainOrder+tiploc) ⇒ <code>String</code> &#124; <code>null</code>
        * [.sets](#TrainOrder+sets) ⇒ <code>Object</code> &#124; <code>null</code>
        * [.clears](#TrainOrder+clears) ⇒ <code>Object</code> &#124; <code>null</code>
    * _inner_
        * [~isSet()](#TrainOrder..isSet) ⇒ <code>Boolean</code>
        * [~isClear()](#TrainOrder..isClear) ⇒ <code>Boolean</code>

<a name="new_TrainOrder_new"></a>

### new TrainOrder(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | a raw object containing the station information |

<a name="TrainOrder+crs"></a>

### trainOrder.crs ⇒ <code>String</code> &#124; <code>null</code>
gets the crs (computer reservation system) code

**Kind**: instance property of <code>[TrainOrder](#TrainOrder)</code>  
**Read only**: true  
<a name="TrainOrder+platform"></a>

### trainOrder.platform ⇒ <code>String</code> &#124; <code>null</code>
gets the platform identifier

**Kind**: instance property of <code>[TrainOrder](#TrainOrder)</code>  
**Read only**: true  
<a name="TrainOrder+tiploc"></a>

### trainOrder.tiploc ⇒ <code>String</code> &#124; <code>null</code>
gets the tiploc code

**Kind**: instance property of <code>[TrainOrder](#TrainOrder)</code>  
**Read only**: true  
<a name="TrainOrder+sets"></a>

### trainOrder.sets ⇒ <code>Object</code> &#124; <code>null</code>
gets all of the set information for the train order

**Kind**: instance property of <code>[TrainOrder](#TrainOrder)</code>  
**Read only**: true  
<a name="TrainOrder+clears"></a>

### trainOrder.clears ⇒ <code>Object</code> &#124; <code>null</code>
gets all of the clear information for the train order

**Kind**: instance property of <code>[TrainOrder](#TrainOrder)</code>  
**Read only**: true  
<a name="TrainOrder..isSet"></a>

### TrainOrder~isSet() ⇒ <code>Boolean</code>
determines if the train order is a set type

**Kind**: inner method of <code>[TrainOrder](#TrainOrder)</code>  
<a name="TrainOrder..isClear"></a>

### TrainOrder~isClear() ⇒ <code>Boolean</code>
determines if the train order is a clear type

**Kind**: inner method of <code>[TrainOrder](#TrainOrder)</code>  
