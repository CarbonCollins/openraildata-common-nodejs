'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../src/models/association');
const testData = require('../templates/association.json');

const moduleSuite = new Suite('Association module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT).to.be.an('object');
  expect(UUT.symbols).to.be.an('object');
  expect(UUT.class.name).to.be.equal('Association');
  expect(UUT.class).to.be.an('function');
  expect(new UUT.class()).to.be.an('object');
}));

moduleSuite.addTest(new Test('getRIDFromTrain', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.getRIDFromTrain).to.not.equal(undefined);
  expect(IUUT.getRIDFromTrain).to.be.an('function');

  const IUUTResult = IUUT.getRIDFromTrain({ rid: 'rid' });
  expect(IUUTResult).to.not.equal(undefined);
  expect(IUUTResult).to.be.an('string');
  expect(IUUTResult).to.be.equal('rid');
}));

moduleSuite.addTest(new Test('getRIDFromTrain null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.getRIDFromTrain).to.not.equal(undefined);
  expect(IUUT.getRIDFromTrain).to.be.an('function');

  const IUUTResult = IUUT.getRIDFromTrain();
  expect(IUUTResult).to.not.equal(undefined);
  expect(IUUTResult).to.be.equal(null);
}));

moduleSuite.addTest(new Test('tiploc', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tiploc');
}));

moduleSuite.addTest(new Test('tiploc null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.equal(null);
}));

moduleSuite.addTest(new Test('category', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.an('string');
  expect(IUUT.category).to.be.equal('category');
}));

moduleSuite.addTest(new Test('category null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.equal(null);
}));

moduleSuite.addTest(new Test('mainTrain', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.mainTrain).to.not.equal(undefined);
  expect(IUUT.mainTrain).to.be.an('object');
  expect(IUUT.mainTrain).to.be.deep.equal({ rid: 'mainrid' });
}));

moduleSuite.addTest(new Test('mainTrain null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.mainTrain).to.not.equal(undefined);
  expect(IUUT.mainTrain).to.be.equal(null);
}));

moduleSuite.addTest(new Test('mainTrainId', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.mainTrainId).to.not.equal(undefined);
  expect(IUUT.mainTrainId).to.be.an('string');
  expect(IUUT.mainTrainId).to.be.equal('mainrid');
}));

moduleSuite.addTest(new Test('mainTrainId null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.mainTrainId).to.not.equal(undefined);
  expect(IUUT.mainTrainId).to.be.equal(null);
}));

moduleSuite.addTest(new Test('associatedTrain', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.associatedTrain).to.not.equal(undefined);
  expect(IUUT.associatedTrain).to.be.an('object');
  expect(IUUT.associatedTrain).to.be.deep.equal({ rid: 'assocrid' });
}));

moduleSuite.addTest(new Test('associatedTrain null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.associatedTrain).to.not.equal(undefined);
  expect(IUUT.associatedTrain).to.be.equal(null);
}));

moduleSuite.addTest(new Test('associatedTrainId', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.associatedTrainId).to.not.equal(undefined);
  expect(IUUT.associatedTrainId).to.be.an('string');
  expect(IUUT.associatedTrainId).to.be.equal('assocrid');
}));

moduleSuite.addTest(new Test('associatedTrainId null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.associatedTrainId).to.not.equal(undefined);
  expect(IUUT.associatedTrainId).to.be.equal(null);
}));

moduleSuite.addTest(new Test('isJoin false', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.isJoin).to.not.equal(undefined);
  expect(IUUT.isJoin).to.be.an('function');
  expect(IUUT.isJoin()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isJoin true', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { category: 'JJ' }));
  expect(IUUT.isJoin).to.not.equal(undefined);
  expect(IUUT.isJoin).to.be.an('function');
  expect(IUUT.isJoin()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('isSplit false', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.isSplit).to.not.equal(undefined);
  expect(IUUT.isSplit).to.be.an('function');
  expect(IUUT.isSplit()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isSplit true', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { category: 'VV' }));
  expect(IUUT.isSplit).to.not.equal(undefined);
  expect(IUUT.isSplit).to.be.an('function');
  expect(IUUT.isSplit()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('isNextTrain false', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.isNextTrain).to.not.equal(undefined);
  expect(IUUT.isNextTrain).to.be.an('function');
  expect(IUUT.isNextTrain()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isNextTrain true', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { category: 'NP' }));
  expect(IUUT.isNextTrain).to.not.equal(undefined);
  expect(IUUT.isNextTrain).to.be.an('function');
  expect(IUUT.isNextTrain()).to.be.equal(true);
}));

module.exports = () => { return moduleSuite; };

