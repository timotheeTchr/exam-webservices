import DefaultRouter from "../../default/router/default.router.js";
import UserController from "../controller/user.controller.js";

const userController = new UserController();

export default class UserRouter extends DefaultRouter {
    constructor() {
        super(userController);
    }

    beforeRouteLoad() {
        this.disableAllCrudOperation();
    }

    customEndpoints() {
        this.router.post("/register", (req, res) => {
            userController
                .register(req.body)
                .then((response) => {
                    res.status(response.code).json(response.result);
                })
                .catch((err) => {
                    response.status(500).send({ msg: err.message });
                });
        });

        this.router.get("/login", (req, res) => {
            
        })
    }
}
