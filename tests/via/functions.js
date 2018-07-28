'use strict';
const { expect } = require('chai');

let model = require('../../lib/common/models/via');
let { Location } = require('../../lib/common/models/location');

const locationConfig = require('../templates/location/location.json');
const standardConfig = require('../templates/via/via.json');
const nameConfig = require('../templates/via/viaName.json');
const crsConfig = require('../templates/via/viaCRS.json');
const tiplocConfig = require('../templates/via/viaTIPLOC.json');

module.exports = function () {
  describe('Functional suite', function () {
    describe('injectLocation() Tests', function () {
      beforeEach(function () {
        delete require.cache[require.resolve('../../lib/common/models/via')]
        model=require('../../lib/common/models/via')
      });

      it('injectLocation should exist', function () {
        const unit = model.injectLocation;
  
        expect(unit).to.exist;
        expect(unit).to.be.an('function');
      });

      it('Expect no class injection', function () {
        const unit = new model.Via(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Via);
        expect(unit.text).to.be.equal('testText');
        expect(unit.at.testParam).to.not.exist;
      });

      it('Expect a custom class injection (valid class input)', function () {
        class TestLocation {
          constructor() {
            this.testParam = true;
          }
        }
        
        const unitOrig = new model.Via(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Via);
        expect(unitOrig.text).to.be.equal('testText');
        expect(unitOrig.at.testParam).to.not.exist;

        model.injectLocation(TestLocation);

        const unit = new model.Via(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Via);
        expect(unit.text).to.be.equal('testText');
        expect(unit.at.testParam).to.exist;
        expect(unit.at.testParam).to.be.equal(true);
      });

      it('Expect no custom class injection (undefined input)', function () {        
        const unitOrig = new model.Via(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Via);
        expect(unitOrig.text).to.be.equal('testText');
        expect(unitOrig.at.testParam).to.not.exist;

        model.injectLocation(undefined);

        const unit = new model.Via(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Via);
        expect(unit.text).to.be.equal('testText');
        expect(unit.at.testParam).to.not.exist;
      });

      it('Expect no custom class injection (null input)', function () {
        const unitOrig = new model.Via(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Via);
        expect(unitOrig.text).to.be.equal('testText');
        expect(unitOrig.at.testParam).to.not.exist;

        model.injectLocation(null);

        const unit = new model.Via(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Via);
        expect(unit.text).to.be.equal('testText');
        expect(unit.at.testParam).to.not.exist;
      });

      it('Expect no custom class injection (string input)', function () {
        const unitOrig = new model.Via(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Via);
        expect(unitOrig.text).to.be.equal('testText');
        expect(unitOrig.at.testParam).to.not.exist;

        model.injectLocation('Hello mine turtle');

        const unit = new model.Via(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Via);
        expect(unit.text).to.be.equal('testText');
        expect(unit.at.testParam).to.not.exist;
      });

      it('Expect no custom class injection (number input)', function () {
        const unitOrig = new model.Via(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Via);
        expect(unitOrig.text).to.be.equal('testText');
        expect(unitOrig.at.testParam).to.not.exist;

        model.injectLocation(1337);

        const unit = new model.Via(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Via);
        expect(unit.text).to.be.equal('testText');
        expect(unit.at.testParam).to.not.exist;
      });

      afterEach(function () {
        delete require.cache[require.resolve('../../lib/common/models/via')]
        model=require('../../lib/common/models/via')
      });
    });

    describe('findLocation() tests', function () {
      before('Inject Location again', function () {
        model.injectLocation(Location);
      });

      it('Should return a location', function () {
        const unit = new model.Via(standardConfig);

        expect(unit.at).to.be.an.instanceof(Location);
        expect(unit.at.tiploc).to.be.equal(standardConfig.at.tiploc);
      });

      it('Should return a location when locationName is used', function () {
        const unit = new model.Via(nameConfig, [locationConfig]);

        expect(unit.at).to.be.an.instanceof(Location);
        expect(unit.at.tiploc).to.be.equal(locationConfig.tiploc);
      });

      it('Should return a location when computerReservationSystem is used', function () {
        const unit = new model.Via(crsConfig, [locationConfig]);

        expect(unit.at).to.be.an.instanceof(Location);
        expect(unit.at.tiploc).to.be.equal(locationConfig.tiploc);
      });

      it('Should return a location when tiploc is used', function () {
        const unit = new model.Via(tiplocConfig, [locationConfig]);

        expect(unit.at).to.be.an.instanceof(Location);
        expect(unit.at.tiploc).to.be.equal(locationConfig.tiploc);
      });
    });
  });
};
