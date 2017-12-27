'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../lib/trainOrder');
const testData = require('../templates/trainOrder.json');

const moduleSuite = new Suite('TrainOrder module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT.name).to.be.equal('TrainOrder');
  expect(UUT).to.be.an('function');
  expect(new UUT()).to.be.an('object');
}));

moduleSuite.addTest(new Test('tiploc', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tiploc');
}));

moduleSuite.addTest(new Test('tiploc null', () => {
  const IUUT = new UUT();
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.equal(null);
}));

moduleSuite.addTest(new Test('computerReservationSystem', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.computerReservationSystem).to.not.equal(undefined);
  expect(IUUT.computerReservationSystem).to.be.an('string');
  expect(IUUT.computerReservationSystem).to.be.equal('crs');
}));

moduleSuite.addTest(new Test('computerReservationSystem null', () => {
  const IUUT = new UUT();
  expect(IUUT.computerReservationSystem).to.not.equal(undefined);
  expect(IUUT.computerReservationSystem).to.be.equal(null);
}));

moduleSuite.addTest(new Test('platform', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.platform).to.not.equal(undefined);
  expect(IUUT.platform).to.be.an('string');
  expect(IUUT.platform).to.be.equal('platform');
}));

moduleSuite.addTest(new Test('platform null', () => {
  const IUUT = new UUT();
  expect(IUUT.platform).to.not.equal(undefined);
  expect(IUUT.platform).to.be.equal(null);
}));

moduleSuite.addTest(new Test('sets', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.sets).to.not.equal(undefined);
  expect(IUUT.sets).to.be.an('object');
  expect(IUUT.sets).to.be.deep.equal(testData.set);
}));

moduleSuite.addTest(new Test('sets null', () => {
  const IUUT = new UUT();
  expect(IUUT.sets).to.not.equal(undefined);
  expect(IUUT.sets).to.be.equal(null);
}));

moduleSuite.addTest(new Test('first', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.first).to.not.equal(undefined);
  expect(IUUT.first).to.be.an('object');
  expect(IUUT.first).to.be.deep.equal(testData.set.first);
}));

moduleSuite.addTest(new Test('first null', () => {
  const IUUT = new UUT();
  expect(IUUT.first).to.not.equal(undefined);
  expect(IUUT.first).to.be.equal(null);
}));

moduleSuite.addTest(new Test('second', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.second).to.not.equal(undefined);
  expect(IUUT.second).to.be.an('object');
  expect(IUUT.second).to.be.deep.equal(testData.set.second);
}));

moduleSuite.addTest(new Test('second null', () => {
  const IUUT = new UUT();
  expect(IUUT.second).to.not.equal(undefined);
  expect(IUUT.second).to.be.equal(null);
}));

moduleSuite.addTest(new Test('third', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.third).to.not.equal(undefined);
  expect(IUUT.third).to.be.an('object');
  expect(IUUT.third).to.be.deep.equal(testData.set.third);
}));

moduleSuite.addTest(new Test('third null', () => {
  const IUUT = new UUT();
  expect(IUUT.third).to.not.equal(undefined);
  expect(IUUT.third).to.be.equal(null);
}));

moduleSuite.addTest(new Test('clears', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.clears).to.not.equal(undefined);
  expect(IUUT.clears).to.be.an('object');
  expect(IUUT.clears).to.be.deep.equal(testData.clear);
}));

moduleSuite.addTest(new Test('clears null', () => {
  const IUUT = new UUT();
  expect(IUUT.clears).to.not.equal(undefined);
  expect(IUUT.clears).to.be.equal(null);
}));

moduleSuite.addTest(new Test('isSet true', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.isSet).to.not.equal(undefined);
  expect(IUUT.isSet).to.be.an('function');
  expect(IUUT.isSet()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('isSet false', () => {
  const IUUT = new UUT(Object.assign({}, testData, { set: undefined }));
  expect(IUUT.isSet).to.not.equal(undefined);
  expect(IUUT.isSet).to.be.an('function');
  expect(IUUT.isSet()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isClear true', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.isClear).to.not.equal(undefined);
  expect(IUUT.isClear).to.be.an('function');
  expect(IUUT.isClear()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('isClear false', () => {
  const IUUT = new UUT(Object.assign({}, testData, { clear: undefined }));
  expect(IUUT.isClear).to.not.equal(undefined);
  expect(IUUT.isClear).to.be.an('function');
  expect(IUUT.isClear()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('getSetTrain first', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.getSetTrain).to.not.equal(undefined);
  expect(IUUT.getSetTrain).to.be.an('function');
  expect(IUUT.getSetTrain('first')).to.be.deep.equal(testData.set.first);
}));

moduleSuite.addTest(new Test('getSetTrain null', () => {
  const IUUT = new UUT(Object.assign({}, testData, { clear: undefined }));
  expect(IUUT.getSetTrain).to.not.equal(undefined);
  expect(IUUT.getSetTrain).to.be.an('function');
  expect(IUUT.getSetTrain()).to.be.equal(null);
}));


module.exports = () => { return moduleSuite; };
