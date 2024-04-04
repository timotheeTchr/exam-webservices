import express from "express";
const app = express();

const URL = "http://localhost";
const PORT = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur le port ${PORT}.`);
    console.log(`URL : ${URL}:${PORT}`);
    console.log(`URL de la documentation : ${URL}:${PORT}/docs`);
});
