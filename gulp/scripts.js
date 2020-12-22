'use strict'

const { src, dest } = require('gulp')
const browserSync = require('browser-sync').create()
const eslint = require('gulp-eslint')
const rollup = require('gulp-better-rollup')
const babel = require('rollup-plugin-babel')
const rename = require('gulp-rename')
const paths = require('./paths')

exports.taskLintScripts = (cb) => {
  src(`${paths.scripts.srcFolder}/**/*`, {
    allowEmpty: true
  })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())

  cb()
}

exports.taskScripts = async () => {
  await new Promise((resolve, reject) => {
    src(paths.scripts.src)
      .pipe(rollup({ plugins: [babel()] }, 'umd'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(paths.scripts.dist))
      .on('end', resolve)
      .pipe(browserSync.reload({ stream: true }))
  })
}
