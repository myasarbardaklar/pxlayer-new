'use strict'

const del = require('del')
const paths = require('./paths')

// Clean .dist folder
exports.taskCleanDist = async () => {
  await del([paths.dist])
}

// Clean SVG
exports.taskCleanSvg = async () => {
  await del([paths.svg.clean])
}

// Clean fonts
exports.taskCleanFonts = async () => {
  await del([paths.fonts.clean])
}

// Clean images
exports.taskCleanImages = async () => {
  await del([paths.images.clean])
}

// Clean HTML files
exports.taskCleanViews = async () => {
  await del([paths.views.clean])
}
