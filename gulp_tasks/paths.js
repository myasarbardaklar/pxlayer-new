'use strict'

const DEST_FOLDER = './.dist'

const SRC_FOLDERS = {
  views: './views',
  css: './assets/css',
  sass: './assets/sass',
  js: './assets/js',
  svg: './assets/svg',
  images: './assets/images',
  fonts: './assets/fonts'
}

const DEST_FOLDERS = {
  views: DEST_FOLDER,
  css: `${DEST_FOLDER}/css`,
  sass: `${DEST_FOLDER}/css`,
  js: `${DEST_FOLDER}/js`,
  svg: `${DEST_FOLDER}/svg`,
  images: `${DEST_FOLDER}/images`,
  fonts: `${DEST_FOLDER}/fonts`
}

module.exports = {
  build: DEST_FOLDER,
  src_folders: SRC_FOLDERS,
  dest_folders: DEST_FOLDERS,
  src: {
    views: `${SRC_FOLDERS.views}/*.pug`,
    css: `${SRC_FOLDERS.css}/*.css`,
    sass: `${SRC_FOLDERS.sass}/*.+(scss|sass)`,
    js: `${SRC_FOLDERS.js}/main.js`,
    svg: `${SRC_FOLDERS.svg}/**/*.+(svg)`,
    images: `${SRC_FOLDERS.images}/**/*`,
    fonts: `${SRC_FOLDERS.fonts}/**/*`
  },
  dest: {
    views: DEST_FOLDERS.views,
    css: DEST_FOLDERS.css,
    sass: DEST_FOLDERS.sass,
    js: DEST_FOLDERS.js,
    svg: DEST_FOLDERS.svg,
    images: DEST_FOLDERS.images,
    fonts: DEST_FOLDERS.fonts
  },
  watch: {
    views: `${SRC_FOLDERS.views}/**/*.+(pug|js|json)`,
    css: `${SRC_FOLDERS.css}/**/*.css`,
    sass: `${SRC_FOLDERS.sass}/**/*.+(scss|sass|css)`,
    js: `${SRC_FOLDERS.js}/**/*.js`,
    svg: `${SRC_FOLDERS.svg}/**/*.+(svg)`,
    images: `${SRC_FOLDERS.images}/**/*`,
    fonts: `${SRC_FOLDERS.fonts}/**/*`
  },
  clean: {
    dist: `${DEST_FOLDER}/**/*`,
    views: `${DEST_FOLDERS.views}/*.html`,
    svg: `${DEST_FOLDERS.views}/svg`,
    images: `${DEST_FOLDERS.images}/**/*`,
    fonts: `${DEST_FOLDERS.images}/**/*`
  },
  data: {
    views: `${SRC_FOLDERS.views}/data`
  }
}
