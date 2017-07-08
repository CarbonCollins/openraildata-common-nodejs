'use strict';

// const refData = require('../refData');

/**
 * a service for obtaining and managing the reference data
 * @external refData
 * @see {@link ../refData.md refData}
 */

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
  }

  /**
   * @desc get the stations tiploc code
   * @returns {String}
   * @readonly
   */
  get tpl() { return this._payload.tpl; }
  /**
   * @desc get the stations action
   * @returns {String}
   * @readonly
   */
  get act() { return this._payload.act; }
  /**
   * @desc get the stations planned time of arival code
   * @returns {String}
   * @readonly
   */
  get pta() { return this._payload.pta; }
  /**
   * @desc get the stations planned time of departure code
   * @returns {String}
   * @readonly
   */
  get ptd() { return this._payload.ptd; }
  /**
   * @desc get the stations working time of arrival code
   * @returns {String}
   * @readonly
   */
  get wta() { return this._payload.wta; }
  /**
   * @desc get the stations working time of departure code
   * @returns {String}
   * @readonly
   */
  get wtd() { return this._payload.wtd; }
  
  /**
   * @desc alias of tpl
   * @returns {String}
   * @see tpl
   * @readonly
   */
  get tiploc() { return this.tpl; }
  /**
   * @desc alias of act
   * @returns {String}
   * @see act
   * @readonly
   */
  get action() { return this.act; }
  /**
   * @desc alias of pta
   * @returns {String}
   * @see pta
   * @readonly
   */
  get plannedTimeOfArrival() { return this.pta; }
  /**
   * @desc alias of ptd
   * @returns {String}
   * @see ptd
   * @readonly
   */
  get plannedTimeOfDeparture() { return this.ptd; }
  /**
   * @desc alias of wta
   * @returns {String}
   * @see wta
   * @readonly
   */
  get workingTimeOfArrival() { return this.wta; }
  /**
   * @desc alias of wtd
   * @returns {String}
   * @see wtd
   * @readonly
   */
  get workingTimeOfDeparture() { return this.wtd; }
  /**
   * @desc is the station an operational station
   * @returns {Boolean}
   * @readonly
   */
  get operational() { return this._operational; }

  /**
   * @desc gets the stations name from the reference data
   * @returns {String} the location name
   * @readonly
   */
  // get name() { return refData.v3.getLocation(this.tiploc).locname; }
}

module.exports = Station;
