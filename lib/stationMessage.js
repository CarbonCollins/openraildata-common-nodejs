'use strict';

const { Location } = require('openraildata-common');

/**
 * @class
 * @classdesc A class for housing station messages
 */
class StationMessage {

  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   */
  constructor(payload) {
    this._payload = payload;
    this._stations = (payload) ? payload.Station.map(station => new Location(station)) : [];
  }

  /**
   * @desc gets the id of the station message
   * @returns {string|null}
   * @readonly
   */
  get id() { return (this._payload) ? this._payload.id : null; }

  /**
   * @desc gets the category of the station message
   * @returns {string|null}
   * @readonly
   */
  get category() { return (this._payload) ? this._payload.cat : null; }

  /**
   * @desc gets the message of the station message
   * @returns {string|null}
   * @readonly
   */
  get message() { return (this._payload) ? this._payload.message : null; }

  /**
   * @desc gets the numerical severity of the station message
   * @returns {number|null}
   * @readonly
   */
  get severity() { return (this._payload) ? this._payload.sev : null; }

  /**
   * @desc gets the readable format of the severity of the station message
   * @returns {string|null}
   * @readonly
   */
  get severityString() { 
    if (this._payload) {
      switch(this._payload.sev) {
        case 0: case '0': return 'Situation normal';
        case 1: case '1':  return 'Minor';
        case 2: case '2': return 'Major';
        case 3: case '3': return 'Severe';
        default: return null;
      }
    } else {
      return null;
    }
   }

  /**
   * @desc gets the list of stations that the station message applied too
   * @returns {Location[]}
   * @readonly
   */
   get stations() { return this._stations; }

}
module.exports = StationMessage;
