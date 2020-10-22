module.exports = {
  plugins: {
    'postcss-property-lookup': {},
    'postcss-short': {
      skip: 'null'
    },
    /* 'postcss-font-magician': {}, */
    /* 'postcss-autoreset': {}, */
    'postcss-initial': {},
    'postcss-preset-env': { stage: 0 },
    cssnano: {}
  }
}
