'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/trainStatus');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export TrainStatus class', function() {
      expect(model.TrainStatus).to.be.an('function');
      expect(new model.TrainStatus()).to.be.an('object');
    });

    it('Should export TrainStatus symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['TrainStatus', 'symbols', 'injectStation', 'proxyHandler']);
    });
  });
};
