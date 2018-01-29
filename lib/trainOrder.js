'use strict';

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
    this._payload = payload;
  }

  /**
   * @member {crs} computerReservationSystem gets the crs (computer reservation system) code
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return (this._payload.crs)
      ? this._payload.crs
      : null;
  }

  /**
   * @member {plat} platform gets the platform identifier
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get platform() {
    return (this._payload.platform)
      ? this._payload.platform
      : null;
  }

  /**
   * @member {tpl} tiploc gets the tiploc code
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get tiploc() {
    return (this._payload.tiploc)
      ? this._payload.tiploc
      : null;
  }

  /**
   * @member {Object} set gets all of the set information for the train order
   * @memberof module:openraildata/common#TrainOrder
   * @instance
   * @readonly
   */
  get sets() {
    return (this._payload.set)
      ? this._payload.set
      : null;
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
    return (this._payload.clear)
      ? this._payload.clear
      : null;
  }

  /**
   * @method module:openraildata/common#TrainOrder~isSet
   * @description determines if the train order is a set type
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isSet() {
    return !!this._payload.set || false;
  }

  /**
   * @method module:openraildata/common#TrainOrder~isClear
   * @description determines if the train order is a clear type
   * @returns {Boolean}
   * @instance
   * @readonly
   */
  isClear() {
    return !!this._payload.clear || false;
  }

  /**
   * @method module:openraildata/common#TrainOrder~getSetTrain
   * @description gets a train set: `first`, `second`, or `third`
   * @returns {Object}
   * @private
   */
  getSetTrain(type) {
    return (this._payload.set && this._payload.set[type])
      ? this._payload.set[type]
      : null;
  }
}

module.exports = TrainOrder;


// {
//   "Pport": {
//     "xmlns": "http://www.thalesgroup.com/rtti/PushPort/v12",
//     "xmlns:ns6": "http://www.thalesgroup.com/rtti/PushPort/TrainOrder/v1",
//     "ts": "2017-07-10T16:48:54.0695783+01:00",
//     "version": 12,
//     "uR": {
//       "requestID": "AM07155972",
//       "requestSource": "AM07",
//       "updateOrigin": "CIS",
//       "trainOrder": {
//         "crs": "FNY",
//         "platform": 2,
//         "tiploc": "FNCHLYR",
//         "set": {
//           "first": {
//             "rid": {
//               "pta": "16:51",
//               "ptd": "16:51",
//               "wta": "16:51:30",
//               "wtd": "16:52",
//               "$t": 201707107662990
//             }
//           }
//         }
//       }
//     }
//   }
// }