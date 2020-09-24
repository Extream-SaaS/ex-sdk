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
   * LCOV incase sonar is ever introduced
   */
  coverageReporters: ['json', 'html', 'lcov'],
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
