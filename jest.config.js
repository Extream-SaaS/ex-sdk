module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts}'
  ],
  coveragePathIgnorePatterns: [
    '/.*\\.spec\\.(js|ts)$/',
    '/node_modules/'
  ],
  /**
   * JSON for post processing scripts
   * HTML for readability
   * LCOV incase sonar is ever introduced, and for VScode coverage highlighting plugins
   */
  coverageReporters: ['json', 'html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 46,
      functions: 49,
      lines: 48,
      statements: 48
    }
  },
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '**/__tests__/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
