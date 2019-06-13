const merge = require("webpack-merge");
const argv = require("yargs-parser");
//获取当前的模式
const mode = argv(process.argv.slice(2)).mode || 'development';

//加载不同模式下的配置文件
const config = require(`./config/webpack.${mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 将定义的其它
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 开启多核编译
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const { join, resolve } = require("path");

const baseConfig = {
    entry: {
        main: [resolve("./src/web/main.js")]
    },
    output: {
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
                use: ["cache-loader",
                    {
                        loader: "vue-loader",
                        options: {
                            hot: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: "happypack/loader?id=js",
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.(css|postcss)$/,
                use: [
                    //在生产环境下使用 CSS 提取，这将便于你在开发环境下进行热重载。
                    (mode === "production" ? MiniCssExtractPlugin.loader : 'vue-style-loader'),
                    "happypack/loader?id=css"
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
        // 开启多线程编译
        new HappyPack({
            id: "js",
            threadPool: happyThreadPool,
            loaders: ["babel-loader"]
        }),
        new HappyPack({
            id: "css",
            threadPool: happyThreadPool,
            loaders: [
                "css-loader",
                "postcss-loader"
            ]
        }),
        //定义过的其它规则复制并应用到 .vue文件里相应语言的块
        new VueLoaderPlugin(),
    ]
}

module.exports = merge(baseConfig, config);