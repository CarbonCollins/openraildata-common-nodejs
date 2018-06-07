'use strict';
const { expect } = require('chai');

const association = require('../../lib/es5/models/association');

const joinConfig = require('../templates/association/associationJoin.json');
const splitConfig = require('../templates/association/associationSplit.json');
const nextTrainConfig = require('../templates/association/associationNextTrain.json');


module.exports = function () {
  describe('Value suite', function () {
    it('Should construct with no input', function() {
      const unit = new association.Association();

      expect(unit).to.be.an('object');
      expect(unit).to.be.an.instanceOf(association.Association);
    });

    it('Should have the required properties', function() {
      const unit = new association.Association();

      expect(unit).to.be.an.instanceOf(association.Association);
      expect(unit).to.have.all.keys(['tiploc', 'category', 'main', 'association']
        .map((key) => {
          return association.symbols.get(key)
        }));

      // expect(association.Association.prototype).to.have.all.keys(['associatedTrain']);

      // const propertyDescriptors = Object.getOwnPropertyDescriptors(association.Association.prototype)
      //   .filter((descriptor) => {
      //     return (typeof descriptor.get === 'function' && typeof descriptor.set === null);
      //   });

      // console.log(JSON.stringify(propertyDescriptors, null, 2));
    });

    it('Should create a valid instance', function () {
      const unit = new association.Association(joinConfig);

      expect(unit).to.be.an.instanceOf(association.Association);

      expect(unit.tiploc).to.be.equal(joinConfig.tiploc);
      expect(unit.tiploc).to.be.an('string');

      expect(unit.category).to.be.equal(joinConfig.category);
      expect(unit.category).to.be.an('string');

      expect(unit.mainTrain).to.be.an('object');
      expect(unit.mainTrain).to.have.all.keys(['rid']);

      expect(unit.mainTrainId).to.be.an('string');
      expect(unit.mainTrainId).to.be.equal(joinConfig.main.rid);

      expect(unit.associatedTrain).to.be.an('object');
      expect(unit.associatedTrain).to.have.all.keys(['rid']);

      expect(unit.associatedTrainId).to.be.an('string');
      expect(unit.associatedTrainId).to.be.equal(joinConfig.association.rid);
    });

    it('Should be a join instance', function () {
      const unit = new association.Association(joinConfig);

      expect(unit).to.be.an.instanceOf(association.Association);

      expect(unit.isJoin).to.be.an('function');
      expect(unit.isJoin()).to.be.true;
      
      expect(unit.isSplit).to.be.an('function');
      expect(unit.isSplit()).to.be.false;

      expect(unit.isNextTrain).to.be.an('function');
      expect(unit.isNextTrain()).to.be.false;
    });

    it('Should be a split instance', function () {
      const unit = new association.Association(splitConfig);

      expect(unit).to.be.an.instanceOf(association.Association);

      expect(unit.isJoin).to.be.an('function');
      expect(unit.isJoin()).to.be.false;

      expect(unit.isSplit).to.be.an('function');
      expect(unit.isSplit()).to.be.true;

      expect(unit.isNextTrain).to.be.an('function');
      expect(unit.isNextTrain()).to.be.false;
    });

    it('Should be a next train instance', function () {
      const unit = new association.Association(nextTrainConfig);

      expect(unit).to.be.an.instanceOf(association.Association);

      expect(unit.isJoin).to.be.an('function');
      expect(unit.isJoin()).to.be.false;

      expect(unit.isSplit).to.be.an('function');
      expect(unit.isSplit()).to.be.false;

      expect(unit.isNextTrain).to.be.an('function');
      expect(unit.isNextTrain()).to.be.true;
    });

    it('symbol export should have correct mapping', function () {
      const tiplocSymbol = association.symbols.get('tiploc');
      expect(tiplocSymbol).to.be.an('symbol');
      expect(tiplocSymbol.toString()).to.be.equal('Symbol()');

      const categorySymbol = association.symbols.get('category');
      expect(categorySymbol).to.be.an('symbol');
      expect(categorySymbol.toString()).to.be.equal('Symbol()');

      const mainSymbol = association.symbols.get('main');
      expect(mainSymbol).to.be.an('symbol');
      expect(mainSymbol.toString()).to.be.equal('Symbol()');

      const associationSymbol = association.symbols.get('association');
      expect(associationSymbol).to.be.an('symbol');
      expect(associationSymbol.toString()).to.be.equal('Symbol()');
    });
  });
};
