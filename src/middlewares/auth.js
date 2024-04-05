import { app } from "../server";

app.use((req, res, next) => {
    const authheader = req.headers["authorization"];
    const token = authheader && authheader.split(" ")[1];

    if (token == null) {
        return res.status(401).send("No token found");
    }

    jwt.verify(token, "secret_key", (err, decoded) => {
        if (err) {
            res.status(401).send("Invalid token !");
        }
        next();
    });
});
