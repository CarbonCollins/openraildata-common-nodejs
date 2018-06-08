const { expect } = require('chai');

const moduleSuite = require('./module/module');

const associationSuite = require('./association/association');
const locationSuite = require('./location/location');
const scheduleSuite = require('./schedule/schedule');
const stationSuite = require('./station/station');

const Module = require('../index');

describe('@openrailuk/common test suite', function () {
  moduleSuite();
  associationSuite();
  locationSuite();
  scheduleSuite();
  stationSuite();
});
