'use strict';

require('dotenv').config({ path: `${__dirname}/.dev.env` });

const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']), 
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new MiniCssExtractPlugin(),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devServer: {
    historyApiFallback: true,
  },
  devtool: production ? undefined : 'cheap-module-source-map',
  output: {
    path: `${__dirname}/build`,
    publicPath: process.env.CDN_URL,
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' },
          },
        ],
      },
    ],
  },
};
