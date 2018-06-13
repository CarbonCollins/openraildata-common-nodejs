'use strict';

const { expect } = require('chai');
const path = require('path');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const diff = require('diff');

const apiDocPath = path.join(__dirname, '../../docs/devDoc.md');

module.exports = function () {
  describe('Documentation tests', function () {
    // it('Should be up to date', function(done) {
    //   this.timeout(10000);
    //   fs.pathExists(apiDocPath)
    //   .then((exists) => {
    //     if (exists) {
    //       return jsdoc2md.render({
    //         files: ['docs/alias.js', 'src/common.mjs', 'src/models/*.mjs'],
    //         config: '.jsdoc.json'
    //       });
    //     }
    //     return Promise.reject(new Error('api.md is not present in documentation folder'));
    //   })
    //   .then((output) => {
    //     fs.readFile(apiDocPath, 'utf-8')
    //       .then((fileString) => {
    //         const diffs = diff.diffLines(fileString, output, { ignoreWhitespace: true })
    //           .filter((change) => {
    //             return (change.added || change.removed);
    //           });
    //         if (diffs.length === 0) {
    //           done(null);
    //         } else {
    //           console.log(JSON.stringify({ d: diffs }));
    //           done(new Error('Existing devDoc.md is not up to date with current code'));
    //         }
    //       })
    //       .catch((err) => {
    //         done(err);
    //       });
    //   })
    //   .catch((err) => {
    //     done(err);
    //   });
    // });
  });
};
