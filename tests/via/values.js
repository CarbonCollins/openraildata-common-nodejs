'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/via');
const { Location } = require('../../lib/es5/models/location');

const locationConfig = require('../templates/location/location.json');
const standardConfig = require('../templates/via/via.json');
const nameConfig = require('../templates/via/viaName.json');

model.injectLocation(Location);

module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new model.Via();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(model.Via);

      expect(unit.at).to.be.equal(null);
      expect(unit.destination).to.be.equal(null);
      expect(unit.location1).to.be.equal(null);
      expect(unit.location2).to.be.equal(null);
      expect(unit.text).to.be.equal(null);
    });

    it('Should have the required properties', function() {
      const unit = new model.Via();

      expect(unit).to.be.an.instanceOf(model.Via);
      expect(unit).to.have.all.keys(['at', 'destination', 'location1', 'location2', 'text']
        .map((key) => {
          return model.symbols.get(key)
        }));
    });

    it('Should create a valid instance', function () {
      const unit = new model.Via(standardConfig);

      expect(unit).to.be.an.instanceOf(model.Via);

      expect(unit.at).to.be.an('object');
      expect(unit.at).to.be.an.instanceOf(Location);
      expect(unit.at.tiploc).to.be.equal(standardConfig.at.tiploc);

      expect(unit.destination).to.be.an('object');
      expect(unit.destination).to.be.an.instanceOf(Location);
      expect(unit.destination.tiploc).to.be.equal(standardConfig.destination.tiploc);

      expect(unit.location1).to.be.an('object');
      expect(unit.location1).to.be.an.instanceOf(Location);
      expect(unit.location1.tiploc).to.be.equal(standardConfig.location1.tiploc);

      expect(unit.location2).to.be.an('object');
      expect(unit.location2).to.be.an.instanceOf(Location);
      expect(unit.location2.tiploc).to.be.equal(standardConfig.location2.tiploc);

      expect(unit.text).to.be.an('string');
      expect(unit.text).to.be.equal(standardConfig.text);
    });

    it('Should create a valid instance with locationArr', function () {
      const unit = new model.Via(standardConfig, []);

      expect(unit).to.be.an.instanceOf(model.Via);

      expect(unit.at).to.be.an('object');
      expect(unit.at).to.be.an.instanceOf(Location);
      expect(unit.at.tiploc).to.be.equal(standardConfig.at.tiploc);

      expect(unit.destination).to.be.an('object');
      expect(unit.destination).to.be.an.instanceOf(Location);
      expect(unit.destination.tiploc).to.be.equal(standardConfig.destination.tiploc);

      expect(unit.location1).to.be.an('object');
      expect(unit.location1).to.be.an.instanceOf(Location);
      expect(unit.location1.tiploc).to.be.equal(standardConfig.location1.tiploc);

      expect(unit.location2).to.be.an('object');
      expect(unit.location2).to.be.an.instanceOf(Location);
      expect(unit.location2.tiploc).to.be.equal(standardConfig.location2.tiploc);

      expect(unit.text).to.be.an('string');
      expect(unit.text).to.be.equal(standardConfig.text);
    });

    it('Should create a valid instance with populated locationArr', function () {
      const unit = new model.Via(standardConfig, [locationConfig]);

      expect(unit).to.be.an.instanceOf(model.Via);

      expect(unit.at).to.be.an('object');
      expect(unit.at).to.be.an.instanceOf(Location);
      expect(unit.at.tiploc).to.be.equal(standardConfig.at.tiploc);

      expect(unit.destination).to.be.an('object');
      expect(unit.destination).to.be.an.instanceOf(Location);
      expect(unit.destination.tiploc).to.be.equal(standardConfig.destination.tiploc);

      expect(unit.location1).to.be.an('object');
      expect(unit.location1).to.be.an.instanceOf(Location);
      expect(unit.location1.tiploc).to.be.equal(standardConfig.location1.tiploc);

      expect(unit.location2).to.be.an('object');
      expect(unit.location2).to.be.an.instanceOf(Location);
      expect(unit.location2.tiploc).to.be.equal(standardConfig.location2.tiploc);

      expect(unit.text).to.be.an('string');
      expect(unit.text).to.be.equal(standardConfig.text);
    });

    it('Should create a valid instance with populated locationArr and names', function () {
      const unit = new model.Via(nameConfig, [locationConfig]);

      expect(unit).to.be.an.instanceOf(model.Via);

      expect(unit.at).to.be.an('object');
      expect(unit.at).to.be.an.instanceOf(Location);
      expect(unit.at.tiploc).to.be.equal(nameConfig.at.tiploc);

      expect(unit.destination).to.be.an('object');
      expect(unit.destination).to.be.an.instanceOf(Location);
      expect(unit.destination.tiploc).to.be.equal(nameConfig.destination.tiploc);

      expect(unit.location1).to.be.an('object');
      expect(unit.location1).to.be.an.instanceOf(Location);
      expect(unit.location1.tiploc).to.be.equal(nameConfig.location1.tiploc);

      expect(unit.location2).to.be.an('object');
      expect(unit.location2).to.be.an.instanceOf(Location);
      expect(unit.location2.tiploc).to.be.equal(nameConfig.location2.tiploc);

      expect(unit.text).to.be.an('string');
      expect(unit.text).to.be.equal(nameConfig.text);
    });

    it('symbol export should have correct mapping', function () {
      const atSymbol = model.symbols.get('at');
      expect(atSymbol).to.be.an('symbol');
      expect(atSymbol.toString()).to.be.equal('Symbol(at)');

      const destinationSymbol = model.symbols.get('destination');
      expect(destinationSymbol).to.be.an('symbol');
      expect(destinationSymbol.toString()).to.be.equal('Symbol(destination)');

      const location1Symbol = model.symbols.get('location1');
      expect(location1Symbol).to.be.an('symbol');
      expect(location1Symbol.toString()).to.be.equal('Symbol(location1)');

      const location2Symbol = model.symbols.get('location2');
      expect(location2Symbol).to.be.an('symbol');
      expect(location2Symbol.toString()).to.be.equal('Symbol(location2)');

      const textSymbol = model.symbols.get('text');
      expect(textSymbol).to.be.an('symbol');
      expect(textSymbol.toString()).to.be.equal('Symbol(text)');
    });
  });
};
