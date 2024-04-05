import DefaultRouter from "../../default/router/default.router.js";
import MovieController from "../controller/movie.controller.js";

export default class MovieRouter extends DefaultRouter {
    constructor() {
        super(new MovieController());
    }
}
