'use strict';
const { expect } = require('chai');

const model = require('../../lib/common/common');

const { Association } = require('../../lib/common/models/association');
const { Location } = require('../../lib/common/models/location');
const { Schedule } = require('../../lib/common/models/schedule');
const { Station } = require('../../lib/common/models/station');
const { StationMessage } = require('../../lib/common/models/stationMessage');
const { TrainOrder } = require('../../lib/common/models/trainOrder');
const { TrainStatus } = require('../../lib/common/models/trainStatus');
const { Via } = require('../../lib/common/models/via');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');

      expect(model).to.have.all.keys(['Association', 'associationMixer', 'Location', 'locationMixer', 'Schedule', 'scheduleMixer', 'Station', 'stationMixer', 'StationMessage', 'stationMessageMixer', 'TrainOrder', 'trainOrderMixer', 'TrainStatus', 'trainStatusMixer', 'Via', 'viaMixer']);
    });

    it('Should export Association Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.Association();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(Association);
    });

    it('Should export Location Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.Location();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(Location);
    });

    it('Should export Schedule Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.Schedule();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(Schedule);
    });

    it('Should export Station Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.Station();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(Station);
    });

    it('Should export StationMessage Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.StationMessage();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(StationMessage);
    });

    it('Should export TrainOrder Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.TrainOrder();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(TrainOrder);
    });

    it('Should export TrainStatus Class', function () {
      expect(model.Association).to.exist;
      expect(model.Association).to.be.an('function');

      const unit = new model.TrainStatus();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(TrainStatus);
    });

    it('Should export Via Class', function () {
      expect(model.Via).to.exist;
      expect(model.Via).to.be.an('function');

      const unit = new model.Via();

      expect(unit).to.exist;
      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceof(Via);
    });
  });
};
