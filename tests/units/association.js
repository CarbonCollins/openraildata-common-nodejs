'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../lib/association');
const testData = require('../templates/association.json');

const moduleSuite = new Suite('association module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT.name).to.be.equal('Association');
  expect(UUT).to.be.an('function');
  expect(new UUT()).to.be.an('object');
}));

moduleSuite.addTest(new Test('tiploc', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tiploc');
}));

moduleSuite.addTest(new Test('category', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.an('string');
  expect(IUUT.category).to.be.equal('category');
}));

moduleSuite.addTest(new Test('main', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.mainTrain).to.not.equal(undefined);
  expect(IUUT.mainTrain).to.be.an('object');
  expect(IUUT.mainTrain).to.be.deep.equal({ rid: 'mainrid' });
}));

moduleSuite.addTest(new Test('mainTrainId', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.mainTrainId).to.not.equal(undefined);
  expect(IUUT.mainTrainId).to.be.an('string');
  expect(IUUT.mainTrainId).to.be.equal('mainrid');
}));

moduleSuite.addTest(new Test('assoc', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.assocTrain).to.not.equal(undefined);
  expect(IUUT.assocTrain).to.be.an('object');
  expect(IUUT.assocTrain).to.be.deep.equal({ rid: 'assocrid' });
}));

moduleSuite.addTest(new Test('assocTrainId', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.assocTrainId).to.not.equal(undefined);
  expect(IUUT.assocTrainId).to.be.an('string');
  expect(IUUT.assocTrainId).to.be.equal('assocrid');
}));

module.exports = () => { return moduleSuite; };

