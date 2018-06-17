'use strict';
const { expect } = require('chai');

let model = require('../../lib/es5/models/schedule');
const { Station } = require('../../lib/es5/models/station');

const standardConfig = require('../templates/schedule/schedule.json');
const standardConfigQTrain = require('../templates/schedule/scheduleQTrain.json');

module.exports = function () {
  describe('Functional suite', function () {
    describe('listMultiStations() tests', function () {
      it('Should exist', function () {
        const unit = new model.Schedule();

        expect(unit).to.be.an.instanceOf(model.Schedule);

        expect(unit.listMultiStations).to.exist;
        expect(unit.listMultiStations).to.be.an('function');
      });

      it('Should return a list of passing points', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations(model.symbols.get('passingPoints'));

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.satisfy((stations) => {
          return stations.every((station) => {
            return station instanceof Station;
          });
        });
        expect(returnedStations).to.have.lengthOf(1);
        expect(returnedStations[0].tiploc).to.be.equal('PP');
      });

      it('Should return a list of intermediate points', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations(model.symbols.get('intermediatePoints'));

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.satisfy((stations) => {
          return stations.every((station) => {
            return station instanceof Station;
          });
        });
        expect(returnedStations).to.have.lengthOf(1);
        expect(returnedStations[0].tiploc).to.be.equal('IP');
      });

      it('Should return a list of operational stops', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations(model.symbols.get('operationalIntermediatePoints'));

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.satisfy((stations) => {
          return stations.every((station) => {
            return station instanceof Station;
          });
        });
        expect(returnedStations).to.have.lengthOf(1);
        expect(returnedStations[0].tiploc).to.be.equal('OPIP');
      });

      it('Should return an empty array with undefined input', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations(undefined);

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.have.lengthOf(0);
      });

      it('Should return an empty array with null input', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations(null);

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.have.lengthOf(0);
      });

      it('Should return an empty array with string input', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations('Random String');

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.have.lengthOf(0);
      });

      it('Should return an empty array with number input', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStations = unit.listMultiStations(0);

        expect(returnedStations).to.be.an('array');
        expect(returnedStations).to.have.lengthOf(0);
      });
    });

    describe('getSingleStation() tests', function () {
      it('Should exist', function () {
        const unit = new model.Schedule();

        expect(unit).to.be.an.instanceOf(model.Schedule);

        expect(unit.getSingleStation).to.exist;
        expect(unit.getSingleStation).to.be.an('function');
      });

      it('Should return an origin station', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStation = unit.getSingleStation(model.symbols.get('origin'));

        expect(returnedStation).to.be.an('object');
        expect(returnedStation).to.be.an.instanceOf(Station);
        expect(returnedStation.tiploc).to.be.equal('OR');
      });

      it('Should return an origin station (with fallback operational argument)', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStation = unit.getSingleStation(model.symbols.get('origin'), model.symbols.get('operationalOrigin'));

        expect(returnedStation).to.be.an('object');
        expect(returnedStation).to.be.an.instanceOf(Station);
        expect(returnedStation.tiploc).to.be.equal('OR');
      });

      it('Should return an operational origin station (Schedule with no standard origin)', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStation = unit.getSingleStation('jeff', model.symbols.get('operationalOrigin'));

        expect(returnedStation).to.be.an('object');
        expect(returnedStation).to.be.an.instanceOf(Station);
        expect(returnedStation.tiploc).to.be.equal('OPOR');
      });

      it('Should return an destination station', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStation = unit.getSingleStation(model.symbols.get('destination'));

        expect(returnedStation).to.be.an('object');
        expect(returnedStation).to.be.an.instanceOf(Station);
        expect(returnedStation.tiploc).to.be.equal('DT');
      });

      it('Should return an destination station (with fallback operational argument)', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStation = unit.getSingleStation(model.symbols.get('destination'), model.symbols.get('operationalDestination'));

        expect(returnedStation).to.be.an('object');
        expect(returnedStation).to.be.an.instanceOf(Station);
        expect(returnedStation.tiploc).to.be.equal('DT');
      });

      it('Should return an operational destination station (Schedule with no standard origin)', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedStation = unit.getSingleStation('bob', model.symbols.get('operationalDestination'));

        expect(returnedStation).to.be.an('object');
        expect(returnedStation).to.be.an.instanceOf(Station);
        expect(returnedStation.tiploc).to.be.equal('OPDT');
      });
    });

    describe('injectStation() Tests', function () {
      beforeEach(function () {
        delete require.cache[require.resolve('../../lib/es5/models/schedule')]
        model=require('../../lib/es5/models/schedule')
      });

      it('injectStation should exist', function () {
        const unit = model.injectStation;
  
        expect(unit).to.exist;
        expect(unit).to.be.an('function');
      });

      it('Expect no class injection', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;
      });

      it('Expect a custom class injection (valid class input)', function () {
        class TestStation {
          constructor() {
            this.testParam = true;
          }
        }
        
        const unitOrig = new model.Schedule(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Schedule);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unitOrig.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;

        model.injectStation(TestStation);

        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.exist;
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.be.equal(true);
      });

      it('Expect no custom class injection (undefined input)', function () {        
        const unitOrig = new model.Schedule(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Schedule);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unitOrig.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;

        model.injectStation(undefined);

        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;
      });

      it('Expect no custom class injection (null input)', function () {
        const unitOrig = new model.Schedule(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Schedule);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unitOrig.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;

        model.injectStation(null);

        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;
      });

      it('Expect no custom class injection (string input)', function () {
        const unitOrig = new model.Schedule(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Schedule);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unitOrig.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;

        model.injectStation('Hello mine turtle');

        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;
      });

      it('Expect no custom class injection (number input)', function () {
        const unitOrig = new model.Schedule(standardConfig);

        expect(unitOrig).to.be.an.instanceOf(model.Schedule);
        expect(unitOrig.rid).to.be.equal('rid');
        expect(unitOrig.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unitOrig.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;

        model.injectStation(1337);

        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);
        expect(unit.rid).to.be.equal('rid');
        expect(unit.getSingleStation(model.symbols.get('origin'))).to.be.an('object');
        expect(unit.getSingleStation(model.symbols.get('origin')).testParam).to.not.exist;
      });

      afterEach(function () {
        delete require.cache[require.resolve('../../lib/es5/models/schedule')]
        model=require('../../lib/es5/models/schedule')
      });
    })

    describe('isQTrain() tests', function () {
      it('Should exist', function () {
        const unit = new model.Schedule();

        expect(unit).to.be.an.instanceOf(model.Schedule);

        expect(unit.isQTrain).to.exist;
        expect(unit.isQTrain).to.be.an('function');
      });

      it('Should return a false boolean', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedQTrain = unit.isQTrain();

        expect(returnedQTrain).to.be.an('boolean');
        expect(returnedQTrain).to.be.equal(false);
      });

      it('Should return a true boolean', function () {
        const unit = new model.Schedule(standardConfigQTrain);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedQTrain = unit.isQTrain();

        expect(returnedQTrain).to.be.an('boolean');
        expect(returnedQTrain).to.be.equal(true);
      });
    });

    describe('isPassengerService() tests', function () {
      it('Should exist', function () {
        const unit = new model.Schedule();

        expect(unit).to.be.an.instanceOf(model.Schedule);

        expect(unit.isPassengerService).to.exist;
        expect(unit.isPassengerService).to.be.an('function');
      });

      it('Should return a false boolean', function () {
        const unit = new model.Schedule(standardConfig);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedQTrain = unit.isPassengerService();

        expect(returnedQTrain).to.be.an('boolean');
        expect(returnedQTrain).to.be.equal(false);
      });

      it('Should return a true boolean', function () {
        const unit = new model.Schedule(standardConfigQTrain);

        expect(unit).to.be.an.instanceOf(model.Schedule);

        const returnedQTrain = unit.isPassengerService();

        expect(returnedQTrain).to.be.an('boolean');
        expect(returnedQTrain).to.be.equal(true);
      });
    });
  });
};
