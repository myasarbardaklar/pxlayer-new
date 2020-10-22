'use strict'

const gulp = require('gulp')

const task_views = require('./gulp_tasks/views')
const task_sass = require('./gulp_tasks/sass')
const task_js = require('./gulp_tasks/js')
const task_icons = require('./gulp_tasks/icons')
const task_images = require('./gulp_tasks/images')
const task_copy = require('./gulp_tasks/copy')
const task_clean = require('./gulp_tasks/clean')
const browserSync = require('./gulp_tasks/browserSync')
const paths = require('./gulp_tasks/paths')

gulp.task('clean', task_clean.cleanDist)
gulp.task('svgSprite', task_icons.buildSvgSprite)
gulp.task('fonts', task_copy.buildFonts)
gulp.task('images', task_images.buildImages)
gulp.task('sass', task_sass.buildSass)
gulp.task('js', gulp.series(/* task_js.lintJs,  */ task_js.buildJs))
gulp.task('views', task_views.buildViews)
gulp.task('browserSync', browserSync.init)

// Watch files
gulp.task('watch', (done) => {
  // watch svg files
  gulp.watch(
    paths.watch.svg,
    gulp.series(task_clean.cleanSvg, 'svgSprite', browserSync.reload)
  )

  // watch font files
  gulp.watch(
    paths.watch.fonts,
    gulp.series(task_clean.cleanFonts, 'fonts', browserSync.reload)
  )

  // watch image files
  gulp.watch(
    paths.watch.images,
    gulp.series(task_clean.cleanImages, 'images', browserSync.reload)
  )

  // watch sass files
  gulp.watch(paths.watch.sass, gulp.series('sass', browserSync.reload))

  // watch js files
  gulp.watch(paths.watch.js, gulp.series('js', browserSync.reload))

  // watch view files
  gulp.watch(
    paths.watch.views,
    gulp.series(task_clean.cleanViews, 'views', browserSync.reload)
  )

  done()
})

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel('svgSprite', 'fonts', 'images', 'sass', 'js', 'views'),
    gulp.parallel('watch', 'browserSync')
  )
)
