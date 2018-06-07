'use strict';

const { expect } = require('chai');

const exportsSuite = require('./exports');
const valueSuite = require('./values');


module.exports = function () {
  describe('Association class Suite', function() {
    exportsSuite();
    valueSuite();
  });
};