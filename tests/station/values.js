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

    it('should export a valid proxy handler', function() {
      expect(model.proxyHandler).to.be.an('object');

      expect(model.proxyHandler.get).to.be.an('function');

      expect(model.proxyHandler.get({ testObj: 'testObj' }, 'testObj')).to.be.equal('testObj', 'Should return un-modified property');
      
      expect(model.proxyHandler.get({ tpl: 'tpl' }, 'tpl')).to.be.equal('tpl', 'Should return tpl un-modified');
      expect(model.proxyHandler.get({ tpl: 'tpl' }, 'tiploc')).to.be.equal('tpl', 'Should return tpl modified as tiploc');
      
      expect(model.proxyHandler.get({ act: 'act' }, 'act')).to.be.equal('act', 'Should return act un-modified');
      expect(model.proxyHandler.get({ act: 'act' }, 'action')).to.be.equal('act', 'Should return crs modified as action');
      
      expect(model.proxyHandler.get({ pta: 'pta' }, 'pta')).to.be.equal('pta', 'Should return pta un-modified');
      expect(model.proxyHandler.get({ pta: 'pta' }, 'plannedTimeOfArrival')).to.be.equal('pta', 'Should return pta modified as plannedTimeOfArrival');
      
      expect(model.proxyHandler.get({ ptd: 'ptd' }, 'ptd')).to.be.equal('ptd', 'Should return ptd un-modified');
      expect(model.proxyHandler.get({ ptd: 'ptd' }, 'plannedTimeOfDeparture')).to.be.equal('ptd', 'Should return ptd modified as plannedTimeOfDeparture');
      
      expect(model.proxyHandler.get({ wta: 'wta' }, 'wta')).to.be.equal('wta', 'Should return wta un-modified');
      expect(model.proxyHandler.get({ wta: 'wta' }, 'workingTimeOfArrival')).to.be.equal('wta', 'Should return wta modified as workingTimeOfArrival');
      
      expect(model.proxyHandler.get({ wtd: 'wtd' }, 'wtd')).to.be.equal('wtd', 'Should return wtd un-modified');
      expect(model.proxyHandler.get({ wtd: 'wtd' }, 'workingTimeOfDeparture')).to.be.equal('wtd', 'Should return wtd modified as workingTimeOfDeparture');
      
      expect(model.proxyHandler.get({ wtp: 'wtp' }, 'wtp')).to.be.equal('wtp', 'Should return wtp un-modified');
      expect(model.proxyHandler.get({ wtp: 'wtp' }, 'workingTimeOfPassing')).to.be.equal('wtp', 'Should return wtp modified as workingTimeOfPassing');
      
      expect(model.proxyHandler.get({ platsup: 'platsup' }, 'platsup')).to.be.equal('platsup', 'Should return platsup un-modified');
      expect(model.proxyHandler.get({ platsup: 'platsup' }, 'platformSuppressed')).to.be.equal('platsup', 'Should return platsup modified as platformSuppressed');
      
      expect(model.proxyHandler.get({ plat: 'plat' }, 'plat')).to.be.equal('plat', 'Should return plat un-modified');
      expect(model.proxyHandler.get({ plat: 'plat' }, 'platform')).to.be.equal('plat', 'Should return plat modified as platform');
    });
  });
};
