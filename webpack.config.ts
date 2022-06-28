import path from 'path';
import { DefinePlugin } from 'webpack';

/* -----------------------------------
 *
 * Plugins
 *
 * -------------------------------- */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssPlugin = require('mini-css-extract-plugin');

/* -----------------------------------
 *
 * SASS
 *
 * -------------------------------- */

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      fiber: false,
      data: '@import "template";',
      outputStyle: 'compressed',
      sourceMap: false,
      includePaths: ['./src/styles'],
    },
  },
};

/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, `./src/`),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          ExtractCssPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              importLoaders: 2,
              sourceMap: false,
            },
          },
          sassLoader,
        ],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          ExtractCssPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:6]',
              },
              importLoaders: 2,
              sourceMap: false,
            },
          },
          sassLoader,
        ],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      __CANVAS__: '"#canvas"',
      __OVERLAY__: '"#overlay"',
    }),
    new ExtractCssPlugin({
      filename: 'assets/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
