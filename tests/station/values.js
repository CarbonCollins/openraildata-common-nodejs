'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/station');

const standardConfig = require('../templates/station/station.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.Station();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.Station);

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.action).to.be.equal(null);
      expect(unit.plannedTimeOfArrival).to.be.equal(null);
      expect(unit.plannedTimeOfDeparture).to.be.equal(null);
      expect(unit.workingTimeOfArrival).to.be.equal(null);
      expect(unit.workingTimeOfDeparture).to.be.equal(null);
      expect(unit.operational).to.be.equal(false);
      expect(unit.platform).to.be.equal(null);
    });

    it('Should have the required properties', function() {
      const unit = new model.Station();

      expect(unit).to.be.an.instanceOf(model.Station);
      expect(unit).to.have.all.keys(['tiploc', 'action', 'plannedTimeOfArrival', 'plannedTimeOfDeparture', 'workingTimeOfArrival', 'workingTimeOfDeparture', 'workingTimeOfPassing', 'operational', 'platform', 'platformSuppressed']
        .map((key) => {
          return model.symbols.get(key)
        }));
    });

    it('Should create a valid instance', function () {
      const unit = new model.Station(standardConfig);

      expect(unit).to.be.an.instanceOf(model.Station);

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfig.tiploc);

      expect(unit.action).to.be.an('string');
      expect(unit.action).to.be.equal(standardConfig.action);

      expect(unit.plannedTimeOfArrival).to.be.an('string');
      expect(unit.plannedTimeOfArrival).to.be.equal(standardConfig.plannedTimeOfArrival);

      expect(unit.plannedTimeOfDeparture).to.be.an('string');
      expect(unit.plannedTimeOfDeparture).to.be.equal(standardConfig.plannedTimeOfDeparture);

      expect(unit.workingTimeOfArrival).to.be.an('string');
      expect(unit.workingTimeOfArrival).to.be.equal(standardConfig.workingTimeOfArrival);

      expect(unit.workingTimeOfDeparture).to.be.an('string');
      expect(unit.workingTimeOfDeparture).to.be.equal(standardConfig.workingTimeOfDeparture);

      expect(unit.workingTimeOfPassing).to.be.an('string');
      expect(unit.workingTimeOfPassing).to.be.equal(standardConfig.workingTimeOfPassing);

      expect(unit.operational).to.be.an('boolean');
      expect(unit.operational).to.be.equal(standardConfig.operational);

      expect(unit.platform).to.be.an('string');
      expect(unit.platform).to.be.equal(standardConfig.platform);
    });

    it('symbol export should have correct mapping', function () {

      const tiplocSymbol = model.symbols.get('tiploc');
      expect(tiplocSymbol).to.be.an('symbol');
      expect(tiplocSymbol.toString()).to.be.equal('Symbol(tiploc)');
      
      const actionSymbol = model.symbols.get('action');
      expect(actionSymbol).to.be.an('symbol');
      expect(actionSymbol.toString()).to.be.equal('Symbol(action)');
      
      const plannedTimeOfArrivalSymbol = model.symbols.get('plannedTimeOfArrival');
      expect(plannedTimeOfArrivalSymbol).to.be.an('symbol');
      expect(plannedTimeOfArrivalSymbol.toString()).to.be.equal('Symbol(plannedTimeOfArrival)');
      
      const plannedTimeOfDepartureSymbol = model.symbols.get('plannedTimeOfDeparture');
      expect(plannedTimeOfDepartureSymbol).to.be.an('symbol');
      expect(plannedTimeOfDepartureSymbol.toString()).to.be.equal('Symbol(plannedTimeOfDeparture)');
      
      const workingTimeOfArrivalSymbol = model.symbols.get('workingTimeOfArrival');
      expect(workingTimeOfArrivalSymbol).to.be.an('symbol');
      expect(workingTimeOfArrivalSymbol.toString()).to.be.equal('Symbol(workingTimeOfArrival)');
      
      const workingTimeOfDepartureSymbol = model.symbols.get('workingTimeOfDeparture');
      expect(workingTimeOfDepartureSymbol).to.be.an('symbol');
      expect(workingTimeOfDepartureSymbol.toString()).to.be.equal('Symbol(workingTimeOfDeparture)');
      
      const workingTimeOfPassingSymbol = model.symbols.get('workingTimeOfPassing');
      expect(workingTimeOfPassingSymbol).to.be.an('symbol');
      expect(workingTimeOfPassingSymbol.toString()).to.be.equal('Symbol(workingTimeOfPassing)');
      
      const operationalSymbol = model.symbols.get('operational');
      expect(operationalSymbol).to.be.an('symbol');
      expect(operationalSymbol.toString()).to.be.equal('Symbol(operational)');
      
      const platformSymbol = model.symbols.get('platform');
      expect(platformSymbol).to.be.an('symbol');
      expect(platformSymbol.toString()).to.be.equal('Symbol(platform)');
      
      const platformSuppressedSymbol = model.symbols.get('platformSuppressed');
      expect(platformSuppressedSymbol).to.be.an('symbol');
      expect(platformSuppressedSymbol.toString()).to.be.equal('Symbol(platformSuppressed)');
    });
  });
};
