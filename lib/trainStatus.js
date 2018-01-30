'use strict';

const s_rid = Symbol('rid');
const s_uid = Symbol('uniqueId');
const s_ssd = Symbol('serviceStartingDate');
const s_loc = Symbol('locations');

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
    this[s_rid] = payload.rid;
    this[s_uid] = payload.uid;
    this[s_ssd] = payload.ssd;
    this[s_loc] = (payload.locations || [])
      .map((station) => {
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
    return this[s_rid] || null;
  }

  /**
   * @member {uid} uniqueID gets the schedule uid of the train
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get uniqueID() {
    return this[s_uid] || null;
  }

  /**
   * @member {ssd} serviceStartingDate gets the ssd of the train
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get serviceStartingDate() {
    return this[s_ssd] || null;
  }

  /**
   * @member {Station[]} allLocations gets all of the locations that this train status applies to
   * @memberof module:openraildata/common#TrainStatus
   * @instance
   * @readonly
   */
  get allLocations() {
    return this[s_loc] || [];
  }
}

module.exports = TrainStatus;
module.exports.injectStation = (station) => {
  Station = station;
};
