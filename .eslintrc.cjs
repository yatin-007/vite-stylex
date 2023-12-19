module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', '@stylexjs', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    tsconfigRootDir: __dirname,
    project: './tsconfig.json', // Point to your tsconfig.json file
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'max-len': ['error', 110],
    quotes: ['error', 'single'],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-useless-rename': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unused-modules': 'error',
    'require-await': 'error',
    'no-return-await': 'error',
    complexity: ['error', { max: 10 }],
    'max-depth': ['error', 3],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'require-atomic-updates': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-call': 'error', // Disallows calling an any type value
    '@typescript-eslint/no-unsafe-return': 'error', // Disallows returning any from a function
    '@typescript-eslint/no-unsafe-member-access': 'error', // Disallows member access on any typed variables
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@stylexjs/valid-styles': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
