module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': false,
    'commonjs': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'ecmaVersion': 2018
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true
      }
    ],
    'no-console': 'off',
    'no-debugger': 'off'
  },
  'globals': {
    'process': true,
    'mixpanel': true,
    'jQuery': false
  },
  'plugins': [
    'html',
    'vue'
  ]
};
