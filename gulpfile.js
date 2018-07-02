'use strict'

const path = require('path');
const gulp = require('gulp');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

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
  return gulp.src(['src/**/*.mjs'])
    .pipe(babel({
      presets: ['node6']
    }))
    .pipe(gulp.dest('lib/es5'));
});

gulp.task('copy-source', ['clean-lib-es6'], () => {
  return gulp.src(['src/**/*.mjs'])
    .pipe(gulp.dest('lib/es6'));
});

gulp.task('copySrcToJs', () => {
  return gulp.src(['src/*.mjs', 'src/**/*.mjs'], { base: 'src/' })
    .pipe(rename({
      extname: ".js"
    }))
    .pipe(gulp.dest('quality/src'));
});

gulp.task('copyQualityConfigs', () => {
  return gulp.src(['.codeclimate.yml', '.eslintrc.json'])
    .pipe(gulp.dest('quality/'));
});

gulp.task('compileES5', ['clean-lib-es5', 'transpile']);
gulp.task('compileES6', ['clean-lib-es6', 'copy-source']);
gulp.task('compile', ['compileES5', 'compileES6']);

gulp.task('prepCodeQuality', ['copySrcToJs', 'copyQualityConfigs']);

gulp.task('generateClassDocs', () => {
  return fs.ensureDir('docs/wiki/Models')
    .then(() => {
      return fs.readdir('src/models')
    })
    .then((models) => {
      return models.reduce((promiseChain, model) => {
        return promiseChain
          .then(() => {
            return jsdoc2md.render({
              files: path.join('src/models', model),
              configure: '.jsdoc.json'
            })
            .then((output) => {
              return fs.writeFile(path.join('docs/wiki/Models', `${model[0].toUpperCase()}${model.slice(1)}`.replace(/\..+$/, '.md')), output);
            });
          });
      }, Promise.resolve())
    });
});

gulp.task('generateWikiPages', ['generateClassDocs']);

gulp.task('generateDocs', () => {
  return fs.ensureDir(path.join(__dirname, './docs'))
    .then(() => {
      return jsdoc2md.render({
        files: ['docs/alias.js', 'src/common.mjs', 'src/models/*.mjs'],
        configure: '.jsdoc.json'
      });
    })
    .then((output) => {
      return fs.writeFile('docs/devDoc.md', output);
    });
});
