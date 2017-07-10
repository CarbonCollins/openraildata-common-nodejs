## Classes

<dl>
<dt><a href="#Schedule">Schedule</a></dt>
<dd></dd>
</dl>

## External

<dl>
<dt><a href="#external_Station">Station</a></dt>
<dd><p>a class for station information and helpful functions</p>
</dd>
</dl>

<a name="Schedule"></a>

## Schedule
**Kind**: global class  

* [Schedule](#Schedule)
    * [new Schedule(payload)](#new_Schedule_new)
    * [.rid](#Schedule+rid) ⇒ <code>String</code>
    * [.ssd](#Schedule+ssd) ⇒ <code>String</code>
    * [.toc](#Schedule+toc) ⇒ <code>String</code>
    * [.trainId](#Schedule+trainId) ⇒ <code>String</code>
    * [.uid](#Schedule+uid) ⇒ <code>String</code>
    * [.OR](#Schedule+OR) ⇒ <code>Station</code> &#124; <code>null</code>
    * [.PP](#Schedule+PP) ⇒ <code>Array.&lt;Station&gt;</code>
    * [.IP](#Schedule+IP) ⇒ <code>Array.&lt;Station&gt;</code>
    * [.DT](#Schedule+DT) ⇒ <code>Station</code> &#124; <code>null</code>
    * [.OPIP](#Schedule+OPIP) ⇒ <code>Array.&lt;Station&gt;</code>
    * [.OPOR](#Schedule+OPOR) ⇒ <code>Station</code> &#124; <code>null</code>
    * [.OPDT](#Schedule+OPDT) ⇒ <code>Station</code> &#124; <code>null</code>
    * [.trainOperatingCompany](#Schedule+trainOperatingCompany) ⇒ <code>String</code>
    * [.serviceStartingDate](#Schedule+serviceStartingDate) ⇒ <code>String</code>
    * [.origin](#Schedule+origin) ⇒ <code>Station</code>
    * [.passingPoints](#Schedule+passingPoints) ⇒ <code>Array.&lt;Station&gt;</code>
    * [.intermediatePoints](#Schedule+intermediatePoints) ⇒ <code>Array.&lt;Station&gt;</code>
    * [.operationalStops](#Schedule+operationalStops) ⇒ <code>Array.&lt;Station&gt;</code>
    * [.destination](#Schedule+destination) ⇒ <code>Station</code>

<a name="new_Schedule_new"></a>

### new Schedule(payload)

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | raw schedule object to be parsed |

<a name="Schedule+rid"></a>

### schedule.rid ⇒ <code>String</code>
gets the trains rid

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+ssd"></a>

### schedule.ssd ⇒ <code>String</code>
gets the trains ssd

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+toc"></a>

### schedule.toc ⇒ <code>String</code>
gets the trains toc

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+trainId"></a>

### schedule.trainId ⇒ <code>String</code>
gets the trains trainID

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+uid"></a>

### schedule.uid ⇒ <code>String</code>
gets the trains uid

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+OR"></a>

### schedule.OR ⇒ <code>Station</code> &#124; <code>null</code>
gets the trains origin station

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+PP"></a>

### schedule.PP ⇒ <code>Array.&lt;Station&gt;</code>
gets the trains passing points

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+IP"></a>

### schedule.IP ⇒ <code>Array.&lt;Station&gt;</code>
gets the trains intermediate points

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+DT"></a>

### schedule.DT ⇒ <code>Station</code> &#124; <code>null</code>
gets the trains destination station

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+OPIP"></a>

### schedule.OPIP ⇒ <code>Array.&lt;Station&gt;</code>
gets the trains operational intermediate points

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+OPOR"></a>

### schedule.OPOR ⇒ <code>Station</code> &#124; <code>null</code>
gets the trains operational origin station

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+OPDT"></a>

### schedule.OPDT ⇒ <code>Station</code> &#124; <code>null</code>
gets the trains operational destination station

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+trainOperatingCompany"></a>

### schedule.trainOperatingCompany ⇒ <code>String</code>
alias of toc

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
**See**: toc  
<a name="Schedule+serviceStartingDate"></a>

### schedule.serviceStartingDate ⇒ <code>String</code>
alias of ssd

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
**See**: ssd  
<a name="Schedule+origin"></a>

### schedule.origin ⇒ <code>Station</code>
gets the trains origin station (regardless if its operational or not)

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="Schedule+passingPoints"></a>

### schedule.passingPoints ⇒ <code>Array.&lt;Station&gt;</code>
alias of PP

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
**See**: PP  
<a name="Schedule+intermediatePoints"></a>

### schedule.intermediatePoints ⇒ <code>Array.&lt;Station&gt;</code>
alias of IP

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
**See**: IP  
<a name="Schedule+operationalStops"></a>

### schedule.operationalStops ⇒ <code>Array.&lt;Station&gt;</code>
alias of OPIP

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
**See**: OPIP  
<a name="Schedule+destination"></a>

### schedule.destination ⇒ <code>Station</code>
gets the trains destination station (regardless if its operational or not)

**Kind**: instance property of <code>[Schedule](#Schedule)</code>  
**Read only**: true  
<a name="external_Station"></a>

## Station
a class for station information and helpful functions

**Kind**: global external  
**See**: [Station](station.md)  
