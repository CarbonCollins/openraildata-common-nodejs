'use strict';

const { Location } = require('../index');

/**
 * @class
 * @classdesc A class for housing station messages
 * @augments module:openraildata/common#StationMessage
 * @instance
 */
class StationMessage {

  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   */
  constructor(payload = {}) {
    this._payload = payload;
    this._stations = (payload.Station) ? payload.Station.map(station => new Location(station)) : [];
  }

  /**
   * @member {String} id gets the id of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get id() {
    return (this._payload.id)
      ? this._payload.id
      : null;
  }

  /**
   * @member {stationCategory} category gets the id of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get category() {
    return (this._payload.cat)
      ? this._payload.cat
      : null;
  }

  /**
   * @member {String} message gets the message of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get message() {
    return (this._payload.message)
      ? this._payload.message
      : null;
  }

  /**
   * @member {Number} severity gets the numerical severity of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get severity() {
    return (this._payload.sev)
      ? Number(this._payload.sev)
      : null;
  }

  /**
   * @member {String} severityString get the readable format of the severity of the station message
   * @memberof module:openraildata/common#StationMessage
   * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities}
   * @instance
   * @readonly
   */
  get severityString() { 
    if (this._payload.sev) {
      switch(Number(this._payload.sev)) {
        case 0: return 'Situation normal';
        case 1: return 'Minor';
        case 2: return 'Major';
        case 3: return 'Severe';
        default: return null;
      }
    } else {
      return null;
    }
  }

  /**
   * @member {Location[]} stations gets the list of stations that the station message applied too
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get stations() {
    return this._stations;
  }
}
module.exports = StationMessage;
