'use strict';
const { expect } = require('chai');

const association = require('../../lib/es5/models/association');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(association).to.be.an('object');
    });

    it('Should export Association class', function() {
      expect(association.Association).to.be.an('function');
      expect(new association.Association()).to.be.an('object');
    });

    it('Should export Association symbols', function() {
      expect(association.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(association).to.have.all.keys(['Association', 'symbols']);
    });
  });
};
