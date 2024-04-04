import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("exam-webservices", "user", "user", {
    host: "mysql",
    dialect: "mysql",
});
