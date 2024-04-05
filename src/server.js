import express from "express";
import router from "./services/routes.js";
export const app = express();

const URL = "http://localhost";
const PORT = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Access-Control-Expose-Headers", "X-Api-Version, X-Request-Id, X-Response-Time");
    res.setHeader("Access-Control-Max-Age", "1000");
    res.setHeader("Referrer-Policy", "no-referrer");
    next();
});

app.use("/api", router());

app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur le port ${PORT}.`);
    console.log(`URL : ${URL}:${PORT}`);
});
