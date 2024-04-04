import DefaultController from "../../default/controller/default.controller.js";
import { UserModel } from "../model/user.model.js";

export default class UserController extends DefaultController {
    constructor() {
        super(UserModel);
    }
}
