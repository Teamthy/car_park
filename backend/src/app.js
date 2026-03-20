const express = require("express");
const router = require("./routes/parkingRoutes");
const app = express();

app.use(express.json());
app.use("/api", require("./routes/parkingRoutes"));
app.use(require("./middleware/errorMiddleware"));

module.exports = router;