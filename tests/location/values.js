'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/location');

const standardConfig = require('../templates/location/location.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.Location();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.Location);

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);
    });

    it('Should have the required properties', function() {
      const unit = new model.Location();

      expect(unit).to.be.an.instanceOf(model.Location);
      expect(unit).to.have.all.keys(['tiploc', 'computerReservationSystem', 'trainOperatingCompany', 'locationName']
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
      const unit = new model.Location(standardConfig);

      expect(unit).to.be.an.instanceOf(model.Location);

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfig.tiploc);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfig.computerReservationSystem);

      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(standardConfig.trainOperatingCompany);

      expect(unit.locationName).to.be.an('string');
      expect(unit.locationName).to.be.equal(standardConfig.locationName);
    });

    it('symbol export should have correct mapping', function () {
      const tiplocSymbol = model.symbols.get('tiploc');
      expect(tiplocSymbol).to.be.an('symbol');
      expect(tiplocSymbol.toString()).to.be.equal('Symbol(tiploc)');

      const computerReservationSystemSymbol = model.symbols.get('computerReservationSystem');
      expect(computerReservationSystemSymbol).to.be.an('symbol');
      expect(computerReservationSystemSymbol.toString()).to.be.equal('Symbol(computerReservationSystem)');

      const trainOperatingCompanySymbol = model.symbols.get('trainOperatingCompany');
      expect(trainOperatingCompanySymbol).to.be.an('symbol');
      expect(trainOperatingCompanySymbol.toString()).to.be.equal('Symbol(trainOperatingCompany)');

      const locationNameSymbol = model.symbols.get('locationName');
      expect(locationNameSymbol).to.be.an('symbol');
      expect(locationNameSymbol.toString()).to.be.equal('Symbol(locationName)');
    });
  });
};
