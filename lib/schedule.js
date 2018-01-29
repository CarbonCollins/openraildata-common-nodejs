'use strict';

const s_rid = Symbol('rid');
const s_ssd = Symbol('serviceStartingDate');
const s_toc = Symbol('trainOperatingCompany');
const s_tid = Symbol('trainId');
const s_uid = Symbol('uniqueId');
const s_OR = Symbol('origin');
const s_DT = Symbol('destination');
const s_PP = Symbol('passingPoints');
const s_IP = Symbol('intermediatePoints');
const s_OPOR = Symbol('operationalOrigin');
const s_OPDT = Symbol('operationalDestination');
const s_OPIP = Symbol('operationalIntermediatePoints');

let Station = class Station {}; // placeholder class

/**
 * @class
 * @classdesc A class for location information along with helpful functions
 * @augments module:openraildata/common#Schedule
 * @instance
 */
class Schedule {
  /**
   * @constructor
   * @param {Object} payload raw schedule object to be parsed
   */
  constructor(payload = {}) {
    this[s_rid] = payload.rid;
    this[s_ssd] = payload.ssd;
    this[s_toc] = payload.toc;
    this[s_tid] = payload.trainId;
    this[s_uid] = payload.uid;

    this[s_OR] = payload.OR;
    this[s_OPOR] = payload.OPOR;
    this[s_DT] = payload.DT;
    this[s_OPDT] = payload.OPDT;
    this[s_PP] = payload.PP;
    this[s_IP] = payload.IP;
    this[s_OPIP] = payload.OPIP;
  }

  /**
   * @member {String} rid gets the trains rid
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get rid() {
    return this[s_rid] || null;
  }

  /**
   * @member {ssd} serviceStartingDate gets the trains ssd
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this[s_ssd] || null;
  }

  /**
   * @member {toc} trainOperatingCompany gets the trains toc
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this[s_toc] || null;
  }

  /**
   * @member {String} trainId gets the trains trainId
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get trainId() {
    return this[s_tid] || null;
  }

  /**
   * @member {uid} uniqueID gets the schedule train uid
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get uniqueID() {
    return this[s_uid] || null;
  }

  /**
   * @member {Station} origin
   * @memberof module:openraildata/common#Schedule
   * @description returns the origin or the operational origin
   * @instance
   * @readonly
   */
  get origin() {
    return this.getSingleStation(s_OR, s_OPOR);
  }

  /**
   * @member {Station[]} passingPoints
   * @memberof module:openraildata/common#Schedule
   * @description returns all of the passing points in which the train passes
   * @instance
   * @readonly
   */
  get passingPoints() {
    return this.listMultiStations(s_PP);
  }

  /**
   * @member {Station[]} intermediatePoints
   * @memberof module:openraildata/common#Schedule
   * @description returns all intermediate passenger stops
   * @instance
   * @readonly
   */
  get intermediatePoints() {
    return this.listMultiStations(s_IP);
  }

  /**
   * @member {Station[]} operationalStops
   * @memberof module:openraildata/common#Schedule
   * @description returns all operational intermediate stops
   * @instance
   * @readonly
   */
  get operationalStops() {
    return this.listMultiStations(s_OPIP);
  }

  /**
   * @member {Station} destination
   * @memberof module:openraildata/common#Schedule
   * @description returns the destination or operational destination
   * @instance
   * @readonly
   */
  get destination() {
    return this.getSingleStation(s_DT, s_OPDT);
  }

  /**
   * @method module:openraildata/common#Schedule~listMultiStations
   * @desc gets a list of stations from a specificed type in the payload
   * @param {String} type the type of stations to list
   * @returns {Station[]} a list of stations that match that type
   * @private
   */
  listMultiStations(type) {
    let operationalStops = [];
    if (this[type]) {
      for (let i = 0, iLength = this[type].length; i < iLength; i += 1) {
        operationalStops.push(new Station(this[type][i]));
      }
    }
    return operationalStops;
  }

  /**
   * @method module:openraildata/common#Schedule~getSingleStation
   * @desc gets a station and operation station
   * @param {String} type the type of stations to list
   * @returns {Station[]} a list of stations that match that type
   * @private
   */
  getSingleStation(type, operationalType) {
    return (this[type] || this[operationalType])
      ? new Station(this[type] || this[operationalType])
      : null;
  }

}

module.exports = Schedule;
module.exports.injectStation = (station) => {
  Station = station;
};
