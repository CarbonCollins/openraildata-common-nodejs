'use strict';

const Association = require('./lib/association');
const Location = require('./lib/location');
const Schedule = require('./lib/schedule');
const Station =require('./lib/station');
const StationMessage = require('./lib/stationMessage');
const TrainOrder = require('./lib/trainOrder');
const TrainStatus = require('./lib/trainStatus');

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
    this.Association = Association;
    this.Location = Location;
    this.Schedule = Schedule;
    this.Station = Station;
    this.StationMessage = StationMessage;
    this.TrainOrder = TrainOrder;
    this.TrainStatus = TrainStatus;
  }

  /**
   * @member {module:openraildata/common#Association} Association
   * @instance
   * @readonly
   */
  get Association() {
    return this.Association;
  }

  /**
   * @member {module:openraildata/common#Location} Location
   * @instance
   * @readonly
   */
  get Location() {
    return this.Location;
  }

  /**
   * @member {module:openraildata/common#Schedule} Schedule
   * @instance
   * @readonly
   */
  get Schedule() {
    return this.Schedule;
  }

  /**
   * @member {Station} Station
   * @instance
   * @readonly
   */
  get Station() {
    return this.Station;
  }

  /**
   * @member {StationMessage} StationMessage
   * @instance
   * @readonly
   */
  get StationMessage() {
    return this.StationMessage;
  }

  /**
   * @member {TrainOrder} TrainOrder
   * @instance
   * @readonly
   */
  get TrainOrder() {
    return this.TrainOrder;
  }

  /**
   * @member {TrainStatus} TrainStatus
   * @instance
   * @readonly
   */
  get TrainStatus() {
    return this.TrainStatus;
  }

  /**
   * @method module:openraildata/common~associationMixer
   * @param {Function} mixin a mixin function to apply to the Association model
   * @mixes Association
   * @see {@link ./association.md|Association}
   */
  associationMixer(mixin) {
    this.Association = mixin(this.Association);
  }

  /**
   * @method module:openraildata/common~locationMixer
   * @param {Function} mixin a mixin function to apply to the Location model
   * @mixes Location
   * @see {@link ./location.md|Location}
   */
  locationMixer(mixin) {
    this.Location = mixin(this.Location);
  }

  /**
   * @method module:openraildata/common~scheduleMixer
   * @param {Function} mixin a mixin function to apply to the Schedule model
   * @mixes Schedule
   * @see {@link ./schedule.md|Schedule}
   */
  scheduleMixer(mixin) {
    this.Schedule = mixin(this.Schedule);
  }

  /**
   * @method module:openraildata/common~stationMixer
   * @param {Function} mixin a mixin function to apply to the Station model
   * @mixes Station
   * @see {@link ./station.md|Station}
   */
  stationMixer(mixin) {
    this.Station = mixin(this.Station);
  }

  /**
   * @method module:openraildata/common~stationMessageMixer
   * @param {Function} mixin a mixin function to apply to the StationMessage model
   * @mixes StationMessage
   * @see {@link ./stationMessage.md|StationMessage}
   */
  stationMessageMixer(mixin) {
    this.StationMessage = mixin(this.StationMessage);
  }

  /**
   * @method module:openraildata/common~trainOrderMixer
   * @param {Function} mixin a mixin function to apply to the TrainOrder model
   * @mixes TrainOrder
   * @see {@link ./trainOrder.md|TrainOrder}
   */
  trainOrderMixer(mixin) {
    this.TrainOrder = mixin(this.TrainOrder);
  }

  /**
   * @method module:openraildata/common~trainStatusMixer
   * @param {Function} mixin a mixin function to apply to the TrainStatus model
   * @mixes TrainStatus
   * @see {@link ./trainStatus.md|TrainStatus}
   */
  trainStatusMixer(mixin) {
    this.TrainStatus = mixin(this.TrainStatus);
  }
}

module.exports = new ORDCommon();
