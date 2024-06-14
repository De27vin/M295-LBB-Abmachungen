const express = required('express');

const app = express();

const tasksRoute = require("./routes/tasks");
const swaggerRoute = require("./routes/swagger");

app.use("/tasks", tasksRoute);
app.use("/swagger", swaggerRoute);




const port = 3000;
app.listen(port, () => {
    console.log("Server läuft auf localhost:3000");
});

