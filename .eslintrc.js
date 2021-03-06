module.exports = {
  root: true,

  env: {
    node: true,
    jest: true
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true
      }
    ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};
