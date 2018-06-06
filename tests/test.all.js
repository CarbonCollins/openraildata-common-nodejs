const { expect } = require('chai');

const moduleSuite = require('./module/module');

const Module = require('../index');

describe('@openrailuk/common test suite', function () {
  moduleSuite();
});
