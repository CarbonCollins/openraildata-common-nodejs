<a name="TrainStatus"></a>

## TrainStatus
a class for train status messages

**Kind**: global class  

* [TrainStatus](#TrainStatus)
    * [new TrainStatus(payload)](#new_TrainStatus_new)
    * [.rid](#TrainStatus+rid) ⇒ <code>string</code>
    * [.uid](#TrainStatus+uid) ⇒ <code>string</code>
    * [.ssd](#TrainStatus+ssd) ⇒ <code>string</code>
    * [.allLocations](#TrainStatus+allLocations) ⇒ <code>Array.&lt;Station&gt;</code>

<a name="new_TrainStatus_new"></a>

### new TrainStatus(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | the raw train status message |

<a name="TrainStatus+rid"></a>

### trainStatus.rid ⇒ <code>string</code>
gets the rid of the train

**Kind**: instance property of <code>[TrainStatus](#TrainStatus)</code>  
**Read only**: true  
<a name="TrainStatus+uid"></a>

### trainStatus.uid ⇒ <code>string</code>
gets the uid of the train

**Kind**: instance property of <code>[TrainStatus](#TrainStatus)</code>  
**Read only**: true  
<a name="TrainStatus+ssd"></a>

### trainStatus.ssd ⇒ <code>string</code>
gets the ssd of the train

**Kind**: instance property of <code>[TrainStatus](#TrainStatus)</code>  
**Read only**: true  
<a name="TrainStatus+allLocations"></a>

### trainStatus.allLocations ⇒ <code>Array.&lt;Station&gt;</code>
gets all of the locations that this train status applies to

**Kind**: instance property of <code>[TrainStatus](#TrainStatus)</code>  
**Read only**: true  
