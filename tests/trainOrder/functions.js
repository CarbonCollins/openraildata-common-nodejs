'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/trainOrder');

const standardConfigSet = require('../templates/trainOrder/trainOrderSet.json');
const standardConfigClear = require('../templates/trainOrder/trainOrderClear.json');


module.exports = function () {
  describe('Functional suite', function () {
    describe('isSet() tests', function () {
      it('Should exist', function () {
        const unit = new model.TrainOrder();

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        expect(unit.isSet).to.exist;
        expect(unit.isSet).to.be.an('function');
      });

      it('Should return a false boolean', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedSet = unit.isSet();

        expect(returnedSet).to.be.an('boolean');
        expect(returnedSet).to.be.equal(false);
      });

      it('Should return a true boolean', function () {
        const unit = new model.TrainOrder(standardConfigSet);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedSet = unit.isSet();

        expect(returnedSet).to.be.an('boolean');
        expect(returnedSet).to.be.equal(true);
      });
    });
    describe('isClear() tests', function () {
      it('Should exist', function () {
        const unit = new model.TrainOrder();

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        expect(unit.isClear).to.exist;
        expect(unit.isClear).to.be.an('function');
      });

      it('Should return a false boolean', function () {
        const unit = new model.TrainOrder(standardConfigSet);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedClear = unit.isClear();

        expect(returnedClear).to.be.an('boolean');
        expect(returnedClear).to.be.equal(false);
      });

      it('Should return a true boolean', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedClear = unit.isClear();

        expect(returnedClear).to.be.an('boolean');
        expect(returnedClear).to.be.equal(true);
      });
    });
    describe('getSetTrain() tests', function () {
      it('Should exist', function () {
        const unit = new model.TrainOrder();

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        expect(unit.getSetTrain).to.exist;
        expect(unit.getSetTrain).to.be.an('function');
      });

      it('Should return valid set values', function () {
        const unit = new model.TrainOrder(standardConfigSet);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedFirstValue = unit.getSetTrain('first');
        const returnedSecondValue = unit.getSetTrain('second');
        const returnedThirdValue = unit.getSetTrain('third');

        expect(returnedFirstValue).to.be.an('string');
        expect(returnedFirstValue).to.be.equal(standardConfigSet.set.first);

        expect(returnedSecondValue).to.be.an('string');
        expect(returnedSecondValue).to.be.equal(standardConfigSet.set.second);

        expect(returnedThirdValue).to.be.an('string');
        expect(returnedThirdValue).to.be.equal(standardConfigSet.set.third);
      });

      it('Should return null set values', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedFirstValue = unit.getSetTrain('first');
        const returnedSecondValue = unit.getSetTrain('second');
        const returnedThirdValue = unit.getSetTrain('third');

        expect(returnedFirstValue).to.be.equal(null);
        expect(returnedSecondValue).to.be.equal(null);
        expect(returnedThirdValue).to.be.equal(null);
      });

      it('Should return null with undefined input', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedValue = unit.getSetTrain(undefined);

        expect(returnedValue).to.be.equal(null);
      });

      it('Should return null with null input', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedValue = unit.getSetTrain(null);

        expect(returnedValue).to.be.equal(null);
      });

      it('Should return null with number input', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedValue = unit.getSetTrain(21);

        expect(returnedValue).to.be.equal(null);
      });

      it('Should return null with empty string input', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedValue = unit.getSetTrain('');

        expect(returnedValue).to.be.equal(null);
      });

      it('Should return null with invalid string input', function () {
        const unit = new model.TrainOrder(standardConfigClear);

        expect(unit).to.be.an.instanceOf(model.TrainOrder);

        const returnedValue = unit.getSetTrain('fourth');

        expect(returnedValue).to.be.equal(null);
      });
    });
  });
};
