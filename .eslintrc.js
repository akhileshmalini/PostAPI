module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import/no-cycle': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@data', './src/data'],
          ['@api', './src/api'],
          ['@utils', './src/utils'],
          ['@passport', './src/passport'],
        ],
      },
    },
  },
};
