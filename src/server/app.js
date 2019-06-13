import Koa from "koa";
import serve from "koa-static";
import log4js from "log4js";
//集成vue配置的路由
import history from "koa2-history-api-fallback";
import { scopePerRequest, loadControllers } from "awilix-koa";
import { asClass, createContainer, Lifetime } from "awilix";

import { join } from "path";
import * as errHandler from "./middleware/errHandler";
import * as config from "./config/base.config";
const { port, buildDir } = config.default;

const app = new Koa();
const isProd = process.env.NODE_ENV === "production";

log4js.configure({
    appenders: { cheese: { type: 'file', filename: join(__dirname, "./logs/cheese.log") } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger();
// 集中处理错误
errHandler.default(app, logger);

// 创建IOC容器
const container = createContainer();

// 将service交给容器管理
container.loadModules([
    join(__dirname, "./service/**/*.js")
], {
        formatName: "camelCase",
        register: asClass,
        lifetime: Lifetime.SCOPED
    }
);
// 将容器注入app
app.use(scopePerRequest(container));
// 注册路由
app.use(loadControllers(join(__dirname, "./controller/**/*.js")));

// 前端路由找不到全部重定向到根路径中查找
app.use(
    history({
        htmlAcceptHeaders: ["text/html"],
        index: isProd ? "/index.html" : "/",
        // 提示路由是否重写成功
        verbose: false
    })
);

// 注入静态文件服务器
app.use(serve(buildDir));

// 开发环境下，node帮忙执行webpack
if (!isProd) {
    const koaWebpack = require("koa-webpack");
    const webpackConfig = require("../webpack.config.js");
    // 将vue打包到内存中，保证了热更新功能
    koaWebpack({
        config: webpackConfig,
        devMiddleware: {
            stats: "minimal"
        }
    }).then(middleware => {
        app.use(middleware);
    });
}

let tips = `server is running at ${port} port`;
if (!isProd) {
    tips += ", 正在等在webpack编译，请稍后......";
}
app.listen(port, () => {
    console.log(tips);
});