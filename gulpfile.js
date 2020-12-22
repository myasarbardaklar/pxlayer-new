'use strict'

const { task, watch, series, parallel } = require('gulp')

const { taskViews } = require('./gulp/views')
const { taskStyles, taskLintStyles } = require('./gulp/styles')
const { taskScripts, taskLintScripts } = require('./gulp/scripts')
const { taskSvg } = require('./gulp/icons')
const { taskImages } = require('./gulp/images')
const { taskFonts } = require('./gulp/copy')
const {
  taskCleanDist,
  taskCleanSvg,
  taskCleanFonts,
  taskCleanImages,
  taskCleanViews
} = require('./gulp/clean')
const { initServer, reloadServer } = require('./gulp/browserSync')
const paths = require('./gulp/paths')

task('taskSvg', taskSvg)
task('taskFonts', taskFonts)
task('taskImages', taskImages)
task('taskStyles', taskStyles)
task('taskScripts', taskScripts)
task('taskViews', taskViews)
task('taskCleanDist', taskCleanDist)
task('taskCleanSvg', taskCleanSvg)
task('taskCleanFonts', taskCleanFonts)
task('taskCleanImages', taskCleanImages)
task('taskCleanViews', taskCleanViews)

task('initServer', initServer)
task('reloadServer', reloadServer)

task('taskWatch', () => {
  watch(paths.svg.watch, series('taskCleanSvg', 'taskSvg', 'reloadServer'))
  watch(
    paths.fonts.watch,
    series('taskCleanFonts', 'taskFonts', 'reloadServer')
  )
  watch(
    paths.images.watch,
    series('taskCleanImages', 'taskImages', 'reloadServer')
  )
  watch(paths.styles.watch, series('taskStyles', 'reloadServer'))
  watch(paths.scripts.watch, series('taskScripts', 'reloadServer'))
  watch(
    paths.views.watch,
    series('taskCleanViews', 'taskViews', 'reloadServer')
  )
})

exports.default = series(
  'taskCleanDist',
  'taskSvg',
  'taskFonts',
  'taskImages',
  'taskStyles',
  'taskScripts',
  'taskViews',
  parallel('taskWatch', 'initServer')
)
