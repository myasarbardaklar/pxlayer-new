'use strict'

const gulp = require('gulp')
const svgsprite = require('gulp-svg-sprite')
const svgmin = require('gulp-svgmin')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const plumber = require('gulp-plumber')
const paths = require('./paths')

module.exports = {
  buildSvgSprite(done) {
    gulp
      .src(paths.src.svg)
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
          run: function($) {
            $('[fill]').removeAttr('fill')
            $('[stroke]').removeAttr('stroke')
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
      .pipe(gulp.dest(paths.dest.svg))

    done()
  }
}
