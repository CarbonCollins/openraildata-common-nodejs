'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/models/location');

const standardConfig = require('../templates/location/location.json');
const altConfig = require('../templates/location/locationAlt.json');


module.exports = function () {
  describe('Functional suite', function () {
    it('Should set all values null using undefined location setter', function() {
      const unit = new model.Location();
      
      expect(unit).to.be.an.instanceOf(model.Location);

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);

      unit.location = undefined;

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);
    });

    it('Should set all values null using null location setter', function() {
      const unit = new model.Location();
      
      expect(unit).to.be.an.instanceOf(model.Location);

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);

      unit.location = null;

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);
    });

    it('Should set all values null using empty object location setter', function() {
      const unit = new model.Location();
      
      expect(unit).to.be.an.instanceOf(model.Location);

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);

      unit.location = {};

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);
    });

    it('Should set all values null using string location setter', function() {
      const unit = new model.Location();
      
      expect(unit).to.be.an.instanceOf(model.Location);

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);

      unit.location = 'Some random string. Quack';

      expect(unit.tiploc).to.be.equal(null);
      expect(unit.computerReservationSystem).to.be.equal(null);
      expect(unit.trainOperatingCompany).to.be.equal(null);
      expect(unit.locationName).to.be.equal(null);
    });

    it('Should not change all values when using undefined location setter', function() {
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

      unit.location = undefined;

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfig.tiploc);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfig.computerReservationSystem);

      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(standardConfig.trainOperatingCompany);

      expect(unit.locationName).to.be.an('string');
      expect(unit.locationName).to.be.equal(standardConfig.locationName);
    });

    it('Should not change all values when using null location setter', function() {
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

      unit.location = null;

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfig.tiploc);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfig.computerReservationSystem);

      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(standardConfig.trainOperatingCompany);

      expect(unit.locationName).to.be.an('string');
      expect(unit.locationName).to.be.equal(standardConfig.locationName);
    });

    it('Should not change all values when using empty object location setter', function() {
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

      unit.location = {};

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfig.tiploc);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfig.computerReservationSystem);

      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(standardConfig.trainOperatingCompany);

      expect(unit.locationName).to.be.an('string');
      expect(unit.locationName).to.be.equal(standardConfig.locationName);
    });

    it('Should not change all values when using string location setter', function() {
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

      unit.location = 'Some random string, Woof';

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(standardConfig.tiploc);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(standardConfig.computerReservationSystem);

      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(standardConfig.trainOperatingCompany);

      expect(unit.locationName).to.be.an('string');
      expect(unit.locationName).to.be.equal(standardConfig.locationName);
    });

    it('Should set all values using location setter', function() {
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

      unit.location = altConfig;

      expect(unit.tiploc).to.be.an('string');
      expect(unit.tiploc).to.be.equal(altConfig.tiploc);

      expect(unit.computerReservationSystem).to.be.an('string');
      expect(unit.computerReservationSystem).to.be.equal(altConfig.computerReservationSystem);

      expect(unit.trainOperatingCompany).to.be.an('string');
      expect(unit.trainOperatingCompany).to.be.equal(altConfig.trainOperatingCompany);

      expect(unit.locationName).to.be.an('string');
      expect(unit.locationName).to.be.equal(altConfig.locationName);
    });
  });
};
