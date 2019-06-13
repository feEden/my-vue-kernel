const merge = require("webpack-merge");
// zip压缩打包文件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 拷贝静态资源
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 显示打包进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// 显示打包过程的耗时 与htmlwebpackplugin的自定义插件不兼容
/* const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();*/

// 生成原文件和打包文件的对照
const ManifestPlugin = require('webpack-manifest-plugin');

// 自定义的插件 实现离线缓存
const HtmlAfterWebpackPlugin = require("./HtmlAfterWebpackPlugin");

const { resolve } = require("path");

/* const pluginConfig = smp.wrap({
    
}); */

module.exports = merge({
    mode: "production",
    output: {
        filename: "scripts/[name]-[chunkhash].js",
        publicPath: "/"
    },
    watch: false,
    devtool: false,
    // 优化
    optimization: {
        chunkIds: "natural",
        moduleIds: "natural",
        //将webpack打包资源的公用部分提取到单独的文件夹
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            // 分包
            chunks: 'all'
        }
    }
}, {
        plugins: [
            new ProgressBarPlugin(),
            new HtmlWebpackPlugin({
                filename: "./index.html",
                template: resolve("./src/web/index.html"),
                minify: {
                    removeComments: false,
                    collapseWhitespace: true,
                    removeAttributeQuotes: false
                },
                inject: false,
                favicon: resolve('./src/web/favicon.ico')
            }),
            new HtmlAfterWebpackPlugin(),
            new MiniCssExtractPlugin({
                // 入口文件引入的css
                filename: "stylesheets/[name]-[chunkhash].css",
                // 按需引入的文件
                chunkFilename: "stylesheets/[id]-[chunkhash].css",
            }),
            new OptimizeCssAssetsPlugin({
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
            }),
            new ManifestPlugin()
        ]
    });