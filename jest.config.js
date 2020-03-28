module.exports = {
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
  },
  testEnvironment: 'node',
  preset: 'ts-jest',
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'problems/**/*.ts',
  ],
  coverageDirectory: './coverage',
  coverageReporters: [
    'text',
    'lcov'
  ],
  testMatch: [
    '**/problems/**/*.test.ts'
  ]
}
