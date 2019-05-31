
import bodyParser from "koa-bodyparser";
import { route, GET, POST, before } from "awilix-koa";

@route("/users")
export default class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    @route("/getUserList")
    @GET()
    async getUserList(ctx, next) {
        ctx.body = await this.userService.getUserList();
    };

    @route("/addUser")
    @POST()
    @before([bodyParser()])
    async addUser(ctx, next) {
        ctx.body = await this.userService.addUser(ctx.request.body);
    };
}