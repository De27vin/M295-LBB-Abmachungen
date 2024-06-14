const express = require("express");
const bodyParser = require("body-parser");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const app = express();

const tasksRoute = require("./routes/tasks");
const verificationRoute = require("./routes/verification");
const swaggerRoute = require("./docs/swagger");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/tasks", tasksRoute);
app.use("/", verificationRoute);
app.use("/swagger", swaggerRoute);

const port = 2727;
app.listen(port, () => {
    console.log("Server läuft auf localhost:2727");
});

