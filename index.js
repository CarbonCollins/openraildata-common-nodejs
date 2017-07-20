'use strict';

const Association = require('./lib/association');
const Location = require('./lib/location');
const Schedule = require('./lib/schedule');
const Station =require('./lib/station');
const StationMessage = require('./lib/stationMessage');
const TrainOrder = require('./lib/trainOrder');
const TrainStatus = require('./lib/trainStatus');

/**
 * @class
 * @classdesc a class that is used to export the various data models aswell as provide mixin support
 */
class ORDCommon {
  /**
   * @constructor
   */
  constructor() {
    this.Association = Association;
    this.Location = Schedule;
    this.Schedule = Schedule;
    this.Station = Station;
    this.StationMessage = StationMessage;
    this.TrainOrder = TrainOrder;
    this.TrainStatus = TrainStatus;
  }

  /**
   * @method ORDCommon~associationMixer
   * @param {Function} mixin a mixin function to apply to the Association model
   * @mixes Association
   * @see {@link ./association.md|Association}
   */
  associationMixer(mixin) { this.Association = mixin(this.Association); };

  /**
   * @method ORDCommon~locationMixer
   * @param {Function} mixin a mixin function to apply to the Location model
   * @mixes Location
   * @see {@link ./location.md|Location}
   */
  locationMixer(mixin) { this.Location = mixin(this.Location); };

  /**
   * @method ORDCommon~scheduleMixer
   * @param {Function} mixin a mixin function to apply to the Schedule model
   * @mixes Schedule
   * @see {@link ./schedule.md|Schedule}
   */
  scheduleMixer(mixin) { this.Schedule = mixin(this.Schedule); };

  /**
   * @method ORDCommon~stationMixer
   * @param {Function} mixin a mixin function to apply to the Station model
   * @mixes Station
   * @see {@link ./station.md|Station}
   */
  stationMixer(mixin) { this.Station = mixin(this.Station); };

  /**
   * @method ORDCommon~stationMessageMixer
   * @param {Function} mixin a mixin function to apply to the StationMessage model
   * @mixes StationMessage
   * @see {@link ./stationMessage.md|StationMessage}
   */
  stationMessageMixer(mixin) { this.StationMessage = mixin(this.StationMessage); };

  /**
   * @method ORDCommon~trainOrderMixer
   * @param {Function} mixin a mixin function to apply to the TrainOrder model
   * @mixes TrainOrder
   * @see {@link ./trainOrder.md|TrainOrder}
   */
  trainOrderMixer(mixin) { this.TrainOrder = mixin(this.TrainOrder); };

  /**
   * @method ORDCommon~trainStatusMixer
   * @param {Function} mixin a mixin function to apply to the TrainStatus model
   * @mixes TrainStatus
   * @see {@link ./trainStatus.md|TrainStatus}
   */
  trainStatusMixer(mixin) { this.TrainStatus = mixin(this.TrainStatus); };
}

module.exports = new ORDCommon();
