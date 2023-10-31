module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'max-len': 0,
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,
  },
};
