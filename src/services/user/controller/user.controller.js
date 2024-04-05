import DefaultController from "../../default/controller/default.controller.js";
import { UserModel } from "../../../models/models.js";

export default class UserController extends DefaultController {
    constructor() {
        super(UserModel);
    }
}
