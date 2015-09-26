var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './app/js/app.js']
  },

  output: {
    path: './app/js',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/app/'
  },

  devServer: {
    contentBase: './app',
    publicPath: 'http://localhost:8080/app/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /masonry-layout/, loader: 'imports?define=>false&this=>window' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}