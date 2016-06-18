var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3001",
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  resolve: {
   extensions: ['', '.js', '.jsx']
 },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    template: "src/index.ejs",
    inject: "body"
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
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      include: path.join(__dirname, 'src')
    }

    ]
  }
};
