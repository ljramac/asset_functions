export default {
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.js']
}
