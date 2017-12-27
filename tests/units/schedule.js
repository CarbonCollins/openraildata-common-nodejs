'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../lib/schedule');
const testData = require('../templates/schedule.json');

const moduleSuite = new Suite('Schedule module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT.name).to.be.equal('Schedule');
  expect(UUT).to.be.an('function');
  expect(new UUT()).to.be.an('object');
}));

moduleSuite.addTest(new Test('rid', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.rid).to.not.equal(undefined);
  expect(IUUT.rid).to.be.an('string');
  expect(IUUT.rid).to.be.equal('rid');
}));

moduleSuite.addTest(new Test('rid null', () => {
  const IUUT = new UUT();
  expect(IUUT.rid).to.not.equal(undefined);
  expect(IUUT.rid).to.be.equal(null);
}));

moduleSuite.addTest(new Test('serviceStartingDate', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.serviceStartingDate).to.not.equal(undefined);
  expect(IUUT.serviceStartingDate).to.be.an('string');
  expect(IUUT.serviceStartingDate).to.be.equal('ssd');
}));

moduleSuite.addTest(new Test('serviceStartingDate null', () => {
  const IUUT = new UUT();
  expect(IUUT.serviceStartingDate).to.not.equal(undefined);
  expect(IUUT.serviceStartingDate).to.be.equal(null);
}));

moduleSuite.addTest(new Test('trainOperatingCompany', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.trainOperatingCompany).to.not.equal(undefined);
  expect(IUUT.trainOperatingCompany).to.be.an('string');
  expect(IUUT.trainOperatingCompany).to.be.equal('toc');
}));

moduleSuite.addTest(new Test('trainOperatingCompany null', () => {
  const IUUT = new UUT();
  expect(IUUT.trainOperatingCompany).to.not.equal(undefined);
  expect(IUUT.trainOperatingCompany).to.be.equal(null);
}));

moduleSuite.addTest(new Test('trainId', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.trainId).to.not.equal(undefined);
  expect(IUUT.trainId).to.be.an('string');
  expect(IUUT.trainId).to.be.equal('trainId');
}));

moduleSuite.addTest(new Test('trainId null', () => {
  const IUUT = new UUT();
  expect(IUUT.trainId).to.not.equal(undefined);
  expect(IUUT.trainId).to.be.equal(null);
}));

moduleSuite.addTest(new Test('uniqueID', () => {
  const IUUT = new UUT(testData);
  expect(IUUT.uniqueID).to.not.equal(undefined);
  expect(IUUT.uniqueID).to.be.an('string');
  expect(IUUT.uniqueID).to.be.equal('uid');
}));

moduleSuite.addTest(new Test('uniqueID null', () => {
  const IUUT = new UUT();
  expect(IUUT.uniqueID).to.not.equal(undefined);
  expect(IUUT.uniqueID).to.be.equal(null);
}));

module.exports = () => { return moduleSuite; };
