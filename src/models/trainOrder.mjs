export const symbols = new Map()
  .set('computerReservationSystem', Symbol())
  .set('platform', Symbol())
  .set('tiploc', Symbol())
  .set('set', Symbol())
  .set('clear', Symbol());

/**
 * @class
 * @classdesc a class for storing trainOrder message and to provide helpfull functions
 * @augments module:openrailuk/common#TrainOrder
 * @instance
 */
export default class TrainOrder {
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
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this[symbols.get('computerReservationSystem')] || null;
  }

  /**
   * @member {plat} platform gets the platform identifier
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get platform() {
    return this[symbols.get('platform')] || null;
  }

  /**
   * @member {tpl} tiploc gets the tiploc code
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /**
   * @member {Object} set gets all of the set information for the train order
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get sets() {
    return this[symbols.get('set')] || null;
  }

  /**
   * @member {Object} first gets the first train in the set object
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get first() {
    return this.getSetTrain('first');
  }

  /**
   * @member {Object} second gets the first train in the set object
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get second() {
    return this.getSetTrain('second');
  }

  /**
   * @member {Object} third gets the first train in the set object
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get third() {
    return this.getSetTrain('third');
  }

  /**
   * @member {Object} clear gets all of the clear information for the train order
   * @memberof module:openrailuk/common#TrainOrder
   * @instance
   * @readonly
   */
  get clears() {
    return this[symbols.get('clear')] || null;
  }

  /**
   * @method module:openrailuk/common#TrainOrder~isSet
   * @description determines if the train order is a set type
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isSet() {
    return !!this[symbols.get('set')] || false;
  }

  /**
   * @method module:openrailuk/common#TrainOrder~isClear
   * @description determines if the train order is a clear type
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isClear() {
    return !!this[symbols.get('clear')] || false;
  }

  /**
   * @method module:openrailuk/common#TrainOrder~getSetTrain
   * @description gets a train set: `first`, `second`, or `third`
   * @returns {Object}
   * @private
   */
  getSetTrain(type) {
    return (this[symbols.get('set')] && this[symbols.get('set')][type])
      ? this[symbols.get('set')][type]
      : null;
  }
}
