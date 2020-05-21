const { resolve } = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    ...common.plugins,
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(__dirname, '..', 'tsconfig.json')
    }),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: resolve(__dirname, '..', 'public'),
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: '/',
    host: '0.0.0.0',
    proxy: {
      '/api/**': {
        target: 'http://localhost',
        secure: false,
        changeOrigin: true
      }
    }
  }
};
