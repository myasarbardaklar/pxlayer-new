'use strict'

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const beautify = require('gulp-jsbeautifier')
const removeEmptyLines = require('gulp-remove-empty-lines')
const pug = require('gulp-pug')
const edge = require('gulp-edgejs')
const path = require('path')
const data = require('gulp-data')
const fs = require('fs')
const paths = require('./paths')

module.exports = {
  buildViews(done) {
    gulp
      .src(paths.src.views)
      .pipe(plumber())
      .pipe(
        data((file) => {
          let pageData = JSON.parse(
            fs.readFileSync(
              `./views/data/${path.basename(file.path, '.pug')}.json`
            )
          )
          return pageData
        })
      )
      .pipe(pug({ doctype: 'html', pretty: true, self: true }))
      .pipe(
        beautify({
          indent_char: ' ',
          indent_size: 2
        })
      )
      .pipe(removeEmptyLines())
      .pipe(gulp.dest(paths.dest.views))

    done()
  }
}
