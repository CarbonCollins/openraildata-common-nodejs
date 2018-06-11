'use strict';

const { expect } = require('chai');

const exportsSuite = require('./exports');
const functionsSuite = require('./functions');


module.exports = function () {
  describe('common.js Suite', function() {
    exportsSuite();
    functionsSuite();
  });
};