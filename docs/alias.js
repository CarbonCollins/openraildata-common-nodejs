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
 * or a combination of both e.g. '1', '2A', 'C'.
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
 */