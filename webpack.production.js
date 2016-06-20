var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  resolve: {
   extensions: ["", ".js", ".jsx"]
 },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "src/index.ejs",
    inject: "body"
  }),
  new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  module: {
    loaders: [
      {
           test: /\.scss$/,
           loaders: ["style", "css", "sass"]
      },
      {
      test: /\.jsx?$/,
      loaders: ["babel?presets[]=react,presets[]=es2015"],
      include: path.join(__dirname, "src")
    }

    ]
  }
};
