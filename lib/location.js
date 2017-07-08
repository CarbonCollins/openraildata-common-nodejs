'use strict';

/**
 * @class
 * @classdesc a class for location information along with helpful functions
 */
class Location {
  /**
   * @constructor
   * @param {Object} loc the raw location object to be parsed
   */
  constructor(loc) {
    this._tpl;
    this._crs;
    this._toc;
    this._locname;

    this.updateLocation(loc);
  }

  /**
   * @method Location~updateLocation
   * @desc Updates the location wiht a new raw data
   * @param {Object} location the raw location object to be parsed
   */
  updateLocation(location) {
    if (location) {
      this._tpl = location.tpl;
      this._crs = location.crs;
      this._toc = location.toc;
      this._locname = location.locname;
    }
  }

  /**
   * @desc returns the location name
   * @returns {String} readable location name
   * @readonly
   */
  get locname() { return this._locname; }
  /**
   * @desc returns the locations tiploc code
   * @returns {Stirng} the tiploc code
   * @readonly
   */
  get tpl() { return this._tpl; }
  /**
   * @desc returns the locations operating company
   * @returns {Stirng} the toc code
   * @readonly
   */
  get toc() { return this._toc; }
  /**
   * @desc returns the locations crs (Computer Reservation System) 
   * @returns {Stirng} the crs code
   * @readonly
   */
  get crs() { return this._src; }

  /**
   * @desc alias of locname
   * @returns {String} readable location name
   * @see locname
   * @readonly
   */
  get locationName() { return this._locname; }
  /**
   * @desc alias of tpl
   * @returns {Stirng} the tiploc code
   * @see tpl
   * @readonly
   */
  get tiploc() { return this._tpl; }
  /**
   * @desc alias of toc
   * @returns {Stirng} the toc code
   * @see toc
   * @readonly
   */
  get trainOperatingCompany() { return this._toc; }
  /**
   * @desc alias of crs 
   * @returns {Stirng} the crs code
   * @see crs
   * @readonly
   */
  get computerReservationSystem() { return this._crs; }
}

module.exports = Location;
