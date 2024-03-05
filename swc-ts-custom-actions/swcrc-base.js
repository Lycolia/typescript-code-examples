module.exports = {
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
    },
  },
};
