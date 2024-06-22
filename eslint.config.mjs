// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import jsLint from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import tsLint, { config } from 'typescript-eslint';

const compat = new FlatCompat();

export default config(
  // Javascript
  jsLint.configs.recommended,

  // Typescript
  ...tsLint.configs.recommended,
  {
    name: 'typescript',
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // Import
  ...compat.config({
    plugins: ['import'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*', '!./*.module.css'],
              message: 'No relative imports',
            },
          ],
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': ['error', { considerComments: true }],
      'import/no-unresolved': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['index', 'parent', 'sibling'],
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],
    },
  }),

  // React & Next.js
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),

  // Prettier
  prettier,
);
