export const symbols = new Map()
  .set('tiploc', Symbol())
  .set('computerReservationSystem', Symbol())
  .set('trainOperatingCompany', Symbol())
  .set('locationName', Symbol());

/**
 * @class
 * @classdesc A class for location information along with helpful functions
 * @augments module:openrailuk/common#Location
 * @instance
 */
export class Location {
  /**
   * @constructor
   * @param {Object} loc the raw location object to be parsed
   */
  constructor(options = {}) {
    this[symbols.get('tiploc')] = options.tiploc;
    this[symbols.get('computerReservationSystem')] = options.computerReservationSystem;
    this[symbols.get('trainOperatingCompany')] = options.trainOperatingCompany;
    this[symbols.get('locationName')] = options.locationName;

    // this.updateLocation(loc);
  }

  /**
   * @member {tpl} tiploc the tiploc code
   * @memberof module:openrailuk/common#Location
   * @description returns the locations tiploc code
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /**
   * @member {toc} trainOperatingCompany the toc code
   * @memberof module:openrailuk/common#Location
   * @description returns the locations operating company
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this[symbols.get('trainOperatingCompany')] || null;
  }

  /**
   * @member {crs} computerReservationSystem the crs code
   * @memberof module:openrailuk/common#Location
   * @description returns the locations crs (Computer Reservation System)
   * @instance
   * @readonly
   */
  get computerReservationSystem() {
    return this[symbols.get('computerReservationSystem')] || null;
  }

  /**
   * @member {String} locationName readable location name
   * @description the name of the location in a human readable format e.g. `Euston`
   * @memberof module:openrailuk/common#Location
   * @instance
   * @readonly
   */
  get locationName() {
    return this[symbols.get('locationName')] || null;
  }

  /**
   * @member {String} location
   * @description Updates the location with a new raw data
   * @param {Object} location the raw location object to be parsed
   * @memberof module:openrailuk/common#Location
   * @instance
   */
  set location(location = {}) {
    symbols.forEach((sym, name) => {
      this[sym] = location[name] || this[sym];
    });
  }
}
