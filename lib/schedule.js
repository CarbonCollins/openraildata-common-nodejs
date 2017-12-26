'use strict';

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
  constructor(payload) {
    this._payload = payload;
  }

  /**
   * @member {String} rid gets the trains rid
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get rid() {
    return this._payload.rid;
  }

  /**
   * @member {ssd} serviceStartingDate gets the trains ssd
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this._payload.ssd;
  }

  /**
   * @member {toc} trainOperatingCompany gets the trains toc
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this._payload.toc;
  }

  /**
   * @member {String} trainId gets the trains trainId
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get trainId() {
    return this._payload.trainId;
  }

  /**
   * @member {uid} uniqueID gets the schedule train uid
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get uniqueID() {
    return this._payload.uid;
  }

  /**
   * @member {Station} origin
   * @memberof module:openraildata/common#Schedule
   * @description returns the origin or the operational origin
   * @instance
   * @readonly
   */
  get origin() {
    return this.getSingleStation('OR');
  }

  /**
   * @member {Station[]} passingPoints
   * @memberof module:openraildata/common#Schedule
   * @description returns all of the passing points in which the train passes
   * @instance
   * @readonly
   */
  get passingPoints() {
    return this.listMultiStations('PP');
  }

  /**
   * @member {Station[]} intermediatePoints
   * @memberof module:openraildata/common#Schedule
   * @description returns all intermediate passenger stops
   * @instance
   * @readonly
   */
  get intermediatePoints() {
    return this.listMultiStations('IP');
  }

  /**
   * @member {Station[]} operationalStops
   * @memberof module:openraildata/common#Schedule
   * @description returns all operational intermediate stops
   * @instance
   * @readonly
   */
  get operationalStops() {
    return this.listMultiStations('OPIP');
  }

  /**
   * @member {Station} destination
   * @memberof module:openraildata/common#Schedule
   * @description returns the destination or operational destination
   * @instance
   * @readonly
   */
  get destination() {
    return this.getSingleStation('DT');
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
    if (this._payload[type]) {
      for (let i = 0, iLength = this._payload[type].length; i < iLength; i += 1) {
        operationalStops.push(new Station(this._payload[type][i]));
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
  getSingleStation(type) {
    return (this._payload[type] || this._payload[`OP${type}`])
      ? new Station(this._payload[type] || this._payload[`OP${type}`])
      : null;
  }

}

module.exports = Schedule;
module.exports.injectStation = (station) => {
  Station = station;
};
