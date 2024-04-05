import { Router } from "express";

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
        this.retrieveEndpoint();
        this.createEndpoint();
        this.updateEndpoint();
        this.deleteEndpoint();
    }

    listEndpoint() {
        this.router.get("/", (req, res) => {
            this.Controller.getAll()
                .then((response) => {
                    res.status(response.code).json(response.result);
                })
                .catch((err) => res.status(500).send({ msg: err.message }));
        });
    }

    retrieveEndpoint() {
        this.router.get("/:id", (req, res) => {
            this.Controller.getById(req.params.id)
                .then((response) => {
                    res.status(response.code).json(response.result);
                })
                .catch((err) => {
                    res.status(500).send({ msg: err.message });
                });
        });
    }

    createEndpoint() {
        this.router.post("/", (req, res) => {
            this.Controller.create(req.body)
                .then((response) => {
                    res.status(response.code).send(response.result);
                })
                .catch((err) => {
                    res.status(500).send({ msg: err.message });
                });
        });
    }

    updateEndpoint() {
        this.router.put("/:id", (req, res) => {
            this.Controller.update(req.params.id, req.body)
                .then((response) => {
                    res.status(response.code).send(response.result);
                })
                .catch((err) => {
                    res.status(500).send({ msg: err.message });
                });
        });
    }

    deleteEndpoint() {
        this.router.delete("/:id", (req, res) => {
            this.Controller.delete(req.params.id)
                .then((response) => {
                    res.status(response.code).send(response.result);
                })
                .catch((err) => {
                    res.status(500).send({ msg: err.message });
                });
        });
    }
}
