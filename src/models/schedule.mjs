export const symbols = new Map()
  .set('rid', Symbol('rid'))
  .set('serviceStartingDate', Symbol('service starting date'))
  .set('trainOperatingCompany', Symbol('train operating company'))
  .set('trainId', Symbol('train id'))
  .set('uniqueId', Symbol('unique id'))
  .set('origin', Symbol('origin'))
  .set('destination', Symbol('destination'))
  .set('passingPoints', Symbol('passing points'))
  .set('intermediatePoints', Symbol('intermediate points'))
  .set('operationalOrigin', Symbol('operational origin'))
  .set('operationalDestination', Symbol('operational destination'))
  .set('operationalIntermediatePoints', Symbol('operational intermediate points'))
  .set('qTrain', Symbol('q train'));

let Station = class Station {}; // placeholder class

export function injectStation(station) {
  if (station && typeof station === typeof class Test {}) {
    Station = station;
  }
}

/**
 * @class
 * @classdesc A class for location information along with helpful functions
 * @augments module:openrailuk/common#Schedule
 * @instance
 */
export class Schedule {
  /**
   * @constructor
   * @param {Object} payload raw schedule object to be parsed
   */
  constructor(payload = {}) {
    this[symbols.get('rid')] = payload.rid;
    this[symbols.get('serviceStartingDate')] = payload.serviceStartingDate;
    this[symbols.get('trainOperatingCompany')] = payload.trainOperatingCompany;
    this[symbols.get('trainId')] = payload.trainId;
    this[symbols.get('uniqueId')] = payload.uniqueId;

    this[symbols.get('origin')] = payload.origin;
    this[symbols.get('operationalOrigin')] = payload.operationalOrigin;
    this[symbols.get('destination')] = payload.destination;
    this[symbols.get('operationalDestination')] = payload.operationalDestination;
    this[symbols.get('passingPoints')] = payload.passingPoints;
    this[symbols.get('intermediatePoints')] = payload.intermediatePoints;
    this[symbols.get('operationalIntermediatePoints')] = payload.operationalIntermediatePoints;
    this[symbols.get('qTrain')] = payload.qTrain;
  }

  /**
   * @member {String} rid gets the trains rid
   * @memberof module:openrailuk/common#Schedule
   * @instance
   * @readonly
   */
  get rid() {
    return this[symbols.get('rid')] || null;
  }

  /**
   * @member {ssd} serviceStartingDate gets the trains ssd
   * @memberof module:openrailuk/common#Schedule
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this[symbols.get('serviceStartingDate')] || null;
  }

  /**
   * @member {toc} trainOperatingCompany gets the trains toc
   * @memberof module:openrailuk/common#Schedule
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this[symbols.get('trainOperatingCompany')] || null;
  }

  /**
   * @member {String} trainId gets the trains trainId
   * @memberof module:openrailuk/common#Schedule
   * @instance
   * @readonly
   */
  get trainId() {
    return this[symbols.get('trainId')] || null;
  }

  /**
   * @member {uid} uniqueId gets the schedule train uid
   * @memberof module:openrailuk/common#Schedule
   * @instance
   * @readonly
   */
  get uniqueId() {
    return this[symbols.get('uniqueId')] || null;
  }

  /**
   * @member {Station} origin
   * @memberof module:openrailuk/common#Schedule
   * @description returns the origin or the operational origin
   * @instance
   * @readonly
   */
  get origin() {
    return this.getSingleStation(symbols.get('origin'), symbols.get('operationalOrigin'));
  }

  /**
   * @member {Station[]} passingPoints
   * @memberof module:openrailuk/common#Schedule
   * @description returns all of the passing points in which the train passes
   * @instance
   * @readonly
   */
  get passingPoints() {
    return this.listMultiStations(symbols.get('passingPoints'));
  }

  /**
   * @member {Station[]} intermediatePoints
   * @memberof module:openrailuk/common#Schedule
   * @description returns all intermediate passenger stops
   * @instance
   * @readonly
   */
  get intermediatePoints() {
    return this.listMultiStations(symbols.get('intermediatePoints'));
  }

  /**
   * @description True if this is a Q Train (runs as required) that has not yet been activated.
   * Note that a Q Train that has been activated before the XML Timetable file has been built will
   * not have this attribute set true.
   * @readonly
   * @memberof Schedule
   */
  get qTrain() {
    return this[symbols.get('qTrain')] || null;
  }

  /**
   * @member {Station[]} operationalStops
   * @memberof module:openrailuk/common#Schedule
   * @description returns all operational intermediate stops
   * @instance
   * @readonly
   */
  get operationalStops() {
    return this.listMultiStations(symbols.get('operationalIntermediatePoints'));
  }

  /**
   * @member {Station} destination
   * @memberof module:openrailuk/common#Schedule
   * @description returns the destination or operational destination
   * @instance
   * @readonly
   */
  get destination() {
    return this.getSingleStation(symbols.get('destination'), symbols.get('operationalDestination'));
  }

  /**
   * @method module:openrailuk/common#Schedule~listMultiStations
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
   * @method module:openrailuk/common#Schedule~getSingleStation
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

  /**
   * @description determins if the train is of q type
   * @author Steven Collins <steven@carboncollins.uk>
   * @returns {boolean}
   * @memberof Schedule
   */
  isQTrain() {
    return (this[symbols.get('qTrain')] && this[symbols.get('qTrain')] === true) || false;
  }
}
