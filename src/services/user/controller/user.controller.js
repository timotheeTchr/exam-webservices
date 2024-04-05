import DefaultController from "../../default/controller/default.controller.js";
import { UserModel } from "../../../models/models.js";
import bcrypt from "bcrypt";

export default class UserController extends DefaultController {
    constructor() {
        super(UserModel);
    }

    async register(_body) {
        let data;
        const user = await UserModel.findOne({ where: { email: _body.email } });

        if (user !== null) {
            return {
                code: 200,
                result: {
                    msg: "User already exist !",
                },
            };
        }
        const saltRounds = 10;
        const password = _body.password;

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            data = await this.create({ email: _body.email, password: hash });
        });

        return {
            code: 201,
            result: {
                data: data,
                msg: "User created successfully",
            },
        };
    }

    // async login(_body) {
    //     const saltRounds = 10;
    //     const user = await UserModel.findOne({ where: { email: _body.email } });

    //     if (user !== null) {
    //         let isSamePassword;
    //         bcrypt.compare(_body.password, saltRounds, (err, result) => {
    //             if (result) {
    //             } else {
    //             }
    //         });

    //         return {
    //             code: 200,
    //             result: {
    //                 msg: "",
    //             },
    //         };
    //     } else {
    //         return {
    //             code: 204,
    //             result: {
    //                 msg: "No data found",
    //             },
    //         };
    //     }
    // }
}
