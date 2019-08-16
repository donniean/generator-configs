module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-named': [
      'never',
      {
        ignore: ['inside-function']
      }
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx']
      }
    ],
    // wechat miniprogram
    'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],
    'value-keyword-case': 'lower',
    'shorthand-property-no-redundant-values': [
      true,
      {
        severity: 'warning'
      }
    ],
    'property-no-vendor-prefix': [
      true,
      {
        severity: 'warning'
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        severity: 'warning'
      }
    ],
    'selector-attribute-quotes': [
      'always',
      {
        severity: 'warning'
      }
    ],
    'selector-list-comma-space-after': ['always-single-line'],
    'no-unknown-animations': true
  },
  ignoreFiles: [
    '**/.git/',
    '**/.svn/',
    '**/.hg/',
    '**/CVS/',
    '**/.DS_Store/',
    '**/node_modules/',
    '**/lib/',
    '**/libs/',
    '**/typings/',
    '**/jsconfig.json',
    '**/build/',
    '**/dist/',
    '**/*.min.*'
  ]
};