'use strict'

const path = require('path');
const gulp = require('gulp');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

gulp.task('clean-lib', () => {
  return gulp.src('lib', { read: false })
    .pipe(clean());
});

gulp.task('clean-lib-es5', () => {
  return gulp.src('lib/es5', { read: false })
    .pipe(clean());
});

gulp.task('clean-lib-es6', () => {
  return gulp.src('lib/es6', { read: false })
    .pipe(clean());
});

gulp.task('transpile', ['clean-lib-es5'], () => {
  return gulp.src(['./src/**/*.mjs'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('lib/es5'));
});

gulp.task('copy-source', ['clean-lib-es6'], () => {
  return gulp.src(['./src/**/*.mjs'])
    .pipe(gulp.dest('lib/es6'));
});

gulp.task('generateES5', ['clean-lib-es5', 'transpile']);
gulp.task('generateES6', ['clean-lib-es6', 'copy-source']);
gulp.task('generateLib', ['generateES5', 'generateES6']);
gulp.task('generateDocs', () => {
  return fs.ensureDir(path.join(__dirname, './docs'))
    .then(() => {
      return jsdoc2md.render({
        files: ['./docs/alias.js', './src/ordCommon.mjs', './src/models/*.mjs'],
        configure: './.jsdoc.json'
      });
    })
    .then((output) => {
      return fs.writeFile('docs/devDoc.md', output);
    });
});
