'use strict';
const { expect } = require('chai');

let model = require('../../lib/es5/common');
const { Association } = require('../../lib/es5/models/association');
const { Location } = require('../../lib/es5/models/location');
const { Schedule } = require('../../lib/es5/models/schedule');
const { Station } = require('../../lib/es5/models/station');
const { StationMessage } = require('../../lib/es5/models/stationMessage');
const { TrainOrder } = require('../../lib/es5/models/trainOrder');
const { TrainStatus } = require('../../lib/es5/models/trainStatus');

module.exports = function () {
  describe('Functional suite', function () {
    describe('associationMixer() tests', function () {
      beforeEach(function () {
        delete require.cache[require.resolve('../../lib/es5/common')]
        model = require('../../lib/es5/common')
      });

      it('Should apply a mixin to the Association class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.Association();

        expect(unitOrig).to.be.an.instanceof(Association);
        expect(unitOrig.testParam).to.not.exist;

        model.associationMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.Association();

        expect(unit).to.be.an.instanceof(Association);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the Location class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.Location();

        expect(unitOrig).to.be.an.instanceof(Location);
        expect(unitOrig.testParam).to.not.exist;

        model.locationMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.Location();

        expect(unit).to.be.an.instanceof(Location);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the Location class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.Location();

        expect(unitOrig).to.be.an.instanceof(Location);
        expect(unitOrig.testParam).to.not.exist;

        model.locationMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.Location();

        expect(unit).to.be.an.instanceof(Location);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the Schedule class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.Schedule();

        expect(unitOrig).to.be.an.instanceof(Schedule);
        expect(unitOrig.testParam).to.not.exist;

        model.scheduleMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.Schedule();

        expect(unit).to.be.an.instanceof(Schedule);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the Station class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.Station();

        expect(unitOrig).to.be.an.instanceof(Station);
        expect(unitOrig.testParam).to.not.exist;

        model.stationMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.Station();

        expect(unit).to.be.an.instanceof(Station);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the StationMessage class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.StationMessage();

        expect(unitOrig).to.be.an.instanceof(StationMessage);
        expect(unitOrig.testParam).to.not.exist;

        model.stationMessageMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.StationMessage();

        expect(unit).to.be.an.instanceof(StationMessage);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the TrainOrder class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.TrainOrder();

        expect(unitOrig).to.be.an.instanceof(TrainOrder);
        expect(unitOrig.testParam).to.not.exist;

        model.trainOrderMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.TrainOrder();

        expect(unit).to.be.an.instanceof(TrainOrder);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      it('Should apply a mixin to the TrainStatus class', function () {
        const mixin = (SuperClass) => {
          return class TestMix extends SuperClass {
            constructor(payload) {
              super(payload);
              this.testParam = true;
            }
          };
        };

        const unitOrig = new model.TrainStatus();

        expect(unitOrig).to.be.an.instanceof(TrainStatus);
        expect(unitOrig.testParam).to.not.exist;

        model.trainStatusMixer(mixin);

        expect(model.Association).to.exist;
        expect(model.Association).to.be.an('function');

        const unit = new model.TrainStatus();

        expect(unit).to.be.an.instanceof(TrainStatus);
        expect(unit.testParam).to.exist;
        expect(unit.testParam).to.be.an('boolean');
        expect(unit.testParam).to.be.equal(true);
      });

      afterEach(function () {
        delete require.cache[require.resolve('../../lib/es5/common')]
        model = require('../../lib/es5/common')
      });
    });
  });
};
