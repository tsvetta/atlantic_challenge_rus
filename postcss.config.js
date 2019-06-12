module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')(),
    require('postcss-font-variant')(),
    process.env.NODE_ENV !== 'development' &&
      require('cssnano')(),
  ].filter(Boolean),
}
