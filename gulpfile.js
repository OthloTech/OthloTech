'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const notify = require('gulp-notify');

const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');


gulp.task('js', function() {
  gulp.src('assets/js/**/*.js')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify({ preserveComments: 'some' }))
    //.pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('sass', function() {
  gulp.src('assets/scss/**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("dist/css"))
})

gulp.task('image', function() {
  gulp.src('assets/images/**/*')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>' )}))
    .pipe(imagemin({
      progressive: true,
      use: [pngquant({quality: '65-80', speed: 1})]
    }))
    .pipe(gulp.dest("dist/images"))
})

gulp.task('minjs', function() {
  gulp.src('assets/js/**/*.min.js')
    .pipe(gulp.dest("dist/js"))
})

gulp.task('fonts', function() {
  gulp.src('assets/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task("default", function() {
  gulp.watch(["assets/js/**/*.js", "!assets/js/**/*.min.js"], ["js"])
  gulp.watch("assets/js/**/*.min.js", ["minjs"])
  gulp.watch("assets/scss/**/*.scss", ["sass"])
  gulp.watch("assets/images/**/*", ["image"])
  gulp.watch("assets/fonts/*", ["fonts"])
})
