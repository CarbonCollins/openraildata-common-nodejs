'use strict';

const Station = require('./station');

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
   * @member {String} ssd gets the trains ssd
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get ssd() {
    return this._payload.ssd;
  }

  /**
   * @member {String} toc gets the trains toc
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get toc() {
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
   * @member {String} uid gets the trains uid
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get uid() {
    return this._payload.uid;
  }

  /**
   * @member {Station} OR gets the trains origin station
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get OR() {
    return (this._payload.OR)
      ? new Station(this._payload.OR)
      : null;
  }

  /**
   * @member {Station[]} PP gets the trains passing points
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get PP() {
    return this.listMultiStations('PP');
  }

  /**
   * @member {Station[]} IP gets the trains intermediate points
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get IP() {
    return this.listMultiStations('IP');
  }

  /**
   * @member {Station} DT gets the trains destination station
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get DT() {
    return (this._payload.DT)
      ? new Station(this._payload.DT)
      : null;
  }

  /**
   * @member {Station[]} OPIP gets the trains operational intermediate points
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get OPIP() {
    return this.listMultiStations('OPIP');
  }

  /**
   * @member {Station[]} OPOR gets the trains operational origin station
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get OPOR() {
    return (this._payload.OPOR)
      ? new Station(this._payload.OPOR)
      : null;
  }

  /**
   * @member {Station} OPDT gets the trains operational destination station
   * @memberof module:openraildata/common#Schedule
   * @instance
   * @readonly
   */
  get OPDT() {
    return (this._payload.OPDT)
      ? new Station(this._payload.OPDT)
      : null;
  }

  /**
   * @member {Station} trainOperatingCompany
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#toc
   * @see {@link module:openraildata/common#Schedule#toc}
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this.toc;
  }

  /**
   * @member {Station} serviceStartingDate
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#ssd
   * @see {@link module:openraildata/common#Schedule#ssd}
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this.ssd;
  }

  /**
   * @member {Station} origin
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#OR
   * @alias module:openraildata/common#Schedule#OPOR
   * @see {@link module:openraildata/common#Schedule#OR}
   * @see {@link module:openraildata/common#Schedule#OPOR}
   * @instance
   * @readonly
   */
  get origin() {
    return this.OR || this.OPOR;
  }

  /**
   * @member {Station[]} passingPoints
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#PP
   * @see {@link module:openraildata/common#Schedule#PP}
   * @instance
   * @readonly
   */
  get passingPoints() {
    return this.PP;
  }

  /**
   * @member {Station[]} intermediatePoints
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#IP
   * @see {@link module:openraildata/common#Schedule#IP}
   * @instance
   * @readonly
   */
  get intermediatePoints() {
    return this.IP;
  }

  /**
   * @member {Station[]} operationalStops
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#OPIP
   * @see {@link module:openraildata/common#Schedule#OPIP}
   * @instance
   * @readonly
   */
  get operationalStops() {
    return this.OPIP;
  }

  /**
   * @member {Station} destination
   * @memberof module:openraildata/common#Schedule
   * @alias module:openraildata/common#Schedule#DT
   * @alias module:openraildata/common#Schedule#OPDT
   * @see {@link module:openraildata/common#Schedule#DT}
   * @see {@link module:openraildata/common#Schedule#OPDT}
   * @instance
   * @readonly
   */
  get destination() { return this.DT || this.OPDT; }

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


}

module.exports = Schedule;
