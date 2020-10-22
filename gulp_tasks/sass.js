'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sassLint = require('gulp-sass-lint')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const gcmq = require('gulp-group-css-media-queries')
const paths = require('./paths')

module.exports = {
  lintSass(done) {
    gulp
      .src(`${paths.src_folders.sass}/**/*.s+(a|c)ss`, {
        allowEmpty: true
      })
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())

    done()
  },

  buildSass(done) {
    gulp
      .src(paths.src.sass)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(gcmq())
      .pipe(postcss())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.dest.sass))

    done()
  }
}
