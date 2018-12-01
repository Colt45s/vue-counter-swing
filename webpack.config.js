const webpack = require('webpack');
const path = require('path');
const Copy = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const merge = require("webpack-merge");

const MODE = process.env.NODE_ENV || 'development';
const IS_DEV_MODE = MODE === "development";

const config = {
  mode: MODE,
  entry: {
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Copy([
      {
        from: './index.html'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(MODE)
      }
    })
  ]
};

const devConfig = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true
  }
};

const prdConfig = {
  devtool: 'source-map'
};

module.exports = merge(config, IS_DEV_MODE ? devConfig : prdConfig);