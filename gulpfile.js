'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');

gulp.task('js', function() {
  gulp.src('assets/js/**/*.js')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('sass', function() {
  gulp.src('assets/scss/**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
})

gulp.task('image', function() {
  gulp.src('assets/img/*')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
})

gulp.task("default", function() {
  gulp.watch(["assets/js/**/*.js", "!assets/js/min/**/*.js"], ["js"])
  gulp.watch("assets/scss/**/*.scss", ["sass"])
  gulp.watch("assets/img/*", ["image"])
})