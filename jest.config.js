module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
   transformIgnorePatterns: ['/node_modules/(?!vue-template-compiler)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
  testPathIgnorePatterns: ['/node_modules/', '/.nuxt/'],
};
