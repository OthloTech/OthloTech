'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss')
const cssnext = require('postcss-preset-env')

const scsslint = require('gulp-scss-lint')
const cache = require('gulp-cached')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const paths = {
  scss: 'scss/',
  scssLint: 'scss/**/*.scss',
  css: 'static/css'
}

const scssOptions = {
  //outputStyle: 'compressed',
  sourceMap: true,
  sourceComments: false
}

gulp.task('scss', function() {
  const processors = [cssnext()]
  return gulp.src(paths.scss + '*.scss')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(sass(scssOptions))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css))
    .pipe(notify('SCSS task finished.'))
});

gulp.task('scss-lint', function() {
  return gulp.src([paths.scssLint, '!scss/external/*.scss'])
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(cache('scsslint'))
    .pipe(scsslint({
      'reporterOutputFormat': 'Checkstyle',
      'config': '.scss-lint.yml',
      'maxBuffer': 307200,
      'endless': true
    }))
    .pipe(scsslint.failReporter('E'))
});


gulp.task('scss:watch', function() {
  gulp.watch(paths.scssLint, gulp.series('scss'))
});

gulp.task('default', gulp.series('scss:watch'));
