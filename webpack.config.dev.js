import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugings: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        loaders: "babel-loader",
        // loader: require.resolve('babel-loader'),
        options: {
          plugins: ['react-hot-loader/babel'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
