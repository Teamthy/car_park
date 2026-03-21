require("dotenv").config();
const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const { startSocket } = require("./socket");

(async () => {
    await connectDB();

    const server = http.createServer(app);

    startSocket(server);

    server.listen(process.env.PORT || 5000, () => {
        console.log("Server + Socket running...");
    });
})();