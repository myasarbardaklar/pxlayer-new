'use strict'

const browsersync = require('browser-sync').create()
const paths = require('./paths')

module.exports = {
  init(done) {
    browsersync.init({
      server: {
        baseDir: paths.build
      },
      port: 3000,
      open: false
    })

    done()
  },

  reload(done) {
    browsersync.reload()

    done()
  }
}
