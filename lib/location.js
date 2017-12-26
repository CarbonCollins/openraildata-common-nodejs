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
   * @member {String} tpl the tiploc code
   * @memberof module:openraildata/common#Location
   * @description returns the locations tiploc code
   * @instance
   * @readonly
   */
  get tpl() {
    return this._tpl;
  }

  /**
   * @member {String} toc the toc code
   * @memberof module:openraildata/common#Location
   * @description returns the locations operating company
   * @instance
   * @readonly
   */
  get toc() {
    return this._toc;
  }

  /**
   * @member {String} crs the crs code
   * @memberof module:openraildata/common#Location
   * @description returns the locations crs (Computer Reservation System)
   * @instance
   * @readonly
   */
  get crs() {
    return this._src;
  }

  /**
   * @member {String} locationName readable location name
   * @memberof module:openraildata/common#Location
   * @description alias of locname
   * @see locname
   * @instance
   * @readonly
   */
  get locationName() {
    return this._locname;
  }

  /**
   * @member {String} tiploc the tiploc code
   * @memberof module:openraildata/common#Location
   * @alias module:openraildata/common#Location#tpl
   * @see {@link module:openraildata/common#Location#tpl}
   * @instance
   * @readonly
   */
  get tiploc() {
    return this._tpl;
  }

  /**
   * @member {String} trainOperatingCompany the toc code
   * @memberof module:openraildata/common#Location
   * @alias module:openraildata/common#Location#toc
   * @see {@link module:openraildata/common#Location#toc}
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this._toc;
  }

  /**
   * @member {String} computerReservationSystem the crs code
   * @memberof module:openraildata/common#Location
   * @alias module:openraildata/common#Location#crs
   * @see {@link module:openraildata/common#Location#crs}
   * @description alias of crs 
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this._crs;
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
