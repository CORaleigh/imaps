module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'react',
      'react-hooks',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Disable the rule
      // Add other rules or customizations as needed
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  };
  