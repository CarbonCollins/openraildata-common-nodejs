'use strict';

/**
 * @class
 * @classdesc A class for location information along with helpful functions
 * @augments module:openraildata/common#Location
 * @instance
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
   * @member {String} locname readable location name
   * @memberof module:openraildata/common#Location
   * @description returns the location name
   * @instance
   * @readonly
   */
  get locname() {
    return this._locname;
  }

  /**
   * @member {tpl} tiploc the tiploc code
   * @memberof module:openraildata/common#Location
   * @description returns the locations tiploc code
   * @instance
   * @readonly
   */
  get tiploc() {
    return this._tpl;
  }

  /**
   * @member {toc} trainOperatingCompany the toc code
   * @memberof module:openraildata/common#Location
   * @description returns the locations operating company
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this._toc;
  }

  /**
   * @member {crs} computerReservationSystem the crs code
   * @memberof module:openraildata/common#Location
   * @description returns the locations crs (Computer Reservation System)
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this._src;
  }

  /**
   * @member {String} locationName readable location name
   * @description the name of the location in a human readable format e.g. `Euston`
   * @memberof module:openraildata/common#Location
   * @instance
   * @readonly
   */
  get locationName() {
    return this._locname;
  }

  /**
   * @method module:openraildata/common#Location~updateLocation
   * @description Updates the location wiht a new raw data
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
}

module.exports = Location;
