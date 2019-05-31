/**
 * 错误处理
 */
const errHandler = (app, logger) =>{
    process.on("uncaughtException", (e) => {
        logger.error(e);
    });
    process.on("unhandledRejection", (e) =>{
        logger.error(e);
    });
    app.on("error", (e) =>{
        logger.error(e);
    });

    // 处理500
    app.use(async(ctx, next) =>{
        await next().catch(e =>{
            logger.error(e);
            ctx.status = 200;
            ctx.body ={
                code:500,
                message:e.message
            };
        });
    });
    // 处理404
    app.use(async(ctx, next) =>{
        await next(); 
        if(ctx.status === 404){
            ctx.status = 200;
            ctx.body = {
                code:404,
                message:"当前请求的资源不存在"
            };
        }
    });
}

export default errHandler;