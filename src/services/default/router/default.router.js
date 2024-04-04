import { Router, response } from "express";

export default class DefaultRouter {
    router = null;
    Controller = null;

    constructor(_Controller) {
        this.router = Router();
        this.Controller = _Controller;

        this.crudEnpoints();
    }

    getRouter() {
        return this.router;
    }

    crudEnpoints() {
        this.listEndpoint();
    }

    listEndpoint() {
        this.router.get("/", (req, res) => {
            this.Controller.getAll()
                .then((response) => {
                    res.status(response.code).json(response.data);
                })
                .catch((err) => res.status(500).send({ msg: err.message }));
        });
    }
}
