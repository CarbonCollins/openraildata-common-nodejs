'use strict';

const Mocha = require('mocha');

const moduleUnitTests = require('./units/module');

const associationUnitTests = require('./units/association');
const locationUnitTests = require('./units/location');
const scheduleUnitTests = require('./units/schedule');
const stationUnitTests = require('./units/station');
const stationMessageUnitTests = require('./units/stationMessage');

const mocha = new Mocha();
const { Suite } = Mocha;

const fullSuite = Suite.create(mocha.suite, 'openraildata-common-nodejs full test suite');

Promise.resolve()
  .then(() => { return moduleUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { return associationUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { return locationUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { return scheduleUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { return stationUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { return stationMessageUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => {
    return mocha.run((failures) => {
      process.on('exit', () => {
        process.exit(failures);
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });
