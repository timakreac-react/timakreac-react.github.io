const path = require("path");

const conf = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  }
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //         name: `chunk-vendors`,
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         chunks: "initial"
  //       },
  //       common: {
  //         name: `chunk-common`,
  //         minChunks: 2,
  //         priority: -20,
  //         chunks: "initial",
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // }
};

module.exports = conf;
