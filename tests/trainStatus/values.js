'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/trainStatus');
const { Station } = require('../../lib/common/models/station');

const standardConfig = require('../templates/trainStatus/trainStatus.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.TrainStatus();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.TrainStatus);

      expect(unit.rid).to.be.equal(null);
      expect(unit.uniqueId).to.be.equal(null);
      expect(unit.serviceStartingDate).to.be.equal(null);
      expect(unit.stations).to.be.an('array');
      expect(unit.stations).to.have.lengthOf(0);
    });

    it('Should have the required properties', function() {
      const unit = new model.TrainStatus();

      expect(unit).to.be.an.instanceOf(model.TrainStatus);
      expect(unit).to.have.all.keys(['rid', 'uniqueId', 'serviceStartingDate', 'stations']
        .map((key) => {
          return model.symbols.get(key)
        }));
    });

    it('Should create a valid instance', function () {
      const unit = new model.TrainStatus(standardConfig);

      expect(unit).to.be.an.instanceOf(model.TrainStatus);

      expect(unit.rid).to.be.an('string');
      expect(unit.rid).to.be.equal(standardConfig.rid);

      expect(unit.uniqueId).to.be.an('string');
      expect(unit.uniqueId).to.be.equal(standardConfig.uniqueId);

      expect(unit.serviceStartingDate).to.be.an('string');
      expect(unit.serviceStartingDate).to.be.equal(standardConfig.serviceStartingDate);

      expect(unit.stations).to.be.an('array');
      expect(unit.stations).to.have.lengthOf(1);
      expect(unit.stations).to.satisfy((stations) => {
        return stations.every((station) => {
          return station instanceof Station;
        });
      });
    });

    it('symbol export should have correct mapping', function () {
      const ridSymbol = model.symbols.get('rid');
      expect(ridSymbol).to.be.an('symbol');
      expect(ridSymbol.toString()).to.be.equal('Symbol(rid)');

      const uniqueIdSymbol = model.symbols.get('uniqueId');
      expect(uniqueIdSymbol).to.be.an('symbol');
      expect(uniqueIdSymbol.toString()).to.be.equal('Symbol(uniqueId)');

      const serviceStartingDateSymbol = model.symbols.get('serviceStartingDate');
      expect(serviceStartingDateSymbol).to.be.an('symbol');
      expect(serviceStartingDateSymbol.toString()).to.be.equal('Symbol(serviceStartingDate)');

      const stationsSymbol = model.symbols.get('stations');
      expect(stationsSymbol).to.be.an('symbol');
      expect(stationsSymbol.toString()).to.be.equal('Symbol(stations)');
    });
  });
};
