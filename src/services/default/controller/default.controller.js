export default class DefaultController {
    Model = null;

    constructor(_Model) {
        this.Model = _Model;
    }

    async getAll() {
        const users = await this.Model.findAll();

        if (users.length > 0) {
            return {
                code: 200,
                data: users,
            };
        }
        // this.Model.findAll()
        //     .then((data) => res.json(data))
        //     .catch((err) => {
        //         res.status(500).send({ message: err.message || "Une erreur s'est produite lors de la récupération des données." });
        //     });
        // User.findAll()
        //     .then((data) => res.json(data))
        //     .catch((err) => {
        //         res.status(500).send({ message: err.message || "Une erreur s'est produite lors de la récupération des données." });
        //     });
    }
}
