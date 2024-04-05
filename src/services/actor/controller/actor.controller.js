import DefaultController from "../../default/controller/default.controller.js";
import { ActorModel } from "../../../models/models.js";

export default class ActorController extends DefaultController {
    constructor() {
        super(ActorModel);
    }
}
