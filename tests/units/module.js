'use strict';

const path = require('path');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const diff = require('diff');
const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const UUT = require('../../index');

const moduleSuite = new Suite('openweathermap-api-nodejs module tests');

// ----- module export tests ----- //
const exportSuite = new Suite('Export tests');

exportSuite.addTest(new Test('OpenRailData exports class', () => {
  expect(UUT).to.be.an('object', 'module should export an already instanced class');
  expect(UUT).to.have.all.keys(['_Association', '_Location', '_Schedule', '_Station', '_StationMessage', '_TrainOrder', '_TrainStatus'])
}));

exportSuite.addTest(new Test('API docs present and up-to-date', (done) => {
  const apiDocPath = path.join(__dirname, '../../docs/api.md');
  fs.pathExists(apiDocPath)
    .then((exists) => {
      if (exists) {
        return jsdoc2md.render({
          'no-cache': true,
          separators: true,
          files: [path.join(__dirname, '../../docs/alias.js'), path.join(__dirname, '../../index.js'), path.join(__dirname, '../../lib/*.js')]
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

moduleSuite.addSuite(exportSuite);

module.exports = () => { return moduleSuite; };
