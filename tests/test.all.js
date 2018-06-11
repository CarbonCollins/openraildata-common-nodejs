const { expect } = require('chai');

const moduleSuite = require('./module/module');

const commonSuite = require('./common/common');

const associationSuite = require('./association/association');
const locationSuite = require('./location/location');
const scheduleSuite = require('./schedule/schedule');
const stationSuite = require('./station/station');
const stationMessageSuite = require('./stationMessage/stationMessage');
const trainOrderSuite = require('./trainOrder/trainOrder');
const trainStatusSuite = require('./trainStatus/trainStatus');

const Module = require('../index');

describe('@openrailuk/common test suite', function () {
  moduleSuite();
  commonSuite();
  associationSuite();
  locationSuite();
  scheduleSuite();
  stationSuite();
  stationMessageSuite();
  trainOrderSuite();
  trainStatusSuite();
});
