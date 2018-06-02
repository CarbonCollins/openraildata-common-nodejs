'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../src/models/trainStatus');
const testData = require('../templates/trainStatus.json');
const stationData = require('../templates/station.json');

const moduleSuite = new Suite('TrainStatus module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT).to.be.an('object');
  expect(UUT.symbols).to.be.an('object');
  expect(UUT.class.name).to.be.equal('TrainStatus');
  expect(UUT.class).to.be.an('function');
  expect(new UUT.class()).to.be.an('object');
}));

moduleSuite.addTest(new Test('rid', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.rid).to.not.equal(undefined);
  expect(IUUT.rid).to.be.an('string');
  expect(IUUT.rid).to.be.equal('rid');
}));

moduleSuite.addTest(new Test('rid null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.rid).to.not.equal(undefined);
  expect(IUUT.rid).to.be.equal(null);
}));

moduleSuite.addTest(new Test('uniqueID', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.uniqueID).to.not.equal(undefined);
  expect(IUUT.uniqueID).to.be.an('string');
  expect(IUUT.uniqueID).to.be.equal('uid');
}));

moduleSuite.addTest(new Test('uniqueID null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.uniqueID).to.not.equal(undefined);
  expect(IUUT.uniqueID).to.be.equal(null);
}));

moduleSuite.addTest(new Test('serviceStartingDate', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.serviceStartingDate).to.not.equal(undefined);
  expect(IUUT.serviceStartingDate).to.be.an('string');
  expect(IUUT.serviceStartingDate).to.be.equal('ssd');
}));

moduleSuite.addTest(new Test('serviceStartingDate null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.serviceStartingDate).to.not.equal(undefined);
  expect(IUUT.serviceStartingDate).to.be.equal(null);
}));

moduleSuite.addTest(new Test('allLocations', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { locations: [stationData, stationData] }));
  expect(IUUT.allLocations).to.not.equal(undefined);
  expect(IUUT.allLocations).to.be.an('array');
  expect(IUUT.allLocations).to.have.lengthOf(2);
  expect(IUUT.allLocations[0]).to.be.an('object');
  expect(IUUT.allLocations[1]).to.be.an('object');
  expect(IUUT.allLocations[0].constructor.name).to.be.equal('Station');
  expect(IUUT.allLocations[1].constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('allLocations noplat', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { locations: [Object.assign({}, stationData, { plat: undefined })] }));
  expect(IUUT.allLocations).to.not.equal(undefined);
  expect(IUUT.allLocations).to.be.an('array');
  expect(IUUT.allLocations).to.have.lengthOf(1);
  expect(IUUT.allLocations[0]).to.be.an('object');
  expect(IUUT.allLocations[0].constructor.name).to.be.equal('Station');
}));

moduleSuite.addTest(new Test('allLocations null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.allLocations).to.not.equal(undefined);
  expect(IUUT.allLocations).to.be.an('array');
  expect(IUUT.allLocations).to.have.lengthOf(0);
}));

module.exports = () => { return moduleSuite; };
