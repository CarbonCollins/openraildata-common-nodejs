'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/station');

const standardConfig = require('../templates/station/station.json');
const altConfig = require('../templates/station/stationAlt.json');


module.exports = function () {
  describe('Functional suite', function () {
    describe('isPlatformSuppressed() tests', function () {
      it('Should exist', function () {
        const unit = new model.Station();

        expect(unit).to.be.an.instanceOf(model.Station);

        expect(unit.isPlatformSuppressed).to.exist;
        expect(unit.isPlatformSuppressed).to.be.an('function');
      });

      it('Should return a false boolean', function () {
        const unit = new model.Station(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Station);

        const returnedStations = unit.isPlatformSuppressed();

        expect(returnedStations).to.be.an('boolean');
        expect(returnedStations).to.be.equal(false);
      });

      it('Should return a true boolean', function () {
        const unit = new model.Station(altConfig);

        expect(unit).to.be.an.instanceOf(model.Station);

        const returnedStations = unit.isPlatformSuppressed();

        expect(returnedStations).to.be.an('boolean');
        expect(returnedStations).to.be.equal(true);
      });
    });
  });
};
