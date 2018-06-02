'use strict';

const path = require('path');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const diff = require('diff');
const Mocha = require('mocha');
const Chai = require('chai');
const rewire = require('rewire');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = rewire('../../index');

const unitModules = ['Association', 'Location', 'Schedule', 'Station', 'StationMessage', 'TrainOrder', 'TrainStatus']

const moduleSuite = new Suite('openweathermap-api-nodejs module tests');

// ----- module export tests ----- //
const exportSuite = new Suite('Export tests');
exportSuite.timeout(5000);

exportSuite.addTest(new Test('OpenRailData exports class', () => {
  expect(UUT).to.be.an('object', 'module should export an already instanced class');
  expect(UUT).to.have.all.keys(unitModules
    .slice(0)
    .map((module) => {
      return UUT.__get__(`s_${module.charAt(0).toLowerCase()}${module.slice(1)}`);
    }));
}));

exportSuite.addTest(new Test('API docs present and up-to-date', (done) => {
  const apiDocPath = path.join(__dirname, '../../docs/api.md');
  fs.pathExists(apiDocPath)
    .then((exists) => {
      if (exists) {
        return jsdoc2md.render({
          'no-cache': true,
          separators: true,
          files: [path.join(__dirname, '../../docs/alias.js'), path.join(__dirname, '../../index.js'), path.join(__dirname, '../../src/*.js')]
          // source: files
        });
      }
      return Promise.reject(new Error('api.md is not present in documentation folder'));
    })
    .then((output) => {
      fs.readFile(apiDocPath, 'utf-8')
        .then((fileString) => {
          const diffs = diff.diffLines(fileString, output, { ignoreWhitespace: true })
            .filter((change) => {
              return (change.added || change.removed);
            });
          if (diffs.length === 0) {
            done(null);
          } else {
            console.log(JSON.stringify({ d: diffs }));
            done(new Error('Existing api.md is not up to date with current code'));
          }
        })
        .catch((err) => {
          done(err);
        });
    })
    .catch((err) => {
      done(err);
    });
}));

exportSuite.addTest(new Test('ORDCommon exports correct getters', () => {

  const indexJS = rewire('../../index.js');
  const ORDCommon = indexJS.__get__('ORDCommon');

  const getters = Object.getOwnPropertyNames(ORDCommon.prototype).filter((name) => {
    const result = Object.getOwnPropertyDescriptor(ORDCommon.prototype, name);
    return !!result.get;
  });

  expect(getters).to.deep.equal(unitModules);
}));

for (let i = 0, iLength = unitModules.length; i < iLength; i += 1) {
  const getterSuite = new Suite(`${unitModules[i]} module suite`);

  getterSuite.addTest(new Test('Exports a constructor', () => {
    expect(UUT[unitModules[i]]).to.be.an('function');
    expect(new UUT[unitModules[i]]).to.be.an('object');
  }));

  getterSuite.addTest(new Test('Exports a mixer function', (done) => {
    const mixerName = `${unitModules[i].charAt(0).toLowerCase()}${unitModules[i].slice(1)}Mixer`;
    expect(UUT[mixerName]).to.be.an('function');
    expect(UUT[mixerName]((mixer) => {
      expect(mixer).to.be.an('function');
      expect(new mixer()).to.be.an('object');
      expect(mixer.name).to.be.equal(unitModules[i], 'mixer does not return the correct function');
      done();
    }))
  }));

  exportSuite.addSuite(getterSuite);
}

moduleSuite.addSuite(exportSuite);

module.exports = () => { return moduleSuite; };

