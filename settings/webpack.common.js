const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const alias = require('./alias');
const rules = require('./rules');

const source = resolve(__dirname, '..', 'source');
const indexTsx = resolve(source, 'index.tsx');

const outputFilename = 'bundle.js';
const outputPath = resolve(__dirname, '..', 'public');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [source, 'node_modules'],
    alias
  },

  context: source,
  entry: [indexTsx],
  output: {
    filename: outputFilename,
    path: outputPath,
    publicPath: outputPath
  },

  module: {
    rules
  },
  performance: { hints: false },

  plugins: [
    new CopyPlugin([
      { from: '../static/index.html', to: '../public/index.html' }
    ])
  ]
};
