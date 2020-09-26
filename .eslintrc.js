module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    camelcase: 'off',
    'prefer-promise-reject-errors': 'error'
  },
  overrides: [{
    files: ['*.spec.ts'],
    env: {
      jest: true
    }
  }]
}
