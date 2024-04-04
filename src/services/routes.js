import { Router } from "express";

import UserRouter from "./user/router/user.router.js";

export default () => {
    let router = Router();

    router.use("/users", new UserRouter().getRouter());

    return router;
};
