import DefaultController from "../../default/controller/default.controller.js";
import { DirectorModel } from "../../../models/models.js";

export default class DirectorController extends DefaultController {
    constructor() {
        super(DirectorModel);
    }
}
