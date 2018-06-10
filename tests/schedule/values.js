'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/schedule');
const { Station } = require('../../lib/es5/models/station');

const standardConfig = require('../templates/schedule/schedule.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.Schedule();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.Schedule);

      expect(unit.rid).to.be.equal(null);
      expect(unit.serviceStartingDate).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.trainId).to.be.equal(null);
      expect(unit.uniqueId).to.be.equal(null);
      expect(unit.origin).to.be.equal(null);
      expect(unit.destination).to.be.equal(null);
      expect(unit.passingPoints).to.be.an('array');
      expect(unit.passingPoints).to.have.lengthOf(0);
      expect(unit.intermediatePoints).to.be.an('array');
      expect(unit.intermediatePoints).to.have.lengthOf(0);
    });

    it('Should have the required properties', function() {
      const unit = new model.Schedule();

      expect(unit).to.be.an.instanceOf(model.Schedule);
      expect(unit).to.have.all.keys(['rid', 'serviceStartingDate', 'trainOperatingCompany', 'trainId', 'uniqueId', 'origin', 'destination', 'passingPoints', 'intermediatePoints', 'operationalOrigin', 'operationalDestination', 'operationalIntermediatePoints']
        .map((key) => {
          return model.symbols.get(key)
        }));

      // expect(model.Location.prototype).to.have.all.keys(['associatedTrain']);

      // const propertyDescriptors = Object.getOwnPropertyDescriptors(model.Location.prototype)
      //   .filter((descriptor) => {
      //     return (typeof descriptor.get === 'function' && typeof descriptor.set === null);
      //   });

      // console.log(JSON.stringify(propertyDescriptors, null, 2));
    });

    it('Should create a valid instance', function () {
      const unit = new model.Schedule(standardConfig);

      expect(unit).to.be.an.instanceOf(model.Schedule);

      expect(unit.rid).to.be.an('string');
      expect(unit.rid).to.be.equal(standardConfig.rid);
      expect(unit.serviceStartingDate).to.be.an('string');
      expect(unit.serviceStartingDate).to.be.equal(standardConfig.serviceStartingDate);
      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(standardConfig.trainOperatingCompany);
      expect(unit.trainId).to.be.an('string');
      expect(unit.trainId).to.be.equal(standardConfig.trainId);
      expect(unit.uniqueId).to.be.an('string');
      expect(unit.uniqueId).to.be.equal(standardConfig.uniqueId);
      expect(unit.origin).to.be.an('object');
      expect(unit.origin).to.be.an.instanceOf(Station);
      expect(unit.destination).to.be.an('object');
      expect(unit.destination).to.be.an.instanceOf(Station);
      expect(unit.passingPoints).to.be.an('array');
      expect(unit.passingPoints).to.have.lengthOf(1);
      expect(unit.passingPoints).to.satisfy((stations) => {
        return stations.every((station) => {
          return station instanceof Station;
        });
      });
      expect(unit.passingPoints).to.have.lengthOf(1);
      expect(unit.passingPoints[0].tiploc).to.be.equal('PP');
      //.include.all.members(standardConfig.passingPoints.map(s => new Station(s)));
      expect(unit.intermediatePoints).to.be.an('array');
      expect(unit.intermediatePoints).to.have.lengthOf(1);
      expect(unit.intermediatePoints).to.satisfy((stations) => {
        return stations.every((station) => {
          return station instanceof Station;
        });
      });
      expect(unit.intermediatePoints).to.have.lengthOf(1);
      expect(unit.intermediatePoints[0].tiploc).to.be.equal('IP');

      expect(unit.operationalStops).to.be.an('array');
      expect(unit.operationalStops).to.have.lengthOf(1);
      expect(unit.operationalStops).to.satisfy((stations) => {
        return stations.every((station) => {
          return station instanceof Station;
        });
      });
      expect(unit.operationalStops).to.have.lengthOf(1);
      expect(unit.operationalStops[0].tiploc).to.be.equal('OPIP');
    });

    it('symbol export should have correct mapping', function () {

      const ridSymbol = model.symbols.get('rid');
      expect(ridSymbol).to.be.an('symbol');
      expect(ridSymbol.toString()).to.be.equal('Symbol()');

      const serviceStartingDateSymbol = model.symbols.get('serviceStartingDate');
      expect(serviceStartingDateSymbol).to.be.an('symbol');
      expect(serviceStartingDateSymbol.toString()).to.be.equal('Symbol()');

      const trainOperatingCompanySymbol = model.symbols.get('trainOperatingCompany');
      expect(trainOperatingCompanySymbol).to.be.an('symbol');
      expect(trainOperatingCompanySymbol.toString()).to.be.equal('Symbol()');

      const trainIdSymbol = model.symbols.get('trainId');
      expect(trainIdSymbol).to.be.an('symbol');
      expect(trainIdSymbol.toString()).to.be.equal('Symbol()');

      const uniqueIdSymbol = model.symbols.get('uniqueId');
      expect(uniqueIdSymbol).to.be.an('symbol');
      expect(uniqueIdSymbol.toString()).to.be.equal('Symbol()');

      const originSymbol = model.symbols.get('origin');
      expect(originSymbol).to.be.an('symbol');
      expect(originSymbol.toString()).to.be.equal('Symbol()');

      const destinationSymbol = model.symbols.get('destination');
      expect(destinationSymbol).to.be.an('symbol');
      expect(destinationSymbol.toString()).to.be.equal('Symbol()');

      const passingPointsSymbol = model.symbols.get('passingPoints');
      expect(passingPointsSymbol).to.be.an('symbol');
      expect(passingPointsSymbol.toString()).to.be.equal('Symbol()');

      const intermediatePointsSymbol = model.symbols.get('intermediatePoints');
      expect(intermediatePointsSymbol).to.be.an('symbol');
      expect(intermediatePointsSymbol.toString()).to.be.equal('Symbol()');

      const operationalOriginSymbol = model.symbols.get('operationalOrigin');
      expect(operationalOriginSymbol).to.be.an('symbol');
      expect(operationalOriginSymbol.toString()).to.be.equal('Symbol()');

      const operationalDestinationSymbol = model.symbols.get('operationalDestination');
      expect(operationalDestinationSymbol).to.be.an('symbol');
      expect(operationalDestinationSymbol.toString()).to.be.equal('Symbol()');

      const operationalIntermediatePointsSymbol = model.symbols.get('operationalIntermediatePoints');
      expect(operationalIntermediatePointsSymbol).to.be.an('symbol');
      expect(operationalIntermediatePointsSymbol.toString()).to.be.equal('Symbol()');
    });
  });
};
