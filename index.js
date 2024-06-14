const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const tasksRoute = require("./routes/tasks");
const verificationRoute = require("./routes/verification");
const swaggerRoute = require("./routes/swagger");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/tasks", tasksRoute);
app.use("/", verificationRoute);
app.use("/swagger", swaggerRoute);

const port = 2727;
app.listen(port, () => {
    console.log("Server läuft auf localhost:2727");
});

