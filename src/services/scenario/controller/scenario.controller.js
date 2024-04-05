import DefaultController from "../../default/controller/default.controller.js";
import { ScenarioModel } from "../../../models/models.js";

export default class ScenarioController extends DefaultController {
    constructor() {
        super(ScenarioModel);
    }
}
