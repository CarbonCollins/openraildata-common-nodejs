'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../src/location');
const testData = require('../templates/location.json');

const moduleSuite = new Suite('Location module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT).to.be.an('object');
  expect(UUT.symbols).to.be.an('object');
  expect(UUT.class.name).to.be.equal('Location');
  expect(UUT.class).to.be.an('function');
  expect(new UUT.class()).to.be.an('object');
}));

moduleSuite.addTest(new Test('tiploc', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tpl');
}));

moduleSuite.addTest(new Test('tiploc null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.tiploc).to.not.equal(undefined);
  expect(IUUT.tiploc).to.be.equal(null);
}));

moduleSuite.addTest(new Test('trainOperatingCompany', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.trainOperatingCompany).to.not.equal(undefined);
  expect(IUUT.trainOperatingCompany).to.be.an('string');
  expect(IUUT.trainOperatingCompany).to.be.equal('toc');
}));

moduleSuite.addTest(new Test('trainOperatingCompany null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.trainOperatingCompany).to.not.equal(undefined);
  expect(IUUT.trainOperatingCompany).to.be.equal(null);
}));

moduleSuite.addTest(new Test('computerReservationSystem', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.computerReservationSystem).to.not.equal(undefined);
  expect(IUUT.computerReservationSystem).to.be.an('string');
  expect(IUUT.computerReservationSystem).to.be.equal('crs');
}));

moduleSuite.addTest(new Test('computerReservationSystem null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.computerReservationSystem).to.not.equal(undefined);
  expect(IUUT.computerReservationSystem).to.be.equal(null);
}));

moduleSuite.addTest(new Test('locationName', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.locationName).to.not.equal(undefined);
  expect(IUUT.locationName).to.be.an('string');
  expect(IUUT.locationName).to.be.equal('locname');
}));

moduleSuite.addTest(new Test('locationName null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.locationName).to.not.equal(undefined);
  expect(IUUT.locationName).to.be.equal(null);
}));

moduleSuite.addTest(new Test('updateLocation', () => {
  const IUUT = new UUT.class();
  expect(IUUT.updateLocation).to.not.equal(undefined);
  expect(IUUT.updateLocation).to.be.an('function');

  IUUT.updateLocation(testData);

  expect(IUUT.computerReservationSystem).to.be.an('string');
  expect(IUUT.computerReservationSystem).to.be.equal('crs');
  expect(IUUT.trainOperatingCompany).to.be.an('string');
  expect(IUUT.trainOperatingCompany).to.be.equal('toc');
  expect(IUUT.tiploc).to.be.an('string');
  expect(IUUT.tiploc).to.be.equal('tpl');
  expect(IUUT.locationName).to.be.an('string');
  expect(IUUT.locationName).to.be.equal('locname');
}));

moduleSuite.addTest(new Test('updateLocation null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.updateLocation).to.not.equal(undefined);
  expect(IUUT.updateLocation).to.be.an('function');

  IUUT.updateLocation();

  expect(IUUT.computerReservationSystem).to.be.equal(null);
  expect(IUUT.trainOperatingCompany).to.be.equal(null);
  expect(IUUT.tiploc).to.be.equal(null);
  expect(IUUT.locationName).to.be.equal(null);
}));

module.exports = () => { return moduleSuite; };
