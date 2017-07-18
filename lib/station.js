'use strict';

/**
 * @class
 * @classdesc a class for storing data about a station and to supply helpful functions for manipulating the data
 */
class Station {
  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   * @param {Boolean} [operational] an optional boolean to specify if the station is an operational stop
   */
  constructor(payload, operational) {
    this._payload = payload;
    this._operational = operational || false;

    this._tiploc = payload.tpl || null;
    this._action = payload.act || null;

    this._plannedTimeOfArrival = payload.pta || null;
    this._plannedTimeOfDeparture = payload.ptd || null;

    this._workingTimeOfArrival = payload.wta || null;
    this._workingTimeOfDeparture = payload.wtd || null;

    this._platform = payload.plat || null;
    this._platformSuppressed = payload.platsup || false;
  }

  /**
   * @desc gets the TIPLOC code for this station
   * @returns {String}
   * @readonly
   */
  get tiploc() { return this._tiploc; }
  /**
   * @desc gets the action at this station
   * @returns {String}
   * @readonly
   */
  get action() { return this._action; }
  /**
   * @desc gets the planned time of arrival (public facing)
   * @returns {String}
   * @readonly
   */
  get plannedTimeOfArrival() { return this._plannedTimeOfArrival; }
  /**
   * @desc gets the planned time of departure (public facing)
   * @returns {String}
   * @see ptd
   * @readonly
   */
  get plannedTimeOfDeparture() { return this._plannedTimeOfDeparture; }
  /**
   * @desc gets the working time of arrival for the train (hidden form pulic view)
   * @returns {String}
   * @see wta
   * @readonly
   */
  get workingTimeOfArrival() { return this._workingTimeOfArrival; }
  /**
   * @desc gets the working time of departure for the train (hidden form pulic view)
   * @returns {String}
   * @see wtd
   * @readonly
   */
  get workingTimeOfDeparture() { return this._workingTimeOfDeparture; }
  /**
   * @desc is the station an operational station
   * @returns {Boolean}
   * @readonly
   */
  get operational() { return this._operational; }
  /**
   * @desc is the platform number (if known)
   * @returns {String}
   * @readonly
   */
  get platform() { return this._platform; }

  /**
   * @method Station~isPlatformSuppressed
   * @desc determines if the platform is to be suppressed form public view
   * @returns {Boolean}
   */
  isPlatformSuppressed() { return this._platformSuppressed; }
}

module.exports = Station;
