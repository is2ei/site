const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Issei Horie's homepage",
      template: 'src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/favicon.ico", to: "assets" },
        { from: "src/assets/resume.pdf", to: "assets" },
        { from: "src/assets/portrait.png", to: "assets" }
      ]
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
