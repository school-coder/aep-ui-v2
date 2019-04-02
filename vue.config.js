module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/auth': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
