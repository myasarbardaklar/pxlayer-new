'use strict'

const { src, dest } = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const sassLint = require('gulp-sass-lint')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const gcmq = require('gulp-group-css-media-queries')
const paths = require('./paths')

exports.taskLintStyles = (cb) => {
  src(`${paths.styles.srcFolder}/**/*.s+(a|c)ss`, {
    allowEmpty: true
  })
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())

  cb()
}

exports.taskStyles = async () => {
  await new Promise((resolve, reject) => {
    src(paths.styles.src)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(gcmq())
      .pipe(postcss())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(paths.styles.dist))
      .on('end', resolve)
      .pipe(browserSync.reload({ stream: true }))
  })
}
