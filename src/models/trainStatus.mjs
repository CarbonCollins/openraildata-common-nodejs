export const stationMap = new Map()
  .set('tpl', 'tiploc')
  .set('act', 'action')
  .set('pta', 'plannedTimeOfArrival')
  .set('ptd', 'plannedTimeOfDeparture')
  .set('wta', 'workingTimeOfArrival')
  .set('wtd', 'workingTimeOfDeparture')
  .set('operational', 'operational')
  .set('plat', 'platform')
  .set('platsup', 'platformSuppressed');

export const symbols = new Map()
  .set('rid', Symbol())
  .set('uniqueId', Symbol())
  .set('serviceStartingDate', Symbol())
  .set('locations', Symbol())

let Station = class Station {}; // placeholder class

export function injectStation(station) {
  Station = station;
}

/**
 * @class
 * @classdesc a class for train status messages
 * @augments module:openrailuk/common#TrainStatus
 * @instance
 */
export class TrainStatus {
  /**
   * @constructor
   * @param {Object} payload the raw train status message
   */
  constructor(payload = {}) {
    this[symbols.get('rid')] = payload.rid;
    this[symbols.get('uniqueId')] = payload.uniqueId;
    this[symbols.get('serviceStartingDate')] = payload.serviceStartingDate;
    this[symbols.get('locations')] = (payload.locations || [])
      .map((station) => {
        return new Station({
          tiploc: station.tiploc,
          action: station.action,
          plannedTimeOfArrival: station.plannedTimeOfArrival,
          plannedTimeOfDeparture: station.plannedTimeOfDeparture,
          workingTimeOfArrival: station.workingTimeOfArrival,
          workingTimeOfDeparture: station.workingTimeOfDeparture,
          platform: (station.plat) ? station.platform : null,
          platformSuppressed: (station.platformSuppressed) ? station.platformSuppressed : false,
        });
      });
  }

  /**
   * @member {rid} rid gets the rid of the train
   * @memberof module:openrailuk/common#TrainStatus
   * @instance
   * @readonly
   */
  get rid() {
    return this[symbols.get('rid')] || null;
  }

  /**
   * @member {uid} uniqueID gets the schedule uid of the train
   * @memberof module:openrailuk/common#TrainStatus
   * @instance
   * @readonly
   */
  get uniqueID() {
    return this[symbols.get('uniqueId')] || null;
  }

  /**
   * @member {ssd} serviceStartingDate gets the ssd of the train
   * @memberof module:openrailuk/common#TrainStatus
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this[symbols.get('serviceStartingDate')] || null;
  }

  /**
   * @member {Station[]} allLocations gets all of the locations that this train status applies to
   * @memberof module:openrailuk/common#TrainStatus
   * @instance
   * @readonly
   */
  get allLocations() {
    return this[symbols.get('locations')] || [];
  }
}
