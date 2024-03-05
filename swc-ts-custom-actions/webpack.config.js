const path = require('path');
const swcrcBase = require(path.resolve(__dirname, 'swcrc-base'));

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    clean: true,
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  target: ['node'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
          options: {
            ...swcrcBase,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
  },
};
