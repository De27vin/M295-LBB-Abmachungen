const express = require('express');

const app = express();

const tasksRoute = require("./routes/tasks");
const swaggerRoute = require("./routes/swagger");

app.use("/tasks", tasksRoute);
app.use("/swagger", swaggerRoute);




const port = 2727;
app.listen(port, () => {
    console.log("Server läuft auf localhost:2727");
});

