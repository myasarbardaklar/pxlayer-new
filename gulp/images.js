'use strict'

const { src, dest } = require('gulp')
const browserSync = require('browser-sync').create()
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')
const paths = require('./paths')

exports.taskImages = async () => {
  await new Promise((resolve, reject) => {
    src(paths.images.src)
      .pipe(plumber())
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
          })
        ])
      )
      .pipe(dest(paths.images.dist))
      .on('end', resolve)
      .pipe(browserSync.reload({ stream: true }))
  })
}
