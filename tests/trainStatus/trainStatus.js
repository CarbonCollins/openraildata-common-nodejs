'use strict';

const { expect } = require('chai');

const exportsSuite = require('./exports');
const valueSuite = require('./values');
const functionSuite = require('./functions');


module.exports = function () {
  describe('TrainStatus class Suite', function() {
    exportsSuite();
    valueSuite();
    functionSuite();
  });
};