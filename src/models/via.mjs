const viaMap = new Map()
  .set('destination', 'dest')
  .set('location1', 'loc1')
  .set('location2', 'loc2');

export const proxyHandler = {
  get: (obj, prop) => {
    return (viaMap.has(prop))
      ? obj[viaMap.get(prop)] || obj[prop]
      : obj[prop];
  }
}

export const symbols = new Map()
  .set('at', Symbol('at'))
  .set('destination', Symbol('destination'))
  .set('location1', Symbol('location1'))
  .set('location2', Symbol('location2'))
  .set('text', Symbol('text'));

/**
 * @external Location
 * @see {@link https://openrail.gitlab.io/docs/uk/common/Location}
 */
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
 * @classdesc model for via messages
 * @author Steven Collins <steven@carboncollins.uk>
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
   * @description at which point this via is in effect
   * @member {String} at
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Via
   * @instance
   * @public
   */
  get at() {
    return this[symbols.get('at')] || null;
  }

  /**
   * @description at which point this via is no longer in effect
   * @member {String} destination
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Via
   * @instance
   * @public
   */
  get destination() {
    return this[symbols.get('destination')] || null;
  }

  /**
   * @description the location for the via text
   * @member {String} location1
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Via
   * @instance
   * @public
   */
  get location1() {
    return this[symbols.get('location1')] || null;
  }

  /**
   * @description a secondary location for the via text
   * @member {String} location2
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Via
   * @instance
   * @public
   */
  get location2() {
    return this[symbols.get('location2')] || null;
  }

  /**
   * @description a human readable via text to be displayed 
   * @member {String} text
   * @author Steven Collins <steven@carboncollins.uk>
   * @memberof Via
   * @instance
   * @public
   */
  get text() {
    return this[symbols.get('text')] || null;
  }
}
