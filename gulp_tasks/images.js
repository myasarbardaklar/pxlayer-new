'use strict'

const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')
const paths = require('./paths')

module.exports = {
  buildImages(done) {
    gulp
      .src(paths.src.images, { base: paths.src_folders.images })
      .pipe(plumber())
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: false }, { collapseGroups: true }]
          })
        ])
      )
      .pipe(gulp.dest(paths.dest.images))

    done()
  }
}
