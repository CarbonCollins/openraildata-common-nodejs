const { expect } = require('chai');

const Module = require('../../index.js');

const association = require('../../lib/common/models/association');
const location = require('../../lib/common/models/location');
const schedule = require('../../lib/common/models/schedule');
const station = require('../../lib/common/models/station');
const stationMessage = require('../../lib/common/models/stationMessage');
const trainOrder = require('../../lib/common/models/trainOrder');
const trainStatus = require('../../lib/common/models/trainStatus');

module.exports = function () {
  describe('Export suite', function () {
    it('Should export the module', function() {
      expect(Module).to.be.an('object');
    });

    it('Should export Association class', function() {
      expect(Module.Association).to.be.an('function');
      expect(new Module.Association()).to.be.an('object');
      expect(Module.Association).to.be.equal(association.Association);
    });

    it('Should export Location class', function() {
      expect(Module.Location).to.be.an('function');
      expect(new Module.Location()).to.be.an('object');
      expect(Module.Location).to.be.equal(location.Location);
    });

    it('Should export Schedule class', function() {
      expect(Module.Schedule).to.be.an('function');
      expect(new Module.Schedule()).to.be.an('object');
      expect(Module.Schedule).to.be.equal(schedule.Schedule);
    });

    it('Should export Station class', function() {
      expect(Module.Station).to.be.an('function');
      expect(new Module.Station()).to.be.an('object');
      expect(Module.Station).to.be.equal(station.Station);
    });

    it('Should export StationMessage class', function() {
      expect(Module.StationMessage).to.be.an('function');
      expect(new Module.StationMessage()).to.be.an('object');
      expect(Module.StationMessage).to.be.equal(stationMessage.StationMessage);
    });

    it('Should export TrainOrder class', function() {
      expect(Module.TrainOrder).to.be.an('function');
      expect(new Module.TrainOrder()).to.be.an('object');
      expect(Module.TrainOrder).to.be.equal(trainOrder.TrainOrder);
    });

    it('Should export TrainStatus class', function() {
      expect(Module.TrainStatus).to.be.an('function');
      expect(new Module.TrainStatus()).to.be.an('object');
      expect(Module.TrainStatus).to.be.equal(trainStatus.TrainStatus);
    });
  });
};