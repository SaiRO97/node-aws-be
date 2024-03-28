const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.json5$/,
        loader: "json5-loader",
        type: "javascript/auto",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new NodemonPlugin()],
  // Additional configuration goes here
};
