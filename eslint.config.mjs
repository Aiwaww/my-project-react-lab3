import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...require('eslint/conf/eslint-recommended').rules,
      ...require('eslint-plugin-react').configs.recommended.rules,
      ...require('eslint-plugin-react-hooks').configs.recommended.rules,
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginReact.configs.flat.recommended,
];
