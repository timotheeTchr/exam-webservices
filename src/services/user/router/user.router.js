import DefaultRouter from "../../default/router/default.router.js";
import UserController from "../controller/user.controller.js";

export default class UserRouter extends DefaultRouter {
    constructor() {
        super(new UserController());
    }
}
