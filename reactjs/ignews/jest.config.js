module.exports = {
  // testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.vscode/'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.tsx',
    '!**/_app.tsx',
    '!**/_document.tsx',
    '!**/*.spec.tsx',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageReporters: ["lcov", "json"]
};
