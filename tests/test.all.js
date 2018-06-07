const { expect } = require('chai');

const moduleSuite = require('./module/module');

const associationSuite = require('./association/association');
const locationSuite = require('./location/location');

const Module = require('../index');

describe('@openrailuk/common test suite', function () {
  moduleSuite();
  associationSuite();
  locationSuite();
});
