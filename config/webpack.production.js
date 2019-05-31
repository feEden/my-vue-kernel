var CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    output:{
        publicPath:"/"
    },
    watch: false,
    devtool: false,
    // 优化
    optimization: {
        //将webpack打包资源的公用部分提取到单独的文件夹
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            // 分包
            chunks: 'all'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 入口文件引入的css
            filename: "stylesheets/[name]-[hash].css",
            // 按需引入的文件
            chunkFilename: "stylesheets/[id]-[hash].css",
        }),
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                ['js', 'css'].join('|') +
                ')$'
            ),
            threshold: 1024,
            minRatio: 0.8
        })
    ]
}