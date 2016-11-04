'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const cssmin = require('gulp-cssmin')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const rename = require('gulp-rename')

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
    //.pipe(cssmin())
    //.pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.css))
})

gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', ['scss'])
})
