export const symbols = new Map()
  .set('at', Symbol('at'))
  .set('destination', Symbol('destination'))
  .set('location1', Symbol('location1'))
  .set('location2', Symbol('location2'))
  .set('text', Symbol('text'));

let Location = class Location {}; // place holder class

export function injectLocation(location) {
  if (location && typeof location === 'function') {
    Location = location;
  }
}

/**
 * @method findLocation
 * @description find a specific location and returns its Location object from an array of locations
 * @param {String} name the search term to find
 * @param {Location[]} locationArr the array of locations to search in
 * @returns {?Location} returns with the location object
 * @private
 */
function findLocation(searchTerm, locationArr) {
  const location = (typeof searchTerm === 'string')
    ? locationArr
      .find((loc) => {
          return loc.computerReservationSystem === searchTerm
            || loc.locationName === searchTerm
            || loc.tiploc === searchTerm
      })
    : searchTerm;

  if (location) {
    return new Location(location)
  }
  return null;
}

/**
 * @class
 * @augments module:openrailuk/common#Via
 * @classdesc model for via messages
 */
export class Via {
  /**
   * @constructor
   * @param {Object} payload the raw json object from the ftp containing the toc information
   * @param {Object[]} locations an array of locations in which to map into the via class
   */
  constructor(payload = {}, locations = []) {
    this[symbols.get('at')] = findLocation(payload.at, locations);
    this[symbols.get('destination')] = findLocation(payload.destination, locations);
    this[symbols.get('location1')] = findLocation(payload.location1, locations);
    this[symbols.get('location2')] = findLocation(payload.location2, locations);
    this[symbols.get('text')] = payload.text;
  }

  /**
   * @member {String} at
   * @memberof module:openrailuk/common#Via
   * @description at which point this via is in effect
   * @instance
   * @public
   */
  get at() {
    return this[symbols.get('at')] || null;
  }

  /**
   * @member {String} destination
   * @memberof module:openrailuk/common#Via
   * @description at which point this via is no longer in effect
   * @instance
   * @public
   */
  get destination() {
    return this[symbols.get('destination')] || null;
  }

  /**
   * @member {String} location1
   * @memberof module:openrailuk/common#Via
   * @description the location for the via text
   * @instance
   * @public
   */
  get location1() {
    return this[symbols.get('location1')] || null;
  }

  /**
   * @member {String} location2
   * @memberof module:openrailuk/common#Via
   * @description a secondary location for the via text
   * @instance
   * @public
   */
  get location2() {
    return this[symbols.get('location2')] || null;
  }

  /**
   * @member {String} text
   * @memberof module:openrailuk/common#Via
   * @description a human readable via text to be displayed 
   * @instance
   * @public
   */
  get text() {
    return this[symbols.get('text')] || null;
  }
}
