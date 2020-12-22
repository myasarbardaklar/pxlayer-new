'use strict'

const browsersync = require('browser-sync').create()
const paths = require('./paths')

exports.initServer = (cb) => {
  browsersync.init({
    server: {
      baseDir: paths.dist
    },
    port: 4747
  })

  cb()
}

exports.reloadServer = (cb) => {
  browsersync.reload()

  cb()
}
