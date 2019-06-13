const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require("path");

module.exports = {
    mode:"development",
    output:{
        filename: "scripts/[name]-[hash].js",
        publicPath:"/"
    },
    stats: 'minimal',
    watch: true,
    //devtool: '#cheap-module-eval-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: resolve("./src/web/index.dev.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            inject: true,
            favicon: resolve('./src/web/favicon.ico')
        })
    ]
}