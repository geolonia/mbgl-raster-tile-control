const path = require('path')

module.exports = {
  entry: {
    'dist/geolonia-raster-tile-control': './src/index.ts',
    'docs/geolonia-raster-tile-plugin': './src/plugin.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  }
}
