'use strict'

const del = require('del')
const paths = require('./paths')

module.exports = {
  cleanDist(done) {
    del([paths.clean.dist])

    done()
  },

  // Clean HTML files
  cleanViews(done) {
    del([paths.clean.views])

    done()
  },

  // Clean svg
  cleanSvg(done) {
    del([paths.clean.svg])

    done()
  },

  // Clean images
  cleanImages(done) {
    del([paths.clean.images])

    done()
  },

  // Clean fonts
  cleanFonts(done) {
    del([paths.clean.fonts])

    done()
  }
}
