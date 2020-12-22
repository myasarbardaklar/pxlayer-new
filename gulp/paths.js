'use strict'

module.exports = {
  dist: './.dist',
  views: {
    srcFolder: './src/views',
    src: './src/views/*.pug',
    dist: './.dist',
    watch: './src/views/**/*.+(pug|js|json)',
    clean: './.dist/*.html',
    data: './src/views/data'
  },
  styles: {
    srcFolder: './src/styles',
    src: './src/styles/main.+(scss|sass)',
    dist: './.dist/css',
    watch: './src/styles/**/*.+(scss|sass|css)'
  },
  scripts: {
    srcFolder: './src/scripts',
    src: './src/scripts/main.js',
    dist: './.dist/js',
    watch: './src/scripts/**/*.js'
  },
  svg: {
    srcFolder: './src/svg',
    src: './src/svg/**/*.svg',
    dist: './.dist/svg',
    watch: './src/svg/**/*.svg',
    clean: './.dist/svg'
  },
  images: {
    srcFolder: './src/images',
    src: './src/images/**/*',
    dist: './.dist/images',
    watch: './src/images/**/*',
    clean: './.dist/images/**/*'
  },
  fonts: {
    srcFolder: './src/fonts',
    src: './src/fonts/**/*',
    dist: './.dist/fonts',
    watch: './src/fonts/**/*',
    clean: './.dist/fonts/**/*'
  }
}
