/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  coverageThreshold: {
    global: {
      statements: 100,
    },
  },
  roots: ['<rootDir>/test'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  globals: { 'ts-jest': { diagnostics: false } },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
