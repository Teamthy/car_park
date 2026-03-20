const express = require("express");
const app = express();

app.use(express.json());
app.use("/api", require("./routes/parkingRoutes"));
app.use(require("./middleware/errorMiddleware"));

module.exports = app;