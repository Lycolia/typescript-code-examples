module.exports = {
  resetMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|dist)[/\\\\]'],
  transform: {
    '^.+\\.ts$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          target: 'es2020',
          parser: {
            syntax: 'typescript',
            tsx: false,
            decorators: false,
            dynamicImport: false,
          },
          baseUrl: '.',
          paths: {
            'src/*': ['src/*'],
            'package.json': ['package.json'],
          },
        },
      },
    ],
  },
  runtime: '@side/jest-runtime',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};