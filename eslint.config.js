const config = require('@rubensworks/eslint-config');

module.exports = config([
  {
    files: [ 'packages/**/*.ts' ],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [ './tsconfig.eslint.json' ],
      },
    },
  },
  {
    rules: {
      'import/no-nodejs-modules': 'off',
    },
  },
]);
