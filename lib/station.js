'use strict';

const s_tpl = Symbol('tiploc');
const s_act = Symbol('action');
const s_pta = Symbol('plannedTimeOfArrival');
const s_ptd = Symbol('plannedTimeOfDeparture');
const s_wta = Symbol('workingTimeOfArrival');
const s_wtd = Symbol('workingTimeOfDeparture');
const s_op = Symbol('operational');
const s_plat = Symbol('platform');
const s_platsup = Symbol('platformSuppressed');

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
    this[s_tpl] = payload.tpl;
    this[s_act] = payload.act;
    this[s_pta] = payload.pta;
    this[s_ptd] = payload.ptd;
    this[s_wta] = payload.wta;
    this[s_wtd] = payload.wtd;
    this[s_op] = operational;
    this[s_plat] = payload.plat;
    this[s_platsup] = payload.platsup;
  }

  /**
   * @member {tpl} tiploc gets the TIPLOC code for this station
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[s_tpl] || null;
  }

  /**
   * @member {act} action gets the action at this station
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get action() {
    return this[s_act] || null;
  }

  /**
   * @member {pta} plannedTimeOfArrival gets the planned time of arrival (public facing)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get plannedTimeOfArrival() {
    return this[s_pta] || null;
  }

  /**
   * @member {ptd} plannedTimeOfDeparture gets the planned time of departure (public facing)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get plannedTimeOfDeparture() {
    return this[s_ptd] || null;
  }

  /**
   * @member {wta} workingTimeOfArrival gets the working time of arrival for the train (hidden form pulic view)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get workingTimeOfArrival() {
    return this[s_wta] || null;
  }

  /**
   * @member {wtd} workingTimeOfDeparture gets the working time of departure for the train (hidden form pulic view)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get workingTimeOfDeparture() {
    return this[s_wtd] || null;
  }

  /**
   * @member {Boolean} operational is the station an operational station
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get operational() {
    return this[s_op] || false;
  }

  /**
   * @member {plat} platform is the platform number (if known)
   * @memberof module:openraildata/common#Station
   * @instance
   * @readonly
   */
  get platform() {
    return this[s_plat] || null;
  }

  /**
   * @method module:openraildata/common#Station~isPlatformSuppressed
   * @description determines if the platform is to be suppressed form public view
   * @alias platsup
   * @returns {Boolean}
   */
  isPlatformSuppressed() {
    return this[s_platsup] || false;
  }
}

module.exports = {
  class: Station,
  symbols: {
    s_tpl,
    s_act,
    s_pta,
    s_ptd,
    s_wta,
    s_wtd,
    s_op,
    s_plat,
    s_platsup,
  }
};
