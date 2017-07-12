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

  /**
   * @desc gets the rid of the train
   * @returns {string}
   * @readonly
   */
  get rid() { return this._rid; }

  /**
   * @desc gets the uid of the train
   * @returns {string}
   * @readonly
   */
  get uid() { return this._uid; }

  /**
   * @desc gets the ssd of the train
   * @returns {string}
   * @readonly
   */
  get ssd() { return this._ssd; }

  /**
   * @desc gets all of the locations that this train status applies to
   * @returns {Station[]}
   * @readonly
   */
  get allLocations() { return this._locations; }
}

module.exports = TrainStatus;
