'use strict';

const Association = require('./lib/association');
const Location = require('./lib/location');
const Schedule = require('./lib/schedule');
const Station = require('./lib/station');
const StationMessage = require('./lib/stationMessage');
const TrainOrder = require('./lib/trainOrder');
const TrainStatus = require('./lib/trainStatus');

const s_association = Symbol('association');
const s_location = Symbol('location');
const s_schedule = Symbol('schedule');
const s_station = Symbol('station');
const s_stationMessage = Symbol('stationMessage');
const s_trainOrder = Symbol('trainOrder');
const s_trainStatus = Symbol('trainStatus');

/**
 * @module openraildata/common
 * @description the openraildata/common module is used to export various data classes used within
 * many of the openraildata modules. This common package is used to remove duplicate copies of
 * each of these data classes and so that they are maintained in one place. Because of this there
 * is not much actual funcitonality within this module. Mixing functions are exposed which allow
 * other modules to mix extra functionality into the data classes in this module in order for the
 * classes to be identical wherever they are used.
 */

/**
 * @class
 * @private
 */
class ORDCommon {
  /**
   * @constructor
   */
  constructor() {
    this[s_association] = Association.class;
    this[s_location] = Location.class;
    this[s_schedule] = Schedule.class;
    this[s_station] = Station.class;
    this[s_stationMessage] = StationMessage.class;
    this[s_trainOrder] = TrainOrder.class;
    this[s_trainStatus] = TrainStatus.class;
  }

  /**
   * @member {module:openraildata/common#Association} Association
   * @instance
   * @readonly
   */
  get Association() {
    return this[s_association];
  }

  /**
   * @member {module:openraildata/common#Location} Location
   * @instance
   * @readonly
   */
  get Location() {
    return this[s_location];
  }

  /**
   * @member {module:openraildata/common#Schedule} Schedule
   * @instance
   * @readonly
   */
  get Schedule() {
    return this[s_schedule];
  }

  /**
   * @member {Station} Station
   * @instance
   * @readonly
   */
  get Station() {
    return this[s_station];
  }

  /**
   * @member {StationMessage} StationMessage
   * @instance
   * @readonly
   */
  get StationMessage() {
    return this[s_stationMessage];
  }

  /**
   * @member {TrainOrder} TrainOrder
   * @instance
   * @readonly
   */
  get TrainOrder() {
    return this[s_trainOrder];
  }

  /**
   * @member {TrainStatus} TrainStatus
   * @instance
   * @readonly
   */
  get TrainStatus() {
    return this[s_trainStatus];
  }

  /**
   * @method module:openraildata/common~associationMixer
   * @param {Function} mixin a mixin function to apply to the Association model
   * @mixes Association
   * @see {@link ./association.md|Association}
   */
  associationMixer(mixin) {
    this[s_association] = mixin(this[s_association], Association.symbols);
  }

  /**
   * @method module:openraildata/common~locationMixer
   * @param {Function} mixin a mixin function to apply to the Location model
   * @mixes Location
   * @see {@link ./location.md|Location}
   */
  locationMixer(mixin) {
    this[s_location] = mixin(this[s_location], Location.symbols);
  }

  /**
   * @method module:openraildata/common~scheduleMixer
   * @param {Function} mixin a mixin function to apply to the Schedule model
   * @mixes Schedule
   * @see {@link ./schedule.md|Schedule}
   */
  scheduleMixer(mixin) {
    this[s_schedule] = mixin(this[s_schedule], Schedule.symbols);
  }

  /**
   * @method module:openraildata/common~stationMixer
   * @param {Function} mixin a mixin function to apply to the Station model
   * @mixes Station
   * @see {@link ./station.md|Station}
   */
  stationMixer(mixin) {
    this[s_station] = mixin(this[s_station], Station.symbols);
  }

  /**
   * @method module:openraildata/common~stationMessageMixer
   * @param {Function} mixin a mixin function to apply to the StationMessage model
   * @mixes StationMessage
   * @see {@link ./stationMessage.md|StationMessage}
   */
  stationMessageMixer(mixin) {
    this[s_stationMessage] = mixin(this[s_stationMessage], StationMessage.symbols);
  }

  /**
   * @method module:openraildata/common~trainOrderMixer
   * @param {Function} mixin a mixin function to apply to the TrainOrder model
   * @mixes TrainOrder
   * @see {@link ./trainOrder.md|TrainOrder}
   */
  trainOrderMixer(mixin) {
    this[s_trainOrder] = mixin(this[s_trainOrder], TrainOrder.symbols);
  }

  /**
   * @method module:openraildata/common~trainStatusMixer
   * @param {Function} mixin a mixin function to apply to the TrainStatus model
   * @mixes TrainStatus
   * @see {@link ./trainStatus.md|TrainStatus}
   */
  trainStatusMixer(mixin) {
    this[s_trainStatus] = mixin(this[s_trainStatus], TrainStatus.symbols);
  }
}

const ORD = new ORDCommon();

Schedule.injectStation(ORD.Station); // inject potentialy mixed station object by reference
TrainStatus.injectStation(ORD.Station); // inject potentialy mixed station object by reference
StationMessage.injectLocation(ORD.Location); // inject potentialy mixed location object by reference

module.exports = ORD;
