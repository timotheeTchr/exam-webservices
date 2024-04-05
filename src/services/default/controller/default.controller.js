export default class DefaultController {
    Model = null;

    constructor(_Model) {
        this.Model = _Model;
    }

    async getAll() {
        const data = await this.Model.findAll();

        if (data.length > 0) {
            return {
                code: 200,
                result: {
                    data: data,
                },
            };
        } else {
            return {
                code: 204,
                result: {
                    msg: "No data found !",
                },
            };
        }
    }

    async getById(_id) {
        const data = await this.Model.findOne({ where: { id: _id } });

        if (data !== null) {
            return {
                code: 200,
                result: {
                    data: data,
                },
            };
        } else {
            return {
                code: 204,
                result: {
                    msg: "No data found !",
                },
            };
        }
    }

    async create(_body) {
        const data = await this.Model.create(_body);

        return {
            code: 201,
            result: {
                data: data,
                msg: "User created successfully",
            },
        };
    }

    async update(_id, _body) {
        const data = await this.Model.update(_body, { where: { id: _id } });

        return {
            code: 200,
            result: {
                msg: "User updated successfully !",
            },
        };
    }

    async delete(_id) {
        const data = await this.Model.destroy({ where: { id: _id } });

        return {
            code: 200,
            result: {
                msg: "User has been deleted !",
            },
        };
    }
}
