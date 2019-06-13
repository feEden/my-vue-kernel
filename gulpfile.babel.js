import gulp from 'gulp';
import watch from 'gulp-watch';
import babel from 'gulp-babel';
import rollup from 'gulp-rollup';
import replace from 'rollup-plugin-replace';

// 需要编译的路径
const entry = './src/server/**/*.js';
// 要进行清洗的文件 清理冗余代码
const clearEntry = './src/server/config/base.config.js';

//脚本编译 开发环境
function buildDev() {
    // 开启的watch,编译一直监听着
    return watch(entry, { ignoreInitial: false }, () => {
        gulp.src(entry)
            .pipe(babel({
                // 不使用外部的.babelrc 配置
                babelrc: false,
                // 将es6 module 编译成require
                //@babel/plugin-proposal-decorators 编译装饰器
                plugins: [
                    ["@babel/plugin-proposal-decorators", { "legacy": true }],
                    "@babel/plugin-transform-modules-commonjs"
                ]
            }))
            .pipe(gulp.dest('dist'))
    });
}

//编译脚本 上线
function buildProd() {
    return gulp.src(entry)
        .pipe(babel({
            // 不使用外部的.babelrc 配置
            babelrc: false,
            // 指定不编译的文件
            ignore: [clearEntry],
            plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                "@babel/plugin-transform-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('dist'))
}

//清洗冗余配置
function buildConfig() {
    return gulp.src(entry)
        .pipe(rollup({
            plugins: [
                replace({
                    // 清除当前环境下不使用的变量 
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ],
            output: {
                // 输出commonJS格式
                format: 'cjs'
            },
            input: clearEntry
        }))
        .pipe(gulp.dest('dist'))
}

//代码规则校验
/* function buildHint() {
    return gulp.src([entry])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
} */

// 设置不同环境下的执行任务
let build = gulp.series(buildDev);
if (process.env.NODE_ENV === 'production') {
    build = gulp.series(buildProd, buildConfig);
}
/* if (process.env.NODE_ENV === 'hint') {
    build = gulp.series(buildHint);
} */

// 导出任务
gulp.task("default", build);