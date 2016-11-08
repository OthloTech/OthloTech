'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const paths = {
  scss: 'scss/',
  css: 'static/css'
}

gulp.task('scss', function() {
  const processors = [cssnext()]
  return gulp.src(paths.scss + '*.scss')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css))
})

gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', ['scss'])
})
