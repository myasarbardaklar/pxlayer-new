'use strict'

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const rollup = require('gulp-better-rollup')
const babel = require('rollup-plugin-babel')
const rename = require('gulp-rename')
const paths = require('./paths')

module.exports = {
  lintJs(done) {
    gulp
      .src(`${paths.src_folders.js}/**/*`, {
        allowEmpty: true
      })
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())

    done()
  },

  buildJs(done) {
    gulp
      .src(paths.src.js)
      .pipe(rollup({ plugins: [babel()] }, 'umd'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.dest.js))

    done()
  }
}
