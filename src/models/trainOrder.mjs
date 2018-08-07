const trainOrderMap = new Map()
  .set('computerReservationSystem', 'crs')
  .set('platform', 'plat')
  .set('tiploc', 'tpl');

export const proxyHandler = {
  get: (obj, prop) => {
    return (trainOrderMap.has(prop))
      ? obj[trainOrderMap.get(prop)] || obj[prop]
      : obj[prop];
  }
}

export const symbols = new Map()
  .set('computerReservationSystem', Symbol('computer reservation system'))
  .set('platform', Symbol('platform'))
  .set('tiploc', Symbol('tiploc'))
  .set('set', Symbol('set'))
  .set('clear', Symbol('clear'));

/**
 * @class
 * @classdesc a class for storing trainOrder message and to provide helpfull functions
 * @author Steven Collins <steven@carboncollins.uk>
 */
export class TrainOrder {
  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   */
  constructor(payload = {}) {
    this[symbols.get('computerReservationSystem')] = payload.computerReservationSystem;
    this[symbols.get('platform')] = payload.platform;
    this[symbols.get('tiploc')] = payload.tiploc;
    this[symbols.get('set')] = payload.set;
    this[symbols.get('clear')] = payload.clear;
  }

  /**
   * @member {crs} computerReservationSystem gets the crs (computer reservation system) code
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this[symbols.get('computerReservationSystem')] || null;
  }

  /**
   * @member {plat} platform gets the platform identifier
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get platform() {
    return this[symbols.get('platform')] || null;
  }

  /**
   * @member {tpl} tiploc gets the tiploc code
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /**
   * @member {Object} set gets all of the set information for the train order
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get set() {
    return this[symbols.get('set')] || null;
  }

  /**
   * @member {Object} first gets the first train in the set object
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get first() {
    return this.getSetTrain('first');
  }

  /**
   * @member {Object} second gets the first train in the set object
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get second() {
    return this.getSetTrain('second');
  }

  /**
   * @member {Object} third gets the first train in the set object
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get third() {
    return this.getSetTrain('third');
  }

  /**
   * @member {Object} clear gets all of the clear information for the train order
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @instance
   * @readonly
   */
  get clear() {
    return this[symbols.get('clear')] || null;
  }

  /**
   * @description determines if the train order is a set type
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isSet() {
    return !!this[symbols.get('set')] || false;
  }

  /**
   * @description determines if the train order is a clear type
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isClear() {
    return !!this[symbols.get('clear')] || false;
  }

  /**
   * @description gets a train set: `first`, `second`, or `third`
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof TrainOrder
   * @returns {Object}
   * @private
   */
  getSetTrain(type) {
    return (type && typeof type === typeof '' && type !== '' && this[symbols.get('set')] && this[symbols.get('set')][type])
      ? this[symbols.get('set')][type]
      : null;
  }
}
