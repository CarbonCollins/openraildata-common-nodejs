'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/stationMessage');
const { Location } = require('../../lib/es5/models/location');

const standardConfig = require('../templates/stationMessage/stationMessage.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.stationMessage();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.stationMessage);

      expect(unit.id).to.be.equal(null);
      expect(unit.category).to.be.equal(null);
      expect(unit.message).to.be.equal(null);
      expect(unit.severity).to.be.equal(null);
      expect(unit.locations).to.be.an('array');
      expect(unit.locations).to.have.lengthOf(0);
    });

    it('Should have the required properties', function() {
      const unit = new model.stationMessage();

      expect(unit).to.be.an.instanceOf(model.stationMessage);
      expect(unit).to.have.all.keys(['id', 'category', 'message', 'severity', 'locations']
        .map((key) => {
          return model.symbols.get(key)
        }));
    });


    it('Should create a valid instance', function () {
      const unit = new model.stationMessage(standardConfig);

      expect(unit).to.be.an.instanceOf(model.stationMessage);

      expect(unit.id).to.be.an('string')
      expect(unit.id).to.be.equal(standardConfig.id);

      expect(unit.category).to.be.an('string')
      expect(unit.category).to.be.equal(standardConfig.category);

      expect(unit.message).to.be.an('string')
      expect(unit.message).to.be.equal(standardConfig.message);

      expect(unit.severity).to.be.an('string')
      expect(unit.severity).to.be.equal(standardConfig.severity);

      expect(unit.locations).to.be.an('array')
      expect(unit.locations).to.have.lengthOf(1);
      expect(unit.locations).to.satisfy((locations) => {
        return locations.every((location) => {
          return location instanceof Location;
        });
      });
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
