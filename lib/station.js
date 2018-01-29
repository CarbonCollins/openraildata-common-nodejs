'use strict';

/**
 * @class
 * @classdesc a class for storing data about a station and to supply helpful functions for manipulating the data
 * @augments module:openraildata/common#Station
 * @instance
 */
class Station {
  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   * @param {Boolean} [operational] an optional boolean to specify if the station is an operational stop
   */
  constructor(payload = {}, operational = false) {
    this._payload = payload;
    this._operational = operational;
  }

  /**
   * @member {tpl} tiploc gets the TIPLOC code for this station
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get tiploc() { return this._payload.tpl || null; }

  /**
   * @member {act} action gets the action at this station
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get action() { return this._payload.act || null; }

  /**
   * @member {pta} plannedTimeOfArrival gets the planned time of arrival (public facing)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get plannedTimeOfArrival() { return this._payload.pta || null; }

  /**
   * @member {ptd} plannedTimeOfDeparture gets the planned time of departure (public facing)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get plannedTimeOfDeparture() { return this._payload.ptd || null; }

  /**
   * @member {wta} workingTimeOfArrival gets the working time of arrival for the train (hidden form pulic view)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get workingTimeOfArrival() { return this._payload.wta || null; }

  /**
   * @member {wtd} workingTimeOfDeparture gets the working time of departure for the train (hidden form pulic view)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get workingTimeOfDeparture() { return this._payload.wtd || null; }

  /**
   * @member {Boolean} operational is the station an operational station
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get operational() { return this._operational; }

  /**
   * @member {plat} platform is the platform number (if known)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get platform() { return this._payload.plat || null; }

  /**
   * @method module:openraildata/common#Station~isPlatformSuppressed
   * @description determines if the platform is to be suppressed form public view
   * @alias platsup
   * @returns {Boolean}
   */
  isPlatformSuppressed() { return this._payload.platsup || false; }
}

module.exports = Station;
