import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnbRules from 'eslint-config-airbnb-base/rules/best-practices';
import airbnbStyle from 'eslint-config-airbnb-base/rules/style';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      ...airbnbRules.rules,
      ...airbnbStyle.rules,
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-underscore-dangle': 'off',
      'no-undef': 'off',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.min.js',
      '**/jest.config.js',
      '**/webpack.common.js',
      '**/webpack.prod.js',
      '**/webpack.dev.js',
    ],
  },
];
