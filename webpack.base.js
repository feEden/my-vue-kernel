const merge = require("webpack-merge");
const argv = require("yargs-parser");
//获取当前的模式
const mode = argv(process.argv.slice(2)).mode || 'development';

//加载不同模式下的配置文件
const config = require(`./config/webpack.${mode}.js`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 将定义的其它
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { join, resolve } = require("path");

const baseConfig = {
    entry: {
        main: [resolve("./src/web/main.js")]
    },
    output: {
        filename: "scripts/[name]-[hash].js",
        path: join(__dirname, "./dist/webapp")
    },
    resolve: {
        // import 文字自动添加呃后缀
        extensions: ['.js', '.vue', '.css'],
        // 添加别名
        alias: {
            '@': resolve('./src/web/')
        }
    },
    /* 下面的所有库都通过cdn引入，不进行打包 */
    externals: {
        "vue": "Vue",
        "vuex": "Vuex",
        "vue-router": 'VueRouter',
        "axios": 'axios',
        "element-ui": 'ELEMENT'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hot: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.css$/,
                use: [
                    //在生产环境下使用 CSS 提取，这将便于你在开发环境下进行热重载。
                    mode === "production" ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                    'css-loader',
                    "postcss-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // 小于8k的图片自动转成base64格式
                            limit: 8192,
                            //图片打包后的文件夹
                            outputPath: "./images/",
                            publicPath: "/images/"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        //定义过的其它规则复制并应用到 .vue 文件里相应语言的块
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: resolve("./src/web/index.html"),
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

module.exports = merge(baseConfig, config);