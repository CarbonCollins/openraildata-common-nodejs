'use strict';

const Station = require('./station');

/**
 * a class for station information and helpful functions
 * @external Station
 * @see {@link station.md Station}
 */

/**
 * @class
 * @classdesc 
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
   * @desc gets the trains rid
   * @returns {String}
   * @readonly
   */
  get rid() { return this._payload.rid; }
  /**
   * @desc gets the trains ssd
   * @returns {String}
   * @readonly
   */
  get ssd() { return this._payload.ssd; }
  /**
   * @desc gets the trains toc
   * @returns {String}
   * @readonly
   */
  get toc() { return this._payload.toc; }
  /**
   * @desc gets the trains trainID
   * @returns {String}
   * @readonly
   */
  get trainId() { return this._payload.trainId; }
  /**
   * @desc gets the trains uid
   * @returns {String}
   * @readonly
   */
  get uid() { return this._payload.uid; }
  /**
   * @desc gets the trains origin station
   * @returns {Station|null}
   * @readonly
   */
  get OR() { return (this._payload.OR) ? new Station(this._payload.OR) : null; }
  /**
   * @desc gets the trains passing points
   * @returns {Station[]}
   * @readonly
   */
  get PP() { 
    let passingPoints = [];
    if (this._payload.PP) {
      for (let i = 0, iLength = this._payload.PP.length; i < iLength; i += 1) {
        passingPoints.push(new Station(this._payload.PP[i]));
      }
    }
    return passingPoints;
  }
  /**
   * @desc gets the trains intermediate points
   * @returns {Station[]}
   * @readonly
   */
  get IP() { 
    let intermediatePoints = [];
    if (this._payload.IP) {
      for (let i = 0, iLength = this._payload.IP.length; i < iLength; i += 1) {
        intermediatePoints.push(new Station(this._payload.IP[i]));
      }
    }
    return intermediatePoints;
  }
  /**
   * @desc gets the trains destination station
   * @returns {Station|null}
   * @readonly
   */
  get DT() { return (this._payload.DT) ? new Station(this._payload.DT) : null; }

  /**
   * @desc gets the trains operational intermediate points
   * @returns {Station[]}
   * @readonly
   */
  get OPIP() { 
    let operationalStops = [];
    if (this._payload.IP) {
      for (let i = 0, iLength = this._payload.OPIP.length; i < iLength; i += 1) {
        operationalStops.push(new Station(this._payload.OPIP[i]));
      }
    }
    return operationalStops;
  }
  /**
   * @desc gets the trains operational origin station
   * @returns {Station|null}
   * @readonly
   */
  get OPOR() { return (this._payload.OPOR) ? new Station(this._payload.OPOR) : null; }
  /**
   * @desc gets the trains operational destination station
   * @returns {Station|null}
   * @readonly
   */
  get OPDT() { return (this._payload.OPDT) ? new Station(this._payload.OPDT) : null; }

  /**
   * @desc alias of toc
   * @returns {String}
   * @see toc
   * @readonly
   */
  get trainOperatingCompany() { return this.toc; }
  /**
   * @desc alias of ssd
   * @returns {String}
   * @see ssd
   * @readonly
   */
  get serviceStartingDate() { return this.ssd; }

  /**
   * @desc gets the trains origin station (regardless if its operational or not)
   * @returns {Station}
   * @readonly
   */
  get origin() { return this.OR || this.OPOR; }
  /**
   * @desc alias of PP
   * @returns {Station[]}
   * @see PP
   * @readonly
   */
  get passingPoints() { return this.PP; }
  /**
   * @desc alias of IP
   * @returns {Station[]}
   * @see IP
   * @readonly
   */
  get intermediatePoints() { return this.IP; }
  /**
   * @desc alias of OPIP
   * @returns {Station[]}
   * @see OPIP
   * @readonly
   */
  get operationalStops() { return this.OPIP; }
  /**
   * @desc gets the trains destination station (regardless if its operational or not)
   * @returns {Station}
   * @readonly
   */
  get destination() { return this.DT || this.OPDT; }
}

module.exports = Schedule;
