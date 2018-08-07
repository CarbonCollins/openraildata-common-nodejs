'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/station');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export Station class', function() {
      expect(model.Station).to.be.an('function');
      expect(new model.Station()).to.be.an('object');
    });

    it('Should export Station symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['Station', 'symbols', 'proxyHandler']);
    });
  });
};
