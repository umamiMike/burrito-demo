module.exports = {
  ignorePatterns: ['build/**'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/destructuring-assignment": 'off'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
};
