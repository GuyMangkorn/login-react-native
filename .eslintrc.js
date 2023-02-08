module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'react-native', 'react'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'project': './tsconfig.json'
  },
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'prettier/prettier': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': ['warn', {
      skip: ['CustomText']
    }],
    'react-native/no-single-element-style-arrays': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-array-sort-compare': ['error', {
      ignoreStringArrays: true
    }],
    'react/jsx-curly-spacing': [2,
      {
        "when": "never",
    }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    semi: ['error', 'never'],
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2]
  }
};
