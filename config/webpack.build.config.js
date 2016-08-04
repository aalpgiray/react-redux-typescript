var webpack = require('webpack')
var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = {
  entry: {app: [
      // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
      'index.tsx'
    ],
    vendor: [
      'react-hot-loader/patch',
      'babel-polyfill', // might be not nessasary !!!
      'immutable',
      'material-ui',
      'redux',
      'react',
      'react-dom',
      'react-router',
      'react-tap-event-plugin',
      'react-redux',
      'react-router-redux',
      'redux-promise-middleware'
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: 'dist/',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.scss'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] }
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.(js|css)$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    // Add the Webpack HMR plugin so it will notify the browser when the app code changes
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CommonsChunkPlugin('commons'),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}
