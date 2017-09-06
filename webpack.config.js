const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const isProd = (process.env.NODE_ENV === 'prod') ? true : false;

module.exports = {
  devServer: {
    compress: true,
    port: process.env.WPORT || 8000
  },
  entry: {
    app: [
      './resources/assets/js/main.js',
      './resources/assets/scss/app.scss'
    ]
  },
  output: {
    path: process.cwd() + '/public/assets',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[hash].[ext]',
              context: './resources/assets/images/',
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new ExtractTextPlugin('css/main.css')
  ]
}

if (isProd) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}