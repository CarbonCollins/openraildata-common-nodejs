export const symbols = new Map()
  .set('tiploc', Symbol('tiploc'))
  .set('action', Symbol('action'))
  .set('plannedTimeOfArrival', Symbol('plannedTimeOfArrival'))
  .set('plannedTimeOfDeparture', Symbol('plannedTimeOfDeparture'))
  .set('workingTimeOfArrival', Symbol('workingTimeOfArrival'))
  .set('workingTimeOfDeparture', Symbol('workingTimeOfDeparture'))
  .set('operational', Symbol('operational'))
  .set('platform', Symbol('platform'))
  .set('platformSuppressed', Symbol('platformSuppressed'));

/**
 * @class
 * @classdesc a class for storing data about a station and to supply helpful functions for manipulating the data
 * @augments module:openrailuk/common#Station
 * @instance
 */
export class Station {
  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   * @param {Boolean} [operational] an optional boolean to specify if the station is an operational stop
   */
  constructor(payload = {}, operational = false) {
    this[symbols.get('tiploc')] = payload.tiploc;
    this[symbols.get('action')] = payload.action;
    this[symbols.get('plannedTimeOfArrival')] = payload.plannedTimeOfArrival;
    this[symbols.get('plannedTimeOfDeparture')] = payload.plannedTimeOfDeparture;
    this[symbols.get('workingTimeOfArrival')] = payload.workingTimeOfArrival;
    this[symbols.get('workingTimeOfDeparture')] = payload.workingTimeOfDeparture;
    this[symbols.get('operational')] = operational;
    this[symbols.get('platform')] = payload.platform;
    this[symbols.get('platformSuppressed')] = payload.platformSuppressed;
  }

  /**
   * @member {tpl} tiploc gets the TIPLOC code for this station
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /**
   * @member {act} action gets the action at this station
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get action() {
    return this[symbols.get('action')] || null;
  }

  /**
   * @member {pta} plannedTimeOfArrival gets the planned time of arrival (public facing)
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get plannedTimeOfArrival() {
    return this[symbols.get('plannedTimeOfArrival')] || null;
  }

  /**
   * @member {ptd} plannedTimeOfDeparture gets the planned time of departure (public facing)
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get plannedTimeOfDeparture() {
    return this[symbols.get('plannedTimeOfDeparture')] || null;
  }

  /**
   * @member {wta} workingTimeOfArrival gets the working time of arrival for the train (hidden form pulic view)
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get workingTimeOfArrival() {
    return this[symbols.get('workingTimeOfArrival')] || null;
  }

  /**
   * @member {wtd} workingTimeOfDeparture gets the working time of departure for the train (hidden form pulic view)
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get workingTimeOfDeparture() {
    return this[symbols.get('workingTimeOfDeparture')] || null;
  }

  /**
   * @member {Boolean} operational is the station an operational station
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get operational() {
    return this[symbols.get('operational')] || false;
  }

  /**
   * @member {plat} platform is the platform number (if known)
   * @memberof module:openrailuk/common#Station
   * @instance
   * @readonly
   */
  get platform() {
    return this[symbols.get('platform')] || null;
  }

  /**
   * @method module:openrailuk/common#Station~isPlatformSuppressed
   * @description determines if the platform is to be suppressed form public view
   * @alias platsup
   * @returns {Boolean}
   */
  isPlatformSuppressed() {
    return this[symbols.get('platformSuppressed')] || false;
  }
}
