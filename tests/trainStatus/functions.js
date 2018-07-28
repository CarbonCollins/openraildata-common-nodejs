'use strict';
const { expect } = require('chai');

let model = require('../../lib/common/models/trainStatus');
const { Station } = require('../../lib/common/models/station');

const standardConfig = require('../templates/trainStatus/trainStatus.json');

module.exports = function () {
  describe('Functional suite', function () {
    describe('injectStation() Tests', function () {
      beforeEach(function () {
        delete require.cache[require.resolve('../../lib/common/models/trainStatus')]
        model=require('../../lib/common/models/trainStatus')
      });

      it('injectStation should exist', function () {
        const unit = model.injectStation;
  
        expect(unit).to.exist;
        expect(unit).to.be.an('function');
      });

      it('Expect no class injection', function () {
        const unit = new model.TrainStatus(standardConfig);

        expect(unit).to.be.an.instanceOf(model.TrainStatus);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.testParam).to.not.exist;
      });

      it('Expect a custom class injection (valid class input)', function () {
        class TestStation {
          constructor() {
            this.testParam = true;
          }
        }
        
        const unitOrig = new model.TrainStatus(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.TrainStatus);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.stations).to.be.an('array');
        expect(unitOrig.stations).to.have.lengthOf(1);
        expect(unitOrig.stations[0]).to.exist;
        expect(unitOrig.stations[0].testParam).to.not.exist;

        model.injectStation(TestStation);

        const unit = new model.TrainStatus(standardConfig);

        expect(unit).to.be.an.instanceOf(model.TrainStatus);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.stations).to.be.an('array');
        expect(unit.stations).to.have.lengthOf(1);
        expect(unit.stations[0]).to.exist;
        expect(unit.stations[0].testParam).to.exist;
        expect(unit.stations[0].testParam).to.be.an('boolean');
        expect(unit.stations[0].testParam).to.be.equal(true);
      });

      it('Expect no custom class injection (undefined input)', function () {        
        const unitOrig = new model.TrainStatus(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.TrainStatus);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.stations).to.be.an('array');
        expect(unitOrig.stations).to.have.lengthOf(1);
        expect(unitOrig.stations[0]).to.exist;
        expect(unitOrig.stations[0].testParam).to.not.exist;

        model.injectStation(undefined);

        const unit = new model.TrainStatus(standardConfig);

        expect(unit).to.be.an.instanceOf(model.TrainStatus);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.stations).to.be.an('array');
        expect(unit.stations).to.have.lengthOf(1);
        expect(unit.stations[0]).to.exist;
        expect(unit.stations[0].testParam).to.not.exist;
      });

      it('Expect no custom class injection (null input)', function () {
        const unitOrig = new model.TrainStatus(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.TrainStatus);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.stations).to.be.an('array');
        expect(unitOrig.stations).to.have.lengthOf(1);
        expect(unitOrig.stations[0]).to.exist;
        expect(unitOrig.stations[0].testParam).to.not.exist;

        model.injectStation(null);

        const unit = new model.TrainStatus(standardConfig);

        expect(unit).to.be.an.instanceOf(model.TrainStatus);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.stations).to.be.an('array');
        expect(unit.stations).to.have.lengthOf(1);
        expect(unit.stations[0]).to.exist;
        expect(unit.stations[0].testParam).to.not.exist;
      });

      it('Expect no custom class injection (string input)', function () {
        const unitOrig = new model.TrainStatus(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.TrainStatus);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.stations).to.be.an('array');
        expect(unitOrig.stations).to.have.lengthOf(1);
        expect(unitOrig.stations[0]).to.exist;
        expect(unitOrig.stations[0].testParam).to.not.exist;

        model.injectStation('Hello mine turtle');

        const unit = new model.TrainStatus(standardConfig);

        expect(unit).to.be.an.instanceOf(model.TrainStatus);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.stations).to.be.an('array');
        expect(unit.stations).to.have.lengthOf(1);
        expect(unit.stations[0]).to.exist;
        expect(unit.stations[0].testParam).to.not.exist;
      });

      it('Expect no custom class injection (number input)', function () {
        const unitOrig = new model.TrainStatus(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.TrainStatus);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.stations).to.be.an('array');
        expect(unitOrig.stations).to.have.lengthOf(1);
        expect(unitOrig.stations[0]).to.exist;
        expect(unitOrig.stations[0].testParam).to.not.exist;

        model.injectStation(1337);

        const unit = new model.TrainStatus(standardConfig);

        expect(unit).to.be.an.instanceOf(model.TrainStatus);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.stations).to.be.an('array');
        expect(unit.stations).to.have.lengthOf(1);
        expect(unit.stations[0]).to.exist;
        expect(unit.stations[0].testParam).to.not.exist;
      });

      afterEach(function () {
        delete require.cache[require.resolve('../../lib/common/models/trainStatus')]
        model=require('../../lib/common/models/trainStatus')
      });
    })
  });
};
