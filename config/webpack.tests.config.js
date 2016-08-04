var webpack = require('webpack')
var path = require('path')

module.exports = {
  target: 'node',
  entry: [
    'index.tsx'
  ],
  output: {
    filename: 'index.js',
    publicPath: '/test',
    path: path.resolve('test')
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve('./test'), 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
      { test: /\.json$/,loaders: ['json-loader']}
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^fs$/)
  ]
}
