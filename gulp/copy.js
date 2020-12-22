'use strict'

const { src, dest } = require('gulp')
const browserSync = require('browser-sync').create()
const plumber = require('gulp-plumber')
const paths = require('./paths')

exports.taskFonts = async () => {
  await new Promise((resolve, reject) => {
    src(paths.fonts.src)
      .pipe(plumber())
      .pipe(dest(paths.fonts.dist))
      .on('end', resolve)
      .pipe(browserSync.reload({ stream: true }))
  })
}
