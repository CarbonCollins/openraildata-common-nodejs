'use strict';

/**
 * @class
 * @classdesc a class for storing trainOrder message and to provide helpfull functions
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
   * @desc gets the crs (computer reservation system) code
   * @returns {String|null}
   * @readonly
   */
  get crs() { return (this._payload.crs) ? this._payload.crs : null; }
  /**
   * @desc gets the platform identifier
   * @returns {String|null}
   * @readonly
   */
  get platform() { return (this._payload.platform) ? this._payload.platform : null; }
  /**
   * @desc gets the tiploc code
   * @returns {String|null}
   * @readonly
   */
  get tiploc() { return (this._payload.tiploc) ? this._payload.tiploc : null; }

  /**
   * @desc gets all of the set information for the train order
   * @returns {Object|null}
   * @readonly
   */
  get sets() { return (this._payload.set) ? this._payload.set : null; }
  
  get first() { return (this._payload.set && this._payload.set.first) ? this._payload.set.first : null; }
  get second() { return (this._payload.set && this._payload.set.second) ? this._payload.set.second : null; }
  get third() { return (this._payload.set && this._payload.set.third) ? this._payload.set.third : null; }

  /**
   * @desc gets all of the clear information for the train order
   * @returns {Object|null}
   * @readonly
   */
  get clears() { return (this._payload.clear) ? this._payload.clear : null; }

  /**
   * @method TrainOrder~isSet
   * @desc determines if the train order is a set type
   * @returns {Boolean}
   */
  isSet() { return this._payload.set || false; }

  /**
   * @method TrainOrder~isClear
   * @desc determines if the train order is a clear type
   * @returns {Boolean}
   */
  isClear() { return this._payload.clear || false; }
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