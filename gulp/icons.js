'use strict'

const { src, dest } = require('gulp')
const browserSync = require('browser-sync').create()
const svgsprite = require('gulp-svg-sprite')
const svgmin = require('gulp-svgmin')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const plumber = require('gulp-plumber')
const paths = require('./paths')

exports.taskSvg = async () => {
  await new Promise((resolve, reject) => {
    src(paths.svg.src)
      .pipe(plumber())
      .pipe(
        svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      .pipe(
        cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill')
            $('[style]').removeAttr('style')
          },
          parserOptions: { xmlMode: true }
        })
      )
      .pipe(replace('&gt;', '>'))
      .pipe(
        svgsprite({
          mode: {
            symbol: {
              sprite: '../sprite.svg'
            }
          }
        })
      )
      .pipe(dest(paths.svg.dist))
      .on('end', resolve)
      .pipe(browserSync.reload({ stream: true }))
  })
}
