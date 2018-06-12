'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/stationMessage');
const { Location } = require('../../lib/es5/models/location');

const standardConfig = require('../templates/stationMessage/stationMessageNormal.json');
const standardConfigMinor = require('../templates/stationMessage/stationMessageMinor.json');
const standardConfigMajor = require('../templates/stationMessage/stationMessageMajor.json');
const standardConfigSevere = require('../templates/stationMessage/stationMessageSevere.json');
const standardConfigInvalid = require('../templates/stationMessage/stationMessageInvalid.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.StationMessage();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.StationMessage);

      expect(unit.id).to.be.equal(null);
      expect(unit.category).to.be.equal(null);
      expect(unit.message).to.be.equal(null);
      expect(unit.severity).to.be.equal(null);
      expect(unit.severityString).to.be.equal(null);
      expect(unit.locations).to.be.an('array');
      expect(unit.locations).to.have.lengthOf(0);
    });

    it('Should have the required properties', function() {
      const unit = new model.StationMessage();

      expect(unit).to.be.an.instanceOf(model.StationMessage);
      expect(unit).to.have.all.keys(['id', 'category', 'message', 'severity', 'locations']
        .map((key) => {
          return model.symbols.get(key)
        }));
    });


    it('Should create a valid instance', function () {
      const unit = new model.StationMessage(standardConfig);

      expect(unit).to.be.an.instanceOf(model.StationMessage);

      expect(unit.id).to.be.an('string')
      expect(unit.id).to.be.equal(standardConfig.id);

      expect(unit.category).to.be.an('string')
      expect(unit.category).to.be.equal(standardConfig.category);

      expect(unit.message).to.be.an('string')
      expect(unit.message).to.be.equal(standardConfig.message);

      expect(unit.severity).to.be.an('number')
      expect(unit.severity).to.be.equal(standardConfig.severity);

      expect(unit.severityString).to.be.an('string')
      expect(unit.severityString).to.be.equal(standardConfig.severityMessage);

      expect(unit.locations).to.be.an('array')
      expect(unit.locations).to.have.lengthOf(1);
      expect(unit.locations).to.satisfy((locations) => {
        return locations.every((location) => {
          return location instanceof Location;
        });
      });
    });

    it('Should create a valid minor instance', function () {
      const unit = new model.StationMessage(standardConfigMinor);

      expect(unit).to.be.an.instanceOf(model.StationMessage);

      expect(unit.id).to.be.an('string')
      expect(unit.id).to.be.equal(standardConfigMinor.id);

      expect(unit.category).to.be.an('string')
      expect(unit.category).to.be.equal(standardConfigMinor.category);

      expect(unit.message).to.be.an('string')
      expect(unit.message).to.be.equal(standardConfigMinor.message);

      expect(unit.severity).to.be.an('number')
      expect(unit.severity).to.be.equal(standardConfigMinor.severity);

      expect(unit.severityString).to.be.an('string')
      expect(unit.severityString).to.be.equal(standardConfigMinor.severityMessage);

      expect(unit.locations).to.be.an('array')
      expect(unit.locations).to.have.lengthOf(1);
      expect(unit.locations).to.satisfy((locations) => {
        return locations.every((location) => {
          return location instanceof Location;
        });
      });
    });

    it('Should create a valid major instance', function () {
      const unit = new model.StationMessage(standardConfigMajor);

      expect(unit).to.be.an.instanceOf(model.StationMessage);

      expect(unit.id).to.be.an('string')
      expect(unit.id).to.be.equal(standardConfigMajor.id);

      expect(unit.category).to.be.an('string')
      expect(unit.category).to.be.equal(standardConfigMajor.category);

      expect(unit.message).to.be.an('string')
      expect(unit.message).to.be.equal(standardConfigMajor.message);

      expect(unit.severity).to.be.an('number')
      expect(unit.severity).to.be.equal(standardConfigMajor.severity);

      expect(unit.severityString).to.be.an('string')
      expect(unit.severityString).to.be.equal(standardConfigMajor.severityMessage);

      expect(unit.locations).to.be.an('array')
      expect(unit.locations).to.have.lengthOf(1);
      expect(unit.locations).to.satisfy((locations) => {
        return locations.every((location) => {
          return location instanceof Location;
        });
      });
    });

    it('Should create a valid severe instance', function () {
      const unit = new model.StationMessage(standardConfigSevere);

      expect(unit).to.be.an.instanceOf(model.StationMessage);

      expect(unit.id).to.be.an('string')
      expect(unit.id).to.be.equal(standardConfigSevere.id);

      expect(unit.category).to.be.an('string')
      expect(unit.category).to.be.equal(standardConfigSevere.category);

      expect(unit.message).to.be.an('string')
      expect(unit.message).to.be.equal(standardConfigSevere.message);

      expect(unit.severity).to.be.an('number')
      expect(unit.severity).to.be.equal(standardConfigSevere.severity);

      expect(unit.severityString).to.be.an('string')
      expect(unit.severityString).to.be.equal(standardConfigSevere.severityMessage);

      expect(unit.locations).to.be.an('array')
      expect(unit.locations).to.have.lengthOf(1);
      expect(unit.locations).to.satisfy((locations) => {
        return locations.every((location) => {
          return location instanceof Location;
        });
      });
    });

    it('Should create an invalid instance', function () {
      const unit = new model.StationMessage(standardConfigInvalid);

      expect(unit).to.be.an.instanceOf(model.StationMessage);

      expect(unit.id).to.be.an('string')
      expect(unit.id).to.be.equal(standardConfigInvalid.id);

      expect(unit.category).to.be.an('string')
      expect(unit.category).to.be.equal(standardConfigInvalid.category);

      expect(unit.message).to.be.an('string')
      expect(unit.message).to.be.equal(standardConfigInvalid.message);

      expect(unit.severity).to.be.an('number')
      expect(unit.severity).to.be.equal(standardConfigInvalid.severity);

      expect(unit.severityString).to.be.equal(null);

      expect(unit.locations).to.be.an('array')
      expect(unit.locations).to.have.lengthOf(0);
    });

    it('symbol export should have correct mapping', function () {

      const idSymbol = model.symbols.get('id');
      expect(idSymbol).to.be.an('symbol');
      expect(idSymbol.toString()).to.be.equal('Symbol()');

      const categorySymbol = model.symbols.get('category');
      expect(categorySymbol).to.be.an('symbol');
      expect(categorySymbol.toString()).to.be.equal('Symbol()');

      const messageSymbol = model.symbols.get('message');
      expect(messageSymbol).to.be.an('symbol');
      expect(messageSymbol.toString()).to.be.equal('Symbol()');

      const severitySymbol = model.symbols.get('severity');
      expect(severitySymbol).to.be.an('symbol');
      expect(severitySymbol.toString()).to.be.equal('Symbol()');

      const locationsSymbol = model.symbols.get('locations');
      expect(locationsSymbol).to.be.an('symbol');
      expect(locationsSymbol.toString()).to.be.equal('Symbol()');
    });
  });
};
