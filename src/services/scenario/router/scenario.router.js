import DefaultRouter from "../../default/router/default.router.js";
import ScenarioController from "../controller/scenario.controller.js";

export default class ScenarioRouter extends DefaultRouter {
    constructor() {
        super(new ScenarioController());
    }
}
