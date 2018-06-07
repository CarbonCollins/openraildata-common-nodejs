'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/association');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export Association class', function() {
      expect(model.Association).to.be.an('function');
      expect(new model.Association()).to.be.an('object');
    });

    it('Should export Association symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['Association', 'symbols']);
    });
  });
};
