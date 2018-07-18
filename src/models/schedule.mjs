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
  .set('qTrain', Symbol('q train'))
  .set('category', Symbol('category'))
  .set('passengerService', Symbol('passenger service'));

/**
 * @external Station
 * @see {@link https://openrail.gitlab.io/docs/uk/common/Station}
 */
let Station = class Station {}; // placeholder class

export function injectStation(station) {
  if (station && typeof station === typeof class Test {}) {
    Station = station;
  }
}

/**
 * @class
 * @classdesc A class for location information along with helpful functions
 * @author Steven Collins <steven@carboncollins.uk>
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
    this[symbols.get('category')] = payload.category;
    this[symbols.get('passengerService')] = payload.passengerService;

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
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get rid() {
    return this[symbols.get('rid')] || null;
  }

  /**
   * @member {ssd} serviceStartingDate gets the trains ssd
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this[symbols.get('serviceStartingDate')] || null;
  }

  /**
   * @member {toc} trainOperatingCompany gets the trains toc
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this[symbols.get('trainOperatingCompany')] || null;
  }

  /**
   * @member {String} trainId gets the trains trainId
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get trainId() {
    return this[symbols.get('trainId')] || null;
  }

  /**
   * @member {uid} uniqueId gets the schedule train uid
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get uniqueId() {
    return this[symbols.get('uniqueId')] || null;
  }

  /**
   * @description returns the origin or the operational origin
   * @author Steven Collins <steven@carboncollins.uk>
   * @member {external:Station} origin
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get origin() {
    return this.getSingleStation(symbols.get('origin'), symbols.get('operationalOrigin'));
  }

  /**
   * @description returns all of the passing points in which the train passes
   * @author Steven Collins <steven@carboncollins.uk>
   * @member {external:Station[]} passingPoints
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get passingPoints() {
    return this.listMultiStations(symbols.get('passingPoints'));
  }

  /**
   * @description returns all intermediate passenger stops
   * @author Steven Collins <steven@carboncollins.uk>
   * @member {external:tation[]} intermediatePoints
   * @memberof Schedule
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
   * @author Steven Collins <steven@carboncollins.uk>
   * @readonly
   * @memberof Schedule
   */
  get qTrain() {
    return this[symbols.get('qTrain')] || false;
  }

  /**
   * @description type of service 
   * @author Steven Collins <steven@carboncollins.uk>
   * @readonly
   * @memberof Schedule
   */
  get category() {
    return this[symbols.get('category')] || null;
  }

  /**
   * @description determins if this chedule is a passenger service or not
   * @author Steven Collins <steven@carboncollins.uk>
   * @readonly
   * @memberof Schedule
   */
  get passengerService() {
    return this[symbols.get('passengerService')] || false;
  }

  /**
   * @description returns all operational intermediate stops
   * @author Steven Collins <steven@carboncollins.uk>
   * @member {external:Station[]} operationalStops
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get operationalStops() {
    return this.listMultiStations(symbols.get('operationalIntermediatePoints'));
  }

  /**
   * @description returns the destination or operational destination
   * @author Steven Collins <steven@carboncollins.uk>
   * @member {external:Station} destination
   * @memberof Schedule
   * @instance
   * @readonly
   */
  get destination() {
    return this.getSingleStation(symbols.get('destination'), symbols.get('operationalDestination'));
  }

  /**
   * @description gets a list of stations from a specificed type in the payload
   * @author Steven Collins <steven@carboncollins.uk>
   * @param {String} type the type of stations to list
   * @returns {external:Station[]} a list of stations that match that type
   * @memberof Schedule
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
   * @description gets a station and operation station
   * @author Steven Collins <steven@carboncollins.uk>
   * @param {String} type the type of stations to list
   * @returns {external:Station[]} a list of stations that match that type
   * @memberof Schedule
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

  /**
   * @description determins if this service is a passenger servic or not. General rule of thumb is
   * if the category is 'OL', 'OO', 'OW', 'XC', 'XD', 'XI', 'XR', 'XX' or 'XZ' then it will be a
   * passenger service
   * @author Steven Collins <steven@carboncollins.uk>
   * @returns {boolean}
   * @memberof Schedule
   */
  isPassengerService() {
    return (this[symbols.get('passengerService')] && this[symbols.get('passengerService')] === true) || false;
  }
}
