'use strict';

const s_crs = Symbol('computerReservationSystem');
const s_plt = Symbol('platform');
const s_tpl = Symbol('tiploc');
const s_set = Symbol('set');
const s_clr = Symbol('clear');

/**
 * @class
 * @classdesc a class for storing trainOrder message and to provide helpfull functions
 * @augments module:openraildata/common#TrainOrder
 * @instance
 */
class TrainOrder {
  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   */
  constructor(payload = {}) {
    this[s_crs] = payload.crs;
    this[s_plt] = payload.platform;
    this[s_tpl] = payload.tiploc;
    this[s_set] = payload.set;
    this[s_clr] = payload.clear;
  }

  /**
   * @member {crs} computerReservationSystem gets the crs (computer reservation system) code
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this[s_crs] || null;
  }

  /**
   * @member {plat} platform gets the platform identifier
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get platform() {
    return this[s_plt] || null;
  }

  /**
   * @member {tpl} tiploc gets the tiploc code
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[s_tpl] || null;
  }

  /**
   * @member {Object} set gets all of the set information for the train order
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get sets() {
    return this[s_set] || null;
  }

  /**
   * @member {Object} first gets the first train in the set object
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get first() {
    return this.getSetTrain('first');
  }

  /**
   * @member {Object} second gets the first train in the set object
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get second() {
    return this.getSetTrain('second');
  }

  /**
   * @member {Object} third gets the first train in the set object
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get third() {
    return this.getSetTrain('third');
  }

  /**
   * @member {Object} clear gets all of the clear information for the train order
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get clears() {
    return this[s_clr] || null;
  }

  /**
   * @method module:openraildata/common#TrainOrder~isSet
   * @description determines if the train order is a set type
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isSet() {
    return !!this[s_set] || false;
  }

  /**
   * @method module:openraildata/common#TrainOrder~isClear
   * @description determines if the train order is a clear type
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isClear() {
    return !!this[s_clr] || false;
  }

  /**
   * @method module:openraildata/common#TrainOrder~getSetTrain
   * @description gets a train set: `first`, `second`, or `third`
   * @returns {Object}
   * @private
   */
  getSetTrain(type) {
    return (this[s_set] && this[s_set][type])
      ? this[s_set][type]
      : null;
  }
}

module.exports = {
  class: TrainOrder,
  symbols: {
    s_crs,
    s_plt,
    s_tpl,
    s_set,
    s_clr
  }
};
