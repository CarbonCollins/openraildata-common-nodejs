'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/trainOrder');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export TrainOrder class', function() {
      expect(model.TrainOrder).to.be.an('function');
      expect(new model.TrainOrder()).to.be.an('object');
    });

    it('Should export TrainOrder symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['TrainOrder', 'symbols']);
    });
  });
};
