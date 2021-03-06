var path = require("path");

module.exports = {
  entry: {
    index: "./js/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["react-hot-loader", "babel-loader"],
        include: [path.join(__dirname, "js")]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: false
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    inline: true
  }
};
