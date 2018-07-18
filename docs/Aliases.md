# Aliases

There are several aliases used if you are used to the xml data supplied from the open rail data feeds. If your only interraction with this data is though @openrailuk packages then you probably do not need to worry about this page.

## tiploc  
**alias of**: `tpl`  
**type**: String  
**description**: A TIPLOC code used to identify a station or line parting.  
**see**: [Railway Codes](http://www.railwaycodes.org.uk/crs/CRS0.shtm) for a list of tiploc codes  

---

## action
**alias of**: `act`  
**type**: String  
**description**: An action code is used to determine what kind of action an operation is performing. The value is pretty much always 'A', however, under rare circumstances it could be a 'C' or a 'D' this should not happen though.  
**see**: [Train Planning Data Structure](http://nrodwiki.rockshore.net/index.php/Train_Planning_Data_Structure) on open rail wiki for more info

---

## planned time of arrival
**alias of**: `pta`  
**type**: String  
**description**: Normally in the format of `HH:MM` which represents the Planned Time of Arrival. This value is used on timetables as it is when trains are meant to arrive at that position on the network.
**see**: [Train Status Element](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times) on open rail wiki for more info

---

## planned time of departure
**alias of**: `ptd`  
**type**: String  
**description**: Normally in the format of HH:MM which represents the Planned Time of Departure. This value is used on timetables as it is when trains are meant to depart from that position on the network.  
**see**: [Train Status Element](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times) on open rail wiki for more info  

---

## working time of arrival
**alias of**: `wta`  
**type**: String  
**description**: Normally in the format of HH:MM:SS which represents the Working Time of Arrival. This value is shows the time in which the train actually arrived at that point on the network.  
**see**: [Train Status Element](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times) on open rail wiki for more info  

---

## working time of departure
**alias of**: `wtd`  
**type**: String  
**description**: Normally in the format of HH:MM:SS which represents the Working Time of Departure. This value is shows the time in which the train actually departed at that point on the network.  
**see**: [Train Status Element](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times) on open rail wiki for more info  

---

## platform
**alias of**: `plat`  
**type**: String  
**description**: The identifier of a platform, this can be a number formatted as a string, or a letter  
**see**: [Train Status Element](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers)on open rail wiki for more info  

---

## platform suppressed
**alias of**: `platsup`
**type**: Boolean
**description**: A boolean to determine if the platform identifier should be suppressed from public view. This is used on the arrival displays as it is used to allow staff to perform train duties before allowing the public to know which train to board. If this is set as true then the platform identifier should not be displayed to the public.  
**see**: [Train Status Element](http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers)on open rail wiki for more info  

---

## category
**alias of**: `traincat`  
**type**: String  
**description**: details the type of association between two trains. This value can be either: `JJ` for join, `VV` for devide, or `NP` for next.  
**see**: [Association Records](http://nrodwiki.rockshore.net/index.php/Association_Records#Association_Record_Fields)on open rail wiki for more info  

---

## uniqueId
**alias of**: `uid`  
**type**: String  
**description**: a unique identifier for a train. Each train will have its own uid which can be used to identify it on most data from the open rail data servers e.g. getting a schedule for a train.  

---

## RTTI train ID
**alias of**: `rid`  
**type**: String  
**description**: an RTTI Train ID. Note that since this is an RID, the service must already exist within Darwin. RTTI meaning Real Time Train Information  

---

## train operating company
**alias of**: `toc`  
**type**: String  
**description**: a Train Operating Company string identifier. These are normally a 2 letter code used to identify the company e.g. virgin trains `VT` or caledonian sleeper `CS`.  
**see**: [TOC Codes](http://nrodwiki.rockshore.net/index.php/TOC_Codes) on open rail data wiki  

---

## computer reservation system
**alias of**: `crs`  
**type**: String  
**description**: the Computer Reservation System code is a 3 letter alpha numeric code used to identify a station on the network. It was previously known as nrs (National Reservation System) An example would be Euston station which has a crs of `EUS`.  
**see**: [CRS](http://nrodwiki.rockshore.net/index.php/CRS) on open rail data wiki

---

## service starting date
**alias of**: `ssd`  
**type**: String  
**description**: the Service Starting Date details which day the train service will be operating on. this is in the format of `YYYY-MM-DD`  
**see**: [Schedule Element](http://nrodwiki.rockshore.net/index.php/Darwin:Schedule_Element) on open rail data wiki

---

## category (StationMessage)
**alias of**: `cat`  
**type**: String  
**description**: a catergory for station messages, this can be any of the following: `Train`, `Station`, `Connections`, `System`, `Misc`, `PriorTrains`, or `PriorOthers`.  
**see**: [Darwin:Station Message element](ttp://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Categories) on open rail data wiki  

---

## severity
**alias of**: `sev`  
**type**: Number  
**description**: a  severity rating to detail how severe a message is. This value can be: 0 for normal, 1 for minor, 2 for major, and 3 for severe  
**see**: [Darwin:Station Message element](http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities) on open rail data wiki  
