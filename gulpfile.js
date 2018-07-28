'use strict'

const gulp = require('gulp');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

gulp.task('clean:lib', () => {
  return gulp.src('lib', { read: false })
    .pipe(clean());
});

gulp.task('clean:lib:common', () => {
  return gulp.src('lib/common', { read: false })
    .pipe(clean());
});

gulp.task('clean:lib:es6', () => {
  return gulp.src('lib/es6', { read: false })
    .pipe(clean());
});

gulp.task('transpile', ['clean:lib:common'], () => {
  return gulp.src(['src/**/*.mjs'])
    .pipe(babel({
      presets: ['node6']
    }))
    .pipe(gulp.dest('lib/common'));
});

gulp.task('copy:source', ['clean:lib:es6'], () => {
  return gulp.src(['src/**/*.mjs'])
    .pipe(gulp.dest('lib/es6'));
});

gulp.task('copy:quality', () => {
  return gulp.src(['src/*.mjs', 'src/**/*.mjs'], { base: 'src/' })
    .pipe(rename({
      extname: ".js"
    }))
    .pipe(gulp.dest('quality/src'));
});

gulp.task('copy:quality:configs', () => {
  return gulp.src(['.codeclimate.yml', '.eslintrc.json'])
    .pipe(gulp.dest('quality/'));
});

gulp.task('build:common', ['clean:lib:common', 'transpile']);
gulp.task('build:es6', ['clean:lib:es6', 'copy:source']);
gulp.task('build', ['build:common', 'build:es6']);

gulp.task('build:quality', ['copy:quality', 'copy:quality:configs']);

gulp.task('build:docs', () => {
  return fs.ensureDir('docs')
    .then(() => {
      return jsdoc2md.render({
        files: ['src/models/*.mjs'],
        configure: '.jsdoc.json'
      });
    })
    .then((output) => {
      return fs.writeFile('docs/Models.md', output);
    });
});
