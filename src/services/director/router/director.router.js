import DefaultRouter from "../../default/router/default.router.js";
import DirectorController from "../controller/director.controller.js";

export default class DirectorRouter extends DefaultRouter {
    constructor() {
        super(new DirectorController());
    }
}
