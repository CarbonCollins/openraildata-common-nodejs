'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../lib/station');
const testData = require('../templates/station.json');

const moduleSuite = new Suite('Station module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT.name).to.be.equal('Station');
  expect(UUT).to.be.an('function');
  expect(new UUT()).to.be.an('object');
}));

moduleSuite.addTest(new Test('tiploc', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tpl');
}));

moduleSuite.addTest(new Test('tiploc null', () => {
  const IUUT = new UUT();
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.equal(null);
}));

moduleSuite.addTest(new Test('action', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.action).to.not.equal(undefined);
  expect(IUUT.action).to.be.an('string');
  expect(IUUT.action).to.be.equal('act');
}));

moduleSuite.addTest(new Test('action null', () => {
  const IUUT = new UUT();
  expect(IUUT.action).to.not.equal(undefined);
  expect(IUUT.action).to.be.equal(null);
}));

moduleSuite.addTest(new Test('plannedTimeOfArrival', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.plannedTimeOfArrival).to.not.equal(undefined);
  expect(IUUT.plannedTimeOfArrival).to.be.an('string');
  expect(IUUT.plannedTimeOfArrival).to.be.equal('pta');
}));

moduleSuite.addTest(new Test('plannedTimeOfArrival null', () => {
  const IUUT = new UUT();
  expect(IUUT.plannedTimeOfArrival).to.not.equal(undefined);
  expect(IUUT.plannedTimeOfArrival).to.be.equal(null);
}));

moduleSuite.addTest(new Test('plannedTimeOfDeparture', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.plannedTimeOfDeparture).to.not.equal(undefined);
  expect(IUUT.plannedTimeOfDeparture).to.be.an('string');
  expect(IUUT.plannedTimeOfDeparture).to.be.equal('ptd');
}));

moduleSuite.addTest(new Test('plannedTimeOfDeparture null', () => {
  const IUUT = new UUT();
  expect(IUUT.plannedTimeOfDeparture).to.not.equal(undefined);
  expect(IUUT.plannedTimeOfDeparture).to.be.equal(null);
}));

moduleSuite.addTest(new Test('workingTimeOfArrival', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.workingTimeOfArrival).to.not.equal(undefined);
  expect(IUUT.workingTimeOfArrival).to.be.an('string');
  expect(IUUT.workingTimeOfArrival).to.be.equal('wta');
}));

moduleSuite.addTest(new Test('workingTimeOfArrival null', () => {
  const IUUT = new UUT();
  expect(IUUT.workingTimeOfArrival).to.not.equal(undefined);
  expect(IUUT.workingTimeOfArrival).to.be.equal(null);
}));

moduleSuite.addTest(new Test('workingTimeOfDeparture', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.workingTimeOfDeparture).to.not.equal(undefined);
  expect(IUUT.workingTimeOfDeparture).to.be.an('string');
  expect(IUUT.workingTimeOfDeparture).to.be.equal('wtd');
}));

moduleSuite.addTest(new Test('workingTimeOfDeparture null', () => {
  const IUUT = new UUT();
  expect(IUUT.workingTimeOfDeparture).to.not.equal(undefined);
  expect(IUUT.workingTimeOfDeparture).to.be.equal(null);
}));

moduleSuite.addTest(new Test('operational default', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.operational).to.not.equal(undefined);
  expect(IUUT.operational).to.be.an('boolean');
  expect(IUUT.operational).to.be.equal(false);
}));

moduleSuite.addTest(new Test('operational false', () => {
  const IUUT = new UUT(testData, false);
  expect(IUUT.operational).to.not.equal(undefined);
  expect(IUUT.operational).to.be.an('boolean');
  expect(IUUT.operational).to.be.equal(false);
}));

moduleSuite.addTest(new Test('operational true', () => {
  const IUUT = new UUT(testData, true);
  expect(IUUT.operational).to.not.equal(undefined);
  expect(IUUT.operational).to.be.an('boolean');
  expect(IUUT.operational).to.be.equal(true);
}));

moduleSuite.addTest(new Test('platform', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.platform).to.not.equal(undefined);
  expect(IUUT.platform).to.be.an('string');
  expect(IUUT.platform).to.be.equal('plat');
}));

moduleSuite.addTest(new Test('platform null', () => {
  const IUUT = new UUT();
  expect(IUUT.platform).to.not.equal(undefined);
  expect(IUUT.platform).to.be.equal(null);
}));

moduleSuite.addTest(new Test('isPlatformSuppressed', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.isPlatformSuppressed).to.not.equal(undefined);
  expect(IUUT.isPlatformSuppressed).to.be.an('function');
  expect(IUUT.isPlatformSuppressed()).to.be.equal(false);
}));

moduleSuite.addTest(new Test('isPlatformSuppressed true', () => {
  const IUUT = new UUT(Object.assign({}, testData, { platsup: true }));
  expect(IUUT.isPlatformSuppressed).to.not.equal(undefined);
  expect(IUUT.isPlatformSuppressed).to.be.an('function');
  expect(IUUT.isPlatformSuppressed()).to.be.equal(true);
}));

moduleSuite.addTest(new Test('platform null', () => {
  const IUUT = new UUT();
  expect(IUUT.isPlatformSuppressed).to.not.equal(undefined);
  expect(IUUT.isPlatformSuppressed).to.be.an('function');
  expect(IUUT.isPlatformSuppressed()).to.be.equal(false);
}));




module.exports = () => { return moduleSuite; };
