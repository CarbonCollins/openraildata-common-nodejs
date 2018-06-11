'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/trainOrder');

const standardConfigSet = require('../templates/trainOrder/trainOrderSet.json');
const standardConfigClear = require('../templates/trainOrder/trainOrderClear.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.TrainOrder();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.TrainOrder);

      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.platform).to.be.equal(null);
      expect(unit.tiploc).to.be.equal(null);
      expect(unit.set).to.be.equal(null);
      expect(unit.clear).to.be.equal(null);
    });

    it('Should have the required properties', function() {
      const unit = new model.TrainOrder();

      expect(unit).to.be.an.instanceOf(model.TrainOrder);
      expect(unit).to.have.all.keys(['computerReservationSystem', 'platform', 'tiploc', 'set', 'clear']
        .map((key) => {
          return model.symbols.get(key)
        }));
    });

    it('Should create a valid set instance', function () {
      const unit = new model.TrainOrder(standardConfigSet);

      expect(unit).to.be.an.instanceOf(model.TrainOrder);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfigSet.computerReservationSystem);

      expect(unit.platform).to.be.an('string');
      expect(unit.platform).to.be.equal(standardConfigSet.platform);

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfigSet.tiploc);

      expect(unit.set).to.be.an('object');
      expect(unit.set).to.be.equal(standardConfigSet.set);

      expect(unit.first).to.be.an('string');
      expect(unit.first).to.be.equal(standardConfigSet.set.first);

      expect(unit.second).to.be.an('string');
      expect(unit.second).to.be.equal(standardConfigSet.set.second);

      expect(unit.third).to.be.an('string');
      expect(unit.third).to.be.equal(standardConfigSet.set.third);

      expect(unit.clear).to.be.equal(null);
    });

    it('Should create a valid clear instance', function () {
      const unit = new model.TrainOrder(standardConfigClear);

      expect(unit).to.be.an.instanceOf(model.TrainOrder);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfigClear.computerReservationSystem);

      expect(unit.platform).to.be.an('string');
      expect(unit.platform).to.be.equal(standardConfigClear.platform);

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfigClear.tiploc);

      expect(unit.set).to.be.equal(null);
      expect(unit.first).to.be.equal(null);
      expect(unit.second).to.be.equal(null);
      expect(unit.third).to.be.equal(null);

      expect(unit.clear).to.be.an('boolean');
      expect(unit.clear).to.be.equal(standardConfigClear.clear);
    });

    it('symbol export should have correct mapping', function () {
      const computerReservationSystemSymbol = model.symbols.get('computerReservationSystem');
      expect(computerReservationSystemSymbol).to.be.an('symbol');
      expect(computerReservationSystemSymbol.toString()).to.be.equal('Symbol()');

      const platformSymbol = model.symbols.get('platform');
      expect(platformSymbol).to.be.an('symbol');
      expect(platformSymbol.toString()).to.be.equal('Symbol()');

      const tiplocSymbol = model.symbols.get('tiploc');
      expect(tiplocSymbol).to.be.an('symbol');
      expect(tiplocSymbol.toString()).to.be.equal('Symbol()');

      const setSymbol = model.symbols.get('set');
      expect(setSymbol).to.be.an('symbol');
      expect(setSymbol.toString()).to.be.equal('Symbol()');

      const clearSymbol = model.symbols.get('clear');
      expect(clearSymbol).to.be.an('symbol');
      expect(clearSymbol.toString()).to.be.equal('Symbol()');
    });
  });
};
