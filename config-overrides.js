const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {
  console.log(config);
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  return config;
};