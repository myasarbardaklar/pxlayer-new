'use strict'

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const paths = require('./paths')

module.exports = {
  buildFonts(done) {
    gulp
      .src(paths.src.fonts)
      .pipe(plumber())
      .pipe(gulp.dest(paths.dest.fonts))

    done()
  }
}
