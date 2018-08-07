const locationMap = new Map()
  .set('tiploc', 'tpl')
  .set('computerReservationSystem', 'crs')
  .set('trainOperatingCompany', 'toc')
  .set('locationName', 'locname');

export const proxyHandler = {
  get: (obj, prop) => {
    return (locationMap.has(prop))
      ? obj[locationMap.get(prop)] || obj[prop]
      : obj[prop];
  }
}

export const symbols = new Map()
  .set('tiploc', Symbol('tiploc'))
  .set('computerReservationSystem', Symbol('computer reservation system'))
  .set('trainOperatingCompany', Symbol('train operating company'))
  .set('locationName', Symbol('location name'));

/**
 * @class
 * @classdesc A class for location information along with helpful functions
 * @author Steven Collins <steven@carboncollins.uk>
 */
export class Location {
  /**
   * @constructor
   * @param {Object} loc the raw location object to be parsed
   * @author Steven Collins <steven@carboncollins.uk>
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
   * @memberof Location
   * @description returns the locations tiploc code
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /**
   * @member {toc} trainOperatingCompany the toc code
   * @memberof Location
   * @description returns the locations operating company
   * @instance
   * @readonly
   */
  get trainOperatingCompany() {
    return this[symbols.get('trainOperatingCompany')] || null;
  }

  /**
   * @member {crs} computerReservationSystem the crs code
   * @memberof Location
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
   * @memberof Location
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
   * @memberof Location
   * @instance
   */
  set location(location = {}) {
    if (location && typeof location === typeof {}) {
      symbols.forEach((sym, name) => {
        this[sym] = location[name] || this[sym];
      });
    }
  }
}
