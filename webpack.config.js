const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 const path = require("path");

module.exports = {
    entry: "./src/main.ts",

    output: {
        path: path.join(__dirname, "dist3"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
    },

    resolve: {
        extensions: [".js", ".ts"],
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: path.join(__dirname, "src"),
                loader: "ts-loader",
            },
        ],
    },

    plugins: [new BundleAnalyzerPlugin()],

    devServer: {
        contentBase: "./dist",
    },
};
