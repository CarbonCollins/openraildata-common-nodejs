'use strict'

const path = require('path');
const gulp = require('gulp');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
 

gulp.task('generateDocs', () => {
  return fs.ensureDir(path.join(__dirname, './docs'))
    .then(() => {
      return jsdoc2md.render({
        'no-cache': true,
        separators: true,
        files: ['./docs/alias.js', './index.js', './lib/*.js']
      });
    })
    .then((output) => {
      return fs.writeFile('docs/api.md', output);
    });
});
