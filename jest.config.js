module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '/test/.*.test.ts$',
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/mocks/',
    'index.js',
    'packages/jbr/lib/cli',
  ],
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
