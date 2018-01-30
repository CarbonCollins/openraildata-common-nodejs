'use strict';

const s_id = Symbol('id');
const s_cat = Symbol('category');
const s_msg = Symbol('message');
const s_sev = Symbol('severity');
const s_stat = Symbol('stations');

let Location = class Location {}; // place holder class

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
    this[s_id] = payload.id;
    this[s_cat] = payload.cat;
    this[s_msg] = payload.message
    this[s_sev] = payload.sev;
    this[s_stat] = (payload.Station) ? payload.Station.map(station => new Location(station)) : [];
  }

  /**
   * @member {String} id gets the id of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get id() {
    return this[s_id] || null;
  }

  /**
   * @member {stationCategory} category gets the id of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get category() {
    return this[s_cat] || null;
  }

  /**
   * @member {String} message gets the message of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get message() {
    return this[s_msg] || null;
  }

  /**
   * @member {Number} severity gets the numerical severity of the station message
   * @memberof module:openraildata/common#StationMessage
   * @instance
   * @readonly
   */
  get severity() {
    return (this[s_sev] !== undefined && Number.isNaN(this[s_sev]) !== 'NaN')
      ? Number(this[s_sev])
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
    if (this[s_sev] !== undefined && Number.isNaN(this[s_sev]) !== 'NaN') {
      switch (Number(this[s_sev])) {
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
    return this[s_stat] || [];
  }
}
module.exports = StationMessage;
module.exports.injectLocation = (location) => {
  Location = location;
};

