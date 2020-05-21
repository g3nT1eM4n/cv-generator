const { resolve } = require('path');

const source = {
  resolve: (...pathSegments) => resolve('source', ...pathSegments)
}

module.exports = {
  'API': source.resolve('API'),
  'Action': source.resolve('Store', 'Action'),
  'Component': source.resolve('Component'),
  'Constant': source.resolve('Constant'),
  'Mock': source.resolve('Mock'),
  'Reducer': source.resolve('Store', 'Reducer'),
  'Store': source.resolve('Store'),
  'Style': source.resolve('Style', 'Style.less'),
  'Types': source.resolve('Types'),
  'Utilities': source.resolve('Utilities')
};
