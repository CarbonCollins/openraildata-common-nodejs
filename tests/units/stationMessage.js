'use strict';

const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../src/stationMessage');
const testData = require('../templates/stationMessage.json');
const locationData = require('../templates/location.json');

const moduleSuite = new Suite('StationMessage module tests');

moduleSuite.addTest(new Test('Exports class constructor', () => {
  expect(UUT).to.be.an('object');
  expect(UUT.symbols).to.be.an('object');
  expect(UUT.class.name).to.be.equal('StationMessage');
  expect(UUT.class).to.be.an('function');
  expect(new UUT.class()).to.be.an('object');
}));

moduleSuite.addTest(new Test('id', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.id).to.not.equal(undefined);
  expect(IUUT.id).to.be.an('string');
  expect(IUUT.id).to.be.equal('id');
}));

moduleSuite.addTest(new Test('id null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.id).to.not.equal(undefined);
  expect(IUUT.id).to.be.equal(null);
}));

moduleSuite.addTest(new Test('category', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.an('string');
  expect(IUUT.category).to.be.equal('cat');
}));

moduleSuite.addTest(new Test('category null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.category).to.not.equal(undefined);
  expect(IUUT.category).to.be.equal(null);
}));

moduleSuite.addTest(new Test('message', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.message).to.not.equal(undefined);
  expect(IUUT.message).to.be.an('string');
  expect(IUUT.message).to.be.equal('message');
}));

moduleSuite.addTest(new Test('message null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.message).to.not.equal(undefined);
  expect(IUUT.message).to.be.equal(null);
}));

moduleSuite.addTest(new Test('severity', () => {
  const IUUT = new UUT.class(testData);
  expect(IUUT.severity).to.not.equal(undefined);
  expect(IUUT.severity).to.be.an('number');
  expect(IUUT.severity).to.be.equal(0);
}));

moduleSuite.addTest(new Test('severity null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.severity).to.not.equal(undefined);
  expect(IUUT.severity).to.be.equal(null);
}));

moduleSuite.addTest(new Test('severityString 0', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { sev: 0 }));
  expect(IUUT.severityString).to.not.equal(undefined);
  expect(IUUT.severityString).to.be.an('string');
  expect(IUUT.severityString).to.be.equal('Situation normal');
}));

moduleSuite.addTest(new Test('severityString 1', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { sev: 1 }));
  expect(IUUT.severityString).to.not.equal(undefined);
  expect(IUUT.severityString).to.be.an('string');
  expect(IUUT.severityString).to.be.equal('Minor');
}));

moduleSuite.addTest(new Test('severityString 2', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { sev: 2 }));
  expect(IUUT.severityString).to.not.equal(undefined);
  expect(IUUT.severityString).to.be.an('string');
  expect(IUUT.severityString).to.be.equal('Major');
}));

moduleSuite.addTest(new Test('severityString 3', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { sev: 3 }));
  expect(IUUT.severityString).to.not.equal(undefined);
  expect(IUUT.severityString).to.be.an('string');
  expect(IUUT.severityString).to.be.equal('Severe');
}));

moduleSuite.addTest(new Test('severityString 4', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { sev: 4 }));
  expect(IUUT.severityString).to.not.equal(undefined);
  expect(IUUT.severityString).to.be.equal(null);
}));

moduleSuite.addTest(new Test('severityString null', () => {
  const IUUT = new UUT.class();
  expect(IUUT.severityString).to.not.equal(undefined);
  expect(IUUT.severityString).to.be.equal(null);
}));

moduleSuite.addTest(new Test('stations', () => {
  const IUUT = new UUT.class(Object.assign({}, testData, { Station: [locationData, locationData] }));
  expect(IUUT.stations).to.not.equal(undefined);
  expect(IUUT.stations).to.be.an('array');
  expect(IUUT.stations).to.have.lengthOf(2);
  expect(IUUT.stations[0].constructor.name).to.be.equal('Location');
  expect(IUUT.stations[1].constructor.name).to.be.equal('Location');
}));

module.exports = () => { return moduleSuite; };
