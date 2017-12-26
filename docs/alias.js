/**
 * @name alias.js
 * @description This file is being used to describe all of the various aliases and terms used by
 * the openraildata packages. 
 * @private
 */

/**
 * @typedef {String} tpl
 * @description A TIPLOC code used to identify a station or line parting.
 * For a comprehensive list of TIPLOC codes there is a currently (26/12/2017) activly maintained
 * db found at the provided link
 * @see {@link http://www.railwaycodes.org.uk/crs/CRS0.shtm}
 * @global
 */

/**
 * @typedef {String} act
 * @description An action code is used to determine what kind of action an operation is
 * performing. The value is pretty much always 'A', however, under rare circmstances it could be
 * a 'C' or a 'D' this should not happen though.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Train_Planning_Data_Structure}
 * @global
 */

/**
 * @typedef {String} pta
 * @description Normaly in the format of HH:MM which represents the Planned Time of Arrival. This
 * value is used on timetables as it is when trains are meant to arrive at that position on the
 * network.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times}
 * @global
 */

/**
 * @typedef {String} ptd
 * @description Normaly in the format of HH:MM which represents the Planned Time of Departure. This
 * value is used on timetables as it is when trains are meant to depart from that position on the
 * network.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times}
 * @global
 */

/**
 * @typedef {String} wta
 * @description Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
 * This value is shows the time in which the train actualy arrived at that point on the network.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times}
 * @global
 */

/**
 * @typedef {String} wtd
 * @description Normaly in the format of HH:MM:SS which represents the Working Time of Arrival.
 * This value is shows the time in which the train actualy arrived at that point on the network.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Actual_times}
 * @global
 */

/**
 * @typedef {String} plat
 * @description The identifier of a platform, this can be a number formatted as a string, a letter
 * or a combination of both e.g. `1`, `2A`, `C`.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers}
 * @global
 */

/**
 * @typedef {Boolean} platsup
 * @description A boolean to determine if the platform identifier should be suppressed from public
 * view. This is used on the arrival displays as it is used to allow staff to perform train duties
 * before allowing the public to know which train to board. If this is set as true then the
 * platform identifier should not be displayed to the public.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Train_Status_Element#Platform_numbers}
 * @global
 */

/**
 * @typedef {String} category
 * @description details the type of association between two trains. This value can be either:
 * `JJ` for join, `VV` for devide, or `NP` for next.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Association_Records#Association_Record_Fields}
 */

/**
 * @typedef {String} uid
 * @description a unique identifier for a train. Each train will have its own uid which can be used
 * to identify it on most data from the openraildata servers e.g. getting a schedule for a train.
 */

/**
 * @typedef {String} rid
 * @description an RTTI Train ID. Note that since this is an RID, the service must already exist
 * within Darwin. RTTI meaning Real Time Train Information
 */

/**
 * @typedef {string} toc
 * @description a Train Operating Company tring itendifier. These are normaly a 2 letter code used
 * to identify the company e.g. virgin trains `VT` or calledonian sleeper `CS`.
 * @see {@link http://nrodwiki.rockshore.net/index.php/TOC_Codes}
 */

/**
 * @typedef {String} crs
 * @description the Computer Reservation System code is a 3 letter alpha numeric code used to
 * identify a station on the network. It was previously known as nrs (National Reservation System)
 * An example would be Euston station which has a crs of `EUS`.
 * @see {@link http://nrodwiki.rockshore.net/index.php/CRS}
 */

/**
 * @typedef {String} ssd
 * @description the Service Starting Date details which day the train service will be operating on.
 * this is in the format of YYYY-MM-DD
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Schedule_Element}
 */

/**
 * @typedef {String} stationCategory
 * @description a catergory for station messages, this can be any of the following: `Train`,
 * `Station`, `Connections`, `System`, `Misc`, `PriorTrains`, or `PriorOthers`.
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Categories}
 */

/**
 * @typedef {Number} severity
 * @description a severity rating to detail how severe a message is. This value can be:
 * 0 for normal, 1 for minor, 2 for major, and 3 for severe
 * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities}
 */
