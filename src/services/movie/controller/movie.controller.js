import DefaultController from "../../default/controller/default.controller.js";
import { MovieModel } from "../../../models/models.js";

export default class MovieController extends DefaultController {
    constructor() {
        super(MovieModel);
    }
}
