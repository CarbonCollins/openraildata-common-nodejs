'use strict';

let Station = class Station {}; // placeholder class

/**
 * @class
 * @classdesc a class for train status messages
 * @augments module:openraildata/common#TrainStatus
 * @instance
 */
class TrainStatus {
  /**
   * @constructor
   * @param {Object} payload the raw train status message
   */
  constructor(payload = {}) {
    this._payload = payload;
    this._locations = Array(payload.locations || []).map((station) => {
      return new Station({
        pta: station.pta,
        ptd: station.ptd,
        wta: station.wta,
        wtd: station.wtd,
        tpl: station.tpl,
        plat: (station.plat) ? station.plat.$t : null,
        platsup: (station.plat) ? station.plat.platsup : false,
      });
    });
  }

  /**
   * @member {rid} rid gets the rid of the train
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get rid() {
    return (this._payload.rid)
      ? this._payload.rid
      : null
  }

  /**
   * @member {uid} uniqueID gets the schedule uid of the train
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get uniqueID() {
    return (this._payload.uid)
      ? this._payload.uid
      : null
  }

  /**
   * @member {ssd} serviceStartingDate gets the ssd of the train
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return (this._payload.ssd)
      ? this._payload.ssd
      : null
  }

  /**
   * @member {Station[]} allLocations gets all of the locations that this train status applies to
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get allLocations() {
    return this._locations;
  }
}

module.exports = TrainStatus;
module.exports.injectStation = (station) => {
  Station = station;
};
