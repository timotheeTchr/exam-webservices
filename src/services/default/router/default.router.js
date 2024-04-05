import { Router } from "express";

export default class DefaultRouter {
    router = null;
    Controller = null;
    enabledCrudOperations = [];
    authorizedCrudOperations = ["create", "update", "delete", "list", "retrieve"];

    constructor(_Controller) {
        this.router = Router();
        this.Controller = _Controller;
        this.enabledCrudOperations = this.authorizedCrudOperations;

        this.beforeRouteLoad();

        this.crudEnpoints();

        this.customEndpoints();
    }

    beforeRouteLoad() {}

    getRouter() {
        return this.router;
    }

    crudEnpoints() {
        if (this.enabledCrudOperations.includes("list")) {
            this.listEndpoint();
        }
        if (this.enabledCrudOperations.includes("retrieve")) {
            this.retrieveEndpoint();
        }
        if (this.enabledCrudOperations.includes("create")) {
            this.createEndpoint();
        }
        if (this.enabledCrudOperations.includes("update")) {
            this.updateEndpoint();
        }
        if (this.enabledCrudOperations.includes("delete")) {
            this.deleteEndpoint();
        }
    }

    disableAllCrudOperation(_operation) {
        this.enabledCrudOperations = [];
    }

    disableCrudOperation(_operation) {
        const index = this.enabledCrudOperations.indexOf(_operation);
        if (index > -1) {
            this.enabledCrudOperations.splice(index, 1);
        }
    }

    customEndpoints() {}

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
