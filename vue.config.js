module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    proxy: 'http://127.0.0.1:9000'
  }
}