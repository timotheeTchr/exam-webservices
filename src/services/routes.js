import { Router } from "express";

import UserRouter from "./user/router/user.router.js";
import DirectorRouter from "./director/router/director.router.js";
import ScenarioRouter from "./scenario/router/scenario.router.js";
import MovieRouter from "./movie/router/movie.router.js";
import ActorRouter from "./actor/router/actor.router.js";

export default () => {
    let router = Router();

    router.use("/users", new UserRouter().getRouter());
    router.use("/directors", new DirectorRouter().getRouter());
    router.use("/scenarios", new ScenarioRouter().getRouter());
    router.use("/movies", new MovieRouter().getRouter());
    router.use("/actors", new ActorRouter().getRouter());

    return router;
};
