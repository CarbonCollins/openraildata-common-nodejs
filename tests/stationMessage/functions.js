'use strict';
const { expect } = require('chai');

let model = require('../../lib/es5/models/stationMessage');
const { Location } = require('../../lib/es5/models/location');

const standardConfig = require('../templates/stationMessage/stationMessage.json');

module.exports = function () {
  describe('Functional suite', function () {
    describe('injectLocation() Tests', function () {
      beforeEach(function () {
        delete require.cache[require.resolve('../../lib/es5/models/stationMessage')]
        model=require('../../lib/es5/models/stationMessage')
      });

      it('injectLocation should exist', function () {
        const unit = model.injectLocation;
  
        expect(unit).to.exist;
        expect(unit).to.be.an('function');
      });

      it('Expect no class injection', function () {
        const unit = new model.StationMessage(standardConfig);

        expect(unit).to.be.an.instanceOf(model.StationMessage);
        expect(unit.id).to.be.equal('id');
        expect(unit.locations).to.be.an('array');
        expect(unit.locations).to.have.lengthOf(1);
        expect(unit.locations[0]).to.exist;
        expect(unit.locations[0].testParam).to.not.exist;
      });

      it('Expect a custom class injection (valid class input)', function () {
        class TestLocation {
          constructor() {
            this.testParam = true;
          }
        }
        
        const unitOrig = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;

        model.injectLocation(TestLocation);

        const unit = new model.StationMessage(standardConfig);

        expect(unit).to.be.an.instanceOf(model.StationMessage);
        expect(unit.id).to.be.equal('id');
        expect(unit.locations).to.be.an('array');
        expect(unit.locations).to.have.lengthOf(1);
        expect(unit.locations[0]).to.exist;
        expect(unit.locations[0].testParam).to.exist;
        expect(unit.locations[0].testParam).to.be.equal(true);
      });

      it('Expect no custom class injection (undefined input)', function () {
        const unitOrig = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;

        model.injectLocation(undefined);

        const unit = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;
      });

      it('Expect no custom class injection (null input)', function () {
        const unitOrig = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;

        model.injectLocation(null);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;
      });

      it('Expect no custom class injection (string input)', function () {
        const unitOrig = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;

        model.injectLocation('Hello mine turtle');

        const unit = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;
      });

      it('Expect no custom class injection (number input)', function () {
        const unitOrig = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;

        model.injectLocation(1337);

        const unit = new model.StationMessage(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.StationMessage);
        expect(unitOrig.id).to.be.equal('id');
        expect(unitOrig.locations).to.be.an('array');
        expect(unitOrig.locations).to.have.lengthOf(1);
        expect(unitOrig.locations[0]).to.exist;
        expect(unitOrig.locations[0].testParam).to.not.exist;
      });

      afterEach(function () {
        delete require.cache[require.resolve('../../lib/es5/models/schedule')]
        model=require('../../lib/es5/models/schedule')
      });
    })
  });
};
