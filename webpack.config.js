const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "./lib"),
        filename: "index.js",
        library: "",
        libraryTarget: "commonjs",
    },
    externals: [nodeExternals(), "styled-components"],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"],
                },
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ],
    },
};
