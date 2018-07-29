export const symbols = new Map()
  .set('tiploc', Symbol('tiploc'))
  .set('action', Symbol('action'))
  .set('plannedTimeOfArrival', Symbol('plannedTimeOfArrival'))
  .set('plannedTimeOfDeparture', Symbol('plannedTimeOfDeparture'))
  .set('workingTimeOfArrival', Symbol('workingTimeOfArrival'))
  .set('workingTimeOfDeparture', Symbol('workingTimeOfDeparture'))
  .set('workingTimeOfPassing', Symbol('workingTimeOfPassing'))
  .set('operational', Symbol('operational'))
  .set('platform', Symbol('platform'))
  .set('platformSuppressed', Symbol('platformSuppressed'));

/**
 * @class
 * @classdesc a class for storing data about a station and to supply helpful functions for manipulating the data
 * @author Steven Collins <steven@carboncollins.uk>
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
    this[symbols.get('workingTimeOfPassing')] = payload.workingTimeOfPassing;
    this[symbols.get('operational')] = operational;
    this[symbols.get('platform')] = payload.platform;
    this[symbols.get('platformSuppressed')] = payload.platformSuppressed;
  }

  /**
   * @member {tpl} tiploc gets the TIPLOC code for this station
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /**
   * @member {act} action gets the action at this station
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get action() {
    return this[symbols.get('action')] || null;
  }

  /**
   * @member {pta} plannedTimeOfArrival gets the planned time of arrival (public facing)
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get plannedTimeOfArrival() {
    return this[symbols.get('plannedTimeOfArrival')] || null;
  }

  /**
   * @member {ptd} plannedTimeOfDeparture gets the planned time of departure (public facing)
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get plannedTimeOfDeparture() {
    return this[symbols.get('plannedTimeOfDeparture')] || null;
  }

  /**
   * @member {wta} workingTimeOfArrival gets the working time of arrival for the train (hidden form pulic view)
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get workingTimeOfArrival() {
    return this[symbols.get('workingTimeOfArrival')] || null;
  }

  /**
   * @member {wtd} workingTimeOfDeparture gets the working time of departure for the train (hidden form public view)
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get workingTimeOfDeparture() {
    return this[symbols.get('workingTimeOfDeparture')] || null;
  }

  /**
   * @member {wtd} workingTimeOfPassing gets the working time of departure for the train (hidden form public view)
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get workingTimeOfPassing() {
    return this[symbols.get('workingTimeOfPassing')] || null;
  }

  /**
   * @member {Boolean} operational is the station an operational station
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get operational() {
    return this[symbols.get('operational')] || false;
  }

  /**
   * @member {plat} platform is the platform number (if known)
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @instance
   * @readonly
   */
  get platform() {
    return this[symbols.get('platform')] || null;
  }

  /**
   * @description determines if the platform is to be suppressed form public view
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Station
   * @returns {Boolean}
   */
  isPlatformSuppressed() {
    return this[symbols.get('platformSuppressed')] || false;
  }
}
