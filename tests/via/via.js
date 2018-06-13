'use strict';

const exportsSuite = require('./exports');
const valueSuite = require('./values');
const functionSuite = require('./functions');


module.exports = function () {
  describe('Via class Suite', function() {
    exportsSuite();
    valueSuite();
    functionSuite();
  });
};