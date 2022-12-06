const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': './src',
    '@components': './src/components',
    '@pages': './src/pages',
    '@constants': './src/constants',
    '@store': './src/store',
    '@utils': './src/utils',
    '@hooks': './src/hooks',
  })(config);

  return config;
};
