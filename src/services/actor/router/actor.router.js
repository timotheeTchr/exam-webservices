import DefaultRouter from "../../default/router/default.router.js";
import ActorController from "../controller/actor.controller.js";

export default class ActorRouter extends DefaultRouter {
    constructor() {
        super(new ActorController());
    }
}
