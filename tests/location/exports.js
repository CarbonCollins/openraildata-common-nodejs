'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/location');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export Location class', function() {
      expect(model.Location).to.be.an('function');
      expect(new model.Location()).to.be.an('object');
    });

    it('Should export Location symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['Location', 'symbols', 'proxyHandler']);
    });
  });
};
