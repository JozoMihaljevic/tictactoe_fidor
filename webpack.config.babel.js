import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

// see: https://github.com/webpack/webpack/issues/2537
const isProd = process.env.NODE_ENV === 'production';

export default {
  context: __dirname,
  mode: isProd ? 'production' : 'development',

  bail: isProd,
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules|coverage/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Project is running at http://localhost:8080'],
        notes: ['Run linter with: yarn lint', 'Run tests with: yarn test'],
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: false,
    noInfo: true,
    quiet: true,

    // Shows a full-screen overlay in the browser when there
    // are compiler errors or warnings.
    overlay: {
      errors: true,
    },
  },
};
