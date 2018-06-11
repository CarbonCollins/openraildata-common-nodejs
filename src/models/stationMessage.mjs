export const symbols = new Map()
  .set('id', Symbol())
  .set('category', Symbol())
  .set('message', Symbol())
  .set('severity', Symbol())
  .set('locations', Symbol());

let Location = class Location {}; // place holder class

export function injectLocation(location) {
  if (location && typeof location === 'function') {
    Location = location;
  }
}

/**
 * @class
 * @classdesc A class for housing station messages
 * @augments module:openrailuk/common#StationMessage
 * @instance
 */
export class StationMessage {

  /**
   * @constructor
   * @param {Object} payload a raw object containing the station information
   */
  constructor(payload = {}) {
    this[symbols.get('id')] = payload.id;
    this[symbols.get('category')] = payload.category;
    this[symbols.get('message')] = payload.message;
    this[symbols.get('severity')] = payload.severity;
    this[symbols.get('locations')] = (payload.locations)
      ? payload.locations.map(location => new Location(location))
      : [];
  }

  /**
   * @member {String} id gets the id of the station message
   * @memberof module:openrailuk/common#StationMessage
   * @instance
   * @readonly
   */
  get id() {
    return this[symbols.get('id')] || null;
  }

  /**
   * @member {stationCategory} category gets the id of the station message
   * @memberof module:openrailuk/common#StationMessage
   * @instance
   * @readonly
   */
  get category() {
    return this[symbols.get('category')] || null;
  }

  /**
   * @member {String} message gets the message of the station message
   * @memberof module:openrailuk/common#StationMessage
   * @instance
   * @readonly
   */
  get message() {
    return this[symbols.get('message')] || null;
  }

  /**
   * @member {Number} severity gets the numerical severity of the station message
   * @memberof module:openrailuk/common#StationMessage
   * @instance
   * @readonly
   */
  get severity() {
    return (this[symbols.get('severity')] !== undefined && Number.isNaN(this[symbols.get('severity')]) !== 'NaN')
      ? Number(this[symbols.get('severity')])
      : null;
  }

  /**
   * @member {String} severityString get the readable format of the severity of the station message
   * @memberof module:openrailuk/common#StationMessage
   * @see {@link http://nrodwiki.rockshore.net/index.php/Darwin:Station_Message_Element#Severities}
   * @instance
   * @readonly
   */
  get severityString() { 
    if (this[symbols.get('severity')] !== undefined && Number.isNaN(this[symbols.get('severity')]) !== 'NaN') {
      switch (Number(this[symbols.get('severity')])) {
        case 0: return 'Situation normal';
        case 1: return 'Minor';
        case 2: return 'Major';
        case 3: return 'Severe';
        default: return null;
      }
    } else {
      return null;
    }
  }

  /**
   * @member {Location[]} locations gets the list of station locations that the station message applied too
   * @memberof module:openrailuk/common#StationMessage
   * @instance
   * @readonly
   */
  get locations() {
    return this[symbols.get('locations')];
  }
}
