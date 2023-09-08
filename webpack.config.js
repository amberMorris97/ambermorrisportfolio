const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  return {
    entry: './src/index.jsx',
    mode: "development",
    output: {
      filename: 'bundle.js',
      path: path.resolve('./public'),
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", 'css-loader'],
        }
      ]
    },
    devServer: { historyApiFallback: true }
  }
}