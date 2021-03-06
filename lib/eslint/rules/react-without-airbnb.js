module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: './config/webpack.config.dev.js',
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
  },
};
