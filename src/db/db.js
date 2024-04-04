import mysql from "mysql2";
import { dbConfig } from "../config/db.config.js";

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

connection.connect((error) => {
    if (error) throw error;
    console.log("Connexion à la BDD avec succès.");
});

export default connection;
