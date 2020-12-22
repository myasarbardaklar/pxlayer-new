'use strict'

const { src, dest } = require('gulp')
const browserSync = require('browser-sync').create()
const plumber = require('gulp-plumber')
const beautify = require('gulp-jsbeautifier')
const removeEmptyLines = require('gulp-remove-empty-lines')
const pug = require('gulp-pug')
const path = require('path')
const data = require('gulp-data')
const fs = require('fs')
const paths = require('./paths')

exports.taskViews = async (cb) => {
  await new Promise((resolve, reject) => {
    src(paths.views.src)
      .pipe(plumber())
      .pipe(
        data((file) => {
          let initialData = JSON.parse(
            fs.readFileSync(`${paths.views.data}/_init.json`)
          )

          let pageData = JSON.parse(
            fs.readFileSync(
              `${paths.views.data}/${path.basename(file.path, '.pug')}.json`
            )
          )

          return Object.assign(initialData, pageData)
        })
      )
      .pipe(pug({ doctype: 'html', pretty: true }))
      .pipe(
        beautify({
          indent_char: ' ',
          indent_size: 2
        })
      )
      .pipe(removeEmptyLines())
      .pipe(dest(paths.views.dist))
      .on('end', resolve)
      .pipe(browserSync.reload({ stream: true }))
  })

  cb()
}
