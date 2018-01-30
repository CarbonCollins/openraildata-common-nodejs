'use strict';

const s_tpl = Symbol('tiploc');
const s_crs = Symbol('computerReservationSystem');
const s_toc = Symbol('trainOperatingCompany');
const s_locname = Symbol('locationName');

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
    this[s_tpl];
    this[s_crs];
    this[s_toc];
    this[s_locname];

    this.updateLocation(loc);
  }

  /**
   * @member {tpl} tiploc the tiploc code
   * @memberof module:openraildata/common#Location
   * @description returns the locations tiploc code
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[s_tpl] || null;
  }

  /**
   * @member {toc} trainOperatingCompany the toc code
   * @memberof module:openraildata/common#Location
   * @description returns the locations operating company
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this[s_toc] || null;
  }

  /**
   * @member {crs} computerReservationSystem the crs code
   * @memberof module:openraildata/common#Location
   * @description returns the locations crs (Computer Reservation System)
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this[s_crs] || null;
  }

  /**
   * @member {String} locationName readable location name
   * @description the name of the location in a human readable format e.g. `Euston`
   * @memberof module:openraildata/common#Location
   * @instance
   * @readonly
   */
  get locationName() {
    return this[s_locname] || null;
  }

  /**
   * @method module:openraildata/common#Location~updateLocation
   * @description Updates the location wiht a new raw data
   * @param {Object} location the raw location object to be parsed
   */
  updateLocation(location) {
    if (location) {
      this[s_tpl] = location.tpl;
      this[s_crs] = location.crs;
      this[s_toc] = location.toc;
      this[s_locname] = location.locname;
    }
  }
}

module.exports = {
  class: Location,
  symbols: {
    s_tpl,
    s_crs,
    s_toc,
    s_locname
  }
};