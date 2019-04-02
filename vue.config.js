module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/auth': {
        target: 'http://SAG-B83RXF2.eur.ad.sag:8081',
        ws: true,
        changeOrigin: true
      },
      '/api': {
        target: 'http://SAG-B83RXF2.eur.ad.sag:8081',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
