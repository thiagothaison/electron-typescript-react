module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'react/prop-types': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^common/',
          '/^main/',
          '/^renderer/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        paths: [
          {
            rootPathPrefix: 'common',
            rootPathSuffix: 'src/common',
          },
          {
            rootPathPrefix: 'main',
            rootPathSuffix: 'src/main',
          },
          {
            rootPathPrefix: 'renderer',
            rootPathSuffix: 'src/renderer',
          },
        ],
      },
    },
  },
};
