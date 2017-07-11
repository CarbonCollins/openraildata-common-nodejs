'use strict';

const Station = require('./station');

/**
 * @class
 * @classdesc a class for train status messages
 */
class TrainStatus {
  /**
   * @constructor
   * @param {Object} payload the raw train status message
   */
  constructor(payload) {
    this._rid = payload.rid || null;
    this._uid = payload.uid || null;
    this._ssd = payload.ssd || null;
    this._locations = Array(payload.locations || []).map((station) => {
      return new Station({
        pta: station.pta || null,
        ptd: station.ptd || null,
        wta: station.wta || null,
        wtd: station.wtd || null,
        tpl: station.tpl || null,
        plat: (station.plat) ? station.plat.$t || null : null,
        platsup: (station.plat) ? station.plat.platsup || false : false,
      });
    });
  }

  get rid() { return this._rid; }
}

module.exports = TrainStatus;
