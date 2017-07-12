'use strict';

/**
 * @desc Contains various classes for use with the openraildata packages and can be accessed by using:
 * const { Association, Station, ect } = require('openraildata-common);
 */

module.exports.Association = require('./lib/association');
module.exports.Location = require('./lib/location');
module.exports.Schedule = require('./lib/schedule');
module.exports.Station = require('./lib/station');
module.exports.TrainOrder = require('./lib/trainOrder');
module.exports.TrainStatus = require('./lib/trainStatus');
